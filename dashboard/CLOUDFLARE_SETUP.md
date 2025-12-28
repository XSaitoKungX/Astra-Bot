# Cloudflare Turnstile & Cookie Consent Setup

## 🔐 Cloudflare Turnstile Setup

### 1. Turnstile Site Key erstellen

1. Gehe zu [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Wähle deine Domain aus
3. Navigiere zu **Turnstile** im Menü
4. Klicke auf **"Add Site"**
5. Konfiguration:
   - **Site Name:** Astra Bot Website
   - **Domain:** `astra-bot.app`
   - **Widget Mode:** Managed (empfohlen)
   - **Pre-Clearance:** Optional aktivieren für bessere UX

6. Kopiere die **Site Key** und **Secret Key**

### 2. Environment Variables

Füge zu deiner `.env` Datei hinzu:

```env
# Cloudflare Turnstile
VITE_TURNSTILE_SITE_KEY=your_site_key_here
TURNSTILE_SECRET_KEY=your_secret_key_here
```

### 3. Turnstile in Forms integrieren

Beispiel für Login/Contact Forms:

```tsx
import CloudflareTurnstile from '../components/CloudflareTurnstile';

function LoginForm() {
  const [turnstileToken, setTurnstileToken] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      toast.error('Please complete the verification');
      return;
    }
    
    // Submit with turnstileToken
    await api.post('/auth/login', {
      email,
      password,
      turnstileToken,
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      
      <CloudflareTurnstile
        siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
        onVerify={(token) => setTurnstileToken(token)}
        onError={(error) => console.error('Turnstile error:', error)}
        theme="auto"
      />
      
      <button type="submit">Login</button>
    </form>
  );
}
```

### 4. Backend Verification

Beispiel für Express.js:

```typescript
import axios from 'axios';

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  try {
    const response = await axios.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip,
      }
    );
    
    return response.data.success;
  } catch (error) {
    console.error('Turnstile verification failed:', error);
    return false;
  }
}

// In your route
app.post('/api/auth/login', async (req, res) => {
  const { email, password, turnstileToken } = req.body;
  const ip = req.ip;
  
  // Verify Turnstile
  const isVerified = await verifyTurnstile(turnstileToken, ip);
  if (!isVerified) {
    return res.status(400).json({ error: 'Verification failed' });
  }
  
  // Continue with login...
});
```

---

## 🍪 Cookie Consent Banner

### Features

✅ **DSGVO/GDPR Compliant**
- Necessary, Analytics, Marketing cookies
- Accept All / Decline All / Customize
- Persistent storage in localStorage

✅ **Modern Design**
- Glassmorphism style
- Smooth animations (Framer Motion)
- Mobile responsive

✅ **Google Analytics Integration**
- Automatic consent mode updates
- Respects user preferences

### Verwendung

Der Cookie Banner wird automatisch auf allen Seiten angezeigt (bereits in `App.tsx` integriert).

### Cookie Preferences API

```typescript
// Check if user has consented
const consent = localStorage.getItem('astra-cookie-consent');
// Values: 'accepted' | 'declined' | 'custom' | null

// Get user preferences
const preferences = JSON.parse(
  localStorage.getItem('astra-cookie-preferences') || '{}'
);

// Example: Only load analytics if user accepted
if (preferences.analytics) {
  // Initialize Google Analytics
  window.gtag('config', 'GA_MEASUREMENT_ID');
}
```

### Customization

Farben und Styles können in `CookieConsent.tsx` angepasst werden:

```tsx
// Gradient accent line
<div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500" />

// Accept button
<button className="bg-linear-to-r from-pink-500 to-purple-500 text-white">
  Accept All
</button>
```

---

## 📊 Google Analytics Setup (Optional)

### 1. Google Analytics hinzufügen

In `index.html` vor `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  // Default consent mode (denied until user accepts)
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'wait_for_update': 500
  });
  
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Consent Mode Updates

Der Cookie Banner aktualisiert automatisch die Consent Mode Settings basierend auf den User-Präferenzen.

---

## 🚀 Deployment Checklist

- [ ] Cloudflare Turnstile Site Key erstellt
- [ ] Environment Variables gesetzt
- [ ] Turnstile in kritischen Forms integriert (Login, Contact, etc.)
- [ ] Backend Verification implementiert
- [ ] Cookie Banner getestet (Accept/Decline/Customize)
- [ ] Google Analytics (optional) konfiguriert
- [ ] Privacy Policy aktualisiert mit Cookie-Informationen
- [ ] DSGVO-Compliance geprüft

---

## 🔧 Troubleshooting

### Turnstile lädt nicht

- Prüfe ob die Site Key korrekt ist
- Prüfe Browser Console auf Fehler
- Stelle sicher, dass die Domain in Cloudflare korrekt konfiguriert ist

### Cookie Banner erscheint nicht

- Prüfe localStorage: `localStorage.getItem('astra-cookie-consent')`
- Lösche localStorage zum Testen: `localStorage.clear()`
- Prüfe Browser Console auf Fehler

### Analytics funktioniert nicht

- Prüfe ob User Analytics akzeptiert hat
- Prüfe Google Analytics Measurement ID
- Prüfe Browser Console auf gtag Fehler

---

## 📝 Weitere Informationen

- [Cloudflare Turnstile Docs](https://developers.cloudflare.com/turnstile/)
- [GDPR Cookie Consent Guide](https://gdpr.eu/cookies/)
- [Google Analytics Consent Mode](https://support.google.com/analytics/answer/9976101)
