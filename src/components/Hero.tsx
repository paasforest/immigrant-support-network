import { scrollToElement } from '../lib/utils'

export default function Hero() {
  const handleBookingClick = () => {
    scrollToElement('booking')
  }

  const handleServicesClick = () => {
    scrollToElement('services')
  }

  return (
    <section className="relative pt-[calc(4rem+60px)] pb-xxl overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop"
          alt="Travel and Immigration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-indigo-900/85"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-md">
            <span className="text-yellow-400">⭐</span>
            <span className="text-white text-sm font-semibold">
              Trusted by 10,000+ Clients • 95% Success Rate
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-md text-white drop-shadow-lg">
            Your Trusted Partner for Immigration & Travel Support
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-lg text-white/95 drop-shadow">
            Expert guidance for Africans seeking to travel, study, work, or relocate overseas.
            Professional, ethical, and transparent immigration assistance every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-sm justify-center mb-md">
            <button
              onClick={handleBookingClick}
              className="btn btn-large bg-white text-primary hover:bg-gray-100 px-8 py-4 font-bold shadow-xl"
            >
              Book Free Consultation
            </button>
            <button
              onClick={handleServicesClick}
              className="btn btn-large bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary px-8 py-4 font-bold"
            >
              Explore Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-lg text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>150+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>24/7 Support</span>
            </div>
          </div>

          {/* Quick AI Tools Link */}
          <div className="mt-lg pt-lg border-t border-white/20">
            <p className="text-sm text-white/80 mb-sm">
              🤖 Need instant document generation? Try our AI-powered tools:
            </p>
            <a
              href="https://www.immigrationai.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
            >
              <span>Immigration AI Tools</span>
              <span className="text-xs">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
