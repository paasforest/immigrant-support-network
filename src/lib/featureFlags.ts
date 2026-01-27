/**
 * Feature Flags System
 * 
 * Controls which features are enabled/disabled.
 * The AI Chat will automatically enable after 6 months!
 */

// Launch date: When the site goes live
const LAUNCH_DATE = new Date('2025-12-15') // Today's date

// Auto-enable date: 6 months from launch
const AI_CHAT_AUTO_ENABLE_DATE = new Date(LAUNCH_DATE)
AI_CHAT_AUTO_ENABLE_DATE.setMonth(AI_CHAT_AUTO_ENABLE_DATE.getMonth() + 6)

/**
 * Check if AI Chat should be enabled
 * 
 * Enabled if:
 * 1. Manual override in .env (VITE_ENABLE_AI_CHAT=true)
 * 2. Testing mode (?testchat=true in URL)
 * 3. Auto-enable date has passed (6 months after launch)
 */
export function isAIChatEnabled(): boolean {
  // Check manual override from .env
  const manualOverride = import.meta.env.VITE_ENABLE_AI_CHAT === 'true'
  if (manualOverride) return true

  // Check testing mode from URL
  const urlParams = new URLSearchParams(window.location.search)
  const testMode = urlParams.get('testchat') === 'true'
  if (testMode) return true

  // Check if 6 months have passed (auto-enable)
  const now = new Date()
  const autoEnabled = now >= AI_CHAT_AUTO_ENABLE_DATE
  if (autoEnabled) {
    return true
  }

  // Otherwise, disabled
  return false
}

/**
 * Get days remaining until AI Chat auto-enables
 */
export function getDaysUntilAIChatEnabled(): number {
  const now = new Date()
  const diffTime = AI_CHAT_AUTO_ENABLE_DATE.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return Math.max(0, diffDays)
}

/**
 * Get the auto-enable date as a formatted string
 */
export function getAIChatAutoEnableDate(): string {
  return AI_CHAT_AUTO_ENABLE_DATE.toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Log feature flags status (for debugging in development only)
 */
export function logFeatureFlagsStatus(): void {
  if (import.meta.env.DEV) {
    console.log('🚩 Feature Flags Status:')
    console.log('---')
    console.log(`Launch Date: ${LAUNCH_DATE.toLocaleDateString()}`)
    console.log(`AI Chat Auto-Enable Date: ${getAIChatAutoEnableDate()}`)
    console.log(`Days Until Auto-Enable: ${getDaysUntilAIChatEnabled()}`)
    console.log(`AI Chat Enabled: ${isAIChatEnabled()}`)
    console.log('---')
    console.log('💡 To test AI Chat now: Add ?testchat=true to URL')
    console.log('💡 To enable manually: Set VITE_ENABLE_AI_CHAT=true in .env')
  }
}

