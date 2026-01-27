const steps = [
  {
    number: '1',
    title: 'Book Your Consultation',
    description:
      'Complete our simple form to tell us about your immigration goals and circumstances. We review your information and schedule a consultation.',
  },
  {
    number: '2',
    title: 'Expert Assessment',
    description:
      'During your consultation, we assess your case, explain your options clearly, outline requirements, and recommend the best path forward.',
  },
  {
    number: '3',
    title: 'Documentation & Preparation',
    description:
      'We guide you through gathering required documents, help prepare compelling applications, and ensure everything meets official standards.',
  },
  {
    number: '4',
    title: 'Application & Follow-up',
    description:
      'We assist with submission, track your application progress, handle queries from authorities, and provide updates throughout the process.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-xxl bg-bg-light">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>A clear, straightforward process to support your immigration journey</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-md mb-xl relative">
              {/* Step Number Circle */}
              <div className="flex-shrink-0 w-[60px] h-[60px] bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-xs">
                  {step.title}
                </h3>
                <p className="text-text-medium leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[29px] top-[70px] w-[2px] h-[calc(100%+2rem)] bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
