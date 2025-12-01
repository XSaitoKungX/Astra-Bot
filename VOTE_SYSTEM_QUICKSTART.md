# 🚀 Voting System - Quick Start Guide

## ⚡ 5-Minute Setup

### **Step 1: Environment Variables** (1 min)

Add to your `.env`:
```env
TOPGG_TOKEN=your_topgg_api_token
TOPGG_WEBHOOK_SECRET=your_webhook_secret
```

### **Step 2: Initialize Service** (2 min)

In your `src/bot/index.ts` or main bot file, add:

```typescript
import { initializeVotingSystem, cleanupVotingSystem } from './integrations/voting-setup.js';

// After client.login() and client is ready
client.once('ready', async () => {
  // ... other initialization code
  
  // Initialize voting system
  const voteService = await initializeVotingSystem(client);
  
  // Make available globally (for API)
  global.voteService = voteService;
  
  console.log('✅ Voting System Ready!');
});

// Cleanup on shutdown
process.on('SIGINT', () => {
  cleanupVotingSystem();
  process.exit(0);
});
```

### **Step 3: Register API Routes** (1 min)

In your `src/api/index.ts`:

```typescript
import webhooksRouter from './routes/webhooks/index.js';

// Add this line with your other routes
app.use('/api/webhooks', webhooksRouter);

// Make bot client and vote service available
app.locals.botClient = client;
app.locals.voteService = global.voteService;
```

### **Step 4: Configure Top.gg** (1 min)

1. Go to https://top.gg/bot/YOUR_BOT_ID/webhooks
2. Set **Webhook URL**: `https://yourdomain.com/api/webhooks/vote/topgg`
3. Set **Authorization**: Your `TOPGG_WEBHOOK_SECRET`
4. Click **Test Webhook** - should return success!

### **Step 5: Test It!** (30 sec)

```bash
# Vote on top.gg
# Check your bot receives the webhook
# User should get rewards and notification!
```

---

## 🎯 Essential Commands

```bash
# Configure voting
/settings modules toggle module:voting

# View vote links
/vote links

# Check your stats
/vote stats

# View leaderboard
/vote leaderboard
```

---

## 🔧 Basic Configuration

### **Enable Module**
```
/settings modules toggle module:voting
```

### **Configure Rewards**
```typescript
// In dashboard or database:
voting.rewards.base.coins = 100
voting.rewards.base.xp = 50
voting.rewards.weekend.coins = 200
voting.rewards.weekend.xp = 100
```

### **Enable Notifications**
```typescript
voting.notifications.enabled = true
voting.notifications.channelId = "your_channel_id"
voting.notifications.dmUser = true
```

### **Enable Reminders**
```typescript
voting.reminders.enabled = true
voting.reminders.reminderTime = 12 // hours
```

---

## 📋 File Checklist

Created files you need to integrate:

### **Core Files** ✅
- [x] `src/database/models/UserVote.ts` - Vote tracking
- [x] `src/shared/services/VoteService.ts` - Main logic
- [x] `src/bot/commands/utility/vote.ts` - Discord commands
- [x] `src/api/routes/webhooks/vote.ts` - Webhook handlers
- [x] `src/api/routes/webhooks/index.ts` - Route exports
- [x] `src/bot/integrations/voting-setup.ts` - Easy setup

### **Configuration** ✅
- [x] `src/database/models/GuildConfig.ts` - Updated with voting config
- [x] `src/shared/types/index.ts` - Type definitions
- [x] `src/database/models/index.ts` - Model exports

### **Documentation** ✅
- [x] `VOTE_SYSTEM_GUIDE.md` - Complete guide
- [x] `VOTE_SYSTEM_QUICKSTART.md` - This file
- [x] `.env.example.voting` - Environment template

---

## 🧪 Testing

### **Test Webhook Locally**

```bash
curl -X POST http://localhost:3000/api/webhooks/vote/topgg \
  -H "Content-Type: application/json" \
  -H "Authorization: YOUR_WEBHOOK_SECRET" \
  -d '{
    "user": "YOUR_DISCORD_ID",
    "bot": "YOUR_BOT_ID",
    "type": "upvote",
    "isWeekend": "false"
  }'
```

Expected: User receives rewards and notification!

### **Test Commands**

```
/vote links      → Should show voting buttons
/vote stats      → Should show your stats
/vote leaderboard → Should show top voters
```

---

## ⚠️ Troubleshooting

### **Webhook returns 500?**
- Check `app.locals.voteService` is set
- Check `app.locals.botClient` is set
- Check logs for errors

### **No rewards given?**
- Enable economy module: `/settings modules toggle module:economy`
- Check voting module enabled: `/settings modules toggle module:voting`
- Verify database connection

### **No notifications?**
- Check DM permissions
- Verify notification channel exists
- Check bot can send messages

### **Commands not showing?**
```bash
npm run commands:deploy
```

---

## 🎉 You're Done!

Your voting system is now:
- ✅ Receiving votes from top.gg
- ✅ Giving rewards automatically
- ✅ Tracking streaks
- ✅ Sending reminders
- ✅ Showing leaderboards

## 📚 Next Steps

1. **Add more platforms**: Check `VOTE_SYSTEM_GUIDE.md`
2. **Customize rewards**: Use dashboard or `/settings`
3. **Enable leaderboard**: Set up auto-posting
4. **Monitor analytics**: Track vote patterns
5. **Weekend bonus**: Automatically 2x on Sat/Sun!

---

## 🆘 Need Help?

- **Full Guide**: Read `VOTE_SYSTEM_GUIDE.md`
- **Discord**: Join support server
- **GitHub**: Open an issue

---

**Estimated Setup Time**: 5-10 minutes  
**Difficulty**: Easy  
**Prerequisites**: Running Astra Bot, Top.gg listing

**Happy Voting!** 🗳️💜
