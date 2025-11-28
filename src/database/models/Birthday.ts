// ===========================================
// ASTRA BOT - Birthday Model
// ===========================================

import mongoose, { Schema, Document } from 'mongoose';

export interface IBirthday {
  userId: string;
  guildId: string;
  day: number; // 1-31
  month: number; // 1-12
  year?: number; // Optional birth year
  timezone?: string; // Timezone for accurate celebration
  lastCelebrated?: Date; // To prevent duplicate celebrations
}

export interface IBirthdayDocument extends IBirthday, Document {}

const BirthdaySchema = new Schema<IBirthdayDocument>({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  day: { type: Number, required: true, min: 1, max: 31 },
  month: { type: Number, required: true, min: 1, max: 12 },
  year: { type: Number, min: 1900, max: new Date().getFullYear() },
  timezone: { type: String, default: 'UTC' },
  lastCelebrated: { type: Date },
}, {
  timestamps: true,
});

// Compound unique index
BirthdaySchema.index({ guildId: 1, userId: 1 }, { unique: true });
// Index for daily birthday checks
BirthdaySchema.index({ day: 1, month: 1 });

export const BirthdayModel = mongoose.model<IBirthdayDocument>('Birthday', BirthdaySchema);
