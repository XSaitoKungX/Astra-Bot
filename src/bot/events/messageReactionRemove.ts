// ===========================================
// ASTRA BOT - Message Reaction Remove Event
// ===========================================

import { Events, MessageReaction, User, PartialMessageReaction, PartialUser, TextChannel } from 'discord.js';
import { ReactionRoleModel } from '../../database/models/ReactionRole.js';
import { StarboardEntryModel } from '../../database/models/Starboard.js';
import { GuildConfig } from '../../database/models/GuildConfig.js';
import { logger } from '../../shared/utils/logger.js';
import type { BotEvent } from '../../shared/types/index.js';

const event: BotEvent = {
  name: Events.MessageReactionRemove,
  
  execute: async (reaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) => {
    // Ignore bots
    if (user.bot) return;

    // Fetch partial reaction if needed
    if (reaction.partial) {
      try {
        await reaction.fetch();
      } catch {
        return;
      }
    }

    const message = reaction.message;
    if (!message.guild) return;

    const guildId = message.guild.id;
    const emoji = reaction.emoji.id || reaction.emoji.name;

    // ==========================================
    // REACTION ROLES - Remove role on unreact
    // ==========================================
    const reactionRole = await ReactionRoleModel.findOne({
      messageId: message.id,
      emoji,
    });

    if (reactionRole && reactionRole.type === 'normal') {
      try {
        const member = await message.guild.members.fetch(user.id);
        const role = message.guild.roles.cache.get(reactionRole.roleId);

        if (role && member.roles.cache.has(role.id)) {
          await member.roles.remove(role);
        }
      } catch (error) {
        logger.error('Error removing reaction role:', error);
      }
    }

    // ==========================================
    // STARBOARD - Update star count
    // ==========================================
    const config = await GuildConfig.findOne({ guildId });
    const starboard = config?.starboard;

    if (starboard?.enabled && starboard.channelId) {
      const starEmoji = starboard.emoji || '⭐';

      const isStarEmoji = emoji === starEmoji || 
        (reaction.emoji.name === starEmoji) ||
        (reaction.emoji.id === starEmoji);

      if (isStarEmoji) {
        const entry = await StarboardEntryModel.findOne({ originalMessageId: message.id });
        
        if (entry) {
          const starReaction = message.reactions.cache.find(r => 
            r.emoji.name === starEmoji || r.emoji.id === starEmoji
          );
          const starCount = starReaction?.count || 0;

          // Remove user from starredBy
          entry.starredBy = entry.starredBy.filter(id => id !== user.id);
          entry.starCount = starCount;

          if (starCount < (starboard.threshold || 3)) {
            // Below threshold, delete from starboard
            try {
              const starboardChannel = message.guild.channels.cache.get(starboard.channelId) as TextChannel;
              if (starboardChannel) {
                const starboardMessage = await starboardChannel.messages.fetch(entry.starboardMessageId);
                await starboardMessage.delete();
              }
            } catch {}
            
            await StarboardEntryModel.deleteOne({ _id: entry._id });
          } else {
            // Update star count
            await entry.save();

            try {
              const starboardChannel = message.guild.channels.cache.get(starboard.channelId) as TextChannel;
              if (starboardChannel) {
                const starboardMessage = await starboardChannel.messages.fetch(entry.starboardMessageId);
                await starboardMessage.edit({
                  content: `⭐ **${starCount}** | <#${message.channel.id}>`,
                });
              }
            } catch {}
          }
        }
      }
    }
  },
};

export default event;
