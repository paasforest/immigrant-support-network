# Environment Variables Setup

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration (Database Only)
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# reCAPTCHA v3 (Get from: https://www.google.com/recaptcha/admin)
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here

# Sentry Error Tracking (Optional)
VITE_SENTRY_DSN=your_sentry_dsn_here

# OpenAI API Key (For AI Chat - Get from: https://platform.openai.com/api-keys)
VITE_OPENAI_API_KEY=your_openai_api_key_here

# AI Chat Feature Flag (Optional - Auto-enables after 6 months)
# Set to 'true' to enable manually, or leave unset for auto-enable after 6 months
VITE_ENABLE_AI_CHAT=false

# Environment
VITE_ENV=development
```

**Note:** Storage credentials (S3/Hetzner) are stored **securely in Supabase Edge Function secrets** and are NOT in the `.env` file. See `HETZNER_STORAGE_SETUP.md` for configuration.

## How to Get These Values

### 1. Supabase (Database)
- Go to https://supabase.com
- Navigate to Project Settings > API
- Copy the URL and anon key

### 2. reCAPTCHA v3
- Visit https://www.google.com/recaptcha/admin
- Register your site for reCAPTCHA v3
- Copy the site key

### 3. Sentry (Optional)
- Sign up at https://sentry.io
- Create a new project
- Copy the DSN

### 4. OpenAI API (For AI Chat)
- Go to https://platform.openai.com/api-keys
- Create a new API key
- Copy the key (starts with sk-...)
- Initial $5 credit is enough for ~500-1000 conversations!

### 5. Storage (Hetzner Object Storage)
- Storage credentials are **NOT** in `.env` (security risk!)
- They are stored in **Supabase Edge Function secrets**
- See `HETZNER_STORAGE_SETUP.md` for full setup guide

## AI Chat Feature

The AI Chat widget will **automatically enable after 6 months** from launch date.

**Testing Before 6 Months:**
- Add `?testchat=true` to your URL: `http://localhost:3000/?testchat=true`
- Or set `VITE_ENABLE_AI_CHAT=true` in `.env`

**After 6 Months:**
- AI Chat will auto-enable for all visitors
- No code changes needed!

See `AI_CHAT_GUIDE.md` for full documentation.

