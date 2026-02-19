import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { RecaptchaProvider } from './contexts/RecaptchaProvider'
import { initSentry } from './lib/sentry'
import { validateConfig } from './lib/config'
import { isAIChatEnabled, logFeatureFlagsStatus } from './lib/featureFlags'
import Header from './components/Header'
import SeoHead from './components/SeoHead'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import WhatsAppButton from './components/WhatsAppButton'
import FloatingCTA from './components/FloatingCTA'
import AIChatWidget from './components/AIChatWidget'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import OverseasEmploymentPage from './pages/OverseasEmploymentPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import VisaUpdatesPage from './pages/VisaUpdatesPage'

function App() {
  const location = useLocation()

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

  useEffect(() => {
    // Scroll behavior on route changes
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // wait a tick for page content to render
      setTimeout(() => {
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return (
    <RecaptchaProvider>
      <div className="app">
        <SeoHead />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/overseas-employment-support" element={<OverseasEmploymentPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/visa-updates" element={<VisaUpdatesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
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
