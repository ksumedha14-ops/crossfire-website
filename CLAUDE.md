# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for Crossfire Marketing, a local SEO agency founded by Sumedha. Static HTML/CSS/JS site with no build step, no package manager, and no framework — every page is a self-contained `.html` file that links to the shared `css/main.css` and `js/site.js`.

## Business context

- **Founder**: Sumedha (founder-led agency — content and copy across the site emphasizes this).
- **Primary service**: Local SEO for service businesses (Google Maps/Google Business Profile ranking, citation building, review management).
- **Target market**: Delhi NCR (India) currently, with expansion toward international clients planned.
- **Preferred client profile**: established local businesses with budget to invest in marketing — not early-stage/bootstrapped businesses.
- **Deployment**: hosted via GitHub + Vercel (push to deploy — no separate build step given the static HTML nature of the site).
- **Roadmap priorities**: more local SEO landing pages (additional cities/niches), content marketing (blog expansion), dedicated GBP (Google Business Profile) optimization pages, and lead generation features.

## Development

There is no build/test/lint tooling. To preview changes, just open the HTML files directly in a browser or serve the directory with any static file server (e.g. `python3 -m http.server`). There are no npm scripts, no package.json, no CI config.

When editing, verify changes by opening the page in a browser — there's no automated test suite to lean on.

## Architecture

### Page structure
Each top-level `.html` file is a full, independent page (nav + content + footer all inline in that file) — there are no server-side includes or templating. This means shared markup (nav, footer, WhatsApp button styles, schema.org JSON-LD blocks) is duplicated across every page rather than factored into a partial. When changing the nav, footer, or any sitewide UI element, **grep across all `.html` files and update each one** — there is no single source of truth to edit once.

Pages fall into a few families:
- **Core pages**: `index.html`, `services.html`, `audit.html`, `contact.html`, `case-studies.html`, `blogs.html`
- **Local-SEO city landing pages**: `local-seo-{gurgaon,noida,faridabad,ghaziabad}.html` and `local-seo-home-services-delhi-ncr.html` — near-identical structure targeting different city/niche keywords for SEO
- **Blog posts**: `blog-*.html` — standalone long-form articles, linked from `blogs.html`

Each page also carries its own `<style>` block in `<head>` for page-specific CSS on top of the shared `css/main.css` (every page has exactly one inline `<style>` block).

### Shared assets
- `css/main.css` — design system: CSS custom properties under `:root` (colors, spacing, radii, shadows — see the tokens block at the top), reset, and reusable layout/typography classes (`.wrap`, `.eyebrow`, etc.). Color tokens use a warm neutral + terracotta accent palette; some `--navy`/`--orange` variables are kept only as backward-compat aliases for older page styles — prefer `--ink`/`--accent` naming in new work.
- `js/site.js` — single IIFE handling, sitewide, on every page: nav active-link highlighting, mobile hamburger menu, FAQ accordion (`window.toggleFaq`), scroll-reveal via IntersectionObserver (`.fade-up` class), form validation/submission, click-to-call nav button injection, floating WhatsApp button injection, and GA4 event tracking (`gaEvent`) for form submits, audit CTA clicks, phone clicks, WhatsApp clicks, and outbound links.

### Forms
All forms submit client-side to Web3Forms (`WEB3FORMS_KEY` in `js/site.js`) via `window.handleFormSubmit`, not a custom backend. Forms follow a convention: `novalidate` + `onsubmit="handleFormSubmit(event, {btn, resetLabel})"`, a hidden honeypot input named `botcheck`, and a sibling `[data-form-success]` element shown on success. Known form IDs (`auditForm`, `bookForm`, `contactForm`) are mapped to human-readable names for GA4 in `js/site.js` — add new form IDs to that mapping if you add a new form.

### SEO/analytics conventions
- Every page includes Google Analytics (gtag.js, measurement ID `G-CMRVY2P3Y1`) and JSON-LD structured data (`LocalBusiness`/`ProfessionalService`, often `FAQPage`) inline in `<head>`.
- `sitemap.xml` and `robots.txt` must be updated when pages are added/removed/renamed — `sitemap.xml` is not auto-generated.
- Canonical URLs, Open Graph, and Twitter Card meta tags are hand-authored per page and reference `https://www.crossfiremarketing.in`.
- NAP (Name/Address/Phone) data is duplicated in the footer of every page and in JSON-LD — keep these in sync if business info changes.

### Assets
`public/` holds images referenced by pages (logo, founder photo, case study graphics, audit dashboard screenshot). `public/clients/` is currently an empty placeholder directory (`.gitkeep` only).

## Documentation system

This repo maintains strategic knowledge in files, not in chat history, so it survives across sessions. The structure:

- `ROADMAP.md` — forward-looking priorities and phased build plan. Update whenever priorities change, a phase completes, or a new gap is identified.
- `SESSION_LOG.md` — dated log of work sessions, most recent first. Append an entry after any significant work session (new pages, strategic repositioning, audits, restructuring) summarizing what changed and why.
- `docs/business/` — positioning, service tiers/pricing, ideal client profile.
- `docs/seo/` — topical authority plan, internal linking strategy, keyword targeting.
- `docs/content/` — content calendar, blog/page idea backlog.
- `docs/lead-generation/` — lead capture and outreach mechanics.
- `docs/operations/` — a decisions log capturing the *why* behind notable changes (not just the diff).

### Documentation Rules

- **Update documentation whenever a major decision is made** — a reposition, a removed/added trust signal, a pricing change, a new page-template decision, etc. Add it to the relevant `docs/` file and to `docs/operations/project-decisions.md` with the reasoning, not just the outcome.
- **Maintain `SESSION_LOG.md` after important work sessions.** Append (don't rewrite history), most recent entry first, dated, summarizing what was done and why.
- **Store strategic knowledge in files, not chat.** If you reconstruct or discuss strategy (positioning, keyword targeting, linking strategy, client criteria) in conversation, write the durable parts into the appropriate `docs/` file rather than leaving it only in the conversation transcript.
- **Keep `ROADMAP.md` current.** When a roadmap item ships, move it out of "Next priorities" and into "Completed." When new gaps or priorities surface, add them rather than letting the roadmap drift out of sync with reality.
- **Distinguish evidence from assumption.** When documenting anything not directly verifiable from the repo (code, commit history, on-page copy), put it under an explicit "Assumptions" section in that file rather than stating it as fact.

## Release cycle (standing rule, set 2026-08-04)

Multi-phase work is batched into a single release cycle instead of deploying after each phase:

- Implement each approved phase sequentially, keeping the repo in a deployable state throughout.
- After every completed phase: verify functionality, then update `CHANGELOG.md`, `SESSION_LOG.md`, and `SPRINT_BACKLOG.md`. Log completed tasks in `RELEASE_CHECKLIST.md`.
- **Never**, during a release cycle: `git push`, deploy to Vercel, or request Google Search Console indexing — regardless of how confident a phase's changes are.
- Only when the founder explicitly says **"Release"**, run the full sequence in order: full repository audit → technical SEO audit → QA → final code review → git commit → git push → Vercel deployment → Search Console indexing.
- `RELEASE_CHECKLIST.md` accumulates across the whole cycle — items are checked off, never deleted or reset between phases.
