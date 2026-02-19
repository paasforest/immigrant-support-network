import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'top-countries-hiring-2026',
    title: 'Top 5 Countries Hiring Skilled African Workers in 2026',
    excerpt:
      'Which countries are actively recruiting African talent? Learn where demand is highest for care workers, drivers, skilled trades, and IT professionals.',
    date: '2026-02-12',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=300&fit=crop',
    imageAlt: 'World map and global employment opportunities',
  },
  {
    slug: 'step-by-step-work-permits',
    title: 'Step-by-Step Guide to Legal Work Permits Abroad',
    excerpt:
      'A clear roadmap from application to approval. Understand documents, timelines, and what licensed recruiters and employers expect.',
    date: '2026-02-10',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=300&fit=crop',
    imageAlt: 'Documents and work permit application guidance',
  },
  {
    slug: 'how-to-apply-safely',
    title: 'How Africans Can Apply Safely to Jobs Overseas',
    excerpt:
      'Avoid scams and fake job offers. Learn how to verify employers, protect your documents, and work with legitimate recruitment partners.',
    date: '2026-02-08',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop',
    imageAlt: 'Safe and secure job application process',
  },
]

export default function BlogPage() {
  return (
    <main className="pt-[calc(4rem+60px)] bg-bg-light">
      <section className="py-xl">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">Blog & Resources</h1>
          <p className="text-text-medium leading-relaxed mb-md max-w-2xl">
            Guides and insights on overseas employment, work visas, and applying safely for jobs abroad.
          </p>
          <p className="text-text-medium mb-xl">
            <a href="/visa-updates" className="text-primary font-semibold hover:underline">Visa & immigration updates</a> – latest changes by country (UK, Schengen, Canada, Australia, Germany).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary transition-all"
              >
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-lg">
                  <time className="text-sm text-text-light">{post.date}</time>
                  <h2 className="text-xl font-bold text-text-dark mt-xs mb-sm">{post.title}</h2>
                  <p className="text-text-medium text-sm">{post.excerpt}</p>
                  <span className="inline-block mt-sm text-primary font-semibold text-sm hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
