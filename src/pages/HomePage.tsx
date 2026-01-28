import Hero from '../components/Hero'
import PaidServiceBlock from '../components/PaidServiceBlock'
import TrustBanner from '../components/TrustBanner'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import ToolsPartnership from '../components/ToolsPartnership'
import AssessmentTestimonials from '../components/AssessmentTestimonials'
import ComparisonTable from '../components/ComparisonTable'
import FAQ from '../components/FAQ'
import WhyNow from '../components/WhyNow'
import WhoThisIsFor from '../components/WhoThisIsFor'
import WhatsAppBooking from '../components/WhatsAppBooking'

export default function HomePage() {
  return (
    <>
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
      <AssessmentTestimonials />
      <ComparisonTable />
      <FAQ />
      <WhyNow />
      <WhoThisIsFor />
      <WhatsAppBooking />
    </>
  )
}

