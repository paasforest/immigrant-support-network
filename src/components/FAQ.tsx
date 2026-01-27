import { useState } from 'react'

const faqs = [
  {
    question: 'Is R499 really worth it?',
    answer: 'Absolutely! A refused visa application costs R1,500-R8,000 in lost fees, plus 3-6 months of wasted time. Our assessment helps you avoid these mistakes for just R499 - that\'s a 90% savings. Most clients say it\'s the best investment they made.',
  },
  {
    question: 'What if I\'m not eligible for a visa?',
    answer: 'We\'ll tell you honestly upfront. This saves you from wasting thousands on application fees. We\'ll also provide a roadmap for what you need to become eligible, potentially saving you years of waiting.',
  },
  {
    question: 'How long does the assessment take?',
    answer: 'You\'ll receive your detailed assessment report within 48 hours of submitting your documents. We also provide 7 days of email support to answer any follow-up questions.',
  },
  {
    question: 'What documents do I need to provide?',
    answer: 'We\'ll review whatever documents you have - passport, bank statements, employment letters, etc. Even if you\'re missing documents, we\'ll tell you exactly what\'s needed and where to get them.',
  },
  {
    question: 'Do you guarantee visa approval?',
    answer: 'No ethical service can guarantee visa approval - final decisions rest with government authorities. However, we guarantee honest assessment, expert guidance, and 100% money-back if you\'re not satisfied with our service.',
  },
  {
    question: 'Can I use this for any country?',
    answer: 'Yes! We have expertise in UK, Canada, Australia, USA, EU countries, and more. Our assessment covers eligibility, document requirements, and application strategy for your chosen destination.',
  },
  {
    question: 'What if I\'ve already been refused?',
    answer: 'Perfect! Our assessment is ideal for second applications. We\'ll analyze why you were refused, identify gaps, and create a strategy to strengthen your reapplication. Many clients succeed on their second try after our assessment.',
  },
  {
    question: 'Is this a one-time payment?',
    answer: 'Yes! R499 is a one-time payment for the complete assessment. You get the full report, action plan, and 7 days of email support. No hidden fees, no subscriptions.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-xxl bg-bg-light">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our R499 Visa Assessment</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-sm">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-lg text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span className="font-bold text-text-dark text-lg pr-md">{faq.question}</span>
                  <span className="text-primary text-2xl flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-lg pb-lg">
                    <p className="text-text-medium leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-xl text-center bg-blue-50 border-2 border-blue-200 rounded-xl p-lg">
            <h3 className="text-xl font-bold text-text-dark mb-sm">
              Still Have Questions?
            </h3>
            <p className="text-text-medium mb-md">
              Book a free consultation call and speak directly with our immigration experts
            </p>
            <button
              onClick={() => {
                const whatsappNumber = '27679518124'
                const message = 'Hi! I would like to book a free consultation call. Please let me know your availability.'
                const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
                window.open(url, '_blank')
              }}
              className="btn btn-primary"
            >
              Book Free Consultation via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
