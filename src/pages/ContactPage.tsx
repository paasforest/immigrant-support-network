import WhatsAppBooking from '../components/WhatsAppBooking'

export default function ContactPage() {
  return (
    <main className="pt-[calc(4rem+60px)]">
      <section className="py-xl bg-white border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">Contact</h1>
            <p className="text-text-medium leading-relaxed">
              We’re Cape Town-based and support clients across South Africa virtually. The fastest way to reach us is via
              WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppBooking />
    </main>
  )
}

