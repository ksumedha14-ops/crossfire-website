# Project Decisions Log

A record of explicit strategic/editorial calls found in commit messages — the *why* behind changes, not just the *what*. Reconstructed retroactively from git history on 2026-07-22; append new decisions here going forward as they're made (see the Documentation Rules section of `CLAUDE.md`).

## 2026-09-17 — Internal linking audit: automated code review caught 3 more forced/distorting edits I'd missed

The self-QA during implementation caught and reverted one forced edit (see the entry directly below). The subsequent "Release" code-review step found three more meaning-distorting edits that self-QA had missed, plus two documentation overclaims:

1. `gbp-optimization-delhi-ncr.html` — inserting an `areas-we-serve.html` link had silently dropped "every industry and" from the sentence, narrowing "across every industry and every city we work in" to just "every city we work in." Restored the full claim; kept the link.
2. `local-seo-ghaziabad.html` — "the listing data is incoherent" had been changed to "the underlying directory and citation data is incoherent" to hold a Citation Building link. This asserts a different, unverified causal mechanism (external directory data) in place of the original, accurate one (the GBP listing's own data). Reverted to "listing data"; dropped the link rather than force a replacement — the page already links to Citation Building via its chip row.
3. `local-seo-greater-noida.html` — "The method doesn't change between zones" had been changed to "The underlying ranking factors don't change between zones" to hold a link to the flagship Local SEO page, which swapped the sentence's subject from Crossfire's own methodology to Google's ranking algorithm. Reverted to "the method"; dropped the link (already present via chip row).
4. `SESSION_LOG.md` overstated that all 3 blog posts were "fully disconnected" from service/area pages pre-audit; 2 of 3 already had a genuine contextual link from earlier work (the spray-and-pray and why-nobody-reads posts). Corrected to name the one post that actually was disconnected (`blog-fastest-way-to-sell.html`).
5. `SPRINT_BACKLOG.md` marked "Add contextual area links to 5 service pages" as fully Done; `google-review-management-delhi-ncr.html` had no natural in-prose area link (its real content ties to industry verticals — dental, legal — not a city). Rather than force one, linked the page's existing real "Noida Sector 18" client reference and corrected the backlog status to 4/5 with the reason noted.

- **Why it matters**: the same failure mode (distorting a sentence's meaning to attach a link) recurred 3 times in one task despite being explicitly named and caught once already — self-QA is not sufficient on its own for this class of error; the code-review step is load-bearing, not a formality. Going forward, any edit that changes an existing clause's wording (not just inserts a link into unchanged text) needs a specific "did the meaning change?" check, not just a "does the link make sense?" check.

## 2026-09-17 — Internal linking audit: caught and reverted one forced edit mid-implementation

While adding a contextual citation-building link to `local-seo-delhi.html`, changed the phrase "different pricing tolerance" to "different directory and citation coverage" to create an anchor. On review, this changed the sentence's actual meaning (from a demand-side/economic point to an unrelated technical-SEO point) rather than just adding a link to an existing claim — exactly the "sentence that exists only to place a keyword" the task's own rules prohibited. Reverted immediately rather than shipped; Delhi's page kept its other, genuinely natural new link (to the flagship Local SEO page, where the anchor phrase "zone-specific Local SEO strategy" already existed word-for-word in the sentence) instead.

- **Why it matters**: a real-time example of the difference between "add a link to what a sentence already says" (correct) and "change what a sentence says so it can hold a link" (the failure mode every step of this task explicitly warned against). Not every page needs the same link count — 1 honest link beat 2 where the 2nd required distorting a claim.

## 2026-09-17 — Removed the HVAC/plumbing/electrical vertical sitewide, for consistency

Founder instruction, in two steps: first, remove "plumbers, electricians, HVAC" from the industries list in `services.html`'s FAQ. Then, on review, the founder flagged that this created an inconsistency — that FAQ line now said the business doesn't serve this industry, while a dedicated vertical page, its case studies, testimonials, and dozens of smaller mentions across the site still said it did. Instruction: "remove the pages/words/statement correlating to it... i dont want one page to show that we dont work in this industry and a whole other page that says that we do. be consistent with the changes on all pages and areas."

Executed as a full sitewide removal, not just a link fix:
- **Deleted** `local-seo-home-services-delhi-ncr.html` entirely (the dedicated HVAC/Plumbing/Electrical vertical page) and its `sitemap.xml` entry.
- **Removed real case-study content**: the Kumar HVAC & Plumbing "Featured" case study on `case-studies.html` (the page's top-billed result, including its full narrative, client quote, and results dashboard) and the Sharma & Sons Electricals card. Both businesses' testimonials were also removed from `case-studies.html` and `index.html`; the homepage's sole testimonial slot was filled with the real Arora Law testimonial (already verified elsewhere on the site) rather than left empty or backfilled with an invented quote.
- **Removed proof-card references** to the Kumar HVAC case from 4 service pages (GBP hub, Citation Building, Review Management, the flagship Local SEO page) and the "HVAC & Home Services SEO" cross-link chip from every page that had it (~13 pages).
- **Fixed ~20 smaller illustrative mentions** sitewide — form dropdown options, placeholder text, "areas we serve" neighborhood descriptions, and comparison examples (e.g. "a plumber in Sector 56," "a plumber listed as 'Contractor'") — swapping each to a vertical the business still genuinely serves (dental, legal, salons) rather than leaving a residual reference or a broken link.
- **Left untouched**: the real underlying methodology and process descriptions (GBP optimisation, citation building, review generation) — nothing about *how* Crossfire works was changed, only *which industries* it claims to serve.
- **Why it matters**: this is a direct instance of the site's established "prefer removing unverified/no-longer-true claims over leaving them live" pattern (see the 2026-07-16 entry below), extended from *unverifiable* claims to a *no-longer-accurate* one. The lesson for future edits: a scoped instruction to remove something from one list should prompt a sitewide consistency check before considering the change complete, not just the single requested edit.

## 2026-09-17 — Local authority phase: 1 new area page, not 5, because that's what the evidence supported

Ran real web research (not assumption) before selecting any locations: fetched actual search results for 5 sub-locality terms (DLF Gurgaon, Cyber City Gurgaon, Greater Noida, Indirapuram Ghaziabad, Sector 62 Noida) and checked whether NCR-adjacent towns (Manesar, Sonipat, Bahadurgarh) have real ICP fit.

**Built**: `areas-we-serve.html` (a genuine geographic hub, not a directory list) and `local-seo-greater-noida.html` — the single new area page the research actually justified. Greater Noida has independently verifiable distinctness (a separate postal code range from Noida, and a genuinely different commercial character — an emerging university/institutional belt vs. Noida's established IT/retail corridor), and competitors treat it as a fully separate market. Crossfire's own Noida page already had an unlinked FAQ acknowledging this distinction before today.

**Explicitly not built**, with reasoning:
- **DLF, Cyber City (Gurgaon), Sector 62 (Noida), Indirapuram (Ghaziabad)** — real competitor pages exist for these terms, but Crossfire's own Gurgaon, Noida, and Ghaziabad pages already substantively cover these exact zones in body copy (e.g. the Gurgaon page already states "DLF Phase 1–5, Golf Course Road, New Gurgaon, and Sohna Road each behave as distinct local search markets" as a selling point). Building separate pages here would cannibalize ranking content that already exists, not add new coverage. This confirms rather than overturns the project's prior documented caution against sub-locality fragmentation (see the "Held" section of `SPRINT_BACKLOG.md`'s Topical Authority notes).
- **Manesar** — geographically NCR with real commercial density, but it's an industrial township (factories, MNC offices) — a fundamentally different buyer profile than Crossfire's stated ICP (small local service businesses, 5–50 staff, consumer near-me search). Rejected on ICP mismatch, not on geography.
- **Sonipat, Bahadurgarh** — commonly named by competitors in generic "we serve all NCR" copy, but no evidence found on actual local service-business density or fit. Not enough to build on; flagged as needing a dedicated research pass if revisited.
- **Remaining chip-list neighborhoods** (Sohna Road, Palam Vihar, Udyog Vihar, New Gurgaon, South City, Vaishali, Kaushambi) — not tested in this research pass, no evidence either way. Left as non-indexed chips rather than assumed into pages.

**NAP integrity maintained**: the hub page and Greater Noida page both avoid claiming a physical office — the site has never disclosed a specific base city or street address anywhere, only "Delhi NCR, India" at the region level (verified via a sitewide grep of every JSON-LD PostalAddress block before writing either page). The hub's FAQ states this directly ("Does Crossfire Marketing have a physical office in every city it serves? No.") rather than leaving it ambiguous or implying local branches that don't exist.

- **Why it matters**: this is the second time in this project a research-first process concluded fewer pages were justified than the brief's suggested default (5 areas) — the same pattern as the Service Topical Authority build, where 4 pages were built and 3 candidate topics were explicitly rejected. Treat "aim for N" instructions as a ceiling informed by real evidence, not a target to hit regardless of what the research shows.

## 2026-09-16 — Service topical authority: research-gated scope, two topics deliberately skipped

Before building any new page, ran real web research (not assumption) — fetched a direct Delhi NCR competitor's full service-page structure and cross-referenced 8 search queries across BrightLocal, 1Digital, and several other local-SEO providers.

**Built** (validated by research as legitimate, non-overlapping topics): `local-seo-google-maps-ranking-delhi-ncr.html` (the flagship service — found to have zero standalone content page despite being the entire premise of the business), `citation-building-nap-consistency-delhi-ncr.html`, `google-review-management-delhi-ncr.html` (all three recur as dedicated pages across essentially every competitor examined).

**Explicitly not built**, with reasoning:
- **Local Link Building** — recurs in US-agency results but no Delhi NCR competitor treats it as a standalone page; the closest local comp folds it into a broader "authority building" section. Building a dedicated page here would have been keyword-driven, not intent-driven.
- **Standalone On-Page/Hyperlocal Content SEO** — the site's own geo/vertical pages already *demonstrate* this rather than needing a page that *explains* it; a separate page risked restating existing work rather than adding new topical depth.
- **A second "Local SEO Audit" page** — `audit.html` already fully owns this search intent as a human-delivered lead magnet; the competitive pattern for audit-content is automated instant-audit tools, not pages, so there was no real gap to fill.
- **"GBP suspension recovery"** — found as a named sub-service some competitors sell. Not added anywhere (no page, no FAQ) because it's not a confirmed Crossfire capability — flagged to the founder and explicitly declined rather than assumed.

**Built with a scope constraint**: `multi-location-local-seo-delhi-ncr.html` was approved for creation (real pre-existing FAQ-content precedent: multi-branch GBP questions already live on the Gurgaon page and home-services hub), but the founder explicitly directed it be written **generically, with no fabricated past-client claims** — no invented multi-location case study, no specific-sounding results. The page contains a structural checklist and FAQs instead of a "proof" section.

**Cannibalization resolved, not created**: the new Review Management page overlaps in topic with `gbp-optimization-delhi-ncr.html`'s existing review section. Rather than leaving two pages both fully explaining review generation (duplicate intent, no clear canonical page for Google to prefer), the GBP hub's section was trimmed to a summary + link to the new page as the canonical deep resource. Same treatment for the NAP/citation FAQ line. No FAQ schema question was removed on the GBP hub — only pointer sentences added — so its existing schema value is preserved.

- **Why it matters**: this is the template for evaluating future topical-authority candidates — a keyword existing, or a competitor having a page, is not sufficient justification on its own; the test is genuine non-overlapping search intent plus real, non-fabricated content to fill it.

## 2026-07-07 — Remove fabricated/placeholder trust signals rather than fake them
- Removed 3 "Verified Google Review" links that pointed to dead placeholder URLs (`g.page/r/placeholder-*`) rather than leave broken links live (`6ec39cf`).
- Kept the associated CSS rule in place for when real review URLs exist — a deliberate "ready to re-enable" stance, not a full rip-out.
- **Why it matters**: establishes a pattern of preferring an honest gap over a fake signal — apply the same standard to future trust-signal work (testimonials, stats, logos).

## 2026-07-07 — Client logo strip built, then hidden pending real assets
- Built a full logo-strip section (grayscale-to-color hover, JS-driven `CLIENTS` array, `public/clients/` folder) but immediately set `display:none` on it (`141b4d2`) with a comment marking exactly which attribute to remove once logos and permissions are ready.
- **Why it matters**: implementation and activation were deliberately decoupled — the feature is "done" but gated on external inputs (real logo files, client permission), not on more engineering work. Don't rebuild this; just remove the `display:none` when ready.

## 2026-07-07 — Reconcile conflicting pricing labels
- `services.html` and `index.html` had inconsistent "Most Popular" / "Recommended" labeling across the 3 service tiers. Fixed to: Package 1 (Local SEO, ₹39,700) = Most Popular; Package 2 (Complete Growth, ₹59,700) = Recommended (`59689c8`).
- **Why it matters**: pricing-page label consistency is a conversion-rate concern, not cosmetic — check both pages together whenever pricing copy changes.

## 2026-07-16 — Reposition away from fabricated stats and competitor-fear framing
- Replaced a "Kumar HVAC result card" hero element with a Sumedha founder-credential card; de-named "Kumar HVAC" to "one South Delhi HVAC contractor" in core-services SEO text; removed a review-proof block containing a 4.9★ score and 30+/85%/6-week stats described as "placeholder data, no real GBP yet" (`214743a`).
- Also removed 3 case-study cards (Glamour Studio, Verma Build & Renovate, NovaCare Physiotherapy) described as "weakest/redundant," plus an 8-emoji-card "Industries" stats grid with "unverifiable category averages."
- **Why it matters**: this was a deliberate credibility-over-completeness trade — fewer, verifiable claims were chosen over a larger set of claims that couldn't be fully backed. Any future case-study or stats addition should meet the same verifiability bar. Note the underlying case data for the removed verticals (salon, construction, physiotherapy) may still exist and be reusable — see [[../content/blog-ideas.md|blog-ideas]].

## 2026-07-16 — Defer the Google Maps embed until GBP is live
- The SEO audit implementation commit (`10b95cf`) explicitly notes: "P3 (Google Maps embed) deferred until GBP is live and verified."
- **Why it matters**: signals Crossfire's own Google Business Profile was not fully live/verified as of this date — a business detail worth resolving, since it's a local-SEO agency's own local SEO. Track this as a blocker in [[../../ROADMAP.md|ROADMAP]].

## 2026-07-18 — Batch-publish blog content sourced from newsletter material
- 3 blog articles added in a single commit (`36138f4`), explicitly noted as combining/adapting existing newsletter content rather than being commissioned fresh for the site.
- **Why it matters**: this was a repurposing decision (reuse existing assets) rather than a new-content-production decision — relevant context if evaluating whether the current blog cadence is sustainable or was a one-time backlog clearance. See [[../content/content-calendar.md|content-calendar]] Assumptions.

## 2026-07-18 — Run an internal-linking audit specifically for PageRank distribution
- After the blog batch and hub-page additions, a dedicated audit commit (`b854ff6`) checked inbound link counts, sitemap completeness, canonical correctness, and metadata presence — then patched only the actual gaps found (hub page under-linked; one blog post missing a contextual hub link; blog articles absent from homepage).
- **Why it matters**: establishes internal-linking audits as a distinct, recurring maintenance step after content additions — not a one-time cleanup. See [[../seo/internal-linking-strategy.md|internal-linking-strategy]] for the checklist this implies.

## 2026-08-04 — Validated the approved Lead Acquisition Audit against the repo before acting on it
- `lead-acquisition-audit.md` (root) was reviewed part-by-part against live HTML, `docs/`, and git/session history rather than accepted at face value. Four of its website-specific claims did not hold up: the Part 10 case studies it describes (Physiotherapy DLF Phase 4, Fitness studio Sector 50, Dental clinic NIT Faridabad) do not match the live `case-studies.html` (Kumar HVAC, Delhi Dental Care, Sharma & Sons Electricals, Arora Law Associates) at all; "missing exclusivity emphasis," "missing LinkedIn link," and "missing risk reversal" were all found to already be live on-site. Full validation, corrected gap analysis, and a phased backlog are in `lead-acquisition-gap-analysis.md`.
- **Why it matters**: the audit's outreach-specific sections (ICP prospect list, email templates, subject lines, funnel data) describe a system that lives entirely outside this repo — confirmed via `docs/lead-generation/outreach-strategy.md` and a full-repo search finding no CRM/email/outreach artifacts anywhere in the codebase. Only the website-facing claims could be checked here. Treat any future strategy document the same way: verify against source before treating it as a build plan, especially when it contains precise-sounding but unsourced numbers (the audit's "[Certain]" tags and stats like "10:1 ROI" or "+400% conversion" have no visible data backing them).
- Decided to sequence the audit's Priority 10 ("test one vertical for 30 days") ahead of Priorities 1–2 (redefine ICP to premium verticals, reposition around revenue) rather than after them — the vertical-pivot hypothesis is the least-validated claim in the document and shouldn't be built around before it's tested.

## 2026-08-04 — Rewrote the homepage hero CTA to match its actual destination
- Changed `index.html`'s primary hero CTA from "Get 3 Free Ranking Tips →" to "Get My Free Local SEO Audit →" (still links to `audit.html`).
- **Why it matters**: the old copy promised "3 ranking tips," but `audit.html` actually delivers a 15-minute audit call with a written report within 24 hours — a more substantial, specific offer than the button implied. This is a mismatch-correction (CTA now describes the real thing), not new claims or invented urgency — consistent with this repo's standing rule of not adding unverifiable claims (see the 2026-07-07 and 2026-07-16 entries above). Two related Phase-1 items from the lead-acquisition gap analysis — adding investment/ROI figures to case studies, and re-screening the prospect list against the site's existing ICP criteria — were intentionally left undone pending real numbers from Sumedha and confirmation of CRM access, rather than filled in with invented data.

## Assumptions

- This log is reconstructed from commit messages only; decisions made verbally, in chat, or elsewhere that weren't reflected in a commit message are not captured here and cannot be recovered from this repo alone.
- Going forward, decisions should be added here at the time they're made (see `CLAUDE.md` Documentation Rules) rather than reconstructed later from commit history.
