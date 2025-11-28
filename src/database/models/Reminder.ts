// ===========================================
// ASTRA BOT - Reminder Model
// ===========================================

import mongoose, { Schema, Document, Model } from 'mongoose';

// ============================================
// Types
// ============================================

export type RecurringType = 'daily' | 'weekly' | 'monthly' | 'yearly' | null;

// ============================================
// Interface Definitions
// ============================================

export interface IReminder {
  userId: string;
  guildId?: string;
  channelId: string;
  messageId?: string; // Original message ID for context
  message: string;
  remindAt: Date;
  createdAt: Date;
  recurring: RecurringType;
  timesTriggered?: number;
  maxTriggers?: number; // For recurring, max times to trigger
  private?: boolean; // Send as DM instead of channel
  completed?: boolean;
  snoozedUntil?: Date;
  snoozeCount?: number;
}

export interface IReminderDocument extends IReminder, Document {
  // Instance methods
  markCompleted(): Promise<void>;
  snooze(minutes: number): Promise<void>;
  reschedule(newDate: Date): Promise<void>;
  getTimeUntil(): number;
  getFormattedTimeUntil(): string;
  shouldTrigger(): boolean;
}

export interface IReminderModel extends Model<IReminderDocument> {
  // Static methods
  createReminder(userId: string, channelId: string, message: string, remindAt: Date, guildId?: string): Promise<IReminderDocument>;
  deleteReminder(id: string, userId: string): Promise<IReminderDocument | null>;
  getUserReminders(userId: string, limit?: number): Promise<IReminderDocument[]>;
  getDueReminders(): Promise<IReminderDocument[]>;
  clearUserReminders(userId: string): Promise<number>;
  countUserReminders(userId: string): Promise<number>;
  getUpcoming(userId: string, hours?: number): Promise<IReminderDocument[]>;
}

// ============================================
// Schema Definition
// ============================================

const ReminderSchema = new Schema<IReminderDocument, IReminderModel>({
  userId: { type: String, required: true, index: true },
  guildId: { type: String },
  channelId: { type: String, required: true },
  messageId: { type: String },
  message: { type: String, required: true, maxlength: 1000 },
  remindAt: { type: Date, required: true, index: true },
  createdAt: { type: Date, default: Date.now },
  recurring: { 
    type: String, 
    enum: ['daily', 'weekly', 'monthly', 'yearly', null],
    default: null
  },
  timesTriggered: { type: Number, default: 0 },
  maxTriggers: { type: Number },
  private: { type: Boolean, default: false },
  completed: { type: Boolean, default: false },
  snoozedUntil: { type: Date },
  snoozeCount: { type: Number, default: 0 },
}, {
  timestamps: true,
});

// ============================================
// Indexes
// ============================================

ReminderSchema.index({ remindAt: 1, completed: 1 });
ReminderSchema.index({ userId: 1, completed: 1 });

// ============================================
// Instance Methods
// ============================================

ReminderSchema.methods.markCompleted = async function(): Promise<void> {
  if (this.recurring && (!this.maxTriggers || this.timesTriggered < this.maxTriggers)) {
    // Reschedule for next occurrence
    this.timesTriggered += 1;
    const nextDate = new Date(this.remindAt);
    
    switch (this.recurring) {
      case 'daily': nextDate.setDate(nextDate.getDate() + 1); break;
      case 'weekly': nextDate.setDate(nextDate.getDate() + 7); break;
      case 'monthly': nextDate.setMonth(nextDate.getMonth() + 1); break;
      case 'yearly': nextDate.setFullYear(nextDate.getFullYear() + 1); break;
    }
    
    this.remindAt = nextDate;
    this.snoozedUntil = undefined;
    await this.save();
  } else {
    this.completed = true;
    await this.save();
  }
};

ReminderSchema.methods.snooze = async function(minutes: number): Promise<void> {
  this.snoozedUntil = new Date(Date.now() + minutes * 60 * 1000);
  this.snoozeCount += 1;
  await this.save();
};

ReminderSchema.methods.reschedule = async function(newDate: Date): Promise<void> {
  this.remindAt = newDate;
  this.snoozedUntil = undefined;
  await this.save();
};

ReminderSchema.methods.getTimeUntil = function(): number {
  const target = this.snoozedUntil || this.remindAt;
  return target.getTime() - Date.now();
};

ReminderSchema.methods.getFormattedTimeUntil = function(): string {
  const ms = this.getTimeUntil();
  if (ms < 0) return 'overdue';
  
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ${hours % 24}h`;
  if (hours > 0) return `${hours}h ${minutes % 60}m`;
  if (minutes > 0) return `${minutes}m`;
  return `${seconds}s`;
};

ReminderSchema.methods.shouldTrigger = function(): boolean {
  if (this.completed) return false;
  const target = this.snoozedUntil || this.remindAt;
  return Date.now() >= target.getTime();
};

// ============================================
// Static Methods
// ============================================

ReminderSchema.statics.createReminder = async function(
  userId: string,
  channelId: string,
  message: string,
  remindAt: Date,
  guildId?: string
): Promise<IReminderDocument> {
  return this.create({ userId, channelId, message, remindAt, guildId });
};

ReminderSchema.statics.deleteReminder = async function(
  id: string,
  userId: string
): Promise<IReminderDocument | null> {
  return this.findOneAndDelete({ _id: id, userId });
};

ReminderSchema.statics.getUserReminders = async function(
  userId: string,
  limit = 25
): Promise<IReminderDocument[]> {
  return this.find({ userId, completed: false })
    .sort({ remindAt: 1 })
    .limit(limit);
};

ReminderSchema.statics.getDueReminders = async function(): Promise<IReminderDocument[]> {
  const now = new Date();
  return this.find({
    completed: false,
    $or: [
      { remindAt: { $lte: now }, snoozedUntil: { $exists: false } },
      { snoozedUntil: { $lte: now } },
    ],
  });
};

ReminderSchema.statics.clearUserReminders = async function(
  userId: string
): Promise<number> {
  const result = await this.deleteMany({ userId });
  return result.deletedCount;
};

ReminderSchema.statics.countUserReminders = async function(
  userId: string
): Promise<number> {
  return this.countDocuments({ userId, completed: false });
};

ReminderSchema.statics.getUpcoming = async function(
  userId: string,
  hours = 24
): Promise<IReminderDocument[]> {
  const now = new Date();
  const future = new Date(now.getTime() + hours * 60 * 60 * 1000);
  
  return this.find({
    userId,
    completed: false,
    remindAt: { $gte: now, $lte: future },
  }).sort({ remindAt: 1 });
};

// ============================================
// Export Model
// ============================================

export const ReminderModel = mongoose.model<IReminderDocument, IReminderModel>('Reminder', ReminderSchema);
