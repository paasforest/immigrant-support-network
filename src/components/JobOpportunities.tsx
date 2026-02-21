export default function JobOpportunities() {
  const countries = [
    { name: 'Canada', flag: '🇨🇦', color: 'from-red-500 to-red-600' },
    { name: 'Ireland', flag: '🇮🇪', color: 'from-green-500 to-green-600' },
    { name: 'Poland', flag: '🇵🇱', color: 'from-red-400 to-red-500' },
    { name: 'Australia', flag: '🇦🇺', color: 'from-blue-500 to-blue-600' },
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
            <span className="font-semibold text-primary">For Canada, Ireland, Poland & Australia</span>
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

        {/* Countries Section */}
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
