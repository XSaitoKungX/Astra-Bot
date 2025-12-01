# 🗳️ Astra Bot - Advanced Voting System

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Configuration](#configuration)
- [API Integration](#api-integration)
- [Commands](#commands)
- [Webhooks](#webhooks)
- [Dashboard](#dashboard)
- [Environment Variables](#environment-variables)

---

## 🎯 Overview

The Astra Bot Voting System is a comprehensive, multi-platform voting solution that rewards users for supporting your bot on various bot lists. It features automatic reward distribution, streak tracking, reminders, and extensive analytics.

### **Key Capabilities:**
- 🎁 **Automatic Rewards** - Coins, XP, and custom roles
- 🔥 **Streak System** - Bonus rewards for consecutive votes
- ⏰ **Smart Reminders** - DM users when they can vote again
- 📊 **Analytics** - Track votes, platforms, and user engagement
- 🏆 **Leaderboards** - Competitive voting rankings
- 🌐 **Multi-Platform** - Support for top.gg, Discord Bot List, and custom lists
- ⚡ **Weekend Bonuses** - 2x rewards on weekends
- 🔔 **Notifications** - Server and DM notifications

---

## ✨ Features

### **1. Multi-Platform Support**
- **Top.gg** (pre-configured)
- **Discord Bot List** (pre-configured)
- **Discords.com** (pre-configured)
- **Custom Platforms** (unlimited)

### **2. Reward System**
- Base rewards (coins + XP)
- Weekend multipliers (2-5x)
- Streak bonuses (up to 100%)
- Custom role rewards
- Temporary or permanent roles

### **3. Notification System**
- Thank you messages
- Server channel announcements
- Role mentions
- Direct messages to voters
- Customizable embed colors and messages

### **4. Reminder System**
- Automatic reminders after vote cooldown
- Configurable reminder time (1-24 hours)
- DM-only or server channel options
- Custom reminder messages

### **5. Analytics & Tracking**
- Total votes per user
- Platform-specific statistics
- Voting streaks
- Last vote timestamps
- Vote history

### **6. Leaderboards**
- Server-wide rankings
- Platform-specific leaderboards
- Auto-updating leaderboard messages
- Configurable top count (5-25 users)

---

## 🚀 Setup

### **Step 1: Database Migration**

The voting system uses MongoDB. The models are automatically registered:

```bash
# No migration needed - Mongoose will create collections automatically
```

### **Step 2: Environment Variables**

Add these to your `.env` file:

```env
# Top.gg Configuration
TOPGG_TOKEN=your_topgg_api_token
TOPGG_WEBHOOK_SECRET=your_webhook_secret_here

# Discord Bot List (optional)
DBL_WEBHOOK_SECRET=your_dbl_webhook_secret

# Discords.com (optional)
DISCORDS_WEBHOOK_SECRET=your_discords_webhook_secret

# Custom Platform Example (optional)
CUSTOMPLATFORM_WEBHOOK_SECRET=your_custom_secret
```

### **Step 3: Initialize Vote Service**

The Vote Service needs to be initialized with your bot client. Add this to your bot startup:

```typescript
// In your bot/index.ts or similar
import { VoteService } from '../shared/services/VoteService.js';

// After client is ready
const voteService = new VoteService(client);

// Store in app locals for API access
app.locals.voteService = voteService;
app.locals.botClient = client;
```

### **Step 4: Register Webhook Routes**

Add webhook routes to your API:

```typescript
// In your api/index.ts
import webhooksRouter from './routes/webhooks/index.js';

app.use('/api/webhooks', webhooksRouter);
```

### **Step 5: Configure Top.gg Webhook**

1. Go to your bot's page on [top.gg](https://top.gg)
2. Navigate to "Webhooks" section
3. Set webhook URL to: `https://yourdomain.com/api/webhooks/vote/topgg`
4. Set authorization header to your `TOPGG_WEBHOOK_SECRET`
5. Test the webhook

---

## ⚙️ Configuration

### **Discord Command: `/settings voting`**

Configure the voting system directly from Discord:

```
/settings voting module enabled:true
/settings voting platforms platform:topgg enabled:true
/settings voting rewards base-coins:100 base-xp:50
/settings voting rewards weekend-coins:200 weekend-xp:100
/settings voting notifications channel:#votes dm:true
/settings voting reminders enabled:true time:12
/settings voting leaderboard enabled:true channel:#vote-leaderboard
```

### **Dashboard Configuration**

Visit your dashboard at `/dashboard/[guildId]/settings/voting` to configure:

- **Platforms**: Enable/disable voting platforms
- **Rewards**: Set coin and XP rewards
- **Notifications**: Configure channels and messages
- **Reminders**: Set reminder preferences
- **Leaderboards**: Configure leaderboard display
- **Analytics**: Enable tracking features

---

## 🔗 API Integration

### **Top.gg API**

#### **Webhook Endpoint**
```
POST /api/webhooks/vote/topgg
Authorization: YOUR_WEBHOOK_SECRET
```

**Request Body:**
```json
{
  "user": "123456789012345678",
  "bot": "987654321098765432",
  "type": "upvote",
  "isWeekend": "false",
  "query": ""
}
```

**Response:**
```json
{
  "success": true,
  "message": "Vote processed successfully"
}
```

#### **Bot Statistics**

Automatically post stats to top.gg:

```typescript
import axios from 'axios';

async function postStats() {
  await axios.post(
    `https://top.gg/api/bots/${client.user.id}/stats`,
    {
      server_count: client.guilds.cache.size,
      shard_count: client.shard?.count || 0,
    },
    {
      headers: {
        Authorization: process.env.TOPGG_TOKEN,
      },
    }
  );
}

// Post every 30 minutes
setInterval(postStats, 30 * 60 * 1000);
```

### **Custom Platform Integration**

Create a webhook for any custom bot list:

```
POST /api/webhooks/vote/custom/[platform-name]
Authorization: YOUR_CUSTOM_SECRET
```

**Request Body:**
```json
{
  "userId": "123456789012345678",
  "username": "Username#1234"
}
```

---

## 💬 Commands

### **`/vote links`**
Display all available voting links with buttons.

**Features:**
- Shows all enabled platforms
- Current reward information
- Weekend bonus indicator
- Vote cooldown information
- Direct voting buttons

### **`/vote stats [user]`**
View voting statistics for yourself or another user.

**Statistics Shown:**
- Total votes across all platforms
- Current voting streak
- Last vote timestamp
- Next available vote time
- Platform-specific breakdown
- Vote availability per platform

### **`/vote leaderboard [platform] [limit]`**
Display the server's voting leaderboard.

**Options:**
- `platform`: Filter by specific platform (default: all)
- `limit`: Number of users to show (5-25, default: 10)

**Features:**
- Medal icons for top 3
- User rankings
- Total vote counts
- Your personal rank (if not in top)

---

## 🔔 Webhooks

### **Supported Platforms**

#### **1. Top.gg**
- **Endpoint:** `/api/webhooks/vote/topgg`
- **Auth Header:** `Authorization: YOUR_SECRET`
- **Weekend Detection:** Automatic
- **Documentation:** [Top.gg API Docs](https://docs.top.gg/api/webhooks/)

#### **2. Discord Bot List**
- **Endpoint:** `/api/webhooks/vote/discordbotlist`
- **Auth Header:** `X-DBL-Signature: HMAC_SHA256`
- **Signature Verification:** Automatic

#### **3. Discords.com**
- **Endpoint:** `/api/webhooks/vote/discords`
- **Auth Header:** `Authorization: YOUR_SECRET`

#### **4. Custom Platform**
- **Endpoint:** `/api/webhooks/vote/custom/:platformName`
- **Auth Header:** `Authorization: YOUR_SECRET`
- **Fully customizable**

### **Testing Webhooks**

Use curl to test your webhook endpoint:

```bash
curl -X POST https://yourdomain.com/api/webhooks/vote/topgg \
  -H "Content-Type: application/json" \
  -H "Authorization: YOUR_WEBHOOK_SECRET" \
  -d '{
    "user": "123456789012345678",
    "bot": "987654321098765432",
    "type": "upvote",
    "isWeekend": "false"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Vote processed successfully"
}
```

---

## 🎨 Dashboard

### **Voting Configuration Page**

**Location:** `/dashboard/[guildId]/settings/voting`

**Sections:**

#### **1. Module Control**
- Enable/disable voting system
- Quick status overview

#### **2. Platform Management**
- Configure Top.gg integration
- Add Discord Bot List
- Add custom platforms
- Set vote cooldowns
- Configure weekend multipliers

#### **3. Reward Configuration**
- Set base coin rewards
- Set base XP rewards
- Configure weekend rewards
- Enable streak bonuses
- Set bonus percentages
- Configure custom role rewards

#### **4. Notification Settings**
- Enable/disable notifications
- Select notification channel
- Configure role mentions
- Enable/disable DMs
- Customize thank you message
- Set embed colors

#### **5. Reminder Configuration**
- Enable/disable reminders
- Set reminder time
- Configure DM-only mode
- Customize reminder message

#### **6. Leaderboard Settings**
- Enable/disable leaderboard
- Select leaderboard channel
- Set update interval
- Configure top count
- Enable auto-posting

#### **7. Analytics**
- View vote statistics
- Platform breakdown
- User engagement metrics
- Streak statistics
- Vote history graphs

---

## 🔧 Environment Variables

### **Required**

```env
# Database
MONGODB_URI=mongodb://localhost:27017/astra-bot

# Discord Bot
DISCORD_TOKEN=your_bot_token_here
DISCORD_CLIENT_ID=your_client_id_here
```

### **Voting System (Optional but Recommended)**

```env
# Top.gg
TOPGG_TOKEN=your_topgg_api_token
TOPGG_WEBHOOK_SECRET=your_webhook_secret_here

# Discord Bot List
DBL_WEBHOOK_SECRET=your_dbl_webhook_secret
DBL_API_TOKEN=your_dbl_api_token

# Discords.com
DISCORDS_WEBHOOK_SECRET=your_discords_webhook_secret
DISCORDS_API_TOKEN=your_discords_api_token

# Bots For Discord
BOTSFORDISCORD_WEBHOOK_SECRET=your_bfd_webhook_secret

# Custom Platforms
CUSTOM1_WEBHOOK_SECRET=your_custom1_secret
CUSTOM2_WEBHOOK_SECRET=your_custom2_secret
```

---

## 📊 Database Schema

### **UserVote Model**

```typescript
{
  userId: string,              // Discord user ID
  username: string,            // Discord username
  platform: string,            // Platform identifier
  votedAt: Date,              // Vote timestamp
  isWeekend: boolean,         // Weekend vote?
  rewardClaimed: boolean,     // Rewards given?
  rewardAmount: number,       // Coins received
  notificationSent: boolean,  // Notification sent?
  reminderSent: boolean,      // Reminder sent?
  metadata: {                 // Platform-specific data
    bot?: string,
    type?: string,
    query?: string
  }
}
```

### **Guild Config (Voting Section)**

```typescript
voting: {
  enabled: boolean,
  platforms: {
    topgg: {
      enabled: boolean,
      name: string,
      url: string,
      apiToken?: string,
      webhookAuth?: string,
      voteCooldown: number,
      weekendMultiplier: number
    },
    // ... more platforms
  },
  notifications: { ... },
  reminders: { ... },
  rewards: { ... },
  leaderboard: { ... },
  analytics: { ... }
}
```

---

## 🎁 Reward System Details

### **Base Rewards**
```
Default: 100 coins + 50 XP
Configurable per guild
```

### **Weekend Bonus**
```
Default: 2x multiplier (200 coins + 100 XP)
Configurable: 1x to 5x
Active on Saturday & Sunday (UTC)
```

### **Streak Bonus**
```
Formula: base_reward * (1 + (streak * bonus_per_day / 100))
Default: 10% per day, max 100%
Example: 7-day streak = 70% bonus
Max streak: Unlimited
```

### **Custom Roles**
```
- Award temporary or permanent roles
- Configurable duration
- Automatic role removal after expiry
```

---

## 📈 Analytics & Metrics

### **Tracked Metrics**
- Total votes per user
- Votes per platform
- Voting streaks
- Weekend vs weekday votes
- Hourly vote distribution
- Most active voters
- Platform popularity

### **Available Queries**
```typescript
// Get user vote count
UserVote.getVoteCount(userId, platform?)

// Get user streak
UserVote.getUserStreak(userId, platform?)

// Check if user can vote
UserVote.hasVotedRecently(userId, platform?, hours)

// Get last vote
UserVote.getLastVote(userId, platform?)
```

---

## 🔒 Security

### **Webhook Security**
- HMAC SHA256 signature verification
- Authorization header validation
- IP whitelisting (optional)
- Rate limiting
- Request validation

### **Best Practices**
1. **Use strong webhook secrets** (32+ random characters)
2. **Enable HTTPS** for all webhook endpoints
3. **Rotate secrets** periodically
4. **Monitor webhook logs** for suspicious activity
5. **Implement rate limiting** to prevent abuse

---

## 🐛 Troubleshooting

### **Webhooks not working?**

1. **Check webhook URL**
   ```bash
   curl -I https://yourdomain.com/api/webhooks/vote/topgg
   # Should return 200 or 405 (POST required)
   ```

2. **Verify authorization header**
   - Matches env variable
   - No extra spaces
   - Case-sensitive

3. **Check logs**
   ```bash
   # Look for webhook errors
   grep "webhook" logs/combined.log
   ```

4. **Test manually**
   ```bash
   curl -X POST YOUR_WEBHOOK_URL \
     -H "Authorization: YOUR_SECRET" \
     -H "Content-Type: application/json" \
     -d '{"user":"YOUR_USER_ID"}'
   ```

### **Rewards not given?**

1. **Check module enabled**: `/settings modules view`
2. **Verify economy module**: Must be enabled
3. **Check logs**: Look for error messages
4. **Verify database**: Check UserEconomy collection

### **Reminders not sending?**

1. **Check DM permissions**: Bot must be able to DM users
2. **Verify reminder settings**: Must be enabled
3. **Check reminder time**: 1-24 hours
4. **User blocked bot**: Can't send DMs

---

## 🚀 Advanced Configuration

### **Custom Reward Logic**

Extend the VoteService class:

```typescript
class CustomVoteService extends VoteService {
  async calculateRewards(userId, platform, isWeekend, guildId) {
    const base = await super.calculateRewards(userId, platform, isWeekend, guildId);
    
    // Add custom logic
    if (userId === 'VIP_USER_ID') {
      base.totalCoins *= 2;
    }
    
    return base;
  }
}
```

### **Custom Notifications**

Override notification method:

```typescript
class CustomVoteService extends VoteService {
  async sendVoteNotifications(userId, platform, rewards, guildId) {
    await super.sendVoteNotifications(userId, platform, rewards, guildId);
    
    // Custom notification logic
    // e.g., post to Twitter, Discord webhook, etc.
  }
}
```

---

## 📝 API Reference

### **Vote Service Methods**

```typescript
// Process a vote
await voteService.processVote(voteData);

// Get user stats
await voteService.getUserVoteStats(userId, platform?);

// Get vote links for guild
await voteService.getVoteLinks(guildId?);

// Schedule reminder
await voteService.scheduleReminder(userId, platform, guildId?);

// Clean up timers
voteService.destroy();
```

---

## 📦 Complete Setup Checklist

- [ ] Add environment variables to `.env`
- [ ] Initialize VoteService in bot startup
- [ ] Register webhook routes in API
- [ ] Configure top.gg webhook URL
- [ ] Test webhook with curl
- [ ] Enable voting module in Discord (`/settings`)
- [ ] Configure rewards
- [ ] Set up notification channel
- [ ] Enable reminders
- [ ] Test with real vote
- [ ] Monitor logs for errors
- [ ] Set up analytics tracking
- [ ] Configure leaderboard (optional)
- [ ] Add custom platforms (optional)

---

## 🎉 Success!

Your voting system is now ready! Users can:
- ✅ Vote for your bot on multiple platforms
- ✅ Receive instant rewards
- ✅ Build voting streaks
- ✅ Get automatic reminders
- ✅ Compete on leaderboards
- ✅ Track their statistics

**Thank you for using Astra Bot's Voting System!** 💜

---

## 📧 Support

Need help? Join our support server or open an issue on GitHub!

- **Discord**: [Support Server](https://discord.gg/KD84DmNA89)
- **GitHub**: [Astra-Bot Repository](https://github.com/XSaitoKungX/Astra-Bot)
- **Documentation**: [Full Docs](https://docs.novaplex.xyz)

---

**Last Updated:** December 2024  
**Version:** 2.13.1  
**Author:** Astra Team
