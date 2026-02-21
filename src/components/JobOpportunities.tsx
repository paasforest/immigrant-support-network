export default function JobOpportunities() {
  return (
    <section className="py-xxl bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="container">
        {/* Countries We Focus On */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-text-dark mb-lg">
            Countries We Focus On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
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
              <img
                src="https://images.unsplash.com/photo-1519491050547-3ca8f97fd82b?w=600&h=300&fit=crop"
                alt="Ireland landscape and work opportunities"
                className="w-full h-40 object-cover"
              />
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
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop"
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
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop"
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

        {/* Call to Action */}
        <div className="mt-xl text-center">
          <p className="text-text-medium mb-md">
            Ready to explore international opportunities?
          </p>
          <a
            href="/contact"
            className="inline-block btn btn-large bg-primary text-white hover:bg-primary-dark px-8 py-4 font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}
