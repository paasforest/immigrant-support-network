# 🚀 Quick Email Fix - Start Here

## Step-by-Step Fix (Do These in Order)

### ✅ STEP 1: Verify Edge Function is Deployed

**Go to:** https://supabase.com/dashboard

1. Select your project
2. Click **"Edge Functions"** in left sidebar
3. Look for function named: **`send-notification`**

**If function EXISTS:**
- ✅ Good! Move to Step 2

**If function DOES NOT EXIST:**
- ❌ Need to deploy it
- Go to: Edge Functions → "Deploy new function"
- Name: `send-notification`
- Copy code from: `supabase/functions/send-notification/index.ts`
- Paste and click "Deploy"

---

### ✅ STEP 2: Verify Resend API Key is Set

**Still in Supabase Dashboard:**

1. Click **"Edge Functions"** → **"Manage Secrets"** (or "Environment Variables")
2. Look for secret named: **`RESEND_API_KEY`**

**If secret EXISTS:**
- ✅ Check value starts with `re_...`
- If not, you need to update it (Step 2b)

**If secret DOES NOT EXIST:**
- ❌ Need to add it (Step 2a)

#### Step 2a: Get Resend API Key
1. Go to: https://resend.com/api-keys
2. Log in to your Resend account
3. Click **"Create API Key"**
4. Name: "Immigrant Support Network"
5. Permission: "Sending access"
6. Click **"Create"**
7. **Copy the key** (starts with `re_...`)

#### Step 2b: Add to Supabase
1. Back in Supabase → Edge Functions → Manage Secrets
2. Click **"Add new secret"**
3. Key: `RESEND_API_KEY`
4. Value: Paste your Resend API key (`re_...`)
5. Click **"Save"**

---

### ✅ STEP 3: Redeploy Edge Function (After Adding Secret)

**If you just added/updated the API key:**

1. Go to: Edge Functions → `send-notification`
2. Click **"Redeploy"** or **"Deploy"**
3. Wait for deployment to complete

**Why:** Edge functions need to be redeployed after adding secrets

---

### ✅ STEP 4: Test the Form

1. **Open your website:** https://immigrantsupportnetwork.co.za
2. **Open Developer Tools:** Press `F12`
3. **Go to Network tab**
4. **Fill out consultation form** with test data
5. **Submit the form**
6. **Watch Network tab** for request to `send-notification`

**What to look for:**
- ✅ Status `200` = Success! Check email
- ❌ Status `404` = Function not deployed (go back to Step 1)
- ❌ Status `500` = API key issue (go back to Step 2)

---

### ✅ STEP 5: Check Resend Dashboard

1. Go to: https://resend.com/dashboard
2. Click **"Logs"** tab
3. Look for recent email

**Status meanings:**
- ✅ **"Delivered"** = Email sent! Check your inbox/spam
- ❌ **"Failed"** = Check error message
- ⏳ **"Pending"** = Wait a few minutes

---

### ✅ STEP 6: Check Your Email

1. Check: **info@immigrantsupportnetwork.co.za**
2. **Check spam/junk folder** (important!)
3. Email from: `Immigrant Support Network <onboarding@resend.dev>`

---

## 🐛 If Still Not Working

### Check Browser Console
1. Press `F12` → **Console** tab
2. Submit form again
3. Look for any red error messages
4. Copy any errors you see

### Check Network Request Details
1. Press `F12` → **Network** tab
2. Submit form
3. Click on `send-notification` request
4. Click **"Response"** tab
5. Copy the response message

### Check Supabase Logs
1. Supabase Dashboard → Edge Functions → `send-notification`
2. Click **"Logs"** or **"Invocations"** tab
3. Look for recent invocations
4. Check for error messages

---

## 📋 Quick Checklist

Run through this quickly:

- [ ] Edge function `send-notification` exists in Supabase
- [ ] `RESEND_API_KEY` secret is set in Supabase
- [ ] Resend API key starts with `re_`
- [ ] Edge function redeployed after adding secret
- [ ] Form submission shows request to `send-notification` in Network tab
- [ ] Request returns status 200 (not 404 or 500)
- [ ] Resend dashboard shows email was sent
- [ ] Checked email inbox AND spam folder

---

## 🆘 Need Help?

If you get stuck at any step, tell me:
1. Which step you're on
2. What you see (screenshots help!)
3. Any error messages

I'll help you fix it!
