import WhyChooseUs from '../components/WhyChooseUs'
import WhoThisIsFor from '../components/WhoThisIsFor'

export default function AboutPage() {
  return (
    <main className="pt-[calc(4rem+60px)] bg-bg-light">
      <section className="py-xl">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">About Immigrant Support Network</h1>
            <p className="text-text-medium leading-relaxed mb-md">
              Immigrant Support Network is a Cape Town-based visa and immigration consultancy serving clients across
              South Africa virtually. We help individuals, families, and businesses navigate visa requirements with
              clarity, professionalism, and a strong focus on compliance.
            </p>
            <p className="text-text-medium leading-relaxed mb-md">
              Our visa assessment South Africa service helps applicants avoid costly mistakes before submitting to embassies. 
              We provide UK visa help South Africa, Schengen visa assistance South Africa, Canada visa consultant guidance, 
              and support for USA, Australia, study visas, and work permits. All consultations are delivered remotely, 
              so whether you are in Cape Town, Johannesburg, Durban, or anywhere in South Africa, you can access the same 
              expert support via WhatsApp and online meetings.
            </p>
            <p className="text-text-medium leading-relaxed">
              We are not a law firm; visa approvals are not guaranteed and final decisions rest with government authorities. 
              We coordinate with independent licensed immigration lawyers where legal representation is required.
            </p>
            <div className="mt-lg grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="bg-white border border-border rounded-xl p-lg">
                <h2 className="font-bold text-text-dark mb-xs">Our mission</h2>
                <p className="text-sm text-text-medium">
                  Help applicants avoid costly mistakes and submit stronger, more complete applications.
                </p>
              </div>
              <div className="bg-white border border-border rounded-xl p-lg">
                <h2 className="font-bold text-text-dark mb-xs">How we work</h2>
                <p className="text-sm text-text-medium">
                  We start with an assessment, then provide clear next steps, document guidance, and preparation support.
                </p>
              </div>
              <div className="bg-white border border-border rounded-xl p-lg">
                <h2 className="font-bold text-text-dark mb-xs">Compliance</h2>
                <p className="text-sm text-text-medium">
                  We are not a law firm and do not guarantee outcomes—final decisions are made by government authorities.
                </p>
              </div>
            </div>

            <div className="mt-xl bg-white border border-border rounded-xl p-lg">
              <h2 className="text-xl font-bold text-text-dark mb-sm">Where we help</h2>
              <p className="text-text-medium leading-relaxed">
                We assist with popular destinations including the{' '}
                <a href="/services" className="text-primary font-semibold hover:underline">UK</a>,{' '}
                <a href="/services" className="text-primary font-semibold hover:underline">Schengen</a>,{' '}
                <a href="/services" className="text-primary font-semibold hover:underline">Canada</a>, the USA, Australia, and
                more. Support is delivered remotely for convenience—especially useful for applicants outside Cape Town. For{' '}
                <a href="/contact" className="text-primary font-semibold hover:underline">visa assessment South Africa</a> or{' '}
                <a href="/services" className="text-primary font-semibold hover:underline">UK visa help South Africa</a>, get in touch via our <a href="/contact" className="text-primary font-semibold hover:underline">contact page</a>.
              </p>
            </div>

            <div className="mt-lg bg-white border border-border rounded-xl p-lg">
              <h2 className="text-xl font-bold text-text-dark mb-sm">Trust and track record</h2>
              <p className="text-text-medium leading-relaxed mb-sm">
                We focus on accuracy, compliance, and clarity to increase the chances of visa approval while reducing delays and errors. Our team has supported thousands of applicants with document preparation, embassy requirements, and application strategy. Success rates and outcomes depend on each case and government decisions; we do not guarantee approvals.
              </p>
              <p className="text-text-medium leading-relaxed">
                Whether you need Schengen visa assistance South Africa, Canada visa consultant services, or study and work visa support, we provide expert guidance every step of the way. Book a consultation via WhatsApp for a fast response.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <WhoThisIsFor />
    </main>
  )
}

