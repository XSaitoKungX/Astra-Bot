// ===========================================
// ASTRA BOT - Shared Constants
// ===========================================

import type { ThemeColors, ThemePreset } from '../types/index.js';

// ============ Bot Constants ============

export const BOT_NAME = process.env.BOT_NAME || 'Astra';
export const BOT_VERSION = process.env.BOT_VERSION || '2.3.0';
export const BOT_COLOR = 0x9B59B6; // Purple
export const BOT_INVITE_PERMISSIONS = '1642787765494'; // Recommended permissions

// ============ Dynamic Links (from .env) ============

export const BOT_LINKS = {
  // Discord
  supportServer: process.env.DISCORD_SUPPORT_URL || 'https://discord.gg/KD84DmNA89',
  inviteCode: process.env.DISCORD_INVITE_CODE || 'KD84DmNA89',
  
  // GitHub
  github: process.env.GITHUB_URL || 'https://github.com/XSaitoKungX/Astra-Bot',
  githubProfile: 'https://github.com/XSaitoKungX',
  
  // Website / Dashboard
  website: process.env.WEBSITE_URL || process.env.DASHBOARD_URL || 'https://astra.novaplex.xyz',
  docs: process.env.DOCS_URL || 'https://docs.novaplex.xyz',
  
  // Bot Lists
  topgg: process.env.TOPGG_URL || '',
} as const;

// Helper to generate invite link
export function generateBotInviteUrl(clientId: string): string {
  return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=${BOT_INVITE_PERMISSIONS}&scope=bot%20applications.commands`;
}

// Legacy exports for backwards compatibility
export const BOT_GITHUB_URL = BOT_LINKS.github;
export const BOT_SUPPORT_SERVER = BOT_LINKS.supportServer;

export const DEFAULT_COOLDOWN = 3; // seconds
export const MAX_EMBED_DESCRIPTION = 4096;
export const MAX_EMBED_FIELDS = 25;
export const MAX_FIELD_VALUE = 1024;

// ============ Leveling Constants ============

export const XP_PER_MESSAGE_DEFAULT = 15;
export const XP_COOLDOWN_DEFAULT = 60; // seconds
export const LEVEL_UP_BASE = 100;
export const LEVEL_UP_MULTIPLIER = 1.5;

export function calculateXpForLevel(level: number): number {
  return Math.floor(LEVEL_UP_BASE * Math.pow(level, LEVEL_UP_MULTIPLIER));
}

export function calculateLevelFromXp(totalXp: number): number {
  let level = 0;
  let xpRequired = 0;
  while (totalXp >= xpRequired) {
    level++;
    xpRequired += calculateXpForLevel(level);
  }
  return level - 1;
}

// ============ Economy Constants ============

export const DEFAULT_CURRENCY_NAME = 'Astra Coins';
export const DEFAULT_CURRENCY_SYMBOL = '✨';
export const DEFAULT_DAILY_REWARD = 100;
export const DEFAULT_WORK_REWARD = { min: 50, max: 150 };
export const DEFAULT_WORK_COOLDOWN = 3600; // 1 hour

// ============ Theme Constants ============

export const THEME_PRESETS: Record<ThemePreset, ThemeColors> = {
  light: {
    primary: '#6366F1',
    secondary: '#8B5CF6',
    accent: '#EC4899',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#1E293B',
    textMuted: '#64748B',
    border: '#E2E8F0',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    gradientFrom: '#6366F1',
    gradientVia: '#8B5CF6',
    gradientTo: '#EC4899',
  },
  dark: {
    primary: '#818CF8',
    secondary: '#A78BFA',
    accent: '#F472B6',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F8FAFC',
    textMuted: '#94A3B8',
    border: '#334155',
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
    gradientFrom: '#818CF8',
    gradientVia: '#A78BFA',
    gradientTo: '#F472B6',
  },
  'royal-purple': {
    primary: '#9333EA',
    secondary: '#7C3AED',
    accent: '#C084FC',
    background: '#1A0A2E',
    surface: '#2D1B4E',
    text: '#F3E8FF',
    textMuted: '#C4B5FD',
    border: '#4C1D95',
    success: '#A855F7',
    warning: '#E879F9',
    error: '#F472B6',
    gradientFrom: '#9333EA',
    gradientVia: '#7C3AED',
    gradientTo: '#4F46E5',
  },
  midnight: {
    primary: '#3B82F6',
    secondary: '#1D4ED8',
    accent: '#06B6D4',
    background: '#020617',
    surface: '#0F172A',
    text: '#E0F2FE',
    textMuted: '#7DD3FC',
    border: '#1E3A5F',
    success: '#22D3EE',
    warning: '#38BDF8',
    error: '#F43F5E',
    gradientFrom: '#0EA5E9',
    gradientVia: '#3B82F6',
    gradientTo: '#6366F1',
  },
  sunset: {
    primary: '#F97316',
    secondary: '#EA580C',
    accent: '#FB923C',
    background: '#1C1917',
    surface: '#292524',
    text: '#FEF3C7',
    textMuted: '#FCD34D',
    border: '#44403C',
    success: '#84CC16',
    warning: '#FACC15',
    error: '#EF4444',
    gradientFrom: '#F97316',
    gradientVia: '#EF4444',
    gradientTo: '#EC4899',
  },
  sakura: {
    primary: '#EC4899',
    secondary: '#DB2777',
    accent: '#F9A8D4',
    background: '#FDF2F8',
    surface: '#FCE7F3',
    text: '#831843',
    textMuted: '#BE185D',
    border: '#FBCFE8',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    gradientFrom: '#F472B6',
    gradientVia: '#EC4899',
    gradientTo: '#DB2777',
  },
  ocean: {
    primary: '#0891B2',
    secondary: '#0E7490',
    accent: '#22D3EE',
    background: '#042F2E',
    surface: '#134E4A',
    text: '#CCFBF1',
    textMuted: '#5EEAD4',
    border: '#115E59',
    success: '#2DD4BF',
    warning: '#FBBF24',
    error: '#FB7185',
    gradientFrom: '#06B6D4',
    gradientVia: '#0891B2',
    gradientTo: '#0D9488',
  },
};

// ============ Embed Colors ============

export const EMBED_COLORS = {
  primary: 0x9B59B6,    // Purple
  success: 0x2ECC71,    // Green
  warning: 0xF39C12,    // Orange
  error: 0xE74C3C,      // Red
  info: 0x3498DB,       // Blue
  moderation: 0xE91E63, // Pink
  economy: 0xF1C40F,    // Gold
  leveling: 0x00BCD4,   // Cyan
  music: 0x1DB954,      // Spotify Green
  fun: 0xFF6B6B,        // Coral
};

// ============ Emoji Constants ============

export const EMOJIS = {
  success: '✅',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️',
  loading: '⏳',
  star: '⭐',
  coin: '🪙',
  levelUp: '🎉',
  music: '🎵',
  ban: '🔨',
  kick: '👢',
  mute: '🔇',
  timeout: '⏰',
  ticket: '🎫',
  welcome: '👋',
  settings: '⚙️',
  stats: '📊',
  crown: '👑',
  heart: '❤️',
  sparkles: '✨',
};

// ============ API Constants ============

export const API_RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
};

export const JWT_EXPIRY = '7d';
export const SESSION_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days

// ============ Discord OAuth2 Scopes ============

export const DISCORD_SCOPES = ['identify', 'guilds', 'email'];
export const DISCORD_API_BASE = 'https://discord.com/api/v10';
