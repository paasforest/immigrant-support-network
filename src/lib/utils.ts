import clsx, { ClassValue } from 'clsx'

/**
 * Utility function to merge Tailwind CSS classes
 * @param classes - Classes to merge
 * @returns Merged class string
 */
export function cn(...classes: ClassValue[]) {
  return clsx(classes)
}

/**
 * Format date to human-readable string
 * @param date - Date string or Date object
 * @returns Formatted date string
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Scroll to element smoothly
 * @param elementId - ID of the element to scroll to
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Debounce function
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Check if we're in production environment
 */
export const isProduction = import.meta.env.PROD

/**
 * Check if we're in development environment
 */
export const isDevelopment = import.meta.env.DEV



