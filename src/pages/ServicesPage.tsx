import PaidServiceBlock from '../components/PaidServiceBlock'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'
import ComparisonTable from '../components/ComparisonTable'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Visa and immigration consulting',
  provider: {
    '@type': 'Organization',
    name: 'Immigrant Support Network',
    url: 'https://www.immigrantsupportnetwork.co.za/',
  },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  description:
    'Visa application support, study abroad guidance, work visas, UK visa help South Africa, Schengen visa assistance South Africa, Canada visa consultant. Expert document review and visa assessment.',
}

export default function ServicesPage() {
  return (
    <main className="pt-[calc(4rem+60px)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="py-xl bg-white border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">Visa & Immigration Services</h1>
            <p className="text-text-medium leading-relaxed mb-md">
              Cape Town-based visa consulting service supporting clients across South Africa virtually via WhatsApp and
              online consultations. Explore our services and start with a professional Visa Assessment & Second Opinion.
            </p>
            <p className="text-text-medium leading-relaxed text-sm mb-md">
              We offer visa application support, study abroad guidance, work visas, and Schengen visa assistance South Africa. 
              For UK visa help South Africa, Canada visa consultant services, or visa refusal help South Africa,{' '}
              <a href="/contact" className="text-primary font-semibold hover:underline">contact us via WhatsApp</a>. 
              Trusted by 10,000+ clients, 24/7 support.
            </p>
            <p className="text-text-medium leading-relaxed text-sm max-w-2xl mx-auto">
              Our most popular services include the R499 Visa Assessment & Second Opinion (recommended before applying), 
              full visa application support for UK, Schengen, Canada, USA and Australia, immigration documentation review, 
              appeals and refusal help, and study abroad guidance. We help you understand embassy requirements, prepare 
              strong applications, and avoid common pitfalls. Get your visa document reviewed in Cape Town or anywhere 
              in South Africa—we work virtually nationwide.
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

