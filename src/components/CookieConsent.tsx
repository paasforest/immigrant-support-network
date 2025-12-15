import { useState, useEffect } from 'react'
import { cn } from '../lib/utils'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-lg p-4 md:p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-text-dark mb-2">
              🍪 We Value Your Privacy
            </h3>
            <p className="text-sm text-text-medium leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and
              provide secure form submissions. By clicking "Accept", you consent to our use of
              cookies. Read our{' '}
              <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </a>{' '}
              for more information.
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={declineCookies}
              className={cn(
                'flex-1 md:flex-none px-6 py-2.5 border-2 border-gray-300',
                'text-text-dark font-semibold rounded-md',
                'hover:bg-gray-50 transition-colors duration-200'
              )}
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className={cn(
                'flex-1 md:flex-none px-6 py-2.5 bg-primary text-white',
                'font-semibold rounded-md',
                'hover:bg-primary-hover transition-colors duration-200'
              )}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


