# 🚀 How to Deploy `send-notification` Edge Function

## Step-by-Step Instructions

### Step 1: Go to Supabase Dashboard
1. Go to: https://supabase.com/dashboard
2. Select your project: `zoxfmguvhngidwqpdhvs`
3. Click **"Edge Functions"** in the left sidebar

### Step 2: Create New Function
1. Click **"Deploy new function"** or **"Create function"** button
2. Function name: **`send-notification`** (exactly this name, lowercase with hyphen)
3. Click **"Create"** or **"Continue"**

### Step 3: Copy the Code
1. Open the file: `supabase/functions/send-notification/index.ts` in your project
2. **Copy ALL the code** from that file
3. Go back to Supabase Dashboard
4. **Paste the code** into the function editor (replace any default code)

### Step 4: Deploy
1. Click **"Deploy"** button
2. Wait for deployment to complete (30-60 seconds)
3. You should see: ✅ "Function deployed successfully"

### Step 5: Verify It's Deployed
1. You should now see `send-notification` in your Edge Functions list
2. The URL should be: `https://zoxfmguvhngidwqpdhvs.supabase.co/functions/v1/send-notification`

---

## 🔑 Step 6: Add Resend API Key (CRITICAL!)

**Without this, emails won't work!**

1. Still in Supabase Dashboard → Edge Functions
2. Click **"Manage Secrets"** (or "Secrets" or "Environment Variables")
3. Click **"Add new secret"**
4. **Key:** `RESEND_API_KEY` (exactly this, all caps)
5. **Value:** Your Resend API key (starts with `re_...`)
6. Click **"Save"**

**Where to get Resend API key:**
- Go to: https://resend.com/api-keys
- Log in to your Resend account
- Click "Create API Key" if you don't have one
- Copy the key (starts with `re_...`)

---

## ✅ After Deployment

1. **Redeploy the function** (after adding the secret):
   - Go to Edge Functions → `send-notification`
   - Click **"Redeploy"** or **"Deploy"** again
   - This ensures it picks up the new secret

2. **Test it:**
   - Submit the consultation form on your website
   - Check browser Network tab for `send-notification` request
   - Check Resend dashboard → Logs for email status

---

## 🆘 If You Can't Find "Deploy New Function" Button

**Alternative Method:**
1. Go to: Edge Functions
2. Look for a **"+"** button or **"New"** button
3. Or try: Settings → Edge Functions → Create Function

**If still can't find it:**
- You might need to use Supabase CLI instead
- Let me know and I'll help with CLI deployment

---

## 📋 Quick Checklist

- [ ] Edge function `send-notification` created
- [ ] Code pasted from `supabase/functions/send-notification/index.ts`
- [ ] Function deployed successfully
- [ ] `RESEND_API_KEY` secret added
- [ ] Function redeployed after adding secret
- [ ] Function appears in Edge Functions list
- [ ] URL is: `.../functions/v1/send-notification`
