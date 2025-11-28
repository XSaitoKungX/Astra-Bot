// ===========================================
// ASTRA BOT - Starboard Command
// ===========================================

import { 
  SlashCommandBuilder, 
  ChatInputCommandInteraction,
  EmbedBuilder,
  PermissionFlagsBits,
  ChannelType
} from 'discord.js';
import { EMBED_COLORS } from '../../../shared/constants/index.js';
import { errorEmbed, successEmbed } from '../../../shared/utils/index.js';
import { GuildConfig } from '../../../database/models/GuildConfig.js';
import { StarboardEntryModel } from '../../../database/models/Starboard.js';
import type { BotCommand } from '../../../shared/types/index.js';

const command: BotCommand = {
  data: new SlashCommandBuilder()
    .setName('starboard')
    .setDescription('Configure the starboard')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addSubcommand(sub =>
      sub
        .setName('setup')
        .setDescription('Setup or update the starboard')
        .addChannelOption(opt =>
          opt
            .setName('channel')
            .setDescription('Channel for starred messages')
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildText)
        )
        .addIntegerOption(opt =>
          opt
            .setName('threshold')
            .setDescription('Minimum stars required (default: 3)')
            .setRequired(false)
            .setMinValue(1)
            .setMaxValue(50)
        )
        .addStringOption(opt =>
          opt
            .setName('emoji')
            .setDescription('Star emoji (default: ⭐)')
            .setRequired(false)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('disable')
        .setDescription('Disable the starboard')
    )
    .addSubcommand(sub =>
      sub
        .setName('settings')
        .setDescription('View current starboard settings')
    )
    .addSubcommand(sub =>
      sub
        .setName('stats')
        .setDescription('View starboard statistics')
    ),
    
  cooldown: 5,
  
  execute: async (interaction: ChatInputCommandInteraction) => {
    const subcommand = interaction.options.getSubcommand();
    const guildId = interaction.guildId!;

    switch (subcommand) {
      case 'setup': {
        const channel = interaction.options.getChannel('channel', true);
        const threshold = interaction.options.getInteger('threshold') || 3;
        const emoji = interaction.options.getString('emoji') || '⭐';

        await GuildConfig.findOneAndUpdate(
          { guildId },
          {
            $set: {
              'starboard.enabled': true,
              'starboard.channelId': channel.id,
              'starboard.threshold': threshold,
              'starboard.emoji': emoji,
            }
          },
          { upsert: true }
        );

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.success)
          .setTitle('⭐ Starboard Configured!')
          .setDescription(`Messages with **${threshold}+** ${emoji} reactions will be posted to ${channel}!`)
          .addFields(
            { name: 'Channel', value: `${channel}`, inline: true },
            { name: 'Threshold', value: `${threshold} stars`, inline: true },
            { name: 'Emoji', value: emoji, inline: true }
          )
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }

      case 'disable': {
        await GuildConfig.findOneAndUpdate(
          { guildId },
          { $set: { 'starboard.enabled': false } }
        );

        await interaction.reply({ embeds: [successEmbed('Starboard has been disabled!')] });
        break;
      }

      case 'settings': {
        const config = await GuildConfig.findOne({ guildId });
        const starboard = config?.starboard;

        if (!starboard?.enabled) {
          await interaction.reply({ 
            embeds: [errorEmbed('Starboard is not configured! Use `/starboard setup` to enable it.')], 
            ephemeral: true 
          });
          return;
        }

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.primary)
          .setTitle('⭐ Starboard Settings')
          .addFields(
            { name: 'Status', value: '✅ Enabled', inline: true },
            { name: 'Channel', value: `<#${starboard.channelId}>`, inline: true },
            { name: 'Threshold', value: `${starboard.threshold || 3} stars`, inline: true },
            { name: 'Emoji', value: starboard.emoji || '⭐', inline: true }
          )
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }

      case 'stats': {
        const totalStars = await StarboardEntryModel.countDocuments({ guildId });
        const entries = await StarboardEntryModel.find({ guildId }).sort({ starCount: -1 }).limit(5);

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.primary)
          .setTitle('⭐ Starboard Statistics')
          .addFields(
            { name: 'Total Starred Messages', value: `${totalStars}`, inline: true }
          )
          .setTimestamp();

        if (entries.length > 0) {
          const topMessages = entries.map((e, i) => {
            return `**${i + 1}.** ${e.starCount} ⭐ - <#${e.originalChannelId}>`;
          }).join('\n');
          
          embed.addFields({ name: 'Top Starred Messages', value: topMessages });
        }

        await interaction.reply({ embeds: [embed] });
        break;
      }
    }
  },
};

export default command;
