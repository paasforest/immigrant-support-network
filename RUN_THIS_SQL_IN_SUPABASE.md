# 🗄️ Database Update Required

## ✅ Add Document Upload Column to Database

You need to run this SQL command in Supabase to add support for file uploads.

---

## 📋 **Step 1: Go to SQL Editor**

Click this link:
👉 **https://supabase.com/dashboard/project/zoxfmguvhngidwqpdhvs/sql/new**

---

## 📋 **Step 2: Copy and Paste This SQL**

```sql
-- Add document_urls column to consultation_requests table
ALTER TABLE consultation_requests
ADD COLUMN IF NOT EXISTS document_urls TEXT;

-- Add comment to explain the column
COMMENT ON COLUMN consultation_requests.document_urls IS 'Comma-separated URLs of uploaded documents stored in Hetzner Object Storage';
```

---

## 📋 **Step 3: Click "Run"**

You should see: ✅ **Success. No rows returned**

---

## ✅ **That's It!**

Your database now supports file uploads! 🎉

The booking form will now save document URLs when users upload files.

---

## 🧪 **Test It:**

1. Visit: https://immigrantsupportnetwork.co.za
2. Scroll to booking form
3. Fill out the form
4. Upload a test document (PDF, image, etc.)
5. Submit!

Check your Supabase dashboard to see the uploaded document URLs! 📎

