const reasons = [
  {
    title: 'Africa-Focused Expertise',
    description:
      'We understand the unique challenges African applicants face and have deep experience navigating immigration systems on behalf of clients across the continent.',
  },
  {
    title: 'Transparent & Ethical',
    description:
      'No false promises or guarantees. We provide honest assessments, clear pricing, and realistic expectations about visa approval outcomes.',
  },
  {
    title: 'Licensed Legal Partners',
    description:
      'For complex legal matters and appeals, we coordinate with independent licensed immigration lawyers to ensure you receive qualified legal representation.',
  },
  {
    title: 'End-to-End Support',
    description:
      'From initial consultation through document preparation, application submission, and follow-up, we support you throughout your entire immigration journey.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-xxl bg-white">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Trusted immigration support built on integrity and expertise</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xl">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-lg bg-bg-light rounded-xl border-l-4 border-primary"
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-sm">
                {reason.title}
              </h3>
              <p className="text-text-medium leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer Box */}
        <div className="max-w-4xl mx-auto mt-xl p-lg bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
          <p className="font-bold text-text-dark mb-xs">Important Notice</p>
          <p className="text-[0.95rem] leading-relaxed text-text-medium">
            Immigrant Support Network provides immigration consultation and documentation support
            services. We do not guarantee visa approvals or immigration outcomes, as final
            decisions rest with government authorities. Legal services, where required, are provided
            by independent licensed immigration lawyers who are regulated professionals in their
            respective jurisdictions. We coordinate these services but are not a law firm ourselves.
          </p>
        </div>
      </div>
    </section>
  )
}
