import { Link, useParams } from 'react-router-dom'

const posts: Record<string, { title: string; content: string }> = {
  'top-countries-hiring-2026': {
    title: 'Top 5 Countries Hiring Skilled African Workers in 2026',
    content: `Demand for skilled workers from Africa continues to grow in several key markets. Here are five countries with strong recruitment activity and how to position yourself.

**United Kingdom** – Care work and hospitality remain in high demand. The UK regularly recruits care workers, chefs, and hospitality staff from overseas. Work visas are employer-sponsored.

**Canada** – Farming, driving, and skilled trades are major pathways. Seasonal agricultural workers and truck drivers are especially sought after. Canada also runs skilled worker programmes.

**Germany** – IT, engineering, and healthcare professionals are in demand. Germany’s skilled worker visa programme has been expanded to attract qualified talent.

**Australia** – Hospitality, agriculture, and trades. Regional visas often have lower thresholds and can lead to permanent residence.

**New Zealand** – Similar to Australia, with strong demand in agriculture, hospitality, and construction.

To explore verified overseas job opportunities and work visa support, visit our **Overseas Employment Support** page or book a consultation via WhatsApp.`,
  },
  'step-by-step-work-permits': {
    title: 'Step-by-Step Guide to Legal Work Permits Abroad',
    content: `Applying for a work permit abroad can feel overwhelming. This guide breaks it down into clear steps.

**Step 1: Find a verified opportunity** – Work with licensed recruiters or employers with job sponsorship rights. Avoid unverified job ads and promises that sound too good.

**Step 2: Gather your documents** – Usually: passport, CV, qualifications, references, and sometimes a police clearance. Requirements vary by country.

**Step 3: Employer or recruiter sponsorship** – In most cases, the employer or licensed recruiter sponsors your application. They handle the offer letter and supporting paperwork.

**Step 4: Apply for the work permit or visa** – Once you have an offer, you apply to the relevant authority. Some countries require biometrics or an interview.

**Step 5: Wait for a decision** – Processing times vary. Stay in touch with your recruiter or employer for updates.

We help with applications, document preparation, and work visa support. For expert guidance, visit our **Overseas Employment Support** service and start your consultation.`,
  },
  'how-to-apply-safely': {
    title: 'How Africans Can Apply Safely to Jobs Overseas',
    content: `Scams and fake job offers are a real risk. Here’s how to protect yourself and apply safely.

**Verify the employer or recruiter** – Check they are licensed and registered. Real employers and recruiters can be verified through official databases.

**Never pay for a job** – Legitimate employers and recruiters do not charge you for a job offer. Be wary of “processing fees” or “visa fees” requested before you have a confirmed offer.

**Protect your documents** – Don’t send original documents to unknown contacts. Use secure channels and only share what’s needed.

**Use trusted intermediaries** – Organisations that partner with licensed recruiters can help you access verified opportunities and navigate the process safely.

Immigrant Support Network works with licensed international recruiters. We help you apply to real opportunities and guide you through work visa documentation. For overseas employment support, start your consultation today.`,
  },
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? posts[slug] : null

  if (!post) {
    return (
      <main className="pt-[calc(4rem+60px)] bg-bg-light py-xl">
        <div className="container">
          <p className="text-text-medium">Post not found.</p>
          <Link to="/blog" className="text-primary font-semibold hover:underline mt-sm inline-block">
            ← Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  const paragraphs = post.content.split('\n\n').filter(Boolean)

  const renderParagraph = (text: string) => {
    const parts = text.split(/(\*\*Overseas Employment Support\*\*)/g)
    return parts.map((part, j) =>
      part === '**Overseas Employment Support**' ? (
        <Link key={j} to="/overseas-employment-support" className="text-primary font-semibold hover:underline">
          Overseas Employment Support
        </Link>
      ) : (
        part
      )
    )
  }

  return (
    <main className="pt-[calc(4rem+60px)] bg-bg-light">
      <article className="py-xl">
        <div className="container">
          <nav className="text-sm text-text-light mb-md" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">→</span>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">→</span>
            <span className="text-text-dark font-medium">{post.title}</span>
          </nav>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">{post.title}</h1>
            <div className="prose prose-lg max-w-none">
              {paragraphs.map((para, i) => {
                if (para.startsWith('**') && para.endsWith('**') && !para.includes('\n')) {
                  return <h2 key={i} className="text-xl font-bold text-text-dark mt-lg mb-sm">{para.replace(/\*\*/g, '')}</h2>
                }
                return (
                  <p key={i} className="text-text-medium leading-relaxed mb-md">
                    {renderParagraph(para)}
                  </p>
                )
              })}
            </div>
            <div className="mt-xl pt-lg border-t border-border">
              <Link to="/overseas-employment-support" className="btn btn-primary">
                Start Your Overseas Job Consultation
              </Link>
              <Link to="/blog" className="ml-sm text-primary font-semibold hover:underline">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
