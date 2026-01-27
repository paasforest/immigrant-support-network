import CountryCard from '@/components/CountryCard';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const metadata = {
  title: 'Visa Guides by Country | Immigrant Support Network',
  description: 'Comprehensive visa guides and immigration requirements for popular destinations including UK, Canada, Australia, and more.',
};

export default function VisasPage() {
  const countries = [
    { country: 'United Kingdom', flag: '🇬🇧', slug: 'united-kingdom', description: 'Work visas, skilled worker routes, and post-Brexit requirements' },
    { country: 'Canada', flag: '🇨🇦', slug: 'canada', description: 'Express Entry, Provincial Nominee Programs, and family sponsorship' },
    { country: 'Australia', flag: '🇦🇺', slug: 'australia', description: 'Skilled migration, work visas, and permanent residency pathways' },
    { country: 'United States', flag: '🇺🇸', slug: 'united-states', description: 'Work visas, green cards, and immigration options' },
    { country: 'New Zealand', flag: '🇳🇿', slug: 'new-zealand', description: 'Skilled migrant category and work to residence pathways' },
    { country: 'Germany', flag: '🇩🇪', slug: 'germany', description: 'EU Blue Card, job seeker visa, and skilled worker programs' },
    { country: 'Netherlands', flag: '🇳🇱', slug: 'netherlands', description: 'Highly skilled migrant visa and DAFT treaty benefits' },
    { country: 'Ireland', flag: '🇮🇪', slug: 'ireland', description: 'Critical skills permits and general employment permits' },
    { country: 'Portugal', flag: '🇵🇹', slug: 'portugal', description: 'Golden visa program and D7 passive income visa' },
    { country: 'Spain', flag: '🇪🇸', slug: 'spain', description: 'Non-lucrative visa and entrepreneur visa options' },
    { country: 'France', flag: '🇫🇷', slug: 'france', description: 'Talent passport and skilled worker requirements' },
    { country: 'Singapore', flag: '🇸🇬', slug: 'singapore', description: 'Employment pass and entrepass for entrepreneurs' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Visa Guides by Country</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Explore comprehensive immigration guides for your destination country
          </p>
        </div>
      </header>

      <main className="flex-grow bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for a country..."
                className="pl-10 py-6 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {countries.map((country) => (
              <CountryCard key={country.slug} {...country} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
