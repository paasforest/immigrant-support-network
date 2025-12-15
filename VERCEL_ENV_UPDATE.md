# 🔧 Update Vercel Environment Variables

## Add Hetzner Object Storage to Your Live Site

Now that storage is set up locally, you need to add the same variables to Vercel so your live site can upload files.

---

## 📋 **Step-by-Step Guide:**

### **1. Go to Vercel Project Settings**

Visit: https://vercel.com/paas-projects-5446f34f/immigrant-support-network/settings/environment-variables

**Or navigate:**
1. Log into https://vercel.com
2. Click on `immigrant-support-network` project
3. Click **"Settings"** (top menu)
4. Click **"Environment Variables"** (left sidebar)

---

### **2. Add These Environment Variables**

Click **"Add New"** for each variable:

#### **Hetzner Object Storage Variables:**

| Key | Value | Environment |
|-----|-------|-------------|
| `VITE_S3_ACCESS_KEY_ID` | `NE851MPEC7CFZ4269KF4` | Production, Preview, Development |
| `VITE_S3_SECRET_ACCESS_KEY` | `26TCLezHIEKL3HU4q8GudZLzrPHflRceCFiSWzfc` | Production, Preview, Development |
| `VITE_S3_BUCKET_NAME` | `immigrantsupport-network` | Production, Preview, Development |
| `VITE_S3_REGION` | `eu-central` | Production, Preview, Development |
| `VITE_S3_ENDPOINT` | `https://fsn1.your-objectstorage.com` | Production, Preview, Development |

**For each variable:**
1. Click **"Add New"**
2. **Name:** Paste the key name
3. **Value:** Paste the value
4. **Environments:** Check ✅ Production, ✅ Preview, ✅ Development
5. Click **"Save"**

---

### **3. Redeploy Your Site**

After adding all variables:

1. Go to **"Deployments"** tab
2. Click the **3 dots (...)** on the latest deployment
3. Click **"Redeploy"**
4. Wait ~2 minutes for rebuild

---

### **4. Verify It Works**

After redeployment:
1. Visit: https://immigrantsupportnetwork.co.za
2. Scroll to booking form
3. Try uploading a test document
4. Check if it uploads successfully!

---

## ✅ **Current Environment Variables**

Your Vercel should have:

```
✅ VITE_SUPABASE_URL
✅ VITE_SUPABASE_ANON_KEY
✅ VITE_RECAPTCHA_SITE_KEY
✅ VITE_S3_ACCESS_KEY_ID (NEW)
✅ VITE_S3_SECRET_ACCESS_KEY (NEW)
✅ VITE_S3_BUCKET_NAME (NEW)
✅ VITE_S3_REGION (NEW)
✅ VITE_S3_ENDPOINT (NEW)
```

---

## 🔒 **Security Notes:**

- ✅ Environment variables are encrypted on Vercel
- ✅ They are never exposed to the client (server-side only)
- ✅ Your `.env` file is gitignored (not in GitHub)
- ✅ You can rotate/change keys anytime

---

## 🆘 **Need Help?**

If you get stuck:
1. Double-check variable names match exactly
2. Make sure all 3 environments are checked
3. Redeploy after adding variables
4. Clear browser cache and try again

---

**Ready? Add those variables to Vercel now!** 🚀

