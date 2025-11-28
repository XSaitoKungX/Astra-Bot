// ===========================================
// ASTRA BOT - Reaction Role Model
// ===========================================

import mongoose, { Schema, Document } from 'mongoose';

export interface IReactionRole {
  guildId: string;
  channelId: string;
  messageId: string;
  emoji: string; // Unicode emoji or custom emoji ID
  roleId: string;
  type: 'normal' | 'unique' | 'verify' | 'drop'; // normal: toggle, unique: one role per message, verify: one-time, drop: remove role
}

export interface IReactionRoleDocument extends IReactionRole, Document {}

const ReactionRoleSchema = new Schema<IReactionRoleDocument>({
  guildId: { type: String, required: true, index: true },
  channelId: { type: String, required: true },
  messageId: { type: String, required: true, index: true },
  emoji: { type: String, required: true },
  roleId: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['normal', 'unique', 'verify', 'drop'],
    default: 'normal'
  },
}, {
  timestamps: true,
});

// Compound index for quick lookups
ReactionRoleSchema.index({ messageId: 1, emoji: 1 }, { unique: true });

export const ReactionRoleModel = mongoose.model<IReactionRoleDocument>('ReactionRole', ReactionRoleSchema);
