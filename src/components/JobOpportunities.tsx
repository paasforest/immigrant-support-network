export default function JobOpportunities() {
  return (
    <section className="py-xxl bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="container">
        {/* Countries We Focus On - Visa Services */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-text-dark mb-lg">
            Countries We Focus On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {/* United Kingdom */}
            <div className="border border-border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=300&fit=crop"
                alt="United Kingdom visa services"
                className="w-full h-40 object-cover"
              />
              <div className="p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="text-3xl">🇬🇧</span>
                  <h3 className="text-lg font-bold text-text-dark">United Kingdom</h3>
                </div>
                <p className="text-sm text-text-medium leading-relaxed">
                  UK visa application support for tourism, business, study, and work visas. We help you understand requirements and prepare strong applications.
                </p>
              </div>
            </div>

            {/* Schengen */}
            <div className="border border-border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?w=600&h=300&fit=crop"
                alt="Schengen visa services"
                className="w-full h-40 object-cover"
              />
              <div className="p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="text-3xl">🇪🇺</span>
                  <h3 className="text-lg font-bold text-text-dark">Schengen Countries</h3>
                </div>
                <p className="text-sm text-text-medium leading-relaxed">
                  EU verification and compliance support for Schengen visa applications. Specialized assistance with document verification and Schengen regulations.
                </p>
              </div>
            </div>

            {/* Canada */}
            <div className="border border-border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1519832979-6fa011b87667?w=600&h=300&fit=crop"
                alt="Canada visa services"
                className="w-full h-40 object-cover"
              />
              <div className="p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="text-3xl">🇨🇦</span>
                  <h3 className="text-lg font-bold text-text-dark">Canada</h3>
                </div>
                <p className="text-sm text-text-medium leading-relaxed">
                  Canadian visa support including Express Entry, Provincial Nominee Programs, study visas, and work permits. Expert guidance for all visa types.
                </p>
              </div>
            </div>

            {/* United States */}
            <div className="border border-border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=300&fit=crop"
                alt="United States visa services"
                className="w-full h-40 object-cover"
              />
              <div className="p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="text-3xl">🇺🇸</span>
                  <h3 className="text-lg font-bold text-text-dark">United States</h3>
                </div>
                <p className="text-sm text-text-medium leading-relaxed">
                  US visa application support for tourism, business, study, and work visas. We help you navigate US immigration requirements and prepare documentation.
                </p>
              </div>
            </div>

            {/* Australia */}
            <div className="border border-border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=300&fit=crop"
                alt="Australia visa services"
                className="w-full h-40 object-cover"
              />
              <div className="p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="text-3xl">🇦🇺</span>
                  <h3 className="text-lg font-bold text-text-dark">Australia</h3>
                </div>
                <p className="text-sm text-text-medium leading-relaxed">
                  Australian visa support for skilled migration, work visas, study visas, and permanent residency pathways. Comprehensive application assistance.
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
