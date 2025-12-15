// Supabase Edge Function for Rate Limiting
// Deploy with: supabase functions deploy rate-limit

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface RateLimitEntry {
  ip: string
  timestamp: number
  count: number
}

// In-memory store (for Edge Functions, you might want to use Redis or KV storage)
const rateLimitStore = new Map<string, RateLimitEntry>()

// Rate limit configuration
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes in milliseconds
const MAX_REQUESTS = 3 // Maximum 3 submission attempts per IP in 15 minutes

function getClientIP(req: Request): string {
  const forwardedFor = req.headers.get('x-forwarded-for')
  const realIP = req.headers.get('x-real-ip')
  
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  return 'unknown'
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  // Clean up old entries periodically
  if (Math.random() < 0.1) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (now - value.timestamp > RATE_LIMIT_WINDOW) {
        rateLimitStore.delete(key)
      }
    }
  }

  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW) {
    // First request or window expired
    rateLimitStore.set(ip, { ip, timestamp: now, count: 1 })
    return { allowed: true }
  }

  if (entry.count >= MAX_REQUESTS) {
    // Rate limit exceeded
    const retryAfter = Math.ceil((entry.timestamp + RATE_LIMIT_WINDOW - now) / 1000)
    return { allowed: false, retryAfter }
  }

  // Increment count
  entry.count++
  rateLimitStore.set(ip, entry)
  return { allowed: true }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const ip = getClientIP(req)
    
    // Check rate limit
    const rateLimitResult = checkRateLimit(ip)
    
    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({
          error: 'Rate limit exceeded',
          message: `Too many requests. Please try again in ${rateLimitResult.retryAfter} seconds.`,
          retryAfter: rateLimitResult.retryAfter,
        }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
            'Retry-After': String(rateLimitResult.retryAfter),
          },
        }
      )
    }

    // Parse request body
    const body = await req.json()
    
    // Validate reCAPTCHA token if provided
    if (body.recaptchaToken) {
      const recaptchaSecret = Deno.env.get('RECAPTCHA_SECRET_KEY')
      
      if (recaptchaSecret) {
        const recaptchaResponse = await fetch(
          `https://www.google.com/recaptcha/api/siteverify`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${recaptchaSecret}&response=${body.recaptchaToken}`,
          }
        )
        
        const recaptchaData = await recaptchaResponse.json()
        
        if (!recaptchaData.success || recaptchaData.score < 0.5) {
          return new Response(
            JSON.stringify({
              error: 'reCAPTCHA verification failed',
              message: 'Bot-like behavior detected. Please try again.',
            }),
            {
              status: 403,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            }
          )
        }
      }
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Insert consultation request
    const { data, error } = await supabase
      .from('consultation_requests')
      .insert([body.data])
      .select()

    if (error) {
      throw error
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Error:', error)
    
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'An unexpected error occurred',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})


