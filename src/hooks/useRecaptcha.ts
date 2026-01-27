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
        // reCAPTCHA not available - silently return null
        return null
      }

      try {
        const token = await executeRecaptcha(action)
        return token
      } catch (error) {
        // reCAPTCHA failed - log to error tracking only
        if (import.meta.env.PROD) {
          // Error tracking service would log this
        }
        return null
      }
    },
    [executeRecaptcha]
  )

  return { verifyRecaptcha, isRecaptchaAvailable: !!executeRecaptcha }
}


