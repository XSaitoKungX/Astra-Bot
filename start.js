#!/usr/bin/env node

// ===========================================
// ASTRA BOT - Production Startup Script
// ===========================================
// This script handles:
// - Automatic TypeScript compilation
// - File watching for auto-rebuild (using chokidar)
// - Starting the bot and API server
// ===========================================

import { spawn, execSync } from 'child_process';
import { watch } from 'chokidar';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const CONFIG = {
  // Enable file watcher for auto-rebuild (default: true)
  watchEnabled: process.env.FILE_WATCHER_ENABLED !== 'false',
  // Directories to watch
  watchDirs: [
    join(__dirname, 'src'),
    join(__dirname, 'dashboard/src'),
  ],
  // Ignored patterns
  ignored: [
    '**/node_modules/**',
    '**/dist/**',
    '**/.git/**',
    '**/package-lock.json',
    '**/*.d.ts',
  ],
  // Debounce time for rebuilds (ms)
  rebuildDebounce: 1000,
  // Entry point after build
  entryPoint: join(__dirname, 'dist', 'index.js'),
};

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
};

function log(message, color = colors.reset) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${colors.cyan}[${timestamp}]${colors.reset} ${color}${message}${colors.reset}`);
}

function logHeader() {
  console.log(`
${colors.magenta}╔══════════════════════════════════════════════════╗
║                                                  ║
║     ${colors.bright}✨ ASTRA BOT - Production Startup${colors.reset}${colors.magenta}            ║
║                                                  ║
╚══════════════════════════════════════════════════╝${colors.reset}
`);
}

// Build the project
async function build() {
  log('🔨 Building project...', colors.yellow);
  
  try {
    // Build bot (TypeScript)
    log('  → Compiling TypeScript...', colors.blue);
    execSync('npx tsc', { stdio: 'inherit', cwd: __dirname });
    
    // Check if dashboard needs building
    const dashboardDist = join(__dirname, 'dashboard', 'dist');
    if (!existsSync(dashboardDist)) {
      log('  → Building dashboard...', colors.blue);
      execSync('npm run build:dashboard', { stdio: 'inherit', cwd: __dirname });
    }
    
    log('✅ Build complete!', colors.green);
    return true;
  } catch (error) {
    log('❌ Build failed!', colors.red);
    console.error(error.message);
    return false;
  }
}

// Start the application
let appProcess = null;

function startApp() {
  if (appProcess) {
    log('🔄 Restarting application...', colors.yellow);
    appProcess.kill();
  }
  
  log('🚀 Starting Astra...', colors.green);
  
  appProcess = spawn('node', [CONFIG.entryPoint], {
    stdio: 'inherit',
    cwd: __dirname,
    env: {
      ...process.env,
      NODE_ENV: process.env.NODE_ENV || 'production',
    },
  });
  
  appProcess.on('error', (error) => {
    log(`❌ Failed to start: ${error.message}`, colors.red);
  });
  
  appProcess.on('exit', (code, signal) => {
    if (signal !== 'SIGTERM' && signal !== 'SIGINT') {
      log(`⚠️ Process exited with code ${code}`, colors.yellow);
    }
  });
}

// ════════════════════════════════════════════════════════════════
// 👀 FILE WATCHER (using chokidar)
// ════════════════════════════════════════════════════════════════

class FileWatcher {
  constructor() {
    this.watcher = null;
    this.debounceTimer = null;
    this.buildInProgress = false;
    this.buildQueued = false;
    this.dashboardBuildQueued = false;
  }

  start() {
    if (!CONFIG.watchEnabled) {
      log('📁 File watcher disabled', colors.yellow);
      return;
    }

    log('👁️ Initializing file watcher...', colors.blue);
    
    this.watcher = watch(CONFIG.watchDirs, {
      persistent: true,
      ignoreInitial: true,
      ignored: CONFIG.ignored,
      awaitWriteFinish: {
        stabilityThreshold: 500,
        pollInterval: 100
      }
    });

    this.watcher
      .on('add', path => this.handleChange('added', path))
      .on('change', path => this.handleChange('changed', path))
      .on('unlink', path => this.handleChange('deleted', path))
      .on('error', error => log(`❌ File watcher error: ${error.message}`, colors.red));

    log('✅ File watcher started - Auto-rebuild enabled!', colors.green);
    log(`   → Watching: src/ (bot)`, colors.cyan);
    log(`   → Watching: dashboard/src/ (dashboard)`, colors.magenta);
  }

  handleChange(action, filepath) {
    const relativePath = filepath.replace(__dirname + '/', '');
    const isDashboard = relativePath.startsWith('dashboard/');
    
    log(`📝 File ${action}: ${relativePath}`, isDashboard ? colors.magenta : colors.cyan);

    // Debounce to avoid multiple rapid rebuilds
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      if (isDashboard) {
        this.triggerDashboardBuild();
      } else {
        this.triggerBotBuild();
      }
    }, CONFIG.rebuildDebounce);
  }

  async triggerBotBuild() {
    if (this.buildInProgress) {
      this.buildQueued = true;
      log('⏳ Build in progress, queuing...', colors.yellow);
      return;
    }

    this.buildInProgress = true;
    log('🔨 Changes detected - Rebuilding bot...', colors.yellow);

    const success = await build();
    
    this.buildInProgress = false;

    if (success) {
      startApp();
      log('✅ Bot rebuild complete! 🎉', colors.green);
    }

    if (this.buildQueued) {
      this.buildQueued = false;
      setTimeout(() => this.triggerBotBuild(), 1000);
    }
  }

  async triggerDashboardBuild() {
    if (this.buildInProgress) {
      this.dashboardBuildQueued = true;
      log('⏳ Build in progress, queuing dashboard build...', colors.yellow);
      return;
    }

    this.buildInProgress = true;
    log('🎨 Changes detected - Rebuilding dashboard...', colors.magenta);

    try {
      const startTime = Date.now();
      execSync('npm run build:dashboard', { stdio: 'inherit', cwd: __dirname });
      const buildTime = ((Date.now() - startTime) / 1000).toFixed(2);
      log(`✅ Dashboard rebuild complete in ${buildTime}s! Refresh your browser. 🎉`, colors.green);
    } catch (error) {
      log('❌ Dashboard build failed!', colors.red);
      console.error(error.message);
    }

    this.buildInProgress = false;

    if (this.dashboardBuildQueued) {
      this.dashboardBuildQueued = false;
      setTimeout(() => this.triggerDashboardBuild(), 1000);
    }
  }

  stop() {
    if (this.watcher) {
      this.watcher.close();
      log('👁️ File watcher stopped', colors.yellow);
    }
  }
}

const fileWatcher = new FileWatcher();

function setupWatcher() {
  fileWatcher.start();
}

// Graceful shutdown
function setupShutdown() {
  const shutdown = (signal) => {
    log(`\n${signal} received. Shutting down gracefully...`, colors.yellow);
    
    fileWatcher.stop();
    
    if (appProcess) {
      appProcess.kill('SIGTERM');
    }
    
    process.exit(0);
  };
  
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

// Main entry point
async function main() {
  logHeader();
  
  log(`Environment: ${process.env.NODE_ENV || 'production'}`, colors.blue);
  log(`File Watcher: ${CONFIG.watchEnabled ? 'Enabled' : 'Disabled'}`, colors.blue);
  
  setupShutdown();
  
  // Initial build
  const buildSuccess = await build();
  
  if (!buildSuccess) {
    log('❌ Initial build failed. Exiting...', colors.red);
    process.exit(1);
  }
  
  // Start the application
  startApp();
  
  // Setup file watcher if enabled
  setupWatcher();
}

// Run
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
