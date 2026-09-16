# RELEASE_CHECKLIST.md

Running log of everything completed toward the next production release. This is a checklist, not a trigger — none of the actual release steps (commit, push, deploy, indexing) happen until the founder explicitly says **"Release."** See `CLAUDE.md` for the standing rule.

When "Release" is called, the following run in order:
1. Full repository audit
2. Technical SEO audit
3. QA
4. Final code review
5. Git commit
6. Git push
7. Vercel deployment
8. Google Search Console indexing

Until then: implement → verify → document → hold.

---

## Completed this cycle

### Content edit + pre-release code review, round 3 — complete (2026-09-17)
- [x] Removed plumbers/electricians/HVAC from services.html's industries FAQ (founder instruction)
- [x] Fixed asymmetric cross-linking on Greater Noida page (6 reciprocal links added)
- [x] Fixed hero-stat/honesty-disclosure contradiction on Greater Noida page
- [x] Fixed unescaped ampersand in Greater Noida area chips
- [x] Re-verified: JSON-LD valid, 0 broken links sitewide, FAQ schema matches visible text

### Local Authority: Areas We Serve hub + Greater Noida — complete (2026-09-17)
- [x] Repository audit completed first: confirmed no dedicated hub/nav link existed, confirmed sitewide no address/base-city is ever disclosed (grep across every JSON-LD PostalAddress block)
- [x] Competitor/search research completed before selecting locations (5 sub-locality terms + 3 NCR-adjacent towns checked)
- [x] Built `areas-we-serve.html` (genuine hub, not a directory)
- [x] Built `local-seo-greater-noida.html` (only new area with independent evidence)
- [x] Explicitly did not build DLF/Cyber City/Sector 62/Indirapuram (cannibalization risk against existing content), Manesar (ICP mismatch), or Sonipat/Bahadurgarh (no evidence)
- [x] "Areas We Serve" added to nav + footer on all 24 pages
- [x] Homepage location grid redesigned 5→6 cards, 3×2 layout
- [x] Cross-linked Greater Noida + hub across 12 other pages; converted 2 unlinked Noida-page mentions to real links
- [x] `areaServed` schema updated on 8 hub-like pages
- [x] `sitemap.xml` updated with both new URLs
- [x] `ROADMAP.md`, `SESSION_LOG.md`, `SPRINT_BACKLOG.md`, `CHANGELOG.md`, and 2 `docs/` files updated

### Pre-release code review, round 2 — complete (2026-09-17)
- [x] Fixed broken Arora Law case-study link (pointed to an unrelated blog post)
- [x] Fixed FAQ schema/visible-text mismatches across all 5 GBP/service pages (29 entries), including 2 pre-existing question-name mismatches on the GBP hub not introduced this cycle
- [x] Completed the cross-link mesh between the 3 new non-flagship service pages
- [x] Fixed Ghaziabad locations-card stagger-animation class bug on index.html
- [x] Deduplicated `.related-card` CSS across 5 pages to reuse `css/main.css` utilities
- [x] Escaped unescaped ampersands across 6 files (HTML text only; JSON-LD left correctly unescaped)
- [x] Retroactively logged commit `1d5382e`'s 4 code-review fixes in `CHANGELOG.md` and here — they were fixed but never recorded at the time

### Retroactive log — commit `1d5382e` fixes (originally made 2026-09-16, logged 2026-09-17)
- [x] Fixed homepage `.loc-grid` CSS regression (5th location card stranding + lost mobile breakpoints)
- [x] Deduplicated `.ind-card`/`.loc-card` CSS
- [x] Linked the previously-unlinked Electrical/Trades case-study tag to its hub page
- [x] Removed an unverifiable "85%" stat from `audit.html`'s new FAQ schema (and matching visible copy)

### Service Topical Authority — complete (2026-09-16)
- [x] Repository inspection completed first: all `docs/seo/`, `docs/business/` files, `services.html`, `sitemap.xml`, `robots.txt` reviewed before proposing any new page
- [x] Competitor/search research completed before building: 1 competitor fully fetched, 8 search queries cross-referenced
- [x] Topical map presented to founder; 2 scope decisions confirmed directly (multi-location page written generically with no fabricated claims; GBP suspension recovery declined)
- [x] Built `local-seo-google-maps-ranking-delhi-ncr.html` (flagship service)
- [x] Built `citation-building-nap-consistency-delhi-ncr.html`
- [x] Built `google-review-management-delhi-ncr.html`
- [x] Built `multi-location-local-seo-delhi-ncr.html` (generic, no fabricated claims)
- [x] Trimmed `gbp-optimization-delhi-ncr.html`'s review section and NAP FAQ to pointers, avoiding cannibalization — no existing FAQ schema question removed or reworded
- [x] Internal linking: 12–14 inbound links per new page across 8 geo/vertical pages, `services.html`, `index.html`, and a new GBP-hub related-services grid
- [x] `sitemap.xml` updated with all 4 new URLs
- [x] Full verification: all JSON-LD valid, all FAQ schema questions matched verbatim to visible copy, 0 broken internal links, exactly 1 H1 per page, 0 noindex tags, all pages live-rendered 200 OK
- [x] `CHANGELOG.md`, `ROADMAP.md`, `SESSION_LOG.md`, `SPRINT_BACKLOG.md`, and 4 `docs/` files updated

### Phase 1 — in progress
- [x] Homepage hero CTA rewritten (`index.html`) — verified live (mobile + desktop render, no console errors, href intact)
- [x] Phase 1 verification pass completed — full technical QA sweep (links, HTML, schema, sitemap, robots.txt, canonicals, accessibility, headings, alt text) across all 14 pages
- [ ] Case-study revenue/ROI figures — blocked on real data from Sumedha
- [ ] ICP-based prospect re-screening — blocked on CRM access confirmation

### Foundation Stabilisation — release blockers (2026-08-04)
- [x] **Pricing inconsistency fixed** — source of truth confirmed with founder (₹39,700/59,700/25,000, per the 2026-07-06 reprice commit `3df2a05`); propagated to 4 city pages (6 instances) + `contact.html` (3 figures); verified no stale figures remain anywhere sitewide.
- [x] **Character-encoding corruption fixed** — 200 corrupted instances across 4 city pages repaired via targeted cp1252/UTF-8 round-trip; verified 0 remaining, JSON-LD still valid, live-rendered clean in-browser.
- [x] **Malformed og:title/twitter:title metadata fixed** — 8 instances + 1 additional (inline style attribute) across 4 city pages; verified valid HTML attribute syntax, live-rendered clean.
- [ ] Logo asset compression (732KB → target <30KB) — found during verification, not yet fixed, not a release blocker per founder priority order
- [ ] Mobile hamburger menu — inconclusive test, needs recheck before fix/no-fix decision, not yet actioned

### Topical Authority Phase 1 — complete (2026-08-04)
- [x] JSON-LD added to `audit.html` (LocalBusiness/ProfessionalService + FAQPage, 4 real Qs)
- [x] JSON-LD added to `contact.html` (LocalBusiness/ProfessionalService + FAQPage, 6 real Qs)
- [x] JSON-LD added to `services.html` (LocalBusiness/ProfessionalService + hasOfferCatalog with real current pricing)
- [x] JSON-LD added to `case-studies.html` (LocalBusiness/ProfessionalService + Article, no fabricated ratings)
- [x] JSON-LD added to `blogs.html` (LocalBusiness/ProfessionalService + Blog listing the 3 real posts)
- [x] Verified: all 14 pages now carry schema, 25 blocks sitewide, 0 invalid; H1/title uniqueness re-checked; live-rendered on 2 pages with 0 console errors

### Topical Authority Phase 2 & 3 — complete (2026-08-07)
- [x] Built `gbp-optimization-delhi-ncr.html` (consolidation hub, built first)
- [x] Built `local-seo-dental-clinics-delhi-ncr.html` (real Delhi Dental Care case)
- [x] Built `local-seo-legal-delhi-ncr.html` (real Arora Law Associates case + testimonial)
- [x] Built `local-seo-delhi.html` (no fabricated case — honestly reuses Arora Law's real data)
- [x] Folded Justdial-vs-GBP, Reviews Management, ranking-timeline FAQ into the GBP hub as sections
- [x] Linked case-studies.html's Dental/Legal vertical tags to their new pages
- [x] Retrofitted all 4 existing city pages + home-services hub with 4 new cross-link chips each
- [x] Retrofitted index.html: new Industries section, 5th Locations card (Delhi), GBP FAQ link
- [x] Linked 2 genuine content connections found during build (blog-why-nobody-reads.html testimonial → Legal page; blog-spray-and-pray-marketing.html example → Delhi page)
- [x] Updated sitemap.xml with all 4 new URLs
- [x] Full verification: 18 pages, 0 broken links, 0 broken anchors, 0 duplicate/missing titles, 0 H1 issues, 36/36 valid JSON-LD blocks, 0 pages with zero schema, 0 encoding regressions, live-rendered with 0 console errors
- [ ] Nav inclusion decision for city/vertical pages — still open, not yet decided

---

## Pre-release gate (do not run until "Release" is called)

- [ ] Full repository audit
- [ ] Technical SEO audit
- [ ] QA pass (final, full-site)
- [ ] Final code review
- [ ] Git commit
- [ ] Git push
- [ ] Vercel deployment
- [ ] Google Search Console indexing request

---

*This file accumulates across the whole release cycle — do not reset it between phases. Each phase's completed items stay checked; new phases add new sections above the pre-release gate.*
