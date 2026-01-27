# 📊 Supabase Usage in This Application

## ✅ What Supabase is Used For

### 1. **Database** (Primary Use)
- **Table:** `consultation_requests`
- **Purpose:** Stores all consultation form submissions
- **Data Stored:**
  - Client name, email, phone
  - Current country, destination country
  - Service type, message
  - Document URLs (if files uploaded)
  - Status (pending, contacted, completed, cancelled)
  - Timestamps

**Security:** Row Level Security (RLS) enabled
- Anonymous users can INSERT (submit forms)
- Only authenticated admin users can VIEW/UPDATE

---

### 2. **Edge Functions** (Critical for Email & File Uploads)
Three edge functions deployed:

#### a) `send-notification`
- **Purpose:** Sends email notifications via Resend
- **When Used:** Every time consultation form is submitted
- **Sends To:** info@immigrantsupportnetwork.co.za
- **Requires:** `RESEND_API_KEY` secret in Supabase

#### b) `upload-file` 
- **Purpose:** Handles secure file uploads
- **When Used:** When users upload documents with form
- **Stores To:** Hetzner Object Storage (not Supabase Storage)
- **Requires:** Hetzner S3 credentials in Supabase secrets

#### c) `rate-limit`
- **Purpose:** Rate limiting for API requests
- **When Used:** For protecting endpoints

---

### 3. **Minimal Auth Usage**
- **NOT used for:** User login/authentication system
- **Used for:** Getting session tokens for file uploads only
- **Code:** `supabase.auth.getSession()` - just to get token

---

## ❌ What Supabase is NOT Used For

- ❌ **User Authentication** - No login system, no user accounts
- ❌ **Supabase Storage** - Files go to Hetzner Storage instead
- ❌ **Real-time features** - Not used
- ❌ **Supabase Auth** - Not used for user management

---

## 🔑 Required Supabase Configuration

### Environment Variables (in Vercel)
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### Supabase Secrets (for Edge Functions)
```
RESEND_API_KEY=re_... (for email notifications)
S3_ACCESS_KEY_ID=... (for file uploads)
S3_SECRET_ACCESS_KEY=... (for file uploads)
S3_BUCKET_NAME=... (for file uploads)
S3_REGION=... (for file uploads)
S3_ENDPOINT=... (for file uploads)
```

---

## 📋 What Happens When Form is Submitted

1. ✅ **Form data saved** → Supabase Database (`consultation_requests` table)
2. ✅ **Files uploaded** → Hetzner Storage (via `upload-file` edge function)
3. ✅ **Email sent** → Resend API (via `send-notification` edge function)
4. ✅ **Success message** → Shown to user

**All three steps require Supabase to be active!**

---

## ⚠️ Why Pausing Supabase Breaks Things

If Supabase is paused:
- ❌ Form submissions fail (can't save to database)
- ❌ Email notifications don't send (edge function unavailable)
- ❌ File uploads fail (edge function unavailable)
- ❌ Website shows errors

**That's why unpausing it was important!** ✅

---

## 🎯 Summary

**Supabase is used for:**
- ✅ Database (consultation requests)
- ✅ Edge Functions (email, file uploads)
- ✅ Minimal auth (just tokens)

**Supabase is NOT used for:**
- ❌ User authentication/login
- ❌ Supabase Storage (uses Hetzner)
- ❌ User accounts

**Bottom Line:** Supabase is essential for the application to work - it's the backend for database and serverless functions!
