# Deployment summary – what goes where

Use this so you don’t break a working project.

---

## Frontend (website users see)

| What | How it’s deployed | Don’t |
|------|-------------------|--------|
| **Vite/React app** (`src/`, `index.html`, `public/`, `vite.config.ts`) | **Git → Vercel** | Don’t deploy frontend to Hetzner or run a separate server for it. |
| **Build** | Vercel runs `npm run build` on every push to the connected branch (e.g. `main`). | Don’t change the build command or root directory in Vercel unless you intend to. |
| **Env for frontend** | In Vercel: Project → Settings → Environment Variables. Only `VITE_*` and other vars the app reads at build time. | Don’t commit `.env` or `.env.local` (they’re in `.gitignore`). |

**To update the live site:** commit and push frontend changes to the same branch Vercel uses (usually `main`). Vercel will pick it up and redeploy.

```bash
git add index.html src/ public/   # and any other frontend files you changed
git commit -m "Your message"
git push origin main
```

---

## Backend (APIs, DB, serverless, storage)

| What | Where it runs | How to deploy / configure |
|------|----------------|---------------------------|
| **Database** | Supabase | Already set up. Migrations: run SQL from `supabase/migrations/` in Supabase Dashboard → SQL Editor if you add new ones. |
| **Edge Functions** (e.g. `send-notification`, `upload-file`, `rate-limit`) | **Supabase** (Deno on Supabase’s infra) | Deploy via Supabase Dashboard (Edge Functions → deploy/upload) or CLI: `supabase functions deploy <name>`. Secrets (e.g. `RESEND_API_KEY`, Hetzner S3) in Supabase → Project Settings → Edge Functions → Secrets. |
| **File storage** | **Hetzner Object Storage** (S3-compatible) | No “server” to deploy. Used by the `upload-file` Edge Function. Credentials are stored only in **Supabase Edge Function secrets** (not in git, not in Vercel). |

So: **“Backend” in this project = Supabase (DB + Edge Functions).** Hetzner is only storage; you don’t deploy app code to a Hetzner server.

---

## Quick checklist

- [ ] **Frontend change** → commit + push to git → Vercel deploys.
- [ ] **Edge Function change** → deploy that function in Supabase (Dashboard or `supabase functions deploy ...`), and set/update secrets there if needed.
- [ ] **DB change** → run the migration SQL in Supabase; no git push needed for DB.
- [ ] **Env / secrets** → Vercel for `VITE_*`; Supabase for Edge Function secrets (e.g. Resend, Hetzner S3). Never commit secrets.

This keeps the project working: frontend from git → Vercel, backend (DB + functions) in Supabase, storage in Hetzner via Supabase.
