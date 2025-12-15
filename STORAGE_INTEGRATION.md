# External Storage Integration Guide

## About Storage in Your Project

You mentioned using "**hertz bucket**" for storage instead of Supabase Storage. This guide explains how to integrate external storage providers.

## Current Setup

- ✅ **Database**: Using Supabase (as configured)
- ⏳ **Storage**: Configuration ready, awaiting your storage provider details

## Supported Storage Providers

### 1. AWS S3 (Most Popular)
- **Best for**: Enterprise applications, large files
- **Free tier**: 5GB storage, 20,000 GET requests, 2,000 PUT requests/month
- **Setup time**: 10 minutes

### 2. Cloudflare R2 (Cost-Effective)
- **Best for**: High bandwidth needs
- **Free tier**: 10GB storage, 1 million Class A operations/month
- **No egress fees**: Unlike S3, no charges for downloads
- **Setup time**: 5 minutes

### 3. Backblaze B2
- **Best for**: Budget-conscious projects
- **Free tier**: 10GB storage, 1GB daily download
- **Setup time**: 10 minutes

### 4. DigitalOcean Spaces
- **Best for**: Simple setup, predictable pricing
- **Cost**: $5/month for 250GB + 1TB transfer
- **S3-compatible API**
- **Setup time**: 5 minutes

## If You Meant "Hertz Bucket"

I'm not familiar with a service called "Hertz Bucket". You might be referring to:
- **Hertz** (car rental company) - unlikely to have cloud storage
- **Hetzner Storage Box** - German cloud provider
- A typo for one of the above services?

**Please clarify which storage service you'd like to use**, and I'll provide specific integration code!

## Integration Steps (General)

### Step 1: Get Storage Credentials

Regardless of provider, you'll need:
- **Endpoint URL**: Storage service endpoint
- **Access Key**: Public access key
- **Secret Key**: Private secret key
- **Bucket Name**: Your storage bucket/container name

### Step 2: Add to Environment Variables

Add to your `.env` file:

```env
# Storage Configuration
VITE_STORAGE_ENDPOINT=https://your-storage-endpoint.com
VITE_STORAGE_ACCESS_KEY=your_access_key
VITE_STORAGE_SECRET_KEY=your_secret_key
VITE_STORAGE_BUCKET=your_bucket_name
```

**Note**: These are already configured in `src/lib/config.ts`!

### Step 3: Install Storage SDK

```bash
# For AWS S3
npm install @aws-sdk/client-s3

# For Cloudflare R2 (S3-compatible)
npm install @aws-sdk/client-s3

# For Backblaze B2
npm install @aws-sdk/client-s3

# For DigitalOcean Spaces
npm install @aws-sdk/client-s3
```

Most providers use S3-compatible APIs!

### Step 4: Create Storage Utility

I'll create a ready-to-use storage utility once you tell me which provider you're using.

## Example: AWS S3 Integration

Here's how integration would look (I can create this for your specific provider):

```typescript
// src/lib/storage.ts
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { config } from './config'

const s3Client = new S3Client({
  endpoint: config.storage.endpoint,
  region: 'auto', // or your specific region
  credentials: {
    accessKeyId: config.storage.accessKey,
    secretAccessKey: config.storage.secretKey,
  },
})

export async function uploadFile(
  file: File,
  folder: string = 'uploads'
): Promise<string> {
  const fileName = `${folder}/${Date.now()}-${file.name}`
  
  const command = new PutObjectCommand({
    Bucket: config.storage.bucket,
    Key: fileName,
    Body: file,
    ContentType: file.type,
  })

  await s3Client.send(command)
  
  return `${config.storage.endpoint}/${config.storage.bucket}/${fileName}`
}
```

## Common Use Cases

### 1. Document Uploads (Visa Applications, etc.)
```typescript
// Users can upload passports, bank statements, etc.
const documentUrl = await uploadFile(file, 'documents')
```

### 2. Profile Pictures
```typescript
const avatarUrl = await uploadFile(file, 'avatars')
```

### 3. Temporary Files
```typescript
const tempUrl = await uploadFile(file, 'temp')
// Delete after 24 hours with lifecycle rules
```

## Security Best Practices

1. **Never expose secret keys**: Keep them in `.env` only
2. **Use signed URLs**: For private document access
3. **Implement file type validation**: Only allow specific file types
4. **Set file size limits**: Prevent abuse (e.g., 10MB max)
5. **Enable CORS**: Configure bucket CORS for web uploads
6. **Use virus scanning**: For uploaded files (optional)

## Cost Comparison

For 100GB storage + 1TB monthly transfer:

| Provider | Monthly Cost | Free Tier |
|----------|-------------|-----------|
| AWS S3 | ~$25-30 | 5GB/12 months |
| Cloudflare R2 | ~$1.50 | 10GB always free |
| Backblaze B2 | ~$5 | 10GB always free |
| DigitalOcean | $5 (fixed) | None |
| Supabase | ~$15 | 1GB always free |

## Next Steps

### Option 1: Use Supabase Storage (Simplest)
If you want the easiest integration, just use Supabase Storage since you're already using Supabase for the database.

**Pros:**
- Already integrated
- Simple API
- No additional setup
- Built-in CDN

**Cons:**
- More expensive for large files
- Locked into Supabase ecosystem

### Option 2: External Storage (Your Preference)
Tell me which provider you want to use (or clarify "hertz bucket"), and I'll:

1. Create the complete storage utility
2. Add upload functionality to forms
3. Implement signed URLs for secure access
4. Add file validation
5. Update documentation

## What I Need From You

Please provide:
1. **Storage provider name** (AWS S3, Cloudflare R2, etc.)
2. **Use case** (What will you store? Documents, images, etc.)
3. **Expected volume** (How many files/month?)

Then I can create the perfect integration for your needs!

## Temporary Solution

For now, your application works without external storage:
- ✅ Form submissions work
- ✅ Data stored in Supabase
- ⏳ File uploads can be added when you decide on storage

**Your app is fully functional as-is!** Storage can be added anytime.

---

**Reply with your storage provider choice, and I'll complete the integration!** 🚀

