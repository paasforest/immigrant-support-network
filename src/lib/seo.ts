const BASE = 'https://www.immigrantsupportnetwork.co.za'

export interface PageSeo {
  title: string
  description: string
  canonical: string
  ogTitle?: string
  ogDescription?: string
}

export const SEO_BY_PATH: Record<string, PageSeo> = {
  '/': {
    title: 'Trusted Immigration Consultants in South Africa | Immigrant Support Network',
    description:
      'Get expert visa assessments, document checks, and application support for UK, Schengen, USA, Canada, and Australia. Trusted by 10,000+ clients. Cape Town-based, serving South Africa virtually.',
    canonical: `${BASE}/`,
    ogTitle: 'Trusted Immigration Consultants in South Africa | Immigrant Support Network',
    ogDescription:
      'Get expert visa assessments, document checks, and application support for UK, Schengen, USA, Canada, and Australia. Trusted by 10,000+ clients.',
  },
  '/services': {
    title: 'Visa & Immigration Services | UK, Schengen, Canada, Australia | Immigrant Support Network',
    description:
      'Visa application support, study abroad guidance, work visas, Schengen visa assistance South Africa, UK visa help South Africa. Expert document review and visa assessment. Book via WhatsApp.',
    canonical: `${BASE}/services`,
    ogTitle: 'Visa & Immigration Services | Immigrant Support Network',
    ogDescription:
      'Expert visa application support for UK, Schengen, Canada, USA, Australia. Visa assessment South Africa, document review, 24/7 support.',
  },
  '/about': {
    title: 'About Us | Visa Consultants Cape Town | Immigrant Support Network',
    description:
      'Cape Town-based immigration consultants serving South Africa virtually. Mission, compliance, and how we help with visa assessment South Africa, UK visa help, Schengen visa assistance.',
    canonical: `${BASE}/about`,
    ogTitle: 'About Immigrant Support Network | Visa Consultants Cape Town',
    ogDescription:
      'Cape Town-based visa and immigration consultancy serving clients across South Africa virtually. Trusted by 10,000+ clients.',
  },
  '/contact': {
    title: 'Contact Us | Book Visa Consultation via WhatsApp | Immigrant Support Network',
    description:
      'Contact Immigrant Support Network via WhatsApp for visa assessment and consultation. Cape Town-based, serving South Africa. Fast response during business hours.',
    canonical: `${BASE}/contact`,
    ogTitle: 'Contact | Immigrant Support Network',
    ogDescription: 'Book your visa consultation via WhatsApp. Cape Town-based, serving South Africa virtually.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Immigrant Support Network',
    description: 'How Immigrant Support Network collects and uses your information. Privacy policy for visa consultancy services.',
    canonical: `${BASE}/privacy-policy`,
  },
  '/terms': {
    title: 'Terms of Service | Immigrant Support Network',
    description: 'Terms of service for using Immigrant Support Network visa and immigration consultancy services.',
    canonical: `${BASE}/terms`,
  },
  '/visa-updates': {
    title: 'Visa & Immigration Updates | UK, Schengen, Canada, Australia | Immigrant Support Network',
    description:
      'Latest visa and immigration changes: UK Skilled Worker, Schengen ETIAS, Canada Express Entry, Australia, Germany. Manual updates for applicants from South Africa. Always confirm with official sources.',
    canonical: `${BASE}/visa-updates`,
    ogTitle: 'Visa & Immigration Updates | Immigrant Support Network',
    ogDescription:
      'Visa rule changes and updates for UK, Schengen, Canada, Australia, Germany. For applicants from South Africa.',
  },
  '/blog': {
    title: 'Blog & Resources | Overseas Jobs & Work Visa Guidance | Immigrant Support Network',
    description:
      'Guides on overseas jobs for Africans, work visas, legal work permits, and how to apply safely to jobs abroad. Expert tips from Immigrant Support Network.',
    canonical: `${BASE}/blog`,
    ogTitle: 'Blog & Resources | Immigrant Support Network',
    ogDescription:
      'Guides on overseas jobs, work visas, and applying safely. Expert tips from Immigrant Support Network.',
  },
  '/blog/top-countries-hiring-2026': {
    title: 'Top 5 Countries Hiring Skilled African Workers in 2026 | Immigrant Support Network',
    description:
      'Which countries are actively recruiting African talent? UK, Canada, Germany, Australia, New Zealand. Learn where demand is highest for overseas jobs.',
    canonical: `${BASE}/blog/top-countries-hiring-2026`,
  },
  '/blog/step-by-step-work-permits': {
    title: 'Step-by-Step Guide to Legal Work Permits Abroad | Immigrant Support Network',
    description:
      'A clear roadmap from application to approval. Understand documents, timelines, and what licensed recruiters expect for work visa applications.',
    canonical: `${BASE}/blog/step-by-step-work-permits`,
  },
  '/blog/how-to-apply-safely': {
    title: 'How Africans Can Apply Safely to Jobs Overseas | Immigrant Support Network',
    description:
      'Avoid scams and fake job offers. Learn how to verify employers, protect your documents, and work with legitimate recruitment partners.',
    canonical: `${BASE}/blog/how-to-apply-safely`,
  },
  '/overseas-employment-support': {
    title: 'Overseas Job Assistance & Work Visa Support | Immigrant Support Network',
    description:
      'Get expert support applying for verified overseas jobs and work visas. Partnering with licensed recruiters, we help Africans secure real opportunities abroad.',
    canonical: `${BASE}/overseas-employment-support`,
    ogTitle: 'Overseas Job Assistance & Work Visa Support | Immigrant Support Network',
    ogDescription:
      'Get expert support applying for verified overseas jobs and work visas. We help Africans connect with licensed recruiters and apply legally for work opportunities abroad.',
  },
}

export function getSeoForPath(pathname: string): PageSeo | null {
  const path = pathname.replace(/\/$/, '') || '/'
  return SEO_BY_PATH[path] ?? null
}
