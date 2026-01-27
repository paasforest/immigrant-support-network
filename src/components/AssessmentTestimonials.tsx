export default function AssessmentTestimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Cape Town, SA',
      before: 'Application Refused',
      after: 'UK Visa Approved',
      savings: 'R6,500',
      text: 'The R499 assessment caught 3 missing documents I didn\'t know about. They saved me from wasting R6,500 on a refused application. Best investment ever!',
      rating: 5,
    },
    {
      name: 'David K.',
      location: 'Johannesburg, SA',
      before: 'Uncertain Eligibility',
      after: 'Canada PR Approved',
      savings: 'R8,000',
      text: 'I was about to apply without proper documents. The assessment showed me exactly what was missing. Got approved on first try - saved me R8,000 in reapplication fees.',
      rating: 5,
    },
    {
      name: 'Thandi N.',
      location: 'Durban, SA',
      before: 'Previous Refusal',
      after: 'Australia Visa Approved',
      savings: 'R4,200',
      text: 'After being refused once, I was scared to apply again. The assessment gave me confidence and identified the exact issues. Second application was successful!',
      rating: 5,
    },
  ]

  return (
    <section className="py-xxl bg-white">
      <div className="container">
        <div className="section-header">
          <h2>Real Results from R499 Assessment</h2>
          <p>See how our assessment service helped clients avoid costly mistakes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-lg">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-lg hover:shadow-xl transition-all"
            >
              {/* Before/After Badge */}
              <div className="flex items-center justify-between mb-md">
                <div className="flex-1">
                  <div className="text-xs text-red-600 font-semibold mb-xs">❌ BEFORE</div>
                  <div className="text-sm font-bold text-text-dark">{testimonial.before}</div>
                </div>
                <div className="text-2xl mx-sm">→</div>
                <div className="flex-1 text-right">
                  <div className="text-xs text-green-600 font-semibold mb-xs">✅ AFTER</div>
                  <div className="text-sm font-bold text-text-dark">{testimonial.after}</div>
                </div>
              </div>

              {/* Savings Badge */}
              <div className="bg-green-100 border-2 border-green-500 rounded-lg p-sm mb-md text-center">
                <p className="text-xs text-green-800 font-semibold">Money Saved</p>
                <p className="text-xl font-bold text-green-700">{testimonial.savings}</p>
              </div>

              {/* Testimonial */}
              <div className="mb-md">
                <div className="flex gap-1 mb-sm">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-text-medium leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-gray-200 pt-sm">
                <p className="text-sm font-semibold text-text-dark">{testimonial.name}</p>
                <p className="text-xs text-text-light">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-xl">
          <p className="text-lg font-semibold text-text-dark mb-md">
            Join 2,847+ clients who avoided costly visa mistakes
          </p>
          <button
            onClick={() => {
              const bookingSection = document.getElementById('booking')
              bookingSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn btn-primary btn-large px-10 py-4 text-lg font-bold"
          >
            Get Your Assessment - R499
          </button>
        </div>
      </div>
    </section>
  )
}
