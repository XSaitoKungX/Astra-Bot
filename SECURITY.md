# 🔒 Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | ✅ Yes             |
| 1.x.x   | ❌ No              |
| < 1.0   | ❌ No              |

## Reporting a Vulnerability

We take the security of Astra Bot seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### ⚠️ Please DO NOT

- Open a public GitHub issue for security vulnerabilities
- Post about the vulnerability on social media or public forums
- Exploit the vulnerability beyond what is necessary to demonstrate it

### ✅ Please DO

1. **Email us directly** at: `support@novaplex.xyz`
2. **Include the following information:**
   - Type of vulnerability (e.g., SQL injection, XSS, authentication bypass)
   - Full paths of source file(s) related to the vulnerability
   - Location of the affected source code (tag/branch/commit or direct URL)
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the issue, including how an attacker might exploit it

### 🕐 Response Timeline

| Action | Timeline |
|--------|----------|
| Initial Response | Within 48 hours |
| Status Update | Within 7 days |
| Vulnerability Fix | Within 30 days (depending on complexity) |

### 🎁 Recognition

We appreciate your efforts to responsibly disclose your findings. While we don't currently offer a bug bounty program, we will:

- Acknowledge your contribution in our release notes (if desired)
- Provide a letter of acknowledgment for your portfolio

## Security Best Practices

Please follow these security guidelines when deploying Astra Bot:

### Environment Variables

```bash
# ❌ Never commit .env files
# ❌ Never share your tokens publicly
# ✅ Use strong, unique secrets
# ✅ Rotate tokens periodically
```

### Required Security Measures

1. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm update
   ```

2. **Use Strong Secrets**
   - `SESSION_SECRET`: At least 32 random characters
   - `API_SECRET`: At least 32 random characters
   - Never use default or example values

3. **Database Security**
   - Use strong MongoDB passwords
   - Enable MongoDB authentication
   - Restrict network access to your database

4. **Discord Token Security**
   - Never share your bot token
   - Regenerate token if compromised
   - Use environment variables, not hardcoded values

5. **HTTPS**
   - Always use HTTPS in production
   - Configure proper SSL/TLS certificates
   - Enable HSTS headers

### Recommended `.env` Permissions

```bash
chmod 600 .env
```

## Security Features in Astra

Astra Bot includes several built-in security features:

| Feature | Description |
|---------|-------------|
| **Rate Limiting** | Prevents API abuse |
| **Input Validation** | Sanitizes user input |
| **CORS** | Restricts cross-origin requests |
| **Helmet.js** | Sets security headers |
| **Session Security** | Secure cookie configuration |
| **OAuth2** | Secure Discord authentication |

## Vulnerability Disclosure Policy

- We will confirm receipt of your vulnerability report within 48 hours
- We will send you regular updates about our progress
- We will notify you when the vulnerability is fixed
- We will publicly disclose the vulnerability after a fix is released (with your permission)

## Contact

- **Security Email:** support@novaplex.xyz
- **Discord:** [Support Server](https://discord.gg/KD84DmNA89)
- **GitHub:** [@XSaitoKungX](https://github.com/XSaitoKungX)

---

Thank you for helping keep Astra Bot and its users safe! 🛡️
