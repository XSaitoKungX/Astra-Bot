// ===========================================
// ASTRA BOT - Starboard Model
// ===========================================

import mongoose, { Schema, Document } from 'mongoose';

export interface IStarboardEntry {
  guildId: string;
  originalMessageId: string;
  originalChannelId: string;
  starboardMessageId: string;
  authorId: string;
  starCount: number;
  starredBy: string[]; // User IDs who starred
}

export interface IStarboardEntryDocument extends IStarboardEntry, Document {}

const StarboardEntrySchema = new Schema<IStarboardEntryDocument>({
  guildId: { type: String, required: true, index: true },
  originalMessageId: { type: String, required: true, unique: true },
  originalChannelId: { type: String, required: true },
  starboardMessageId: { type: String, required: true },
  authorId: { type: String, required: true },
  starCount: { type: Number, default: 0 },
  starredBy: [{ type: String }],
}, {
  timestamps: true,
});

export const StarboardEntryModel = mongoose.model<IStarboardEntryDocument>('StarboardEntry', StarboardEntrySchema);
