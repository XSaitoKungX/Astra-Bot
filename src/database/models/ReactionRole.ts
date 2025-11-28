// ===========================================
// ASTRA BOT - Reaction Role Model
// ===========================================

import mongoose, { Schema, Document, Model } from 'mongoose';

// ============================================
// Types
// ============================================

export type ReactionRoleType = 'normal' | 'unique' | 'verify' | 'drop' | 'binding' | 'limit';

// ============================================
// Interface Definitions
// ============================================

export interface IReactionRole {
  guildId: string;
  channelId: string;
  messageId: string;
  emoji: string;
  emojiName?: string; // For display purposes
  roleId: string;
  type: ReactionRoleType;
  description?: string;
  requiredRoles?: string[]; // Roles required to use this reaction role
  blacklistedRoles?: string[]; // Roles that cannot use this
  maxUses?: number; // For 'limit' type
  currentUses?: number;
  createdBy: string;
}

export interface IReactionRoleDocument extends IReactionRole, Document {
  // Instance methods
  canUse(memberRoles: string[]): boolean;
  incrementUses(): Promise<boolean>;
  isAtLimit(): boolean;
}

export interface IReactionRoleModel extends Model<IReactionRoleDocument> {
  // Static methods
  addReactionRole(data: Partial<IReactionRole>): Promise<IReactionRoleDocument>;
  removeReactionRole(messageId: string, emoji: string): Promise<IReactionRoleDocument | null>;
  getByMessage(messageId: string): Promise<IReactionRoleDocument[]>;
  getByGuild(guildId: string): Promise<IReactionRoleDocument[]>;
  getByRole(guildId: string, roleId: string): Promise<IReactionRoleDocument[]>;
  findReactionRole(messageId: string, emoji: string): Promise<IReactionRoleDocument | null>;
  deleteByMessage(messageId: string): Promise<number>;
  deleteByChannel(channelId: string): Promise<number>;
  countByGuild(guildId: string): Promise<number>;
}

// ============================================
// Schema Definition
// ============================================

const ReactionRoleSchema = new Schema<IReactionRoleDocument, IReactionRoleModel>({
  guildId: { type: String, required: true, index: true },
  channelId: { type: String, required: true, index: true },
  messageId: { type: String, required: true, index: true },
  emoji: { type: String, required: true },
  emojiName: { type: String },
  roleId: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['normal', 'unique', 'verify', 'drop', 'binding', 'limit'],
    default: 'normal'
  },
  description: { type: String, maxlength: 200 },
  requiredRoles: [{ type: String }],
  blacklistedRoles: [{ type: String }],
  maxUses: { type: Number, min: 1 },
  currentUses: { type: Number, default: 0 },
  createdBy: { type: String, required: true },
}, {
  timestamps: true,
});

// ============================================
// Indexes
// ============================================

ReactionRoleSchema.index({ messageId: 1, emoji: 1 }, { unique: true });
ReactionRoleSchema.index({ guildId: 1, roleId: 1 });

// ============================================
// Instance Methods
// ============================================

ReactionRoleSchema.methods.canUse = function(memberRoles: string[]): boolean {
  // Check blacklist
  if (this.blacklistedRoles?.some((r: string) => memberRoles.includes(r))) {
    return false;
  }
  
  // Check required roles
  if (this.requiredRoles?.length) {
    return this.requiredRoles.some((r: string) => memberRoles.includes(r));
  }
  
  return true;
};

ReactionRoleSchema.methods.incrementUses = async function(): Promise<boolean> {
  if (this.type !== 'limit' || !this.maxUses) return true;
  
  if (this.currentUses >= this.maxUses) return false;
  
  this.currentUses += 1;
  await this.save();
  return true;
};

ReactionRoleSchema.methods.isAtLimit = function(): boolean {
  if (this.type !== 'limit' || !this.maxUses) return false;
  return this.currentUses >= this.maxUses;
};

// ============================================
// Static Methods
// ============================================

ReactionRoleSchema.statics.addReactionRole = async function(
  data: Partial<IReactionRole>
): Promise<IReactionRoleDocument> {
  return this.findOneAndUpdate(
    { messageId: data.messageId, emoji: data.emoji },
    data,
    { upsert: true, new: true }
  );
};

ReactionRoleSchema.statics.removeReactionRole = async function(
  messageId: string,
  emoji: string
): Promise<IReactionRoleDocument | null> {
  return this.findOneAndDelete({ messageId, emoji });
};

ReactionRoleSchema.statics.getByMessage = async function(
  messageId: string
): Promise<IReactionRoleDocument[]> {
  return this.find({ messageId });
};

ReactionRoleSchema.statics.getByGuild = async function(
  guildId: string
): Promise<IReactionRoleDocument[]> {
  return this.find({ guildId }).sort({ createdAt: -1 });
};

ReactionRoleSchema.statics.getByRole = async function(
  guildId: string,
  roleId: string
): Promise<IReactionRoleDocument[]> {
  return this.find({ guildId, roleId });
};

ReactionRoleSchema.statics.findReactionRole = async function(
  messageId: string,
  emoji: string
): Promise<IReactionRoleDocument | null> {
  return this.findOne({ messageId, emoji });
};

ReactionRoleSchema.statics.deleteByMessage = async function(
  messageId: string
): Promise<number> {
  const result = await this.deleteMany({ messageId });
  return result.deletedCount;
};

ReactionRoleSchema.statics.deleteByChannel = async function(
  channelId: string
): Promise<number> {
  const result = await this.deleteMany({ channelId });
  return result.deletedCount;
};

ReactionRoleSchema.statics.countByGuild = async function(
  guildId: string
): Promise<number> {
  return this.countDocuments({ guildId });
};

// ============================================
// Export Model
// ============================================

export const ReactionRoleModel = mongoose.model<IReactionRoleDocument, IReactionRoleModel>('ReactionRole', ReactionRoleSchema);
