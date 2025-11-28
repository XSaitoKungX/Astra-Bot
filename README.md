<div align="center">

# ✨ Astra Bot

<img src="https://astra.novaplex.xyz/Astra_Banner.png" alt="Astra Banner" width="100%" />

### 🚀 All-in-One Discord Bot with Beautiful Dashboard

A modern, performant Discord Bot featuring Music, Economy, Leveling, Moderation, Giveaways, and more!

[![Discord](https://img.shields.io/discord/857622993702486067?color=5865F2&logo=discord&logoColor=white&label=Discord&style=for-the-badge)](https://discord.gg/KD84DmNA89)
[![GitHub Stars](https://img.shields.io/github/stars/XSaitoKungX/Astra-Bot?color=yellow&logo=github&style=for-the-badge)](https://github.com/XSaitoKungX/Astra-Bot/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/XSaitoKungX/Astra-Bot?color=blue&logo=github&style=for-the-badge)](https://github.com/XSaitoKungX/Astra-Bot/network/members)
[![License](https://img.shields.io/github/license/XSaitoKungX/Astra-Bot?color=green&style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.2.0-purple?style=for-the-badge)](https://github.com/XSaitoKungX/Astra-Bot/releases)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Discord.js](https://img.shields.io/badge/Discord.js_v14-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.js.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[🌐 Dashboard](https://astra.novaplex.xyz) • [📖 Documentation](https://docs.novaplex.xyz) • [💬 Support](https://discord.gg/KD84DmNA89) • [🐛 Report Bug](https://github.com/XSaitoKungX/Astra-Bot/issues)

</div>

---

## 📊 Stats

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/XSaitoKungX/Astra-Bot?style=flat-square)
![GitHub code size](https://img.shields.io/github/languages/code-size/XSaitoKungX/Astra-Bot?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/XSaitoKungX/Astra-Bot?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/XSaitoKungX/Astra-Bot?style=flat-square)
![GitHub pull requests](https://img.shields.io/github/issues-pr/XSaitoKungX/Astra-Bot?style=flat-square)

</div>

---

## 🌟 Features

### Bot Features
- **🛡️ Moderation** - Ban, kick, timeout, warn, and automod
- **📈 Leveling** - XP system with level roles and rewards
- **💰 Economy** - Virtual currency, shops, and collectibles
- **🎵 Music** - High-quality music playback
- **🎮 Fun** - Anime commands, games, and entertainment
- **👋 Welcome** - Customizable welcome messages and auto-roles
- **🎫 Tickets** - Support ticket system

### Dashboard Features
- **🔐 Discord OAuth2** - Secure login with Discord
- **🎨 Theme Switcher** - 7 beautiful themes including anime-inspired designs
- **📊 Statistics** - Real-time server statistics and leaderboards
- **⚙️ Easy Configuration** - Intuitive settings for all modules
- **📱 Responsive** - Works on all devices
- **👥 Role System** - Owner, Admin, Developer, Moderator, Support, User roles

### Architecture
- **🔌 Single Port** - API and Dashboard served from one port (Pelican.dev compatible)
- **☁️ Cloudflare Ready** - Trust proxy and proper headers for reverse proxy
- **🔄 File Watcher** - Auto-rebuild on file changes (development)
- **🛡️ Nginx Compatible** - Works behind reverse proxy

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ (v24 recommended)
- MongoDB database
- Discord Bot Token

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/XSaitoKungX/Astra-Bot.git
cd Astra-Bot
```

2. **Install dependencies**
```bash
# Install bot/API dependencies
npm install

# Install dashboard dependencies
cd dashboard && npm install && cd ..
```

3. **Configure environment**
```bash
cp .env.example .env
# Edit .env with your credentials
```

4. **Start development**
```bash
# Start everything (bot + API + dashboard)
npm run dev

# Or start individually
npm run dev:bot      # Discord bot only
npm run dev:api      # API server only
npm run dev:dashboard # Dashboard only
```

## 📁 Project Structure

```
astra-bot/
├── src/
│   ├── bot/                 # Discord bot
│   │   ├── commands/        # Slash commands
│   │   ├── events/          # Event handlers
│   │   └── handlers/        # Command/event loaders
│   ├── api/                 # Express API
│   │   ├── routes/          # API routes
│   │   └── middleware/      # Auth middleware
│   ├── database/            # MongoDB models
│   │   └── models/          # Mongoose schemas
│   └── shared/              # Shared utilities
│       ├── types/           # TypeScript types
│       ├── constants/       # Constants
│       └── utils/           # Utility functions
├── dashboard/               # React dashboard
│   └── src/
│       ├── pages/           # Page components
│       ├── layouts/         # Layout components
│       ├── stores/          # Zustand stores
│       └── lib/             # API client
└── logs/                    # Log files
```

## ⚙️ Configuration

### Environment Variables

| Variable | Description |
|----------|-------------|
| `DISCORD_TOKEN` | Discord bot token |
| `DISCORD_CLIENT_ID` | Discord application client ID |
| `DISCORD_CLIENT_SECRET` | Discord OAuth2 client secret |
| `MONGODB_URI` | MongoDB connection string |
| `SESSION_SECRET` | Session encryption secret |
| `API_PORT` | API server port (default: 3001) |
| `DASHBOARD_URL` | Dashboard URL for OAuth callback |
| `OAUTH_CALLBACK_URL` | OAuth callback URL |

## 🎨 Themes

Astra includes 7 beautiful themes:

| Theme | Description |
|-------|-------------|
| **Dark** | Default dark theme |
| **Light** | Clean light theme |
| **Royal Purple** | Deep purple aesthetic |
| **Midnight** | Blue-tinted dark theme |
| **Sunset** | Warm orange/red gradient |
| **Sakura** | Pink cherry blossom theme |
| **Ocean** | Teal/cyan ocean theme |

## 📝 Commands

### Moderation
| Command | Description |
|---------|-------------|
| `/ban` | Ban a user from the server |
| `/kick` | Kick a user from the server |
| `/timeout` | Timeout a user |

### Fun
| Command | Description |
|---------|-------------|
| `/anime image` | Get random anime images |
| `/anime gif` | Get random anime GIFs |
| `/anime quote` | Get random anime quotes |
| `/waifu` | Get random waifu images |

## 🛠️ Development

### Scripts

```bash
npm run dev          # Start all services in development
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Tech Stack

- **Bot**: Discord.js v14, TypeScript
- **API**: Express, Passport, MongoDB
- **Dashboard**: React, TailwindCSS, Zustand, React Query
- **Database**: MongoDB with Mongoose

## 🚀 Deployment

### Pelican.dev (Node.js Generic Egg)

**Single Port Architecture** - Both API and Dashboard run on the same port.

Start command:
```bash
npm run pelican:start
```

Or manually:
```bash
npm install && npm run build && npm run start
```

### Environment Variables for Production

```env
NODE_ENV=production
PORT=3001
TRUST_PROXY=true
DASHBOARD_URL=https://your-domain.com
OAUTH_CALLBACK_URL=https://your-domain.com/api/auth/discord/callback
```

### Cloudflare / Nginx Reverse Proxy

The app is configured to work behind reverse proxies:
- `trust proxy` is enabled
- Proper security headers are set
- CORS is configured for production

### Docker (Coming Soon)

Docker support will be added in a future update.

## 👥 Dashboard Roles

| Role | Level | Description |
|------|-------|-------------|
| **User** | 0 | Basic access - view only |
| **Support** | 1 | View tickets, moderation logs |
| **Moderator** | 2 | Manage moderation, tickets |
| **Developer** | 3 | Access logs, debug tools |
| **Admin** | 4 | Full guild management |
| **Owner** | 5 | Guild owner - all permissions |
| **Bot Owner** | 99 | Global access to all guilds |

## 👥 Contributors

<a href="https://github.com/XSaitoKungX/Astra-Bot/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=XSaitoKungX/Astra-Bot" />
</a>

See [CONTRIBUTORS.md](CONTRIBUTORS.md) for a full list of contributors.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTORS.md) before submitting a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

<div align="center">

[![Discord](https://img.shields.io/badge/Discord-Join%20Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/KD84DmNA89)
[![GitHub Issues](https://img.shields.io/badge/GitHub-Report%20Issue-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/XSaitoKungX/Astra-Bot/issues)

</div>

## ⭐ Star History

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=XSaitoKungX/Astra-Bot&type=Date)](https://star-history.com/#XSaitoKungX/Astra-Bot&Date)

</div>

---

<div align="center">

Made with ❤️ by [XSaitoKungX](https://github.com/XSaitoKungX) for Discord communities

**[⬆ Back to Top](#-astra-bot)**

</div>
