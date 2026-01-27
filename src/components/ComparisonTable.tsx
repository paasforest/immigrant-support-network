export default function ComparisonTable() {
  return (
    <section className="py-xxl bg-white">
      <div className="container">
        <div className="section-header">
          <h2>DIY vs. Professional Assessment</h2>
          <p>See why thousands choose our assessment over going it alone</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border-2 border-gray-300 p-md text-left font-bold text-text-dark">
                    Feature
                  </th>
                  <th className="border-2 border-gray-300 p-md text-center font-bold text-red-700 bg-red-50">
                    ❌ DIY Application
                  </th>
                  <th className="border-2 border-gray-300 p-md text-center font-bold text-green-700 bg-green-50">
                    ✅ With Our Assessment
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 border-gray-300 p-md font-semibold text-text-dark">
                    Initial Cost
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-text-medium">
                    R0 (but high risk)
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center font-bold text-green-700">
                    R499 one-time
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border-2 border-gray-300 p-md font-semibold text-text-dark">
                    Document Review
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-red-600">
                    ❌ Self-check only
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-green-600">
                    ✅ Expert review
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-300 p-md font-semibold text-text-dark">
                    Missing Documents Identified
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-red-600">
                    ❌ Often missed
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-green-600">
                    ✅ Always caught
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border-2 border-gray-300 p-md font-semibold text-text-dark">
                    Eligibility Assessment
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-red-600">
                    ❌ Guesswork
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-green-600">
                    ✅ Honest evaluation
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-300 p-md font-semibold text-text-dark">
                    Application Strategy
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-red-600">
                    ❌ No guidance
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-green-600">
                    ✅ Step-by-step plan
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border-2 border-gray-300 p-md font-semibold text-text-dark">
                    Success Rate
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-red-600 font-bold">
                    ~60% (industry average)
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-green-600 font-bold">
                    94% (our clients)
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-300 p-md font-semibold text-text-dark">
                    Risk of Refusal
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-red-600 font-bold">
                    High (40% refusal rate)
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-green-600 font-bold">
                    Low (6% refusal rate)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border-2 border-gray-300 p-md font-semibold text-text-dark">
                    Cost if Refused
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-red-600 font-bold">
                    R1,500 - R8,000 lost
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-green-600 font-bold">
                    R499 saved you from this
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-300 p-md font-semibold text-text-dark">
                    Support After Submission
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-red-600">
                    ❌ None
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center text-green-600">
                    ✅ 7 days email support
                  </td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border-2 border-gray-300 p-md font-bold text-text-dark text-lg">
                    Total Investment
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center font-bold text-red-700 text-lg">
                    R1,500 - R8,000+<br />
                    <span className="text-sm">(if refused, much more)</span>
                  </td>
                  <td className="border-2 border-gray-300 p-md text-center font-bold text-green-700 text-lg">
                    R499<br />
                    <span className="text-sm">(one-time, saves thousands)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="mt-xl text-center">
            <p className="text-xl font-bold text-text-dark mb-md">
              Don't risk losing thousands. Get expert assessment for just R499.
            </p>
            <button
              onClick={() => {
                const whatsappNumber = '27679518124'
                const message = 'Hi! I would like to book a Visa Assessment & Second Opinion (R499). Please let me know how to proceed.'
                const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
                window.open(url, '_blank')
              }}
              className="btn btn-primary btn-large px-12 py-5 text-xl font-bold shadow-xl"
            >
              Get Your Assessment Now - R499
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
