export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amara Okafor',
      country: 'Nigeria 🇳🇬',
      destination: 'UK Skilled Worker Visa',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The team at Immigrant Support Network made my UK visa process so smooth. They prepared all my documents perfectly and guided me through every step. I got my visa in just 6 weeks!',
    },
    {
      name: 'Kofi Mensah',
      country: 'Ghana 🇬🇭',
      destination: 'Canada Study Permit',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Outstanding service! They helped me secure admission to a top Canadian university and processed my study permit flawlessly. Their expertise in student visas is unmatched.',
    },
    {
      name: 'Fatima Hassan',
      country: 'Kenya 🇰🇪',
      destination: 'Germany Job Seeker Visa',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Professional, knowledgeable, and very responsive. They understood the German immigration system perfectly and helped me navigate it successfully. Highly recommended!',
    },
  ]

  return (
    <section className="py-xxl bg-white">
      <div className="container">
        <div className="section-header">
          <h2>Success Stories from Our Clients</h2>
          <p>Real experiences from people we've helped achieve their immigration goals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-lg">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-bg-light p-lg rounded-xl border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              {/* Client Photo */}
              <div className="flex items-center gap-sm mb-md">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-text-light">{testimonial.country}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-sm">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-text-medium text-sm leading-relaxed mb-sm">
                "{testimonial.text}"
              </p>

              {/* Visa Type Badge */}
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                ✓ {testimonial.destination}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-xl">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border-2 border-green-500 rounded-full">
            <span className="text-green-600 text-xl">✓</span>
            <span className="text-green-800 font-semibold">
              95% Success Rate • Trusted by 10,000+ Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

