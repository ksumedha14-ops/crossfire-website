# CHANGELOG

All notable changes to the Crossfire Marketing website, grouped by release cycle. This project has no build step and no version numbers — entries are grouped under `[Unreleased]` until an explicit "Release" is called (see `RELEASE_CHECKLIST.md`), at which point they move to a dated release section.

## [Unreleased]

### Added — Topical Authority Phase 2 & 3 (2026-08-07)
- **4 new pages built**, per the approved internal-linking architecture:
  - `gbp-optimization-delhi-ncr.html` — the consolidation hub for GBP content previously duplicated across 6 pages, including the Justdial-vs-GBP comparison, reviews management, and ranking-timeline FAQ folded in as sections (not separate pages, per the approved plan).
  - `local-seo-dental-clinics-delhi-ncr.html` — anchored on the real, previously-unlinked Delhi Dental Care case (Noida Sector 18: zero visibility to #1 in 11 weeks, 18 new patients/month, 47 reviews in 90 days).
  - `local-seo-legal-delhi-ncr.html` — anchored on the real, previously-unlinked Arora Law Associates case (Connaught Place: zero visibility to top 3 in 14 weeks, 10 qualified enquiries/month, 4.8★/38 reviews), including the real testimonial quote.
  - `local-seo-delhi.html` — the 5th geo page. Deliberately does **not** invent a second fabricated case study: its "Recent Result" section honestly reuses Arora Law's real data (cross-linked to the Legal page) rather than manufacturing a generic Delhi result, per explicit instruction to prioritize authenticity over template symmetry.
- **10 existing pages retrofitted** so none of the 4 new pages launch as isolated landing pages: `index.html` (new "Industries We Specialize In" section, 5th Locations card for Delhi, GBP FAQ link), `case-studies.html` (Dental and Legal vertical tags now link to their pages — closes the "inverse-orphan" gap), all 4 existing city pages + the home-services hub (4 new cross-link chips each), `blog-why-nobody-reads.html` and `blog-spray-and-pray-marketing.html` (linked two genuine, previously-unlinked content connections found during the build — an Arora Law testimonial and a "South Delhi" example — to the new Legal and Delhi pages respectively).
- `sitemap.xml` updated with all 4 new URLs.

### Added — Topical Authority Phase 1 (2026-08-04)
- **JSON-LD structured data added to the 5 pages that had none**: `audit.html`, `contact.html`, `services.html`, `case-studies.html`, `blogs.html`. All 14 pages now carry valid schema (25 blocks total sitewide, 0 invalid).
  - `audit.html`, `contact.html`: `LocalBusiness`/`ProfessionalService` + `FAQPage` (using the real, already-published FAQ content on each page — 4 questions on audit.html, 6 on contact.html).
  - `services.html`: `LocalBusiness`/`ProfessionalService` with a `hasOfferCatalog` listing the 3 real service tiers and their actual current prices (₹39,700 / ₹59,700 / ₹25,000).
  - `case-studies.html`: `LocalBusiness`/`ProfessionalService` + `Article` describing the page (no fabricated ratings or review counts added).
  - `blogs.html`: `LocalBusiness`/`ProfessionalService` + `Blog` listing the 3 real published posts by their actual titles/descriptions.
  - No invented facts, dates, or figures — every value pulled from content already live on each page.

### Changed — Foundation Stabilisation phase (2026-08-04)
- **Pricing corrected sitewide**: 4 city pages (`local-seo-gurgaon.html`, `-noida`, `-faridabad`, `-ghaziabad`, 6 instances) and `contact.html` (1 FAQ answer, 3 figures) updated from stale pre-reprice figures (₹18,000/₹30,000/₹15,000) to the current, confirmed canonical pricing (₹39,700/₹59,700/₹25,000), matching `services.html`/`index.html`. Source-of-truth confirmed against git history (`3df2a05`, the explicit 2026-07-06 reprice commit) and verified with the founder before implementation.
- **Character-encoding corruption repaired**: same 4 city pages, 200 corrupted instances total (em dashes, checkmarks, ₹ symbol, arrows, plus the JSON-LD `priceRange` field) restored via targeted UTF-8/cp1252 round-trip repair. Root cause: a double-encoding bug introduced in commit `6ba0649` (2026-07-07) that a prior encoding fix (2026-07-16, per `SESSION_LOG.md`) didn't reach.
- **Malformed `og:title`/`twitter:title` metadata fixed**: same 4 pages, curly quotes used as HTML attribute delimiters replaced with straight quotes (8 instances), plus one additional instance found during the fix — an inline `style` attribute with the same defect.
- Homepage hero CTA rewritten from "Get 3 Free Ranking Tips →" to "Get My Free Local SEO Audit →" (`index.html`) — corrects a mismatch between the button's promise and what `audit.html` actually delivers (a 15-minute audit with a written report, not "tips"). No new claims added, no urgency invented.

### Known issues (pre-existing, lower severity, not yet fixed)
- **Oversized logo asset**: `public/crossfire-logo.png` is 732KB at 1254×1254px but displayed as a small nav logo on every page — a real page-weight/LCP concern sitewide.
- **Mobile hamburger menu**: inconclusive test during verification — `aria-expanded` did not flip after a click during one test pass. Needs a clean recheck before ruling in or out.

## Not yet started

- Phase 1 backlog items 2–3 (case-study revenue/ROI figures, ICP-based prospect re-screening) — see `lead-acquisition-gap-analysis.md`.
- Phase 2 (30-day single-vertical test), Phase 3 (optimizations), and Experimental items — see `lead-acquisition-gap-analysis.md`.

---

*Format: adapted from [Keep a Changelog](https://keepachangelog.com/), simplified for a no-build static site with no version numbers.*
