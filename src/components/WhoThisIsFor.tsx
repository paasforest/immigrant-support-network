export default function WhoThisIsFor() {
  return (
    <section className="py-xxl bg-bg-light">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {/* This service is for you if */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-md flex items-center gap-2">
                <span>✓</span>
                This service is for you if:
              </h3>
              <ul className="space-y-md text-text-dark">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span>You want to apply correctly the first time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span>You need expert document preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span>You've been refused before and want a second opinion</span>
                </li>
              </ul>
            </div>

            {/* This service is NOT for you if */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-md flex items-center gap-2">
                <span>✗</span>
                This service is NOT for you if:
              </h3>
              <ul className="space-y-md text-text-dark">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span>You want guaranteed visa approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span>You are unwilling to provide accurate documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span>You are looking for shortcuts or false promises</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-lg p-lg bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900 text-center">
              <strong>Legal Notice:</strong> We are not a law firm. Visa approvals are not guaranteed and depend on individual circumstances and government decisions. Our services provide guidance and support to help strengthen your application.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
