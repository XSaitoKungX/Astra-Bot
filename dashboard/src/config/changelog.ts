// ===========================================
// ASTRA BOT - Changelog & Version System
// ===========================================

export interface ChangelogEntry {
  version: string;
  date: string;
  type: 'major' | 'minor' | 'patch';
  title: string;
  description?: string;
  changes: {
    type: 'added' | 'changed' | 'fixed' | 'removed' | 'improved';
    text: string;
  }[];
}

// Current version
export const CURRENT_VERSION = '2.4.0';
export const VERSION_DATE = '2025-11-28';

// Full changelog
export const CHANGELOG: ChangelogEntry[] = [
  {
    version: '2.4.0',
    date: '2025-11-28',
    type: 'minor',
    title: 'Engagement Features & Enhanced Models',
    description: 'Complete engagement system with Reaction Roles, Starboard, AFK, Reminders, Birthdays, and Custom Commands.',
    changes: [
      // New Commands
      { type: 'added', text: '/reactionrole - Reaction roles with 4 types (normal, unique, verify, drop)' },
      { type: 'added', text: '/starboard - Starboard system with configurable threshold and emoji' },
      { type: 'added', text: '/afk - AFK status with mention tracking' },
      { type: 'added', text: '/reminder - Reminder system with flexible time parsing' },
      { type: 'added', text: '/birthday - Birthday system with upcoming list' },
      { type: 'added', text: '/customcommand - Custom commands with usage tracking' },
      
      // Database Models
      { type: 'added', text: 'ReactionRole model with instance methods' },
      { type: 'added', text: 'Starboard model with star tracking' },
      { type: 'added', text: 'AFK model with nickname restoration' },
      { type: 'added', text: 'Reminder model with recurring support' },
      { type: 'added', text: 'Birthday model with age calculation' },
      { type: 'added', text: 'CustomCommand model with embed support' },
      
      // Events
      { type: 'added', text: 'messageReactionAdd event for reaction roles & starboard' },
      { type: 'added', text: 'messageReactionRemove event for role removal' },
      
      // Improvements
      { type: 'improved', text: 'All models now have instance and static methods' },
      { type: 'improved', text: 'Added IStarboardConfig to shared types' },
      { type: 'fixed', text: 'TypeScript errors in engagement features' },
    ],
  },
  {
    version: '2.3.0',
    date: '2025-11-28',
    type: 'minor',
    title: 'GitHub Workflows & Project Setup',
    description: 'Complete GitHub project setup with CI/CD, security policies, and automated dependency updates.',
    changes: [
      // GitHub Workflows
      { type: 'added', text: 'CI workflow with lint, typecheck, and build' },
      { type: 'added', text: 'Release workflow with auto-tagging and changelog generation' },
      { type: 'added', text: 'Manual release trigger via GitHub Actions' },
      { type: 'added', text: 'Dependabot for automated dependency updates' },
      
      // Project Files
      { type: 'added', text: 'SECURITY.md with vulnerability reporting guidelines' },
      { type: 'added', text: 'CONTRIBUTORS.md with contributor avatars' },
      { type: 'added', text: 'LICENSE (MIT)' },
      { type: 'added', text: 'Issue templates (bug report, feature request)' },
      { type: 'added', text: 'Pull request template' },
      
      // Code Quality
      { type: 'added', text: 'ESLint 9 flat config (eslint.config.js)' },
      { type: 'improved', text: 'README.md with badges, stats, and star history' },
      { type: 'improved', text: '.gitignore with comprehensive patterns' },
      { type: 'fixed', text: 'ESLint errors and warnings resolved' },
    ],
  },
  {
    version: '2.2.0',
    date: '2025-11-28',
    type: 'minor',
    title: 'Top.gg Ready & Dynamic Links',
    description: 'All links are now dynamic and configurable via .env. Prepared for top.gg listing.',
    changes: [
      // Dynamic Links
      { type: 'added', text: 'All links now configurable via .env file' },
      { type: 'added', text: 'BOT_LINKS config for centralized link management' },
      { type: 'added', text: 'Support for top.gg, discord.bots.gg integration' },
      { type: 'added', text: 'Dynamic bot invite URL with configurable permissions' },
      
      // Top.gg Preparation
      { type: 'added', text: 'TOP_GG_LISTING.md with complete listing info' },
      { type: 'added', text: 'TOPGG_TOKEN and webhook support in .env' },
      { type: 'added', text: 'Bot description and feature highlights' },
      
      // Code Quality
      { type: 'improved', text: 'Removed all hardcoded URLs from codebase' },
      { type: 'improved', text: 'Centralized links in dashboard config' },
      { type: 'improved', text: 'Bot status shows dynamic website URL' },
      { type: 'fixed', text: '.env structure updated with new link variables' },
    ],
  },
  {
    version: '2.1.0',
    date: '2025-11-28',
    type: 'minor',
    title: 'Modern Music Cards & Dashboard Giveaway Management',
    description: 'Complete music command redesign with modern card-style embeds. Create and manage giveaways from dashboard.',
    changes: [
      // Music Commands - Modern Card Style
      { type: 'improved', text: '/nowplaying - Modern card with source icon, progress bar, 2 button rows' },
      { type: 'improved', text: '/queue - Card-style with track list, duration, queue stats' },
      { type: 'improved', text: '/play - Shows source-colored embeds (YouTube/Spotify/SoundCloud)' },
      { type: 'added', text: '/filters - New command! Audio filters panel with toggle buttons' },
      { type: 'added', text: 'Music: 9 audio filters (Bassboost, 8D, Vaporwave, Nightcore, Lofi, etc.)' },
      { type: 'added', text: 'Music: Interactive control buttons (prev, play/pause, skip, stop, loop)' },
      { type: 'added', text: 'Music: Volume up/down, shuffle, queue buttons' },
      { type: 'added', text: 'Music: Modern progress bar with timestamps' },
      { type: 'added', text: 'Music: Source-specific colors and icons' },
      
      // Giveaway Dashboard
      { type: 'added', text: 'Dashboard: Create Giveaway Modal with full options' },
      { type: 'added', text: 'Dashboard: End, Reroll, Delete giveaway actions' },
      { type: 'added', text: 'Dashboard: Advanced options (required role/level, bonus entries)' },
      { type: 'added', text: 'Dashboard: Live giveaway countdown timers' },
      { type: 'added', text: 'Dashboard: Empty state with quick create button' },
      { type: 'added', text: 'API: POST /giveaways/create endpoint' },
      { type: 'added', text: 'API: DELETE giveaway action support' },
      
      // Music Dashboard
      { type: 'improved', text: 'Music Settings: Modern card-based UI like Discord' },
      { type: 'added', text: 'Music Settings: Source Info Card with requester, duration, queue count' },
      { type: 'added', text: 'Music Settings: Now Playing Card with live progress bar' },
      { type: 'added', text: 'Music Settings: Audio Filters Panel (Bassboost, 8D, Nightcore, etc.)' },
      { type: 'added', text: 'Music Settings: Queue Panel with time remaining and track list' },
      { type: 'improved', text: 'Music Settings: Real-time position updates every second' },
      { type: 'improved', text: 'Music Settings: Responsive two-column layout when playing' },
      
      // Database Fixes
      { type: 'added', text: 'GuildConfig: MusicConfigSchema added' },
      { type: 'added', text: 'GuildConfig: GiveawayConfigSchema added' },
      { type: 'fixed', text: 'AutomodSchema: Simplified to match frontend structure' },
      { type: 'fixed', text: 'AutomodSchema: badWords is now flat string array' },
      { type: 'fixed', text: 'Shared Types: IMusicConfig interface added' },
      { type: 'fixed', text: 'Shared Types: IGiveawayConfig interface added' },
      { type: 'fixed', text: 'Mongoose 9: Fixed create() typing with new Model().save()' },
      
      // Bug Fixes
      { type: 'fixed', text: 'Automod: badWords TypeError when not array' },
      { type: 'fixed', text: 'API: validModules list now includes all modules' },
      { type: 'fixed', text: 'Giveaway actions: Use messageId instead of _id' },
    ],
  },
  {
    version: '2.0.0',
    date: '2025-11-28',
    type: 'major',
    title: 'Music System, Giveaways & Major Upgrades',
    description: 'Major release with complete Music System, Giveaway System, and all dependencies updated to latest versions.',
    changes: [
      // Music System
      { type: 'added', text: '/play - Play songs/playlists (YouTube, Spotify, SoundCloud)' },
      { type: 'added', text: '/skip - Skip current song (with skip-to position)' },
      { type: 'added', text: '/stop - Stop playback and clear queue' },
      { type: 'added', text: '/queue - View queue with pagination' },
      { type: 'added', text: '/nowplaying - Current song with progress bar & controls' },
      { type: 'added', text: '/volume - Adjust volume (0-100%)' },
      { type: 'added', text: '/loop - Loop modes (off, track, queue, autoplay)' },
      { type: 'added', text: '/shuffle - Shuffle the queue' },
      { type: 'added', text: '/seek - Seek to position (mm:ss format)' },
      { type: 'added', text: '/pause - Pause/resume playback' },
      { type: 'added', text: '/remove - Remove track from queue' },
      { type: 'added', text: '/clearqueue - Clear all tracks from queue' },
      { type: 'added', text: 'MusicPlayerManager with discord-player v7' },
      { type: 'added', text: 'Interactive player buttons (⏮️ ⏯️ ⏭️ ⏹️ 🔀)' },
      
      // Giveaway System
      { type: 'added', text: '/giveaway start - Create giveaways with requirements' },
      { type: 'added', text: '/giveaway end - End giveaway early' },
      { type: 'added', text: '/giveaway reroll - Reroll winners' },
      { type: 'added', text: '/giveaway list - List active giveaways' },
      { type: 'added', text: '/giveaway delete - Delete a giveaway' },
      { type: 'added', text: 'Multiple winners support (1-20)' },
      { type: 'added', text: 'Role & level requirements' },
      { type: 'added', text: 'Bonus entries for roles' },
      { type: 'added', text: 'Auto-end with scheduled checks' },
      
      // Package Upgrades
      { type: 'changed', text: 'discord.js upgraded to v14.25.1' },
      { type: 'changed', text: 'mongoose upgraded to v9.0.0' },
      { type: 'changed', text: 'typescript upgraded to v5.9.3' },
      { type: 'changed', text: 'express upgraded to v5.1.0' },
      { type: 'changed', text: 'All dependencies updated to latest versions' },
      { type: 'added', text: 'discord-player v7.1.0 with @discord-player/extractor' },
      { type: 'added', text: '@discordjs/opus & ffmpeg-static for audio' },
      
      // Fixes
      { type: 'fixed', text: 'Mongoose 9 compatibility (pre-save hooks, create() typing)' },
      { type: 'fixed', text: 'chokidar v5 type issues' },
      { type: 'fixed', text: 'ms package StringValue type' },
      { type: 'removed', text: '@types/bcryptjs (bcryptjs has own types now)' },
    ],
  },
  {
    version: '1.16.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Massive Command Expansion',
    description: 'Added 15+ new commands including gambling, admin tools, and more.',
    changes: [
      // Moderation
      { type: 'added', text: '/slowmode - Set channel slowmode (0-6 hours)' },
      { type: 'added', text: '/lock channel|unlock - Lock/unlock channels' },
      { type: 'added', text: '/softban - Ban & unban to delete messages' },
      
      // Utility
      { type: 'added', text: '/roleinfo - Detailed role information' },
      { type: 'added', text: '/channelinfo - Channel details & stats' },
      
      // Leveling Admin
      { type: 'added', text: '/setlevel - Admin set user level (0-1000)' },
      { type: 'added', text: '/givexp - Add/remove XP from users' },
      
      // Economy Gambling
      { type: 'added', text: '/rob - Rob other users (40% success, 30min cooldown)' },
      { type: 'added', text: '/slots - Slot machine with 8 symbols & payouts' },
      { type: 'added', text: '/blackjack - Full blackjack with hit/stand/double' },
      
      // Fun
      { type: 'added', text: '/dice - Roll 1-10 dice with 2-100 sides' },
      { type: 'added', text: '/rps - Rock Paper Scissors (vs bot or players)' },
      { type: 'added', text: '/meme - Random memes from 5 subreddits' },
    ],
  },
  {
    version: '1.15.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'New Commands Pack',
    description: 'Added 7 new commands across economy, fun, and utility categories.',
    changes: [
      // Economy Commands
      { type: 'added', text: '/pay - Transfer coins to other users' },
      { type: 'added', text: '/work - Work to earn coins with 15 different jobs' },
      
      // Fun Commands
      { type: 'added', text: '/8ball - Ask the magic 8-ball a question' },
      { type: 'added', text: '/coinflip - Flip a coin, optionally bet coins (1.8x payout)' },
      
      // Utility Commands
      { type: 'added', text: '/invite - Bot invite link with support server and dashboard' },
      { type: 'added', text: '/botinfo - Detailed bot statistics and system info' },
      { type: 'added', text: '/poll - Create polls with custom options and duration' },
      
      // Improvements
      { type: 'improved', text: 'Leaderboard card - Fixed emoji rendering, real usernames' },
      { type: 'improved', text: 'Leaderboard card - Type badges with color coding' },
      { type: 'improved', text: 'Leaderboard card - Value pills with type-specific colors' },
    ],
  },
  {
    version: '1.14.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Canvas Card System',
    description: 'Beautiful image cards for rank, leaderboard, balance, and daily commands using @napi-rs/canvas.',
    changes: [
      // Card Generator
      { type: 'added', text: 'Card Generator utility with @napi-rs/canvas for image generation' },
      { type: 'added', text: 'Rank Card - Modern design with avatar, level badge, progress bar, stats' },
      { type: 'added', text: 'Leaderboard Card - Visual ranking with avatars and medals for top 3' },
      { type: 'added', text: 'Balance Card - Wallet/Bank display with rank and streak info' },
      { type: 'added', text: 'Daily Card - Reward breakdown with streak and bonus visualization' },
      
      // Command Updates
      { type: 'improved', text: '/rank - Now displays beautiful canvas card instead of embed' },
      { type: 'improved', text: '/leaderboard - Canvas card with pagination and type selector' },
      { type: 'improved', text: '/balance - Canvas card with deposit/withdraw/daily buttons' },
      { type: 'improved', text: '/daily - Canvas card showing reward breakdown and streak' },
      
      // Technical
      { type: 'added', text: '@napi-rs/canvas dependency for fast image generation' },
      { type: 'added', text: 'Color palette system with dark theme colors' },
      { type: 'added', text: 'Helper functions for circular avatars and rounded rectangles' },
    ],
  },
  {
    version: '1.13.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'New Commands & Dashboard Enhancements',
    description: 'Major update with new slash commands, improved pages, and bug fixes.',
    changes: [
      // New Commands
      { type: 'added', text: '/warn add|remove|list|clear - Complete warning system with mod log integration' },
      { type: 'added', text: '/clear - Delete messages with filters (user, contains, bots, attachments)' },
      { type: 'added', text: '/rank - Check level and rank with progress bar and milestones' },
      { type: 'added', text: '/leaderboard - Multi-type leaderboard (XP, Level, Messages, Balance, Weekly)' },
      { type: 'added', text: '/balance - Economy balance with deposit/withdraw/daily buttons' },
      { type: 'added', text: '/daily - Daily reward with streaks and weekly bonuses' },
      
      // Enhanced Commands
      { type: 'improved', text: '/anime - New reaction subcommand for user interactions' },
      { type: 'improved', text: '/anime - Refresh buttons and category dropdown' },
      { type: 'improved', text: '/waifu - 9 types with dropdown selector and random type button' },
      { type: 'improved', text: '/ban - Subcommands (add/remove/list), quick unban button' },
      { type: 'improved', text: '/kick - Detailed embeds with roles, quick ban button' },
      
      // Dashboard Pages
      { type: 'added', text: 'Status Page (/status) - Bot, API, and database health monitoring' },
      { type: 'improved', text: 'Landing Page - Live status section, "Why Astra" section, Support CTA' },
      { type: 'improved', text: 'User Profile - Achievements/badges, voice activity section' },
      { type: 'added', text: 'Dashboard profile links in /userinfo and /banner commands' },
      
      // Build System
      { type: 'improved', text: 'Vite build - Smarter code splitting with vendor/page chunks' },
      { type: 'added', text: 'grid.svg asset for CTA backgrounds' },
      
      // Bug Fixes
      { type: 'fixed', text: 'AnimeChan API - Updated to v1 endpoint with fallback quotes' },
      { type: 'fixed', text: 'Command duplication on restart - Proper cleanup of guild/global commands' },
      { type: 'fixed', text: 'User Profile stats - Fixed discordId query (was odiscordId)' },
      { type: 'fixed', text: '/timeout - Fixed createdAt TypeScript error in mod logs' },
    ],
  },
  {
    version: '1.12.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Economy & Shop Dashboard Overhaul',
    description: 'Comprehensive modernization of Economy and Shop settings pages with new features and improved UX.',
    changes: [
      // Economy Settings
      { type: 'added', text: 'Economy: Tab-based navigation (General, Rewards, Gambling, Robbery)' },
      { type: 'added', text: 'Economy: Bank system with interest rates and intervals' },
      { type: 'added', text: 'Economy: Daily streak bonuses with configurable max days' },
      { type: 'added', text: 'Economy: Crime command with success rate and fines' },
      { type: 'added', text: 'Economy: Gambling settings (min/max bet, cooldown)' },
      { type: 'added', text: 'Economy: Robbery system with jail time and success rates' },
      { type: 'added', text: 'Economy: Currency preview showing symbol and name' },
      { type: 'added', text: 'Economy: Reset to defaults button' },
      { type: 'improved', text: 'Economy: Max wallet and bank balance limits' },
      
      // Shop Settings
      { type: 'added', text: 'Shop: New item types (Lootbox, Badge)' },
      { type: 'added', text: 'Shop: XP Boost settings with multiplier and duration' },
      { type: 'added', text: 'Shop: Featured items with visual badge' },
      { type: 'added', text: 'Shop: Sale prices with percentage discount display' },
      { type: 'added', text: 'Shop: Required level and role for items' },
      { type: 'added', text: 'Shop: Search and filter by item type' },
      { type: 'added', text: 'Shop: Sort by name, price, type, or stock' },
      { type: 'added', text: 'Shop: Duplicate item functionality' },
      { type: 'added', text: 'Shop: Stats cards (total, active, out of stock, featured)' },
      { type: 'improved', text: 'Shop: Item cards show duration, stock, max per user' },
      { type: 'improved', text: 'Shop: Better visual type indicators with icons' },
      
      // Dashboard Layout
      { type: 'improved', text: 'Layout: Collapsible sidebar with version info' },
      { type: 'added', text: 'Layout: Command palette search (⌘K / Ctrl+K)' },
      { type: 'added', text: 'Layout: Breadcrumb navigation' },
      { type: 'added', text: 'Layout: Server info in sidebar when on guild route' },
      { type: 'added', text: 'Layout: Footer with links and version' },
      { type: 'improved', text: 'Layout: Enhanced user menu with My Profile link' },
      { type: 'improved', text: 'Layout: Keyboard shortcuts (Escape to close menus)' },
      
      // Theme Switcher
      { type: 'improved', text: 'Themes: Complete redesign with categorized view' },
      { type: 'added', text: 'Themes: 6 new themes (Forest, Nord, Dracula, Monokai, Cyberpunk, Coffee)' },
      { type: 'added', text: 'Themes: Category tabs (Dark, Light, Colorful)' },
      { type: 'added', text: 'Themes: Theme descriptions and NEW badges' },
      { type: 'added', text: 'Themes: Color preview with larger swatches' },
      { type: 'improved', text: 'Themes: Grid layout with better selection indicator' },
      
      // Roles Page
      { type: 'improved', text: 'Roles: Complete redesign with filter chips' },
      { type: 'added', text: 'Roles: Search with clear button' },
      { type: 'added', text: 'Roles: Filter by Bot, Hoisted, Mentionable, Colored, Admin' },
      { type: 'added', text: 'Roles: Copy role ID button' },
      { type: 'added', text: 'Roles: Admin permission detection' },
      { type: 'improved', text: 'Roles: Grid layout with role cards' },
      { type: 'changed', text: 'Roles: Removed redundant Role Rewards section (use RoleRewardsPage)' },
      
      // Welcome Settings Page
      { type: 'improved', text: 'Welcome: Complete redesign with tab cards' },
      { type: 'added', text: 'Welcome: Goodbye messages support' },
      { type: 'added', text: 'Welcome: Quick status indicators' },
      { type: 'added', text: 'Welcome: DM warning notification' },
      { type: 'improved', text: 'Welcome: Better variables reference' },
      { type: 'improved', text: 'Welcome: Animated tab switching' },
      
      // Tickets Settings Page
      { type: 'improved', text: 'Tickets: Complete redesign with stats cards' },
      { type: 'added', text: 'Tickets: Multiple ticket panels support' },
      { type: 'added', text: 'Tickets: Auto-close configuration' },
      { type: 'added', text: 'Tickets: Ticket naming format' },
      { type: 'added', text: 'Tickets: Toggle options (user close, require reason, ping on create)' },
      { type: 'added', text: 'Tickets: EmojiPicker with server emojis and standard emojis' },
      { type: 'improved', text: 'Tickets: Better panel editor with emoji picker and style' },
      
      // Custom Commands Page
      { type: 'improved', text: 'Commands: Complete redesign with stats cards' },
      { type: 'added', text: 'Commands: Search and filter functionality' },
      { type: 'added', text: 'Commands: Copy command button' },
      { type: 'added', text: 'Commands: Toggle indicators with icons' },
      { type: 'improved', text: 'Commands: Better no-results state' },
      { type: 'improved', text: 'Commands: Enhanced variables reference' },
      
      // Members Page
      { type: 'improved', text: 'Members: Complete page redesign with stats cards' },
      { type: 'added', text: 'Members: Quick filters (All, Admins, Bots, New, Top Level, Top Balance)' },
      { type: 'added', text: 'Members: Grid and List view toggle' },
      { type: 'added', text: 'Members: Sort by messages count' },
      { type: 'added', text: 'Members: Display name (globalName) support' },
      { type: 'added', text: 'Members: Bot badge indicator' },
      { type: 'added', text: 'Members: Status indicator support' },
      { type: 'added', text: 'Members: Message count display in cards' },
      { type: 'changed', text: 'Members: Page size options now 30, 50, 100, 300, All (default 30)' },
      { type: 'improved', text: 'Members: Enhanced search with clear button' },
      { type: 'improved', text: 'Members: List view with quick action buttons' },
      
      // Backend Fixes
      { type: 'fixed', text: 'API: Module settings now use findOneAndUpdate for legacy data compatibility' },
      { type: 'fixed', text: 'API: Fixed validation errors with legacy boolean module data' },
      { type: 'fixed', text: 'Schema: Relaxed min constraints for gambling and bank settings' },
    ],
  },
  {
    version: '1.11.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Database Models Modernization & Dashboard Improvements',
    description: 'Complete overhaul of all database models with new features, TypeScript improvements, and dashboard enhancements.',
    changes: [
      // Database Models
      { type: 'added', text: 'User model: Premium system with tiers, badges, global stats, preferences' },
      { type: 'added', text: 'User model: Bot owner/staff flags, rate limiting, ban system' },
      { type: 'added', text: 'UserEconomy: Gambling stats, robbery system, jail, daily streaks' },
      { type: 'added', text: 'UserEconomy: Bank with interest, boosts, comprehensive transaction history' },
      { type: 'added', text: 'UserLevel: Voice XP tracking, weekly/monthly stats, daily streaks' },
      { type: 'added', text: 'UserLevel: Per-user card customization, bulk XP operations' },
      { type: 'added', text: 'Ticket: Priority system (low/medium/high/urgent), claiming, notes' },
      { type: 'added', text: 'Ticket: Activity logs, feedback system, auto-close tracking' },
      { type: 'added', text: 'ModerationLog: Revocation system, edit history, automod flags' },
      { type: 'added', text: 'ModerationLog: New actions (softban, note, purge, untimeout)' },
      { type: 'added', text: 'GuildConfig: Logging system with event toggles' },
      { type: 'added', text: 'GuildConfig: Premium features, custom commands, verification' },
      { type: 'added', text: 'DashboardRole: Permission system, role expiration, bulk operations' },
      
      // TypeScript Improvements
      { type: 'improved', text: 'All models now have proper TypeScript interfaces for instance/static methods' },
      { type: 'improved', text: 'Comprehensive type exports from models index' },
      { type: 'improved', text: 'Shared types expanded with 100+ new interface fields' },
      
      // Dashboard
      { type: 'added', text: 'Changelog page: Search functionality with real-time filtering' },
      { type: 'added', text: 'Changelog page: Filter counts showing changes per type' },
      { type: 'improved', text: 'Changelog page: Empty state when no results found' },
      { type: 'improved', text: 'Automod settings: Display channel/role names instead of IDs' },
      { type: 'improved', text: 'Leveling settings: Better error handling for stats fetch' },
      
      // API
      { type: 'added', text: 'New endpoint: /stats/:guildId/leveling for leveling statistics' },
      { type: 'improved', text: 'canManageGuild middleware: Bot owner bypass, token expiration handling' },
      { type: 'fixed', text: 'Guild info API returns placeholder data instead of 500 error' },
      { type: 'fixed', text: 'Discord roles API returns empty array on error' },
    ],
  },
  {
    version: '1.10.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Dynamic Landing Page & Production Ready',
    description: 'Fully dynamic landing page with live bot statistics and production deployment.',
    changes: [
      { type: 'added', text: 'Dynamic bot statistics on landing page (servers, users, commands, uptime)' },
      { type: 'added', text: 'Public API endpoint for bot stats (/api/bot/stats/public)' },
      { type: 'added', text: 'Live command list fetched from bot' },
      { type: 'added', text: 'Real-time ping and uptime display' },
      { type: 'improved', text: 'Landing page stats auto-refresh every 60 seconds' },
      { type: 'improved', text: 'Commands section shows category colors' },
      { type: 'improved', text: 'Version badge shows current version dynamically' },
      { type: 'added', text: 'Production deployment configuration for Pelican Panel' },
      { type: 'added', text: 'DEPLOYMENT.md with complete hosting guide' },
      { type: 'improved', text: 'Environment configuration for Nginx reverse proxy' },
    ],
  },
  {
    version: '1.9.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Utility Commands & Dashboard Redesign',
    description: 'New utility slash commands and a completely redesigned landing page.',
    changes: [
      { type: 'added', text: '/ping - Check bot latency with quality indicators' },
      { type: 'added', text: '/userinfo - Detailed user information with badges and Astra stats' },
      { type: 'added', text: '/serverinfo - Server statistics with channels, members, boosts' },
      { type: 'added', text: '/avatar - User avatar with size options and server avatar support' },
      { type: 'added', text: '/banner - User banner display with animated GIF support' },
      { type: 'added', text: '/help - Interactive help menu with autocomplete and category dropdown' },
      { type: 'improved', text: 'Landing page completely redesigned with modern UI' },
      { type: 'improved', text: 'New Astra avatar and branding throughout dashboard' },
      { type: 'improved', text: 'Login page with enhanced design and back navigation' },
      { type: 'added', text: 'Proper favicon and meta tags for SEO and social sharing' },
      { type: 'added', text: 'Commands preview section on landing page' },
    ],
  },
  {
    version: '1.8.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'User Profile Page',
    description: 'Detailed user profiles with stats, moderation history, and quick actions.',
    changes: [
      { type: 'added', text: 'User Profile Page with comprehensive member information' },
      { type: 'added', text: 'Profile banner and avatar display' },
      { type: 'added', text: 'Level progress bar with XP visualization' },
      { type: 'added', text: 'Member stats: Level, Rank, Balance, Messages' },
      { type: 'added', text: 'Roles display with colors' },
      { type: 'added', text: 'Moderation history (Admins only)' },
      { type: 'added', text: 'Quick action buttons based on permissions' },
      { type: 'added', text: 'Copy user ID functionality' },
      { type: 'added', text: 'Member profile API endpoint' },
      { type: 'improved', text: 'Profile link from Members page opens internal profile' },
      { type: 'improved', text: 'User banner with animated GIF support and accentColor fallback' },
      { type: 'improved', text: 'Navigation scrollable with hidden scrollbar' },
      { type: 'fixed', text: 'ModerationLog validation errors (caseId, targetId, moderatorId)' },
    ],
  },
  {
    version: '1.7.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Role Management & Member Actions',
    description: 'Comprehensive member management with full Discord-like actions and reorganized navigation.',
    changes: [
      { type: 'added', text: 'Full member action system: Timeout, Kick, Ban, Warn, Nickname change' },
      { type: 'added', text: 'Voice actions: Server Mute and Server Deafen' },
      { type: 'added', text: 'Economy actions: Reset XP/Level, Reset Balance' },
      { type: 'added', text: 'Action confirmation modals with reason input' },
      { type: 'added', text: 'View Discord Profile link for members' },
      { type: 'added', text: 'Role Management page with server roles overview' },
      { type: 'added', text: 'Drag-and-drop role rewards ordering' },
      { type: 'improved', text: 'Navigation reorganized into categories (General, Moderation, Leveling, Economy, Server)' },
      { type: 'improved', text: 'Member action menu with Discord-like options' },
    ],
  },
  {
    version: '1.6.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Level Cards & Custom Commands',
    description: 'Major dashboard update with level card designer, custom commands, and bulk member actions.',
    changes: [
      { type: 'added', text: 'Level Card Designer with live preview' },
      { type: 'added', text: '8 preset themes and 4 card styles (Modern, Classic, Minimal, Neon)' },
      { type: 'added', text: 'Custom color picker for all card elements' },
      { type: 'added', text: 'Your stats display showing level, XP, and rank' },
      { type: 'added', text: 'Custom Commands page with embed support' },
      { type: 'added', text: 'Command variables: {user}, {username}, {server}, {members}, {channel}' },
      { type: 'added', text: 'Bulk member selection and actions' },
      { type: 'added', text: 'LevelCard reusable component' },
      { type: 'improved', text: 'Navigation with 15+ guild management pages' },
    ],
  },
  {
    version: '1.5.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Shop Management System',
    description: 'New shop management page for creating and managing economy shop items.',
    changes: [
      { type: 'added', text: 'Shop Management page with item CRUD operations' },
      { type: 'added', text: 'Item types: Role, Collectible, XP Boost' },
      { type: 'added', text: 'Item configuration: price, stock, max per user' },
      { type: 'added', text: 'Modal editor for creating/editing items' },
      { type: 'added', text: 'Enable/disable toggle for shop items' },
    ],
  },
  {
    version: '1.4.1',
    date: '2025-11-27',
    type: 'patch',
    title: 'API Error Handling Fix',
    description: 'Fixed 500 errors when bot is not running by returning graceful fallbacks.',
    changes: [
      { type: 'fixed', text: 'Guild info API returns placeholder data instead of 500 error' },
      { type: 'fixed', text: 'Discord roles API returns empty array instead of 500 error' },
      { type: 'improved', text: 'API endpoints work without bot connection (limited data)' },
    ],
  },
  {
    version: '1.4.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Leaderboard & Role Rewards',
    description: 'New leaderboard page with XP/Economy rankings and role rewards configuration.',
    changes: [
      { type: 'added', text: 'Leaderboard page with top members by XP and Economy' },
      { type: 'added', text: 'Podium display for top 3 members' },
      { type: 'added', text: 'Role Rewards page for level-based role assignments' },
      { type: 'added', text: 'Level progression preview in Role Rewards' },
      { type: 'added', text: 'Leaderboard tabs (Levels/Economy) with limit selector' },
      { type: 'improved', text: 'Guild info API with proper channel and role counts' },
      { type: 'fixed', text: 'Channel and role count display in guild overview' },
    ],
  },
  {
    version: '1.3.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Guild Dashboard & API Update',
    description: 'Enhanced guild overview page with server stats and improved API endpoints.',
    changes: [
      { type: 'added', text: 'Guild Info API endpoint with server statistics' },
      { type: 'added', text: 'Server icon and name display in guild dashboard' },
      { type: 'added', text: 'Quick stats (members, channels, roles, boosts)' },
      { type: 'added', text: 'Quick Actions grid for fast navigation' },
      { type: 'added', text: 'Module status overview with enabled/disabled indicators' },
      { type: 'improved', text: 'GuildDashboardPage with modern card layout' },
      { type: 'improved', text: 'Analytics API with real database queries' },
      { type: 'fixed', text: 'Analytics 404 error - correct API endpoint' },
    ],
  },
  {
    version: '1.2.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Dashboard Enhancement Update',
    description: 'Major dashboard improvements with embed builder, analytics, and enhanced settings pages.',
    changes: [
      { type: 'added', text: 'EmbedBuilder component with live preview' },
      { type: 'added', text: 'MessageTypeSelector (Message/Embed/Both options)' },
      { type: 'added', text: 'Analytics page with command usage charts' },
      { type: 'added', text: 'RoleSelect & MultiRoleSelect components' },
      { type: 'added', text: 'Toggle switch component' },
      { type: 'added', text: 'Changelog page with version history' },
      { type: 'improved', text: 'Welcome settings with full embed support' },
      { type: 'improved', text: 'Leveling settings with embed customization' },
      { type: 'improved', text: 'All settings pages with ChannelSelect integration' },
      { type: 'fixed', text: 'WebSocket connection 404 errors' },
      { type: 'fixed', text: 'Channel selection not showing server channels' },
    ],
  },
  {
    version: '1.1.0',
    date: '2025-11-27',
    type: 'minor',
    title: 'Members & Pagination Update',
    description: 'Added member management and pagination features.',
    changes: [
      { type: 'added', text: 'MembersPage with full member list' },
      { type: 'added', text: 'Pagination with customizable page sizes (10, 20, 30, 50, 100, All)' },
      { type: 'added', text: 'Member search and filtering' },
      { type: 'added', text: 'Audit Log page' },
      { type: 'added', text: 'Guild channels API endpoint' },
      { type: 'added', text: 'Guild roles API endpoint' },
      { type: 'improved', text: 'Dashboard navigation with new icons' },
      { type: 'fixed', text: 'Login page infinite refresh loop' },
    ],
  },
  {
    version: '1.0.1',
    date: '2025-11-27',
    type: 'patch',
    title: 'Bot Stats & Navigation Fix',
    description: 'Fixed dashboard issues and added bot statistics.',
    changes: [
      { type: 'added', text: 'Bot stats API endpoint (/api/bot/stats)' },
      { type: 'added', text: 'Real-time bot statistics on dashboard' },
      { type: 'fixed', text: 'Dashboard navigation visibility' },
      { type: 'fixed', text: 'Login/Dashboard button logic on landing page' },
      { type: 'improved', text: 'Discord OAuth client ID configuration' },
    ],
  },
  {
    version: '1.0.0',
    date: '2025-11-27',
    type: 'major',
    title: 'Initial Release',
    description: 'First release of Astra Bot with complete foundation.',
    changes: [
      { type: 'added', text: 'Discord.js v14 bot with slash commands' },
      { type: 'added', text: 'MongoDB database with Mongoose ODM' },
      { type: 'added', text: 'Express.js REST API with authentication' },
      { type: 'added', text: 'React dashboard with Vite & TailwindCSS' },
      { type: 'added', text: 'Discord OAuth2 authentication' },
      { type: 'added', text: 'WebSocket real-time updates (Socket.io)' },
      { type: 'added', text: 'Moderation commands (ban, kick, timeout)' },
      { type: 'added', text: 'Leveling system with XP tracking' },
      { type: 'added', text: 'Economy system with balance management' },
      { type: 'added', text: 'Welcome & goodbye messages' },
      { type: 'added', text: 'Multi-theme support (10+ themes)' },
      { type: 'added', text: 'Guild configuration management' },
      { type: 'added', text: 'Protected dashboard routes' },
      { type: 'added', text: 'Responsive mobile-friendly design' },
    ],
  },
];

// Helper functions
export const getLatestVersion = () => CHANGELOG[0];
export const getVersionByNumber = (version: string) => CHANGELOG.find(c => c.version === version);
export const getChangesByType = (type: ChangelogEntry['changes'][0]['type']) => 
  CHANGELOG.flatMap(c => c.changes.filter(change => change.type === type));
