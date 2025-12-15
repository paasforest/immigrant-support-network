# 🚀 Deploy Edge Function via Supabase Dashboard (No CLI Needed!)

## ✅ **Easier Method - Use the Dashboard**

Instead of CLI, we'll deploy the Edge Function directly through Supabase Dashboard!

---

## 📋 **Step 1: Go to Edge Functions**

1. Open: https://supabase.com/dashboard/project/zoxfmguvhngidwqpdhvs/functions
2. Click **"Create a new function"**

---

## 📋 **Step 2: Create the Function**

### **Function Name:**
```
upload-file
```

### **Function Code:**

Copy and paste this entire code:

```typescript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { S3Client } from 'https://deno.land/x/s3_lite_client@0.7.0/mod.ts'

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
```

3. Click **"Deploy function"**

---

## 📋 **Step 3: Add Environment Secrets**

After the function is deployed:

1. Go to: https://supabase.com/dashboard/project/zoxfmguvhngidwqpdhvs/settings/functions
2. Scroll to **"Secrets"** section
3. Click **"Add secret"**

Add these **5 secrets** one by one:

| Secret Name | Secret Value |
|-------------|--------------|
| `S3_ACCESS_KEY_ID` | `NE851MPEC7CFZ4269KF4` |
| `S3_SECRET_ACCESS_KEY` | `26TCLezHIEKL3HU4q8GudZLzrPHflRceCFiSWzfc` |
| `S3_BUCKET_NAME` | `immigrantsupport-network` |
| `S3_REGION` | `eu-central` |
| `S3_ENDPOINT` | `fsn1.your-objectstorage.com` |

**For each secret:**
- Click **"Add secret"**
- Enter the **Name**
- Enter the **Value**
- Click **"Save"**

---

## ✅ **Step 4: Verify**

1. Go back to: https://supabase.com/dashboard/project/zoxfmguvhngidwqpdhvs/functions
2. You should see `upload-file` function listed
3. Status should be **"Active"** ✅

---

## 🧪 **Step 5: Test It**

Your function URL is:
```
https://zoxfmguvhngidwqpdhvs.supabase.co/functions/v1/upload-file
```

Test it:
1. Visit your live site: https://immigrantsupportnetwork.co.za
2. Scroll to booking form
3. Try uploading a test file
4. It should work! ✅

---

## ✅ **That's It!**

No CLI needed! File uploads will now work securely on your live site! 🎉

**Questions?** Just ask!

