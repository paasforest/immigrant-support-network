# Quick Start Guide

Get your Immigration Support Network running in 5 minutes!

## 🚀 Quick Setup

### 1. Install Dependencies (1 min)
```bash
npm install
```

### 2. Create Environment File (2 min)
Create a `.env` file in the root directory:

```env
# Required - Get these from Supabase Dashboard
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here

# Required - Get from Google reCAPTCHA
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key

# Optional - For error tracking
VITE_SENTRY_DSN=your_sentry_dsn

# Environment
VITE_ENV=development
```

**Don't have these keys yet?**
- **Supabase**: Sign up at [supabase.com](https://supabase.com), create a project, get keys from Settings > API
- **reCAPTCHA**: Register at [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin), choose v3, add `localhost`
- **Sentry** (optional): Sign up at [sentry.io](https://sentry.io), create a React project

### 3. Set Up Database (1 min)
In Supabase Dashboard:
1. Go to SQL Editor
2. Copy/paste contents of `supabase/migrations/20251214200420_create_consultation_requests.sql`
3. Click "Run"

### 4. Start Development Server (1 min)
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## ✅ Verify Everything Works

1. **Homepage loads** ✓
2. **Fill out the booking form** ✓
3. **Submit successfully** ✓
4. **Check Supabase dashboard** - you should see the submission in `consultation_requests` table ✓

## 🎨 What's New in v2.0?

### Security Upgrades
- ✅ React Hook Form + Zod validation (bulletproof forms)
- ✅ reCAPTCHA v3 (invisible bot protection)
- ✅ Input sanitization with DOMPurify (XSS prevention)
- ✅ Rate limiting (max 3 submissions per 15min)
- ✅ Security headers (CSP, XSS protection, etc.)

### Modern Tech Stack
- ✅ Migrated from custom CSS to **Tailwind CSS**
- ✅ Full TypeScript with strict mode
- ✅ ESLint + Prettier for code quality
- ✅ Sentry for error tracking
- ✅ Modular architecture

### GDPR Compliance
- ✅ Cookie consent banner
- ✅ Privacy Policy page
- ✅ Terms of Service page
- ✅ Data protection documentation

## 📁 Key Files to Customize

### 1. Branding & Content
- `src/components/Header.tsx` - Update logo and company name
- `src/components/Hero.tsx` - Update hero text
- `src/components/Footer.tsx` - Update contact info and links

### 2. Legal Pages
- `src/pages/PrivacyPolicy.tsx` - Add your business address
- `src/pages/TermsOfService.tsx` - Add your jurisdiction info

### 3. Services & Pricing
- `src/components/Services.tsx` - Update service descriptions
- `src/components/BookingForm.tsx` - Modify form fields if needed

### 4. Styling
- `tailwind.config.js` - Update colors and spacing
- `src/index.css` - Adjust global styles

## 🔧 Available Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format code with Prettier
```

## 🐛 Common Issues & Solutions

### "Missing environment variables"
**Problem**: Console shows "Missing Supabase environment variables"  
**Solution**: Create `.env` file with your Supabase keys (see step 2 above)

### Form submission fails
**Problem**: Form shows error after submission  
**Solution**: 
1. Check `.env` file has correct Supabase URL and key
2. Verify database migration ran successfully
3. Check browser console for specific error

### reCAPTCHA not loading
**Problem**: No reCAPTCHA badge in bottom-right  
**Solution**: Add your site key to `.env` and add `localhost` to reCAPTCHA domains

### Styling looks broken
**Problem**: No colors/spacing  
**Solution**: Make sure Tailwind CSS built correctly: `npm run build`

## 📚 Next Steps

1. **Customize Content**: Update company info, services, and pricing
2. **Test Thoroughly**: Submit test forms, check mobile responsiveness
3. **Deploy**: Follow `DEPLOYMENT.md` for production deployment
4. **Monitor**: Set up Sentry alerts and check Supabase dashboard regularly

## 🆘 Need Help?

- **Documentation**: See `README.md` for full details
- **Deployment**: See `DEPLOYMENT.md` for deployment guide
- **Environment Setup**: See `ENV_SETUP.md` for detailed env var info
- **Support**: Create an issue or email support

## 🎯 Testing Checklist

Before deploying to production:

- [ ] Form validation works (try submitting invalid data)
- [ ] Form submission succeeds
- [ ] Data appears in Supabase dashboard
- [ ] Cookie consent banner appears
- [ ] Privacy Policy page loads
- [ ] Terms of Service page loads
- [ ] All navigation links work
- [ ] Mobile responsive (test on phone)
- [ ] reCAPTCHA badge appears
- [ ] Rate limiting works (try 4+ submissions)

## 🚀 Ready to Deploy?

When you're ready to go live:
1. Read `DEPLOYMENT.md`
2. Get production API keys (reCAPTCHA, Sentry)
3. Deploy to Vercel (recommended) or your preferred platform
4. Test everything in production
5. Update reCAPTCHA domains to include production URL

---

**Version 2.0.0** - Modernized, Secured, GDPR-Compliant
**Happy Building! 🎉**

