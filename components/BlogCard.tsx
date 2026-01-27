import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ChevronRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  summary: string;
  slug: string;
  date: string;
  category?: string;
}

export default function BlogCard({ title, summary, slug, date, category }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
            {category && (
              <>
                <span>•</span>
                <span className="text-blue-600 font-medium">{category}</span>
              </>
            )}
          </div>
          <CardTitle className="text-xl leading-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{summary}</p>
          <div className="flex items-center text-blue-600 font-medium text-sm">
            Read More
            <ChevronRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
