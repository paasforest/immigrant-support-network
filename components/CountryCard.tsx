import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

interface CountryCardProps {
  country: string;
  flag: string;
  slug: string;
  description?: string;
}

export default function CountryCard({ country, flag, slug, description }: CountryCardProps) {
  return (
    <Link href={`/visas/${slug}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-500">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <span className="text-5xl">{flag}</span>
            <CardTitle className="text-xl">{country}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description || `Complete visa guide and requirements for ${country}`}
          </p>
          <div className="flex items-center text-blue-600 font-medium text-sm">
            View Guide
            <ChevronRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
