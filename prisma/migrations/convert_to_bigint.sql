-- Convert economy fields from INT to BIGINT to support large values
-- This allows values up to 9,223,372,036,854,775,807 (9.2 quintillion)

ALTER TABLE "UserEconomy" 
  ALTER COLUMN "balance" TYPE BIGINT,
  ALTER COLUMN "bank" TYPE BIGINT,
  ALTER COLUMN "bankLimit" TYPE BIGINT,
  ALTER COLUMN "totalEarned" TYPE BIGINT,
  ALTER COLUMN "totalSpent" TYPE BIGINT,
  ALTER COLUMN "totalWon" TYPE BIGINT,
  ALTER COLUMN "totalLost" TYPE BIGINT,
  ALTER COLUMN "totalGambled" TYPE BIGINT;

-- Update all users to have the new default bank limit (100 billion)
UPDATE "UserEconomy" 
SET "bankLimit" = 100000000000 
WHERE "bankLimit" < 100000000000;
