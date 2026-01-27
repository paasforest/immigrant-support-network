import * as Sentry from '@sentry/react'
import { config } from './config'

/**
 * Initialize Sentry for error tracking
 */
export function initSentry() {
  if (config.sentry.dsn && config.sentry.environment === 'production') {
    Sentry.init({
      dsn: config.sentry.dsn,
      environment: config.sentry.environment,
      integrations: [
        new Sentry.BrowserTracing(),
        new Sentry.Replay({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
      // Performance Monitoring
      tracesSampleRate: 1.0, // Capture 100% of transactions in production
      // Session Replay
      replaysSessionSampleRate: 0.1, // Sample 10% of sessions
      replaysOnErrorSampleRate: 1.0, // Sample 100% of sessions with errors
      
      // Filter out sensitive data
      beforeSend(event) {
        // Remove sensitive data from error reports
        if (event.request) {
          delete event.request.cookies
        }
        return event
      },
    })
  }
  // Silently continue without Sentry in development
}

/**
 * Capture an exception
 */
export function captureException(error: Error, context?: Record<string, unknown>) {
  if (config.sentry.dsn) {
    Sentry.captureException(error, { extra: context })
  } else {
    console.error('Error:', error, context)
  }
}

/**
 * Capture a message
 */
export function captureMessage(message: string, level: Sentry.SeverityLevel = 'info') {
  if (config.sentry.dsn) {
    Sentry.captureMessage(message, level)
  }
  // Silent in development - no console logs
}



