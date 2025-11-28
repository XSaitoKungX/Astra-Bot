// ===========================================
// ASTRA BOT - Dashboard Links Configuration
// All links in one place - easy to update
// ===========================================

// Discord Bot Client ID - UPDATE THIS!
export const BOT_CLIENT_ID = '1207805728530763796';

// Bot Permissions (Administrator = 8, Recommended = 1642787765494)
export const BOT_PERMISSIONS = '1642787765494';

export const BOT_LINKS = {
  // Discord
  supportServer: 'https://discord.gg/KD84DmNA89',
  inviteCode: 'KD84DmNA89',
  
  // Bot Invite
  botInvite: `https://discord.com/api/oauth2/authorize?client_id=${BOT_CLIENT_ID}&permissions=${BOT_PERMISSIONS}&scope=bot%20applications.commands`,
  
  // GitHub
  github: 'https://github.com/XSaitoKungX/Astra-Bot',
  githubProfile: 'https://github.com/XSaitoKungX',
  
  // Website / Dashboard
  website: 'https://astra.novaplex.xyz',
  docs: 'https://docs.novaplex.xyz',
  banner: 'https://astra.novaplex.xyz/Astra_Banner.png',
  
  // Bot Lists
  topgg: 'https://top.gg/bot/' + BOT_CLIENT_ID,
  discordBots: '',
  
  // Social (Optional)
  twitter: '',
  youtube: '',
  patreon: '',
  kofi: '',
} as const;

// Helper to generate invite link with custom client ID
export function generateInviteUrl(clientId?: string): string {
  const id = clientId || BOT_CLIENT_ID;
  return `https://discord.com/api/oauth2/authorize?client_id=${id}&permissions=${BOT_PERMISSIONS}&scope=bot%20applications.commands`;
}

// Bot Info
export const BOT_INFO = {
  name: 'Astra',
  version: '2.4.0',
  prefix: '/',
  description: 'All-in-one Discord bot: Music, Economy, Leveling, Moderation, Giveaways & more!',
  shortDescription: '🚀 All-in-one Discord bot: Music, Economy, Leveling, Moderation, Giveaways, Anime & more! Beautiful dashboard included.',
} as const;

// Feature highlights for landing page
export const BOT_FEATURES = [
  {
    title: 'Music',
    description: 'Play from YouTube, Spotify, SoundCloud with filters',
    icon: '🎵',
    commands: ['/play', '/nowplaying', '/queue', '/filters'],
  },
  {
    title: 'Economy',
    description: 'Virtual economy with gambling, jobs, and shops',
    icon: '💰',
    commands: ['/balance', '/daily', '/work', '/slots', '/blackjack'],
  },
  {
    title: 'Leveling',
    description: 'XP system with custom rank cards and role rewards',
    icon: '📊',
    commands: ['/rank', '/leaderboard', '/setlevel'],
  },
  {
    title: 'Moderation',
    description: 'Keep your server safe with powerful tools',
    icon: '🛡️',
    commands: ['/ban', '/kick', '/warn', '/automod', '/clear'],
  },
  {
    title: 'Giveaways',
    description: 'Create exciting giveaways with requirements',
    icon: '🎉',
    commands: ['/giveaway start', '/giveaway end', '/giveaway reroll'],
  },
  {
    title: 'Fun',
    description: 'Anime, memes, games and more entertainment',
    icon: '🎭',
    commands: ['/anime', '/waifu', '/meme', '/8ball'],
  },
] as const;

// Command counts by category
export const COMMAND_STATS = {
  total: 57,
  categories: {
    moderation: 10,
    music: 13,
    economy: 10,
    leveling: 4,
    fun: 7,
    utility: 12,
    tickets: 1,
  },
} as const;
