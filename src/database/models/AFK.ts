// ===========================================
// ASTRA BOT - AFK Model
// ===========================================

import mongoose, { Schema, Document } from 'mongoose';

export interface IAFK {
  guildId: string;
  userId: string;
  reason: string;
  timestamp: Date;
  mentions: number; // Count of mentions while AFK
}

export interface IAFKDocument extends IAFK, Document {}

const AFKSchema = new Schema<IAFKDocument>({
  guildId: { type: String, required: true },
  userId: { type: String, required: true },
  reason: { type: String, default: 'AFK' },
  timestamp: { type: Date, default: Date.now },
  mentions: { type: Number, default: 0 },
}, {
  timestamps: true,
});

// Compound unique index
AFKSchema.index({ guildId: 1, userId: 1 }, { unique: true });

export const AFKModel = mongoose.model<IAFKDocument>('AFK', AFKSchema);
