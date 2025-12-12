<div align="center">

<img src="https://astra.novaplex.xyz/Astra_Banner.png" alt="Astra Bot Banner" width="100%" />

# ✨ Astra Bot

### The All-in-One Discord Bot That Actually Works

[![Add to Discord](https://img.shields.io/badge/Add%20to%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/api/oauth2/authorize?client_id=1207805728530763796&permissions=1642787765494&scope=bot%20applications.commands)
[![Dashboard](https://img.shields.io/badge/Open%20Dashboard-8B5CF6?style=for-the-badge&logo=react&logoColor=white)](https://astra.novaplex.xyz)
[![Support](https://img.shields.io/badge/Join%20Support-57F287?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/KD84DmNA89)

<br />

![Version](https://img.shields.io/badge/version-2.19.1-8B5CF6?style=flat-square&logo=github)
![Node](https://img.shields.io/badge/node-18+-339933?style=flat-square&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Discord.js](https://img.shields.io/badge/discord.js-v14-5865F2?style=flat-square&logo=discord&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

<br />

**🎵 Music** · **📈 Leveling** · **💰 Economy** · **🛡️ Moderation** · **🎫 Tickets** · **🎁 Giveaways**

*No premium tiers. No paywalls. Everything free, forever.*

</div>

<br />

## 📖 Table of Contents

- [✨ Astra Bot](#-astra-bot)
    - [The All-in-One Discord Bot That Actually Works](#the-all-in-one-discord-bot-that-actually-works)
  - [📖 Table of Contents](#-table-of-contents)
  - [💡 Why Astra?](#-why-astra)
  - [✨ Features](#-features)
  - [🚀 Quick Start](#-quick-start)
    - [1. Invite Astra](#1-invite-astra)
    - [2. Configure via Dashboard](#2-configure-via-dashboard)
    - [3. Start Using Commands](#3-start-using-commands)
  - [🖥️ Dashboard Preview](#️-dashboard-preview)
  - [💻 Command Examples](#-command-examples)
  - [🛠️ Tech Stack](#️-tech-stack)
    - [Backend](#backend)
    - [Frontend](#frontend)
    - [Architecture](#architecture)
  - [📦 Recent Updates](#-recent-updates)
    - [v2.19.1 — Stability \& GitHub Discord Notifications](#v2191--stability--github-discord-notifications)
    - [v2.19.0 — VotingPage Modernization](#v2190--votingpage-modernization)
    - [v2.18.0 — SEO Overhaul](#v2180--seo-overhaul)
    - [v2.17.0 — Review System](#v2170--review-system)
  - [🏠 Self-Hosting](#-self-hosting)
  - [🤝 Contributing](#-contributing)
  - [💬 Support](#-support)
  - [⭐ Star History](#-star-history)

<br />

## 💡 Why Astra?

> *"I built Astra because I was tired of bots that lock basic features behind paywalls."*

| Other Bots | Astra |
|------------|-------|
| ❌ Music requires premium | ✅ Full music system, free |
| ❌ Level roles locked | ✅ Unlimited level roles |
| ❌ Limited commands | ✅ 75+ commands |
| ❌ Basic dashboard | ✅ Full-featured dashboard |
| ❌ $5-15/month | ✅ **$0 forever** |

<br />

## ✨ Features

<details>
<summary><b>🎵 Music System</b> — Play from YouTube, Spotify & SoundCloud</summary>

<br />

**Supported Platforms:**
- YouTube (videos, playlists, search)
- Spotify (tracks, albums, playlists)
- SoundCloud (tracks, playlists)

**Features:**
- 🎛️ DJ System with role-based permissions
- 🎚️ 20+ audio filters (bass boost, nightcore, 8D, vaporwave)
- 📝 Lyrics display with pagination
- 🎮 Music Quiz game with 5 genres
- 🔁 Loop modes (track, queue, autoplay)
- 📊 Queue management with drag & drop

```
/play https://youtube.com/watch?v=...
/play never gonna give you up
/filter set bassboost
/lyrics
```

</details>

<details>
<summary><b>📈 Leveling System</b> — XP, Ranks & Custom Cards</summary>

<br />

**How it works:**
- Earn XP from messages and voice chat
- Level up and unlock role rewards
- Compete on server leaderboards

**Customization:**
- 🎨 Custom rank card colors & backgrounds
- 🏆 Configurable XP rates per channel
- 🎭 Role rewards at specific levels
- 📊 Voice XP tracking

```
/rank                    # View your rank card
/leaderboard             # Server leaderboard
/setlevel @user 10       # Admin: Set level
/givexp @user 500        # Admin: Give XP
```

**Dashboard Settings:**
- XP multipliers per role/channel
- Level-up message customization
- Role reward configuration
- Ignored channels

</details>

<details>
<summary><b>💰 Economy System</b> — Daily Rewards, Jobs & Gambling</summary>

<br />

**Earning Methods:**
| Method | Cooldown | Reward |
|--------|----------|--------|
| `/daily` | 24h | 100-500 coins |
| `/work` | 1h | 50-200 coins |
| `/rob @user` | 2h | 40% success rate |

**15+ Jobs Available:**
Developer, Designer, Chef, Doctor, Pilot, Streamer, Artist, Writer, Musician, Teacher, Lawyer, Engineer, Scientist, Athlete, Photographer

**Gambling Games:**
- 🎰 Slots — Match symbols to win
- 🃏 Blackjack — Beat the dealer
- 🪙 Coinflip — Double or nothing

```
/balance               # Check your balance
/daily                 # Claim daily reward
/work                  # Work for coins
/slots 100             # Bet 100 coins
/blackjack 500         # Play blackjack
/shop                  # View server shop
/buy item_name 5       # Buy 5 items
```

</details>

<details>
<summary><b>🛡️ Moderation</b> — AutoMod, Logging & Warnings</summary>

<br />

**Moderation Commands:**
```
/ban @user reason       # Ban with reason
/kick @user reason      # Kick member
/timeout @user 1h       # Timeout for 1 hour
/warn @user reason      # Issue warning
/clear 50               # Delete 50 messages
/slowmode 10s           # Set 10s slowmode
/lock                   # Lock channel
```

**AutoMod Features:**
- 🚫 Anti-spam (message limit, duplicates)
- 🔗 Anti-link (domain whitelist)
- 📨 Anti-invite (allow own server)
- 🤬 Bad words filter (custom list)
- 📢 Mass mention protection
- 🔠 Caps lock filter
- 😀 Emoji spam filter

**Logging System:**
- Message edits & deletes
- Member joins & leaves
- Role & channel changes
- Voice activity
- Moderation actions

</details>

<details>
<summary><b>🎫 Ticket System</b> — Professional Support Panels</summary>

<br />

**Features:**
- 📋 Custom ticket panels with buttons
- 👥 Staff role assignments
- 📝 Automatic transcripts
- 🏷️ Ticket categories
- ⏰ Auto-close inactive tickets

```
/ticket create          # Create support ticket
/ticket close           # Close with transcript
/ticket add @user       # Add user to ticket
/ticket claim           # Claim as staff
/ticket setup           # Configure system
```

**Dashboard Configuration:**
- Panel embed customization
- Category management
- Staff role selection
- Transcript channel
- Auto-close settings

</details>

<details>
<summary><b>🎁 Giveaways</b> — Fair & Configurable</summary>

<br />

**Features:**
- 🏆 Multiple winners support
- 🎭 Role requirements
- 📊 Level requirements
- ⭐ Bonus entries for roles
- ⏰ Scheduled end times

```
/giveaway start         # Start interactive setup
/giveaway end 123       # End giveaway early
/giveaway reroll 123    # Reroll winners
/giveaway list          # View active giveaways
```

</details>

<details>
<summary><b>🎤 TempVoice</b> — Temporary Voice Channels</summary>

<br />

**How it works:**
1. Join a "Create Channel" voice channel
2. Your own channel is created automatically
3. You control who can join

**Owner Controls:**
- 🔒 Lock/unlock channel
- 👁️ Hide/show channel
- ✏️ Rename channel
- 👥 Set user limit
- 🚫 Kick/ban users
- 🎚️ Adjust bitrate

```
/tempvoice lock         # Lock your channel
/tempvoice rename Party # Rename channel
/tempvoice limit 5      # Set 5 user limit
/tempvoice permit @user # Allow specific user
```

</details>

<details>
<summary><b>➕ More Features</b> — Welcome, Verification, Starboard & More</summary>

<br />

**Welcome System:**
- Custom welcome/goodbye messages
- Embed support with variables
- DM new members
- Auto-role assignment

**Verification System:**
- 5 methods: Button, Reaction, Captcha, Dropdown, Agree Rules
- Account age requirements
- Kick unverified after timeout

**Engagement:**
- ⭐ Starboard — Highlight popular messages
- 🎂 Birthdays — Track & announce
- ⏰ Reminders — Personal reminders
- 💤 AFK — Status with mention tracking
- 🎌 Anime — Waifu, search, seasonal charts

**Self Roles:**
- Button, dropdown, or reaction panels
- Role limits (min/max)
- Required roles & blacklists

</details>

<br />

## 🚀 Quick Start

### 1. Invite Astra
Click the button below to add Astra to your server:

[![Add to Discord](https://img.shields.io/badge/Add%20Astra%20to%20Your%20Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/api/oauth2/authorize?client_id=1207805728530763796&permissions=1642787765494&scope=bot%20applications.commands)

### 2. Configure via Dashboard
Open the dashboard and select your server:

```
https://astra.novaplex.xyz/dashboard
```

### 3. Start Using Commands
All commands use Discord's slash command system:

```
/help                   # View all commands
/play <song>            # Play music
/rank                   # View your level
/daily                  # Claim daily reward
```

<br />

## 🖥️ Dashboard Preview

<div align="center">

| Feature | Description |
|---------|-------------|
| **🎨 30+ Themes** | Dark, Light, Dracula, Nord, and more |
| **📊 Real-time Stats** | Live server analytics |
| **⚙️ Full Configuration** | Every setting, no commands needed |
| **📱 Mobile Friendly** | Works on any device |
| **🔔 Notifications** | Push, email, and Discord DM |

</div>

**Live Dashboard:** [astra.novaplex.xyz](https://astra.novaplex.xyz)

<br />

## 💻 Command Examples

<details>
<summary><b>Music Commands</b></summary>

```bash
# Play a song
/play https://youtube.com/watch?v=dQw4w9WgXcQ
/play never gonna give you up
/play spotify:track:4cOdK2wGLETKBW3PvgPWqT

# Queue management
/queue                  # View queue
/skip                   # Skip current song
/skip 3                 # Skip to position 3
/shuffle                # Shuffle queue
/loop track             # Loop current track
/loop queue             # Loop entire queue

# Playback control
/pause                  # Pause playback
/resume                 # Resume playback
/volume 80              # Set volume to 80%
/seek 1:30              # Seek to 1:30

# Audio filters
/filter set bassboost   # Apply bass boost
/filter set nightcore   # Apply nightcore
/filter clear           # Remove all filters
/filter list            # View available filters

# DJ System
/dj role @DJ            # Set DJ role
/dj mode on             # Enable DJ-only mode
```

</details>

<details>
<summary><b>Moderation Commands</b></summary>

```bash
# Basic moderation
/ban @user Spamming     # Ban with reason
/kick @user Breaking rules
/timeout @user 1h Cooling off
/warn @user First warning
/mute @user 30m         # Mute for 30 minutes

# Channel management
/clear 100              # Delete 100 messages
/clear @user 50         # Delete 50 from user
/slowmode 30s           # 30 second slowmode
/lock                   # Lock channel
/unlock                 # Unlock channel

# Information
/warnings @user         # View user warnings
/modlogs @user          # View mod history
```

</details>

<details>
<summary><b>Economy Commands</b></summary>

```bash
# Earning
/daily                  # Daily reward (24h cooldown)
/work                   # Work for coins (1h cooldown)
/rob @user              # Rob someone (2h cooldown)

# Gambling
/coinflip 100 heads     # Bet 100 on heads
/slots 500              # Play slots
/blackjack 1000         # Play blackjack

# Shopping
/shop                   # View shop
/buy coffee 3           # Buy 3 coffees
/inventory              # View your items
/use coffee             # Use an item

# Transfers
/pay @user 500          # Send 500 coins
/balance                # Check balance
/balance @user          # Check someone's balance
```

</details>

<br />

## 🛠️ Tech Stack

<table>
<tr>
<td width="50%">

### Backend
| Technology | Purpose |
|------------|---------|
| **TypeScript** | Type-safe development |
| **Discord.js v14** | Discord API wrapper |
| **Express.js** | REST API server |
| **MongoDB** | Database |
| **Redis** | Caching & sessions |
| **Lavalink v4** | Music streaming |

</td>
<td width="50%">

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **Vite 5** | Build tool |
| **TailwindCSS** | Styling |
| **Zustand** | State management |
| **React Query** | Data fetching |
| **Framer Motion** | Animations |

</td>
</tr>
</table>

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Cloudflare                           │
│                    (Reverse Proxy + CDN)                    │
└─────────────────────────┬───────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────┐
│                     Single Port (3001)                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐  │
│  │   React SPA     │  │   Express API   │  │  Socket.io  │  │
│  │   Dashboard     │  │   /api/*        │  │  Real-time  │  │
│  └─────────────────┘  └─────────────────┘  └─────────────┘  │
└─────────────────────────┬───────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│   MongoDB     │ │    Redis      │ │   Lavalink    │
│   Database    │ │    Cache      │ │    Music      │
└───────────────┘ └───────────────┘ └───────────────┘
```

<br />

## 📦 Recent Updates

### v2.19.1 — Stability & GitHub Discord Notifications
> Released: December 12, 2025

<details>
<summary><strong>What's new</strong></summary>

- ✅ GitHub: Advanced Discord webhook notifications workflow (push, PR, issues, releases, CI failure, stars, forks)
- ✅ GitHub: Reusable Discord notify composite action for consistent embeds
- ✅ GitHub: Deploy notification workflow example (deploy-notify.yml)
- ✅ Docs: Discord webhook setup guide at .github/DISCORD_WEBHOOKS.md
- ✅ TempVoice: Fix unused-variable lint warnings in interaction handlers
- ✅ Versions: Sync package versions across repo to match dashboard changelog

</details>

### v2.19.0 — VotingPage Modernization
> Released: December 11, 2025

<details>
<summary>View Changes</summary>

**Added:**
- New "Bot Setup" tab with copy-ready templates
- Leaderboard period filter (All Time / Monthly / Weekly)
- Stats summary (voters, votes, coins, best streak)
- Webhook secret validation for all bot lists

**Improved:**
- All emojis replaced with Lucide React icons
- Modern medal icons for top 3 voters
- Platform cards show cooldown duration
- Trusted Servers marquee faster and smoother

**Fixed:**
- Platform breakdown icon rendering
- Discord Bot List webhook Authorization header
- WidgetBot login popup error

</details>

### v2.18.0 — SEO Overhaul
> Released: December 10, 2025

<details>
<summary>View Changes</summary>

**Added:**
- 30+ meta tags for SEO
- 4 JSON-LD schemas
- sitemap.xml and robots.txt
- Modern loading screen

**Improved:**
- Bento Grid dashboard layout
- Open Graph and Twitter Cards
- Accessibility improvements

</details>

### v2.17.0 — Review System
> Released: December 9, 2025

<details>
<summary>View Changes</summary>

**Added:**
- User review system with ratings
- 7 selectable tags for reviews
- Changelog preview section
- Commands page with search

**Improved:**
- FAQ section with icons
- Server selection filtering

</details>

<br />

📜 **Full Changelog:** [astra.novaplex.xyz/changelog](https://astra.novaplex.xyz/changelog)

<br />

## 🏠 Self-Hosting

<details>
<summary><b>Prerequisites</b></summary>

- Node.js 18+
- MongoDB 6+
- Redis (optional, falls back to memory)
- Lavalink v4 (for music)
- Discord Bot Token
- Discord OAuth2 Application

</details>

<details>
<summary><b>Installation</b></summary>

```bash
# Clone repository
git clone https://github.com/XSaitoKungX/Astra-Bot.git
cd Astra-Bot

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Start development
npm run dev:all
```

</details>

<details>
<summary><b>Environment Variables</b></summary>

```env
# Discord
DISCORD_TOKEN=your_bot_token
DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret

# Database
MONGODB_URI=mongodb://localhost:27017/astra
REDIS_URL=redis://localhost:6379

# Server
PORT=3001
DASHBOARD_URL=https://your-domain.com

# Music (Lavalink)
LAVALINK_HOST=your-lavalink-server.com
LAVALINK_PORT=443
LAVALINK_PASSWORD=your_password
LAVALINK_SECURE=true
```

</details>

<details>
<summary><b>Available Scripts</b></summary>

| Command | Description |
|---------|-------------|
| `npm run dev` | Start bot + API (development) |
| `npm run dev:all` | Start bot + API + dashboard |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run deploy:commands` | Deploy slash commands |
| `npm run typecheck` | TypeScript type checking |
| `npm run lint` | ESLint code linting |

</details>

<br />

## 🤝 Contributing

While the source code is encrypted, contributions are welcome:

| Type | How to Contribute |
|------|-------------------|
| 🐛 **Bug Reports** | [Open an issue](https://github.com/XSaitoKungX/Astra-Bot/issues) |
| 💡 **Feature Ideas** | Join [Discord](https://discord.gg/KD84DmNA89) |
| 🌍 **Translations** | Contact on Discord |
| 💻 **Code** | Reach out on Discord |

<br />

## 💬 Support

<div align="center">

| Resource | Link |
|----------|------|
| 📚 **Documentation** | [astra.novaplex.xyz/docs](https://astra.novaplex.xyz/docs) |
| 💬 **Discord Server** | [discord.gg/KD84DmNA89](https://discord.gg/KD84DmNA89) |
| 🐛 **Bug Reports** | [GitHub Issues](https://github.com/XSaitoKungX/Astra-Bot/issues) |
| 📊 **Status Page** | [astra.novaplex.xyz/status](https://astra.novaplex.xyz/status) |

</div>

<br />

## ⭐ Star History

<div align="center">

<a href="https://www.star-history.com/#XSaitoKungX/Astra-Bot&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=XSaitoKungX/Astra-Bot&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=XSaitoKungX/Astra-Bot&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=XSaitoKungX/Astra-Bot&type=Date" width="600" />
 </picture>
</a>

</div>

<br />

---

<div align="center">

**Built with ❤️ by [XSaitoKungX](https://github.com/XSaitoKungX)**

*Because Discord bots shouldn't cost money.*

<br />

[![Add to Discord](https://img.shields.io/badge/Add%20Astra%20Now-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/api/oauth2/authorize?client_id=1207805728530763796&permissions=1642787765494&scope=bot%20applications.commands)

</div>
