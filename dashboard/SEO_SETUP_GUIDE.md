# 🚀 Astra Bot - SEO Setup Guide für Google Search Console

## 📋 Google Search Console Property Setup

### ✅ Empfohlene Auswahl: **Domain**

Für `astra-bot.app` solltest du **Domain** wählen, weil:

1. **Alle Subdomains erfasst** - Automatisch www, api, cdn, etc.
2. **HTTP & HTTPS** - Beide Protokolle werden erfasst
3. **Einfachere Verwaltung** - Ein Property für alles
4. **Bessere Datenübersicht** - Alle Traffic-Daten an einem Ort
5. **Zukunftssicher** - Neue Subdomains automatisch inkludiert

### 🔧 Setup-Schritte:

1. **Domain Property erstellen:**
   - Gib ein: `astra-bot.app` (ohne https://)
   - Klicke auf "WEITER"

2. **DNS-Verifizierung:**
   - Google gibt dir einen TXT-Record
   - Format: `google-site-verification=XXXXX`
   - Füge diesen bei deinem Domain-Provider (z.B. Cloudflare) hinzu:
     - Type: `TXT`
     - Name: `@` (oder leer lassen)
     - Content: Der von Google bereitgestellte Code
   - Warte 5-10 Minuten für DNS-Propagierung
   - Klicke auf "VERIFIZIEREN"

3. **Sitemap einreichen:**
   - Nach Verifizierung: Gehe zu "Sitemaps"
   - Füge hinzu: `https://astra-bot.app/sitemap.xml`
   - Klicke auf "SENDEN"

---

## 📁 Aktualisierte Dateien

Alle SEO-Dateien wurden für `astra-bot.app` aktualisiert:

### ✅ `/dashboard/public/robots.txt`
- Domain aktualisiert auf `astra-bot.app`
- Sitemap-URL aktualisiert
- Verbesserte Crawl-Regeln
- Zusätzliche öffentliche Seiten erlaubt

### ✅ `/dashboard/public/sitemap.xml`
- Alle URLs auf `astra-bot.app` aktualisiert
- Datum auf `2025-12-24` aktualisiert
- Image-Sitemap für Banner hinzugefügt
- Neue Seiten hinzugefügt (features, status, about)
- Prioritäten optimiert

### ✅ `/dashboard/public/oembed.json`
- URLs auf `astra-bot.app` aktualisiert
- Provider-Name auf "Astra Bot" geändert

### ✅ `/dashboard/index.html`
- Canonical URLs aktualisiert
- Open Graph Tags aktualisiert
- Twitter Card URLs aktualisiert
- Structured Data (JSON-LD) aktualisiert
- Alle Meta-Tags auf neue Domain umgestellt

---

## 🎯 SEO Best Practices

### 1. **Regelmäßige Updates**
- Sitemap monatlich aktualisieren
- Neue Seiten sofort hinzufügen
- Datum in `<lastmod>` aktuell halten

### 2. **Performance Optimierung**
- Core Web Vitals überwachen
- Bilder komprimieren (WebP verwenden)
- Lazy Loading für Bilder
- CDN nutzen (Cloudflare)

### 3. **Content Optimierung**
- Unique Descriptions für jede Seite
- Keywords natürlich einbauen
- H1-H6 Hierarchie einhalten
- Alt-Tags für alle Bilder

### 4. **Technical SEO**
- HTTPS erzwingen
- 301 Redirects von alter Domain einrichten
- Mobile-First Design
- Strukturierte Daten (JSON-LD)

---

## 🔄 Migration von alter Domain

### Wichtig: 301 Redirects einrichten!

Richte auf deinem Server/Cloudflare 301 Redirects ein:

```
astra.novaplex.xyz/* → astra-bot.app/*
```

**Warum?**
- Erhält SEO-Rankings
- Verhindert 404-Fehler
- Leitet Nutzer automatisch um
- Überträgt Link-Equity

### Cloudflare Page Rules:
1. Gehe zu Cloudflare Dashboard
2. Wähle `novaplex.xyz`
3. Page Rules → Create Page Rule
4. URL Pattern: `astra.novaplex.xyz/*`
5. Setting: Forwarding URL (301 - Permanent Redirect)
6. Destination: `https://astra-bot.app/$1`
7. Save and Deploy

---

## 📊 Google Search Console Features nutzen

### Nach Setup verfügbar:

1. **Performance Report**
   - Klicks, Impressions, CTR, Position
   - Welche Keywords bringen Traffic
   - Welche Seiten performen gut

2. **Coverage Report**
   - Indexierte Seiten
   - Fehler beheben
   - Ausgeschlossene Seiten prüfen

3. **Core Web Vitals**
   - LCP (Largest Contentful Paint)
   - FID (First Input Delay)
   - CLS (Cumulative Layout Shift)

4. **Mobile Usability**
   - Mobile-Fehler finden
   - Responsive Design testen

5. **Security Issues**
   - Malware-Warnungen
   - Hacking-Versuche

---

## 🎨 Zusätzliche Optimierungen

### 1. **Schema Markup erweitern**
Bereits implementiert in `index.html`:
- ✅ WebApplication
- ✅ Organization
- ✅ BreadcrumbList
- ✅ FAQPage

### 2. **Social Media Integration**
- ✅ Open Graph Tags (Facebook, Discord)
- ✅ Twitter Cards
- ✅ oEmbed für Discord Embeds

### 3. **PWA Features**
- ✅ Web Manifest
- ✅ Service Worker
- ✅ Offline Support
- ✅ App Icons

---

## 📈 Monitoring & Analytics

### Empfohlene Tools:

1. **Google Search Console** (Pflicht)
   - Indexierung überwachen
   - Keywords tracken
   - Fehler beheben

2. **Google Analytics 4** (Optional)
   - Traffic-Analyse
   - User-Verhalten
   - Conversion-Tracking

3. **Cloudflare Analytics** (Kostenlos)
   - Bandwidth-Nutzung
   - Bot-Traffic
   - Security-Events

---

## ✅ Checkliste nach Domain-Wechsel

- [x] robots.txt aktualisiert
- [x] sitemap.xml aktualisiert
- [x] index.html Meta-Tags aktualisiert
- [x] oembed.json aktualisiert
- [ ] Google Search Console Property erstellt
- [ ] DNS TXT-Record hinzugefügt
- [ ] Domain verifiziert
- [ ] Sitemap eingereicht
- [ ] 301 Redirects von alter Domain eingerichtet
- [ ] SSL-Zertifikat aktiv
- [ ] Alle internen Links geprüft
- [ ] Social Media Links aktualisiert
- [ ] Bot Listing Seiten aktualisiert (Top.gg, etc.)

---

## 🆘 Troubleshooting

### Problem: Domain wird nicht verifiziert
**Lösung:**
- DNS-Propagierung abwarten (bis zu 48h)
- TXT-Record mit `dig` oder `nslookup` prüfen
- Cloudflare DNS Proxy temporär deaktivieren

### Problem: Sitemap wird nicht gefunden
**Lösung:**
- URL direkt im Browser testen
- robots.txt prüfen (darf Sitemap nicht blocken)
- Sitemap-Format validieren

### Problem: Seiten werden nicht indexiert
**Lösung:**
- robots.txt prüfen (Allow: /)
- Meta-Tag `robots` prüfen (nicht noindex)
- URL-Inspection Tool in GSC nutzen
- Manuelle Indexierung anfordern

---

## 📞 Support

Bei Fragen oder Problemen:
- Discord: https://discord.gg/KD84DmNA89
- GitHub: https://github.com/XSaitoKungX/Astra-Bot

---

**Viel Erfolg mit deiner neuen Domain! 🚀**
