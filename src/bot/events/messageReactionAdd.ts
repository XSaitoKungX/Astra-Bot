// ===========================================
// ASTRA BOT - Message Reaction Add Event
// ===========================================

import { Events, MessageReaction, User, EmbedBuilder, TextChannel, PartialMessageReaction, PartialUser } from 'discord.js';
import { ReactionRoleModel } from '../../database/models/ReactionRole.js';
import { StarboardEntryModel } from '../../database/models/Starboard.js';
import { GuildConfig } from '../../database/models/GuildConfig.js';
import { EMBED_COLORS } from '../../shared/constants/index.js';
import { logger } from '../../shared/utils/logger.js';
import type { BotEvent } from '../../shared/types/index.js';

const event: BotEvent = {
  name: Events.MessageReactionAdd,
  
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
    // REACTION ROLES
    // ==========================================
    const reactionRole = await ReactionRoleModel.findOne({
      messageId: message.id,
      emoji,
    });

    if (reactionRole) {
      try {
        const member = await message.guild.members.fetch(user.id);
        const role = message.guild.roles.cache.get(reactionRole.roleId);

        if (!role) return;

        switch (reactionRole.type) {
          case 'normal':
            // Toggle role
            if (member.roles.cache.has(role.id)) {
              await member.roles.remove(role);
            } else {
              await member.roles.add(role);
            }
            break;

          case 'unique':
            // Remove other roles from this message, add this one
            const otherRoles = await ReactionRoleModel.find({ 
              messageId: message.id, 
              emoji: { $ne: emoji } 
            });
            for (const rr of otherRoles) {
              if (member.roles.cache.has(rr.roleId)) {
                await member.roles.remove(rr.roleId);
              }
            }
            await member.roles.add(role);
            break;

          case 'verify':
            // One-time role assignment
            if (!member.roles.cache.has(role.id)) {
              await member.roles.add(role);
            }
            // Remove reaction after verification
            await reaction.users.remove(user.id);
            break;

          case 'drop':
            // Remove role when reacting
            if (member.roles.cache.has(role.id)) {
              await member.roles.remove(role);
            }
            break;
        }
      } catch (error) {
        logger.error('Error handling reaction role:', error);
      }
    }

    // ==========================================
    // STARBOARD
    // ==========================================
    const config = await GuildConfig.findOne({ guildId });
    const starboard = config?.starboard;

    if (starboard?.enabled && starboard.channelId) {
      const starEmoji = starboard.emoji || '⭐';
      const threshold = starboard.threshold || 3;

      // Check if this is the star emoji
      const isStarEmoji = emoji === starEmoji || 
        (reaction.emoji.name === starEmoji) ||
        (reaction.emoji.id === starEmoji);

      if (isStarEmoji) {
        // Count stars
        const starReaction = message.reactions.cache.find(r => 
          r.emoji.name === starEmoji || r.emoji.id === starEmoji
        );
        const starCount = starReaction?.count || 0;

        // Check if meets threshold
        if (starCount >= threshold) {
          const starboardChannel = message.guild.channels.cache.get(starboard.channelId) as TextChannel;
          if (!starboardChannel) return;

          // Check if already on starboard
          let entry = await StarboardEntryModel.findOne({ originalMessageId: message.id });

          // Create starboard embed
          const embed = new EmbedBuilder()
            .setColor(EMBED_COLORS.warning)
            .setAuthor({
              name: message.author?.tag || 'Unknown',
              iconURL: message.author?.displayAvatarURL(),
            })
            .setDescription(message.content || '*No text content*')
            .addFields(
              { name: 'Source', value: `[Jump to message](${message.url})`, inline: true },
              { name: 'Channel', value: `<#${message.channel.id}>`, inline: true }
            )
            .setFooter({ text: `⭐ ${starCount}` })
            .setTimestamp(message.createdAt);

          // Add image if present
          const attachment = message.attachments.first();
          if (attachment?.contentType?.startsWith('image/')) {
            embed.setImage(attachment.url);
          }

          if (entry) {
            // Update existing starboard message
            try {
              const starboardMessage = await starboardChannel.messages.fetch(entry.starboardMessageId);
              await starboardMessage.edit({ embeds: [embed] });
              
              // Update star count
              if (!entry.starredBy.includes(user.id)) {
                entry.starredBy.push(user.id);
              }
              entry.starCount = starCount;
              await entry.save();
            } catch {
              // Message was deleted, remove entry
              await StarboardEntryModel.deleteOne({ _id: entry._id });
            }
          } else {
            // Create new starboard entry
            const starboardMessage = await starboardChannel.send({
              content: `⭐ **${starCount}** | <#${message.channel.id}>`,
              embeds: [embed],
            });

            await StarboardEntryModel.create({
              guildId,
              originalMessageId: message.id,
              originalChannelId: message.channel.id,
              starboardMessageId: starboardMessage.id,
              authorId: message.author?.id || 'unknown',
              starCount,
              starredBy: [user.id],
            });
          }
        }
      }
    }
  },
};

export default event;
