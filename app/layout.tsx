import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://immigrantsupportnetwork.co.za'),
  title: 'Immigrant Support Network | Visa Guides, AI Assistance & Travel Deals',
  description: 'Your trusted partner for immigration guidance. Get expert visa guides, AI-powered assistance, and exclusive travel deals for South Africans moving abroad.',
  keywords: 'immigration, visa guides, South Africa, UK visa, Canada visa, Australia visa, travel deals, AI assistant',
  authors: [{ name: 'Immigrant Support Network' }],
  openGraph: {
    title: 'Immigrant Support Network',
    description: 'Expert visa guidance and immigration support for South Africans',
    url: 'https://immigrantsupportnetwork.co.za',
    siteName: 'Immigrant Support Network',
    locale: 'en_ZA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
        <WhatsAppButton />
      </body>
    </html>
  );
}
