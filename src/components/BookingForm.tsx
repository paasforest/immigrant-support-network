import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { supabase, Tables } from '../lib/supabase'
import { consultationSchema, ConsultationFormData } from '../lib/validation'
import { sanitizeInput } from '../lib/sanitize'
import { useRecaptcha } from '../hooks/useRecaptcha'
import { captureException } from '../lib/sentry'
import { cn } from '../lib/utils'
import { uploadFile, validateFile } from '../lib/storage'

const serviceOptions = [
  'Visa Application Support',
  'Immigration Documentation',
  'EU Verification & Compliance',
  'Appeals & Refusals',
  'Study Abroad Guidance',
  'Work & Skilled Migration',
  'Other',
]

const africanCountries = [
  'Algeria',
  'Angola',
  'Benin',
  'Botswana',
  'Burkina Faso',
  'Burundi',
  'Cameroon',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Comoros',
  'Congo',
  'Democratic Republic of Congo',
  'Djibouti',
  'Egypt',
  'Equatorial Guinea',
  'Eritrea',
  'Eswatini',
  'Ethiopia',
  'Gabon',
  'Gambia',
  'Ghana',
  'Guinea',
  'Guinea-Bissau',
  'Ivory Coast',
  'Kenya',
  'Lesotho',
  'Liberia',
  'Libya',
  'Madagascar',
  'Malawi',
  'Mali',
  'Mauritania',
  'Mauritius',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Niger',
  'Nigeria',
  'Rwanda',
  'Sao Tome and Principe',
  'Senegal',
  'Seychelles',
  'Sierra Leone',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Sudan',
  'Tanzania',
  'Togo',
  'Tunisia',
  'Uganda',
  'Zambia',
  'Zimbabwe',
]

const popularDestinations = [
  'United Kingdom',
  'Canada',
  'United States',
  'Germany',
  'France',
  'Netherlands',
  'Belgium',
  'Italy',
  'Spain',
  'Sweden',
  'Norway',
  'Denmark',
  'Australia',
  'New Zealand',
  'Ireland',
  'Switzerland',
  'Austria',
  'Portugal',
  'Other',
]

export default function BookingForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  )
  const [errorMessage, setErrorMessage] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState<number>(0)
  const { verifyRecaptcha, isRecaptchaAvailable } = useRecaptcha()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    mode: 'onBlur',
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    
    // Validate each file
    const validFiles: File[] = []
    const errors: string[] = []
    
    files.forEach(file => {
      const validation = validateFile(file)
      if (validation.valid) {
        validFiles.push(file)
      } else {
        errors.push(`${file.name}: ${validation.error}`)
      }
    })
    
    if (errors.length > 0) {
      setErrorMessage(errors.join('\n'))
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
    
    setUploadedFiles(prev => [...prev, ...validFiles])
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: ConsultationFormData) => {
    setSubmitStatus('submitting')
    setErrorMessage('')
    setUploadProgress(0)

    try {
      // Verify reCAPTCHA
      if (isRecaptchaAvailable) {
        const token = await verifyRecaptcha('submit_consultation')
        if (!token) {
          throw new Error('reCAPTCHA verification failed. Please try again.')
        }
      }

      // Upload files if any
      let fileUrls: string[] = []
      if (uploadedFiles.length > 0) {
        setUploadProgress(10)
        const uploadPromises = uploadedFiles.map(file => uploadFile(file))
        const uploadResults = await Promise.all(uploadPromises)
        fileUrls = uploadResults.map(result => result.url)
        setUploadProgress(50)
      }

      // Sanitize all inputs (match database column names)
      const sanitizedData = {
        full_name: sanitizeInput(data.full_name),
        email: sanitizeInput(data.email.toLowerCase()),
        phone: sanitizeInput(data.phone),
        country_of_birth: sanitizeInput(data.current_country),
        destination: sanitizeInput(data.destination_country),
        preferred_contact: sanitizeInput(data.service_type),
        message: data.message ? sanitizeInput(data.message) : '',
        document_urls: fileUrls.length > 0 ? fileUrls.join(',') : null,
      }

      setUploadProgress(75)

      // Submit to Supabase
      const { error } = await supabase.from(Tables.CONSULTATION_REQUESTS).insert([sanitizedData])

      if (error) {
        console.error('Supabase error:', error)
        throw new Error('Failed to submit your request. Please try again.')
      }

      setUploadProgress(100)
      setSubmitStatus('success')
      reset()
      setUploadedFiles([])
      setUploadProgress(0)

      // Reset success message after 10 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 10000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setUploadProgress(0)
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to submit your request. Please try again or contact us directly.'
      )
      captureException(error as Error, { form: 'consultation_booking' })
    }
  }

  return (
    <section id="booking" className="py-xxl bg-bg-light">
      <div className="container">
        <div className="section-header">
          <h2>Book Your Free Consultation</h2>
          <p>
            Take the first step toward your immigration goals. Fill out the form below and we'll get
            in touch within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-xl max-w-6xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-lg rounded-xl shadow-lg border border-gray-200">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm mb-md">
              <div className="form-group">
                <label htmlFor="full_name">Full Name *</label>
                <input
                  type="text"
                  id="full_name"
                  {...register('full_name')}
                  placeholder="Enter your full name"
                  className={cn(errors.full_name && 'border-error')}
                />
                {errors.full_name && (
                  <p className="form-error">{errors.full_name.message}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  placeholder="your.email@example.com"
                  className={cn(errors.email && 'border-error')}
                />
                {errors.email && <p className="form-error">{errors.email.message}</p>}
              </div>
            </div>

            {/* Phone & Current Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm mb-md">
              <div className="form-group">
                <label htmlFor="phone">Phone Number (with country code) *</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  placeholder="+234 xxx xxx xxxx"
                  className={cn(errors.phone && 'border-error')}
                />
                {errors.phone && <p className="form-error">{errors.phone.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="current_country">Current Country *</label>
                <select
                  id="current_country"
                  {...register('current_country')}
                  className={cn(errors.current_country && 'border-error')}
                >
                  <option value="">Select your country</option>
                  {africanCountries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.current_country && (
                  <p className="form-error">{errors.current_country.message}</p>
                )}
              </div>
            </div>

            {/* Destination & Service Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm mb-md">
              <div className="form-group">
                <label htmlFor="destination_country">Destination Country *</label>
                <select
                  id="destination_country"
                  {...register('destination_country')}
                  className={cn(errors.destination_country && 'border-error')}
                >
                  <option value="">Select destination</option>
                  {popularDestinations.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.destination_country && (
                  <p className="form-error">{errors.destination_country.message}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="service_type">Service Needed *</label>
                <select
                  id="service_type"
                  {...register('service_type')}
                  className={cn(errors.service_type && 'border-error')}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service_type && (
                  <p className="form-error">{errors.service_type.message}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="form-group mb-md">
              <label htmlFor="message">Additional Information (Optional)</label>
              <textarea
                id="message"
                {...register('message')}
                placeholder="Tell us more about your situation, timeline, or specific questions..."
                rows={4}
                className={cn(errors.message && 'border-error')}
              />
              {errors.message && <p className="form-error">{errors.message.message}</p>}
            </div>

            {/* File Upload */}
            <div className="form-group mb-md">
              <label htmlFor="documents" className="flex items-center gap-2">
                📎 Upload Documents (Optional)
                <span className="text-xs text-text-light font-normal">
                  Passport, visa documents, etc. (Max 10MB each)
                </span>
              </label>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-md hover:border-primary transition-colors">
                <input
                  type="file"
                  id="documents"
                  onChange={handleFileChange}
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx"
                  className="hidden"
                  disabled={submitStatus === 'submitting'}
                />
                <label
                  htmlFor="documents"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <svg
                    className="w-12 h-12 text-gray-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-sm text-text-light">
                    <span className="text-primary font-medium">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-text-light mt-1">
                    PDF, JPG, PNG, WEBP, DOC, DOCX (Max 10MB per file)
                  </p>
                </label>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-sm space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-sm rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                          <p className="text-xs text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="ml-2 text-error hover:text-red-700 flex-shrink-0"
                        disabled={submitStatus === 'submitting'}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Upload Progress */}
              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="mt-sm">
                  <div className="flex justify-between text-xs text-text-light mb-1">
                    <span>Uploading documents...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Error Alert */}
            {submitStatus === 'error' && (
              <div className="alert alert-error">
                {errorMessage || 'An error occurred. Please try again.'}
              </div>
            )}

            {/* Success Alert */}
            {submitStatus === 'success' && (
              <div className="alert alert-success">
                ✓ Thank you! Your consultation request has been received. We'll contact you within
                24 hours.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary btn-large w-full"
              disabled={submitStatus === 'submitting'}
            >
              {submitStatus === 'submitting' ? 'Submitting...' : 'Book Free Consultation'}
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-text-light text-center mt-sm">
              By submitting this form, you acknowledge that visa approvals are not guaranteed and
              are subject to government authority decisions.
            </p>

            {/* reCAPTCHA Notice */}
            {isRecaptchaAvailable && (
              <p className="text-xs text-text-light text-center mt-2">
                This site is protected by reCAPTCHA and the Google{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            )}
          </form>

          {/* Info Sidebar */}
          <div className="bg-white p-lg rounded-xl shadow-lg border border-gray-200 h-fit order-first lg:order-last">
            {/* Consultant Image */}
            <div className="mb-md">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
                alt="Immigration Consultant"
                className="w-full h-48 object-cover rounded-lg mb-sm"
              />
              <div className="flex items-center gap-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-semibold">Available Now</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-primary mb-sm">What Happens Next?</h3>
            <ul className="list-none mb-lg space-y-2">
              {[
                'We review your information within 24 hours',
                'We contact you to schedule your consultation',
                'During the consultation, we assess your case and explain your options',
                'We provide a clear action plan with transparent pricing',
                'You decide if you want to proceed with our services',
              ].map((item, index) => (
                <li key={index} className="pl-6 relative text-text-medium text-sm">
                  <span className="absolute left-0 text-secondary font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-md border-t border-border">
              <h4 className="font-bold text-text-dark mb-sm">Other Ways to Reach Us</h4>
              <p className="text-sm text-text-medium mb-xs">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:info@immigrantsupportnetwork.co.za"
                  className="text-primary hover:underline"
                >
                  info@immigrantsupportnetwork.co.za
                </a>
              </p>
              <p className="text-sm text-text-medium mb-xs">
                <strong>WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/27679518124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline font-semibold"
                >
                  +27 67 951 8124
                </a>
              </p>
              <p className="text-sm text-text-medium">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (SAST)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
