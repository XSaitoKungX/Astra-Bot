<div align="center">

<img src="./dashboard/public/Astra_Banner.png" alt="Astra Bot Banner" width="100%" />

# ✨ Astra Bot

### The All-in-One Discord Bot That Actually Works

[![Add to Discord](https://img.shields.io/badge/Add%20to%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/api/oauth2/authorize?client_id=1207805728530763796&permissions=1642787765494&scope=bot%20applications.commands)
[![Dashboard](https://img.shields.io/badge/Open%20Dashboard-8B5CF6?style=for-the-badge&logo=react&logoColor=white)](https://astra.novaplex.xyz)
[![Support](https://img.shields.io/badge/Join%20Support-57F287?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/KD84DmNA89)

<br />

![Version](https://img.shields.io/badge/version-2.21.0-8B5CF6?style=flat-square&logo=github)
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
  - [🖥️ Dashboard](#️-dashboard)
    - [Landing Page](#landing-page)
    - [Theme System](#theme-system)
    - [Dashboard Pages](#dashboard-pages)
    - [Guild Management](#guild-management)
  - [💻 Command Examples](#-command-examples)
  - [🛠️ Tech Stack](#️-tech-stack)
    - [Backend](#backend)
    - [Frontend](#frontend)
    - [Architecture](#architecture)
  - [📦 Recent Updates](#-recent-updates)
    - [v2.21.0 — AI Chatbot \& Version Release System](#v2210--ai-chatbot--version-release-system)
    - [v2.20.0 — Major Dependency Update \& Tailwind CSS 4.x Migration](#v2200--major-dependency-update--tailwind-css-4x-migration)
    - [v2.19.1 — Stability \& GitHub Discord Notifications](#v2191--stability--github-discord-notifications)
    - [v2.19.0 — VotingPage Modernization](#v2190--votingpage-modernization)
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

## 🖥️ Dashboard

Astra comes with a **full-featured web dashboard** — no commands needed for configuration. Manage everything from your browser with a beautiful, responsive interface.

**Live Dashboard:** [astra.novaplex.xyz](https://astra.novaplex.xyz)

<br />

### Landing Page

<details>
<summary><b>View Screenshots</b></summary>

<img src="https://github.com/user-attachments/assets/62ea2102-0e8a-4fde-b9bc-d59541c6f528" alt="Landing Page Hero" width="100%" />
<img src="https://github.com/user-attachments/assets/acd084dd-89f1-43ef-b49f-7024f1cc9523" alt="Landing Page Features" width="100%" />
<img src="https://github.com/user-attachments/assets/01fa8947-ba7e-4ea4-ab62-01351e0a26b0" alt="Landing Page Commands" width="100%" />
<img src="https://github.com/user-attachments/assets/70c91bc2-1eaf-44e9-a145-af71e0c6abe0" alt="Landing Page Stats" width="100%" />
<img src="https://github.com/user-attachments/assets/a61486be-4cc1-43e9-9c61-86fbbd43174b" alt="Landing Page Reviews" width="100%" />
<img src="https://github.com/user-attachments/assets/5aef1794-6f37-4558-ab08-08672afaff63" alt="Landing Page Footer" width="100%" />

</details>

<br />

### Theme System

Choose from **30+ built-in themes** or create your own custom theme. Themes apply across the entire dashboard.

<details>
<summary><b>View Theme Examples</b></summary>

| Theme | Preview |
|-------|---------|
| **Midnight** | <img src="https://github.com/user-attachments/assets/5f7e2a0a-0f80-40b6-95a1-e55006976b47" alt="Midnight Theme" width="600" /> |
| **Abyss** | <img src="https://github.com/user-attachments/assets/462248c4-8997-4814-a2dc-22a80579f233" alt="Abyss Theme" width="600" /> |
| **Obsidian** | <img src="https://github.com/user-attachments/assets/60fa2a98-8d64-4a58-ad14-6f8568919bf2" alt="Obsidian Theme" width="600" /> |
| **Sakura** | <img src="https://github.com/user-attachments/assets/3eb59a6e-38d6-42e1-91fa-80df0382bdc3" alt="Sakura Theme" width="600" /> |
| **Cream** | <img src="https://github.com/user-attachments/assets/9464eed9-519b-4032-9fad-00a0c84f4002" alt="Cream Theme" width="600" /> |
| **Lavender** | <img src="https://github.com/user-attachments/assets/8671f132-7d3e-4bb8-85aa-b31da9e42e69" alt="Lavender Theme" width="600" /> |
| **Matrix** | <img src="https://github.com/user-attachments/assets/7ff52416-4e89-4d38-8463-fb0ce8983aa3" alt="Matrix Theme" width="600" /> |
| **Autumn** | <img src="https://github.com/user-attachments/assets/2e216fef-4050-485b-a28a-d6f376fb9f6b" alt="Autumn Theme" width="600" /> |

*...and 22+ more themes including seasonal themes (Christmas, Halloween, Valentine's Day) + custom theme creator!*

</details>

<br />

### Dashboard Pages

<details>
<summary><b>View Screenshots</b></summary>

| Page | Preview |
|------|---------|
| **Guild Selector** | <img src="https://github.com/user-attachments/assets/cff93e44-2cfd-4d8b-8a82-530d7c0c26de" alt="Guild Selector" width="600" /> |
| **Changelog** | <img src="https://github.com/user-attachments/assets/8907d652-b48a-4a88-b129-1d6e0429c5e9" alt="Changelog" width="600" /> |
| **Version Details** | <img src="https://github.com/user-attachments/assets/e4580e07-5ed5-46f1-ba6e-d8e2a55c3e00" alt="Version Details" width="600" /> |

</details>

<br />

### Guild Management

<details>
<summary><b>View Screenshots</b></summary>

| Feature | Preview |
|---------|---------|
| **Server Overview** | <img src="https://github.com/user-attachments/assets/55b33604-9355-4c27-870d-b141d9f925ab" alt="Server Overview" width="600" /> |
| **Leaderboard** | <img src="https://github.com/user-attachments/assets/8f718ecc-5520-4912-a2f2-48ebd3b48947" alt="Leaderboard" width="600" /> |
| **Astra AI Chatbot** | <img src="https://github.com/user-attachments/assets/2ff7b19b-e830-4068-a47a-d29ba1acc824" alt="AI Chatbot" width="600" /> |
| **Level Card Designer** | <img src="https://github.com/user-attachments/assets/940fa4d8-283d-4156-8b6d-77f13c445487" alt="Level Card" width="600" /> |
| **Voting & Bot Lists** | <img src="https://github.com/user-attachments/assets/18a12798-07ba-40ec-9878-bb93fcb25c87" alt="Voting" width="600" /> |
| **Guild Members** | <img src="https://github.com/user-attachments/assets/6c2b2735-d55a-4395-898a-7b00563060ce" alt="Guild Members" width="600" /> |
| **Embed Creator** | <img src="https://github.com/user-attachments/assets/31c555f2-0c9a-4165-ba21-51054d1b316f" alt="Embed Creator" width="600" /> |
| **Global Profile** | <img src="https://github.com/user-attachments/assets/1e858339-438b-4519-9fc3-e8c3a4aacb26" alt="Global Profile" width="600" /> |
| **Guild Profile** | <img src="https://github.com/user-attachments/assets/84d92976-e32f-48ac-87f5-038fcd602d8d" alt="Guild Profile" width="600" /> |

</details>

<br />

<div align="center">

*✨ The Astra Dashboard has many more features to discover — moderation logs, ticket management, welcome messages, auto-mod settings, music controls, economy shop, giveaways, and much more!*

**[Open Dashboard →](https://astra.novaplex.xyz)**

</div>

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

### v2.21.0 — AI Chatbot & Version Release System
> Released: December 15, 2025

<details>
<summary><strong>What's new</strong></summary>

**Added:**
- 🤖 Astra AI chatbot with Google Gemini integration
- 💬 Auto-reply when mentioning Astra or using trigger words
- ℹ️ Astra info embed when triggered without a question
- 🎨 Dashboard AI chat with Markdown rendering
- 📦 Version release announcement system
- 🔧 `/release create`, `announce`, `preview`, `delete` commands
- 📋 `/changelog channel`, `latest`, `history` commands
- ✨ Autocomplete for version selection

**Fixed:**
- Bot/User avatars in dashboard AI chat
- Ephemeral deprecation warning (use MessageFlags.Ephemeral)
- Changelog field truncation for Discord 1024 char limit
- Deploy commands hanging issue
- Notification model export for API

</details>

### v2.20.0 — Major Dependency Update & Tailwind CSS 4.x Migration
> Released: December 15, 2025

<details>
<summary><strong>What's new</strong></summary>

**Updated:**
- React to v19, React Router to v7, Tailwind CSS to v4
- Vite to v7, Mongoose to v9, Express to v5, Zod to v4
- 60+ packages to latest versions

**Changed:**
- Full migration to Tailwind CSS 4.x syntax
- New @theme directive for custom styles

**Added:**
- New CommandsPage, MembersPage, GuildSelectPage, ReviewsManagerPage

</details>

### v2.19.1 — Stability & GitHub Discord Notifications
> Released: December 12, 2025

<details>
<summary>View Changes</summary>

- ✅ GitHub: Advanced Discord webhook notifications workflow
- ✅ GitHub: Reusable Discord notify composite action
- ✅ Docs: Discord webhook setup guide
- ✅ TempVoice: Fix unused-variable lint warnings
- ✅ Versions: Sync package versions across repo

</details>

### v2.19.0 — VotingPage Modernization
> Released: December 11, 2025

<details>
<summary>View Changes</summary>

**Added:**
- New "Bot Setup" tab with copy-ready templates
- Leaderboard period filter (All Time / Monthly / Weekly)
- Webhook secret validation for all bot lists

**Improved:**
- All emojis replaced with Lucide React icons
- Modern medal icons for top 3 voters

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
