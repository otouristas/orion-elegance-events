# AGENTS.md

## Cursor Cloud specific instructions

Ktima Orion (`orion-elegance-events`) is a single Next.js 16 (App Router, React 19, TypeScript, Tailwind + shadcn/ui) marketing website for a Greek wedding/event venue. It is a frontend-only site with one API route (`src/app/api/send-email/route.ts`, Resend email). There is no database or other backing service.

### Environment
- Use Node 20+ (Node 22 is fine). The committed `.nvmrc` pins `18.19.0`, which is too old for Next 16 — ignore it and use the system Node 20/22.
- The package manager is npm (`package-lock.json`). A `bun.lockb` also exists but the project is set up for npm; prefer npm. `.npmrc` sets `legacy-peer-deps=true`, so `npm install` resolves peer deps automatically.

### Commands (from `package.json`)
- Dev server: `npm run dev` (Next.js + Turbopack, serves http://localhost:3000).
- Lint: `npm run lint` (ESLint flat config; passes with 0 errors, only warnings).
- Build: `npm run build`. Start prod build: `npm start`.
- There is no automated test suite — "testing" here means lint + build + running the dev server.

### Notes / gotchas
- The site renders fully without any env vars. `RESEND_API_KEY` (and optional `RESEND_FROM`) are only needed for the `/api/send-email` route (contact/request form submission). Without `RESEND_API_KEY`, form submissions return HTTP 500; the rest of the site is unaffected. See `RESEND_SETUP.md`. Set these in `.env.local` for local email testing.
- Bilingual routes: Greek pages at root (e.g. `/`, `/gamos`, `/request`) and English under `/en` (e.g. `/en`, `/en/weddings`, `/en/contact`).
