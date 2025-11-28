// ===========================================
// ASTRA BOT - Custom Command Management
// ===========================================

import { 
  SlashCommandBuilder, 
  ChatInputCommandInteraction,
  EmbedBuilder,
  PermissionFlagsBits
} from 'discord.js';
import { EMBED_COLORS } from '../../../shared/constants/index.js';
import { errorEmbed, successEmbed } from '../../../shared/utils/index.js';
import { CustomCommandModel } from '../../../database/models/CustomCommand.js';
import type { BotCommand } from '../../../shared/types/index.js';

const command: BotCommand = {
  data: new SlashCommandBuilder()
    .setName('customcommand')
    .setDescription('Manage custom commands')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addSubcommand(sub =>
      sub
        .setName('create')
        .setDescription('Create a custom command')
        .addStringOption(opt =>
          opt
            .setName('name')
            .setDescription('Command trigger (without prefix)')
            .setRequired(true)
            .setMaxLength(32)
        )
        .addStringOption(opt =>
          opt
            .setName('response')
            .setDescription('Response message')
            .setRequired(true)
            .setMaxLength(2000)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('delete')
        .setDescription('Delete a custom command')
        .addStringOption(opt =>
          opt
            .setName('name')
            .setDescription('Command name to delete')
            .setRequired(true)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('edit')
        .setDescription('Edit a custom command')
        .addStringOption(opt =>
          opt
            .setName('name')
            .setDescription('Command name to edit')
            .setRequired(true)
        )
        .addStringOption(opt =>
          opt
            .setName('response')
            .setDescription('New response message')
            .setRequired(true)
            .setMaxLength(2000)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('list')
        .setDescription('List all custom commands')
    )
    .addSubcommand(sub =>
      sub
        .setName('info')
        .setDescription('View info about a custom command')
        .addStringOption(opt =>
          opt
            .setName('name')
            .setDescription('Command name')
            .setRequired(true)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('toggle')
        .setDescription('Enable or disable a custom command')
        .addStringOption(opt =>
          opt
            .setName('name')
            .setDescription('Command name')
            .setRequired(true)
        )
    ),
    
  cooldown: 5,
  
  execute: async (interaction: ChatInputCommandInteraction) => {
    const subcommand = interaction.options.getSubcommand();
    const guildId = interaction.guildId!;

    switch (subcommand) {
      case 'create': {
        const name = interaction.options.getString('name', true).toLowerCase().replace(/\s+/g, '-');
        const response = interaction.options.getString('response', true);

        // Check if command already exists
        const existing = await CustomCommandModel.findOne({ guildId, name });
        if (existing) {
          await interaction.reply({ 
            embeds: [errorEmbed(`A command with the name \`${name}\` already exists!`)], 
            ephemeral: true 
          });
          return;
        }

        // Check command limit (max 50 per server)
        const count = await CustomCommandModel.countDocuments({ guildId });
        if (count >= 50) {
          await interaction.reply({ 
            embeds: [errorEmbed('This server has reached the maximum of 50 custom commands!')], 
            ephemeral: true 
          });
          return;
        }

        await CustomCommandModel.create({
          guildId,
          name,
          response,
          createdBy: interaction.user.id,
          enabled: true,
          usageCount: 0,
        });

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.success)
          .setTitle('✅ Custom Command Created!')
          .setDescription(`Command \`!${name}\` has been created!`)
          .addFields(
            { name: 'Trigger', value: `\`!${name}\``, inline: true },
            { name: 'Response', value: response.length > 100 ? response.slice(0, 100) + '...' : response }
          )
          .setFooter({ text: `${count + 1}/50 commands` })
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }

      case 'delete': {
        const name = interaction.options.getString('name', true).toLowerCase();

        const deleted = await CustomCommandModel.findOneAndDelete({ guildId, name });

        if (!deleted) {
          await interaction.reply({ 
            embeds: [errorEmbed(`Command \`${name}\` not found!`)], 
            ephemeral: true 
          });
          return;
        }

        await interaction.reply({ embeds: [successEmbed(`Command \`!${name}\` has been deleted!`)] });
        break;
      }

      case 'edit': {
        const name = interaction.options.getString('name', true).toLowerCase();
        const response = interaction.options.getString('response', true);

        const updated = await CustomCommandModel.findOneAndUpdate(
          { guildId, name },
          { response },
          { new: true }
        );

        if (!updated) {
          await interaction.reply({ 
            embeds: [errorEmbed(`Command \`${name}\` not found!`)], 
            ephemeral: true 
          });
          return;
        }

        await interaction.reply({ embeds: [successEmbed(`Command \`!${name}\` has been updated!`)] });
        break;
      }

      case 'list': {
        const commands = await CustomCommandModel.find({ guildId }).sort({ usageCount: -1 });

        if (commands.length === 0) {
          await interaction.reply({ 
            embeds: [errorEmbed('No custom commands in this server!')], 
            ephemeral: true 
          });
          return;
        }

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.primary)
          .setTitle('📝 Custom Commands')
          .setDescription(
            commands.map((cmd, i) => {
              const status = cmd.enabled ? '✅' : '❌';
              return `${status} \`!${cmd.name}\` - ${cmd.usageCount} uses`;
            }).join('\n')
          )
          .setFooter({ text: `${commands.length}/50 commands` })
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }

      case 'info': {
        const name = interaction.options.getString('name', true).toLowerCase();

        const cmd = await CustomCommandModel.findOne({ guildId, name });

        if (!cmd) {
          await interaction.reply({ 
            embeds: [errorEmbed(`Command \`${name}\` not found!`)], 
            ephemeral: true 
          });
          return;
        }

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.primary)
          .setTitle(`📝 Command: !${cmd.name}`)
          .addFields(
            { name: 'Status', value: cmd.enabled ? '✅ Enabled' : '❌ Disabled', inline: true },
            { name: 'Uses', value: `${cmd.usageCount}`, inline: true },
            { name: 'Created By', value: `<@${cmd.createdBy}>`, inline: true },
            { name: 'Response', value: cmd.response.length > 1000 ? cmd.response.slice(0, 1000) + '...' : cmd.response }
          )
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }

      case 'toggle': {
        const name = interaction.options.getString('name', true).toLowerCase();

        const cmd = await CustomCommandModel.findOne({ guildId, name });

        if (!cmd) {
          await interaction.reply({ 
            embeds: [errorEmbed(`Command \`${name}\` not found!`)], 
            ephemeral: true 
          });
          return;
        }

        cmd.enabled = !cmd.enabled;
        await cmd.save();

        const status = cmd.enabled ? 'enabled' : 'disabled';
        await interaction.reply({ 
          embeds: [successEmbed(`Command \`!${name}\` has been **${status}**!`)] 
        });
        break;
      }
    }
  },
};

export default command;
