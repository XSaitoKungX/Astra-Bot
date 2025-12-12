# 🔔 Discord Webhook Notifications

This project includes an advanced GitHub Actions workflow that sends beautiful Discord notifications for various GitHub events.

## 📋 Features

| Event | Notification Type | Description |
|-------|------------------|-------------|
| **Push** | Commit list | Shows commits pushed to `main` or `develop` |
| **Pull Request** | Status updates | Opened, merged, closed, ready for review |
| **Issues** | Tracking | New issues, closed issues, reopened |
| **Releases** | Announcements | New releases with changelog preview |
| **CI Failure** | Alerts | Notifies when CI pipeline fails |
| **Stars** | Milestones | Celebrates 25, 50, 100+ star milestones |
| **Forks** | Milestones | Announces fork milestones (25, 50, etc.) |

## 🚀 Quick Setup

### 1. Create a Discord Webhook

1. Go to your Discord server
2. Navigate to **Server Settings** → **Integrations** → **Webhooks**
3. Click **New Webhook**
4. Configure:
   - **Name:** `Astra GitHub` (or your preferred name)
   - **Channel:** Select your `#github` or `#updates` channel
   - **Avatar:** Upload the bot icon (optional)
5. Click **Copy Webhook URL**

### 2. Add GitHub Secret

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following:

| Secret Name | Description |
|-------------|-------------|
| `DISCORD_WEBHOOK_URL` | Main webhook for all notifications |
| `DISCORD_WEBHOOK_URL_RELEASES` | (Optional) Separate webhook for releases |

### 3. Enable the Workflow

The workflow is already configured in `.github/workflows/discord-notifications.yml`. It will automatically run on the configured events.

## 📝 Notification Examples

### Push Notification
```
🚀 3 new commit(s) to `main`

[`a1b2c3d`](link) feat: Add new feature - username
[`e4f5g6h`](link) fix: Bug fix - username
[`i7j8k9l`](link) docs: Update README - username
```

### Pull Request Merged
```
🎉 Pull Request Merged

#42 Add awesome feature

📊 Changes: +150 / -20
📁 Files: 5
🎯 Target: main
```

### New Release
```
🚀 New Astra Bot Release!

🎉 New Release Published!
v2.19.0

📦 Version: v2.19.0
📋 Type: Stable Release
📥 Download: [View Release](link)
```

### CI Failure
```
❌ CI Pipeline Failed

Workflow: CI
Branch: feature/test
Commit: [abc1234](link)
```

## ⚙️ Configuration

### Customizing Colors

The workflow uses these color presets:

| Color | Hex | Decimal | Used For |
|-------|-----|---------|----------|
| Success | `#57F287` | `5763719` | Merged PRs, closed issues, releases |
| Error | `#ED4245` | `15548997` | CI failures, closed PRs |
| Warning | `#FEE75C` | `16705372` | New issues, pre-releases |
| Info | `#5865F2` | `5793266` | New PRs, pushes to develop |
| Primary | `#8711E4` | `8847876` | Star milestones |

### Disabling Specific Notifications

To disable a notification type, comment out or remove the corresponding job in the workflow file:

```yaml
# Comment out to disable push notifications
# push-notification:
#   ...
```

### Changing Milestone Thresholds

Edit the star/fork milestone checks in the workflow:

```bash
# Stars: notify at 10, 25, 50, 100 intervals
if [ $((STARS % 100)) -eq 0 ]; then ...
elif [ $((STARS % 50)) -eq 0 ]; then ...
elif [ $((STARS % 25)) -eq 0 ]; then ...
```

## 🔧 Using the Reusable Action

You can use the included composite action in your own workflows:

```yaml
- uses: ./.github/actions/discord-notify
  with:
    webhook_url: ${{ secrets.DISCORD_WEBHOOK_URL }}
    title: "🚀 Deployment Complete"
    description: "Version 2.19.0 deployed to production!"
    color: "success"
    url: "https://astra.novaplex.xyz"
    author_name: ${{ github.actor }}
    author_icon: https://github.com/${{ github.actor }}.png
    fields: |
      [
        {"name": "Environment", "value": "Production", "inline": true},
        {"name": "Version", "value": "2.19.0", "inline": true}
      ]
```

### Action Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `webhook_url` | ✅ | - | Discord webhook URL |
| `title` | ✅ | - | Embed title |
| `description` | ❌ | `""` | Embed description |
| `color` | ❌ | `"info"` | Color preset: `success`, `error`, `warning`, `info`, `primary` |
| `url` | ❌ | `""` | URL the title links to |
| `author_name` | ❌ | `""` | Author name |
| `author_icon` | ❌ | `""` | Author icon URL |
| `thumbnail` | ❌ | `""` | Thumbnail image URL |
| `footer` | ❌ | `"Astra Bot • GitHub"` | Footer text |
| `fields` | ❌ | `"[]"` | JSON array of embed fields |
| `content` | ❌ | `""` | Message content outside embed |
| `mention_everyone` | ❌ | `"false"` | Include @everyone mention |

## 🔒 Security Notes

- **Never** commit webhook URLs directly in code
- Always use GitHub Secrets for sensitive data
- The webhook URL grants posting access to your channel
- Rotate webhook URLs if compromised
- Consider using separate webhooks for different notification types

## 📊 Monitoring

To monitor webhook delivery:

1. Go to **Actions** tab in your repository
2. Select **Discord Notifications** workflow
3. View individual job runs for success/failure status

## 🐛 Troubleshooting

### Notifications not sending?

1. **Check the secret:** Verify `DISCORD_WEBHOOK_URL` is set correctly
2. **Check workflow runs:** Look at Actions tab for errors
3. **Validate webhook:** Test the URL manually with curl:
   ```bash
   curl -H "Content-Type: application/json" \
        -d '{"content": "Test message"}' \
        "YOUR_WEBHOOK_URL"
   ```

### Rate limiting?

Discord has rate limits on webhooks. The workflow handles this gracefully, but if you're sending too many notifications:
- Reduce notification frequency
- Combine related notifications
- Use separate webhooks for high-volume events

---

**Need help?** Join our [Discord Server](https://discord.gg/novaplex) for support!
