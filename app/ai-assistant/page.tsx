import AIChatBubble from '@/components/AIChatBubble';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Clock, Shield, Zap } from 'lucide-react';

export const metadata = {
  title: 'AI Immigration Assistant | Immigrant Support Network',
  description: 'Get instant answers to your immigration questions with our AI-powered assistant. Available 24/7 to help with visa queries.',
};

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Immigration Assistant</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Get instant, accurate answers to your immigration questions powered by advanced AI
          </p>
        </div>
      </header>

      <main className="flex-grow bg-slate-50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Card>
              <CardHeader className="pb-3">
                <Brain className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-base">Smart Answers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  AI trained on immigration laws and requirements
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Clock className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-base">24/7 Available</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get help anytime, day or night
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-base">Instant Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No waiting for email replies
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-base">Confidential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your questions remain private
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <AIChatBubble />
          </div>

          <div className="bg-white rounded-lg p-8 border">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Example Questions You Can Ask</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-700 font-medium mb-2">Visa Requirements</p>
                <p className="text-sm text-slate-600">
                  What documents do I need for a UK skilled worker visa?
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-700 font-medium mb-2">Processing Times</p>
                <p className="text-sm text-slate-600">
                  How long does Canada Express Entry typically take?
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-700 font-medium mb-2">Eligibility</p>
                <p className="text-sm text-slate-600">
                  Am I eligible for Australian permanent residency?
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-700 font-medium mb-2">Costs</p>
                <p className="text-sm text-slate-600">
                  What are the total costs for a New Zealand work visa?
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-700 font-medium mb-2">Family Migration</p>
                <p className="text-sm text-slate-600">
                  Can my spouse work on a dependent visa in the UK?
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-700 font-medium mb-2">Pathways</p>
                <p className="text-sm text-slate-600">
                  What is the fastest route to permanent residency in Canada?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Important Note</h3>
            <p className="text-amber-800 text-sm">
              While our AI assistant provides helpful information based on current immigration policies,
              it should not replace professional legal advice. For complex cases or official applications,
              we recommend consulting with a licensed immigration consultant or attorney.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
