// ===========================================
// ASTRA BOT - Custom Command Model
// ===========================================

import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomCommand {
  guildId: string;
  name: string; // Command trigger (without prefix)
  response: string; // Text response
  embedData?: {
    title?: string;
    description?: string;
    color?: number;
    thumbnail?: string;
    image?: string;
    footer?: string;
  };
  enabled: boolean;
  createdBy: string;
  usageCount: number;
  allowedRoles?: string[]; // Roles that can use this command
  allowedChannels?: string[]; // Channels where command works
  cooldown?: number; // Seconds
  deleteCommand?: boolean; // Delete the trigger message
}

export interface ICustomCommandDocument extends ICustomCommand, Document {}

const CustomCommandSchema = new Schema<ICustomCommandDocument>({
  guildId: { type: String, required: true, index: true },
  name: { type: String, required: true, lowercase: true, maxlength: 32 },
  response: { type: String, required: true, maxlength: 2000 },
  embedData: {
    title: { type: String, maxlength: 256 },
    description: { type: String, maxlength: 4096 },
    color: { type: Number },
    thumbnail: { type: String },
    image: { type: String },
    footer: { type: String, maxlength: 2048 },
  },
  enabled: { type: Boolean, default: true },
  createdBy: { type: String, required: true },
  usageCount: { type: Number, default: 0 },
  allowedRoles: [{ type: String }],
  allowedChannels: [{ type: String }],
  cooldown: { type: Number, default: 0, min: 0, max: 3600 },
  deleteCommand: { type: Boolean, default: false },
}, {
  timestamps: true,
});

// Compound unique index
CustomCommandSchema.index({ guildId: 1, name: 1 }, { unique: true });

export const CustomCommandModel = mongoose.model<ICustomCommandDocument>('CustomCommand', CustomCommandSchema);
