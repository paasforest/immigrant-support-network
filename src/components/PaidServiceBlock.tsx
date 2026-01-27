import { scrollToElement } from '../lib/utils'

export default function PaidServiceBlock() {
  const handleAssessmentClick = () => {
    scrollToElement('booking')
  }

  return (
    <section className="py-xxl bg-gradient-to-br from-blue-50 to-white border-b-4 border-blue-600">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-blue-600 rounded-xl shadow-lg p-lg md:p-xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-sm">
                Visa Assessment & Second Opinion
              </h2>
              <p className="text-lg text-text-medium mb-lg">
                Recommended before applying to avoid costly mistakes
              </p>
              
              <p className="text-text-dark mb-lg max-w-2xl mx-auto">
                Get a professional review of your visa application documents, eligibility assessment, and expert guidance on how to strengthen your application before submission.
              </p>
              
              <div className="flex items-center justify-center gap-2 mb-lg">
                <span className="text-4xl font-bold text-primary">R499</span>
                <span className="text-text-medium">one-time assessment</span>
              </div>
              
              <button
                onClick={handleAssessmentClick}
                className="btn btn-primary btn-large px-10 py-4 text-lg font-bold shadow-xl hover:scale-105 transition-transform"
              >
                Start Visa Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
