'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileCheck, Calendar } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Avoid Costly Visa Mistakes—Get Expert Assessment First
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Professional visa assessment and second opinion service to help South Africans apply correctly the first time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/contact?service=assessment">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                <FileCheck className="mr-2 h-5 w-5" />
                Get Visa Assessment (Paid)
              </Button>
            </Link>
            <Link href="/contact?service=consultation">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Not ready yet? Book a free consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
