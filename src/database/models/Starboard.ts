// ===========================================
// ASTRA BOT - Starboard Model
// ===========================================

import mongoose, { Schema, Document, Model } from 'mongoose';

// ============================================
// Interface Definitions
// ============================================

export interface IStarboardEntry {
  guildId: string;
  originalMessageId: string;
  originalChannelId: string;
  starboardMessageId: string;
  authorId: string;
  starCount: number;
  starredBy: string[];
  content?: string; // Cached message content
  attachmentUrl?: string; // First attachment URL
  jumpUrl?: string;
  locked?: boolean; // Prevent further star changes
  pinned?: boolean; // Pinned to top of starboard
}

export interface IStarboardEntryDocument extends IStarboardEntry, Document {
  // Instance methods
  addStar(userId: string): Promise<boolean>;
  removeStar(userId: string): Promise<boolean>;
  hasStarred(userId: string): boolean;
  lock(): Promise<void>;
  unlock(): Promise<void>;
  pin(): Promise<void>;
  unpin(): Promise<void>;
}

export interface IStarboardEntryModel extends Model<IStarboardEntryDocument> {
  // Static methods
  createEntry(data: Partial<IStarboardEntry>): Promise<IStarboardEntryDocument>;
  findByOriginalMessage(messageId: string): Promise<IStarboardEntryDocument | null>;
  findByStarboardMessage(messageId: string): Promise<IStarboardEntryDocument | null>;
  getGuildEntries(guildId: string, limit?: number): Promise<IStarboardEntryDocument[]>;
  getTopStarred(guildId: string, limit?: number): Promise<IStarboardEntryDocument[]>;
  getUserStars(guildId: string, userId: string): Promise<number>;
  getAuthorStats(guildId: string, authorId: string): Promise<{ entries: number; totalStars: number }>;
  deleteEntry(messageId: string): Promise<IStarboardEntryDocument | null>;
  cleanupOld(guildId: string, days: number): Promise<number>;
}

// ============================================
// Schema Definition
// ============================================

const StarboardEntrySchema = new Schema<IStarboardEntryDocument, IStarboardEntryModel>({
  guildId: { type: String, required: true, index: true },
  originalMessageId: { type: String, required: true, unique: true },
  originalChannelId: { type: String, required: true },
  starboardMessageId: { type: String, required: true },
  authorId: { type: String, required: true, index: true },
  starCount: { type: Number, default: 0 },
  starredBy: [{ type: String }],
  content: { type: String, maxlength: 4000 },
  attachmentUrl: { type: String },
  jumpUrl: { type: String },
  locked: { type: Boolean, default: false },
  pinned: { type: Boolean, default: false },
}, {
  timestamps: true,
});

// ============================================
// Indexes
// ============================================

StarboardEntrySchema.index({ guildId: 1, starCount: -1 });
StarboardEntrySchema.index({ guildId: 1, authorId: 1 });
StarboardEntrySchema.index({ starboardMessageId: 1 });

// ============================================
// Instance Methods
// ============================================

StarboardEntrySchema.methods.addStar = async function(userId: string): Promise<boolean> {
  if (this.locked || this.starredBy.includes(userId)) return false;
  
  this.starredBy.push(userId);
  this.starCount = this.starredBy.length;
  await this.save();
  return true;
};

StarboardEntrySchema.methods.removeStar = async function(userId: string): Promise<boolean> {
  if (this.locked) return false;
  
  const index = this.starredBy.indexOf(userId);
  if (index === -1) return false;
  
  this.starredBy.splice(index, 1);
  this.starCount = this.starredBy.length;
  await this.save();
  return true;
};

StarboardEntrySchema.methods.hasStarred = function(userId: string): boolean {
  return this.starredBy.includes(userId);
};

StarboardEntrySchema.methods.lock = async function(): Promise<void> {
  this.locked = true;
  await this.save();
};

StarboardEntrySchema.methods.unlock = async function(): Promise<void> {
  this.locked = false;
  await this.save();
};

StarboardEntrySchema.methods.pin = async function(): Promise<void> {
  this.pinned = true;
  await this.save();
};

StarboardEntrySchema.methods.unpin = async function(): Promise<void> {
  this.pinned = false;
  await this.save();
};

// ============================================
// Static Methods
// ============================================

StarboardEntrySchema.statics.createEntry = async function(
  data: Partial<IStarboardEntry>
): Promise<IStarboardEntryDocument> {
  return this.create(data);
};

StarboardEntrySchema.statics.findByOriginalMessage = async function(
  messageId: string
): Promise<IStarboardEntryDocument | null> {
  return this.findOne({ originalMessageId: messageId });
};

StarboardEntrySchema.statics.findByStarboardMessage = async function(
  messageId: string
): Promise<IStarboardEntryDocument | null> {
  return this.findOne({ starboardMessageId: messageId });
};

StarboardEntrySchema.statics.getGuildEntries = async function(
  guildId: string,
  limit = 100
): Promise<IStarboardEntryDocument[]> {
  return this.find({ guildId })
    .sort({ pinned: -1, starCount: -1, createdAt: -1 })
    .limit(limit);
};

StarboardEntrySchema.statics.getTopStarred = async function(
  guildId: string,
  limit = 10
): Promise<IStarboardEntryDocument[]> {
  return this.find({ guildId })
    .sort({ starCount: -1 })
    .limit(limit);
};

StarboardEntrySchema.statics.getUserStars = async function(
  guildId: string,
  userId: string
): Promise<number> {
  const result = await this.aggregate([
    { $match: { guildId, starredBy: userId } },
    { $count: 'total' },
  ]);
  return result[0]?.total || 0;
};

StarboardEntrySchema.statics.getAuthorStats = async function(
  guildId: string,
  authorId: string
): Promise<{ entries: number; totalStars: number }> {
  const result = await this.aggregate([
    { $match: { guildId, authorId } },
    {
      $group: {
        _id: null,
        entries: { $sum: 1 },
        totalStars: { $sum: '$starCount' },
      },
    },
  ]);
  return result[0] || { entries: 0, totalStars: 0 };
};

StarboardEntrySchema.statics.deleteEntry = async function(
  messageId: string
): Promise<IStarboardEntryDocument | null> {
  return this.findOneAndDelete({ originalMessageId: messageId });
};

StarboardEntrySchema.statics.cleanupOld = async function(
  guildId: string,
  days: number
): Promise<number> {
  const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  const result = await this.deleteMany({
    guildId,
    pinned: { $ne: true },
    createdAt: { $lt: cutoff },
  });
  return result.deletedCount;
};

// ============================================
// Export Model
// ============================================

export const StarboardEntryModel = mongoose.model<IStarboardEntryDocument, IStarboardEntryModel>('StarboardEntry', StarboardEntrySchema);
