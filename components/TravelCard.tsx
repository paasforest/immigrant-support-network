import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface TravelCardProps {
  title: string;
  type: string;
  price?: string;
  description: string;
  affiliateLink: string;
  imageUrl?: string;
}

export default function TravelCard({ title, type, price, description, affiliateLink, imageUrl }: TravelCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300">
      {imageUrl && (
        <div className="h-48 w-full overflow-hidden rounded-t-lg">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">
            {type}
          </span>
          {price && <span className="text-lg font-bold text-slate-900">{price}</span>}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
          <Button className="w-full">
            View Deal
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
