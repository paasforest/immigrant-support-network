# 🗄️ Hetzner Object Storage Setup Guide

## ✅ Secure Server-Side File Upload Configuration

This guide shows you how to configure Hetzner Object Storage credentials **securely** in Supabase Edge Functions (server-side only).

---

## 🔒 **Why This Way is Secure:**

❌ **BEFORE (Insecure):** S3 credentials in frontend → Anyone can steal them  
✅ **NOW (Secure):** S3 credentials in Supabase → Hidden from users

**Flow:**
```
User uploads file → Frontend → Supabase Edge Function → Hetzner Storage
                                    ↑
                            Secrets stored here
                            (never exposed)
```

---

## 📋 **Step 1: Deploy Edge Function to Supabase**

### **1.1 Install Supabase CLI** (if not already installed)

```bash
npm install -g supabase
```

### **1.2 Login to Supabase CLI**

```bash
supabase login
```

This will open a browser for authentication.

### **1.3 Link Your Project**

```bash
cd /home/paas/immgrant
supabase link --project-ref zoxfmguvhngidwqpdhvs
```

When prompted, select your project: `zoxfmguvhngidwqpdhvs`

### **1.4 Deploy the Upload Function**

```bash
supabase functions deploy upload-file
```

---

## 🔑 **Step 2: Add Hetzner Credentials as Supabase Secrets**

These secrets are stored **server-side only** and never exposed to the frontend.

### **Option A: Using Supabase CLI** (Recommended)

```bash
# Set S3 Access Key
supabase secrets set S3_ACCESS_KEY_ID=NE851MPEC7CFZ4269KF4

# Set S3 Secret Key
supabase secrets set S3_SECRET_ACCESS_KEY=26TCLezHIEKL3HU4q8GudZLzrPHflRceCFiSWzfc

# Set S3 Bucket Name
supabase secrets set S3_BUCKET_NAME=immigrantsupport-network

# Set S3 Region
supabase secrets set S3_REGION=eu-central

# Set S3 Endpoint (without https://)
supabase secrets set S3_ENDPOINT=fsn1.your-objectstorage.com
```

### **Option B: Using Supabase Dashboard**

1. Go to: https://supabase.com/dashboard/project/zoxfmguvhngidwqpdhvs/settings/functions
2. Click on **"Edge Functions"** in the sidebar
3. Click **"Manage secrets"**
4. Add each secret:

| Secret Name | Secret Value |
|-------------|--------------|
| `S3_ACCESS_KEY_ID` | `NE851MPEC7CFZ4269KF4` |
| `S3_SECRET_ACCESS_KEY` | `26TCLezHIEKL3HU4q8GudZLzrPHflRceCFiSWzfc` |
| `S3_BUCKET_NAME` | `immigrantsupport-network` |
| `S3_REGION` | `eu-central` |
| `S3_ENDPOINT` | `fsn1.your-objectstorage.com` |

---

## 🧪 **Step 3: Test the Upload Function**

### **3.1 Test via Terminal**

```bash
curl -X POST \
  https://zoxfmguvhngidwqpdhvs.supabase.co/functions/v1/upload-file \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -F "file=@/path/to/test-file.pdf"
```

Replace:
- `YOUR_ANON_KEY` with your Supabase anon key
- `/path/to/test-file.pdf` with a real test file

### **3.2 Test via Browser**

1. Run your dev server: `npm run dev`
2. Open http://localhost:5173
3. Go to booking form
4. Try uploading a document
5. Check browser console for success/errors

---

## ✅ **Step 4: Verify Everything Works**

### **Checklist:**

- [ ] Edge function deployed to Supabase
- [ ] All 5 secrets added to Supabase
- [ ] Test upload works locally
- [ ] Test upload works on live site (after Vercel deployment)

---

## 🌐 **Step 5: Update Vercel** (Final Step)

Now that storage is handled by Supabase Edge Functions, you **DO NOT** need to add S3 credentials to Vercel!

Vercel only needs:
```
✅ VITE_SUPABASE_URL
✅ VITE_SUPABASE_ANON_KEY
✅ VITE_RECAPTCHA_SITE_KEY
✅ VITE_ENV
```

That's it! S3 credentials stay safe in Supabase. 🔒

---

## 📊 **Security Comparison:**

| Method | Frontend Exposure | Security Level |
|--------|------------------|----------------|
| ❌ Client-side S3 | **Exposed** | 🔴 Critical Risk |
| ✅ Supabase Edge Function | **Hidden** | 🟢 Secure |

---

## 🆘 **Troubleshooting:**

### **Error: "Failed to upload file"**

1. Check if secrets are set:
   ```bash
   supabase secrets list
   ```

2. Check Edge Function logs:
   ```bash
   supabase functions logs upload-file
   ```

3. Verify bucket exists in Hetzner console

### **Error: "Access Denied"**

- Double-check S3 credentials in Supabase secrets
- Verify bucket name is correct
- Check Hetzner access key permissions

### **Error: "CORS issue"**

- Edge Functions have CORS enabled by default
- Check browser console for specific error

---

## 📝 **Quick Command Reference:**

```bash
# Login to Supabase
supabase login

# Link project
supabase link --project-ref zoxfmguvhngidwqpdhvs

# Deploy function
supabase functions deploy upload-file

# Set secrets (all 5)
supabase secrets set S3_ACCESS_KEY_ID=NE851MPEC7CFZ4269KF4
supabase secrets set S3_SECRET_ACCESS_KEY=26TCLezHIEKL3HU4q8GudZLzrPHflRceCFiSWzfc
supabase secrets set S3_BUCKET_NAME=immigrantsupport-network
supabase secrets set S3_REGION=eu-central
supabase secrets set S3_ENDPOINT=fsn1.your-objectstorage.com

# List secrets (verify)
supabase secrets list

# View logs
supabase functions logs upload-file
```

---

## ✅ **Done!**

Your file upload system is now:
- ✅ Secure (credentials hidden)
- ✅ Scalable (serverless)
- ✅ Cost-effective (€4.99/month)
- ✅ Production-ready

**Next:** Deploy to Vercel and test on live site!

