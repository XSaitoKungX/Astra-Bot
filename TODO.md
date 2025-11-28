# 🌟 Astra Bot - Development Roadmap

> **Last Updated:** 28. November 2025  
> **Version:** 2.5.0  
> **Status:** Active Development

---

## 📊 Progress Overview

| Category | Completed | Total | Progress |
|----------|-----------|-------|----------|
| Core Infrastructure | 8 | 8 | ✅ 100% |
| Database | 8 | 8 | ✅ 100% |
| Discord Bot Core | 15 | 15 | ✅ 100% |
| Bot Commands | 57 | 60 | ✅ 95% |
| API Backend | 22 | 22 | ✅ 100% |
| Dashboard Core | 10 | 10 | ✅ 100% |
| Dashboard Pages | 20 | 20 | ✅ 100% |
| Settings Pages | 10 | 10 | ✅ 100% |
| Reusable Components | 18 | 18 | ✅ 100% |
| Dashboard UX | 15 | 15 | ✅ 100% |
| GitHub & DevOps | 12 | 12 | ✅ 100% |
| Code Protection | 8 | 8 | ✅ 100% |
| **Phase 1-2 Total** | **203** | **206** | **✅ 99%** |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Bot** | Discord.js v14, TypeScript |
| **API** | Express.js, Passport, Socket.io |
| **Database** | MongoDB, Mongoose |
| **Frontend** | React 18, Vite 5, TailwindCSS |
| **State** | Zustand, TanStack Query |
| **UI** | Framer Motion, Lucide Icons |
| **Auth** | Discord OAuth2 |
| **Deployment** | PM2, Nginx/Cloudflare |

---

## 🎯 Recent Updates (v2.5.0)

### Code Protection & Security (NEW! v2.5.0)
- ✅ Git-crypt encryption for source files
- ✅ JavaScript obfuscation for distribution builds
- ✅ Release build script (`npm run release`)
- ✅ Separate obfuscated and source releases
- ✅ `scripts/build-release.ts` for automated releases
- ✅ `scripts/setup-git-crypt.sh` for easy setup
- ✅ `.gitattributes` for encryption rules
- ✅ CI workflow with git-crypt unlock
- ✅ `docs/CODE_PROTECTION.md` documentation

### Engagement Features (v2.4.0)
- ✅ `/reactionrole` - Reaction roles (normal, unique, verify, drop, binding, limit)
- ✅ `/starboard` - Starboard with configurable threshold
- ✅ `/afk` - AFK status with mention tracking
- ✅ `/reminder` - Reminders with snooze & recurring
- ✅ `/birthday` - Birthday system with age calculation
- ✅ `/customcommand` - Custom commands with aliases
- ✅ Enhanced Mongoose models with instance/static methods
- ✅ `messageReactionAdd` / `messageReactionRemove` events

### GitHub & DevOps (v2.3.0)
- ✅ Git repository initialized and pushed to GitHub
- ✅ CI workflow (lint, typecheck, build)
- ✅ Release workflow with auto-tagging
- ✅ Manual release trigger via GitHub Actions
- ✅ Dependabot for automated dependency updates
- ✅ SECURITY.md with vulnerability reporting
- ✅ CONTRIBUTORS.md with contributor avatars
- ✅ LICENSE (MIT)
- ✅ Issue templates (bug report, feature request)
- ✅ Pull request template
- ✅ ESLint 9 flat config (eslint.config.js)
- ✅ Improved .gitignore with comprehensive patterns

### Dynamic Links & Top.gg Ready (v2.2.0)
- ✅ All links configurable via .env file
- ✅ BOT_LINKS config for centralized link management
- ✅ Support for top.gg, discord.bots.gg integration
- ✅ Dynamic bot invite URL with configurable permissions
- ✅ TOP_GG_LISTING.md with complete listing info
- ✅ TOPGG_TOKEN and webhook support in .env

### Dashboard Modernization (v1.12.0)
- ✅ DashboardLayout complete redesign
- ✅ 13 Themes across 3 categories (Dark, Light, Colorful)
- ✅ Collapsible sidebar with server info
- ✅ Global search modal (Ctrl+K)
- ✅ Breadcrumb navigation
- ✅ Keyboard shortcuts (Escape to close)
- ✅ Modern theme switcher with categories
- ✅ RolesPage with filter chips & admin detection
- ✅ WelcomeSettingsPage with Welcome/Goodbye/DM tabs
- ✅ TicketsSettingsPage with panels & EmojiPicker
- ✅ CustomCommandsPage with stats & search
- ✅ MembersPage with grid/list views
- ✅ EmojiPicker component (emojibase, 1800+ emojis)

---

## ✅ Phase 1: Core Foundation (Completed)

### 🏗️ Core Infrastructure
- [x] Project structure with modular architecture
- [x] Package.json with optimized dependencies
- [x] TypeScript strict configuration
- [x] Environment variables template (`.env.example`)
- [x] Enhanced logger with colors, icons & module support
- [x] Single-port architecture (API + Dashboard)
- [x] Cloudflare/Nginx reverse proxy support
- [x] Graceful shutdown handling

### 🗄️ Database Layer
- [x] MongoDB connection with retry logic
- [x] User model with OAuth tokens
- [x] GuildConfig model with embedded sub-schemas
- [x] UserLevel model with XP calculations
- [x] UserEconomy model with transactions
- [x] ModerationLog model with case IDs
- [x] Ticket model with transcripts
- [x] DashboardRole model for RBAC

### 🤖 Discord Bot Core
- [x] Discord.js v14 client initialization
- [x] Dynamic command handler with hot-reload
- [x] Dynamic event handler
- [x] Slash command deployer
- [x] Ready event with rotating status
- [x] InteractionCreate with cooldowns & permissions
- [x] GuildMemberAdd event (welcome system)
- [x] GuildCreate event (auto-config)
- [x] MessageCreate event (leveling XP)
- [x] Guild sync on startup

### 🌐 API Backend
- [x] Express.js server with TypeScript
- [x] Helmet security middleware
- [x] CORS configuration for dashboard
- [x] Session management with MongoDB store
- [x] Passport Discord OAuth2 strategy
- [x] Auth routes (login, callback, logout, me)
- [x] Guild routes (list, get, update, toggle)
- [x] Guild channels endpoint (with type filtering)
- [x] Guild roles endpoint (with permissions)
- [x] Guild emojis endpoint (server emojis)
- [x] Guild members endpoint (with stats)
- [x] User routes (profile, level, economy)
- [x] Stats routes (guild stats, moderation logs, leaderboards)
- [x] Bot stats endpoint (users, commands, uptime)
- [x] Dashboard roles & permissions system
- [x] Module settings PATCH endpoints
- [x] Analytics API endpoint

### 🎨 Dashboard Frontend
- [x] Vite 5 + React 18 + TypeScript
- [x] TailwindCSS with custom design system
- [x] 13 beautiful theme presets (Dark/Light/Colorful)
- [x] Framer Motion animations
- [x] Zustand state management (auth, theme, sidebar)
- [x] TanStack Query for data fetching
- [x] Axios API client with interceptors
- [x] React Router v6 with future flags
- [x] Hot toast notifications
- [x] emojibase for emoji picker

### 📄 Dashboard Pages
- [x] Landing page with features showcase
- [x] Login page with Discord OAuth
- [x] Dashboard layout with collapsible sidebar
- [x] Dashboard home with bot stats
- [x] Guild selection with bot invite
- [x] Guild overview dashboard
- [x] Moderation settings page
- [x] Leveling settings page
- [x] Economy settings page
- [x] Welcome settings (Welcome/Goodbye/DM tabs)
- [x] Tickets settings (Panels, EmojiPicker)
- [x] Custom Commands page (Stats, Search, Filter)
- [x] Automod configuration UI
- [x] Audit log viewer with pagination & filters
- [x] Member management (Grid/List views)
- [x] Roles page (Filter chips, Admin detection)
- [x] User profile page
- [x] My Profile page

### 🔌 Real-time Features
- [x] Socket.io server integration
- [x] Socket.io client with typed events
- [x] useSocket React hook
- [x] Guild room subscriptions
- [x] Live stats updates

### 🧩 Reusable Components
- [x] ChannelSelect component with type filtering
- [x] RoleSelect & MultiRoleSelect components
- [x] useGuildChannels hook
- [x] useGuildRoles hook
- [x] Toggle switch component
- [x] EmbedBuilder with live preview
- [x] MessageTypeSelector (Message/Embed/Both)
- [x] EmojiPicker with emojibase (1800+ emojis)
- [x] EmojiPicker server emoji support
- [x] EmojiPicker category tabs & search

### 📊 Dashboard Pages (v1.1-v1.8)
- [x] GuildDashboardPage with server stats
- [x] Analytics page with command usage charts
- [x] Leaderboard page (XP & Economy rankings)
- [x] Role Rewards page (level-based role assignments)
- [x] Changelog page with version history
- [x] Members page with pagination & views
- [x] Audit Log page with filters
- [x] Roles page with filter chips
- [x] Level Card customization page
- [x] Shop management page

### 🎨 Dashboard UX Features
- [x] Embed builder integration in settings
- [x] Message type options (Message/Embed/Both)
- [x] Welcome settings with embeds
- [x] Level up settings with embeds
- [x] Dynamic version system
- [x] Analytics API endpoint
- [x] Guild Info API with server stats
- [x] Podium display for top 3 members
- [x] Level progression preview
- [x] Collapsible sidebar with animations
- [x] Global search modal (Ctrl+K)
- [x] Breadcrumb navigation
- [x] 13 Theme presets with categories
- [x] Grid/List view toggle (Members)
- [x] Quick filters (Members, Roles, Commands)

---

## 🚧 Phase 2: Bot Commands & Automod (In Progress)

### 🤖 Moderation Commands
- [x] `/ban` - Ban members with reason & duration
- [x] `/kick` - Kick members with reason
- [x] `/timeout` - Timeout members with duration
- [x] `/warn` - Warn members with logging
- [x] `/clear` - Bulk delete messages (1-100)
- [x] `/slowmode` - Set channel slowmode
- [x] `/lock` / `/unlock` - Lock/unlock channels
- [x] `/softban` - Ban and unban to clear messages
- [x] `/mute` - Mute members (role-based) with setup
- [x] `/unmute` - Remove mute (via /mute remove)

### 🤖 Utility Commands
- [x] `/userinfo` - User information embed
- [x] `/serverinfo` - Server statistics
- [x] `/avatar` - User avatar display
- [x] `/banner` - User banner display
- [x] `/ping` - Bot latency
- [x] `/help` - Command help menu
- [x] `/invite` - Bot invite links
- [x] `/botinfo` - Bot statistics & system info
- [x] `/poll` - Create polls with options
- [x] `/roleinfo` - Role information
- [x] `/channelinfo` - Channel information

### 🤖 Leveling Commands
- [x] `/rank` - Show level card with canvas
- [x] `/leaderboard` - Top 10 members with canvas
- [x] `/setlevel` - Admin set user level
- [x] `/givexp` - Give/remove XP to user

### 🤖 Economy Commands
- [x] `/balance` - Check balance with canvas card
- [x] `/daily` - Daily reward with canvas card
- [x] `/work` - Work for coins (15 jobs)
- [x] `/pay` - Transfer coins
- [x] `/coinflip` - Coin flip gambling
- [x] `/rob` - Rob other users (40% success)
- [x] `/slots` - Slot machine gambling
- [x] `/blackjack` - Blackjack card game
- [x] `/shop` - View shop items with pagination
- [x] `/buy` - Purchase items with quantity
- [x] `/inventory` - View inventory with grouping

### 🤖 Ticket Commands
- [x] `/ticket create` - Create support ticket
- [x] `/ticket close` - Close ticket with reason
- [x] `/ticket add` - Add user to ticket
- [x] `/ticket remove` - Remove user from ticket
- [x] `/ticket claim` - Claim ticket as staff
- [x] `/ticket setup` - Configure ticket system (Admin)

### 🎌 Fun Commands
- [x] `/anime` - Anime images, GIFs & quotes
- [x] `/waifu` - Random waifu images
- [x] `/8ball` - Magic 8-ball
- [x] `/coinflip` - Flip a coin (also gambling)
- [x] `/dice` - Roll dice (1-10 dice, 2-100 sides)
- [x] `/rps` - Rock paper scissors (vs bot or player)
- [x] `/meme` - Random memes from Reddit

### 🛡️ Automod System
- [x] Anti-spam detection (message limit + duplicate detection)
- [x] Anti-link filter (with domain whitelist)
- [x] Anti-invite filter (own server option)
- [x] Bad words filter (custom word list)
- [x] Mass mention protection (configurable limit)
- [x] Caps lock filter (percentage-based)
- [x] Emoji spam filter (max emojis)
- [x] Configurable actions (warn, delete, mute, kick, ban)
- [x] Log channel for violations
- [x] Ignored channels/roles support
- [x] Cache system for performance

### ✅ Dashboard Enhancements (Completed)
- [x] Command usage analytics charts
- [x] Role rewards configuration page
- [x] Custom embed builder
- [x] Leaderboard with podium display
- [x] Shop item management page
- [x] Level card customization with live preview
- [x] Custom command editor with embed support
- [x] Role management UI with filter chips
- [x] Drag-and-drop role rewards ordering
- [x] Welcome/Goodbye/DM message tabs
- [x] Ticket panels with emoji picker
- [x] Members grid/list views
- [x] Global search modal

---

## 🔮 Phase 3: Advanced Features (Planned)

### 🎵 Music System
- [x] `/play` - Play song/playlist (YouTube, Spotify, SoundCloud)
- [x] `/skip` - Skip current song (with skip-to position)
- [x] `/stop` - Stop playback and clear queue
- [x] `/queue` - View queue with pagination
- [x] `/nowplaying` - Current song info with progress bar
- [x] `/volume` - Adjust volume (0-100%)
- [x] `/loop` - Loop modes (off, track, queue, autoplay)
- [x] `/shuffle` - Shuffle queue
- [x] `/seek` - Seek in song (supports mm:ss format)
- [x] `/pause` - Pause/resume playback
- [x] `/remove` - Remove track from queue
- [x] `/clearqueue` - Clear all tracks from queue
- [x] YouTube, Spotify, SoundCloud support (via discord-player)
- [x] Interactive player buttons
- [x] Now playing embeds with thumbnails

### 🎁 Engagement Features
- [x] Giveaway system with `/giveaway` (start, end, reroll, list, delete)
  - [x] Multiple winners support
  - [x] Role requirements
  - [x] Level requirements  
  - [x] Bonus entries for roles
  - [x] Auto-end with scheduled checks
  - [x] Interactive button to enter
- [x] Poll system with `/poll` (options, timer, buttons)
- [x] Reaction roles (`/reactionrole` add, remove, list, create)
  - [x] Normal (toggle), Unique, Verify, Drop types
  - [x] Event handlers for add/remove reactions
- [x] Starboard (`/starboard` setup, disable, settings, stats)
  - [x] Configurable threshold and emoji
  - [x] Auto-post to starboard channel
- [x] AFK system (`/afk`)
  - [x] Set/remove AFK status
  - [x] Track mentions while AFK
- [x] Reminder system (`/reminder` set, list, delete, clear)
  - [x] Flexible time parsing (1h30m, 2d, etc.)
  - [x] Max 25 reminders per user
- [x] Birthday system (`/birthday` set, remove, view, upcoming, list)
  - [x] Monthly birthday list
  - [x] Upcoming birthdays (30 days)
- [x] Custom commands (`/customcommand` create, delete, edit, list, info, toggle)
  - [x] Max 50 commands per server
  - [x] Usage tracking

### 📝 Logging System
- [ ] Message edit logs
- [ ] Message delete logs
- [ ] Member join/leave logs
- [ ] Role change logs
- [ ] Channel change logs
- [ ] Voice activity logs
- [ ] Moderation action logs
- [ ] Configurable log channels

### 🔧 API Enhancements
- [ ] Rate limiting with Redis
- [ ] API key authentication
- [ ] Webhook notifications
- [ ] Public API documentation
- [ ] GraphQL endpoint (optional)

---

## 🏭 Phase 4: Production & Scale (Future)

### 🐳 Infrastructure
- [ ] Docker & Docker Compose
- [ ] Redis caching layer
- [ ] Sharding for 2500+ guilds
- [ ] Cluster management
- [ ] Load balancing

### 📈 Monitoring & Analytics
- [ ] Health check endpoints
- [ ] Prometheus metrics
- [ ] Grafana dashboards
- [ ] Sentry error tracking
- [ ] Uptime monitoring

### 🧪 Testing
- [ ] Jest unit tests
- [ ] Supertest API tests
- [ ] Playwright E2E tests
- [x] GitHub Actions CI/CD ✅

### 📚 Documentation
- [ ] API documentation (Swagger/OpenAPI)
- [ ] User guide
- [ ] Self-hosting guide
- [x] Contributing guide (CONTRIBUTORS.md) ✅
- [x] Security policy (SECURITY.md) ✅
- [x] Top.gg listing (TOP_GG_LISTING.md) ✅

---

## � Quick Start

### Prerequisites
- Node.js 18+
- MongoDB 6+
- Discord Bot Token
- Discord OAuth2 Application

### Development Setup
```bash
# Clone repository
git clone https://github.com/XSaitoKungX/Astra-Bot.git
cd Astra-Bot

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Start development (bot + api + dashboard)
npm run dev:all
```

### Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start bot + API in dev mode |
| `npm run dev:all` | Start bot + API + dashboard |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run deploy:commands` | Deploy slash commands |
| `npm run release` | Build release (obfuscated + source) |
| `npm run typecheck` | TypeScript type checking |
| `npm run lint` | ESLint code linting |

### Production Deployment
```bash
# Build everything
npm run build

# Start production
npm run start
```

---

## 🔗 Project Structure

```
astra-bot/
├── src/
│   ├── api/              # Express API server
│   │   ├── middleware/     # Auth, permissions, rate limiting
│   │   ├── routes/         # API endpoints (guilds, users, stats)
│   │   └── websocket/      # Socket.io real-time
│   ├── bot/              # Discord bot
│   │   ├── commands/       # Slash commands (moderation, fun, utility)
│   │   ├── events/         # Discord events (ready, message, member)
│   │   ├── handlers/       # Command & event loaders
│   │   └── utils/          # Bot utilities
│   ├── database/         # MongoDB layer
│   │   └── models/         # Mongoose schemas
│   └── shared/           # Shared code
│       ├── types/          # TypeScript interfaces
│       ├── utils/          # Logger, helpers
│       └── constants/      # Discord API, config
├── dashboard/            # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI (EmbedBuilder, EmojiPicker, etc.)
│   │   ├── config/         # Themes, changelog, navigation
│   │   ├── hooks/          # Custom hooks (useGuildChannels, etc.)
│   │   ├── layouts/        # DashboardLayout, AuthLayout
│   │   ├── lib/            # API client, socket
│   │   ├── pages/          # Route pages
│   │   │   ├── guild/        # Guild-specific pages
│   │   │   └── settings/     # Settings pages
│   │   └── stores/         # Zustand stores (auth, theme, sidebar)
│   └── dist/             # Production build
└── dist/                 # Compiled TypeScript
```

---

## 📝 Notes

### Environment Variables
See `.env.example` for all required variables. Key ones:
- `DISCORD_TOKEN` - Bot token
- `DISCORD_CLIENT_ID` - OAuth client ID
- `DISCORD_CLIENT_SECRET` - OAuth client secret
- `MONGODB_URI` - Database connection
- `SESSION_SECRET` - Session encryption key

### Troubleshooting
- **Lint errors**: Run `npm install` in root and `dashboard/`
- **WebSocket errors**: Ensure API server is running
- **OAuth errors**: Check callback URL matches `.env`

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

---

<div align="center">

**Made with ❤️ for Discord communities**

[Report Bug](../../issues) · [Request Feature](../../issues) · [Documentation](../../wiki)

</div>
