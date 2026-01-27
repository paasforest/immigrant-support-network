import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { CheckCircle, FileText, Clock, DollarSign, AlertCircle, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Visa Guide | Immigrant Support Network',
  description: 'Detailed visa requirements, documents, and application process',
};

export async function generateStaticParams() {
  const countries = [
    'united-kingdom',
    'canada',
    'australia',
    'united-states',
    'new-zealand',
    'germany',
    'netherlands',
    'ireland',
    'portugal',
    'spain',
    'france',
    'singapore',
  ];

  return countries.map((country) => ({
    country: country,
  }));
}

export default function CountryVisaPage({ params }: { params: { country: string } }) {
  const countryName = params.country.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-100 mb-4">
            <Link href="/visas" className="hover:text-white">Visa Guides</Link>
            <span>/</span>
            <span>{countryName}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{countryName} Visa Guide</h1>
          <p className="text-xl text-blue-100">
            Complete guide to visa requirements and immigration process
          </p>
        </div>
      </header>

      <main className="flex-grow bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Need Personalized Guidance?</h3>
                <p className="text-blue-800 mb-3">
                  Get instant answers to your specific questions about {countryName} visas
                </p>
                <Link href="/ai-assistant">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Ask AI Assistant
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="pb-3">
                <Clock className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Processing Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-slate-900">4-12 weeks</p>
                <p className="text-sm text-muted-foreground mt-1">Average processing period</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <DollarSign className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Application Fee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-slate-900">Varies</p>
                <p className="text-sm text-muted-foreground mt-1">By visa category</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <FileText className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Validity Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-slate-900">1-5 years</p>
                <p className="text-sm text-muted-foreground mt-1">Renewable options available</p>
              </CardContent>
            </Card>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Visa Categories</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Skilled Worker Visa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    For professionals with a job offer from an approved employer. Requires specific qualifications and salary thresholds.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Most Popular</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Pathway to PR</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Family Sponsorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    For immediate family members of citizens or permanent residents. Includes spouse, children, and dependent relatives.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Student Visa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    For those accepted to recognized educational institutions. May include work rights during and after studies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Required Documents</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Valid passport with at least 6 months validity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Completed visa application form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Recent passport-sized photographs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Proof of financial means and bank statements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Job offer letter or admission letter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Educational qualifications and transcripts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Police clearance certificate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Medical examination results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Proof of accommodation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Application Process</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Determine Eligibility', description: 'Review requirements for your visa category and ensure you meet all criteria' },
                { step: 2, title: 'Gather Documents', description: 'Collect all required documents and have them translated if necessary' },
                { step: 3, title: 'Complete Application', description: 'Fill out the online application form accurately and completely' },
                { step: 4, title: 'Pay Fees', description: 'Submit application fees and biometric fees as required' },
                { step: 5, title: 'Attend Interview', description: 'If required, attend visa interview at designated location' },
                { step: 6, title: 'Wait for Decision', description: 'Track your application status online while awaiting approval' },
                { step: 7, title: 'Receive Visa', description: 'Collect your visa and prepare for travel' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Important Tips</h2>
            <Card className="bg-slate-50">
              <CardContent className="pt-6">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Apply well in advance of your intended travel date</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Ensure all documents are current and properly certified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Be honest and accurate in all application responses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Keep copies of all submitted documents for your records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Consider professional assistance for complex cases</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          <section className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
            <p className="text-slate-600 mb-6">
              Get personalized answers about your {countryName} visa application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-assistant">
                <Button size="lg">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Ask AI Assistant
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Expert
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
