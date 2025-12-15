import { createClient } from '@supabase/supabase-js'
import { config } from './config'

const supabaseUrl = config.supabase.url
const supabaseAnonKey = config.supabase.anonKey

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check ENV_SETUP.md')
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export type ConsultationRequest = {
  id?: string
  full_name: string
  email: string
  phone: string
  current_country: string
  destination_country: string
  service_type: string
  message?: string
  status?: 'pending' | 'contacted' | 'completed' | 'cancelled'
  created_at?: string
  updated_at?: string
}

// Database table names
export const Tables = {
  CONSULTATION_REQUESTS: 'consultation_requests',
} as const
