// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

interface EmailRequest {
  full_name: string
  email: string
  phone: string
  country_of_birth: string
  destination_country: string
  preferred_contact: string
  message?: string
  document_urls?: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not configured')
    }

    // Parse request body
    const data: EmailRequest = await req.json()

    // Build email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
          🎉 New Consultation Request
        </h2>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Client Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Full Name:</td>
              <td style="padding: 8px 0;">${data.full_name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Country of Birth:</td>
              <td style="padding: 8px 0;">${data.country_of_birth}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Destination:</td>
              <td style="padding: 8px 0;">${data.destination_country}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Preferred Contact:</td>
              <td style="padding: 8px 0;">${data.preferred_contact}</td>
            </tr>
          </table>
        </div>

        ${data.message ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #374151;">Message</h3>
          <p style="background: #f9fafb; padding: 15px; border-left: 4px solid #1e40af; margin: 0;">
            ${data.message}
          </p>
        </div>
        ` : ''}

        ${data.document_urls ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #374151;">📎 Attached Documents</h3>
          <p style="background: #fef3c7; padding: 10px; border-radius: 4px;">
            Documents uploaded - view in Supabase Storage
          </p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent from your website consultation form.</p>
          <p><strong>Next Steps:</strong> Reply to this client within 24 hours to maintain excellent service!</p>
        </div>
      </div>
    `

    // Send email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Immigrant Support Network <onboarding@resend.dev>',
        to: ['info@immigrantsupportnetwork.co.za'],
        subject: `New Consultation Request from ${data.full_name}`,
        html: emailHtml,
        reply_to: data.email, // Client's email for easy reply
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend API error:', error)
      throw new Error(`Failed to send email: ${error}`)
    }

    const result = await response.json()

    return new Response(
      JSON.stringify({ success: true, emailId: result.id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error sending notification:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send notification',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})

