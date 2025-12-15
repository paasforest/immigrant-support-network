# Immigrant Support Network

A modern, secure, and GDPR-compliant immigration consultation platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Functionality
- ✅ Free consultation booking system
- ✅ Comprehensive service information
- ✅ Mobile-responsive design
- ✅ Smooth scrolling navigation
- 🤖 **AI Chat Assistant**: GPT-4 powered immigration assistant (auto-enables after 6 months)

### Security & Privacy
- 🔒 **Form Validation**: React Hook Form + Zod schema validation
- 🤖 **Bot Protection**: Google reCAPTCHA v3 integration
- 🛡️ **Input Sanitization**: DOMPurify for XSS prevention
- 🚦 **Rate Limiting**: Supabase Edge Functions
- 📋 **GDPR Compliance**: Cookie consent, Privacy Policy, Terms of Service
- 🔐 **Security Headers**: CSP, XSS Protection, Frame Options

### Development & Monitoring
- 🐛 **Error Tracking**: Sentry integration
- 📊 **Type Safety**: Full TypeScript with strict mode
- 🎨 **Modern Styling**: Tailwind CSS with custom design system
- ✨ **Code Quality**: ESLint + Prettier
- 🗄️ **Database**: Supabase with Row Level Security (RLS)

## 📋 Tech Stack

- **Frontend**: React 18.2, TypeScript 5.2
- **Styling**: Tailwind CSS 3.4
- **Form Handling**: React Hook Form + Zod validation
- **Database**: Supabase (PostgreSQL with RLS)
- **Security**: reCAPTCHA v3, DOMPurify, Rate Limiting
- **AI**: OpenAI GPT-4 Turbo (intelligent chat assistant)
- **Monitoring**: Sentry error tracking
- **Build Tool**: Vite 5.0
- **Code Quality**: ESLint, Prettier

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone <repository-url>
cd immgrant
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory. See `ENV_SETUP.md` for detailed instructions.

Required variables:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

Optional variables:
```env
VITE_SENTRY_DSN=your_sentry_dsn
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_ENABLE_AI_CHAT=false
VITE_ENV=development
```

**📚 See `ENV_SETUP.md` for detailed setup instructions**

### 3. Database Setup

Run the Supabase migration:

```bash
# If using Supabase CLI
supabase db push

# Or manually run the SQL file in Supabase dashboard
# File: supabase/migrations/20251214200420_create_consultation_requests.sql
```

### 4. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
npm run preview  # Preview production build
```

## 📦 Project Structure

```
immgrant/
├── src/
│   ├── components/          # React components
│   │   ├── BookingForm.tsx  # Main consultation form
│   │   ├── CookieConsent.tsx # GDPR cookie consent
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Landing hero section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── HowItWorks.tsx   # Process explanation
│   │   ├── WhyChooseUs.tsx  # Benefits section
│   │   └── Footer.tsx       # Site footer
│   ├── contexts/            # React contexts
│   │   └── RecaptchaProvider.tsx
│   ├── hooks/               # Custom React hooks
│   │   └── useRecaptcha.ts
│   ├── lib/                 # Utility functions
│   │   ├── config.ts        # App configuration
│   │   ├── sanitize.ts      # Input sanitization
│   │   ├── sentry.ts        # Error tracking
│   │   ├── supabase.ts      # Database client
│   │   ├── utils.ts         # Helper functions
│   │   └── validation.ts    # Zod schemas
│   ├── pages/               # Full page components
│   │   ├── PrivacyPolicy.tsx
│   │   └── TermsOfService.tsx
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind CSS imports
├── supabase/
│   ├── migrations/          # Database migrations
│   └── functions/           # Edge Functions
│       └── rate-limit/      # Rate limiting function
├── .eslintrc.cjs            # ESLint configuration
├── .prettierrc              # Prettier configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## 🔐 Security Features

### 1. Form Security
- **Validation**: Zod schema validation on client-side
- **Sanitization**: DOMPurify removes malicious content
- **Bot Protection**: reCAPTCHA v3 invisible verification
- **Rate Limiting**: Max 3 submissions per IP per 15 minutes

### 2. Database Security
- **Row Level Security (RLS)**: Enabled on all tables
- **Policies**: Anonymous users can only INSERT, authenticated users can view/manage
- **Type Safety**: Full TypeScript types for database operations

### 3. Application Security
- **Security Headers**: CSP, XSS Protection, Frame Options, etc.
- **Input Validation**: Both client-side and server-side
- **Error Handling**: Sentry for error tracking and monitoring
- **HTTPS Only**: Enforced in production

## 🤖 AI Chat Assistant

The platform includes an intelligent GPT-4 powered chat assistant that understands immigration queries.

### Features:
- ✅ Trained on your business (services, pricing, values)
- ✅ Natural language understanding
- ✅ Lead qualification
- ✅ 24/7 availability
- ✅ Handles refusal cases intelligently
- ✅ Differentiates between ISN and Immigration AI

### Auto-Enable Schedule:
- **Launch Date**: December 15, 2025
- **Auto-Enable Date**: June 15, 2026 (6 months later)
- **Current Status**: Hidden (testable via `?testchat=true`)

### Testing Before Launch:
```bash
# Visit with test flag
http://localhost:3000/?testchat=true

# Or enable in .env
VITE_ENABLE_AI_CHAT=true
```

### Cost:
- GPT-4: ~$10-20/month for 1,000 conversations
- GPT-3.5: ~$1-3/month for 1,000 conversations

### Documentation:
- **Quick Start**: See `AI_CHAT_QUICKSTART.md` (5 minutes)
- **Full Guide**: See `AI_CHAT_GUIDE.md` (complete documentation)
- **Knowledge Base**: Edit `src/lib/aiKnowledgeBase.ts`

## 📊 GDPR Compliance

- ✅ Cookie consent banner
- ✅ Privacy Policy page
- ✅ Terms of Service page
- ✅ Data retention policies
- ✅ User rights documentation (access, rectification, erasure, etc.)
- ✅ Clear data processing disclosure

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` file includes all necessary security headers.

### Other Platforms

Ensure these environment variables are set:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_RECAPTCHA_SITE_KEY`

## 🧪 Testing Checklist

- [ ] Form validation works correctly
- [ ] reCAPTCHA verification triggers
- [ ] Rate limiting prevents spam (test 4+ submissions)
- [ ] Cookie consent banner appears for new visitors
- [ ] Privacy Policy and Terms pages are accessible
- [ ] All links work correctly
- [ ] Mobile responsive design works
- [ ] Error messages display properly
- [ ] Success message shows after form submission
- [ ] Supabase data is correctly stored
- [ ] AI Chat works with `?testchat=true`
- [ ] WhatsApp button functions correctly
- [ ] Immigration AI partnership section displays

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
```

## 🔧 Configuration

### Tailwind CSS
Custom colors and spacing defined in `tailwind.config.js` to match the original design system.

### TypeScript
Strict mode enabled with comprehensive type checking.

### ESLint & Prettier
Configured for React, TypeScript, and Tailwind CSS best practices.

## 📄 License

[Your License Here]

## 🤝 Support

For questions or issues:
- Email: info@immigrantsupportnetwork.com
- Create an issue in this repository

## 📚 Additional Resources

- See `ENV_SETUP.md` for environment variable setup
- See Privacy Policy in `/src/pages/PrivacyPolicy.tsx`
- See Terms of Service in `/src/pages/TermsOfService.tsx`

---

**Version 2.0.0** - Complete modernization with security, GDPR compliance, and Tailwind CSS

