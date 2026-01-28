import PaidServiceBlock from '../components/PaidServiceBlock'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'
import ComparisonTable from '../components/ComparisonTable'

export default function ServicesPage() {
  return (
    <main className="pt-[calc(4rem+60px)]">
      <section className="py-xl bg-white border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">Visa & Immigration Services</h1>
            <p className="text-text-medium leading-relaxed">
              Cape Town-based visa consulting service supporting clients across South Africa virtually via WhatsApp and
              online consultations. Explore our services and start with a professional Visa Assessment & Second Opinion.
            </p>
          </div>
        </div>
      </section>

      <PaidServiceBlock />
      <Services />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <ComparisonTable />
      <FAQ />
    </main>
  )
}

