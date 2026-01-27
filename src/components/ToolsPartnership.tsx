import ImmigrationAILogo from './ImmigrationAILogo'

export default function ToolsPartnership() {
  return (
    <section className="relative py-xxl overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Partnership Header with Logo */}
          <div className="text-center mb-xl">
            {/* Disclaimer */}
            <p className="text-sm text-blue-200 italic mb-md max-w-2xl mx-auto">
              AI tools are best used alongside professional expert review for stronger applications.
            </p>
            {/* Powered By Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold mb-md">
              <span className="text-yellow-400">⚡</span>
              <span>Powered by Advanced AI Technology</span>
            </div>

            {/* Immigration AI Logo Component */}
            <div className="mb-md">
              <ImmigrationAILogo 
                size="large" 
                showBadge={true} 
                showSubtitle={true}
                icon="globe"
              />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-sm drop-shadow-lg">
              Get Your Visa Documents in <span className="text-yellow-400">2 Minutes</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Generate SOPs, cover letters, check visa eligibility, and practice interviews with our
              advanced AI tools. Trusted by <strong className="text-white">10,000+</strong>{' '}
              successful applicants.
            </p>
          </div>

          {/* Features Grid - Enhanced */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
            {/* SOP Generator */}
            <div className="group bg-white/95 backdrop-blur p-lg rounded-xl hover:bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-blue-400">
              <div className="flex items-center justify-between mb-sm">
                <div className="text-5xl">📝</div>
                <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-1 rounded">
                  POPULAR
                </span>
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-xs">SOP Generator</h3>
              <p className="text-xs text-text-medium mb-md">
                Create compelling Statements of Purpose in minutes
              </p>
              <div className="flex items-center gap-1 text-yellow-500 text-xs mb-sm">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-text-light">(4.9/5)</span>
              </div>
              <a
                href="https://www.immigrationai.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:gap-2 transition-all"
              >
                Try Now <span>→</span>
              </a>
            </div>

            {/* Visa Eligibility */}
            <div className="group bg-white/95 backdrop-blur p-lg rounded-xl hover:bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-purple-400">
              <div className="flex items-center justify-between mb-sm">
                <div className="text-5xl">✅</div>
                <span className="text-xs text-blue-600 font-bold bg-blue-100 px-2 py-1 rounded">
                  FREE
                </span>
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-xs">Eligibility Check</h3>
              <p className="text-xs text-text-medium mb-md">
                Instant visa eligibility with embassy-style questions
              </p>
              <div className="flex items-center gap-1 text-yellow-500 text-xs mb-sm">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-text-light">(5.0/5)</span>
              </div>
              <a
                href="https://www.immigrationai.co.za/#eligibility-check"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:gap-2 transition-all"
              >
                Check Now <span>→</span>
              </a>
            </div>

            {/* Cover Letters */}
            <div className="group bg-white/95 backdrop-blur p-lg rounded-xl hover:bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-green-400">
              <div className="flex items-center justify-between mb-sm">
                <div className="text-5xl">💼</div>
                <span className="text-xs text-purple-600 font-bold bg-purple-100 px-2 py-1 rounded">
                  FAST
                </span>
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-xs">Cover Letters</h3>
              <p className="text-xs text-text-medium mb-md">
                Embassy cover letters in under 2 minutes
              </p>
              <div className="flex items-center gap-1 text-yellow-500 text-xs mb-sm">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-text-light">(4.8/5)</span>
              </div>
              <a
                href="https://www.immigrationai.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:gap-2 transition-all"
              >
                Generate <span>→</span>
              </a>
            </div>

            {/* Interview Practice */}
            <div className="group bg-white/95 backdrop-blur p-lg rounded-xl hover:bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-yellow-400">
              <div className="flex items-center justify-between mb-sm">
                <div className="text-5xl">🎤</div>
                <span className="text-xs text-orange-600 font-bold bg-orange-100 px-2 py-1 rounded">
                  HOT
                </span>
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-xs">Interview Prep</h3>
              <p className="text-xs text-text-medium mb-md">
                Practice visa interviews with AI feedback
              </p>
              <div className="flex items-center gap-1 text-yellow-500 text-xs mb-sm">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-text-light">(4.9/5)</span>
              </div>
              <a
                href="https://www.immigrationai.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:gap-2 transition-all"
              >
                Start Practice <span>→</span>
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-md text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-sm text-blue-200">Documents Generated</div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-md text-center">
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-sm text-blue-200">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-md text-center">
              <div className="text-3xl font-bold text-white">2 Min</div>
              <div className="text-sm text-blue-200">Average Speed</div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-md text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-blue-200">AI Available</div>
            </div>
          </div>

          {/* Main CTA Banner */}
          <div className="relative bg-white rounded-3xl p-lg md:p-xl shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 text-center">
              {/* Special Offer Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-bold mb-md shadow-lg animate-pulse">
                <span>🎉</span>
                <span>LIMITED OFFER: Start from R149/month</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-text-medium mb-lg max-w-2xl mx-auto">
                Join <strong>10,000+ successful applicants</strong> who used our AI tools to ace
                their visa applications. Get started in under 60 seconds!
              </p>

              {/* Features List */}
              <div className="grid md:grid-cols-3 gap-md mb-lg text-left max-w-3xl mx-auto">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Instant Access</p>
                    <p className="text-xs text-text-light">No waiting, start immediately</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Money-Back Guarantee</p>
                    <p className="text-xs text-text-light">100% refund within 7 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">24/7 AI Support</p>
                    <p className="text-xs text-text-light">Available anytime, anywhere</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-sm justify-center items-center mb-sm">
                <a
                  href="https://www.immigrationai.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary-hover hover:to-blue-700 px-10 py-4 text-lg font-bold rounded-xl shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl"
                >
                  🚀 Try Immigration AI Now →
                </a>
                <a
                  href="https://www.immigrationai.co.za/#pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  View Pricing Plans
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-4 text-xs text-text-light">
                <span className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span> 4.9/5 Rating
                </span>
                <span>•</span>
                <span>🔒 Secure & Private</span>
                <span>•</span>
                <span>💳 No Credit Card for Trial</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-xl">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-text-light font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Consultation CTA */}
          <div className="bg-white rounded-xl p-lg text-center border-2 border-gray-200">
            <h4 className="text-xl font-bold text-text-dark mb-sm">
              👥 Prefer Personalized Guidance?
            </h4>
            <p className="text-text-medium mb-md">
              Book a free consultation with our immigration experts for hand-holding support
              throughout your entire journey.
            </p>
            <button
              onClick={() => {
                const bookingSection = document.getElementById('booking')
                bookingSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn btn-primary"
            >
              Not ready yet? Book a free consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

