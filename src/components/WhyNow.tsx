export default function WhyNow() {
  const reasons = [
    {
      icon: '📈',
      title: 'Visa Fees Increasing',
      description: 'Many countries are raising visa application fees. Apply now before costs go up.',
      urgency: 'High',
    },
    {
      icon: '⏰',
      title: 'Processing Times Getting Longer',
      description: 'Embassies are experiencing delays. Start your application process sooner rather than later.',
      urgency: 'High',
    },
    {
      icon: '👥',
      title: 'Competition Increasing',
      description: 'More people are applying for visas. Get ahead with a strong application now.',
      urgency: 'Medium',
    },
    {
      icon: '💰',
      title: 'Limited Assessment Spots',
      description: 'We only take 12 assessments per week to ensure quality. Spots fill up fast.',
      urgency: 'High',
    },
  ]

  return (
    <section className="py-xxl bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-t-4 border-red-500">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">
              Why Start Your Assessment Now?
            </h2>
            <p className="text-lg text-text-medium">
              Don't wait - these factors make acting now more important than ever
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-lg mb-xl">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-lg hover:border-red-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-md">
                  <div className="text-5xl flex-shrink-0">{reason.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-sm mb-sm">
                      <h3 className="text-xl font-bold text-text-dark">{reason.title}</h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        reason.urgency === 'High' 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {reason.urgency} Priority
                      </span>
                    </div>
                    <p className="text-text-medium leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Urgency CTA */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-lg md:p-xl text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-sm">
              ⚡ Limited Spots Available This Week
            </h3>
            <p className="text-lg text-red-100 mb-md max-w-2xl mx-auto">
              Only 12 assessment spots available. Don't miss your chance to get expert guidance before applying.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm justify-center items-center">
              <button
                onClick={() => {
                  const whatsappNumber = '27679518124'
                  const message = 'Hi! I would like to secure a spot for Visa Assessment (R499). Please let me know how to proceed.'
                  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
                  window.open(url, '_blank')
                }}
                className="btn bg-white text-red-700 hover:bg-red-50 btn-large px-10 py-4 text-lg font-bold shadow-xl"
              >
                Secure My Spot - R499
              </button>
              <p className="text-sm text-red-100">
                ✓ 48-hour turnaround • ✓ Money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
