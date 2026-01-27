# Email Notification Fix Summary

## Problem Identified
The consultation form was calling `rapid-processor` edge function, but the actual function deployed is `send-notification`.

## Changes Made

### 1. Fixed Form Submission (BookingForm.tsx)
- Changed endpoint from `rapid-processor` to `send-notification`
- Improved error handling and logging
- Added better error messages for debugging
- Added Sentry error tracking for email failures

### 2. Fixed Email Function Syntax Error
- Fixed missing `<td>` tag in send-notification/index.ts (line 64)

## Next Steps to Get Emails Working

### Step 1: Verify Edge Function is Deployed
1. Go to Supabase Dashboard → Edge Functions
2. Check if `send-notification` function exists
3. If not, deploy it using the code in `supabase/functions/send-notification/index.ts`

### Step 2: Verify Resend API Key
1. Go to Supabase Dashboard → Edge Functions → Manage Secrets
2. Verify `RESEND_API_KEY` secret exists
3. Value should start with `re_...`
4. If missing, add it:
   - Get your Resend API key from: https://resend.com/api-keys
   - Add to Supabase secrets as `RESEND_API_KEY`

### Step 3: Test the Edge Function
Test directly via curl or browser:

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
    "message": "Test message"
  }'
```

Expected response: `{"success":true,"emailId":"..."}`

### Step 4: Check Resend Dashboard
1. Go to https://resend.com/dashboard
2. Click "Logs" tab
3. Look for recent emails
4. Check delivery status

### Step 5: Check Email Inbox
1. Check `info@immigrantsupportnetwork.co.za` inbox
2. Check spam/junk folder
3. Email should come from: `Immigrant Support Network <onboarding@resend.dev>`

## Troubleshooting Checklist

- [ ] Edge function `send-notification` is deployed in Supabase
- [ ] `RESEND_API_KEY` secret is set in Supabase
- [ ] Resend API key is valid (starts with `re_`)
- [ ] Form is calling correct endpoint (`send-notification`)
- [ ] Browser console shows no errors
- [ ] Network tab shows successful request to edge function
- [ ] Resend dashboard shows email was sent
- [ ] Check spam folder if email not received

## Common Issues

### Issue: "RESEND_API_KEY not configured"
**Solution:** Add the secret in Supabase Dashboard → Edge Functions → Manage Secrets

### Issue: Edge function returns 404
**Solution:** Deploy the `send-notification` function in Supabase

### Issue: Email sent but not received
**Solution:** 
- Check spam folder
- Verify email address: `info@immigrantsupportnetwork.co.za`
- Check Resend logs for delivery status

### Issue: CORS error
**Solution:** Edge function already has CORS headers configured

## Testing After Fix

1. Submit the consultation form on your website
2. Check browser console (F12) for any errors
3. Check Network tab for `send-notification` request
4. Check Supabase Edge Function logs
5. Check Resend dashboard logs
6. Check email inbox (and spam)

## Email Configuration

**From:** Immigrant Support Network <onboarding@resend.dev>
**To:** info@immigrantsupportnetwork.co.za
**Reply-To:** Client's email (for easy response)
**Subject:** New Consultation Request from [Client Name]
