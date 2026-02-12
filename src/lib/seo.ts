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
}

export function getSeoForPath(pathname: string): PageSeo | null {
  const path = pathname.replace(/\/$/, '') || '/'
  return SEO_BY_PATH[path] ?? null
}
