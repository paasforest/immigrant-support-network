# SEO validation after deployment

## 1. Noindex
- No `noindex` meta tags were found on any public pages in the repo. Only public pages (home, services, about, contact, privacy, terms) are linked; none block indexing.

## 2. Sitemap
- **URL:** https://www.immigrantsupportnetwork.co.za/sitemap.xml  
- **File:** `public/sitemap.xml` (copied to site root on build)  
- **Submit in Google Search Console:**  
  - Open [Google Search Console](https://search.google.com/search-console) → your property → Sitemaps  
  - Add: `https://www.immigrantsupportnetwork.co.za/sitemap.xml` → Submit  

## 3. Canonical URLs
- Each public page has a canonical set by the **SeoHead** component from `src/lib/seo.ts`:  
  - Home: `https://www.immigrantsupportnetwork.co.za/`  
  - Services: `https://www.immigrantsupportnetwork.co.za/services`  
  - About: `https://www.immigrantsupportnetwork.co.za/about`  
  - Contact: `https://www.immigrantsupportnetwork.co.za/contact`  
  - Privacy: `https://www.immigrantsupportnetwork.co.za/privacy-policy`  
  - Terms: `https://www.immigrantsupportnetwork.co.za/terms`  
- No duplicate canonical tags (single canonical per page).

## 4. Meta titles & descriptions
- Stored in `src/lib/seo.ts` and applied by `SeoHead` on route change.  
- Default (home) in `index.html`:  
  - Title: *Trusted Immigration Consultants in South Africa | Immigrant Support Network*  
  - Description: *Get expert visa assessments, document checks, and application support for UK, Schengen, USA, Canada, and Australia. Trusted by 10,000+ clients.*

## 5. Schema (JSON-LD)
- **Homepage (in `index.html`):** Organization, LocalBusiness, BreadcrumbList.  
- **FAQ (in `FAQ.tsx`):** FAQPage with all FAQ Q&As (home + services).  
- **Services page:** Service schema with provider and areaServed.  
- **Validate:** [Google Rich Results Test](https://search.google.com/test/rich-results) — paste each page URL after deploy.

## 6. Internal linking
- Hero → `/services` (Visa Assessment).  
- Services intro → `/services`, `/contact` (UK, Schengen, Canada, visa assessment South Africa, Book via WhatsApp).  
- About → `/services`, `/contact` (UK, Schengen, Canada, visa assessment, UK visa help, contact page).  
- Contact → `/services`, `/about`.

## 7. Content depth
- About and Services pages have expanded copy with target phrases (e.g. visa assessment South Africa, UK visa help South Africa, Schengen visa assistance South Africa, Cape Town, 10,000+ clients, 24/7 support).  
- Homepage already has trust signals and CTAs.

## 8. Post-deploy checks
1. Open each live URL and “View page source” — confirm `<title>`, `<meta name="description">`, `<link rel="canonical">`.  
2. Run Rich Results Test on homepage and /services.  
3. In Search Console: submit sitemap, then use URL Inspection for key URLs and request indexing.  
4. Use the Performance report to monitor clicks and impressions.
