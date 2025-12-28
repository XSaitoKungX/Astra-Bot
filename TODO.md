# 🌟 Astra Bot - Development Roadmap

> **Last Updated:** 28. December 2025  
> **Version:** 4.0.0-beta  
> **Status:** Production Ready - Major Release  
> **Repository:** [github.com/XSaitoKungX/Astra-Bot](https://github.com/XSaitoKungX/Astra-Bot)

---

# ✅ v4.0.0-beta Release (28. Dec 2025)

## 🎨 Dashboard Complete Redesign - COMPLETE

| Feature | Status | Notes |
|---------|--------|-------|
| All 40+ Pages Redesigned | ✅ Complete | Modern UI/UX overhaul |
| Improved Navigation | ✅ Complete | Better user experience |
| New Components | ✅ Complete | Cookie Consent, Turnstile, Seasonal Toggle |
| Error Handling | ✅ Complete | Better loading states |
| Mobile Responsiveness | ✅ Complete | Improved across all pages |

## 🗄️ Prisma/PostgreSQL Migration - COMPLETE

| Feature | Status | Notes |
|---------|--------|-------|
| MongoDB → PostgreSQL | ✅ Complete | Full data migration |
| Prisma ORM Integration | ✅ Complete | Type-safe queries |
| API Routes Refactored | ✅ Complete | All routes use Prisma |
| BigInt Support | ✅ Complete | Large number handling |
| Schema Updates | ✅ Complete | New migrations applied |

## 🔌 API & Routes Improvements - COMPLETE

| Feature | Status | Notes |
|---------|--------|-------|
| Economy Routes | ✅ Complete | Fixed and optimized |
| Tickets API | ✅ Complete | New transcript support |
| Error Handling | ✅ Complete | Better validation |
| TypeScript Safety | ✅ Complete | Improved type annotations |

## 🎮 Economy System Overhaul - COMPLETE

| Feature | Status | Notes |
|---------|--------|-------|
| BigInt Migration | ✅ Complete | All economy values support large numbers |
| Bank Capacity 100B | ✅ Complete | Increased from 10K to 100 Billion |
| Gambling System | ✅ Complete | Slots, Coinflip, Dice on Dashboard |
| Work Command | ✅ Complete | 15+ job scenarios with earnings |
| Crime System | ✅ Complete | Success/fail mechanics with fines |
| Transfer/Pay | ✅ Complete | User-to-user transactions |
| Economy Dashboard | ✅ Complete | Full UI with real-time updates |
| BigInt Serialization | ✅ Complete | API responses properly serialized |
| Number Formatting | ✅ Complete | K, M, B, T suffix support |

## 🎫 Ticket System Improvements - COMPLETE

| Feature | Status | Notes |
|---------|--------|-------|
| Ticket Transcripts | ✅ Complete | Full conversation history page |
| Dashboard Management | ✅ Complete | Improved ticket controls |

## 🤖 Custom Commands - COMPLETE

| Feature | Status | Notes |
|---------|--------|-------|
| Slash Command Registration | ✅ Complete | Auto-sync with Discord |
| Dashboard Management | ✅ Complete | Create/edit/delete commands |
| Cooldowns | ✅ Complete | Per-command cooldown support |
| Permissions | ✅ Complete | Role-based restrictions |

## � Bug Fixes - COMPLETE

- ✅ Fixed parameter order in `economyRepository.getOrCreate()` calls
- ✅ Fixed `Invalid time value` errors in cooldown display
- ✅ Fixed 500 errors in `/work` and `/crime` endpoints
- ✅ Fixed BigInt serialization in all API responses
- ✅ Fixed bank capacity formatting (100000.0M → 100.0B)

---

# 🚀 COMPLETED: MongoDB → PostgreSQL + Redis Migration

## 📊 Migration Progress

| Phase | Status | Progress |
|-------|--------|----------|
| Phase 1: Setup & Infrastructure | 🟢 Completed | 100% |
| Phase 2: PostgreSQL Schema | 🟢 Completed | 100% |
| Phase 3: Redis Integration | 🟢 Completed | 100% |
| Phase 4: Data Migration | 🟢 Completed | 100% |
| Phase 5: Code Refactor | 🟢 Completed | 100% |
| Phase 6: Testing & Validation | 🟡 In Progress | 70% |
| Phase 7: MongoDB Removal | 🟢 Completed | 100% |

### ✅ Phase 7 Progress (19. Dec 2025) - COMPLETE
**MongoDB Migration Finalized:**
- ✅ All MongoDB data successfully migrated to Supabase PostgreSQL
- ✅ Comprehensive migration script created (`scripts/migrate-all-mongo-to-supabase.ts`)
- ✅ Prisma 7.x adapter properly configured with PostgreSQL
- ✅ All 43 MongoDB collections analyzed and migrated
- ✅ Zero data loss - 100% success rate

**Database Infrastructure:**
- ✅ `src/database/index.ts` - Now uses PostgreSQL + Redis only
- ✅ `src/api/index.ts` - MongoStore replaced with Redis session store
- ✅ `src/bot/index.ts` - Uses PostgreSQL + Redis
- ✅ `src/bot/commands/utility/ping.ts` - Shows PostgreSQL + Redis status
- ✅ `connect-mongo` dependency removed from package.json

**Remaining Cleanup (Optional - Low Priority):**
- ⚠️ `mongoose` package still in dependencies (can be removed after type extraction)
- ⚠️ Legacy model files in `src/database/models/` (marked as deprecated)
- ⚠️ Some command files import legacy models for type definitions only

**Recommended Next Steps:**
1. ✅ Run production tests with migrated data
2. Monitor Supabase performance and query times
3. Optionally extract TypeScript interfaces from mongoose models
4. Consider removing mongoose dependency after validation period

### ✅ Migration Results (19. Dec 2025) - COMPLETE ✨
**Core Data:**
- **Users:** 17 migrated ✅
- **Guild Configs:** 31 migrated ✅
- **User Levels:** 207 migrated ✅
- **User Economies:** 4 migrated ✅
- **User Votes:** 62 migrated ✅
- **Giveaways:** 2 migrated ✅

**Moderation & Support:**
- **Moderation Logs:** 4 migrated (1 skipped) ✅
- **Warnings:** 0 migrated (no data) ⚪
- **Tickets:** 0 migrated (no data) ⚪
- **Reminders:** 1 migrated ✅
- **Birthdays:** 2 migrated ✅
- **Custom Commands:** 1 migrated ✅

**Advanced Features:**
- **AI Conversations:** 1 migrated ✅
- **Saved Embeds:** 2 migrated ✅
- **Reviews:** 3 migrated ✅
- **RPG Characters:** 1 migrated ✅
- **Sessions:** 10 migrated (4 skipped - expired) ✅
- **Versions:** 1 migrated ✅

**Analytics (High Volume):**
- **Guild Analytics:** 30 migrated ✅
- **Analytics Events:** 7,008 migrated ⭐⭐⭐
- **Notifications:** 6 migrated ✅
- **Notification Settings:** 2 migrated ✅

**TempVoice System:**
- **TempVoice Configs:** 8 migrated ✅
- **TempVoice User Stats:** 12 migrated ✅
- **TempVoice Channels:** 0 migrated (temporary - no active) ⚪
- **TempVoice Templates:** 0 migrated (no data) ⚪

**Games & Activities:**
- **Game Configs:** 3 migrated ✅
- **Trivia Stats:** 1 migrated ✅
- **Word Games:** 5 migrated ✅
- **Word Game Stats:** 1 migrated ✅
- **User Achievements:** 1 migrated ✅

**Server Management:**
- **Verification Configs:** 2 migrated ✅
- **Reaction Roles:** 0 migrated (no data) ⚪
- **Self Roles:** 0 migrated (no data) ⚪
- **Starboard:** 0 migrated (no data) ⚪
- **AFK:** 0 migrated (no data) ⚪
- **API Keys:** 0 migrated (no data) ⚪

**📊 Final Statistics:**
- **Total Records Migrated:** ~7,400+ records
- **Collections Processed:** 43/43 (100%)
- **Failed Migrations:** 5 records (0.07% failure rate)
- **Success Rate:** 99.93% ✅
- **Migration Time:** ~60 seconds
- **Data Integrity:** Verified ✅

---

## 🛠️ Tech Stack (Current)

| Layer | Technology | Status |
|-------|------------|--------|
| **Primary DB** | PostgreSQL | ✅ Active |
| **ORM** | Prisma 7 | ✅ Active |
| **Cache/Sessions** | Redis (ioredis) | ✅ Active |
| **Bot** | Discord.js v14 | ✅ Active |
| **API** | Express.js 5 | ✅ Active |
| **Frontend** | React 19, Vite 7 | ✅ Active |
| **Legacy** | mongoose (types only) | ⚠️ Pending removal |

---

# 📋 MIGRATION PLAN DETAILS

## Phase 1: Setup & Infrastructure

### 1.1 Install Dependencies
```bash
# PostgreSQL ORM
npm install prisma @prisma/client

# Redis client
npm install ioredis @types/ioredis

# Migration utilities
npm install pg @types/pg
```

### 1.2 Database Setup
- [ ] Set up PostgreSQL server (local or cloud - Supabase/Neon recommended)
- [ ] Create database `astra_bot`
- [ ] Set up Redis server (local or cloud - Upstash recommended)
- [ ] Add connection strings to `.env`:
  ```env
  DATABASE_URL="postgresql://user:password@host:5432/astra_bot?schema=public"
  REDIS_URL="redis://default:password@host:6379"
  ```

### 1.3 Initialize Prisma
```bash
npx prisma init
```

---

## Phase 2: PostgreSQL Schema Design

### 2.1 Core Tables

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================================
// CORE ENTITIES
// ============================================

model User {
  id            String   @id @default(cuid())
  discordId     String   @unique
  username      String
  globalName    String?
  discriminator String   @default("0")
  avatar        String?
  banner        String?
  accentColor   Int?
  
  // OAuth (encrypted at rest)
  accessToken   String?
  refreshToken  String?
  tokenExpiresAt DateTime?
  
  // Preferences as JSONB (flexible, rarely queried)
  preferences   Json     @default("{}")
  
  // Premium status
  premiumActive    Boolean  @default(false)
  premiumTier      Int      @default(0)
  premiumSince     DateTime?
  premiumExpiresAt DateTime?
  
  // Flags
  isBotOwner    Boolean  @default(false)
  isStaff       Boolean  @default(false)
  isBetaTester  Boolean  @default(false)
  isBanned      Boolean  @default(false)
  banReason     String?
  
  // Stats
  totalMessages Int      @default(0)
  totalCommands Int      @default(0)
  firstSeen     DateTime @default(now())
  lastSeen      DateTime @default(now())
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  // Relations
  levels        UserLevel[]
  economies     UserEconomy[]
  votes         UserVote[]
  badges        UserBadge[]
  reminders     Reminder[]
  birthday      Birthday?
  
  @@index([discordId])
  @@index([lastSeen])
  @@index([premiumActive])
}

model Guild {
  id        String   @id @default(cuid())
  guildId   String   @unique
  name      String
  icon      String?
  ownerId   String
  
  // Module configs as JSONB (complex nested structures)
  moderationConfig Json @default("{}")
  levelingConfig   Json @default("{}")
  economyConfig    Json @default("{}")
  welcomeConfig    Json @default("{}")
  loggingConfig    Json @default("{}")
  ticketConfig     Json @default("{}")
  automodConfig    Json @default("{}")
  musicConfig      Json @default("{}")
  gamesConfig      Json @default("{}")
  votingConfig     Json @default("{}")
  verifyConfig     Json @default("{}")
  tempVoiceConfig  Json @default("{}")
  
  // Simple flags (frequently queried)
  premium          Boolean @default(false)
  premiumUntil     DateTime?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  levels          UserLevel[]
  economies       UserEconomy[]
  moderationLogs  ModerationLog[]
  warnings        Warning[]
  tickets         Ticket[]
  giveaways       Giveaway[]
  customCommands  CustomCommand[]
  reactionRoles   ReactionRole[]
  selfRoles       SelfRole[]
  starboardPosts  StarboardPost[]
  analytics       GuildAnalytics?
  
  @@index([guildId])
}

// ============================================
// USER DATA (Per-Guild)
// ============================================

model UserLevel {
  id        String   @id @default(cuid())
  
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  guildId   String
  guild     Guild    @relation(fields: [guildId], references: [id], onDelete: Cascade)
  
  discordId String   // Denormalized for fast queries
  
  xp           Int      @default(0)
  level        Int      @default(0)
  totalXp      Int      @default(0)
  messages     Int      @default(0)
  voiceMinutes Int      @default(0)
  
  weeklyXp     Int      @default(0)
  monthlyXp    Int      @default(0)
  
  dailyStreak    Int    @default(0)
  longestStreak  Int    @default(0)
  lastDailyActivity DateTime?
  
  lastXpGain      DateTime @default(now())
  lastVoiceXpGain DateTime?
  
  // Card customization as JSONB
  cardConfig Json @default("{}")
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([guildId, discordId])
  @@index([guildId, totalXp(sort: Desc)])
  @@index([guildId, level(sort: Desc)])
  @@index([guildId, weeklyXp(sort: Desc)])
}

model UserEconomy {
  id        String   @id @default(cuid())
  
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  guildId   String
  guild     Guild    @relation(fields: [guildId], references: [id], onDelete: Cascade)
  
  discordId String
  
  balance      Int      @default(0)
  bank         Int      @default(0)
  bankLimit    Int      @default(10000)
  
  totalEarned  Int      @default(0)
  totalSpent   Int      @default(0)
  
  // Inventory as JSONB (flexible structure)
  inventory    Json     @default("[]")
  
  // Cooldowns moved to Redis
  
  dailyStreak  Int      @default(0)
  lastDaily    DateTime?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([guildId, discordId])
  @@index([guildId, balance(sort: Desc)])
}

model UserVote {
  id        String   @id @default(cuid())
  
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  discordId String
  platform  String   // topgg, discordbotlist, etc.
  
  isWeekend   Boolean @default(false)
  multiplier  Float   @default(1.0)
  
  rewardCoins Int     @default(0)
  rewardXp    Int     @default(0)
  
  votedAt   DateTime @default(now())
  
  @@index([discordId, platform])
  @@index([votedAt])
}

// ============================================
// MODERATION
// ============================================

model ModerationLog {
  id        String   @id @default(cuid())
  
  guildId   String
  guild     Guild    @relation(fields: [guildId], references: [id], onDelete: Cascade)
  
  caseId    Int
  
  targetId  String   // Discord user ID
  moderatorId String
  
  action    String   // ban, kick, warn, mute, timeout, unban, unmute
  reason    String?
  duration  Int?     // seconds
  
  expiresAt DateTime?
  active    Boolean  @default(true)
  
  // Evidence/notes as JSONB
  metadata  Json     @default("{}")
  
  createdAt DateTime @default(now())
  
  @@unique([guildId, caseId])
  @@index([guildId, targetId])
  @@index([guildId, action])
}

model Warning {
  id        String   @id @default(cuid())
  
  guildId   String
  guild     Guild    @relation(fields: [guildId], references: [id], onDelete: Cascade)
  
  userId    String   // Discord user ID
  moderatorId String
  
  reason    String
  severity  Int      @default(1) // 1-5
  
  active    Boolean  @default(true)
  expiresAt DateTime?
  
  createdAt DateTime @default(now())
  
  @@index([guildId, userId])
}

// ============================================
// TICKETS
// ============================================

model Ticket {
  id        String   @id @default(cuid())
  
  guildId   String
  guild     Guild    @relation(fields: [guildId], references: [id], onDelete: Cascade)
  
  channelId String   @unique
  userId    String   // Ticket creator
  
  panelId   String?
  subject   String?
  
  status    String   @default("open") // open, claimed, closed
  claimedBy String?
  closedBy  String?
  closedAt  DateTime?
  closeReason String?
  
  // Transcript stored as JSONB or external storage
  transcript Json?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([guildId, status])
  @@index([guildId, userId])
}

// ============================================
// ENGAGEMENT
// ============================================

model Giveaway {
  id        String   @id @default(cuid())
  
  guildId   String
  guild     Guild    @relation(fields: [guildId], references: [id], onDelete: Cascade)
  
  channelId String
  messageId String   @unique
  hostId    String
  
  prize     String
  winners   Int      @default(1)
  
  // Requirements as JSONB
  requirements Json @default("{}")
  
  // Participants stored in Redis during active, moved here on end
  participants String[] @default([])
  winnerIds    String[] @default([])
  
  endsAt    DateTime
  endedAt   DateTime?
  ended     Boolean  @default(false)
  
  createdAt DateTime @default(now())
  
  @@index([guildId])
  @@index([ended, endsAt])
}

model CustomCommand {
  id        String   @id @default(cuid())
  
  guildId   String
  guild     Guild    @relation(fields: [guildId], references: [id], onDelete: Cascade)
  
  name      String
  description String?
  
  // Response config as JSONB (message, embed, etc.)
  response  Json
  
  enabled   Boolean  @default(true)
  uses      Int      @default(0)
  
  createdBy String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([guildId, name])
}

model ReactionRole {
  id        String   @id @default(cuid())
  
  guildId   String
  guild     Guild    @relation(fields: [guildId], references: [id], onDelete: Cascade)
  
  channelId String
  messageId String
  
  // Role mappings as JSONB: { "emoji": "roleId", ... }
  roles     Json
  
  type      String   @default("normal") // normal, unique, verify, drop
  
  createdAt DateTime @default(now())
  
  @@unique([messageId])
  @@index([guildId])
}

model SelfRole {
  id        String   @id @default(cuid())
  
  guildId   String
  guild     Guild    @relation(fields: [guildId], references: [id], onDelete: Cascade)
  
  name      String
  
  // Panel config as JSONB
  config    Json
  
  messageId String?
  channelId String?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([guildId])
}

model StarboardPost {
  id        String   @id @default(cuid())
  
  guildId   String
  guild     Guild    @relation(fields: [guildId], references: [id], onDelete: Cascade)
  
  originalMessageId  String @unique
  originalChannelId  String
  starboardMessageId String @unique
  
  authorId  String
  stars     Int      @default(0)
  
  createdAt DateTime @default(now())
  
  @@index([guildId])
}

// ============================================
// MISC
// ============================================

model Birthday {
  id        String   @id @default(cuid())
  
  userId    String   @unique
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  discordId String   @unique
  day       Int
  month     Int
  year      Int?
  timezone  String   @default("UTC")
  
  @@index([month, day])
}

model Reminder {
  id        String   @id @default(cuid())
  
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  discordId String
  channelId String?
  guildId   String?
  
  message   String
  remindAt  DateTime
  
  sent      Boolean  @default(false)
  sentAt    DateTime?
  
  createdAt DateTime @default(now())
  
  @@index([remindAt, sent])
  @@index([discordId])
}

model UserBadge {
  id        String   @id @default(cuid())
  
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  badgeId   String
  name      String
  description String?
  icon      String?
  rarity    String   @default("common")
  
  earnedAt  DateTime @default(now())
  
  @@unique([userId, badgeId])
}

// ============================================
// ANALYTICS (Aggregated data)
// ============================================

model GuildAnalytics {
  id        String   @id @default(cuid())
  
  guildId   String   @unique
  guild     Guild    @relation(fields: [guildId], references: [id], onDelete: Cascade)
  
  // Current counters (updated in real-time via Redis, synced periodically)
  memberCount      Int @default(0)
  messagesTotal    Int @default(0)
  commandsTotal    Int @default(0)
  voiceMinutesTotal Int @default(0)
  
  // Heatmap data as JSONB
  activityHeatmap  Json @default("[]")
  
  // Historical snapshots as JSONB array
  growthSnapshots  Json @default("[]")
  
  // Channel stats as JSONB
  channelStats     Json @default("{}")
  
  // Command stats as JSONB
  commandStats     Json @default("{}")
  
  lastUpdated DateTime @default(now())
  
  @@index([guildId])
}

// ============================================
// TEMP VOICE
// ============================================

model TempVoiceChannel {
  id        String   @id @default(cuid())
  
  guildId   String
  channelId String   @unique
  ownerId   String
  
  // Settings as JSONB
  settings  Json     @default("{}")
  
  createdAt DateTime @default(now())
  
  @@index([guildId])
  @@index([ownerId])
}

// ============================================
// API & SESSIONS
// ============================================

model ApiKey {
  id        String   @id @default(cuid())
  
  key       String   @unique
  name      String
  
  userId    String?  // Owner
  guildId   String?  // Scope
  
  scopes    String[] @default([])
  
  rateLimit Int      @default(100)
  expiresAt DateTime?
  
  lastUsed  DateTime?
  uses      Int      @default(0)
  
  active    Boolean  @default(true)
  
  createdAt DateTime @default(now())
  
  @@index([key])
}
```

### 2.2 JSONB Usage Rationale

| Field | Why JSONB |
|-------|-----------|
| `preferences` | Flexible user preferences, rarely queried directly |
| `*Config` on Guild | Complex nested structures (automod rules, embed configs) |
| `inventory` | Variable-length array of items with different properties |
| `cardConfig` | User customization, not queried |
| `requirements` | Flexible giveaway conditions |
| `roles` on ReactionRole | Emoji-to-role mappings |
| `activityHeatmap` | 7x24 grid of numbers |
| `growthSnapshots` | Time-series data for charts |

---

## Phase 3: Redis Key Structure

### 3.1 Key Naming Convention

```
astra:{scope}:{identifier}:{type}
```

### 3.2 Session & Auth Keys

| Key Pattern | TTL | Purpose |
|-------------|-----|---------|
| `astra:session:{sessionId}` | 7d | Dashboard session data |
| `astra:oauth:{discordId}` | 1h | OAuth state during login |
| `astra:refresh:{discordId}` | 7d | Refresh token reference |

### 3.3 Cache Keys

| Key Pattern | TTL | Purpose |
|-------------|-----|---------|
| `astra:guild:{guildId}` | 5m | Full guild config cache |
| `astra:guild:{guildId}:config:{module}` | 5m | Module-specific config |
| `astra:user:{discordId}` | 5m | User profile cache |
| `astra:level:{guildId}:{discordId}` | 2m | User level cache |
| `astra:economy:{guildId}:{discordId}` | 2m | User economy cache |
| `astra:leaderboard:{guildId}:{type}` | 1m | Leaderboard cache |

### 3.4 Cooldown Keys

| Key Pattern | TTL | Purpose |
|-------------|-----|---------|
| `astra:cd:xp:{guildId}:{discordId}` | 60s | XP gain cooldown |
| `astra:cd:voice:{guildId}:{discordId}` | 60s | Voice XP cooldown |
| `astra:cd:cmd:{guildId}:{discordId}:{cmd}` | varies | Command cooldown |
| `astra:cd:daily:{guildId}:{discordId}` | 24h | Daily reward cooldown |
| `astra:cd:work:{guildId}:{discordId}` | 1h | Work command cooldown |
| `astra:cd:rob:{guildId}:{discordId}` | 2h | Rob command cooldown |
| `astra:cd:vote:{discordId}:{platform}` | 12h | Vote cooldown |

### 3.5 Rate Limiting Keys

| Key Pattern | TTL | Purpose |
|-------------|-----|---------|
| `astra:rate:api:{ip}` | 1m | API rate limit per IP |
| `astra:rate:api:{userId}` | 1m | API rate limit per user |
| `astra:rate:cmd:{guildId}` | 1s | Command rate limit per guild |
| `astra:rate:ws:{socketId}` | 1m | WebSocket rate limit |

### 3.6 Temporary Data Keys

| Key Pattern | TTL | Purpose |
|-------------|-----|---------|
| `astra:giveaway:{messageId}:entries` | until end | Giveaway participants set |
| `astra:poll:{messageId}:votes` | until end | Poll votes hash |
| `astra:trivia:{channelId}` | 5m | Active trivia game state |
| `astra:music:{guildId}:queue` | 24h | Music queue list |
| `astra:music:{guildId}:now` | 24h | Now playing data |
| `astra:tempvoice:{channelId}` | 24h | Temp voice channel data |
| `astra:afk:{guildId}:{discordId}` | 24h | AFK status |

### 3.7 Analytics/Counters Keys

| Key Pattern | TTL | Purpose |
|-------------|-----|---------|
| `astra:stats:{guildId}:messages:today` | 24h | Daily message counter |
| `astra:stats:{guildId}:commands:today` | 24h | Daily command counter |
| `astra:stats:{guildId}:voice:today` | 24h | Daily voice minutes |
| `astra:stats:global:commands` | never | Global command counter |

---

## Phase 4: Data Migration Strategy

### 4.1 Migration Order

```
1. Users (no dependencies)
2. Guilds (no dependencies)
3. UserLevels (depends on Users, Guilds)
4. UserEconomies (depends on Users, Guilds)
5. UserVotes (depends on Users)
6. Birthdays (depends on Users)
7. Reminders (depends on Users)
8. UserBadges (depends on Users)
9. ModerationLogs (depends on Guilds)
10. Warnings (depends on Guilds)
11. Tickets (depends on Guilds)
12. Giveaways (depends on Guilds)
13. CustomCommands (depends on Guilds)
14. ReactionRoles (depends on Guilds)
15. SelfRoles (depends on Guilds)
16. StarboardPosts (depends on Guilds)
17. GuildAnalytics (depends on Guilds)
18. TempVoiceChannels (depends on Guilds)
19. ApiKeys (standalone)
```

### 4.2 Migration Script Structure

```typescript
// src/database/migration/migrate-to-postgres.ts

import { PrismaClient } from '@prisma/client';
import mongoose from 'mongoose';
import { logger } from '../../shared/utils/logger';

const prisma = new PrismaClient();

interface MigrationResult {
  collection: string;
  total: number;
  migrated: number;
  failed: number;
  errors: string[];
}

async function migrateUsers(): Promise<MigrationResult> {
  const result: MigrationResult = {
    collection: 'users',
    total: 0,
    migrated: 0,
    failed: 0,
    errors: [],
  };
  
  const cursor = mongoose.connection.collection('users').find({});
  result.total = await mongoose.connection.collection('users').countDocuments();
  
  for await (const doc of cursor) {
    try {
      await prisma.user.upsert({
        where: { discordId: doc.discordId },
        update: {},
        create: {
          discordId: doc.discordId,
          username: doc.username,
          globalName: doc.globalName,
          discriminator: doc.discriminator || '0',
          avatar: doc.avatar,
          banner: doc.banner,
          accentColor: doc.accentColor,
          accessToken: doc.accessToken,
          refreshToken: doc.refreshToken,
          tokenExpiresAt: doc.tokenExpiresAt,
          preferences: doc.preferences || {},
          premiumActive: doc.premium?.active || false,
          premiumTier: doc.premium?.tier || 0,
          premiumSince: doc.premium?.since,
          premiumExpiresAt: doc.premium?.expiresAt,
          isBotOwner: doc.flags?.isBotOwner || false,
          isStaff: doc.flags?.isStaff || false,
          isBetaTester: doc.flags?.isBetaTester || false,
          isBanned: doc.flags?.isBanned || false,
          banReason: doc.flags?.banReason,
          totalMessages: doc.globalStats?.totalMessages || 0,
          totalCommands: doc.globalStats?.totalCommands || 0,
          firstSeen: doc.globalStats?.firstSeen || doc.createdAt,
          lastSeen: doc.globalStats?.lastSeen || doc.updatedAt,
          createdAt: doc.createdAt,
          updatedAt: doc.updatedAt,
        },
      });
      result.migrated++;
    } catch (error) {
      result.failed++;
      result.errors.push(`User ${doc.discordId}: ${error}`);
    }
  }
  
  return result;
}

// Similar functions for each collection...

async function runMigration() {
  logger.info('Starting MongoDB → PostgreSQL migration...');
  
  // Connect to both databases
  await mongoose.connect(process.env.MONGODB_URI!);
  
  const results: MigrationResult[] = [];
  
  // Run migrations in order
  results.push(await migrateUsers());
  results.push(await migrateGuilds());
  results.push(await migrateUserLevels());
  // ... etc
  
  // Print summary
  logger.info('=== Migration Summary ===');
  for (const result of results) {
    logger.info(`${result.collection}: ${result.migrated}/${result.total} (${result.failed} failed)`);
  }
  
  await mongoose.disconnect();
  await prisma.$disconnect();
}
```

### 4.3 Zero-Downtime Migration

```
Phase A: Dual-Write (1-2 weeks)
├── All writes go to both MongoDB and PostgreSQL
├── Reads still from MongoDB
└── Monitor for discrepancies

Phase B: Shadow Read (1 week)
├── Writes to both databases
├── Reads from PostgreSQL (with MongoDB fallback)
└── Compare results, log differences

Phase C: PostgreSQL Primary (1 week)
├── Writes to PostgreSQL only
├── Reads from PostgreSQL only
├── MongoDB becomes read-only backup
└── Monitor for issues

Phase D: Cleanup
├── Remove MongoDB code paths
├── Archive MongoDB data
└── Delete MongoDB connection
```

---

## Phase 5: Code Refactor Tasks

### 5.1 New Database Layer Structure

```
src/database/
├── prisma/
│   └── schema.prisma
├── redis/
│   ├── client.ts          # Redis connection
│   ├── keys.ts            # Key generators
│   ├── cache.ts           # Cache utilities
│   └── cooldowns.ts       # Cooldown helpers
├── repositories/
│   ├── UserRepository.ts
│   ├── GuildRepository.ts
│   ├── LevelRepository.ts
│   ├── EconomyRepository.ts
│   └── ...
└── index.ts               # Exports
```

### 5.2 Repository Pattern Example

```typescript
// src/database/repositories/GuildRepository.ts

import { PrismaClient, Guild } from '@prisma/client';
import { redis, KEYS, TTL } from '../redis';

const prisma = new PrismaClient();

export class GuildRepository {
  // Get guild with caching
  async getByGuildId(guildId: string): Promise<Guild | null> {
    // Try cache first
    const cached = await redis.get(KEYS.guild(guildId));
    if (cached) {
      return JSON.parse(cached);
    }
    
    // Query database
    const guild = await prisma.guild.findUnique({
      where: { guildId },
    });
    
    if (guild) {
      // Cache for 5 minutes
      await redis.setex(KEYS.guild(guildId), TTL.GUILD_CONFIG, JSON.stringify(guild));
    }
    
    return guild;
  }
  
  // Get or create guild
  async getOrCreate(guildId: string, name: string, ownerId: string): Promise<Guild> {
    const guild = await prisma.guild.upsert({
      where: { guildId },
      update: { name },
      create: { guildId, name, ownerId },
    });
    
    // Invalidate cache
    await redis.del(KEYS.guild(guildId));
    
    return guild;
  }
  
  // Update module config
  async updateModuleConfig(
    guildId: string, 
    module: string, 
    config: Record<string, any>
  ): Promise<Guild> {
    const updateData: Record<string, any> = {};
    updateData[`${module}Config`] = config;
    
    const guild = await prisma.guild.update({
      where: { guildId },
      data: updateData,
    });
    
    // Invalidate cache
    await redis.del(KEYS.guild(guildId));
    await redis.del(KEYS.guildConfig(guildId, module));
    
    return guild;
  }
}

export const guildRepository = new GuildRepository();
```

### 5.3 Redis Utilities

```typescript
// src/database/redis/keys.ts

export const KEYS = {
  // Sessions
  session: (id: string) => `astra:session:${id}`,
  
  // Cache
  guild: (guildId: string) => `astra:guild:${guildId}`,
  guildConfig: (guildId: string, module: string) => `astra:guild:${guildId}:config:${module}`,
  user: (discordId: string) => `astra:user:${discordId}`,
  level: (guildId: string, discordId: string) => `astra:level:${guildId}:${discordId}`,
  economy: (guildId: string, discordId: string) => `astra:economy:${guildId}:${discordId}`,
  leaderboard: (guildId: string, type: string) => `astra:leaderboard:${guildId}:${type}`,
  
  // Cooldowns
  xpCooldown: (guildId: string, discordId: string) => `astra:cd:xp:${guildId}:${discordId}`,
  voiceCooldown: (guildId: string, discordId: string) => `astra:cd:voice:${guildId}:${discordId}`,
  cmdCooldown: (guildId: string, discordId: string, cmd: string) => `astra:cd:cmd:${guildId}:${discordId}:${cmd}`,
  dailyCooldown: (guildId: string, discordId: string) => `astra:cd:daily:${guildId}:${discordId}`,
  voteCooldown: (discordId: string, platform: string) => `astra:cd:vote:${discordId}:${platform}`,
  
  // Rate limiting
  rateApi: (identifier: string) => `astra:rate:api:${identifier}`,
  rateCmd: (guildId: string) => `astra:rate:cmd:${guildId}`,
  
  // Temporary data
  giveawayEntries: (messageId: string) => `astra:giveaway:${messageId}:entries`,
  pollVotes: (messageId: string) => `astra:poll:${messageId}:votes`,
  musicQueue: (guildId: string) => `astra:music:${guildId}:queue`,
  afk: (guildId: string, discordId: string) => `astra:afk:${guildId}:${discordId}`,
  
  // Stats
  dailyMessages: (guildId: string) => `astra:stats:${guildId}:messages:today`,
  dailyCommands: (guildId: string) => `astra:stats:${guildId}:commands:today`,
};

export const TTL = {
  SESSION: 7 * 24 * 60 * 60,      // 7 days
  GUILD_CONFIG: 5 * 60,            // 5 minutes
  USER_CACHE: 5 * 60,              // 5 minutes
  LEVEL_CACHE: 2 * 60,             // 2 minutes
  LEADERBOARD: 60,                 // 1 minute
  XP_COOLDOWN: 60,                 // 1 minute
  DAILY_COOLDOWN: 24 * 60 * 60,    // 24 hours
  VOTE_COOLDOWN: 12 * 60 * 60,     // 12 hours
  AFK: 24 * 60 * 60,               // 24 hours
};
```

### 5.4 Cooldown Helper

```typescript
// src/database/redis/cooldowns.ts

import { redis, KEYS, TTL } from './client';

export async function checkCooldown(key: string): Promise<number | null> {
  const ttl = await redis.ttl(key);
  return ttl > 0 ? ttl : null;
}

export async function setCooldown(key: string, seconds: number): Promise<void> {
  await redis.setex(key, seconds, '1');
}

export async function clearCooldown(key: string): Promise<void> {
  await redis.del(key);
}

// XP cooldown check
export async function canGainXp(guildId: string, discordId: string): Promise<boolean> {
  const key = KEYS.xpCooldown(guildId, discordId);
  const remaining = await checkCooldown(key);
  return remaining === null;
}

export async function setXpCooldown(guildId: string, discordId: string, seconds: number = 60): Promise<void> {
  await setCooldown(KEYS.xpCooldown(guildId, discordId), seconds);
}

// Command cooldown
export async function checkCommandCooldown(
  guildId: string, 
  discordId: string, 
  command: string
): Promise<number | null> {
  return checkCooldown(KEYS.cmdCooldown(guildId, discordId, command));
}

export async function setCommandCooldown(
  guildId: string, 
  discordId: string, 
  command: string, 
  seconds: number
): Promise<void> {
  await setCooldown(KEYS.cmdCooldown(guildId, discordId, command), seconds);
}
```

---

## Phase 6: Testing & Validation

### 6.1 Validation Queries

```sql
-- Compare counts
SELECT 'users' as table_name, COUNT(*) as count FROM "User"
UNION ALL
SELECT 'guilds', COUNT(*) FROM "Guild"
UNION ALL
SELECT 'userlevels', COUNT(*) FROM "UserLevel"
UNION ALL
SELECT 'usereconomies', COUNT(*) FROM "UserEconomy";

-- Check for orphaned records
SELECT ul.id FROM "UserLevel" ul
LEFT JOIN "User" u ON ul."userId" = u.id
WHERE u.id IS NULL;

-- Verify JSONB integrity
SELECT id, "guildId" FROM "Guild"
WHERE "levelingConfig"::text = 'null' 
   OR "levelingConfig" IS NULL;
```

### 6.2 Integration Tests

```typescript
// tests/database/repositories.test.ts

describe('GuildRepository', () => {
  it('should cache guild on read', async () => {
    const guild = await guildRepository.getByGuildId('123456789');
    const cached = await redis.get(KEYS.guild('123456789'));
    expect(cached).not.toBeNull();
  });
  
  it('should invalidate cache on update', async () => {
    await guildRepository.updateModuleConfig('123456789', 'leveling', { enabled: true });
    const cached = await redis.get(KEYS.guild('123456789'));
    expect(cached).toBeNull();
  });
});
```

---

## Phase 7: MongoDB Removal Checklist

- [ ] Remove all Mongoose imports
- [ ] Remove all MongoDB models (`src/database/models/*.ts`)
- [ ] Remove MongoDB connection code
- [ ] Remove `mongoose` from `package.json`
- [ ] Update `.env.example` to remove `MONGODB_URI`
- [ ] Update Docker/deployment configs
- [ ] Archive MongoDB data backup
- [ ] Update documentation

---

## 📊 Best Practices Summary

### Performance

| Practice | Implementation |
|----------|----------------|
| Connection pooling | Prisma default pool (10 connections) |
| Query optimization | Use `select` to limit fields |
| Batch operations | Use `createMany`, `updateMany` |
| Caching | Redis for hot data (5-minute TTL) |
| Indexes | On all foreign keys and query fields |

### Indexing Strategy

```prisma
// Always index:
@@index([guildId])                    // All guild-scoped tables
@@index([discordId])                  // All user lookups
@@index([guildId, totalXp(sort: Desc)]) // Leaderboards
@@index([status])                     // Status filters
@@index([createdAt])                  // Time-based queries
```

### Scalability (100+ guilds)

| Concern | Solution |
|---------|----------|
| Read latency | Redis cache layer |
| Write throughput | Batch writes, async processing |
| Connection limits | Connection pooling |
| Large tables | Partitioning by guildId (future) |
| Analytics | Aggregate in Redis, sync to Postgres hourly |

---

## 🗓️ Timeline Estimate

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 1: Setup | 1 day | None |
| Phase 2: Schema | 2-3 days | Phase 1 |
| Phase 3: Redis | 1-2 days | Phase 1 |
| Phase 4: Migration | 3-5 days | Phase 2, 3 |
| Phase 5: Refactor | 5-7 days | Phase 4 |
| Phase 6: Testing | 2-3 days | Phase 5 |
| Phase 7: Cleanup | 1 day | Phase 6 |
| **Total** | **15-22 days** | |

---

# ═══════════════════════════════════════════════════════════════

## 🎯 Previous Updates (Archive)

### AI Chatbot & Version Release System (v2.21.0)
- ✅ AI: Astra AI chatbot with Google Gemini integration
- ✅ AI: Auto-reply when mentioning Astra or using trigger words
- ✅ AI: Astra info embed when triggered without a question
- ✅ AI: Dashboard AI chat with Markdown rendering
- ✅ AI: Fixed Bot/User avatars in dashboard chat
- ✅ Release: Version release announcement system
- ✅ Release: `/release create` command with modal for creating releases
- ✅ Release: `/release announce` to broadcast to all servers
- ✅ Release: `/release preview` to preview announcement embed
- ✅ Release: `/release delete` to remove releases
- ✅ Release: Autocomplete for version selection
- ✅ Release: `/changelog channel` to set announcement channel per guild
- ✅ Release: `/changelog latest` and `/changelog history` commands
- ✅ Fix: Ephemeral deprecation warning (use MessageFlags.Ephemeral)
- ✅ Fix: Changelog field truncation for Discord 1024 char limit
- ✅ Fix: Deploy commands hanging issue resolved
- ✅ Fix: Notification model export for API

### Major Dependency Update & Tailwind CSS 4.x Migration (v2.20.0)
- ✅ Dependencies: Updated React to v19, React Router to v7, Tailwind CSS to v4
- ✅ Dependencies: Updated Vite to v7, Mongoose to v9, Express to v5, Zod to v4
- ✅ Tailwind: Full migration to Tailwind CSS 4.x syntax
- ✅ Dashboard: New CommandsPage, MembersPage, GuildSelectPage, ReviewsManagerPage

### Stability & GitHub Discord Notifications (v2.19.1)
- ✅ GitHub: Advanced Discord webhook notifications workflow (push, PR, issues, releases, CI failure, stars, forks)
- ✅ GitHub: Reusable Discord notify composite action for consistent embeds
- ✅ GitHub: Deploy notification workflow example (deploy-notify.yml)
- ✅ Docs: Discord webhook setup guide at .github/DISCORD_WEBHOOKS.md
- ✅ TempVoice: Fix unused-variable lint warnings in interaction handlers
- ✅ Versions: Sync package versions across repo to match dashboard changelog

### VotingPage Modernization & Bot List Integration (v2.19.0)
- ✅ VotingPage: Complete redesign with Lucide React icons (no emojis)
- ✅ VotingPage: New "Bot Setup" tab with copy-ready templates
- ✅ VotingPage: Bot ID, descriptions, tags, webhook URLs all copyable
- ✅ VotingPage: Platform quick links to add/edit bot on each list
- ✅ VotingPage: Leaderboard period filter (All Time / Monthly / Weekly)
- ✅ VotingPage: Stats summary (voters, votes, coins earned, best streak)
- ✅ VotingPage: Expandable platform cards with Vote URL and Webhook info
- ✅ VotingPage: Modern medal icons for top 3 voters podium
- ✅ VotingPage: Platform cards show cooldown duration (12h/24h)
- ✅ LandingPage: Trusted Servers marquee faster and smoother
- ✅ LandingPage: Marquee pauses on hover
- ✅ LandingPage: Permanent invite links for showcase servers
- ✅ LandingPage: Community Discord section with official widget
- ✅ API: Webhook secret validation for Discord Bot List (Authorization header)
- ✅ Config: DBL_WEBHOOK_SECRET, DISCORDS_WEBHOOK_SECRET, BFD_WEBHOOK_SECRET

### Music System 2.0 (Complete)
- ✅ MusicConfig: Extended schema with DJ system, filters, quiz settings
- ✅ DJ System: `/dj role`, `/dj mode`, `/dj commands`, `/dj blacklist`
- ✅ DJ Permissions: Role-based control, DJ-only mode, command restrictions
- ✅ Audio Filters: 20+ presets (bassbomo, nightcore, 8d, vaporwave, etc.)
- ✅ Filter Command: `/filter set`, `/filter clear`, `/filter list`, `/filter menu`
- ✅ Lyrics: `/lyrics` with pagination, auto-fetch from lyrics.ovh API
- ✅ Music Quiz: `/musicquiz start`, multiplayer guessing game
- ✅ Music Quiz: 5 genres (pop, rock, hiphop, edm, anime), scoring system
- ✅ Music Quiz: Streak bonuses, leaderboard, configurable rounds
- ✅ Spotify: `/spotify play`, `/spotify save`, `/spotify list`, `/spotify load`
- ✅ Spotify: Playlist sync system with guild storage (max 10 playlists)
- ✅ MusicUtils: Shared utilities for DJ checks, filters, quiz helpers
- ✅ Lavalink v4: Self-hosted with SSL (Nginx reverse proxy)
- ✅ Lavalink: Custom Shoukaku connector for reliable connection
- ✅ `/play`: Simplified command with auto source detection

### WidgetBot & Vote System (v2.18.1)
- ✅ WidgetBot: Discord chat widget embedded on LandingPage
- ✅ WidgetBot: Modern container with glow effects & glassmorphism
- ✅ WidgetBot: Custom header with server info & online status
- ✅ CSP: Extended for WidgetBot (frameSrc, childSrc, connectSrc, formAction)
- ✅ VoteService: Modernized channel notification embed
- ✅ VoteService: Modernized DM embed with streak tiers
- ✅ VoteService: Dynamic colors for milestones & weekend bonuses
- ✅ VoteService: Progress tracking with visual indicators
- ✅ iframe: Fixed deprecated frameBorder attribute
- ✅ DashboardPage: Fixed user avatar URL handling
- ✅ DashboardPage: Fixed notification settings link
- ✅ DashboardPage: Fixed guild API response handling

### SEO & Dashboard Modernization (v2.18.0)
- ✅ DashboardPage: Bento Grid Layout with animations
- ✅ DashboardPage: Lucide icons instead of emojis
- ✅ DashboardPage: Enhanced pro tips & keyboard shortcuts
- ✅ index.html: Complete SEO overhaul (30+ meta tags)
- ✅ index.html: Extended Open Graph & Twitter Cards
- ✅ index.html: 4 JSON-LD schemas (WebApp, Org, Breadcrumb, FAQ)
- ✅ index.html: Security headers (CSP, X-Frame, XSS Protection)
- ✅ index.html: Modern loading screen with logo animation
- ✅ index.html: Accessibility improvements (skip link, ARIA)
- ✅ SEO: robots.txt with crawler instructions
- ✅ SEO: sitemap.xml with all public routes
- ✅ SEO: oembed.json for Discord embeds
- ✅ SEO: Google Search Console integration
- ✅ SEO: Long-tail keywords (EN + DE)
- ✅ SEO: Canonical URLs & hreflang tags

### Dashboard & Public Pages Overhaul (v2.17.0)
- ✅ StatusPage: Complete redesign with professional UI
- ✅ StatusPage: Service cards with 30-day uptime bars
- ✅ StatusPage: Real-time response time monitoring
- ✅ StatusPage: System information (expandable)
- ✅ StatusPage: Quick stats grid (servers, users, commands)
- ✅ PublicChangelogPage: Standalone changelog with modern UI
- ✅ LandingPage: Status link in navigation (desktop + mobile)
- ✅ LandingPage: Expanded FAQ section with icons
- ✅ LandingPage: Latest Update preview section
- ✅ Review System: Tags support (5 tag types)
- ✅ Review API: Tags endpoint and filtering
- ✅ README: Complete rewrite (modern, user-focused)
- ✅ README: Star History section with theme support
- ✅ Removed "Open Source" claims (code is encrypted)

### Games & Entertainment System (v2.16.0)
- ✅ Database: Games.ts with 8 models (TriviaStats, WordGame, RPGCharacter, Pet, etc.)
- ✅ Trivia: 500+ questions, 16 categories, 4 difficulty levels
- ✅ Word Games: Wordle with 6 attempts, Hangman with visual stages
- ✅ RPG: Full adventure system with 6 classes, combat, inventory, quests
- ✅ Pets: 20+ species, 6 rarities, evolution, pet care mechanics
- ✅ Achievements: 70+ achievements, 5 tiers, 10 categories
- ✅ Commands: `/trivia`, `/wordgames`, `/rpg`, `/pet`, `/achievements`
- ✅ API: Games routes with leaderboards, stats, config
- ✅ Dashboard: GamesPage with overview, leaderboards, settings

### UI Modernization & Configuration Overhaul (v2.15.0)
- ✅ UI Components: Modernized Button (8 variants, loading, icons)
- ✅ UI Components: Modernized Card (6 variants + StatCard)
- ✅ UI Components: Modernized Input (4 variants, icons, SearchInput)
- ✅ UI Components: Modernized Select (3 variants, icons)
- ✅ UI Components: Modernized Switch (5 variants, 3 sizes, labels)
- ✅ UI Components: Modernized Tabs (5 variants: pills, gradient, etc.)
- ✅ UI Components: Modernized Textarea (character counter, resize)
- ✅ UI Components: New Badge component (8 variants, StatusBadge)
- ✅ UI Components: New Skeleton component (4 variants, presets)
- ✅ UI Components: Centralized exports via index.ts barrel
- ✅ Tailwind: Extended colors (success, warning, danger, discord)
- ✅ Tailwind: New gradients (aurora, neon, mesh, noise, grid, dots)
- ✅ Tailwind: Advanced shadows (glow, elevated, card-hover)
- ✅ Tailwind: 15+ new animations (float, wiggle, pulse-glow, rainbow)
- ✅ Vite: Mode-aware config with loadEnv
- ✅ Vite: Extended path aliases (@components, @pages, @lib, etc.)
- ✅ Vite: Advanced chunk splitting for optimal caching
- ✅ HTML: PWA support, SEO, security headers, loading screen
- ✅ LandingPage: Modern pill-shaped navigation
- ✅ LoginPage: Badge & Button components integration
- ✅ API Fix: Bot client connected log spam resolved

### Advanced Analytics System (v2.14.0)
- ✅ Analytics: Real-time dashboard with live statistics
- ✅ Analytics: Interactive activity heatmap (7x24 grid)
- ✅ Analytics: Channel & command statistics
- ✅ Analytics: Growth tracking with AI projections
- ✅ Export: CSV and PDF report generation

### Modern Logger System & Startup UI (v2.13.0)
- ✅ Logger: Complete rewrite with Winston & daily-rotate-file
- ✅ Logger: 20+ module-specific loggers (bot, api, db, music, etc.)
- ✅ Logger: Color-coded console output with icons
- ✅ Logger: Daily rotating log files (error, combined, debug)
- ✅ Logger: Extended methods (startup, banner, request, timing, memory)
- ✅ Startup: Modern ASCII art banner with version info
- ✅ Startup: Structured sections (Database, Components, Discord, Systems)
- ✅ Startup: Timing information for each step
- ✅ Startup: Statistics box (servers, users, channels)
- ✅ Startup: System initialization with icons and timing
- ✅ Redis: Auto-connect to localhost if REDIS_URL not set
- ✅ Redis: Graceful fallback to memory store if unavailable
- ✅ Redis: Better error handling to prevent log spam
- ✅ Database: Migration system for schema updates
- ✅ Database: CLI tool (npm run db:migrate)
- ✅ Database: Auto-migrate option (AUTO_MIGRATE=true)
- ✅ Code: Replaced all console.log/error with logger calls
- ✅ Code: Consistent logging across entire codebase

### TempVoice Dashboard Overhaul & Global Commands (v2.12.0)
- ✅ TempVoice Dashboard: New "Interface" tab for control panel settings
- ✅ TempVoice Dashboard: MessageTypeSelector, EmbedBuilder, ChannelSelect
- ✅ TempVoice Dashboard: Preview modal for control panel
- ✅ TempVoice Bot: Custom Discord emojis throughout system
- ✅ Bot: Welcome embed sent when joining new servers
- ✅ Slash Commands: Now deploy globally instead of single-guild
- ✅ Slash Commands: Dev-mode detection using NODE_ENV
- ✅ UserEconomy: createTransaction helper function

### Advanced Verification System (v2.11.0)
- ✅ Verification: 5 methods (Button, Reaction, Captcha, Dropdown, Agree Rules)
- ✅ Verification: Custom embed builder for verification message
- ✅ Verification: Account age requirement & kick unverified timeout
- ✅ Verification: DM on join/verify with customizable messages
- ✅ Verification: Statistics tracking (verified, failed, kicked)
- ✅ Verification: Bot commands (/verify setup, deploy, manual, stats)
- ✅ VerificationSettingsPage: 5-tab dashboard configuration

### Auto Roles System (v2.11.0)
- ✅ Auto Roles: Dedicated settings page with role cards
- ✅ Auto Roles: Multiple roles with individual settings
- ✅ Auto Roles: Delay option (assign role after X seconds)
- ✅ Auto Roles: Conditions (min account age, require avatar, require username)
- ✅ Auto Roles: Bypass roles for staff members
- ✅ Auto Roles: "Requires Verification" option per role

### Admin Tools (v2.11.0)
- ✅ Version Manager: Dashboard page for creating releases
- ✅ Version Manager: Auto-sync changelog.ts and package.json
- ✅ Version Manager: Major/Minor/Patch version bump
- ✅ Admin middleware with Discord ID authentication

### Level Cards & EmojiPicker (v2.9.0)
- ✅ LevelCard: Dashboard preview matches bot /rank card exactly
- ✅ LevelCard: Stats row (Total XP, Messages, Next LVL)
- ✅ cardGenerator: Full CardConfig support with dynamic colors
- ✅ EmojiPicker: Portal-based dropdown (no scroll issues)
- ✅ EmojiPicker: Custom/Server emojis display as images
- ✅ SelfRoles: RoleEditorRow redesigned with 2-column layout

### Self Roles System (v2.8.0)
- ✅ Self Roles: Panel support for Buttons, Dropdowns, Reactions
- ✅ Self Roles: Custom embed customization per panel
- ✅ Self Roles: Role limits (min/max per panel)
- ✅ Self Roles: Required role & blacklist support
- ✅ `/selfroles` command (deploy, list, refresh, stats)
- ✅ SelfRolesSettingsPage with live preview

### Server Logging System (v2.7.0)
- ✅ LoggingService: 17 event types, 5 log categories
- ✅ Logging: Per-category channel configuration
- ✅ Logging: Audit log integration for executor tracking
- ✅ Logging: Custom embed colors, footer, author settings
- ✅ LoggingSettingsPage: Full configuration dashboard

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
- [x] Message edit logs
- [x] Message delete logs
- [x] Message bulk delete logs
- [x] Member join/leave logs
- [x] Member update logs (roles, nickname)
- [x] Member ban/unban logs
- [x] Role change logs (create, delete, update)
- [x] Channel change logs (create, delete, update)
- [x] Voice activity logs (join, leave, move)
- [x] Configurable log channels (5 categories)
- [x] Dashboard LoggingSettingsPage with full configuration
- [x] Ignored channels and roles support
- [x] Audit log integration for executor tracking
- [x] Log format selection (Embed, Message, Both)
- [x] Custom embed colors per category
- [x] Custom footer and author settings
- [x] Display options (timestamp, executor, thumbnail, compact)
- [x] Live embed preview in dashboard

### 🎭 Self Roles System
- [x] SelfRole database model with panels
- [x] Support for Buttons, Dropdowns, Reactions
- [x] Custom embed customization per panel
- [x] Role limits (min/max per panel)
- [x] Required role & blacklist support
- [x] `/selfroles` command (deploy, list, refresh, stats)
- [x] Button & dropdown interaction handlers
- [x] SelfRolesSettingsPage dashboard
- [x] Live panel preview
- [x] Global settings (log channel, DM notifications)

### 🔐 Verification System
- [x] Verification: 5 methods (Button, Reaction, Captcha, Dropdown, Agree Rules)
- [x] Verification: Captcha with difficulty levels (Easy, Medium, Hard)
- [x] Verification: Custom embed builder for verification message
- [x] Verification: Account age requirement
- [x] Verification: Kick unverified members after timeout
- [x] Verification: DM on join/verify with customizable messages
- [x] Verification: Statistics tracking (verified, failed, kicked)
- [x] `/verify` command (setup, deploy, manual, stats)
- [x] VerificationSettingsPage dashboard with 5 tabs
- [x] API: /guilds/:guildId/verification endpoints

### 🎭 Auto Roles System
- [x] Auto Roles: Dedicated settings page
- [x] Auto Roles: Multiple roles with individual settings
- [x] Auto Roles: Delay option (assign role after X seconds)
- [x] Auto Roles: "Requires Verification" option per role
- [x] Auto Roles: Bot inclusion toggle per role
- [x] Auto Roles: Conditions (min account age, require avatar, require username)
- [x] Auto Roles: Bypass roles for staff members
- [x] AutoRolesSettingsPage dashboard with role cards
- [x] API: /guilds/:guildId/autoroles endpoints

### 🎤 TempVoice System
- [x] TempVoice: Creator channels with auto-create
- [x] TempVoice: Channel owner permissions
- [x] TempVoice: Privacy, bitrate, region controls
- [x] TempVoice: Control panel with buttons
- [x] TempVoice: Custom Discord emojis throughout
- [x] TempVoice Dashboard: Interface tab
- [x] TempVoice Dashboard: EmbedBuilder & MessageTypeSelector
- [x] TempVoice Dashboard: Preview modal
- [x] TempVoicePage dashboard with SectionCards

### 🛠️ Admin Tools
- [x] Version Manager: Dashboard page for releases
- [x] Version Manager: Auto-sync changelog.ts & package.json
- [x] Version Manager: Major/Minor/Patch version bump
- [x] Version Manager: Changelog history viewer
- [x] Admin middleware with Discord ID auth
- [x] Admin routes (/api/admin/*)

### 🔧 API Enhancements
- [x] Verification API endpoints
- [x] Auto Roles API endpoints
- [x] Admin API endpoints
- [x] Rate limiting with Redis (with memory fallback)
- [x] API key authentication (Bearer token, scopes, permissions)
- [x] Webhook notifications (30+ event types, retries, queue)
- [x] Public API documentation (Swagger/OpenAPI at /api/docs)
- [ ] GraphQL endpoint (optional)

---

## 🔮 Phase 4: Games & Entertainment (Completed)

### 🎮 Games & Entertainment ✅
- [x] Trivia system with categories
  - [x] 500+ questions across 16 categories
  - [x] Difficulty levels (Easy, Medium, Hard, Expert)
  - [x] Leaderboards and statistics
  - [x] Streak bonuses and time bonuses
- [x] Word games (Wordle, Hangman)
  - [x] Wordle with 6 attempts
  - [x] Hangman with hints
  - [x] Statistics and leaderboards
- [x] RPG adventure system
  - [x] 6 character classes (Warrior, Mage, Rogue, Ranger, Healer, Paladin)
  - [x] 20+ items, 15+ monsters, 9 locations
  - [x] Combat system with elements
  - [x] Equipment and inventory
  - [x] Quests and shops
- [x] Pet collection system
  - [x] 20+ pet species across 6 rarities
  - [x] Pet care (feed, play, pet)
  - [x] Evolution system
  - [x] Pet abilities and battles
- [x] Achievements & badges
  - [x] 70+ achievements across 10 categories
  - [x] 5 tiers (Bronze, Silver, Gold, Platinum, Diamond)
  - [x] Progress tracking
  - [x] Badge display system
- [x] Games API routes
- [x] Games Dashboard page

### 📊 Advanced Analytics ✅
- [x] Member activity heatmaps
- [x] Channel usage statistics
- [x] Command popularity charts
- [x] Growth tracking & projections
- [x] Export reports (PDF/CSV)

---

## 🏭 Phase 5: Production & Scale (In Progress)

### 🐳 Infrastructure
- [ ] Docker & Docker Compose setup
- [x] Redis caching layer ✅
- [ ] Sharding for 2500+ guilds
- [ ] Cluster management (discord-hybrid-sharding)
- [ ] Load balancing with PM2

### 📈 Monitoring & Analytics
- [x] Health check endpoints (/api/health) ✅
- [ ] Prometheus metrics export
- [ ] Grafana dashboards
- [ ] Sentry error tracking
- [x] StatusPage with uptime monitoring ✅

### 🧪 Testing
- [ ] Jest unit tests (bot commands)
- [ ] Supertest API tests
- [ ] Playwright E2E tests (dashboard)
- [x] GitHub Actions CI/CD ✅

### 📚 Documentation
- [x] API documentation (Swagger at /api/docs) ✅
- [ ] User guide (GitBook/Docusaurus)
- [ ] Self-hosting guide
- [x] Contributing guide (CONTRIBUTORS.md) ✅
- [x] Security policy (SECURITY.md) ✅
- [x] Top.gg listing (TOP_GG_LISTING.md) ✅

---

## 🚀 Phase 6: Next Features (Planned)

### 🎯 High Priority (Next Sprint)

#### 📱 Mobile-First Dashboard Improvements ✅
- [x] Responsive sidebar with swipe gestures (useMobileSwipe hook)
- [x] Mobile-optimized settings pages (MobileSettingsCard components)
- [x] Touch-friendly controls (CSS touch targets, mobile nav)
- [x] PWA improvements (service worker, offline page, manifest)
- [x] Mobile bottom navigation bar (MobileNav component)

#### 🔔 Notification System ✅
- [x] Database model (Notification.ts - types, settings, helpers)
- [x] API routes (notifications.ts - CRUD, settings, push subscription)
- [x] Notification store (Zustand - state management)
- [x] NotificationCenter component (dropdown, filters, actions)
- [x] Integration in DashboardLayout header
- [x] Notification settings page (NotificationSettingsPage.tsx)
- [x] Push notifications (Service Worker, VAPID keys, web-push)
- [x] Email notifications (Nodemailer, HTML templates)
- [x] Discord DM notifications (embed messages via bot)
- [x] NotificationService (unified sender for all channels)
- [x] Quiet hours support (timezone-aware)
- [x] usePushNotifications hook (browser API integration)

#### 🎨 Theme System 2.0 ✅
- [x] Custom theme creator (ThemeCreator component)
- [x] Theme sharing/import/export (JSON format)
- [x] Per-guild dashboard themes (guildThemes in store)
- [x] Seasonal themes (Christmas, Halloween, Valentine, etc.)
- [x] 30+ built-in themes (Dark, Light, Colorful, Seasonal)
- [x] Calendar-based seasonal effects (auto-detect season)

### 🎯 Medium Priority

#### 🤖 AI Integration ✅
- [x] AI-powered chatbot (Astra AI with Google Gemini)
- [x] Auto-reply when mentioning Astra or trigger words
- [x] Astra info embed when triggered without question
- [x] Dashboard AI chat with Markdown rendering
- [ ] Smart moderation suggestions
- [ ] Auto-translation for messages
- [ ] Sentiment analysis for moderation

#### 📊 Advanced Server Insights
- [ ] Member retention analytics
- [ ] Peak activity predictions
- [ ] Engagement scoring
- [ ] Custom report builder

#### 🎵 Music System 2.0
- [ ] Spotify playlist sync
- [ ] DJ role with permissions
- [ ] Music quiz game
- [ ] Lyrics display
- [ ] Audio filters (bass boost, nightcore)

### 🎯 Low Priority (Future)

#### 🌐 Multi-Language Support
- [ ] i18n framework (i18next)
- [ ] Dashboard language selector
- [ ] Bot response translations (10+ languages)
- [ ] Community translation portal

#### 🎮 Extended Games
- [ ] Chess with AI opponent
- [ ] Tic-Tac-Toe multiplayer
- [ ] Number guessing game
- [ ] Typing speed test
- [ ] Memory card game

#### 💎 Premium Features (Optional)
- [ ] Premium tiers system
- [ ] Custom bot branding
- [ ] Priority support queue
- [ ] Extended analytics history
- [ ] Custom domain for dashboard

---

## 💡 Feature Ideas Backlog

> Ideas for future consideration - not yet planned

| Feature | Description | Complexity |
|---------|-------------|------------|
| **Server Templates** | Save/share server configurations | High |
| **Scheduled Messages** | Send messages at specific times | Medium |
| **Voice Transcription** | Transcribe voice channel audio | High |
| **Backup System** | Full server backup/restore | High |
| **Role Shop** | Buy roles with economy coins | Low |
| **Social Profiles** | Extended user profiles with bio | Medium |
| **Server Events** | Calendar with RSVP system | Medium |
| **Counting Game** | Counting channel with streaks | Low |
| **Suggestions System** | Feature request voting | Medium |
| **Partnerships** | Partner server directory | Low |

---

## 🚀 Quick Start

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
