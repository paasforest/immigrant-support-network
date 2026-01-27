# 📧 Email Notification Setup Guide

## ✅ What We're Building

When someone submits the consultation form, you'll receive an instant email notification at `info@immigrantsupportnetwork.co.za` with all their details.

---

## 🎯 Setup Progress Checklist

- [ ] Sign up for Resend account
- [ ] Get Resend API key
- [ ] Add domain to Resend
- [ ] Add 3 DNS records at 1-Grid
- [ ] Verify domain in Resend
- [ ] Add API key to Supabase secrets
- [ ] Deploy Edge Function
- [ ] Test email notifications

---

## 📋 Step-by-Step Instructions

### **Step 1: Create Resend Account**

1. Go to: https://resend.com/signup
2. Sign up with your email
3. Verify your email
4. Log in to dashboard

---

### **Step 2: Get API Key**

1. In Resend dashboard → "API Keys"
2. Click "Create API Key"
3. Name: "Immigrant Support Network"
4. Permission: "Sending access"
5. Click "Create"
6. **Copy the API key** (starts with `re_...`)

**Keep this key safe!** You'll add it to Supabase in Step 6.

---

### **Step 3: Add Domain to Resend**

1. In Resend dashboard → "Domains"
2. Click "Add Domain"
3. Enter: `immigrantsupportnetwork.co.za`
4. Click "Add"

Resend will show you 3 DNS records to add.

---

### **Step 4: Add DNS Records at 1-Grid**

Log in to 1-Grid and go to DNS settings for `immigrantsupportnetwork.co.za`.

Add these 3 records (exact values will be shown in Resend):

**Record 1: TXT (for DKIM)**
- Type: `TXT`
- Name: `resend._domainkey`
- Value: (long string shown in Resend)

**Record 2: MX (for bounce handling)**
- Type: `MX`
- Name: `@` or blank
- Value: `feedback-smtp.us-east-1.amazonses.com`
- Priority: `10`

**Record 3: TXT (for SPF)**
- Type: `TXT`
- Name: `@` or blank
- Value: `v=spf1 include:amazonses.com ~all`

**Note:** If you already have MX records for your email, add the Resend one with lower priority (higher number like 20).

---

### **Step 5: Verify Domain**

1. Wait 5-10 minutes for DNS to propagate
2. In Resend dashboard → "Domains"
3. Click "Verify" button
4. Should show "Verified" ✅

If not verified, wait longer (up to 60 minutes) and try again.

---

### **Step 6: Add API Key to Supabase**

Once domain is verified:

1. Go to: Supabase Dashboard
2. Click: "Edge Functions" in left sidebar
3. Click: "Manage Secrets"
4. Add new secret:
   - **Key:** `RESEND_API_KEY`
   - **Value:** (paste your Resend API key that starts with `re_...`)
5. Click "Save"

---

### **Step 7: Deploy Edge Function**

**Option A: Deploy via Supabase CLI (Recommended)**

```bash
cd /home/paas/immgrant
supabase functions deploy send-notification
```

**Option B: Deploy via Supabase Dashboard**

1. Go to: Edge Functions → "Deploy a new function"
2. Name: `send-notification`
3. Copy the code from: `supabase/functions/send-notification/index.ts`
4. Paste and deploy

---

### **Step 8: Test Email Notifications**

1. Open incognito window
2. Go to: https://immigrantsupportnetwork.co.za
3. Fill out the consultation form
4. Submit
5. Check your email at `info@immigrantsupportnetwork.co.za`

**You should receive:**
- Email subject: "New Consultation Request from [Name]"
- All form details formatted nicely
- Reply-to set to client's email (easy to respond)

---

## 🔍 Troubleshooting

### **Email not received?**

1. **Check Spam folder** - First emails might go to spam
2. **Check Resend dashboard** - "Logs" tab shows delivery status
3. **Check Supabase Edge Function logs** - Look for errors
4. **Verify domain is still verified** in Resend

### **Domain won't verify?**

1. Wait longer (up to 60 minutes for DNS)
2. Check DNS records are correct using: https://mxtoolbox.com/
3. Try verifying again

### **API key error?**

1. Make sure key starts with `re_`
2. Check it's saved in Supabase secrets correctly
3. Redeploy Edge Function after adding secret

---

## 💰 Costs

**Resend Free Tier:**
- 3,000 emails/month
- 100 emails/day
- No credit card required

**Your estimated usage:**
- ~50-100 consultation requests/month
- Well within free tier ✅

---

## 📧 Email Template Preview

```
Subject: New Consultation Request from John Doe

🎉 New Consultation Request

Client Information:
━━━━━━━━━━━━━━━━━━━━
Full Name: John Doe
Email: john@example.com
Phone: +27123456789
Country of Birth: South Africa
Destination: Canada
Preferred Contact: Email

Message:
━━━━━━━━━━━━━━━━━━━━
I need help with my visa application...

📎 Attached Documents
Documents uploaded - view in Supabase Storage

━━━━━━━━━━━━━━━━━━━━
This email was sent from your website consultation form.
Next Steps: Reply to this client within 24 hours!
```

---

## 🎯 What Happens After Form Submission

1. ✅ User fills form on website
2. ✅ Data saved to Supabase database
3. ✅ Files uploaded to Supabase Storage
4. ✅ Email sent to you instantly
5. ✅ User sees success message
6. ✅ You can reply directly to client's email

---

## 📞 Support

- **Resend Support:** https://resend.com/support
- **Resend Docs:** https://resend.com/docs

---

**Last Updated:** December 17, 2025

