export default function TermsPage() {
  return (
    <main className="pt-[calc(4rem+60px)] bg-bg-light">
      <section className="py-xl">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white border border-border rounded-xl p-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">Terms of Service</h1>
            <p className="text-text-medium leading-relaxed mb-md">
              By using this website and contacting Immigrant Support Network, you agree to these Terms of Service.
            </p>
            <div className="space-y-md text-sm text-text-medium">
              <p>
                <strong className="text-text-dark">No guarantees:</strong> visa and immigration decisions are made by
                government authorities. We do not guarantee approvals or outcomes.
              </p>
              <p>
                <strong className="text-text-dark">Not a law firm:</strong> Immigrant Support Network is not a law firm.
                Where legal services are required, these are provided by independent licensed lawyers.
              </p>
              <p>
                <strong className="text-text-dark">Client responsibilities:</strong> you must provide accurate information
                and genuine documents. Misrepresentation may lead to refusal or bans by authorities.
              </p>
              <p>
                <strong className="text-text-dark">Payments:</strong> where fees apply (e.g., Visa Assessment), they are
                communicated clearly before you proceed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

