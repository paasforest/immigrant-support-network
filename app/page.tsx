import HeroBanner from '@/components/HeroBanner';
import CountryCard from '@/components/CountryCard';
import BlogCard from '@/components/BlogCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { MessageSquare, Globe, Plane, FileCheck, Scale, GraduationCap, CheckCircle2, XCircle } from 'lucide-react';

export default function Home() {
  const popularCountries = [
    { country: 'United Kingdom', flag: '🇬🇧', slug: 'united-kingdom', description: 'Work visas, skilled worker routes, and post-Brexit requirements' },
    { country: 'Canada', flag: '🇨🇦', slug: 'canada', description: 'Express Entry, Provincial Nominee Programs, and family sponsorship' },
    { country: 'Australia', flag: '🇦🇺', slug: 'australia', description: 'Skilled migration, work visas, and permanent residency pathways' },
    { country: 'United States', flag: '🇺🇸', slug: 'united-states', description: 'Work visas, green cards, and immigration options' },
  ];

  const recentBlogs = [
    {
      title: '10 Things to Know Before Moving to the UK in 2025',
      summary: 'Essential tips and requirements for South Africans planning to relocate to the United Kingdom this year.',
      slug: '10-things-uk-2025',
      date: 'January 15, 2025',
      category: 'UK Immigration'
    },
    {
      title: 'Canada Express Entry: Complete Guide for 2025',
      summary: 'Everything you need to know about the Express Entry system and how to maximize your chances.',
      slug: 'canada-express-entry-2025',
      date: 'January 10, 2025',
      category: 'Canada Immigration'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HeroBanner />

      <main className="flex-grow">
        {/* Paid Entry Service Block */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white border-b-4 border-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-2 border-blue-600 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                  Visa Assessment & Second Opinion
                </CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Recommended before applying to avoid costly mistakes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-slate-700 mb-4 max-w-2xl mx-auto">
                    Get a professional review of your visa application documents, eligibility assessment, and expert guidance on how to strengthen your application before submission.
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-4xl font-bold text-blue-600">R499</span>
                    <span className="text-slate-600">one-time assessment</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link href="/contact?service=assessment">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                      <FileCheck className="mr-2 h-5 w-5" />
                      Start Visa Assessment
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Immigrant Support Network?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Your trusted partner for visa guidance, travel planning, and immigration support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Guides</h3>
                <p className="text-slate-600">Detailed visa requirements and step-by-step guides for your destination country</p>
              </div>

              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Travel Deals</h3>
                <p className="text-slate-600">Exclusive travel packages, flights, and accommodation deals for your journey</p>
              </div>

              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Assessment</h3>
                <p className="text-slate-600">Professional document review and second opinion service to strengthen your application</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Badges */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Professional immigration support tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-yellow-500 text-white">⭐ MOST POPULAR</Badge>
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                    Visa Application Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Complete guidance through your visa application process with document preparation and expert review.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-red-500 text-white">⚠️ COMPLEX CASES</Badge>
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-6 w-6 text-blue-600" />
                    Appeals & Refusals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Expert assistance for visa refusals and appeals, including second opinion assessments and appeal strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-500 text-white">🎓 STUDENTS</Badge>
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    Study Abroad Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Comprehensive support for student visa applications, including course selection and financial planning guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Tools Section - Repositioned with Disclaimer */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <p className="text-sm text-slate-500 italic mb-6">
                AI tools are best used alongside professional expert review for stronger applications.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-lg p-8 inline-block">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Assistance</h3>
                <p className="text-slate-600 mb-6 max-w-md">
                  Get instant answers to your immigration questions 24/7 with our intelligent AI assistant. Use it as a starting point, then consult with our experts for personalized guidance.
                </p>
                <Link href="/ai-assistant">
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Try AI Assistant
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Popular Destinations</h2>
                <p className="text-slate-600">Explore visa guides for top destinations</p>
              </div>
              <Link href="/visas">
                <Button variant="outline">View All Countries</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCountries.map((country) => (
                <CountryCard key={country.slug} {...country} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Latest Insights</h2>
                <p className="text-slate-600">Immigration news, tips, and success stories</p>
              </div>
              <Link href="/blog">
                <Button variant="outline">View All Posts</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentBlogs.map((blog) => (
                <BlogCard key={blog.slug} {...blog} />
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For / Not For Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle2 className="h-6 w-6" />
                    This service is for you if:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You want to apply correctly the first time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You need expert document preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You've been refused before and want a second opinion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <XCircle className="h-6 w-6" />
                    This service is NOT for you if:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>You want guaranteed visa approval</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>You are unwilling to provide accurate documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>You are looking for shortcuts or false promises</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900 text-center">
                <strong>Legal Notice:</strong> We are not a law firm. Visa approvals are not guaranteed and depend on individual circumstances and government decisions. Our services provide guidance and support to help strengthen your application.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your Immigration Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a professional visa assessment or speak with an expert
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=assessment">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <FileCheck className="mr-2 h-5 w-5" />
                  Get Visa Assessment
                </Button>
              </Link>
              <Link href="/contact?service=consultation">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Not ready yet? Book a free consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
