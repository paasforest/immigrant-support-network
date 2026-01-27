# Email Notification Diagnostic Guide

## ✅ What I Fixed

1. **Changed endpoint** from `rapid-processor` → `send-notification` (the correct function)
2. **Improved error handling** - now logs detailed errors for debugging
3. **Fixed email data mapping** - ensures all fields match the edge function interface

## 🔍 How to Verify Email is Working

### Step 1: Check Edge Function Exists
1. Go to: Supabase Dashboard → Edge Functions
2. Look for: `send-notification`
3. If missing, deploy it:
   - Copy code from: `supabase/functions/send-notification/index.ts`
   - Deploy via Supabase Dashboard or CLI

### Step 2: Verify Resend API Key
1. Go to: Supabase Dashboard → Edge Functions → Manage Secrets
2. Check for: `RESEND_API_KEY`
3. Value should start with: `re_...`
4. If missing:
   - Get key from: https://resend.com/api-keys
   - Add to Supabase secrets

### Step 3: Test Form Submission
1. Open website in incognito: https://immigrantsupportnetwork.co.za
2. Press F12 → Open Developer Console
3. Click "Network" tab
4. Fill and submit consultation form
5. Look for request to: `send-notification`
6. Check:
   - Status: Should be `200` (success) or `500` (error)
   - Response: Click request → "Response" tab → See result

### Step 4: Check Resend Dashboard
1. Go to: https://resend.com/dashboard
2. Click "Logs" tab
3. Look for recent emails
4. Check status:
   - ✅ "Delivered" → Email sent! Check inbox/spam
   - ❌ "Failed" → Check error message
   - ⏳ "Pending" → Wait a few minutes

### Step 5: Check Email Inbox
1. Check: info@immigrantsupportnetwork.co.za
2. Check spam/junk folder
3. Email from: `Immigrant Support Network <onboarding@resend.dev>`

## 🐛 Common Issues & Solutions

### Issue 1: "Function not found" (404)
**Cause:** Edge function not deployed
**Fix:** Deploy `send-notification` function in Supabase

### Issue 2: "RESEND_API_KEY not configured" (500)
**Cause:** API key missing in Supabase secrets
**Fix:** Add `RESEND_API_KEY` secret in Supabase Dashboard

### Issue 3: "Failed to send email" from Resend
**Cause:** Invalid API key or Resend account issue
**Fix:** 
- Verify API key in Resend dashboard
- Check Resend account status
- Verify API key is correct in Supabase secrets

### Issue 4: Email sent but not received
**Cause:** Email delivery issue
**Fix:**
- Check spam folder
- Verify email address is correct
- Check Resend logs for delivery status
- Add `onboarding@resend.dev` to contacts

### Issue 5: CORS error
**Cause:** Edge function CORS configuration
**Fix:** Already configured in function, but verify headers are correct

## 📋 Quick Diagnostic Checklist

Run through this checklist:

- [ ] Edge function `send-notification` exists in Supabase
- [ ] `RESEND_API_KEY` secret is set in Supabase
- [ ] Resend API key is valid (starts with `re_`)
- [ ] Form calls `send-notification` endpoint (check Network tab)
- [ ] Browser console shows no JavaScript errors
- [ ] Edge function returns 200 status
- [ ] Resend dashboard shows email was sent
- [ ] Email inbox checked (including spam)

## 🧪 Manual Test Command

Test the edge function directly:

```bash
curl -X POST \
  https://YOUR_SUPABASE_URL/functions/v1/send-notification \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_SUPABASE_ANON_KEY" \
  -d '{
    "full_name": "Test User",
    "email": "test@example.com",
    "phone": "+27123456789",
    "country_of_birth": "South Africa",
    "destination_country": "Canada",
    "preferred_contact": "Email",
    "message": "This is a test"
  }'
```

**Expected Success Response:**
```json
{"success":true,"emailId":"abc123..."}
```

**Expected Error Response:**
```json
{"success":false,"error":"RESEND_API_KEY not configured"}
```

## 📧 Email Configuration

**From Address:** Immigrant Support Network <onboarding@resend.dev>
**To Address:** info@immigrantsupportnetwork.co.za
**Reply-To:** Client's email (for easy response)
**Subject:** New Consultation Request from [Client Name]

## 🔗 Important Links

- **Supabase Dashboard:** https://supabase.com/dashboard
- **Resend Dashboard:** https://resend.com/dashboard
- **Resend API Keys:** https://resend.com/api-keys
- **Your Website:** https://immigrantsupportnetwork.co.za

## 📝 What Happens When Form is Submitted

1. ✅ Form data validated
2. ✅ Files uploaded (if any)
3. ✅ Data saved to Supabase database
4. ✅ Email notification sent via `send-notification` edge function
5. ✅ Success message shown to user
6. ✅ Email arrives at info@immigrantsupportnetwork.co.za

**Note:** Even if email fails, form submission still succeeds (non-blocking).
