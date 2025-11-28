// ===========================================
// ASTRA BOT - Birthday Command
// ===========================================

import { 
  SlashCommandBuilder, 
  ChatInputCommandInteraction,
  EmbedBuilder
} from 'discord.js';
import { EMBED_COLORS } from '../../../shared/constants/index.js';
import { errorEmbed, successEmbed } from '../../../shared/utils/index.js';
import { BirthdayModel } from '../../../database/models/Birthday.js';
import type { BotCommand } from '../../../shared/types/index.js';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const command: BotCommand = {
  data: new SlashCommandBuilder()
    .setName('birthday')
    .setDescription('Manage birthdays')
    .addSubcommand(sub =>
      sub
        .setName('set')
        .setDescription('Set your birthday')
        .addIntegerOption(opt =>
          opt
            .setName('day')
            .setDescription('Day of birth (1-31)')
            .setRequired(true)
            .setMinValue(1)
            .setMaxValue(31)
        )
        .addIntegerOption(opt =>
          opt
            .setName('month')
            .setDescription('Month of birth')
            .setRequired(true)
            .addChoices(
              { name: 'January', value: 1 },
              { name: 'February', value: 2 },
              { name: 'March', value: 3 },
              { name: 'April', value: 4 },
              { name: 'May', value: 5 },
              { name: 'June', value: 6 },
              { name: 'July', value: 7 },
              { name: 'August', value: 8 },
              { name: 'September', value: 9 },
              { name: 'October', value: 10 },
              { name: 'November', value: 11 },
              { name: 'December', value: 12 }
            )
        )
        .addIntegerOption(opt =>
          opt
            .setName('year')
            .setDescription('Year of birth (optional)')
            .setRequired(false)
            .setMinValue(1900)
            .setMaxValue(new Date().getFullYear())
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('remove')
        .setDescription('Remove your birthday')
    )
    .addSubcommand(sub =>
      sub
        .setName('view')
        .setDescription('View someone\'s birthday')
        .addUserOption(opt =>
          opt.setName('user').setDescription('User to view').setRequired(false)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('upcoming')
        .setDescription('View upcoming birthdays in this server')
    )
    .addSubcommand(sub =>
      sub
        .setName('list')
        .setDescription('List all birthdays this month')
    ),
    
  cooldown: 5,
  
  execute: async (interaction: ChatInputCommandInteraction) => {
    const subcommand = interaction.options.getSubcommand();
    const userId = interaction.user.id;
    const guildId = interaction.guildId!;

    switch (subcommand) {
      case 'set': {
        const day = interaction.options.getInteger('day', true);
        const month = interaction.options.getInteger('month', true);
        const year = interaction.options.getInteger('year');

        // Validate day for month
        const daysInMonth = new Date(year || 2000, month, 0).getDate();
        if (day > daysInMonth) {
          await interaction.reply({ 
            embeds: [errorEmbed(`${MONTHS[month - 1]} only has ${daysInMonth} days!`)], 
            ephemeral: true 
          });
          return;
        }

        await BirthdayModel.findOneAndUpdate(
          { guildId, userId },
          { day, month, year, timezone: 'UTC' },
          { upsert: true, new: true }
        );

        const dateStr = year 
          ? `${MONTHS[month - 1]} ${day}, ${year}` 
          : `${MONTHS[month - 1]} ${day}`;

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.success)
          .setTitle('🎂 Birthday Set!')
          .setDescription(`Your birthday has been set to **${dateStr}**!`)
          .setFooter({ text: 'You\'ll be celebrated when your birthday comes!' })
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }

      case 'remove': {
        const deleted = await BirthdayModel.findOneAndDelete({ guildId, oderId: userId });

        if (!deleted) {
          await interaction.reply({ 
            embeds: [errorEmbed('You haven\'t set your birthday!')], 
            ephemeral: true 
          });
          return;
        }

        await interaction.reply({ embeds: [successEmbed('Your birthday has been removed!')] });
        break;
      }

      case 'view': {
        const user = interaction.options.getUser('user') || interaction.user;
        const birthday = await BirthdayModel.findOne({ guildId, userId: user.id });

        if (!birthday) {
          await interaction.reply({ 
            embeds: [errorEmbed(`${user.id === userId ? 'You haven\'t' : `${user.username} hasn't`} set a birthday!`)], 
            ephemeral: true 
          });
          return;
        }

        const dateStr = birthday.year 
          ? `${MONTHS[birthday.month - 1]} ${birthday.day}, ${birthday.year}` 
          : `${MONTHS[birthday.month - 1]} ${birthday.day}`;

        // Calculate next birthday
        const now = new Date();
        let nextBirthday = new Date(now.getFullYear(), birthday.month - 1, birthday.day);
        if (nextBirthday < now) {
          nextBirthday = new Date(now.getFullYear() + 1, birthday.month - 1, birthday.day);
        }

        // Calculate age if year is set
        let ageStr = '';
        if (birthday.year) {
          const age = now.getFullYear() - birthday.year;
          const hadBirthdayThisYear = now >= new Date(now.getFullYear(), birthday.month - 1, birthday.day);
          const currentAge = hadBirthdayThisYear ? age : age - 1;
          ageStr = `\n🎈 **Age:** ${currentAge} years old`;
        }

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.primary)
          .setTitle(`🎂 ${user.username}'s Birthday`)
          .setDescription(`📅 **Date:** ${dateStr}${ageStr}\n⏰ **Next:** <t:${Math.floor(nextBirthday.getTime() / 1000)}:R>`)
          .setThumbnail(user.displayAvatarURL())
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }

      case 'upcoming': {
        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const currentDay = now.getDate();

        // Get birthdays in the next 30 days
        const birthdays = await BirthdayModel.find({ guildId });
        
        const upcoming = birthdays
          .map(b => {
            let nextBirthday = new Date(now.getFullYear(), b.month - 1, b.day);
            if (nextBirthday < now) {
              nextBirthday = new Date(now.getFullYear() + 1, b.month - 1, b.day);
            }
            return { ...b.toObject(), nextBirthday };
          })
          .filter(b => {
            const daysUntil = Math.ceil((b.nextBirthday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            return daysUntil <= 30 && daysUntil >= 0;
          })
          .sort((a, b) => a.nextBirthday.getTime() - b.nextBirthday.getTime())
          .slice(0, 10);

        if (upcoming.length === 0) {
          await interaction.reply({ 
            embeds: [errorEmbed('No upcoming birthdays in the next 30 days!')], 
            ephemeral: true 
          });
          return;
        }

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.primary)
          .setTitle('🎂 Upcoming Birthdays')
          .setDescription(
            upcoming.map((b, i) => {
              const timestamp = Math.floor(b.nextBirthday.getTime() / 1000);
              return `**${i + 1}.** <@${b.userId}> - <t:${timestamp}:D> (<t:${timestamp}:R>)`;
            }).join('\n')
          )
          .setFooter({ text: 'Next 30 days' })
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }

      case 'list': {
        const currentMonth = new Date().getMonth() + 1;
        const birthdays = await BirthdayModel.find({ guildId, month: currentMonth }).sort({ day: 1 });

        if (birthdays.length === 0) {
          await interaction.reply({ 
            embeds: [errorEmbed(`No birthdays in ${MONTHS[currentMonth - 1]}!`)], 
            ephemeral: true 
          });
          return;
        }

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.primary)
          .setTitle(`🎂 Birthdays in ${MONTHS[currentMonth - 1]}`)
          .setDescription(
            birthdays.map((b, i) => {
              return `**${b.day}.** <@${b.userId}>`;
            }).join('\n')
          )
          .setFooter({ text: `${birthdays.length} birthday(s) this month` })
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }
    }
  },
};

export default command;
