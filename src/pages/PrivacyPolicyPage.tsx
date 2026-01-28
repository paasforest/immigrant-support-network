export default function PrivacyPolicyPage() {
  return (
    <main className="pt-[calc(4rem+60px)] bg-bg-light">
      <section className="py-xl">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white border border-border rounded-xl p-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">Privacy Policy</h1>
            <p className="text-text-medium leading-relaxed mb-md">
              This Privacy Policy explains how Immigrant Support Network collects and uses information when you contact
              us via WhatsApp, email, or our website.
            </p>
            <div className="space-y-md text-sm text-text-medium">
              <p>
                <strong className="text-text-dark">Information we collect:</strong> contact details you share, your
                immigration/visa context, and any documents you provide voluntarily.
              </p>
              <p>
                <strong className="text-text-dark">How we use it:</strong> to respond to enquiries, provide guidance,
                prepare documentation, and improve service quality.
              </p>
              <p>
                <strong className="text-text-dark">Sharing:</strong> we do not sell your information. If independent legal
                services are required, any sharing is done only with your consent.
              </p>
              <p>
                <strong className="text-text-dark">Security:</strong> we take reasonable steps to protect information, but
                no method of transmission is 100% secure.
              </p>
              <p>
                <strong className="text-text-dark">Contact:</strong> email us at{' '}
                <a className="text-primary hover:underline" href="mailto:info@immigrantsupportnetwork.co.za">
                  info@immigrantsupportnetwork.co.za
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

