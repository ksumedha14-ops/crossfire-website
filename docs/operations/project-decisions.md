# Project Decisions Log

A record of explicit strategic/editorial calls found in commit messages — the *why* behind changes, not just the *what*. Reconstructed retroactively from git history on 2026-07-22; append new decisions here going forward as they're made (see the Documentation Rules section of `CLAUDE.md`).

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
