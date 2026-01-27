import BlogCard from '@/components/BlogCard';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export const metadata = {
  title: 'Immigration Blog | Immigrant Support Network',
  description: 'Latest news, guides, tips, and success stories about immigration and relocation.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: '10 Things to Know Before Moving to the UK in 2025',
      summary: 'Essential tips and requirements for South Africans planning to relocate to the United Kingdom this year. From visa applications to finding accommodation.',
      slug: '10-things-uk-2025',
      date: 'January 15, 2025',
      category: 'UK Immigration'
    },
    {
      title: 'Canada Express Entry: Complete Guide for 2025',
      summary: 'Everything you need to know about the Express Entry system and how to maximize your chances of receiving an invitation to apply.',
      slug: 'canada-express-entry-2025',
      date: 'January 10, 2025',
      category: 'Canada Immigration'
    },
    {
      title: 'Australian Skilled Migration: Points Test Explained',
      summary: 'A detailed breakdown of how the points-based system works for Australian skilled migration visas and how to improve your score.',
      slug: 'australia-points-test',
      date: 'January 5, 2025',
      category: 'Australia Immigration'
    },
    {
      title: 'How to Prepare for Your Visa Interview',
      summary: 'Expert tips on preparing for visa interviews, common questions, and what documentation to bring to increase your approval chances.',
      slug: 'visa-interview-tips',
      date: 'December 28, 2024',
      category: 'Visa Tips'
    },
    {
      title: 'Understanding the UK Skilled Worker Visa Requirements',
      summary: 'A comprehensive guide to the UK skilled worker visa, including salary thresholds, sponsorship requirements, and application process.',
      slug: 'uk-skilled-worker-visa',
      date: 'December 20, 2024',
      category: 'UK Immigration'
    },
    {
      title: 'Top 5 Countries for South African Emigrants in 2025',
      summary: 'Comparing visa policies, job markets, and quality of life in the most popular destination countries for South African emigrants.',
      slug: 'top-5-countries-2025',
      date: 'December 15, 2024',
      category: 'Immigration Guides'
    },
    {
      title: 'Document Checklist: Essential Papers for Immigration',
      summary: 'A complete checklist of documents you need for most visa applications, including how to obtain certified copies and translations.',
      slug: 'document-checklist',
      date: 'December 10, 2024',
      category: 'Visa Tips'
    },
    {
      title: 'Family Sponsorship in Canada: Everything You Need to Know',
      summary: 'Detailed guide on sponsoring family members to come to Canada, eligibility requirements, and processing times.',
      slug: 'canada-family-sponsorship',
      date: 'December 5, 2024',
      category: 'Canada Immigration'
    },
  ];

  const categories = ['All', 'UK Immigration', 'Canada Immigration', 'Australia Immigration', 'Visa Tips', 'Immigration Guides'];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Immigration Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Expert insights, guides, and tips for your immigration journey
          </p>
        </div>
      </header>

      <main className="flex-grow bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 py-6 text-base"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
