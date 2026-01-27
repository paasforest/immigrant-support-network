# Deployment Guide

## Quick Start - Vercel Deployment

### Step 1: Prepare Your Repository

1. Ensure your code is pushed to GitHub
2. Verify `.env.example` is in the repository (not `.env` or `.env.local`)

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your `immigrantsupportnetwork-frontend` repository
5. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: Leave default

### Step 3: Configure Environment Variables

Add these environment variables in Vercel dashboard:

```
NEXT_PUBLIC_BACKEND_URL=https://your-backend-api-url.com
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Important Notes:**
- Get Supabase credentials from your Supabase project dashboard
- Replace placeholder values with actual credentials
- These are public variables (NEXT_PUBLIC_) so they're safe for client-side use

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Once deployed, Vercel will provide a URL like: `https://your-project.vercel.app`

### Step 5: Add Custom Domain

1. Go to Project Settings > Domains
2. Add `immigrantsupportnetwork.co.za`
3. Configure DNS records:
   - **Type**: A Record
   - **Name**: @ (root domain)
   - **Value**: 76.76.21.21

   OR

   - **Type**: CNAME
   - **Name**: www
   - **Value**: cname.vercel-dns.com

4. Add `www.immigrantsupportnetwork.co.za` as well
5. Wait for DNS propagation (5-60 minutes)

## Alternative: Manual Deployment

### Using Static Export

This project is configured with `output: 'export'` for static hosting.

```bash
# Build static files
npm run build

# Output directory: ./out
```

You can deploy the `out` directory to:
- **Netlify**: Drag and drop the `out` folder
- **GitHub Pages**: Push `out` folder to gh-pages branch
- **AWS S3**: Upload to S3 bucket with static hosting enabled
- **Any static hosting provider**

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Test AI assistant interaction
- [ ] Check responsive design on mobile
- [ ] Verify all internal links work
- [ ] Test affiliate links (travel deals)
- [ ] Check SEO meta tags in page source
- [ ] Test form validation
- [ ] Verify images load from Pexels
- [ ] Check browser console for errors

## Environment Variables Explained

### `NEXT_PUBLIC_BACKEND_URL`
Your backend API base URL for:
- AI assistant queries
- Contact form submissions
- Future API integrations

**Example**: `https://api.immigrantsupportnetwork.co.za`

### `NEXT_PUBLIC_SUPABASE_URL`
Your Supabase project URL from the Supabase dashboard.

**Find it**: Supabase Dashboard > Project Settings > API > Project URL

### `NEXT_PUBLIC_SUPABASE_ANON_KEY`
Your Supabase anonymous public key.

**Find it**: Supabase Dashboard > Project Settings > API > Project API keys > anon public

## Connecting Backend API

### AI Assistant Endpoint
Update `/api/ai/route.ts` to connect to your backend:

```typescript
const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ai`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ question }),
});
```

### Contact Form Endpoint
Update `/api/contact/route.ts` to connect to your backend:

```typescript
const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, subject, message }),
});
```

## Analytics Setup (Google Analytics)

### Step 1: Get GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a GA4 property for your website
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

### Step 2: Add to Environment Variables

In Vercel dashboard, add:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Step 3: Add Script to Layout

Update `app/layout.tsx`:

```typescript
import Script from 'next/script';

// In the component
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## Monitoring & Performance

### Vercel Analytics
Enable Vercel Analytics in project settings for:
- Real User Monitoring (RUM)
- Core Web Vitals
- Traffic analytics

### Performance Tips

1. **Images**: All Pexels images are already optimized via CDN
2. **Caching**: Static pages are automatically cached by Vercel
3. **Bundle Size**: Current first load JS is ~96KB (excellent)
4. **Lighthouse Score Target**: 90+ for all metrics

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run typecheck`
- Verify all imports are correct
- Check environment variables are set

### Pages Not Loading
- Verify deployment completed successfully
- Check browser console for errors
- Ensure DNS propagation is complete (for custom domain)

### API Calls Failing
- Verify `NEXT_PUBLIC_BACKEND_URL` is set correctly
- Check backend is deployed and accessible
- Inspect network tab in browser DevTools

### Forms Not Submitting
- Check API endpoints are deployed
- Verify CORS settings on backend
- Check browser console for errors

## Continuous Deployment

Vercel automatically deploys when you push to your repository:
- **Main branch** → Production deployment
- **Other branches** → Preview deployments

To trigger a new deployment:
```bash
git add .
git commit -m "Update content"
git push origin main
```

## Rollback

If you need to rollback to a previous version:
1. Go to Vercel dashboard > Deployments
2. Find the working deployment
3. Click "..." menu > Promote to Production

## Support

If you encounter issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review build logs in Vercel dashboard
- Contact Vercel support for deployment issues
