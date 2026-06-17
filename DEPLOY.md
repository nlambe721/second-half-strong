# Second Half Strong — Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (already done in sandbox):
   ```bash
   npm install -g vercel
   ```

2. **Push to GitHub first:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/second-half-strong.git
   git branch -M main
   git push -u origin main
   ```

3. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repo `second-half-strong`
   - Add environment variable: `ANTHROPIC_API_KEY` = your key
   - Build command: `NODE_ENV=production next build` ← CRITICAL (the sandbox has NODE_ENV=development globally)
   - Deploy!

## Deploy Directly from CLI

```bash
cd /home/user/second-half-strong
vercel login  # opens browser for auth
vercel env add ANTHROPIC_API_KEY production  # paste your key
vercel --prod
```

## Access Codes

| Code | Purpose |
|------|---------|
| M40SUMMIT2025 | Summit members |
| HEALTH40PRO | Pro members |
| BETA2025 | Beta testers |

## Knowledge Base Stats

- **136 total chunks** (fr-001 to fr-136)
- **33 summit expert voices** fully attributed
- **19 content waves** from Funk Roberts

## Re-generating Knowledge Base

If you need to add more chunks:
```bash
# Add more add() calls to scripts/gen_kb.py (for core Funk Roberts content)
# Add more add() calls to scripts/gen_summit_append.py (for summit experts)
# Then run:
python3 scripts/gen_summit_append.py
# Or regenerate everything:
python3 scripts/gen_kb.py
python3 scripts/gen_summit_append.py
```

## Critical Build Note

Always use `NODE_ENV=production npm run build` locally.
Vercel automatically sets NODE_ENV=production during builds.
