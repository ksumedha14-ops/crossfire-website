# CHANGELOG

All notable changes to the Crossfire Marketing website, grouped by release cycle. This project has no build step and no version numbers — entries are grouped under `[Unreleased]` until an explicit "Release" is called (see `RELEASE_CHECKLIST.md`), at which point they move to a dated release section.

## [Unreleased]

### Added — Internal linking audit and implementation (2026-09-17)
Full audit before any edits: scripted an inbound-link classifier (contextual in-prose vs. chip/directory vs. card links) across all 23 pages, confirming a precise, verified gap rather than assuming one — every one of the 6 geo pages' contextual links pointed only to the generic `services.html`, and every one of the 5 service pages' contextual links never named a specific area. SERVICE↔LOCATION connection existed only via directory-style chip rows, never in prose.
- Built a Service × Area relevance matrix from each page's *existing* content (not invented relationships) and added 1-3 contextual in-prose links per page in both directions, several by redirecting an already-existing generic `services.html` link to the more specific, more useful service page (e.g. Ghaziabad's "Google Business Profile" mention now points to the GBP page, not the pricing page).
- Added a genuine "Areas We Serve" section to `contact.html`, which previously had zero area links of any kind.
- Connected all 3 blog posts to relevant service/area pages (previously fully disconnected from both).
- Added the missing Review Management card to the Areas We Serve hub's services grid.
- Fixed one incidental residual reference to the removed home-services vertical found during the audit (`local-seo-delhi.html`'s "Dwarka's home services businesses" → "Dwarka's retail businesses").
- One forced edit was caught and reverted during implementation (see `docs/operations/project-decisions.md`) rather than shipped.
- Verified after implementation: 0 broken links, valid JSON-LD, balanced HTML tags, live-render check passed on all 18 touched pages. Pre-existing FAQ schema/visible-text drift on pages this task didn't touch was re-confirmed unchanged, not newly introduced.

### Fixed — Pre-release code review, round 4 (2026-09-17)
A code-review pass on the HVAC/Plumbing/Electrical removal diff (the release sequence's final-code-review step) found the sweep had missed several instances and left 2 CSS-grid regressions:
- 5 residual mentions the earlier grep sweep missed: an ICP list on `index.html`, the original industries FAQ on `services.html` (both still said "home services"), an "AC repair" example each on `blog-spray-and-pray-marketing.html` and `local-seo-faridabad.html`, and a second FAQ + body paragraph on `local-seo-gurgaon.html` still describing "home services" as served.
- `CLAUDE.md`'s own page-structure section still listed the deleted page and was missing the vertical/service/area-hub page families entirely — brought fully current rather than patched minimally.
- 2 CSS-grid regressions from deleting testimonial/case-study cards without adjusting their grids: the shared `.testi-grid` class (main.css, used by `case-studies.html` and `audit.html`) was a fixed 3-column grid now showing 1 and 2 cards respectively with visible empty columns on desktop; `case-studies.html`'s own `.cs-grid` had the same issue with 2 remaining cards. Both switched to `auto-fit`/`minmax` so they reflow correctly regardless of card count, and the now-redundant fixed-column breakpoints were removed.
- One reported finding (merged cross-link chips across ~12 files) was investigated and found to be a false positive — the flagged lines were the site's pre-existing, intentional single-line footer-nav format, not a defect introduced by this diff.

### Removed — HVAC/Plumbing/Electrical vertical, sitewide (2026-09-17)
Founder instruction, executed as a full removal after an initial narrower edit was flagged as creating a contradiction ("one page says we don't work in this industry, another says we do"):
- Deleted `local-seo-home-services-delhi-ncr.html` and its `sitemap.xml` entry.
- Removed the Kumar HVAC & Plumbing "Featured" case study (full narrative, client quote, results dashboard) and the Sharma & Sons Electricals card from `case-studies.html`, plus both businesses' testimonials there and on `index.html`. The homepage's now-empty sole testimonial slot was filled with the real, already-verified Arora Law testimonial — not left empty, not backfilled with an invented quote.
- Removed Kumar HVAC proof-cards from 4 service pages and the "HVAC & Home Services SEO" cross-link chip from every page that carried it (~13 pages).
- Fixed roughly 20 smaller illustrative mentions sitewide (form dropdowns, placeholders, neighborhood descriptions, comparison examples) by swapping to verticals still genuinely served (dental, legal, salons) rather than leaving broken links or residual claims.
- Updated `docs/business/ideal-clients.md`, `docs/business/positioning.md`, and `ROADMAP.md` to reflect the current served-vertical list and removed now-obsolete "build more HVAC pages" roadmap items.
- Full sitewide grep confirms zero remaining mentions of HVAC/plumbing/electrical across all live pages.

### Changed — Content edit + pre-release code review, round 3 (2026-09-17)
- Removed "plumbers, electricians, HVAC" from the "What industries do you work with?" FAQ on `services.html`, per explicit founder instruction. The dedicated `local-seo-home-services-delhi-ncr.html` vertical page and its real case studies (Kumar HVAC & Plumbing, Sharma & Sons Electricals) were left untouched — the request was scoped to the industries list, not the page or case data.
- Fixed 3 issues found in the final-code-review step of this release: `local-seo-greater-noida.html`'s cross-link row was missing reciprocal links to 6 sibling pages that already linked to it (now symmetric); the hero's sitewide "30+ businesses ranked top 3" stat sat directly above a section honestly disclosing "we don't have a named Greater Noida case yet" — a real self-contradiction, removed rather than reworded; an unescaped `&` in "Alpha, Beta, Gamma & Delta Sectors" fixed to `&amp;`.

### Added — Local Authority: Areas We Serve hub + Greater Noida (2026-09-17)
- **`areas-we-serve.html`** — a genuine geographic hub page (explanatory content, one card per market, a "how we work across Delhi NCR" section, FAQ) rather than a directory list. Closes the gap where the only geographic hub was a homepage section with no dedicated, indexable, linkable page.
- **`local-seo-greater-noida.html`** — the 6th geo page, and the only new area page a research pass actually justified. Differentiated from Noida via real geographic facts (Knowledge Park, Pari Chowk, Greater Noida West/Noida Extension, Yamuna Expressway corridor) and independently verifiable market distinctness (separate postal codes, different commercial character). Honestly discloses reusing the broader Noida-market case (Delhi Dental Care) rather than fabricating a Greater Noida-specific result — no invented local proof.
- **Research-gated scope**: real competitor/search research found precedent for DLF/Cyber City (Gurgaon), Sector 62 (Noida), and Indirapuram (Ghaziabad) as sub-locality pages elsewhere, but Crossfire's own city pages already cover these zones in body copy — building separate pages would cannibalize existing content. Manesar rejected on ICP mismatch (industrial/corporate); Sonipat/Bahadurgarh rejected for lack of evidence. See `docs/operations/project-decisions.md`.
- **"Areas We Serve" added to primary nav and footer across all 24 pages.**
- **Homepage location grid redesigned** from 5 to 6 cards, switched to a 3×2 layout (avoiding a repeat of the prior 5-card stranded-card bug, since 6 divides evenly by 3/2/1 where 5 does not).
- Converted 2 previously-unlinked "Greater Noida" mentions on the Noida page (a chip, an in-body reference) into real links. Added Greater Noida + the hub page to the cross-link row on all 12 other geo/vertical/service pages, and to `areaServed` JSON-LD on 8 hub-like pages.
- `sitemap.xml` updated with both new URLs.

### Fixed — Pre-release code review, round 2 (2026-09-17)
Findings from a second code-review pass on the accumulated release diff, run as part of the "Release" sequence's final-code-review step:
- Fixed a broken case-study link: the Arora Law "Read the full week-by-week story" link on `local-seo-legal-delhi-ncr.html` pointed to an unrelated blog post (`blog-why-nobody-reads.html`) instead of `case-studies.html`.
- Fixed FAQ schema/visible-text mismatches across **all 5** GBP/service pages (29 FAQ entries total) — JSON-LD answer text had drifted from the shorter visible-copy versions during editing, and 2 question names on the GBP hub didn't match their visible `<h3>` text at all (a pre-existing issue, not introduced this cycle). Rewrote every JSON-LD FAQ entry to match its visible H3/paragraph exactly, verified programmatically.
- Completed the internal-link mesh between the 3 new non-flagship service pages (citation, review, multi-location) — each was missing one cross-link to a sibling, contradicting `docs/seo/internal-linking-strategy.md`'s claim that all 4 new pages fully cross-link.
- Fixed a stagger-animation class bug on `index.html`'s homepage locations grid — the 5th (Ghaziabad) card reused the 1st (Delhi) card's `d1` delay class instead of the unused `d5`, a leftover from the grid's 4→5 card extension.
- Deduplicated `.related-card` CSS across 5 pages by composing `css/main.css`'s existing `.card`/`.card--lift`/`.card--surface` utilities instead of redefining the same box/hover styles per file; this also fixes an unintended background-color inconsistency on the GBP hub's copy.
- Escaped unescaped `&` characters in "Local SEO & Google Maps Ranking" across 6 files' `<title>`, meta tags, H1, and related-service card text (JSON-LD string values were correctly left unescaped, since HTML-entity escaping doesn't apply inside JSON).
- **Logged retroactively**: commit `1d5382e`'s own 4 code-review fixes (homepage `.loc-grid` CSS regression from the Delhi card addition, duplicated `.ind-card`/`.loc-card` CSS, an unlinked Electrical/Trades case-study tag, and an unverifiable "85%" stat newly encoded into `audit.html`'s FAQ schema) were never recorded here, `RELEASE_CHECKLIST.md`, or `SPRINT_BACKLOG.md` at the time — a process gap this entry closes per the standing rule to log every completed phase.

### Added — Service Topical Authority Build (2026-09-16)
- **4 new service deep-dive pages**, closing the site's largest remaining topical gap — no page previously explained any individual service deliverable in depth; `services.html` only listed features as pricing-tier bullets.
  - `local-seo-google-maps-ranking-delhi-ncr.html` — the flagship service, previously undocumented as its own topic. Explains the three actual Google Maps ranking factors (relevance, distance, prominence), the organic-vs-map-pack distinction, process, and realistic timelines.
  - `citation-building-nap-consistency-delhi-ncr.html` — what a citation is, India-specific directories (Justdial, Sulekha, IndiaMART), common NAP failure modes, process.
  - `google-review-management-delhi-ncr.html` — policy-compliant review generation, negative review response, review velocity as a ranking signal. Expands (without duplicating) the GBP hub's existing review section.
  - `multi-location-local-seo-delhi-ncr.html` — written generically per explicit instruction, with **no fabricated past-client claims** — considerations, structural checklist, and FAQs only, since no verified multi-location case data exists in this repo.
- **Competitor/search research preceded the build**: fetched a direct Delhi NCR competitor in full and cross-referenced 8 search queries before deciding scope. Two candidate pages were explicitly **not** built after research showed weak justification: standalone Local Link Building (no Delhi competitor treats it as a dedicated page) and standalone On-Page/Hyperlocal Content SEO (the site's own geo pages already demonstrate this; a separate page would restate rather than add). A third candidate, "GBP suspension recovery" (a named sub-service some competitors sell), was found but deliberately **not** added anywhere — not a confirmed Crossfire capability.
- **Cannibalization avoided, not created**: `gbp-optimization-delhi-ncr.html`'s review-management section was trimmed to a summary + link to the new Review Management page; its NAP FAQ answer got a pointer to the new Citation page. No existing FAQ schema question was removed or reworded — only pointer sentences added.
- **Internal linking**: each new page carries 12–14 inbound links (via the existing "Also serving Delhi NCR" chip pattern on all 8 geo/vertical pages, plus `services.html`, `index.html`, and the GBP hub's new "Go Deeper" related-services grid) and links out to the other 3 new pages plus real, existing case-study pages — no fabricated proof, no invented statistics.
- `sitemap.xml` updated with all 4 new URLs.

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
