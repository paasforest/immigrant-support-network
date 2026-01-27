import { useEffect } from 'react'
import { RecaptchaProvider } from './contexts/RecaptchaProvider'
import { initSentry } from './lib/sentry'
import { validateConfig } from './lib/config'
import { isAIChatEnabled, logFeatureFlagsStatus } from './lib/featureFlags'
import Header from './components/Header'
import Hero from './components/Hero'
import PaidServiceBlock from './components/PaidServiceBlock'
import TrustBanner from './components/TrustBanner'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'
import ToolsPartnership from './components/ToolsPartnership'
import WhoThisIsFor from './components/WhoThisIsFor'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import WhatsAppButton from './components/WhatsAppButton'
import FloatingCTA from './components/FloatingCTA'
import AIChatWidget from './components/AIChatWidget'

function App() {
  useEffect(() => {
    // Initialize Sentry for error tracking
    initSentry()

    // Validate configuration
    validateConfig()

    // Log feature flags (AI Chat status)
    if (import.meta.env.DEV) {
      logFeatureFlagsStatus()
    }
  }, [])

  return (
    <RecaptchaProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <PaidServiceBlock />
          <TrustBanner />
          <WhyChooseUs />
          <Services />
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <Testimonials />
          {/* Partnership with Immigration AI - Repositioned with disclaimer */}
          <ToolsPartnership />
          <WhoThisIsFor />
          <BookingForm />
        </main>
        <Footer />
        <CookieConsent />
        <WhatsAppButton />
        <FloatingCTA />
        {/* AI Chat Widget - Auto-enables after 6 months or via ?testchat=true */}
        {isAIChatEnabled() && <AIChatWidget />}
      </div>
    </RecaptchaProvider>
  )
}

export default App
