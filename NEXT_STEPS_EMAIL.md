# 📧 Email Setup - Next Steps (After DNS Verification)

## ✅ What We've Done So Far:

- ✅ Created Resend account
- ✅ Got API key (starts with `re_...`)
- ✅ Added domain to Resend
- ✅ Added 3 DNS records to 1-Grid
- ⏳ Waiting for DNS propagation...
- ✅ Code committed and pushed to GitHub
- ✅ Vercel deploying frontend changes

---

## 🎯 Once DNS Verifies (After You See "Verified" in Resend):

### **Step 1: Add Resend API Key to Supabase**

1. Go to: https://supabase.com/dashboard
2. Select your project
3. Click "Edge Functions" in left sidebar
4. Click "Manage Secrets" or "Environment Variables"
5. Add new secret:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_...` (your API key from Resend)
6. Click "Save"

---

### **Step 2: Deploy the Edge Function**

Run this command:

```bash
cd /home/paas/immgrant
supabase functions deploy send-notification
```

OR if you don't have Supabase CLI, deploy via dashboard:

1. Go to Supabase → Edge Functions
2. Click "Deploy new function"
3. Name: `send-notification`
4. Copy code from: `supabase/functions/send-notification/index.ts`
5. Paste and deploy

---

### **Step 3: Wait for Vercel Deployment**

Check: https://vercel.com/paas-projects-5446f34f/immigrant-support-network

Wait for commit `b9859d2` to show "Ready" ✅

---

### **Step 4: Test Email Notifications!**

1. Open incognito: https://immigrantsupportnetwork.co.za
2. Fill out consultation form
3. Upload a test file
4. Submit
5. Check email: info@immigrantsupportnetwork.co.za

**You should receive:**
- Subject: "New Consultation Request from [Name]"
- All form details beautifully formatted
- Easy reply button (replies go to client's email)

---

## 🔍 If Email Doesn't Arrive:

1. **Check spam folder** (first emails often go there)
2. **Check Resend dashboard** → "Logs" tab → See delivery status
3. **Check Supabase Edge Function logs** → Look for errors
4. **Verify RESEND_API_KEY** is set correctly in Supabase secrets

---

## ⏰ Current Status:

**Waiting for:** DNS propagation (5-60 minutes)

**Try verifying every 5 minutes:**
1. Go to Resend → Domains
2. Click "Verify" button
3. If verified → Proceed to Step 1 above!

---

**Last Updated:** December 17, 2025

