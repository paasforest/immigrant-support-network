# Deployment Guide

This guide will walk you through deploying your Immigrant Support Network application to production.

## Prerequisites

- [ ] Supabase project created and configured
- [ ] reCAPTCHA v3 keys obtained from Google
- [ ] (Optional) Sentry project created for error tracking
- [ ] GitHub repository set up
- [ ] Vercel account (or alternative hosting platform)

## Step 1: Supabase Setup

### 1.1 Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for project to be provisioned

### 1.2 Run Database Migration
1. Go to SQL Editor in Supabase dashboard
2. Copy contents of `supabase/migrations/20251214200420_create_consultation_requests.sql`
3. Paste and run the SQL
4. Verify the `consultation_requests` table was created

### 1.3 Get API Credentials
1. Go to Project Settings > API
2. Copy the following:
   - Project URL (VITE_SUPABASE_URL)
   - anon public key (VITE_SUPABASE_ANON_KEY)

### 1.4 Deploy Edge Function (Optional)
If using the rate limiting edge function:

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Deploy the function
supabase functions deploy rate-limit

# Set environment variables for the function
supabase secrets set RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

## Step 2: reCAPTCHA Setup

### 2.1 Register Your Site
1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Click "Create" (+)
3. Fill in:
   - Label: "Immigrant Support Network"
   - reCAPTCHA type: reCAPTCHA v3
   - Domains: Add your production domain (e.g., `immigrantsupportnetwork.com`)
4. Accept terms and submit

### 2.2 Get Keys
- Copy the **Site Key** (VITE_RECAPTCHA_SITE_KEY) - for frontend
- Copy the **Secret Key** - for backend/Edge Functions

## Step 3: Sentry Setup (Optional but Recommended)

### 3.1 Create Sentry Project
1. Go to [sentry.io](https://sentry.io)
2. Create account or sign in
3. Create new project
4. Select "React" as platform
5. Copy the DSN (VITE_SENTRY_DSN)

## Step 4: Vercel Deployment

### 4.1 Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Framework Preset: Vite
5. Root Directory: `./`

### 4.2 Configure Environment Variables
Add the following in Vercel dashboard under "Environment Variables":

**Required:**
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

**Optional:**
```
VITE_SENTRY_DSN=your_sentry_dsn
VITE_ENV=production
```

### 4.3 Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Vercel will provide you with a URL

### 4.4 Configure Custom Domain (Optional)
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update reCAPTCHA domains to include your custom domain

## Step 5: Post-Deployment Verification

### 5.1 Functional Testing
- [ ] Visit your deployed site
- [ ] Test form submission
- [ ] Verify data appears in Supabase dashboard
- [ ] Check cookie consent banner appears
- [ ] Test Privacy Policy and Terms pages
- [ ] Verify navigation works
- [ ] Test on mobile devices

### 5.2 Security Testing
- [ ] Verify HTTPS is enforced
- [ ] Check security headers (use securityheaders.com)
- [ ] Test reCAPTCHA verification
- [ ] Test rate limiting (submit form 4+ times)
- [ ] Verify input sanitization

### 5.3 Performance Testing
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test page load speed
- [ ] Verify images are optimized
- [ ] Check mobile performance

## Step 6: Update reCAPTCHA Domain

After deployment, add your production domain to reCAPTCHA:
1. Go back to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Select your site
3. Click Settings (gear icon)
4. Add your production domain to the domains list
5. Save

## Step 7: Monitor and Maintain

### Monitoring
- Set up Sentry alerts for errors
- Monitor Supabase dashboard for database issues
- Check Vercel analytics for traffic patterns

### Regular Updates
- Update dependencies monthly: `npm update`
- Review security advisories: `npm audit`
- Update privacy policy as needed
- Review and respond to consultation requests

## Alternative Deployment Options

### Netlify
1. Similar to Vercel setup
2. Create `netlify.toml` for configuration
3. Add environment variables in Netlify dashboard

### AWS Amplify
1. Connect GitHub repository
2. Configure build settings for Vite
3. Add environment variables

### Self-Hosted (VPS/Docker)
1. Build the project: `npm run build`
2. Serve the `dist` folder with Nginx or Apache
3. Configure SSL certificate (Let's Encrypt)
4. Set up reverse proxy
5. Configure security headers in web server

## Troubleshooting

### Form Submissions Not Working
- Check Supabase connection in browser console
- Verify environment variables are set correctly
- Check Supabase RLS policies are enabled
- Verify API keys have correct permissions

### reCAPTCHA Not Loading
- Verify site key is correct
- Check domain is added to reCAPTCHA admin
- Ensure CSP headers allow Google domains

### Rate Limiting Not Working
- Verify Edge Function is deployed
- Check Edge Function logs in Supabase
- Test with different IPs or use VPN

### Styling Issues
- Clear browser cache
- Check Tailwind CSS is building correctly
- Verify PostCSS configuration

## Security Checklist

Before going live:
- [ ] All environment variables are set in production
- [ ] HTTPS is enforced
- [ ] Security headers are configured
- [ ] reCAPTCHA is working
- [ ] Rate limiting is enabled
- [ ] Privacy Policy is updated with correct information
- [ ] Terms of Service is updated with correct information
- [ ] Contact email addresses are updated
- [ ] Cookie consent is functioning
- [ ] GDPR compliance is verified
- [ ] Error tracking is set up
- [ ] Backups are configured for Supabase

## Support

If you encounter issues during deployment:
1. Check logs in Vercel/Netlify dashboard
2. Check Supabase logs
3. Check browser console for errors
4. Review Sentry error reports
5. Contact support: developer@immigrantsupportnetwork.com

---

**Last Updated:** December 14, 2024

