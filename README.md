# Immigrant Support Network - Frontend

A Next.js-powered web application providing comprehensive immigration guidance, visa information, AI-powered assistance, and travel deals for South Africans seeking opportunities abroad.

## Features

- **Home Page**: Hero banner with CTAs, featured destinations, and latest blog posts
- **Visa Guides**: Comprehensive visa information for 12+ countries
- **Country-Specific Pages**: Detailed visa requirements, documents, and application process
- **AI Assistant**: Interactive chat interface for immigration questions
- **Travel Deals**: Flights, hotels, and relocation packages
- **Blog**: Immigration tips, guides, and success stories
- **Contact Form**: Direct communication channel with support team

## Tech Stack

- **Framework**: Next.js 13.5.1 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (static export)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` file (use `.env.example` as template):

```env
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── ai/           # AI assistant endpoint
│   │   └── contact/      # Contact form endpoint
│   ├── visas/            # Visa guides pages
│   ├── travel/           # Travel deals page
│   ├── ai-assistant/     # AI assistant page
│   ├── blog/             # Blog listing page
│   ├── contact/          # Contact page
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── HeroBanner.tsx
│   ├── Footer.tsx
│   ├── CountryCard.tsx
│   ├── TravelCard.tsx
│   ├── BlogCard.tsx
│   └── AIChatBubble.tsx
└── lib/
    └── utils.ts          # Utility functions
```

## Pages Overview

### Home (`/`)
Landing page with hero section, features, popular destinations, and latest blog posts.

### Visas (`/visas`)
Complete list of countries with visa guides. Includes search functionality.

### Country Visa Guide (`/visas/[country]`)
Detailed visa information including:
- Processing times and fees
- Visa categories
- Required documents
- Application process
- Tips and guidance

### Travel Deals (`/travel`)
Tabbed interface showing:
- Flight deals
- Hotel accommodations
- Relocation packages

### AI Assistant (`/ai-assistant`)
Interactive chat interface for immigration questions with demo API integration.

### Blog (`/blog`)
Immigration news, tips, and guides with category filtering.

### Contact (`/contact`)
Contact form with validation and API integration.

## API Endpoints

### `/api/ai` (POST)
Handles AI assistant questions. Currently returns demo responses.

**Request:**
```json
{
  "question": "What documents do I need for a UK visa?"
}
```

**Response:**
```json
{
  "response": "AI-generated response text"
}
```

### `/api/contact` (POST)
Handles contact form submissions.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Visa inquiry",
  "message": "I need help with..."
}
```

## Deployment

### Vercel Deployment

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Configure environment variables
4. Deploy

### Environment Variables for Production

Set these in Vercel dashboard:
- `NEXT_PUBLIC_BACKEND_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Custom Domain

Connect domain `immigrantsupportnetwork.co.za` in Vercel settings.

## SEO Optimization

- Page-level metadata for all routes
- Open Graph tags for social sharing
- Semantic HTML structure
- Responsive meta viewport
- Descriptive page titles and descriptions

## Analytics Integration

To add Google Analytics:

1. Get Google Analytics ID (G-XXXXXXXXXX)
2. Add script to `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
</Script>
```

## Design Principles

- Mobile-first responsive design
- Clean, professional aesthetic using blue color scheme
- Consistent spacing using 8px grid system
- High contrast for readability
- Intuitive navigation with clear CTAs
- Fast loading with optimized images (Pexels stock photos)

## Future Enhancements

- [ ] Connect to real backend API
- [ ] Implement user authentication
- [ ] Add blog CMS integration
- [ ] Enable real-time chat support
- [ ] Add multilingual support
- [ ] Implement advanced search and filtering
- [ ] Add user testimonials section
- [ ] Create member dashboard

## Support

For questions or issues:
- Email: info@immigrantsupportnetwork.co.za
- Website: https://immigrantsupportnetwork.co.za

## License

Copyright © 2025 Immigrant Support Network. All rights reserved.
