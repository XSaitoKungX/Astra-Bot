-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "globalName" TEXT,
    "discriminator" TEXT NOT NULL DEFAULT '0',
    "avatar" TEXT,
    "banner" TEXT,
    "accentColor" INTEGER,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "tokenExpiresAt" TIMESTAMP(3),
    "preferences" JSONB NOT NULL DEFAULT '{}',
    "premiumActive" BOOLEAN NOT NULL DEFAULT false,
    "premiumTier" INTEGER NOT NULL DEFAULT 0,
    "premiumSince" TIMESTAMP(3),
    "premiumExpiresAt" TIMESTAMP(3),
    "isBotOwner" BOOLEAN NOT NULL DEFAULT false,
    "isStaff" BOOLEAN NOT NULL DEFAULT false,
    "isBetaTester" BOOLEAN NOT NULL DEFAULT false,
    "isBanned" BOOLEAN NOT NULL DEFAULT false,
    "banReason" TEXT,
    "totalMessages" INTEGER NOT NULL DEFAULT 0,
    "totalCommands" INTEGER NOT NULL DEFAULT 0,
    "firstSeen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guild" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "ownerId" TEXT NOT NULL,
    "memberCount" INTEGER NOT NULL DEFAULT 0,
    "moderationConfig" JSONB NOT NULL DEFAULT '{}',
    "levelingConfig" JSONB NOT NULL DEFAULT '{}',
    "economyConfig" JSONB NOT NULL DEFAULT '{}',
    "welcomeConfig" JSONB NOT NULL DEFAULT '{}',
    "loggingConfig" JSONB NOT NULL DEFAULT '{}',
    "ticketConfig" JSONB NOT NULL DEFAULT '{}',
    "automodConfig" JSONB NOT NULL DEFAULT '{}',
    "autoRolesConfig" JSONB NOT NULL DEFAULT '{}',
    "musicConfig" JSONB NOT NULL DEFAULT '{}',
    "votingConfig" JSONB NOT NULL DEFAULT '{}',
    "verifyConfig" JSONB NOT NULL DEFAULT '{}',
    "tempVoiceConfig" JSONB NOT NULL DEFAULT '{}',
    "starboardConfig" JSONB NOT NULL DEFAULT '{}',
    "birthdayConfig" JSONB NOT NULL DEFAULT '{}',
    "aiConfig" JSONB NOT NULL DEFAULT '{}',
    "aiModerationConfig" JSONB NOT NULL DEFAULT '{}',
    "premium" BOOLEAN NOT NULL DEFAULT false,
    "premiumUntil" TIMESTAMP(3),
    "botLeftAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guild_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLevel" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "userId" TEXT,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 0,
    "totalXp" INTEGER NOT NULL DEFAULT 0,
    "messages" INTEGER NOT NULL DEFAULT 0,
    "voiceMinutes" INTEGER NOT NULL DEFAULT 0,
    "weeklyXp" INTEGER NOT NULL DEFAULT 0,
    "monthlyXp" INTEGER NOT NULL DEFAULT 0,
    "lastWeeklyReset" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastMonthlyReset" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dailyStreak" INTEGER NOT NULL DEFAULT 0,
    "longestStreak" INTEGER NOT NULL DEFAULT 0,
    "lastDailyActivity" TIMESTAMP(3),
    "lastXpGain" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastVoiceXpGain" TIMESTAMP(3),
    "cardConfig" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEconomy" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "userId" TEXT,
    "balance" BIGINT NOT NULL DEFAULT 0,
    "bank" BIGINT NOT NULL DEFAULT 0,
    "bankLimit" BIGINT NOT NULL DEFAULT 100000000000,
    "totalEarned" BIGINT NOT NULL DEFAULT 0,
    "totalSpent" BIGINT NOT NULL DEFAULT 0,
    "totalWon" BIGINT NOT NULL DEFAULT 0,
    "totalLost" BIGINT NOT NULL DEFAULT 0,
    "totalGambled" BIGINT NOT NULL DEFAULT 0,
    "inventory" JSONB NOT NULL DEFAULT '[]',
    "transactions" JSONB NOT NULL DEFAULT '[]',
    "activeBoosts" JSONB NOT NULL DEFAULT '[]',
    "dailyStreak" INTEGER NOT NULL DEFAULT 0,
    "longestDailyStreak" INTEGER NOT NULL DEFAULT 0,
    "lastDaily" TIMESTAMP(3),
    "lastWork" TIMESTAMP(3),
    "lastRob" TIMESTAMP(3),
    "lastGamble" TIMESTAMP(3),
    "lastCrime" TIMESTAMP(3),
    "gamblingStats" JSONB NOT NULL DEFAULT '{"totalGames":0,"wins":0,"losses":0,"biggestWin":0,"biggestLoss":0,"currentWinStreak":0,"longestWinStreak":0}',
    "inJail" BOOLEAN NOT NULL DEFAULT false,
    "jailExpiresAt" TIMESTAMP(3),
    "timesWorked" INTEGER NOT NULL DEFAULT 0,
    "timesRobbed" INTEGER NOT NULL DEFAULT 0,
    "robSuccesses" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserEconomy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserVote" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "username" TEXT,
    "userId" TEXT,
    "platform" TEXT NOT NULL,
    "isWeekend" BOOLEAN NOT NULL DEFAULT false,
    "multiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "rewardCoins" INTEGER NOT NULL DEFAULT 0,
    "rewardXp" INTEGER NOT NULL DEFAULT 0,
    "rewardClaimed" BOOLEAN NOT NULL DEFAULT false,
    "rewardAmount" INTEGER NOT NULL DEFAULT 0,
    "xpAmount" INTEGER NOT NULL DEFAULT 0,
    "streak" INTEGER NOT NULL DEFAULT 1,
    "votedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reminderSent" BOOLEAN NOT NULL DEFAULT false,
    "reminderScheduledFor" TIMESTAMP(3),
    "metadata" JSONB,

    CONSTRAINT "UserVote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModerationLog" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "caseId" INTEGER NOT NULL,
    "targetId" TEXT NOT NULL,
    "targetTag" TEXT,
    "moderatorId" TEXT NOT NULL,
    "moderatorTag" TEXT,
    "action" TEXT NOT NULL,
    "reason" TEXT,
    "duration" INTEGER,
    "expiresAt" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModerationLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warning" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "moderatorId" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "severity" INTEGER NOT NULL DEFAULT 1,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Warning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "ticketNumber" INTEGER NOT NULL DEFAULT 1,
    "panelId" TEXT,
    "panelName" TEXT,
    "subject" TEXT,
    "status" TEXT NOT NULL DEFAULT 'open',
    "priority" TEXT NOT NULL DEFAULT 'normal',
    "claimedBy" TEXT,
    "closedBy" TEXT,
    "closedAt" TIMESTAMP(3),
    "closeReason" TEXT,
    "participants" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "messageCount" INTEGER NOT NULL DEFAULT 0,
    "transcript" JSONB,
    "transcriptUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Giveaway" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "hostId" TEXT NOT NULL,
    "prize" TEXT NOT NULL,
    "description" TEXT,
    "winnerCount" INTEGER NOT NULL DEFAULT 1,
    "requirements" JSONB NOT NULL DEFAULT '{}',
    "bonusEntries" JSONB NOT NULL DEFAULT '{}',
    "participants" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "winnerIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "endsAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3),
    "ended" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Giveaway_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomCommand" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "aliases" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "response" JSONB NOT NULL,
    "allowedRoles" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "allowedChannels" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "cooldown" INTEGER NOT NULL DEFAULT 0,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "uses" INTEGER NOT NULL DEFAULT 0,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomCommand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactionRole" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'normal',
    "requiredRole" TEXT,
    "blacklistRoles" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReactionRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SelfRole" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "config" JSONB NOT NULL,
    "messageId" TEXT,
    "channelId" TEXT,
    "minRoles" INTEGER NOT NULL DEFAULT 0,
    "maxRoles" INTEGER NOT NULL DEFAULT 25,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SelfRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StarboardPost" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "originalMessageId" TEXT NOT NULL,
    "originalChannelId" TEXT NOT NULL,
    "starboardMessageId" TEXT NOT NULL,
    "starboardChannelId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "content" TEXT,
    "attachments" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "stars" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StarboardPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Birthday" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "userId" TEXT,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER,
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "lastAnnounced" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Birthday_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reminder" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "userId" TEXT,
    "channelId" TEXT,
    "guildId" TEXT,
    "message" TEXT NOT NULL,
    "remindAt" TIMESTAMP(3) NOT NULL,
    "recurring" BOOLEAN NOT NULL DEFAULT false,
    "interval" INTEGER,
    "sent" BOOLEAN NOT NULL DEFAULT false,
    "sentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBadge" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "userId" TEXT,
    "badgeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "rarity" TEXT NOT NULL DEFAULT 'common',
    "earnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserBadge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AFK" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "message" TEXT NOT NULL DEFAULT 'AFK',
    "mentions" JSONB NOT NULL DEFAULT '[]',
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AFK_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AIConversation" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "userId" TEXT,
    "guildId" TEXT,
    "channelId" TEXT,
    "title" TEXT NOT NULL DEFAULT 'New Conversation',
    "contextType" TEXT NOT NULL DEFAULT 'dashboard',
    "aiModel" TEXT NOT NULL DEFAULT 'llama-3.3-70b-versatile',
    "aiProvider" TEXT NOT NULL DEFAULT 'groq',
    "messages" JSONB NOT NULL DEFAULT '[]',
    "metadata" JSONB,
    "totalTokens" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AIConversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuildAnalytics" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "messagesTotal" INTEGER NOT NULL DEFAULT 0,
    "commandsTotal" INTEGER NOT NULL DEFAULT 0,
    "voiceMinutesTotal" INTEGER NOT NULL DEFAULT 0,
    "activityHeatmap" JSONB NOT NULL DEFAULT '[]',
    "growthSnapshots" JSONB NOT NULL DEFAULT '[]',
    "channelStats" JSONB NOT NULL DEFAULT '{}',
    "commandStats" JSONB NOT NULL DEFAULT '{}',
    "milestones" JSONB NOT NULL DEFAULT '[]',
    "settings" JSONB NOT NULL DEFAULT '{}',
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GuildAnalytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TempVoiceChannel" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "creatorChannelId" TEXT NOT NULL,
    "settings" JSONB NOT NULL DEFAULT '{}',
    "banned" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "permitted" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TempVoiceChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialFeed" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "accountUsername" TEXT NOT NULL,
    "accountAvatar" TEXT,
    "channelId" TEXT NOT NULL,
    "roleToMention" TEXT,
    "notifyLive" BOOLEAN NOT NULL DEFAULT true,
    "notifyVideo" BOOLEAN NOT NULL DEFAULT true,
    "notifyPost" BOOLEAN NOT NULL DEFAULT true,
    "notifyStory" BOOLEAN NOT NULL DEFAULT false,
    "notifyClip" BOOLEAN NOT NULL DEFAULT false,
    "messageTemplate" TEXT,
    "embedColor" TEXT NOT NULL DEFAULT '#5865F2',
    "lastPostId" TEXT,
    "lastLiveId" TEXT,
    "lastChecked" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastNotified" TIMESTAMP(3),
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "errorCount" INTEGER NOT NULL DEFAULT 0,
    "lastError" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SocialFeed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialFeedLog" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "feedId" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "contentType" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "contentUrl" TEXT NOT NULL,
    "title" TEXT,
    "thumbnail" TEXT,
    "messageId" TEXT,
    "channelId" TEXT NOT NULL,
    "metrics" JSONB NOT NULL DEFAULT '{}',
    "notifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SocialFeedLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiKey" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "discordId" TEXT,
    "guildId" TEXT,
    "scopes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "permissions" JSONB NOT NULL DEFAULT '{}',
    "rateLimit" INTEGER NOT NULL DEFAULT 100,
    "expiresAt" TIMESTAMP(3),
    "lastUsed" TIMESTAMP(3),
    "uses" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "data" JSONB NOT NULL DEFAULT '{}',
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedEmbed" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "embed" JSONB NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavedEmbed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalyticsEvent" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "data" JSONB NOT NULL DEFAULT '{}',
    "channelId" TEXT,
    "userId" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalyticsEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "guildId" TEXT,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "data" JSONB NOT NULL DEFAULT '{}',
    "read" BOOLEAN NOT NULL DEFAULT false,
    "readAt" TIMESTAMP(3),
    "dismissed" BOOLEAN NOT NULL DEFAULT false,
    "dismissedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationSettings" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "settings" JSONB NOT NULL DEFAULT '{}',
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "dmEnabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NotificationSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "username" TEXT,
    "avatar" TEXT,
    "rating" INTEGER NOT NULL,
    "content" TEXT,
    "comment" TEXT,
    "guildName" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "helpful" INTEGER NOT NULL DEFAULT 0,
    "reported" BOOLEAN NOT NULL DEFAULT false,
    "approved" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TempVoiceConfig" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "creatorChannels" JSONB NOT NULL DEFAULT '[]',
    "defaults" JSONB NOT NULL DEFAULT '{}',
    "maxChannels" INTEGER NOT NULL DEFAULT 50,
    "interface" JSONB NOT NULL DEFAULT '{}',
    "waitingRoom" JSONB NOT NULL DEFAULT '{}',
    "activity" JSONB NOT NULL DEFAULT '{}',
    "blacklist" JSONB NOT NULL DEFAULT '{}',
    "whitelist" JSONB NOT NULL DEFAULT '{}',
    "logging" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TempVoiceConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TempVoiceUserStats" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "channelsCreated" INTEGER NOT NULL DEFAULT 0,
    "totalTimeOwner" INTEGER NOT NULL DEFAULT 0,
    "totalTimeInChannels" INTEGER NOT NULL DEFAULT 0,
    "trustScore" INTEGER NOT NULL DEFAULT 50,
    "templates" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TempVoiceUserStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TempVoiceTemplate" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "settings" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TempVoiceTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationConfig" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "verifiedRole" TEXT,
    "unverifiedRole" TEXT,
    "channelId" TEXT,
    "logChannelId" TEXT,
    "type" TEXT NOT NULL DEFAULT 'button',
    "message" TEXT,
    "config" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModerationSuggestion" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "toxicityScore" DOUBLE PRECISION NOT NULL,
    "categories" JSONB NOT NULL DEFAULT '[]',
    "suggestedAction" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "severity" TEXT NOT NULL,
    "explanation" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "reviewedBy" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "reviewNote" TEXT,
    "actionTaken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModerationSuggestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SentimentData" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "sentiment" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "emotions" JSONB NOT NULL DEFAULT '{}',
    "toxicity" DOUBLE PRECISION,
    "confidence" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SentimentData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Version" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "changelog" TEXT,
    "changes" JSONB NOT NULL DEFAULT '[]',
    "announced" BOOLEAN NOT NULL DEFAULT false,
    "announcedAt" TIMESTAMP(3),
    "announcedGuilds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "failedGuilds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "migrated" BOOLEAN NOT NULL DEFAULT false,
    "migratedAt" TIMESTAMP(3),
    "releaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Version_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Webhook" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "secret" TEXT NOT NULL,
    "odiscordId" TEXT,
    "guildId" TEXT,
    "events" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "filters" JSONB NOT NULL DEFAULT '{}',
    "config" JSONB NOT NULL DEFAULT '{}',
    "status" TEXT NOT NULL DEFAULT 'active',
    "stats" JSONB NOT NULL DEFAULT '{}',
    "recentDeliveries" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Webhook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MusicHistory" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "thumbnail" TEXT,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "source" TEXT NOT NULL DEFAULT 'youtube',
    "playedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MusicHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MusicPlaylist" (
    "id" TEXT NOT NULL,
    "guildId" TEXT,
    "discordId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "tracks" JSONB NOT NULL DEFAULT '[]',
    "playCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MusicPlaylist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MusicFavorite" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "thumbnail" TEXT,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "source" TEXT NOT NULL DEFAULT 'youtube',
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MusicFavorite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_discordId_key" ON "User"("discordId");

-- CreateIndex
CREATE INDEX "User_discordId_idx" ON "User"("discordId");

-- CreateIndex
CREATE INDEX "User_lastSeen_idx" ON "User"("lastSeen");

-- CreateIndex
CREATE INDEX "User_premiumActive_idx" ON "User"("premiumActive");

-- CreateIndex
CREATE UNIQUE INDEX "Guild_guildId_key" ON "Guild"("guildId");

-- CreateIndex
CREATE INDEX "Guild_guildId_idx" ON "Guild"("guildId");

-- CreateIndex
CREATE INDEX "UserLevel_guildId_totalXp_idx" ON "UserLevel"("guildId", "totalXp" DESC);

-- CreateIndex
CREATE INDEX "UserLevel_guildId_level_idx" ON "UserLevel"("guildId", "level" DESC);

-- CreateIndex
CREATE INDEX "UserLevel_guildId_weeklyXp_idx" ON "UserLevel"("guildId", "weeklyXp" DESC);

-- CreateIndex
CREATE INDEX "UserLevel_guildId_monthlyXp_idx" ON "UserLevel"("guildId", "monthlyXp" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "UserLevel_guildId_discordId_key" ON "UserLevel"("guildId", "discordId");

-- CreateIndex
CREATE INDEX "UserEconomy_guildId_balance_idx" ON "UserEconomy"("guildId", "balance" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "UserEconomy_guildId_discordId_key" ON "UserEconomy"("guildId", "discordId");

-- CreateIndex
CREATE INDEX "UserVote_discordId_platform_idx" ON "UserVote"("discordId", "platform");

-- CreateIndex
CREATE INDEX "UserVote_discordId_idx" ON "UserVote"("discordId");

-- CreateIndex
CREATE INDEX "UserVote_votedAt_idx" ON "UserVote"("votedAt");

-- CreateIndex
CREATE INDEX "UserVote_reminderSent_reminderScheduledFor_idx" ON "UserVote"("reminderSent", "reminderScheduledFor");

-- CreateIndex
CREATE INDEX "UserVote_discordId_platform_votedAt_idx" ON "UserVote"("discordId", "platform", "votedAt");

-- CreateIndex
CREATE INDEX "ModerationLog_guildId_targetId_idx" ON "ModerationLog"("guildId", "targetId");

-- CreateIndex
CREATE INDEX "ModerationLog_guildId_moderatorId_idx" ON "ModerationLog"("guildId", "moderatorId");

-- CreateIndex
CREATE INDEX "ModerationLog_guildId_action_idx" ON "ModerationLog"("guildId", "action");

-- CreateIndex
CREATE INDEX "ModerationLog_guildId_createdAt_idx" ON "ModerationLog"("guildId", "createdAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "ModerationLog_guildId_caseId_key" ON "ModerationLog"("guildId", "caseId");

-- CreateIndex
CREATE INDEX "Warning_guildId_discordId_idx" ON "Warning"("guildId", "discordId");

-- CreateIndex
CREATE INDEX "Warning_guildId_active_idx" ON "Warning"("guildId", "active");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_channelId_key" ON "Ticket"("channelId");

-- CreateIndex
CREATE INDEX "Ticket_guildId_status_idx" ON "Ticket"("guildId", "status");

-- CreateIndex
CREATE INDEX "Ticket_guildId_discordId_idx" ON "Ticket"("guildId", "discordId");

-- CreateIndex
CREATE INDEX "Ticket_guildId_createdAt_idx" ON "Ticket"("guildId", "createdAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "Giveaway_messageId_key" ON "Giveaway"("messageId");

-- CreateIndex
CREATE INDEX "Giveaway_guildId_idx" ON "Giveaway"("guildId");

-- CreateIndex
CREATE INDEX "Giveaway_ended_endsAt_idx" ON "Giveaway"("ended", "endsAt");

-- CreateIndex
CREATE INDEX "Giveaway_messageId_idx" ON "Giveaway"("messageId");

-- CreateIndex
CREATE INDEX "CustomCommand_guildId_idx" ON "CustomCommand"("guildId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomCommand_guildId_name_key" ON "CustomCommand"("guildId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "ReactionRole_messageId_key" ON "ReactionRole"("messageId");

-- CreateIndex
CREATE INDEX "ReactionRole_guildId_idx" ON "ReactionRole"("guildId");

-- CreateIndex
CREATE INDEX "ReactionRole_messageId_idx" ON "ReactionRole"("messageId");

-- CreateIndex
CREATE INDEX "SelfRole_guildId_idx" ON "SelfRole"("guildId");

-- CreateIndex
CREATE UNIQUE INDEX "SelfRole_guildId_name_key" ON "SelfRole"("guildId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "StarboardPost_originalMessageId_key" ON "StarboardPost"("originalMessageId");

-- CreateIndex
CREATE UNIQUE INDEX "StarboardPost_starboardMessageId_key" ON "StarboardPost"("starboardMessageId");

-- CreateIndex
CREATE INDEX "StarboardPost_guildId_idx" ON "StarboardPost"("guildId");

-- CreateIndex
CREATE INDEX "StarboardPost_guildId_stars_idx" ON "StarboardPost"("guildId", "stars" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "Birthday_discordId_key" ON "Birthday"("discordId");

-- CreateIndex
CREATE UNIQUE INDEX "Birthday_userId_key" ON "Birthday"("userId");

-- CreateIndex
CREATE INDEX "Birthday_month_day_idx" ON "Birthday"("month", "day");

-- CreateIndex
CREATE INDEX "Reminder_remindAt_sent_idx" ON "Reminder"("remindAt", "sent");

-- CreateIndex
CREATE INDEX "Reminder_discordId_idx" ON "Reminder"("discordId");

-- CreateIndex
CREATE INDEX "UserBadge_discordId_idx" ON "UserBadge"("discordId");

-- CreateIndex
CREATE UNIQUE INDEX "UserBadge_discordId_badgeId_key" ON "UserBadge"("discordId", "badgeId");

-- CreateIndex
CREATE INDEX "AFK_guildId_idx" ON "AFK"("guildId");

-- CreateIndex
CREATE UNIQUE INDEX "AFK_guildId_discordId_key" ON "AFK"("guildId", "discordId");

-- CreateIndex
CREATE INDEX "AIConversation_discordId_idx" ON "AIConversation"("discordId");

-- CreateIndex
CREATE INDEX "AIConversation_guildId_channelId_idx" ON "AIConversation"("guildId", "channelId");

-- CreateIndex
CREATE INDEX "AIConversation_userId_contextType_idx" ON "AIConversation"("userId", "contextType");

-- CreateIndex
CREATE UNIQUE INDEX "GuildAnalytics_guildId_key" ON "GuildAnalytics"("guildId");

-- CreateIndex
CREATE INDEX "GuildAnalytics_guildId_idx" ON "GuildAnalytics"("guildId");

-- CreateIndex
CREATE UNIQUE INDEX "TempVoiceChannel_channelId_key" ON "TempVoiceChannel"("channelId");

-- CreateIndex
CREATE INDEX "TempVoiceChannel_guildId_idx" ON "TempVoiceChannel"("guildId");

-- CreateIndex
CREATE INDEX "TempVoiceChannel_ownerId_idx" ON "TempVoiceChannel"("ownerId");

-- CreateIndex
CREATE INDEX "TempVoiceChannel_channelId_idx" ON "TempVoiceChannel"("channelId");

-- CreateIndex
CREATE INDEX "SocialFeed_guildId_idx" ON "SocialFeed"("guildId");

-- CreateIndex
CREATE INDEX "SocialFeed_platform_idx" ON "SocialFeed"("platform");

-- CreateIndex
CREATE INDEX "SocialFeed_enabled_lastChecked_idx" ON "SocialFeed"("enabled", "lastChecked");

-- CreateIndex
CREATE UNIQUE INDEX "SocialFeed_guildId_platform_accountId_key" ON "SocialFeed"("guildId", "platform", "accountId");

-- CreateIndex
CREATE INDEX "SocialFeedLog_guildId_idx" ON "SocialFeedLog"("guildId");

-- CreateIndex
CREATE INDEX "SocialFeedLog_feedId_idx" ON "SocialFeedLog"("feedId");

-- CreateIndex
CREATE INDEX "SocialFeedLog_notifiedAt_idx" ON "SocialFeedLog"("notifiedAt");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_key_key" ON "ApiKey"("key");

-- CreateIndex
CREATE INDEX "ApiKey_key_idx" ON "ApiKey"("key");

-- CreateIndex
CREATE INDEX "ApiKey_discordId_idx" ON "ApiKey"("discordId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionId_key" ON "Session"("sessionId");

-- CreateIndex
CREATE INDEX "Session_sessionId_idx" ON "Session"("sessionId");

-- CreateIndex
CREATE INDEX "Session_discordId_idx" ON "Session"("discordId");

-- CreateIndex
CREATE INDEX "Session_expiresAt_idx" ON "Session"("expiresAt");

-- CreateIndex
CREATE INDEX "SavedEmbed_guildId_idx" ON "SavedEmbed"("guildId");

-- CreateIndex
CREATE UNIQUE INDEX "SavedEmbed_guildId_name_key" ON "SavedEmbed"("guildId", "name");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_guildId_eventType_idx" ON "AnalyticsEvent"("guildId", "eventType");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_guildId_timestamp_idx" ON "AnalyticsEvent"("guildId", "timestamp");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_eventType_timestamp_idx" ON "AnalyticsEvent"("eventType", "timestamp");

-- CreateIndex
CREATE INDEX "Notification_discordId_read_idx" ON "Notification"("discordId", "read");

-- CreateIndex
CREATE INDEX "Notification_discordId_type_idx" ON "Notification"("discordId", "type");

-- CreateIndex
CREATE INDEX "Notification_discordId_dismissed_idx" ON "Notification"("discordId", "dismissed");

-- CreateIndex
CREATE UNIQUE INDEX "NotificationSettings_discordId_key" ON "NotificationSettings"("discordId");

-- CreateIndex
CREATE INDEX "Review_discordId_idx" ON "Review"("discordId");

-- CreateIndex
CREATE INDEX "Review_rating_idx" ON "Review"("rating");

-- CreateIndex
CREATE INDEX "Review_status_isPublic_idx" ON "Review"("status", "isPublic");

-- CreateIndex
CREATE UNIQUE INDEX "TempVoiceConfig_guildId_key" ON "TempVoiceConfig"("guildId");

-- CreateIndex
CREATE INDEX "TempVoiceUserStats_guildId_trustScore_idx" ON "TempVoiceUserStats"("guildId", "trustScore" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "TempVoiceUserStats_guildId_discordId_key" ON "TempVoiceUserStats"("guildId", "discordId");

-- CreateIndex
CREATE INDEX "TempVoiceTemplate_guildId_discordId_idx" ON "TempVoiceTemplate"("guildId", "discordId");

-- CreateIndex
CREATE UNIQUE INDEX "TempVoiceTemplate_guildId_discordId_name_key" ON "TempVoiceTemplate"("guildId", "discordId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationConfig_guildId_key" ON "VerificationConfig"("guildId");

-- CreateIndex
CREATE INDEX "ModerationSuggestion_guildId_status_idx" ON "ModerationSuggestion"("guildId", "status");

-- CreateIndex
CREATE INDEX "ModerationSuggestion_guildId_createdAt_idx" ON "ModerationSuggestion"("guildId", "createdAt");

-- CreateIndex
CREATE INDEX "ModerationSuggestion_messageId_idx" ON "ModerationSuggestion"("messageId");

-- CreateIndex
CREATE INDEX "ModerationSuggestion_userId_idx" ON "ModerationSuggestion"("userId");

-- CreateIndex
CREATE INDEX "SentimentData_guildId_createdAt_idx" ON "SentimentData"("guildId", "createdAt");

-- CreateIndex
CREATE INDEX "SentimentData_userId_idx" ON "SentimentData"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Version_version_key" ON "Version"("version");

-- CreateIndex
CREATE INDEX "Webhook_odiscordId_idx" ON "Webhook"("odiscordId");

-- CreateIndex
CREATE INDEX "Webhook_guildId_idx" ON "Webhook"("guildId");

-- CreateIndex
CREATE INDEX "Webhook_status_idx" ON "Webhook"("status");

-- CreateIndex
CREATE INDEX "MusicHistory_guildId_playedAt_idx" ON "MusicHistory"("guildId", "playedAt" DESC);

-- CreateIndex
CREATE INDEX "MusicHistory_discordId_playedAt_idx" ON "MusicHistory"("discordId", "playedAt" DESC);

-- CreateIndex
CREATE INDEX "MusicPlaylist_discordId_idx" ON "MusicPlaylist"("discordId");

-- CreateIndex
CREATE INDEX "MusicPlaylist_guildId_idx" ON "MusicPlaylist"("guildId");

-- CreateIndex
CREATE INDEX "MusicPlaylist_isPublic_idx" ON "MusicPlaylist"("isPublic");

-- CreateIndex
CREATE UNIQUE INDEX "MusicPlaylist_discordId_name_key" ON "MusicPlaylist"("discordId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "MusicFavorite_uri_key" ON "MusicFavorite"("uri");

-- CreateIndex
CREATE INDEX "MusicFavorite_discordId_addedAt_idx" ON "MusicFavorite"("discordId", "addedAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "MusicFavorite_discordId_uri_key" ON "MusicFavorite"("discordId", "uri");

-- AddForeignKey
ALTER TABLE "UserLevel" ADD CONSTRAINT "UserLevel_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLevel" ADD CONSTRAINT "UserLevel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEconomy" ADD CONSTRAINT "UserEconomy_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEconomy" ADD CONSTRAINT "UserEconomy_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVote" ADD CONSTRAINT "UserVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModerationLog" ADD CONSTRAINT "ModerationLog_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Warning" ADD CONSTRAINT "Warning_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Giveaway" ADD CONSTRAINT "Giveaway_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomCommand" ADD CONSTRAINT "CustomCommand_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactionRole" ADD CONSTRAINT "ReactionRole_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SelfRole" ADD CONSTRAINT "SelfRole_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StarboardPost" ADD CONSTRAINT "StarboardPost_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Birthday" ADD CONSTRAINT "Birthday_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBadge" ADD CONSTRAINT "UserBadge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AIConversation" ADD CONSTRAINT "AIConversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildAnalytics" ADD CONSTRAINT "GuildAnalytics_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TempVoiceChannel" ADD CONSTRAINT "TempVoiceChannel_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

