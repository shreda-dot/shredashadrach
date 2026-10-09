# Shreda portfolio

A portfolio for Shreda (Shadrach), a solo founder and full-stack developer in
Lagos, Nigeria. Built with the Next.js App Router, TypeScript, Tailwind CSS v4,
and Zustand for the client-side theme preference.

## Requirements

- Node.js 20.19.6 or newer in the Node 20 line
- npm 10.8.2 or newer

## Local setup

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open <http://localhost:3000>.

Set `SITE_URL=http://localhost:3000` in `.env.local` for local builds. Production
builds require `SITE_URL` to be set to the canonical HTTPS site URL.

## Contact delivery

The contact route validates each submission server-side and forwards it to
Formspree using `CONTACT_DELIVERY_URL`. The example environment file is
preconfigured with the Formspree endpoint supplied for this site. In Formspree,
set `ezinwa.ugochukw@gmail.com` as the form's **Target Email**; the endpoint
does not choose the receiving inbox. Add `CONTACT_DELIVERY_URL` to the Vercel
project environment variables before deploying.

The form uses a honeypot and applies a per-process in-memory limit of five
submissions per ten minutes. That basic limiter is not shared between Vercel
function instances. Use a shared rate-limit service for production abuse
protection.

## Content and assets

- Edit profile details and contact links in `src/content/profile.ts`.
- Edit each project's typed content and grouped stack in `src/content/projects/`.
- Replace visible `[TODO: ...]` copy with verified information before deploying.
- The optimized portrait is `public/images/shreda.webp`; the cropped monogram is
  `public/images/shreda-mark.webp`.
- The resume page is built from `src/content/resume.ts` and links to the original
  `public/resume.docx`.
- The floating WhatsApp button uses the phone number in `src/content/profile.ts`.

Local builds can temporarily bypass the visible TODO check with
`$env:TODO_CHECK_BYPASS='1'`. Never set that variable in production.

## Production build

```powershell
npm run lint
npm run typecheck
npm run build
npm run start
```

The production build stops when `SITE_URL` is missing or when rendered HTML
contains visible `[TODO` text. Run a local build with the bypass variable only
while editing placeholders.
