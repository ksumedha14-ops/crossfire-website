# SPRINT_BACKLOG.md

Working backlog for the current release cycle, spanning two approved initiatives: **Lead Acquisition** (source: `lead-acquisition-gap-analysis.md`, validated against `lead-acquisition-audit.md`) and **Topical Authority** (source: `docs/SEO_TOPOICAL_AUTHORITY_ROADMAP.md`, re-scoped to a 4-page minimum build). Nothing here is deployed — see `RELEASE_CHECKLIST.md` for what's required before that happens, and `CLAUDE.md` for the standing rule: no push, no Vercel deploy, no Search Console indexing until the founder explicitly says "Release."

Status legend: ✅ Done · 🔄 In progress · ⛔ Blocked · ⏳ Not started

---

## Phase 1 — Highest ROI

| # | Task | Status | Notes |
|---|---|:---:|---|
| 1 | Rewrite on-site CTAs from passive/generic to specific and confident | 🔄 Partial | Only the homepage hero CTA shipped (`index.html`). ~29 other "Free Audit →" / "Claim Free Audit →" instances across 13 pages not yet touched. |
| 2 | Add investment + ROI to Kumar HVAC case study; revenue impact to Dental/Electrical/Legal cards | ⛔ Blocked | Needs real numbers from Sumedha — will not fabricate figures, per this repo's existing no-fabrication standard (`docs/operations/project-decisions.md`). |
| 3 | Re-screen prospect list against the site's own published ICP criteria | ⛔ Blocked | Needs confirmation of CRM/prospect-list access — lives entirely outside this repo. |

### Newly found during Phase 1 verification (not in the original plan — added here)

| # | Task | Status | Severity |
|---|---|:---:|---|
| 4 | Fix pricing contradiction: city pages said ₹18,000/mo, services/index said ₹39,700/mo | ✅ Done | High — Foundation Stabilisation, 2026-08-04 |
| 5 | Fix character-encoding corruption (em dashes, checkmarks, ₹ symbol, arrows) on all 4 city pages | ✅ Done | High — Foundation Stabilisation, 2026-08-04 |
| 6 | Fix malformed `og:title`/`twitter:title` attribute quoting on all 4 city pages | ✅ Done | High — Foundation Stabilisation, 2026-08-04 |
| 7 | Compress/resize `public/crossfire-logo.png` (732KB → likely <30KB) | ⏳ Not started | Medium |
| 8 | Confirm/fix mobile hamburger menu toggle | ⏳ Not started | Medium — inconclusive test, needs clean recheck first |

---

## Phase 2 — High impact, needs validation first

| # | Task | Status | Dependencies |
|---|---|:---:|---|
| 9 | Run the 30-day single-vertical test | ⏳ Not started | None — can start independent of site work |
| 10 | Build one premium-vertical landing page + case study | ⏳ Not started | Conditional on #9 showing real signal |
| 11 | Sharpen hero/positioning copy toward revenue framing (A/B-style) | ⏳ Not started | None |

## Phase 3 — Optimizations

| # | Task | Status | Dependencies |
|---|---|:---:|---|
| 12 | Add thought-leadership / media-mentions section | ⏳ Not started | Real speaking/press activity must exist first |
| 13 | Define "measurable ranking movement" precisely in guarantee copy | ⏳ Not started | None |

## Experimental — hold

| # | Task | Status | Dependencies |
|---|---|:---:|---|
| 14 | Two-tier pricing (budget vs. ₹1.5L+ premium) | ⏳ Not started | Phase 2 (#9) must validate first |
| 15 | Cold-calling channel test | ⏳ Not started | Resourcing decision outside the site |

---

## How this file is maintained

Updated after every completed phase, per the standing process: verify functionality → update `CHANGELOG.md` → update `SESSION_LOG.md` → update this file → log the phase in `RELEASE_CHECKLIST.md`. Items are never deleted on completion — mark ✅ and leave them for the release-cycle history.

---

## Pre-release code review, round 2 (2026-09-17)

Second code-review pass on the full accumulated release diff, run as the "final code review" step of the Release sequence. 7 findings, all fixed — see `CHANGELOG.md` for detail. Also closed a process gap: commit `1d5382e`'s own 4 earlier code-review fixes had never been logged in `CHANGELOG.md`/`RELEASE_CHECKLIST.md`/this file, despite the standing rule requiring it — logged retroactively.

## Service Topical Authority initiative (2026-09-16)

Third axis added alongside the existing geo × vertical matrix, gated on real competitor/search research rather than assumption. See `docs/operations/project-decisions.md` for full reasoning on what was built vs. skipped.

| # | Task | Status | Notes |
|---|---|:---:|---|
| 1 | `local-seo-google-maps-ranking-delhi-ncr.html` (flagship) | ✅ Done | Not originally scoped — found to be the single largest topical gap once services.html was audited |
| 2 | `citation-building-nap-consistency-delhi-ncr.html` | ✅ Done | Validated by competitor research |
| 3 | `google-review-management-delhi-ncr.html` | ✅ Done | GBP hub's overlapping section trimmed to avoid cannibalization |
| 4 | `multi-location-local-seo-delhi-ncr.html` | ✅ Done | Written generically per founder instruction — no fabricated client claims |
| 5 | Local Link Building page | ⏳ Skipped | Weak Delhi-specific evidence; no competitor treats as standalone |
| 6 | Standalone On-Page/Content SEO page | ⏳ Skipped | Site's own geo pages already demonstrate this |
| 7 | Second "Local SEO Audit" content page | ⏳ Skipped | `audit.html` already owns this intent |
| 8 | "GBP suspension recovery" mention | ⏳ Declined | Not a confirmed Crossfire capability |

## Topical Authority initiative

Re-scored the original 10-page publishing roadmap against topical completeness, commercial intent, internal linking, ranking potential, and business impact — not page count. Result: 4 pages to build, 3 folded into one of those pages instead of shipped separately, 3 held.

### Phase 1 — Foundation completion (schema) — ✅ Done, 2026-08-04

| # | Task | Status | Notes |
|---|---|:---:|---|
| 1 | Add JSON-LD to `audit.html`, `services.html`, `contact.html`, `case-studies.html`, `blogs.html` | ✅ Done | LocalBusiness/ProfessionalService on all 5; FAQPage on audit/contact (real FAQ content); Offer catalog with real pricing on services; Article on case-studies; Blog listing on blogs. All 14 pages now carry valid schema (25 blocks, 0 invalid). |

### Phase 2 — Build the 4-page minimum set — ✅ Done, 2026-08-07

| # | Task | Status | Notes |
|---|---|:---:|---|
| 2 | `gbp-optimization-delhi-ncr.html` | ✅ Done | Built first, as planned — the link target for Phase 3 |
| 3 | `local-seo-dental-clinics-delhi-ncr.html` | ✅ Done | Full "Recent Result" section built on real Delhi Dental Care data |
| 4 | `local-seo-legal-delhi-ncr.html` | ✅ Done | Full "Recent Result" section built on real Arora Law Associates data + real testimonial |
| 5 | `local-seo-delhi.html` | ✅ Done | No fabricated second case — honestly reuses Arora Law's real data instead, per explicit authenticity instruction |

### Phase 3 — Consolidate, don't fragment — ✅ Done, 2026-08-07

| # | Task | Status | Notes |
|---|---|:---:|---|
| 6 | Fold Justdial-vs-GBP, Reviews Management, and the ranking-timeline FAQ into the GBP hub | ✅ Done | Built as dedicated sections + FAQ schema entries on the hub page |
| 7 | Link case-study vertical tags (Dental, Legal) to their new landing pages | ✅ Done | `case-studies.html` updated |
| 8 | Decide the nav question for city/vertical pages | ⏳ Not decided | Kept as contextual-link-only for this phase — still an open decision, not yet revisited |
| 9 | Retrofit 4 existing city pages + home-services hub with new cross-link chips | ✅ Done | GBP, Dental, Legal, Delhi chips added to each |
| 10 | Retrofit index.html: new Industries section, 5th Locations card, GBP FAQ link | ✅ Done | |
| 11 | Link 2 genuine content connections found during build (blog testimonial → Legal, blog example → Delhi) | ✅ Done | Not in the original architecture doc — found and linked during implementation |

### Held — not part of the current build

| Item | Reason |
|---|---|
| HVAC/Plumbing SEO — Gurgaon (geo×vertical cell) | Reconsidered from the original plan — would overlap heavily with 2 existing pages before either has real authority. Strengthen cross-linking between them first; revisit only with ranking data. |
| Sub-locality pages | Cannibalization risk against parent city pages that don't yet have enough authority to safely fragment |
| Salon/Wellness or Physiotherapy vertical | Blocked on real case-study proof, not a sequencing decision |
