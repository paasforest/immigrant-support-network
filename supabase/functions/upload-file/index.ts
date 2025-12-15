import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { S3Client, PutObjectCommand } from 'https://deno.land/x/s3_lite_client@0.7.0/mod.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Initialize S3 client with Hetzner credentials (server-side only)
const s3Client = new S3Client({
  endPoint: Deno.env.get('S3_ENDPOINT') || 'fsn1.your-objectstorage.com',
  port: 443,
  useSSL: true,
  region: Deno.env.get('S3_REGION') || 'eu-central',
  accessKey: Deno.env.get('S3_ACCESS_KEY_ID') || '',
  secretKey: Deno.env.get('S3_SECRET_ACCESS_KEY') || '',
  bucket: Deno.env.get('S3_BUCKET_NAME') || '',
  pathStyle: true,
})

const BUCKET_NAME = Deno.env.get('S3_BUCKET_NAME') || 'immigrantsupport-network'
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

const allowedTypes = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

interface UploadResponse {
  url: string
  key: string
  size: number
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      throw new Error('Method not allowed')
    }

    // Get form data
    const formData = await req.formData()
    const file = formData.get('file') as File

    if (!file) {
      throw new Error('No file provided')
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      throw new Error(`File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB`)
    }

    // Validate file type
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Invalid file type. Only PDF, JPG, PNG, WEBP, and DOC/DOCX are allowed')
    }

    // Generate unique file key
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 8)
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const key = `documents/${timestamp}-${randomString}-${sanitizedName}`

    // Read file as ArrayBuffer
    const fileBuffer = await file.arrayBuffer()
    const fileUint8Array = new Uint8Array(fileBuffer)

    // Upload to Hetzner Object Storage
    await s3Client.putObject(key, fileUint8Array, {
      metadata: {
        'Content-Type': file.type,
      },
    })

    // Generate file URL
    const url = `https://${Deno.env.get('S3_ENDPOINT')}/${BUCKET_NAME}/${key}`

    const response: UploadResponse = {
      url,
      key,
      size: file.size,
    }

    return new Response(JSON.stringify(response), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Upload error:', error)
    
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Failed to upload file',
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    )
  }
})

