export default function VisaUpdatesPage() {
  const updates = [
    {
      country: 'United Kingdom',
      date: '2024–2025',
      headline: 'Skilled Worker visa salary threshold increases',
      summary:
        'The UK raised the minimum salary for Skilled Worker visas. New applicants must meet the updated general threshold and the "going rate" for their occupation. Care workers and some health roles have separate rules. Always check the latest figures on gov.uk before applying.',
      sourceUrl: 'https://www.gov.uk/skilled-worker-visa',
      sourceLabel: 'UK Government – Skilled Worker visa',
    },
    {
      country: 'United Kingdom',
      date: '2024',
      headline: 'Health and Care Worker visa – ongoing demand',
      summary:
        'The Health and Care Worker visa remains a key route for care workers and eligible health professionals. Sponsorship by a licensed UK employer is required. Requirements and eligible occupations can change; confirm current rules on the official site.',
      sourceUrl: 'https://www.gov.uk/health-care-worker-visa',
      sourceLabel: 'UK Government – Health and Care Worker visa',
    },
    {
      country: 'Schengen / EU',
      date: '2025 (expected)',
      headline: 'ETIAS – new travel authorisation for visa-exempt visitors',
      summary:
        'The European Travel Information and Authorisation System (ETIAS) is expected to launch for travellers who do not need a visa to enter the Schengen area. It is an online authorisation, not a visa. Delays have occurred; check the official ETIAS site for the latest launch date and requirements.',
      sourceUrl: 'https://travel-europe.europa.eu/etias_en',
      sourceLabel: 'EU – ETIAS',
    },
    {
      country: 'Canada',
      date: '2024–2025',
      headline: 'Express Entry and work permit updates',
      summary:
        'Canada regularly updates Express Entry rounds, eligibility, and work permit programmes (including agricultural and seasonal workers). Application fees and processing times can change. Use the official IRCC website for current requirements.',
      sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html',
      sourceLabel: 'Canada – Express Entry',
    },
    {
      country: 'Australia',
      date: '2024–2025',
      headline: 'Visa application charges and skilled list reviews',
      summary:
        'Australia periodically adjusts visa application charges and updates skilled occupation lists. Subclass eligibility and points requirements can change. Check the Home Affairs website for the latest fees and lists.',
      sourceUrl: 'https://immi.homeaffairs.gov.au/',
      sourceLabel: 'Australia – Home Affairs',
    },
    {
      country: 'Germany',
      date: '2024',
      headline: 'Skilled Immigration Act – expanded routes',
      summary:
        'Germany has expanded routes for skilled workers, including opportunities for experience-based qualification and job-seeker procedures. Requirements and recognised occupations are set by German authorities. Official information is available in German and English.',
      sourceUrl: 'https://www.make-it-in-germany.com/en/visa-residence',
      sourceLabel: 'Make it in Germany – Visa & residence',
    },
  ]

  return (
    <main className="pt-[calc(4rem+60px)] bg-bg-light">
      <section className="py-xl">
        <div className="container">
          <nav className="text-sm text-text-light mb-md" aria-label="Breadcrumb">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">→</span>
            <a href="/blog" className="hover:text-primary">Blog</a>
            <span className="mx-2">→</span>
            <span className="text-text-dark font-medium">Visa updates</span>
          </nav>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">Visa & immigration updates</h1>
            <p className="text-text-medium leading-relaxed mb-lg">
              Countries often change visa rules, salary thresholds, and fees. This page is updated manually with changes we think matter for applicants from South Africa and the region. Always confirm current requirements on the official government or embassy site before applying.
            </p>

            <div className="space-y-lg">
              {updates.map((update, index) => (
                <article
                  key={index}
                  className="bg-white border border-border rounded-xl p-lg shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-sm">
                    <span className="font-bold text-primary">{update.country}</span>
                    <span className="text-text-light text-sm">·</span>
                    <time className="text-sm text-text-light">{update.date}</time>
                  </div>
                  <h2 className="text-xl font-bold text-text-dark mb-sm">{update.headline}</h2>
                  <p className="text-text-medium leading-relaxed mb-sm">{update.summary}</p>
                  <a
                    href={update.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary font-semibold hover:underline"
                  >
                    Source: {update.sourceLabel} →
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-xl p-lg bg-amber-50 border border-amber-200 rounded-xl">
              <h2 className="text-lg font-bold text-text-dark mb-sm">Disclaimer</h2>
              <p className="text-sm text-text-medium leading-relaxed">
                This page is for general information only. Visa and immigration rules change frequently. Immigrant Support Network does not guarantee the accuracy or completeness of this information. Always check the official website of the relevant government or embassy before making any application. We can help you with document preparation and application support—{' '}
                <a href="/contact" className="text-primary font-semibold hover:underline">contact us</a> for a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
