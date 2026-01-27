import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { config } from '../lib/config'

interface RecaptchaProviderProps {
  children: React.ReactNode
}

export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
  const recaptchaSiteKey = config.recaptcha.siteKey

  // If no reCAPTCHA key is configured, render children without provider
  if (!recaptchaSiteKey) {
    // reCAPTCHA is optional - silently continue without it
    return <>{children}</>
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaSiteKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}



