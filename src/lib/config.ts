// Application Configuration
export const config = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
  recaptcha: {
    siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  },
  sentry: {
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.VITE_ENV || 'development',
  },
  storage: {
    endpoint: import.meta.env.VITE_STORAGE_ENDPOINT,
    accessKey: import.meta.env.VITE_STORAGE_ACCESS_KEY,
    secretKey: import.meta.env.VITE_STORAGE_SECRET_KEY,
    bucket: import.meta.env.VITE_STORAGE_BUCKET,
  },
  api: {
    url: import.meta.env.VITE_API_URL,
  },
} as const

// Validate required environment variables
export function validateConfig() {
  const requiredVars = {
    VITE_SUPABASE_URL: config.supabase.url,
    VITE_SUPABASE_ANON_KEY: config.supabase.anonKey,
  }

  const missing = Object.entries(requiredVars)
    .filter(([, value]) => !value)
    .map(([key]) => key)

  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing)
    console.error('Please check your .env file. See ENV_SETUP.md for details.')
  }

  return missing.length === 0
}



