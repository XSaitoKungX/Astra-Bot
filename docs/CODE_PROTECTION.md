# 🔒 Astra Bot - Code Protection System

This document explains the multi-layer code protection system used in Astra Bot.

## Overview

Astra Bot uses **3 layers of protection**:

| Layer | Technology | Purpose |
|-------|------------|---------|
| 1 | Git-Crypt | Encrypts source files in the repository |
| 2 | Compiled Only | Only `dist/` is visible, `src/` is encrypted |
| 3 | Obfuscation | JavaScript code is obfuscated for distribution |

---

## 🔐 Layer 1: Git-Crypt Encryption

Source files are encrypted using [git-crypt](https://github.com/AGWA/git-crypt).

### What's Encrypted?
- `src/**/*.ts` - All TypeScript source files
- `dashboard/src/**/*` - All dashboard source files
- `scripts/*.ts` - Build scripts

### What's NOT Encrypted (Public)?
- `README.md`, `LICENSE`, `CONTRIBUTORS.md`
- `package.json`, `tsconfig.json`
- `docs/` - Documentation
- `.github/` - Workflows and templates

### Setup Git-Crypt

```bash
# Install git-crypt
sudo apt install git-crypt  # Ubuntu/Debian
brew install git-crypt      # macOS

# Initialize in repo
./scripts/setup-git-crypt.sh

# Export your key (SAVE THIS!)
git-crypt export-key ~/astra-git-crypt-key

# Unlock on another machine
git-crypt unlock ~/astra-git-crypt-key
```

---

## 📦 Layer 2: Compiled Distribution

The repository only contains compiled JavaScript in `dist/`, not the original TypeScript source.

### For Users/Buyers:
- Clone the repo
- Run `npm install`
- Configure `.env`
- Run `npm start`

The bot works without access to the original TypeScript source!

---

## 🛡️ Layer 3: Code Obfuscation

For distribution, JavaScript is obfuscated using [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator).

### Obfuscation Features:
- ✅ Control flow flattening
- ✅ Dead code injection
- ✅ String array encoding (Base64)
- ✅ String array rotation & shuffle
- ✅ Self-defending code
- ✅ Identifier renaming (hexadecimal)

### Build Release

```bash
# Build full release (obfuscated + source archives)
npm run release

# Build obfuscated only
npm run release:obfuscated

# Build source only
npm run release:source
```

### Output

```
release/
├── obfuscated/           # Obfuscated distribution
│   ├── dist/             # Obfuscated JavaScript
│   ├── dashboard/dist/   # Compiled dashboard
│   ├── package.json
│   └── README.md
├── source/               # Full source code
│   ├── src/              # Original TypeScript
│   ├── dashboard/src/    # Original React code
│   └── ...
├── astra-bot-v2.4.0-obfuscated.tar.gz
├── astra-bot-v2.4.0-source.tar.gz
└── checksums.txt
```

---

## 💰 Distribution Models

### Free Tier (Public Repo)
- Encrypted source (git-crypt)
- Compiled `dist/` only
- Basic documentation

### Obfuscated Version ($)
- `release/obfuscated/`
- Working bot, but code is unreadable
- Good for users who just want to run the bot

### Source License ($$)
- `release/source/`
- Full TypeScript source code
- For developers who want to modify

---

## 🔑 Key Management

### Git-Crypt Key
- Export: `git-crypt export-key ~/astra-git-crypt-key`
- Store safely (password manager, USB, etc.)
- **Never commit the key file!**

### For Collaborators
1. Get their GPG public key
2. `git-crypt add-gpg-user <key-id>`
3. Push changes
4. They can unlock with `git-crypt unlock`

---

## ⚠️ Important Notes

1. **Backup your git-crypt key!** Without it, encrypted files are unrecoverable.
2. **Test before pushing** - Make sure encryption works correctly.
3. **Obfuscation is not 100% secure** - Determined attackers can reverse it, but it deters casual copying.
4. **Keep secrets in `.env`** - Never hardcode API keys or tokens.

---

## Commands Reference

```bash
# Git-Crypt
git-crypt status              # Check encryption status
git-crypt lock                # Re-encrypt files
git-crypt unlock <key-file>   # Decrypt files

# Release Build
npm run release               # Full release
npm run release:obfuscated    # Obfuscated only
npm run release:source        # Source only
```
