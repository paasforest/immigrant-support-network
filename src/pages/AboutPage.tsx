import WhyChooseUs from '../components/WhyChooseUs'
import WhoThisIsFor from '../components/WhoThisIsFor'

export default function AboutPage() {
  return (
    <main className="pt-[calc(4rem+60px)] bg-bg-light">
      <section className="py-xl">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">About Immigrant Support Network</h1>
            <p className="text-text-medium leading-relaxed">
              Immigrant Support Network is a Cape Town-based visa and immigration consultancy serving clients across
              South Africa virtually. We help individuals, families, and businesses navigate visa requirements with
              clarity, professionalism, and a strong focus on compliance.
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
                We assist with popular destinations including the UK, Schengen countries, Canada, the USA, Australia, and
                more. Support is delivered remotely for convenience—especially useful for applicants outside Cape Town.
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

