'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppButton() {
  // WhatsApp number (format: country code + number without +)
  const whatsappNumber = '27679518124';
  const whatsappMessage = 'Hello, I need help with my visa application.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-2">
        <p className="text-xs text-slate-600 bg-white px-3 py-1 rounded-md shadow-sm max-w-[200px] text-right">
          For serious applicants who want professional guidance
        </p>
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full h-14 w-14 p-0 shadow-lg hover:shadow-xl transition-all"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
