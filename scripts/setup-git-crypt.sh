#!/bin/bash
# ===========================================
# ASTRA BOT - Git-Crypt Setup Script
# ===========================================

set -e

echo "=========================================="
echo "   ASTRA BOT - Git-Crypt Setup"
echo "=========================================="
echo ""

# Check if git-crypt is installed
if ! command -v git-crypt &> /dev/null; then
    echo "❌ git-crypt is not installed!"
    echo ""
    echo "Install it with:"
    echo "  Ubuntu/Debian: sudo apt install git-crypt"
    echo "  macOS:         brew install git-crypt"
    echo "  Arch:          sudo pacman -S git-crypt"
    exit 1
fi

echo "✅ git-crypt is installed"
echo ""

# Check if already initialized
if [ -d ".git-crypt" ]; then
    echo "⚠️  git-crypt is already initialized in this repo"
    echo ""
    read -p "Do you want to add a new GPG user? (y/n): " add_user
    
    if [ "$add_user" = "y" ]; then
        read -p "Enter GPG key ID or email: " gpg_id
        git-crypt add-gpg-user "$gpg_id"
        echo "✅ Added GPG user: $gpg_id"
    fi
    exit 0
fi

echo "Initializing git-crypt..."
git-crypt init

echo ""
echo "✅ git-crypt initialized!"
echo ""
echo "=========================================="
echo "IMPORTANT: Save your symmetric key!"
echo "=========================================="
echo ""
echo "Export the key with:"
echo "  git-crypt export-key ./git-crypt-key"
echo ""
echo "Then store git-crypt-key somewhere SAFE!"
echo "(Not in the repo - it's your master key)"
echo ""
echo "=========================================="
echo ""

# Ask if user wants to add GPG key
read -p "Add a GPG user now? (y/n): " add_gpg

if [ "$add_gpg" = "y" ]; then
    echo ""
    echo "Available GPG keys:"
    gpg --list-keys --keyid-format LONG 2>/dev/null || echo "No GPG keys found"
    echo ""
    read -p "Enter GPG key ID or email: " gpg_id
    git-crypt add-gpg-user "$gpg_id"
    echo "✅ Added GPG user: $gpg_id"
fi

echo ""
echo "=========================================="
echo "Next steps:"
echo "=========================================="
echo "1. Export your key:  git-crypt export-key ~/astra-git-crypt-key"
echo "2. Store key safely (password manager, USB, etc.)"
echo "3. Commit changes:   git add -A && git commit -m 'Setup git-crypt'"
echo "4. Push to GitHub:   git push"
echo ""
echo "To unlock on another machine:"
echo "  git-crypt unlock ~/astra-git-crypt-key"
echo ""
echo "Or with GPG:"
echo "  git-crypt unlock"
echo "=========================================="
