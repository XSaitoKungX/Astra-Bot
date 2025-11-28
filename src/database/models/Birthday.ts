// ===========================================
// ASTRA BOT - Birthday Model
// ===========================================

import mongoose, { Schema, Document, Model } from 'mongoose';

// ============================================
// Interface Definitions
// ============================================

export interface IBirthday {
  userId: string;
  guildId: string;
  day: number;
  month: number;
  year?: number;
  timezone?: string;
  lastCelebrated?: Date;
  wishMessage?: string; // Custom birthday message
  announced?: boolean; // Whether birthday was announced this year
}

export interface IBirthdayDocument extends IBirthday, Document {
  // Instance methods
  getAge(): number | null;
  getNextBirthday(): Date;
  getDaysUntil(): number;
  isBirthdayToday(): boolean;
  markCelebrated(): Promise<void>;
  getFormattedDate(): string;
}

export interface IBirthdayModel extends Model<IBirthdayDocument> {
  // Static methods
  setBirthday(guildId: string, userId: string, day: number, month: number, year?: number): Promise<IBirthdayDocument>;
  removeBirthday(guildId: string, userId: string): Promise<IBirthdayDocument | null>;
  getBirthday(guildId: string, userId: string): Promise<IBirthdayDocument | null>;
  getTodaysBirthdays(guildId: string): Promise<IBirthdayDocument[]>;
  getUpcoming(guildId: string, days?: number): Promise<IBirthdayDocument[]>;
  getByMonth(guildId: string, month: number): Promise<IBirthdayDocument[]>;
  markAllCelebrated(guildId: string, userIds: string[]): Promise<void>;
}

// ============================================
// Constants
// ============================================

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// ============================================
// Schema Definition
// ============================================

const BirthdaySchema = new Schema<IBirthdayDocument, IBirthdayModel>({
  userId: { type: String, required: true, index: true },
  guildId: { type: String, required: true, index: true },
  day: { type: Number, required: true, min: 1, max: 31 },
  month: { type: Number, required: true, min: 1, max: 12 },
  year: { type: Number, min: 1900, max: new Date().getFullYear() },
  timezone: { type: String, default: 'UTC' },
  lastCelebrated: { type: Date },
  wishMessage: { type: String, maxlength: 500 },
  announced: { type: Boolean, default: false },
}, {
  timestamps: true,
});

// ============================================
// Indexes
// ============================================

BirthdaySchema.index({ guildId: 1, userId: 1 }, { unique: true });
BirthdaySchema.index({ day: 1, month: 1 });
BirthdaySchema.index({ guildId: 1, month: 1 });

// ============================================
// Instance Methods
// ============================================

BirthdaySchema.methods.getAge = function(): number | null {
  if (!this.year) return null;
  const today = new Date();
  let age = today.getFullYear() - this.year;
  const hadBirthday = today >= new Date(today.getFullYear(), this.month - 1, this.day);
  return hadBirthday ? age : age - 1;
};

BirthdaySchema.methods.getNextBirthday = function(): Date {
  const now = new Date();
  let nextBirthday = new Date(now.getFullYear(), this.month - 1, this.day);
  if (nextBirthday < now) {
    nextBirthday = new Date(now.getFullYear() + 1, this.month - 1, this.day);
  }
  return nextBirthday;
};

BirthdaySchema.methods.getDaysUntil = function(): number {
  const next = this.getNextBirthday();
  const now = new Date();
  return Math.ceil((next.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
};

BirthdaySchema.methods.isBirthdayToday = function(): boolean {
  const today = new Date();
  return this.day === today.getDate() && this.month === today.getMonth() + 1;
};

BirthdaySchema.methods.markCelebrated = async function(): Promise<void> {
  this.lastCelebrated = new Date();
  this.announced = true;
  await this.save();
};

BirthdaySchema.methods.getFormattedDate = function(): string {
  return this.year 
    ? `${MONTHS[this.month - 1]} ${this.day}, ${this.year}`
    : `${MONTHS[this.month - 1]} ${this.day}`;
};

// ============================================
// Static Methods
// ============================================

BirthdaySchema.statics.setBirthday = async function(
  guildId: string,
  userId: string,
  day: number,
  month: number,
  year?: number
): Promise<IBirthdayDocument> {
  return this.findOneAndUpdate(
    { guildId, userId },
    { day, month, year, announced: false },
    { upsert: true, new: true }
  );
};

BirthdaySchema.statics.removeBirthday = async function(
  guildId: string,
  userId: string
): Promise<IBirthdayDocument | null> {
  return this.findOneAndDelete({ guildId, userId });
};

BirthdaySchema.statics.getBirthday = async function(
  guildId: string,
  userId: string
): Promise<IBirthdayDocument | null> {
  return this.findOne({ guildId, userId });
};

BirthdaySchema.statics.getTodaysBirthdays = async function(
  guildId: string
): Promise<IBirthdayDocument[]> {
  const today = new Date();
  return this.find({
    guildId,
    day: today.getDate(),
    month: today.getMonth() + 1,
  });
};

BirthdaySchema.statics.getUpcoming = async function(
  guildId: string,
  days = 30
): Promise<IBirthdayDocument[]> {
  const birthdays = await this.find({ guildId });
  const now = new Date();
  
  return birthdays
    .map(b => ({ doc: b, daysUntil: b.getDaysUntil() }))
    .filter(({ daysUntil }) => daysUntil <= days && daysUntil >= 0)
    .sort((a, b) => a.daysUntil - b.daysUntil)
    .map(({ doc }) => doc);
};

BirthdaySchema.statics.getByMonth = async function(
  guildId: string,
  month: number
): Promise<IBirthdayDocument[]> {
  return this.find({ guildId, month }).sort({ day: 1 });
};

BirthdaySchema.statics.markAllCelebrated = async function(
  guildId: string,
  userIds: string[]
): Promise<void> {
  await this.updateMany(
    { guildId, userId: { $in: userIds } },
    { lastCelebrated: new Date(), announced: true }
  );
};

// ============================================
// Export Model
// ============================================

export const BirthdayModel = mongoose.model<IBirthdayDocument, IBirthdayModel>('Birthday', BirthdaySchema);
