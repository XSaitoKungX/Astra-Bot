// ===========================================
// ASTRA BOT - Custom Command Model
// ===========================================

import mongoose, { Schema, Document, Model } from 'mongoose';

// ============================================
// Interface Definitions
// ============================================

export interface ICustomCommandEmbed {
  title?: string;
  description?: string;
  color?: number;
  thumbnail?: string;
  image?: string;
  footer?: string;
  fields?: Array<{ name: string; value: string; inline?: boolean }>;
}

export interface ICustomCommand {
  guildId: string;
  name: string;
  aliases?: string[];
  response: string;
  embedData?: ICustomCommandEmbed;
  enabled: boolean;
  createdBy: string;
  updatedBy?: string;
  usageCount: number;
  lastUsed?: Date;
  allowedRoles?: string[];
  deniedRoles?: string[];
  allowedChannels?: string[];
  deniedChannels?: string[];
  cooldown?: number;
  deleteCommand?: boolean;
  dmResponse?: boolean;
  requireArgs?: boolean;
  minArgs?: number;
  description?: string;
}

export interface ICustomCommandDocument extends ICustomCommand, Document {
  // Instance methods
  incrementUsage(): Promise<void>;
  toggle(): Promise<boolean>;
  canUse(roleIds: string[], channelId: string): boolean;
  updateResponse(response: string, updatedBy: string): Promise<void>;
}

export interface ICustomCommandModel extends Model<ICustomCommandDocument> {
  // Static methods
  createCommand(guildId: string, name: string, response: string, createdBy: string): Promise<ICustomCommandDocument>;
  deleteCommand(guildId: string, name: string): Promise<ICustomCommandDocument | null>;
  getCommand(guildId: string, name: string): Promise<ICustomCommandDocument | null>;
  getCommands(guildId: string, enabledOnly?: boolean): Promise<ICustomCommandDocument[]>;
  searchCommands(guildId: string, query: string): Promise<ICustomCommandDocument[]>;
  getTopCommands(guildId: string, limit?: number): Promise<ICustomCommandDocument[]>;
  countCommands(guildId: string): Promise<number>;
}

// ============================================
// Schema Definition
// ============================================

const CustomCommandSchema = new Schema<ICustomCommandDocument, ICustomCommandModel>({
  guildId: { type: String, required: true, index: true },
  name: { type: String, required: true, lowercase: true, maxlength: 32 },
  aliases: [{ type: String, lowercase: true, maxlength: 32 }],
  response: { type: String, required: true, maxlength: 2000 },
  embedData: {
    title: { type: String, maxlength: 256 },
    description: { type: String, maxlength: 4096 },
    color: { type: Number },
    thumbnail: { type: String },
    image: { type: String },
    footer: { type: String, maxlength: 2048 },
    fields: [{
      name: { type: String, maxlength: 256 },
      value: { type: String, maxlength: 1024 },
      inline: { type: Boolean, default: false },
    }],
  },
  enabled: { type: Boolean, default: true },
  createdBy: { type: String, required: true },
  updatedBy: { type: String },
  usageCount: { type: Number, default: 0 },
  lastUsed: { type: Date },
  allowedRoles: [{ type: String }],
  deniedRoles: [{ type: String }],
  allowedChannels: [{ type: String }],
  deniedChannels: [{ type: String }],
  cooldown: { type: Number, default: 0, min: 0, max: 3600 },
  deleteCommand: { type: Boolean, default: false },
  dmResponse: { type: Boolean, default: false },
  requireArgs: { type: Boolean, default: false },
  minArgs: { type: Number, default: 0, min: 0 },
  description: { type: String, maxlength: 200 },
}, {
  timestamps: true,
});

// ============================================
// Indexes
// ============================================

CustomCommandSchema.index({ guildId: 1, name: 1 }, { unique: true });
CustomCommandSchema.index({ guildId: 1, aliases: 1 });
CustomCommandSchema.index({ guildId: 1, usageCount: -1 });

// ============================================
// Instance Methods
// ============================================

CustomCommandSchema.methods.incrementUsage = async function(): Promise<void> {
  this.usageCount += 1;
  this.lastUsed = new Date();
  await this.save();
};

CustomCommandSchema.methods.toggle = async function(): Promise<boolean> {
  this.enabled = !this.enabled;
  await this.save();
  return this.enabled;
};

CustomCommandSchema.methods.canUse = function(roleIds: string[], channelId: string): boolean {
  // Check denied first
  if (this.deniedRoles?.some((r: string) => roleIds.includes(r))) return false;
  if (this.deniedChannels?.includes(channelId)) return false;
  
  // Check allowed (if specified)
  if (this.allowedRoles?.length && !this.allowedRoles.some((r: string) => roleIds.includes(r))) return false;
  if (this.allowedChannels?.length && !this.allowedChannels.includes(channelId)) return false;
  
  return true;
};

CustomCommandSchema.methods.updateResponse = async function(response: string, updatedBy: string): Promise<void> {
  this.response = response;
  this.updatedBy = updatedBy;
  await this.save();
};

// ============================================
// Static Methods
// ============================================

CustomCommandSchema.statics.createCommand = async function(
  guildId: string,
  name: string,
  response: string,
  createdBy: string
): Promise<ICustomCommandDocument> {
  return this.create({ guildId, name: name.toLowerCase(), response, createdBy });
};

CustomCommandSchema.statics.deleteCommand = async function(
  guildId: string,
  name: string
): Promise<ICustomCommandDocument | null> {
  return this.findOneAndDelete({ guildId, name: name.toLowerCase() });
};

CustomCommandSchema.statics.getCommand = async function(
  guildId: string,
  name: string
): Promise<ICustomCommandDocument | null> {
  const lowerName = name.toLowerCase();
  return this.findOne({
    guildId,
    $or: [{ name: lowerName }, { aliases: lowerName }],
    enabled: true,
  });
};

CustomCommandSchema.statics.getCommands = async function(
  guildId: string,
  enabledOnly = false
): Promise<ICustomCommandDocument[]> {
  const query: Record<string, unknown> = { guildId };
  if (enabledOnly) query.enabled = true;
  return this.find(query).sort({ name: 1 });
};

CustomCommandSchema.statics.searchCommands = async function(
  guildId: string,
  query: string
): Promise<ICustomCommandDocument[]> {
  return this.find({
    guildId,
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } },
      { aliases: { $regex: query, $options: 'i' } },
    ],
  }).limit(25);
};

CustomCommandSchema.statics.getTopCommands = async function(
  guildId: string,
  limit = 10
): Promise<ICustomCommandDocument[]> {
  return this.find({ guildId }).sort({ usageCount: -1 }).limit(limit);
};

CustomCommandSchema.statics.countCommands = async function(guildId: string): Promise<number> {
  return this.countDocuments({ guildId });
};

// ============================================
// Export Model
// ============================================

export const CustomCommandModel = mongoose.model<ICustomCommandDocument, ICustomCommandModel>('CustomCommand', CustomCommandSchema);
