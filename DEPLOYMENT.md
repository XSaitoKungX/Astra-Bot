# 🚀 Astra Bot - Deployment Guide

> **Note:** This is an internal deployment guide for the Astra Bot production environment.

## Production Setup

### Server-Informationen
- **Domain:** `https://astra-bot.app`
- **API Domain:** `https://astra-bot.app/api`
- **Entry Point:** `dist/index.js`

---

## 📋 Voraussetzungen

- Node.js 20+
- PostgreSQL (Supabase)
- Redis (Cache & Sessions)
- Lavalink (Music Streaming)
- Nginx Reverse Proxy

---

## 🔧 Installation

### 1. Repository Setup
```bash
cd Astra-Bot
```

### 2. Dependencies installieren
```bash
npm install
```

### 3. Projekt bauen
```bash
npm run build
```

### 4. Slash Commands deployen (einmalig)
```bash
npm run commands:deploy -- --global
```

### 5. Bot starten
```bash
npm run start
# oder
node dist/index.js
```

---

## ⚙️ Pelican Panel Konfiguration

### Startup Command
```bash
npm run pelican:start
```
Dieser Befehl führt `npm run build && npm run start` aus.

### Alternativ (wenn bereits gebaut)
```bash
node dist/index.js
```

### Environment Variables (im Panel setzen)
| Variable | Wert |
|----------|------|
| `PORT` | `49154` (vom Panel zugewiesen) |
| `NODE_ENV` | `production` |
| `TRUST_PROXY` | `true` |

---

## 🌐 Nginx Reverse Proxy

Die Nginx-Konfiguration für `astra.novaplex.xyz`:

```nginx
server {
    listen 80;
    listen 443 ssl http2;
    server_name astra.novaplex.xyz;

    # SSL Zertifikate (Let's Encrypt)
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Redirect HTTP to HTTPS
    if ($scheme != "https") {
        return 301 https://$host$request_uri;
    }

    location / {
        proxy_pass http://65.109.81.53:49154;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # WebSocket Support für Socket.io
    location /socket.io/ {
        proxy_pass http://65.109.81.53:49154;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

---

## 🔐 Discord OAuth2 Konfiguration

Im [Discord Developer Portal](https://discord.com/developers/applications):

1. Gehe zu deiner Application → **OAuth2**
2. Füge diese Redirect URI hinzu:
   ```
   https://astra.novaplex.xyz/api/auth/discord/callback
   ```
3. Speichern

---

## 📁 Wichtige Dateien

| Datei | Beschreibung |
|-------|-------------|
| `dist/index.js` | Kompilierter Entry Point |
| `dashboard/dist/` | Gebautes Dashboard (wird von API serviert) |
| `.env` | Umgebungsvariablen |
| `package.json` | Scripts und Dependencies |

---

## 🔄 Update-Prozess

```bash
# 1. Neueste Änderungen holen
git pull

# 2. Dependencies aktualisieren
npm install

# 3. Neu bauen
npm run build

# 4. Bei neuen Commands: Deployen
npm run commands:deploy -- --global

# 5. Neustart (im Panel)
```

---

## 🐛 Troubleshooting

### Bot startet nicht
- Prüfe `DISCORD_TOKEN` in `.env`
- Prüfe MongoDB-Verbindung

### Dashboard lädt nicht
- Prüfe ob `dashboard/dist/` existiert
- Führe `npm run build` aus

### OAuth funktioniert nicht
- Prüfe `DASHBOARD_URL` und `OAUTH_CALLBACK_URL`
- Prüfe Discord Developer Portal Redirect URIs

### Commands erscheinen nicht
- Globale Commands brauchen bis zu 1 Stunde
- Führe `npm run commands:deploy -- --global` aus

---

## 📊 Monitoring

### Health Check
```
GET https://astra.novaplex.xyz/api/health
```

### Logs
Im Pelican Panel unter "Console" einsehbar.

---

## 🎉 Fertig!

Nach dem Start ist Astra erreichbar unter:
- **Dashboard:** https://astra.novaplex.xyz
- **API:** https://astra.novaplex.xyz/api
- **Health:** https://astra.novaplex.xyz/api/health
