export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-lg">
            {/* About Section with Logo */}
            <div>
              <div className="flex items-center gap-2 mb-sm">
                <span className="text-3xl">🌍</span>
                <h3 className="text-white text-xl font-bold">Immigrant Support Network</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-md">
                Your trusted partner for immigration and travel assistance. Helping Africans achieve
                their dreams of traveling, studying, working, and relocating overseas.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-sm">
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full">
                  <span className="text-green-400 text-xs">✓</span>
                  <span className="text-green-300 text-xs font-semibold">Licensed</span>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full">
                  <span className="text-blue-400 text-xs">⭐</span>
                  <span className="text-blue-300 text-xs font-semibold">95% Success</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-3 mt-md">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h4 className="text-white text-lg font-bold mb-sm">Our Services</h4>
              <ul className="list-none space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary">→</span>
                    Visa Application Support
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary">→</span>
                    Immigration Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary">→</span>
                    EU Verification
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary">→</span>
                    Appeals & Refusals
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary">→</span>
                    Study Abroad Guidance
                  </a>
                </li>
                <li className="pt-2 mt-2 border-t border-gray-700">
                  <a
                    href="https://www.immigrationai.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-200 font-semibold flex items-center gap-2"
                  >
                    <span>🤖</span>
                    AI-Powered Tools →
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-white text-lg font-bold mb-sm">Get In Touch</h4>
              <ul className="list-none space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">📧</span>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <a
                      href="mailto:info@immigrantsupportnetwork.co.za"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      info@immigrantsupportnetwork.co.za
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📱</span>
                  <div>
                    <p className="text-gray-400 text-xs">WhatsApp</p>
                    <a
                      href="https://wa.me/27679518124"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      +27 67 951 8124
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">🕐</span>
                  <div>
                    <p className="text-gray-400 text-xs">Office Hours</p>
                    <p className="text-gray-300 text-sm">Mon-Fri, 9 AM - 6 PM SAST</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">📍</span>
                  <div>
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-gray-300 text-sm">Based in South Africa 🇿🇦</p>
                    <p className="text-gray-400 text-xs mt-1">Serving clients across Africa</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Legal & Quick Links */}
            <div>
              <h4 className="text-white text-lg font-bold mb-sm">Legal & Links</h4>
              <ul className="list-none space-y-2 mb-md">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary">→</span>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary">→</span>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#booking"
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary">→</span>
                    Book Consultation
                  </a>
                </li>
              </ul>

              <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-xs leading-relaxed mb-2">
                  <strong className="text-white">Important Notice:</strong>
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  We are not a law firm. Legal services provided by independent licensed lawyers.
                  Visa approvals not guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Payment/Security Badges */}
        <div className="border-t border-gray-700 py-md">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Immigrant Support Network. All rights reserved.
            </p>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 text-gray-500 text-xs">
              <div className="flex items-center gap-1">
                <span>🔒</span>
                <span>Secure & Confidential</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-gray-700"></div>
              <div className="flex items-center gap-1">
                <span>✓</span>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
