import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useCallback } from 'react'

/**
 * Hook to execute reCAPTCHA verification
 */
export function useRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const verifyRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      if (!executeRecaptcha) {
        console.warn('reCAPTCHA not available')
        return null
      }

      try {
        const token = await executeRecaptcha(action)
        return token
      } catch (error) {
        console.error('reCAPTCHA verification failed:', error)
        return null
      }
    },
    [executeRecaptcha]
  )

  return { verifyRecaptcha, isRecaptchaAvailable: !!executeRecaptcha }
}


