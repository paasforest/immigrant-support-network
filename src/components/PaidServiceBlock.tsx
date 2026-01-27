import { scrollToElement } from '../lib/utils'

export default function PaidServiceBlock() {
  const handleAssessmentClick = () => {
    scrollToElement('booking')
  }

  return (
    <section className="py-xxl bg-gradient-to-br from-blue-50 to-white border-b-4 border-blue-600">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Urgency Banner */}
          <div className="text-center mb-md">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border-2 border-red-500 rounded-full">
              <span className="text-red-600 font-bold">⚡ LIMITED SPOTS THIS WEEK</span>
              <span className="text-red-700 text-sm">Only 12 assessments available</span>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-600 rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-sm">
                Visa Assessment & Second Opinion
              </h2>
              <p className="text-lg text-blue-100">
                Professional review before you apply • Save thousands in mistakes
              </p>
            </div>

            <div className="p-lg md:p-xl">
              {/* Price & Value Comparison */}
              <div className="grid md:grid-cols-2 gap-lg mb-lg">
                {/* Left: What You Get */}
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-md">What's Included:</h3>
                  <ul className="space-y-sm text-text-dark">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                      <span><strong>Document Review:</strong> Expert analysis of all your visa documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                      <span><strong>Eligibility Assessment:</strong> Honest evaluation of your chances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                      <span><strong>Gap Analysis:</strong> Identify missing or weak documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                      <span><strong>Action Plan:</strong> Step-by-step guidance to strengthen your application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                      <span><strong>Written Report:</strong> Detailed assessment document (PDF)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                      <span><strong>Follow-up Support:</strong> Email support for 7 days after assessment</span>
                    </li>
                  </ul>
                </div>

                {/* Right: Cost Comparison */}
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-lg">
                  <h3 className="text-xl font-bold text-red-800 mb-md">Cost of NOT Getting Assessment:</h3>
                  <div className="space-y-sm mb-md">
                    <div className="flex justify-between items-center">
                      <span className="text-text-dark">Visa application fee (lost if refused)</span>
                      <span className="font-bold text-red-600">R1,500 - R8,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-dark">Time wasted (3-6 months)</span>
                      <span className="font-bold text-red-600">Priceless</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-dark">Reapplication costs</span>
                      <span className="font-bold text-red-600">R3,000+</span>
                    </div>
                    <div className="flex justify-between items-center border-t-2 border-red-300 pt-sm mt-sm">
                      <span className="font-bold text-text-dark">Total Potential Loss</span>
                      <span className="font-bold text-red-700 text-xl">R4,500+</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-md text-center mt-md">
                    <p className="text-sm text-green-800 mb-sm">Your Investment:</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-green-700">R499</span>
                      <span className="text-green-700">one-time</span>
                    </div>
                    <p className="text-xs text-green-700 mt-sm">Save 90% vs. cost of mistakes</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-md mb-lg">
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="font-semibold text-text-dark">4.9/5 Rating</span>
                  </div>
                  <span>•</span>
                  <span className="font-semibold text-text-dark">2,847 Assessments Completed</span>
                  <span>•</span>
                  <span className="font-semibold text-green-700">94% Success Rate</span>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-md mb-lg text-center">
                <p className="font-bold text-yellow-900 mb-xs">
                  💯 100% Money-Back Guarantee
                </p>
                <p className="text-sm text-yellow-800">
                  If you're not satisfied with your assessment, we'll refund 100% of your payment. No questions asked.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button
                  onClick={handleAssessmentClick}
                  className="btn btn-primary btn-large px-12 py-5 text-xl font-bold shadow-2xl hover:scale-105 transition-transform mb-sm"
                >
                  🚀 Start My Visa Assessment - R499
                </button>
                <p className="text-xs text-text-light">
                  ✓ Secure payment • ✓ Instant confirmation • ✓ Assessment within 48 hours
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md mt-lg">
            <div className="text-center">
              <div className="text-2xl mb-xs">🔒</div>
              <p className="text-sm font-semibold text-text-dark">Secure & Private</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-xs">⚡</div>
              <p className="text-sm font-semibold text-text-dark">48-Hour Turnaround</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-xs">✓</div>
              <p className="text-sm font-semibold text-text-dark">Expert Reviewed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-xs">💬</div>
              <p className="text-sm font-semibold text-text-dark">7-Day Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
