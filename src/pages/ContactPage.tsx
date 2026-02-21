import WhatsAppBooking from '../components/WhatsAppBooking'

export default function ContactPage() {
  return (
    <main className="pt-[calc(4rem+60px)]">
      <section className="py-xl bg-white border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">Contact</h1>
            <p className="text-text-medium leading-relaxed mb-sm">
              We’re Cape Town-based and support clients across South Africa virtually. The fastest way to reach us is via
              WhatsApp.
            </p>
            <p className="text-text-medium leading-relaxed text-sm">
              For visa assessment South Africa, UK visa help, Schengen visa assistance,{' '}
              <a href="/overseas-employment-support" className="text-primary font-semibold hover:underline">overseas job support</a>, or any of our{' '}
              <a href="/services" className="text-primary font-semibold hover:underline">visa and immigration services</a>, 
              message us below. You can also learn more <a href="/about" className="text-primary font-semibold hover:underline">about us</a>.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppBooking />
    </main>
  )
}

