const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Overseas employment support and work visa assistance',
  provider: {
    '@type': 'Organization',
    name: 'Immigrant Support Network',
    url: 'https://www.immigrantsupportnetwork.co.za/',
  },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  description:
    'Expert support for Africans seeking verified overseas jobs and work visas. Partnering with licensed recruiters, we assist with applications, pre-screening, and work permit documentation.',
}

export default function OverseasEmploymentPage() {
  const handleOverseasConsultation = () => {
    const whatsappNumber = '27679518124'
    const message =
      'Hi! I would like to start my Overseas Job Consultation. I am interested in verified overseas employment opportunities and work visa support.'
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <main className="pt-[calc(4rem+60px)] bg-bg-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero + CTA */}
      <section className="py-xl bg-white border-b border-border">
        <div className="container">
          <nav className="text-sm text-text-light mb-md" aria-label="Breadcrumb">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">→</span>
            <a href="/services" className="hover:text-primary">Services</a>
            <span className="mx-2">→</span>
            <span className="text-text-dark font-medium">Overseas Employment Support</span>
          </nav>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">
              Overseas Employment Support
            </h1>
            <p className="text-text-medium leading-relaxed mb-lg">
              Immigrant Support Network provides end-to-end guidance for Africans seeking verified overseas job opportunities. In partnership with licensed international recruiters, we assist with applications, pre-screening, and work visa documentation, ensuring your applications are professional, compliant, and ready for consideration.
            </p>
            <div className="flex flex-wrap gap-sm">
              <button onClick={handleOverseasConsultation} className="btn btn-primary btn-large">
                Start Your Overseas Job Consultation
              </button>
              <a href="/contact" className="btn bg-white border-2 border-primary text-primary hover:bg-blue-50 btn-large">
                Book Free Consultation
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-md">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                ✓ Licensed Consultant
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Trusted by 10,000+ Clients
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-xxl bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-lg text-center">
            Why Choose Our Overseas Job Support?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-5xl mx-auto">
            <div className="bg-bg-light rounded-xl p-lg border border-border">
              <h3 className="text-xl font-bold text-text-dark mb-sm">Verified Opportunities Only</h3>
              <p className="text-text-medium leading-relaxed">
                We partner with licensed recruiters and verified employers. We focus on real overseas jobs for Africans—not scams or fake listings. Your application goes to legitimate organisations with job sponsorship rights.
              </p>
            </div>
            <div className="bg-bg-light rounded-xl p-lg border border-border">
              <h3 className="text-xl font-bold text-text-dark mb-sm">Work Visa Assistance</h3>
              <p className="text-text-medium leading-relaxed">
                We guide you through work permit requirements, document preparation, and visa submission. Our role is to help you apply legally and professionally—we do not guarantee jobs or visas, but we maximise your chance of a strong application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-xxl bg-bg-light">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-lg text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-lg border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-sm">1</div>
              <h3 className="text-lg font-bold text-text-dark mb-xs">Candidate Pre-Screening</h3>
              <p className="text-sm text-text-medium">
                We review your CV, experience, and qualifications to match you with suitable overseas roles.
              </p>
            </div>
            <div className="bg-white rounded-xl p-lg border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-sm">2</div>
              <h3 className="text-lg font-bold text-text-dark mb-xs">Application to Licensed Recruiters</h3>
              <p className="text-sm text-text-medium">
                We submit your application to verified employers or recruitment agencies with job sponsorship rights.
              </p>
            </div>
            <div className="bg-white rounded-xl p-lg border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-sm">3</div>
              <h3 className="text-lg font-bold text-text-dark mb-xs">Work Permit & Visa Support</h3>
              <p className="text-sm text-text-medium">
                We guide you through work permit requirements, document preparation, and visa submission to maximise your chance of approval.
              </p>
            </div>
          </div>
          <div className="text-center mt-lg">
            <button onClick={handleOverseasConsultation} className="btn btn-primary btn-large">
              Start Your Overseas Job Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-xxl bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-lg text-center">
            Countries We Focus On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg max-w-6xl mx-auto">
            {/* United Kingdom */}
            <div className="border border-border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=300&fit=crop"
                alt="United Kingdom flag and professional work environment"
                className="w-full h-40 object-cover"
              />
              <div className="p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="text-3xl">🇬🇧</span>
                  <h3 className="text-lg font-bold text-text-dark">United Kingdom – Care & Hospitality</h3>
                </div>
                <p className="text-sm text-text-medium leading-relaxed">
                  Opportunities in care work, hospitality, and related sectors. We help you understand UK work visa requirements and prepare strong applications.
                </p>
              </div>
            </div>

            {/* Canada */}
            <div className="border border-border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1519832979-6fa011b87667?w=600&h=300&fit=crop"
                alt="Canada landscape and skilled workers"
                className="w-full h-40 object-cover"
              />
              <div className="p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="text-3xl">🇨🇦</span>
                  <h3 className="text-lg font-bold text-text-dark">Canada – Farming, Driving & Skilled Trades</h3>
                </div>
                <p className="text-sm text-text-medium leading-relaxed">
                  Farm workers, drivers, and skilled trades. We assist with Canadian work permits and employer-sponsored pathways.
                </p>
              </div>
            </div>

            {/* Germany */}
            <div className="border border-border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=300&fit=crop"
                alt="Germany professional work scene – office and skilled workers"
                className="w-full h-40 object-cover"
              />
              <div className="p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="text-3xl">🇩🇪</span>
                  <h3 className="text-lg font-bold text-text-dark">Germany – Skilled Workers & IT</h3>
                </div>
                <p className="text-sm text-text-medium leading-relaxed">
                  Skilled workers and IT professionals. Germany has strong demand; we help with visa applications and documentation.
                </p>
              </div>
            </div>

            {/* Ireland */}
            <div className="border border-border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative w-full h-40 overflow-hidden">
                {/* Background gradient (Ireland flag colors) as fallback */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-white to-orange-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=600&h=300&fit=crop"
                  alt="Ireland landscape and work opportunities"
                  className="relative w-full h-full object-cover z-10"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0'
                  }}
                />
              </div>
              <div className="p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="text-3xl">🇮🇪</span>
                  <h3 className="text-lg font-bold text-text-dark">Ireland – Care, Hospitality & Skilled Work</h3>
                </div>
                <p className="text-sm text-text-medium leading-relaxed">
                  Opportunities in care work, hospitality, and skilled sectors. We help you understand Irish work visa requirements and prepare strong applications.
                </p>
              </div>
            </div>

            {/* Poland */}
            <div className="border border-border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=300&fit=crop"
                alt="Poland professional work environment"
                className="w-full h-40 object-cover"
              />
              <div className="p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="text-3xl">🇵🇱</span>
                  <h3 className="text-lg font-bold text-text-dark">Poland – Skilled Workers & Manufacturing</h3>
                </div>
                <p className="text-sm text-text-medium leading-relaxed">
                  Skilled workers, manufacturing, and technical positions. We assist with Polish work permits and EU work permits.
                </p>
              </div>
            </div>

            {/* Australia */}
            <div className="border border-border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=300&fit=crop"
                alt="Australia work opportunities and skilled migration"
                className="w-full h-40 object-cover"
              />
              <div className="p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="text-3xl">🇦🇺</span>
                  <h3 className="text-lg font-bold text-text-dark">Australia – Skilled Migration & Regional Work</h3>
                </div>
                <p className="text-sm text-text-medium leading-relaxed">
                  Skilled migration, regional work opportunities, and employer-sponsored pathways. We help with Australian work visas and permanent residency applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-xl bg-amber-50 border-y-2 border-amber-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-text-dark mb-sm">Important Disclaimer</h2>
            <p className="text-text-medium leading-relaxed">
              Immigrant Support Network does not provide or guarantee employment. All job offers and hiring decisions are made solely by licensed employers and recruitment agencies. Our role is to assist with applications and legal documentation for work visas only. Work permits and visa approvals depend on government authorities; we do not guarantee outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-xl bg-bg-light border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold text-text-dark mb-sm">Resources & Guides</h2>
            <p className="text-text-medium mb-md">
              Read our guides on overseas jobs, work permits, and applying safely:{' '}
              <a href="/blog" className="text-primary font-semibold hover:underline">Blog & Resources</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-xxl bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center bg-primary/10 rounded-xl p-xl border-2 border-primary/30">
            <h2 className="text-2xl font-bold text-text-dark mb-sm">Book Your Consultation</h2>
            <p className="text-text-medium mb-lg">
              Start with a free consultation or eligibility assessment. Our team responds quickly via WhatsApp.
            </p>
            <button onClick={handleOverseasConsultation} className="btn btn-primary btn-large">
              Start Your Overseas Job Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
