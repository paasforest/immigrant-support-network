export default function JobOpportunities() {
  const countries = [
    { name: 'Ireland', flag: '🇮🇪', color: 'from-green-500 to-green-600' },
    { name: 'Poland', flag: '🇵🇱', color: 'from-red-400 to-red-500' },
    { name: 'Canada', flag: '🇨🇦', color: 'from-red-500 to-red-600' },
    { name: 'Australia', flag: '🇦🇺', color: 'from-blue-500 to-blue-600' },
    { name: 'United Kingdom', flag: '🇬🇧', color: 'from-blue-600 to-blue-700' },
    { name: 'United States', flag: '🇺🇸', color: 'from-blue-500 to-red-500' },
    { name: 'New Zealand', flag: '🇳🇿', color: 'from-blue-400 to-blue-500' },
    { name: 'Germany', flag: '🇩🇪', color: 'from-yellow-500 to-red-500' },
  ]

  const jobTypes = [
    {
      title: 'Truck / Driver Jobs',
      icon: '🚛',
      description: 'Commercial driving opportunities including long-haul trucking, delivery services, and logistics positions with competitive packages.',
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Farm & Agriculture Jobs',
      icon: '🚜',
      description: 'Seasonal and permanent agricultural work including crop farming, livestock management, and farm operations.',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
    },
    {
      title: 'Care & Support Work',
      icon: '👨‍⚕️',
      description: 'Healthcare and support roles including elderly care, disability support, childcare, and community care positions.',
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section className="py-xxl bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-md">
            <span className="text-2xl">🌍</span>
            <span className="text-primary font-semibold">International Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">
            We Specialise in International Opportunities
          </h2>
          <p className="text-lg md:text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
            Driving & Logistics • Farm Work • Care & Support Jobs
            <br />
            <span className="font-semibold text-primary">For Ireland, Poland, Canada & Australia</span>
          </p>
        </div>

        {/* Job Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
          {jobTypes.map((job, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-lg">
                <div className="flex items-center gap-4 mb-md">
                  <div className={`${job.color} text-white text-4xl p-4 rounded-xl shadow-lg`}>
                    {job.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-dark">
                    {job.title}
                  </h3>
                </div>
                <p className="text-text-medium leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Country-Specific Opportunities */}
        <div className="mb-xl">
          <h3 className="text-2xl font-bold text-center text-text-dark mb-lg">
            Countries We Focus On
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
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
          </div>
        </div>

        {/* All Countries Section */}
        <div className="bg-white rounded-2xl shadow-lg p-lg md:p-xl">
          <h3 className="text-2xl font-bold text-center text-text-dark mb-lg">
            Available in These Countries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {countries.map((country, index) => (
              <div
                key={index}
                className="text-center p-md rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-300 border-2 border-transparent hover:border-primary/30"
              >
                <div className="text-5xl mb-sm">{country.flag}</div>
                <div className="font-bold text-lg text-text-dark">{country.name}</div>
              </div>
            ))}
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
