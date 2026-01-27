import { useState } from 'react'

export default function WhatsAppBooking() {
  const whatsappNumber = '27679518124'
  
  const [selectedService, setSelectedService] = useState('')
  const [selectedDestination, setSelectedDestination] = useState('')

  const serviceOptions = [
    'Visa Application Support',
    'Visa Assessment & Second Opinion (R499)',
    'Immigration Documentation',
    'EU Verification & Compliance',
    'Appeals & Refusals',
    'Study Abroad Guidance',
    'Work & Skilled Migration',
    'Other',
  ]

  const destinationOptions = [
    'United Kingdom',
    'Canada',
    'United States',
    'Australia',
    'New Zealand',
    'Germany',
    'France',
    'Netherlands',
    'Other',
  ]

  const handleWhatsAppClick = () => {
    let message = 'Hi! I would like to book a consultation.\n\n'
    
    if (selectedService) {
      message += `Service: ${selectedService}\n`
    }
    if (selectedDestination) {
      message += `Destination: ${selectedDestination}\n`
    }
    
    message += '\nPlease let me know your availability. Thank you!'
    
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="booking" className="py-xxl bg-bg-light">
      <div className="container">
        <div className="section-header">
          <h2>Book Your Consultation</h2>
          <p>
            Get instant, personalized guidance via WhatsApp. Our team responds within minutes during business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-xl max-w-6xl mx-auto">
          {/* Main Booking Card */}
          <div className="bg-white p-lg rounded-xl shadow-lg border border-gray-200">
            <div className="text-center mb-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-md">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-sm">
                Book via WhatsApp
              </h3>
              <p className="text-text-medium">
                Fast, personal, and secure. Get instant responses from our immigration experts.
              </p>
            </div>

            {/* Service Selection */}
            <div className="mb-md">
              <label className="block text-sm font-semibold text-text-dark mb-xs">
                What service do you need? (Optional)
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Destination Selection */}
            <div className="mb-lg">
              <label className="block text-sm font-semibold text-text-dark mb-xs">
                Destination Country (Optional)
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select destination...</option>
                {destinationOptions.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* WhatsApp CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Open WhatsApp to Book Consultation
            </button>

            {/* Benefits */}
            <div className="mt-lg pt-lg border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md text-center">
                <div>
                  <div className="text-2xl mb-xs">⚡</div>
                  <p className="text-sm font-semibold text-text-dark">Instant Response</p>
                  <p className="text-xs text-text-light">Usually within minutes</p>
                </div>
                <div>
                  <div className="text-2xl mb-xs">🔒</div>
                  <p className="text-sm font-semibold text-text-dark">Secure & Private</p>
                  <p className="text-xs text-text-light">End-to-end encrypted</p>
                </div>
                <div>
                  <div className="text-2xl mb-xs">💬</div>
                  <p className="text-sm font-semibold text-text-dark">Personal Service</p>
                  <p className="text-xs text-text-light">Direct with our experts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="bg-white p-lg rounded-xl shadow-lg border border-gray-200 h-fit order-first lg:order-last">
            <div className="text-center mb-md">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-700">Available Now</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-primary mb-sm">Why WhatsApp Booking?</h3>
            <ul className="list-none mb-lg space-y-2">
              {[
                'Get instant answers to your questions',
                'Share documents securely via WhatsApp',
                'Schedule consultation directly in chat',
                'Receive personalized guidance immediately',
                'No forms to fill - just chat with us',
              ].map((item, index) => (
                <li key={index} className="pl-6 relative text-text-medium text-sm">
                  <span className="absolute left-0 text-green-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-md border-t border-border">
              <h4 className="font-bold text-text-dark mb-sm">Business Hours</h4>
              <div className="space-y-1 text-sm text-text-medium mb-md">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-sm mt-md">
                <p className="text-xs text-blue-800">
                  <strong>Note:</strong> Messages sent outside business hours will be responded to the next business day.
                </p>
              </div>
            </div>

            <div className="pt-md border-t border-border mt-md">
              <h4 className="font-bold text-text-dark mb-sm">Other Ways to Reach Us</h4>
              <p className="text-sm text-text-medium mb-xs">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:info@immigrantsupportnetwork.co.za"
                  className="text-primary hover:underline"
                >
                  info@immigrantsupportnetwork.co.za
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
