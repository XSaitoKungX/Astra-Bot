// ===========================================
// ASTRA BOT - Reminder Model
// ===========================================

import mongoose, { Schema, Document } from 'mongoose';

export interface IReminder {
  userId: string;
  guildId?: string; // Optional, can be DM
  channelId: string;
  message: string;
  remindAt: Date;
  createdAt: Date;
  recurring?: 'daily' | 'weekly' | 'monthly' | null;
}

export interface IReminderDocument extends IReminder, Document {}

const ReminderSchema = new Schema<IReminderDocument>({
  userId: { type: String, required: true, index: true },
  guildId: { type: String },
  channelId: { type: String, required: true },
  message: { type: String, required: true, maxlength: 1000 },
  remindAt: { type: Date, required: true, index: true },
  createdAt: { type: Date, default: Date.now },
  recurring: { 
    type: String, 
    enum: ['daily', 'weekly', 'monthly', null],
    default: null
  },
}, {
  timestamps: true,
});

export const ReminderModel = mongoose.model<IReminderDocument>('Reminder', ReminderSchema);
