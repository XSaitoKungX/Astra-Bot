// ===========================================
// ASTRA BOT - Reminder Command
// ===========================================

import { 
  SlashCommandBuilder, 
  ChatInputCommandInteraction,
  EmbedBuilder
} from 'discord.js';
import { EMBED_COLORS } from '../../../shared/constants/index.js';
import { errorEmbed, successEmbed } from '../../../shared/utils/index.js';
import { ReminderModel } from '../../../database/models/Reminder.js';
import type { BotCommand } from '../../../shared/types/index.js';

// Parse time string like "1h30m", "2d", "30m"
function parseTime(timeStr: string): number | null {
  const regex = /(\d+)\s*(s|sec|second|seconds|m|min|minute|minutes|h|hr|hour|hours|d|day|days|w|week|weeks)/gi;
  let totalMs = 0;
  let match;

  while ((match = regex.exec(timeStr)) !== null) {
    const value = parseInt(match[1]);
    const unit = match[2].toLowerCase();

    switch (unit[0]) {
      case 's': totalMs += value * 1000; break;
      case 'm': totalMs += value * 60 * 1000; break;
      case 'h': totalMs += value * 60 * 60 * 1000; break;
      case 'd': totalMs += value * 24 * 60 * 60 * 1000; break;
      case 'w': totalMs += value * 7 * 24 * 60 * 60 * 1000; break;
    }
  }

  return totalMs > 0 ? totalMs : null;
}

const command: BotCommand = {
  data: new SlashCommandBuilder()
    .setName('reminder')
    .setDescription('Set a reminder')
    .addSubcommand(sub =>
      sub
        .setName('set')
        .setDescription('Set a new reminder')
        .addStringOption(opt =>
          opt
            .setName('time')
            .setDescription('When to remind (e.g., 1h30m, 2d, 30m)')
            .setRequired(true)
        )
        .addStringOption(opt =>
          opt
            .setName('message')
            .setDescription('What to remind you about')
            .setRequired(true)
            .setMaxLength(500)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('list')
        .setDescription('List your active reminders')
    )
    .addSubcommand(sub =>
      sub
        .setName('delete')
        .setDescription('Delete a reminder')
        .addStringOption(opt =>
          opt
            .setName('id')
            .setDescription('Reminder ID (from /reminder list)')
            .setRequired(true)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('clear')
        .setDescription('Clear all your reminders')
    ),
    
  cooldown: 5,
  
  execute: async (interaction: ChatInputCommandInteraction) => {
    const subcommand = interaction.options.getSubcommand();
    const userId = interaction.user.id;

    switch (subcommand) {
      case 'set': {
        const timeStr = interaction.options.getString('time', true);
        const message = interaction.options.getString('message', true);

        const ms = parseTime(timeStr);
        if (!ms) {
          await interaction.reply({ 
            embeds: [errorEmbed('Invalid time format! Use formats like: `1h30m`, `2d`, `30m`, `1w`')], 
            ephemeral: true 
          });
          return;
        }

        // Max 30 days
        if (ms > 30 * 24 * 60 * 60 * 1000) {
          await interaction.reply({ 
            embeds: [errorEmbed('Reminder cannot be more than 30 days in the future!')], 
            ephemeral: true 
          });
          return;
        }

        // Check reminder limit (max 25 per user)
        const count = await ReminderModel.countDocuments({ userId });
        if (count >= 25) {
          await interaction.reply({ 
            embeds: [errorEmbed('You have reached the maximum of 25 reminders! Delete some first.')], 
            ephemeral: true 
          });
          return;
        }

        const remindAt = new Date(Date.now() + ms);

        await ReminderModel.create({
          userId,
          guildId: interaction.guildId,
          channelId: interaction.channelId,
          message,
          remindAt,
        });

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.success)
          .setTitle('⏰ Reminder Set!')
          .setDescription(`I'll remind you about: **${message}**`)
          .addFields({
            name: '🕐 When',
            value: `<t:${Math.floor(remindAt.getTime() / 1000)}:R> (<t:${Math.floor(remindAt.getTime() / 1000)}:f>)`,
          })
          .setFooter({ text: `You have ${count + 1}/25 reminders` })
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }

      case 'list': {
        const reminders = await ReminderModel.find({ userId }).sort({ remindAt: 1 }).limit(25);

        if (reminders.length === 0) {
          await interaction.reply({ 
            embeds: [errorEmbed('You have no active reminders!')], 
            ephemeral: true 
          });
          return;
        }

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.primary)
          .setTitle('⏰ Your Reminders')
          .setDescription(
            reminders.map((r, i) => {
              const time = Math.floor(r.remindAt.getTime() / 1000);
              const msg = r.message.length > 50 ? r.message.slice(0, 50) + '...' : r.message;
              return `**${i + 1}.** ${msg}\n   ⏱️ <t:${time}:R> | ID: \`${r._id}\``;
            }).join('\n\n')
          )
          .setFooter({ text: `${reminders.length}/25 reminders` })
          .setTimestamp();

        await interaction.reply({ embeds: [embed], ephemeral: true });
        break;
      }

      case 'delete': {
        const id = interaction.options.getString('id', true);

        const deleted = await ReminderModel.findOneAndDelete({ _id: id, userId });

        if (!deleted) {
          await interaction.reply({ 
            embeds: [errorEmbed('Reminder not found or you don\'t own it!')], 
            ephemeral: true 
          });
          return;
        }

        await interaction.reply({ embeds: [successEmbed('Reminder deleted!')] });
        break;
      }

      case 'clear': {
        const result = await ReminderModel.deleteMany({ userId });

        if (result.deletedCount === 0) {
          await interaction.reply({ 
            embeds: [errorEmbed('You have no reminders to clear!')], 
            ephemeral: true 
          });
          return;
        }

        await interaction.reply({ 
          embeds: [successEmbed(`Cleared **${result.deletedCount}** reminder(s)!`)] 
        });
        break;
      }
    }
  },
};

export default command;
