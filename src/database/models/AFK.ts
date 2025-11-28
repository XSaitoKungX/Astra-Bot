// ===========================================
// ASTRA BOT - AFK Model
// ===========================================

import mongoose, { Schema, Document, Model } from 'mongoose';

// ============================================
// Interface Definitions
// ============================================

export interface IAFK {
  guildId: string;
  userId: string;
  reason: string;
  timestamp: Date;
  mentions: number;
  mentionedBy: string[]; // User IDs who mentioned
  originalNickname?: string; // To restore after AFK
  autoRemove?: boolean; // Auto-remove on message
}

export interface IAFKDocument extends IAFK, Document {
  // Instance methods
  addMention(userId: string): Promise<void>;
  remove(): Promise<void>;
  getDuration(): number;
  getFormattedDuration(): string;
}

export interface IAFKModel extends Model<IAFKDocument> {
  // Static methods
  setAFK(guildId: string, userId: string, reason?: string, originalNickname?: string): Promise<IAFKDocument>;
  removeAFK(guildId: string, userId: string): Promise<IAFKDocument | null>;
  isAFK(guildId: string, userId: string): Promise<IAFKDocument | null>;
  getAFKUsers(guildId: string): Promise<IAFKDocument[]>;
  cleanupOld(maxAge: number): Promise<number>;
}

// ============================================
// Schema Definition
// ============================================

const AFKSchema = new Schema<IAFKDocument, IAFKModel>({
  guildId: { type: String, required: true, index: true },
  userId: { type: String, required: true, index: true },
  reason: { type: String, default: 'AFK', maxlength: 200 },
  timestamp: { type: Date, default: Date.now },
  mentions: { type: Number, default: 0 },
  mentionedBy: [{ type: String }],
  originalNickname: { type: String },
  autoRemove: { type: Boolean, default: true },
}, {
  timestamps: true,
});

// ============================================
// Indexes
// ============================================

AFKSchema.index({ guildId: 1, userId: 1 }, { unique: true });
AFKSchema.index({ timestamp: 1 }); // For cleanup queries

// ============================================
// Instance Methods
// ============================================

AFKSchema.methods.addMention = async function(userId: string): Promise<void> {
  if (!this.mentionedBy.includes(userId)) {
    this.mentionedBy.push(userId);
  }
  this.mentions += 1;
  await this.save();
};

AFKSchema.methods.remove = async function(): Promise<void> {
  await AFKModel.deleteOne({ _id: this._id });
};

AFKSchema.methods.getDuration = function(): number {
  return Date.now() - this.timestamp.getTime();
};

AFKSchema.methods.getFormattedDuration = function(): string {
  const ms = this.getDuration();
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ${hours % 24}h`;
  if (hours > 0) return `${hours}h ${minutes % 60}m`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
};

// ============================================
// Static Methods
// ============================================

AFKSchema.statics.setAFK = async function(
  guildId: string, 
  userId: string, 
  reason = 'AFK',
  originalNickname?: string
): Promise<IAFKDocument> {
  return this.findOneAndUpdate(
    { guildId, userId },
    { 
      reason, 
      timestamp: new Date(), 
      mentions: 0, 
      mentionedBy: [],
      originalNickname,
      autoRemove: true,
    },
    { upsert: true, new: true }
  );
};

AFKSchema.statics.removeAFK = async function(
  guildId: string, 
  userId: string
): Promise<IAFKDocument | null> {
  return this.findOneAndDelete({ guildId, userId });
};

AFKSchema.statics.isAFK = async function(
  guildId: string, 
  userId: string
): Promise<IAFKDocument | null> {
  return this.findOne({ guildId, userId });
};

AFKSchema.statics.getAFKUsers = async function(
  guildId: string
): Promise<IAFKDocument[]> {
  return this.find({ guildId }).sort({ timestamp: -1 });
};

AFKSchema.statics.cleanupOld = async function(maxAge: number): Promise<number> {
  const cutoff = new Date(Date.now() - maxAge);
  const result = await this.deleteMany({ timestamp: { $lt: cutoff } });
  return result.deletedCount;
};

// ============================================
// Export Model
// ============================================

export const AFKModel = mongoose.model<IAFKDocument, IAFKModel>('AFK', AFKSchema);
