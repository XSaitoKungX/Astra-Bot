// ===========================================
// ASTRA BOT - AFK Command
// ===========================================

import { 
  SlashCommandBuilder, 
  ChatInputCommandInteraction,
  EmbedBuilder
} from 'discord.js';
import { EMBED_COLORS } from '../../../shared/constants/index.js';
import { AFKModel } from '../../../database/models/AFK.js';
import type { BotCommand } from '../../../shared/types/index.js';

const command: BotCommand = {
  data: new SlashCommandBuilder()
    .setName('afk')
    .setDescription('Set your AFK status')
    .addStringOption(opt =>
      opt
        .setName('reason')
        .setDescription('Reason for being AFK')
        .setRequired(false)
        .setMaxLength(200)
    ),
    
  cooldown: 10,
  
  execute: async (interaction: ChatInputCommandInteraction) => {
    const reason = interaction.options.getString('reason') || 'AFK';
    const userId = interaction.user.id;
    const guildId = interaction.guildId!;

    // Check if already AFK
    const existing = await AFKModel.findOne({ guildId, userId });
    
    if (existing) {
      // Remove AFK status
      await AFKModel.deleteOne({ guildId, userId });
      
      const embed = new EmbedBuilder()
        .setColor(EMBED_COLORS.success)
        .setDescription(`👋 Welcome back, ${interaction.user}! I've removed your AFK status.`)
        .addFields({
          name: '📬 Mentions while AFK',
          value: `You were mentioned **${existing.mentions}** time(s)`,
          inline: true
        })
        .setTimestamp();

      await interaction.reply({ embeds: [embed] });
      return;
    }

    // Set AFK status
    await AFKModel.create({
      guildId,
      userId,
      reason,
      timestamp: new Date(),
      mentions: 0,
    });

    const embed = new EmbedBuilder()
      .setColor(EMBED_COLORS.primary)
      .setDescription(`💤 ${interaction.user} is now AFK: **${reason}**`)
      .setFooter({ text: 'I\'ll notify you when someone mentions you!' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};

export default command;
