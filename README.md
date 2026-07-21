# Accredian Enterprise — Partial Clone

A partial recreation of [enterprise.accredian.com](https://enterprise.accredian.com/) built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## What's included

- **Navbar** — sticky, transparent-to-blurred on scroll, mobile menu
- **Hero** — headline, CTAs, trust badges, and a signature animated "Live Cohort Dashboard" widget (count-up metrics + progress bars) that echoes the product's own analytics pitch
- **Stats bar** — 6 animated count-up metrics ("By the Numbers")
- **Capabilities** — 8-card feature grid ("Platform Capabilities") + demo CTA banner
- **Process** — 4-step methodology timeline
- **Testimonials** — 3 client story cards
- **Partners** — auto-scrolling marquee of academic/industry partner badges + stats
- **Contact** — working demo-request form (client-side validation + simulated submit, no backend wired up)
- **Footer** — link columns + legal row

## Design system

- **Colors:** deep navy `#0a1420` / `#101e33` (ink/navy), warm gold `#d4a54a` (prestige accent, CTAs), indigo `#4a5ae8` (tech/data accent), warm paper `#f7f5f0` for light sections
- **Type:** Sora (display/headlines), Inter (body/UI), IBM Plex Mono (stats, labels, eyebrows) — self-hosted via `@fontsource` so no external font requests are needed at build or runtime
- **Motion:** scroll-triggered reveals, count-up numbers, animated progress bars — all respect `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Notes

- This is a **partial, original-code clone** built for portfolio/practice purposes — structure and section flow follow the real site, but copy, exact styling, and imagery are original.
- The contact form is UI-only; wire it up to your backend/email service of choice (e.g. an API route + Resend/SendGrid, or a form service).
- Partner "logos" are text/monogram badges rather than real institutional logos, since actual logo assets weren't available.
