const services = [
  {
    title: 'Visa Application Support',
    description:
      'Complete assistance with visa applications for tourism, business, study, and work visas. We help you understand requirements, prepare documentation, and submit strong applications.',
    icon: '📋',
    image: 'https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&h=600&fit=crop',
    badge: '⭐ MOST POPULAR',
    badgeColor: 'bg-yellow-500',
  },
  {
    title: 'Immigration Documentation',
    description:
      'Expert preparation and review of all immigration documents including letters of support, financial statements, travel itineraries, and supporting evidence.',
    icon: '📄',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
  },
  {
    title: 'EU Verification & Compliance',
    description:
      'Specialized support for EU immigration requirements, document verification, and compliance with Schengen regulations and country-specific policies.',
    icon: '✓',
    image: 'https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?w=800&h=600&fit=crop',
  },
  {
    title: 'Appeals & Refusals',
    description:
      'Strategic guidance when applications are refused. We analyze refusal reasons, advise on reapplication strategies, and coordinate with immigration lawyers for appeals.',
    icon: '⚖️',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
    badge: '⚠️ COMPLEX CASES',
    badgeColor: 'bg-red-500',
  },
  {
    title: 'Study Abroad Guidance',
    description:
      'End-to-end support for students including university selection, application assistance, student visa processing, and pre-departure preparation.',
    icon: '🎓',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    badge: '🎓 STUDENTS',
    badgeColor: 'bg-green-500',
  },
  {
    title: 'Work & Skilled Migration',
    description:
      'Specialized in international opportunities: Truck/Driver jobs, Farm & Agriculture work, and Care & Support positions for Canada, Ireland, Poland & Australia. Full assistance with work permits, employer sponsorships, and skilled migration programs.',
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
    badge: '🌍 INTERNATIONAL JOBS',
    badgeColor: 'bg-blue-500',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-xxl bg-white">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            Cape Town-based visa consulting service supporting clients across South Africa virtually, with popular destinations
            including the UK, Schengen countries, Canada, USA and Australia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 border-2 border-transparent hover:-translate-y-1 hover:shadow-xl hover:border-primary"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-lg">
                {service.badge && (
                  <div className={`${service.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-sm`}>
                    {service.badge}
                  </div>
                )}
                <div className="text-5xl mb-sm">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-sm drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-white/95 drop-shadow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
