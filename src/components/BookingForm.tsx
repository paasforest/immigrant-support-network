import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { supabase, Tables } from '../lib/supabase'
import { consultationSchema, ConsultationFormData } from '../lib/validation'
import { sanitizeInput } from '../lib/sanitize'
import { useRecaptcha } from '../hooks/useRecaptcha'
import { captureException } from '../lib/sentry'
import { cn } from '../lib/utils'

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

  const onSubmit = async (data: ConsultationFormData) => {
    setSubmitStatus('submitting')
    setErrorMessage('')

    try {
      // Verify reCAPTCHA
      if (isRecaptchaAvailable) {
        const token = await verifyRecaptcha('submit_consultation')
        if (!token) {
          throw new Error('reCAPTCHA verification failed. Please try again.')
        }
      }

      // Sanitize all inputs
      const sanitizedData = {
        full_name: sanitizeInput(data.full_name),
        email: sanitizeInput(data.email.toLowerCase()),
        phone: sanitizeInput(data.phone),
        current_country: sanitizeInput(data.current_country),
        destination_country: sanitizeInput(data.destination_country),
        service_type: sanitizeInput(data.service_type),
        message: data.message ? sanitizeInput(data.message) : '',
      }

      // Submit to Supabase
      const { error } = await supabase.from(Tables.CONSULTATION_REQUESTS).insert([sanitizedData])

      if (error) {
        console.error('Supabase error:', error)
        throw new Error('Failed to submit your request. Please try again.')
      }

      setSubmitStatus('success')
      reset()

      // Reset success message after 10 seconds
      setTimeout(() => {
        if (submitStatus === 'success') {
          setSubmitStatus('idle')
        }
      }, 10000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
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
