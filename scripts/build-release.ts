#!/usr/bin/env tsx
// ===========================================
// ASTRA BOT - Release Build Script
// ===========================================
// Creates obfuscated distribution builds

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const RELEASE_DIR = path.join(ROOT_DIR, 'release');

// Obfuscation config for javascript-obfuscator
const OBFUSCATOR_CONFIG = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.75,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.4,
  debugProtection: false,
  disableConsoleOutput: false,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: true,
  renameGlobals: false,
  selfDefending: true,
  simplify: true,
  splitStrings: true,
  splitStringsChunkLength: 10,
  stringArray: true,
  stringArrayCallsTransform: true,
  stringArrayEncoding: ['base64'],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayWrappersCount: 2,
  stringArrayWrappersChainedCalls: true,
  stringArrayWrappersParametersMaxCount: 4,
  stringArrayWrappersType: 'function',
  stringArrayThreshold: 0.75,
  transformObjectKeys: true,
  unicodeEscapeSequence: false,
};

function log(message: string) {
  console.log(`\x1b[36m[BUILD]\x1b[0m ${message}`);
}

function success(message: string) {
  console.log(`\x1b[32m[SUCCESS]\x1b[0m ${message}`);
}

function error(message: string) {
  console.error(`\x1b[31m[ERROR]\x1b[0m ${message}`);
}

async function cleanDirs() {
  log('Cleaning directories...');
  
  if (fs.existsSync(RELEASE_DIR)) {
    fs.rmSync(RELEASE_DIR, { recursive: true });
  }
  
  fs.mkdirSync(RELEASE_DIR, { recursive: true });
  fs.mkdirSync(path.join(RELEASE_DIR, 'obfuscated'), { recursive: true });
  fs.mkdirSync(path.join(RELEASE_DIR, 'source'), { recursive: true });
}

async function buildTypeScript() {
  log('Building TypeScript...');
  execSync('npm run build:bot', { cwd: ROOT_DIR, stdio: 'inherit' });
}

async function buildDashboard() {
  log('Building Dashboard...');
  execSync('npm run build', { cwd: path.join(ROOT_DIR, 'dashboard'), stdio: 'inherit' });
}

async function obfuscateFiles() {
  log('Obfuscating JavaScript files...');
  
  const obfuscatedDir = path.join(RELEASE_DIR, 'obfuscated', 'dist');
  
  // Copy dist to release/obfuscated
  fs.cpSync(DIST_DIR, obfuscatedDir, { recursive: true });
  
  // Find all JS files
  const jsFiles = getAllFiles(obfuscatedDir, '.js');
  
  log(`Found ${jsFiles.length} JavaScript files to obfuscate...`);
  
  // Write obfuscator config
  const configPath = path.join(RELEASE_DIR, 'obfuscator.config.json');
  fs.writeFileSync(configPath, JSON.stringify(OBFUSCATOR_CONFIG, null, 2));
  
  // Obfuscate each file
  for (const file of jsFiles) {
    try {
      execSync(
        `npx javascript-obfuscator "${file}" --output "${file}" --config "${configPath}"`,
        { cwd: ROOT_DIR, stdio: 'pipe' }
      );
    } catch (e) {
      // Some files might fail, continue
    }
  }
  
  // Clean up config
  fs.unlinkSync(configPath);
  
  success(`Obfuscated ${jsFiles.length} files`);
}

function getAllFiles(dir: string, ext: string): string[] {
  const files: string[] = [];
  
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      files.push(...getAllFiles(fullPath, ext));
    } else if (item.name.endsWith(ext)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function copyPublicFiles() {
  log('Copying public files...');
  
  const publicFiles = [
    'package.json',
    'package-lock.json',
    'README.md',
    'LICENSE',
    'CONTRIBUTORS.md',
    'SECURITY.md',
    '.env.example',
    'tsconfig.json',
  ];
  
  const obfuscatedDir = path.join(RELEASE_DIR, 'obfuscated');
  
  for (const file of publicFiles) {
    const src = path.join(ROOT_DIR, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(obfuscatedDir, file));
    }
  }
  
  // Copy dashboard dist
  const dashboardDist = path.join(ROOT_DIR, 'dashboard', 'dist');
  if (fs.existsSync(dashboardDist)) {
    fs.cpSync(dashboardDist, path.join(obfuscatedDir, 'dashboard', 'dist'), { recursive: true });
  }
}

async function createSourceRelease() {
  log('Creating source release...');
  
  const sourceDir = path.join(RELEASE_DIR, 'source');
  
  // Copy everything except node_modules and dist
  const excludeDirs = ['node_modules', 'dist', 'release', '.git'];
  const excludeFiles = ['.env'];
  
  copyDirExcept(ROOT_DIR, sourceDir, excludeDirs, excludeFiles);
  
  success('Source release created');
}

function copyDirExcept(src: string, dest: string, excludeDirs: string[], excludeFiles: string[]) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src, { withFileTypes: true });
  
  for (const item of items) {
    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);
    
    if (item.isDirectory()) {
      if (!excludeDirs.includes(item.name)) {
        copyDirExcept(srcPath, destPath, excludeDirs, excludeFiles);
      }
    } else {
      if (!excludeFiles.includes(item.name)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

async function createArchives() {
  log('Creating archives...');
  
  const version = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf-8')).version;
  
  // Create obfuscated archive
  execSync(
    `tar -czvf astra-bot-v${version}-obfuscated.tar.gz obfuscated`,
    { cwd: RELEASE_DIR, stdio: 'pipe' }
  );
  
  // Create source archive
  execSync(
    `tar -czvf astra-bot-v${version}-source.tar.gz source`,
    { cwd: RELEASE_DIR, stdio: 'pipe' }
  );
  
  success(`Archives created: astra-bot-v${version}-obfuscated.tar.gz, astra-bot-v${version}-source.tar.gz`);
}

async function generateChecksums() {
  log('Generating checksums...');
  
  const version = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf-8')).version;
  
  const obfuscatedChecksum = execSync(
    `sha256sum astra-bot-v${version}-obfuscated.tar.gz`,
    { cwd: RELEASE_DIR, encoding: 'utf-8' }
  );
  
  const sourceChecksum = execSync(
    `sha256sum astra-bot-v${version}-source.tar.gz`,
    { cwd: RELEASE_DIR, encoding: 'utf-8' }
  );
  
  fs.writeFileSync(
    path.join(RELEASE_DIR, 'checksums.txt'),
    `${obfuscatedChecksum}${sourceChecksum}`
  );
  
  success('Checksums generated');
}

async function main() {
  console.log('\n========================================');
  console.log('   ASTRA BOT - Release Build Script');
  console.log('========================================\n');
  
  try {
    await cleanDirs();
    await buildTypeScript();
    await buildDashboard();
    await obfuscateFiles();
    await copyPublicFiles();
    await createSourceRelease();
    await createArchives();
    await generateChecksums();
    
    console.log('\n========================================');
    success('Release build completed!');
    console.log(`\nRelease files in: ${RELEASE_DIR}`);
    console.log('  - obfuscated/  (for distribution)');
    console.log('  - source/      (for source buyers)');
    console.log('  - *.tar.gz     (archives)');
    console.log('  - checksums.txt');
    console.log('========================================\n');
  } catch (err) {
    error(`Build failed: ${err}`);
    process.exit(1);
  }
}

main();
