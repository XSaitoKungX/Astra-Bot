// ===========================================
// ASTRA BOT - Reaction Role Command
// ===========================================

import { 
  SlashCommandBuilder, 
  ChatInputCommandInteraction,
  EmbedBuilder,
  PermissionFlagsBits,
  ChannelType,
  TextChannel
} from 'discord.js';
import { EMBED_COLORS } from '../../../shared/constants/index.js';
import { errorEmbed, successEmbed } from '../../../shared/utils/index.js';
import { ReactionRoleModel } from '../../../database/models/ReactionRole.js';
import type { BotCommand } from '../../../shared/types/index.js';

const command: BotCommand = {
  data: new SlashCommandBuilder()
    .setName('reactionrole')
    .setDescription('Manage reaction roles')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
    .addSubcommand(sub =>
      sub
        .setName('add')
        .setDescription('Add a reaction role to a message')
        .addStringOption(opt =>
          opt.setName('message_id').setDescription('Message ID').setRequired(true)
        )
        .addStringOption(opt =>
          opt.setName('emoji').setDescription('Emoji to react with').setRequired(true)
        )
        .addRoleOption(opt =>
          opt.setName('role').setDescription('Role to assign').setRequired(true)
        )
        .addStringOption(opt =>
          opt
            .setName('type')
            .setDescription('Reaction role type')
            .setRequired(false)
            .addChoices(
              { name: 'Normal (toggle)', value: 'normal' },
              { name: 'Unique (one role per message)', value: 'unique' },
              { name: 'Verify (one-time, keeps role)', value: 'verify' },
              { name: 'Drop (removes role on react)', value: 'drop' }
            )
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('remove')
        .setDescription('Remove a reaction role')
        .addStringOption(opt =>
          opt.setName('message_id').setDescription('Message ID').setRequired(true)
        )
        .addStringOption(opt =>
          opt.setName('emoji').setDescription('Emoji to remove').setRequired(true)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('list')
        .setDescription('List all reaction roles in this server')
    )
    .addSubcommand(sub =>
      sub
        .setName('create')
        .setDescription('Create a new reaction role message')
        .addChannelOption(opt =>
          opt
            .setName('channel')
            .setDescription('Channel to send the message')
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildText)
        )
        .addStringOption(opt =>
          opt.setName('title').setDescription('Embed title').setRequired(true)
        )
        .addStringOption(opt =>
          opt.setName('description').setDescription('Embed description').setRequired(true)
        )
    ),
    
  cooldown: 5,
  
  execute: async (interaction: ChatInputCommandInteraction) => {
    const subcommand = interaction.options.getSubcommand();
    const guildId = interaction.guildId!;

    switch (subcommand) {
      case 'add': {
        const messageId = interaction.options.getString('message_id', true);
        const emojiInput = interaction.options.getString('emoji', true);
        const role = interaction.options.getRole('role', true);
        const type = (interaction.options.getString('type') || 'normal') as 'normal' | 'unique' | 'verify' | 'drop';

        // Check bot permissions
        const botMember = interaction.guild?.members.me;
        if (!botMember?.permissions.has(PermissionFlagsBits.ManageRoles)) {
          await interaction.reply({ embeds: [errorEmbed('I need **Manage Roles** permission!')], ephemeral: true });
          return;
        }

        // Check role hierarchy
        if (role.position >= (botMember.roles.highest.position || 0)) {
          await interaction.reply({ embeds: [errorEmbed('I cannot assign this role as it is higher than my highest role!')], ephemeral: true });
          return;
        }

        // Find the message
        let message;
        for (const [, channel] of interaction.guild!.channels.cache) {
          if (channel.type === ChannelType.GuildText) {
            try {
              message = await (channel as TextChannel).messages.fetch(messageId);
              if (message) break;
            } catch {}
          }
        }

        if (!message) {
          await interaction.reply({ embeds: [errorEmbed('Message not found! Make sure the message ID is correct.')], ephemeral: true });
          return;
        }

        // Parse emoji
        const emojiMatch = emojiInput.match(/<a?:(\w+):(\d+)>/);
        const emoji = emojiMatch ? emojiMatch[2] : emojiInput;

        // Check if already exists
        const existing = await ReactionRoleModel.findOne({ messageId, emoji });
        if (existing) {
          await interaction.reply({ embeds: [errorEmbed('This emoji is already used for a reaction role on this message!')], ephemeral: true });
          return;
        }

        // Add reaction to message
        try {
          await message.react(emojiInput);
        } catch {
          await interaction.reply({ embeds: [errorEmbed('Failed to add reaction. Make sure the emoji is valid!')], ephemeral: true });
          return;
        }

        // Save to database
        await ReactionRoleModel.create({
          guildId,
          channelId: message.channel.id,
          messageId,
          emoji,
          roleId: role.id,
          type,
        });

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.success)
          .setTitle('✅ Reaction Role Added')
          .setDescription(`Users can now react with ${emojiInput} to get the ${role} role!`)
          .addFields(
            { name: 'Type', value: type, inline: true },
            { name: 'Message', value: `[Jump to message](${message.url})`, inline: true }
          )
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }

      case 'remove': {
        const messageId = interaction.options.getString('message_id', true);
        const emojiInput = interaction.options.getString('emoji', true);

        const emojiMatch = emojiInput.match(/<a?:(\w+):(\d+)>/);
        const emoji = emojiMatch ? emojiMatch[2] : emojiInput;

        const deleted = await ReactionRoleModel.findOneAndDelete({ guildId, messageId, emoji });

        if (!deleted) {
          await interaction.reply({ embeds: [errorEmbed('Reaction role not found!')], ephemeral: true });
          return;
        }

        await interaction.reply({ embeds: [successEmbed('Reaction role removed successfully!')] });
        break;
      }

      case 'list': {
        const reactionRoles = await ReactionRoleModel.find({ guildId });

        if (reactionRoles.length === 0) {
          await interaction.reply({ embeds: [errorEmbed('No reaction roles configured in this server.')], ephemeral: true });
          return;
        }

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.primary)
          .setTitle('🎭 Reaction Roles')
          .setDescription(
            reactionRoles.map((rr, i) => {
              const role = interaction.guild?.roles.cache.get(rr.roleId);
              return `**${i + 1}.** <#${rr.channelId}> - ${role || 'Unknown Role'}\n` +
                     `   Emoji: ${rr.emoji.match(/^\d+$/) ? `<:e:${rr.emoji}>` : rr.emoji} | Type: \`${rr.type}\``;
            }).join('\n\n')
          )
          .setFooter({ text: `${reactionRoles.length} reaction role(s)` })
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
        break;
      }

      case 'create': {
        const channel = interaction.options.getChannel('channel', true) as TextChannel;
        const title = interaction.options.getString('title', true);
        const description = interaction.options.getString('description', true);

        const embed = new EmbedBuilder()
          .setColor(EMBED_COLORS.primary)
          .setTitle(title)
          .setDescription(description)
          .setFooter({ text: 'React below to get your roles!' })
          .setTimestamp();

        const message = await channel.send({ embeds: [embed] });

        const responseEmbed = new EmbedBuilder()
          .setColor(EMBED_COLORS.success)
          .setTitle('✅ Reaction Role Message Created')
          .setDescription(`Message created in ${channel}!\n\nNow use \`/reactionrole add\` with message ID: \`${message.id}\` to add reaction roles.`)
          .setTimestamp();

        await interaction.reply({ embeds: [responseEmbed] });
        break;
      }
    }
  },
};

export default command;
