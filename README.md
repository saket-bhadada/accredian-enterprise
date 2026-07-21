# Accredian Enterprise Clone

A Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 recreation of [enterprise.accredian.com](https://enterprise.accredian.com/).

This project includes a high-fidelity visual identity refinement pass ("Registrar's Ledger meets Live Terminal") and a fully wired lead-capture backend with SQLite storage, validation, honeypot protection, and IP rate limiting.

---

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- npm or another package manager

### Installation

1. Install the project dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   Open the newly created `.env` file and set a secure value for `ADMIN_TOKEN`.

### Development Server

Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### Production Build

To build the application for production:
   ```bash
   npm run build
   ```

Start the production server:
   ```bash
   npm run start
   ```

---

## Approach Taken

### 1. Visual Identity Refinement ("Registrar's Ledger meets Live Terminal")
Rather than looking like a generic B2B SaaS platform, the site's styling was refined to match the company's core value proposition: **verifiable academic credentials delivered through a live cohort model.**
*   **Verified Seal Badge:** Created a circular SVG verified-seal stamp badge (`components/VerifiedSeal.tsx`) with a dashed/double-ring border, a rotating circular text path reading `"IIT · IIM · VERIFIED · "`, and a centered star glyph. It features a slow continuous rotation that pauses dynamically if `prefers-reduced-motion` is enabled.
*   **Ledger Background Utility:** Added a faint horizontal ruled-paper grid pattern (`.bg-ledger` in `globals.css`) and applied it exclusively to the StatsBar section background to ground the numbers in a ledger aesthetic.
*   **Stamped Numerals:** Re-styled step numbers (01–04) in `components/Process.tsx` to resemble hand-stamped ink impressions using slight offsets, varied rotations, and double-printed overlays.
*   **Torn-Edge Divider:** Designed a custom jagged/perforated SVG transition component (`components/TornEdge.tsx`) placed exactly once between the Hero and StatsBar sections to evoke physical admit-card coupons.
*   **ID-Card Chips:** Modified logo badges in `components/Partners.tsx` to look like admission/ID chips, styled with a gold left-edge bar and a subtle diagonal notched top-right corner using CSS `clip-path`.

### 2. Lead-Capture Backend Wiring
Wired up the lead submission form on the homepage to a real, performant backend pipeline.
*   **Data Access Layer (`lib/db.ts`):** Implemented a server-side SQLite database wrapper using `better-sqlite3`. On first run, it creates the database and table schema at `data/leads.db` (which is excluded from Git). WAL (Write-Ahead Logging) mode is activated to optimize concurrent file performance.
*   **Shared Validation Schema (`lib/schema.ts`):** Used `zod` to create a robust schema shared between client-side and server-side validation. Enforced a single source of truth for the `TEAM_SIZES` options array to prevent system drift.
*   **Honeypot Protection:** Placed an off-screen hidden form field (`website`). If filled (which automated spam bots do by default), the server silently rejects the request with a `200 OK` status to waste bot resources without persisting anything.
*   **IP-Based Rate Limiting:** Implemented a lightweight in-memory rate limiter on the POST handler (max 5 requests per IP every 10 minutes) utilizing headers like `x-forwarded-for`.
*   **Form Integration:** Updated `components/Contact.tsx` to use `fetch` to submit JSON payloads. Configured granular loaders, error banner render paths with "Try again" fallback actions, and exact error displays parsed from Zod validations.
*   **Admin Fetch Endpoint:** Configured a GET handler on `/api/leads` protected by the `x-admin-token` request header matching the environment `ADMIN_TOKEN`.

---

## AI Usage Explanation

This project was built in pair-programming collaboration with the Antigravity AI coding assistant:
1.  **Context-Driven Refinement:** Checked the workspace guidelines (`AGENTS.md`) and local Next.js docs to align route handler implementations with modern Next.js App Router rules.
2.  **Modular Implementation:** Shared tasks were mapped out and verified iteratively:
    *   AI handled boilerplate generation for SQLite migrations and Zod enum mapping.
    *   Visual assets (like the SVG path coordinates for the jagged torn paper and the exact geometry of the rotating SVG seal) were designed and optimized by the AI using inline parameters.
    *   Build steps were executed in the background to ensure strict TypeScript type check compliance.

---

## Improvements with More Time

Given more development time, the following enhancements would make this application more robust:
1.  **Durable Rate Limiting:** Replace the in-memory Map in the route handler with a Redis store (e.g., Upstash) to persist rate limits across serverless cold starts and multi-instance container restarts.
2.  **Database Migration Manager:** Switch from hardcoded table creation SQL strings to a migration management library (such as Drizzle Kit or Prisma) for version-controlled database schema updates.
3.  **Encrypted Data Storage:** Encrypt sensitive fields in the database (like emails and names) to secure PII data against database breaches.
4.  **Admin UI Dashboard:** Create a separate, password-protected administrative interface (e.g. `/admin`) using Next.js middleware and sessions to easily visualize, filter, and export leads to CSV.
5.  **ReCAPTCHA v3 or Turnstile:** Integrate a modern challenge-free bot detection utility alongside the honeypot to filter sophisticated spambots.
