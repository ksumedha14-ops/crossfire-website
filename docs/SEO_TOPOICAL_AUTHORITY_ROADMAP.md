# Content Architecture & Topical Authority Audit

Audit only — no site files were changed as part of this pass. Every claim below was verified directly against the repository (HTML source, `sitemap.xml`, `robots.txt`, nav markup, and JSON-LD blocks) on 2026-08-04, not against `ROADMAP.md`'s narrative, which is checked and corrected where it drifted from reality.

**Headline numbers:** 14 indexable pages · 14/14 in sitemap · 0 orphan pages · 5/14 pages carry zero JSON-LD · 2 case-study verticals with no landing page.

---

## Part 1 — Content inventory

Every indexable page in the repo, cross-checked against the live nav markup, `sitemap.xml`, and actual body word counts (scripts/styles stripped before counting).

| URL | Primary keyword | Intent | Type | Words | Status | Nav | Sitemap | Inbound links |
|---|---|---|---|---:|---|:---:|:---:|---:|
| `index.html` | best local seo agency delhi ncr | Commercial / Nav | Homepage | 2,535 | Complete | Y | Y | 13 |
| `services.html` | local seo services delhi ncr | Commercial | Service | 1,665 | Needs improvement — 0 FAQ schema, 0 JSON-LD | Y | Y | 13 |
| `audit.html` | free local seo audit delhi ncr | Transactional | Utility (lead magnet) | 1,938 | Needs improvement — 0 JSON-LD despite being the top conversion target | Y | Y | 13 + heaviest CTA target sitewide |
| `contact.html` | contact sumedha / local seo (branded) | Transactional | Utility | 1,316 | Needs improvement — 0 JSON-LD, no NAP schema on the page where NAP consistency matters most | Y | Y | 13 |
| `case-studies.html` | local seo case studies delhi ncr | Commercial / Trust | Case Study | 919 | Thin — 4 case cards + narrative in <1,000 words; 0 JSON-LD | Y | Y | 13 |
| `blogs.html` | local seo blog delhi ncr | Informational hub | Blog (index) | 370 | Thin — only 3 posts indexed; 0 JSON-LD | Y | Y | 13 |
| `local-seo-gurgaon.html` | local seo services gurgaon / gurugram | Commercial, geo | City | 1,570 | Complete — FAQ schema present, only 4 Qs | N | Y | 5 |
| `local-seo-noida.html` | local seo services noida | Commercial, geo | City | 1,612 | Complete | N | Y | 5 |
| `local-seo-faridabad.html` | local seo services faridabad | Commercial, geo | City | 1,656 | Complete | N | Y | 5 |
| `local-seo-ghaziabad.html` | local seo services ghaziabad | Commercial, geo | City | 1,663 | Complete | N | Y | 5 |
| `local-seo-home-services-delhi-ncr.html` | local seo hvac / home services delhi ncr | Commercial, vertical | Vertical | 2,128 | Complete — deepest FAQ on the site (10 Qs) | N | Y | 7 |
| `blog-spray-and-pray-marketing.html` | none (generic ad-targeting advice) | Informational, TOFU | Blog | 952 | Off-target — no local-SEO / GBP keyword intent | N | Y | 4 |
| `blog-fastest-way-to-sell.html` | none (generic sales advice) | Informational, TOFU | Blog | 872 | Off-target | N | Y | 4 |
| `blog-why-nobody-reads.html` | none (generic storytelling advice) | Informational, TOFU | Blog | 1,192 | Off-target | N | Y | 4 |

> **Verified discrepancy vs. CLAUDE.md** — CLAUDE.md states every page includes JSON-LD structured data. Confirmed false: `audit.html`, `services.html`, `contact.html`, `case-studies.html`, and `blogs.html` contain zero `<script type="application/ld+json">` blocks — checked directly against source, not the doc's claim. These are five of the six highest-traffic, highest-intent pages on the site.

---

## Part 2 — Topical authority map

The link graph, drawn from actual `href` counts (not the aspirational diagram in `ROADMAP.md`).

```
                              index.html (root)
                                    │
        ┌───────────────┬──────────┴──────────┬────────────────────┐
        ▼               ▼                     ▼                    ▼
  Convert / trust   Geo cluster           Vertical cluster     Blog — topically
                     (4 cities,             (1 node)             isolated
                    1 industry)
  services.html     gurgaon                home-services-      blogs.html hub
  audit.html        noida                  delhi-ncr           3× sales/storytelling
  contact.html      faridabad              — no 2nd vertical —  posts (dashed = graph-
  case-studies.html ghaziabad              built —              reachable but topically
                                                                  disconnected)
```

**Inverse-orphan: proof with no page.** `case-studies.html` carries real case narratives for **Dental** (Delhi Dental Care) and **Legal** (Arora Law Associates) — full metrics, quotes, timelines — but neither vertical has a landing page anywhere in the site. The topical map's own trust content is pointing at nothing. Git history (`214743a`) confirms two more verticals — Beauty/Wellness and Construction/Contracting — existed as case cards and were cut, so this isn't new; it's a standing gap.

The 3 blog posts are graph-connected (each links to `audit.html`, `services.html`, etc., and back to each other) but topically orphaned: none targets a local-SEO or GBP keyword, and — checked directly — no service page or city page links *down* into any blog post. Only one link runs the other direction, from `blog-spray-and-pray-marketing.html` into the home-services hub.

---

## Part 3 — Roadmap comparison

Marked against what actually exists in the repo — a page only counts as Built if its file is present, in the sitemap, and reachable by a link.

| Planned item | Status | Evidence |
|---|:---:|---|
| Homepage | ✅ Built | `index.html` |
| Services | ✅ Built | `services.html` |
| Audit | ✅ Built | `audit.html` |
| Case Studies | ✅ Built | `case-studies.html` — but 2 of its 4 verticals have no matching landing page (see Part 2) |
| Contact | ✅ Built | `contact.html` |
| Blogs | 🟡 Partially built | Hub + 3 posts exist structurally, but none target local-SEO/GBP search intent |
| City pages | 🟡 Partially built | 4 of Delhi NCR's cities covered; Delhi proper — the largest single market — is missing |
| Home Services | ✅ Built | `local-seo-home-services-delhi-ncr.html` |
| Dental | ❌ Missing | Case-study proof exists; zero landing page |
| Legal Services | ❌ Missing | Case-study proof exists; zero landing page |
| Physiotherapy | ❌ Missing | No page, no case data (cut from case-studies in `214743a`) |
| Salons & Wellness | ❌ Missing | No page, no case data (cut from case-studies in `214743a`) |
| GBP Optimisation | ❌ Missing | Discussed in FAQ schema on 6 pages; zero dedicated URL owns the head term |
| Google Maps Ranking | 🟡 Partially built | Secondary keyword theme across nearly every page; no page targets it as primary |
| Supporting blog articles | 🟡 Partially built | 3 published, 0 aligned to the site's actual SEO keyword strategy |

---

## Part 4 — Internal linking

Computed directly from `href` counts across all 14 files, cross-checked against `docs/seo/internal-linking-strategy.md` (found to be accurate and current).

| Finding | Detail |
|---|---|
| **Orphan pages** | 0 found — every page has at least 4 real inbound links; the sitemap and link graph agree |
| **Weakly linked** | 4 city pages (5 inbound each) and 3 blog posts (4 inbound each) — all mechanical sibling links, not organic contextual mentions from unrelated pages |
| **Missing contextual links** | No service or case-study page links out to any blog post. GBP troubleshooting content (duplicate listings, multi-branch structuring) is answered independently on 4 separate FAQ blocks with no shared canonical page to consolidate into |
| **Cluster-strengthening opportunity** | Case-studies.html's Dental and Legal cards should link out the moment those landing pages exist — currently impossible since the targets don't exist |

**Where links should be added, specifically:**

1. Link each case-study card's "vertical" tag (Medical/Dental, Legal/Professional) to its landing page — once built.
2. Add a single canonical GBP FAQ answer set, then replace the 4 duplicated FAQ blocks with short answers + a link to it — this is a link-consolidation move, not new content.
3. Link at least one blog post from a relevant service or city page body (e.g., the "spray and pray" targeting post from `services.html`'s paid acquisition section) — right now the link only runs blog → service, never the reverse.
4. Add city pages and the home-services hub to primary nav, or accept the current design tradeoff explicitly — right now they rely entirely on contextual links and one homepage section for both crawl and user discovery.

---

## Part 5 — Content gaps

Every item here satisfies real search demand, ICP fit, service fit, and topical-authority contribution, without cannibalizing an existing page.

### High priority

- **GBP Optimization — Delhi NCR** — most-repeated FAQ topic on the site (4+ pages), zero page owns the head term. Consolidates rather than adds.
- **Dental / Clinic Local SEO** — case-study proof already exists and is unused. High-LTV vertical, matches ICP directly.
- **Legal Services Local SEO** — same logic as Dental — Arora Law case card is proof with nowhere to send traffic.
- **Local SEO — Delhi (South Delhi / Dwarka / Rohini)** — largest population center in "Delhi NCR" and the only major geography with zero coverage.

### Medium priority

- **HVAC/Plumbing SEO — Gurgaon** (first geo × vertical cell) — proves the matrix model; captures long-tail the city page and hub page currently both dilute.
- **Justdial vs. Google Business Profile** — objection-handling FAQ content already exists in 4 places — this consolidates it into a comparison asset with real search intent.
- **Google Reviews Management — Delhi NCR** — named, proven deliverable in the Kumar HVAC case (review generation system) with no page of its own.

### Low priority

- **Sub-locality pages** (Indirapuram, Cyber City, etc.) — real long-tail demand, but real cannibalization risk against parent city pages without careful scoping — sequence after the matrix fills in.
- **Salon/Wellness & Physiotherapy verticals** — no current case-study proof (removed from case-studies.html previously) — weaker E-E-A-T until real client data exists.
- **"How Long Does It Take to Rank on Google Maps?" blog** — good link-consolidation target — the same question is answered independently in every city FAQ — but lower standalone commercial value.

---

## Part 6 — Publishing roadmap

Ranked by combined SEO impact and lead-gen impact, given what's already built and what it would connect to.

1. **`gbp-optimization-delhi-ncr.html`**
   `kw: google business profile optimization delhi ncr` · Commercial intent · SEO impact: High · Lead-gen impact: High
   Consolidates 4× duplicated FAQ content into one authoritative page — the single largest topical hole on the site. Links from: index, services, all 4 city pages' "also serving" row, home-services hub. Links back: same set, replacing their standalone GBP FAQ blocks with short answers + a link here.

2. **`local-seo-dental-clinics-delhi-ncr.html`**
   `kw: dentist seo delhi ncr` · Commercial, vertical · SEO impact: High · Lead-gen impact: High
   Unused case-study proof already exists (Delhi Dental Care). Links from: case-studies.html's Dental card, index, services. Links back: case-studies, sibling verticals' "also serving" chips.

3. **`local-seo-legal-delhi-ncr.html`**
   `kw: law firm seo delhi / legal services local seo` · Commercial, vertical · SEO impact: Medium–High · Lead-gen impact: High
   Same logic as Dental, using the Arora Law Associates card. High-LTV vertical directly matching the stated ICP.

4. **`local-seo-delhi.html`**
   `kw: local seo services delhi` · Commercial, geo · SEO impact: High · Lead-gen impact: High
   The largest unaddressed geography in "Delhi NCR." Template already proven across 4 other cities. Links from: index's Locations section, all 4 city pages' "also serving" row.

5. **`hvac-seo-gurgaon.html`** (first geo × vertical cell)
   `kw: hvac seo gurgaon / plumber seo gurgaon` · Commercial, geo+vertical · SEO impact: Medium · Lead-gen impact: Medium
   Proves the matrix model actually works before scaling it. Links from: local-seo-gurgaon.html, the home-services hub.

6. **`justdial-vs-google-business-profile.html`**
   `kw: justdial vs google business profile` · Comparison intent · SEO impact: Medium · Lead-gen impact: Medium
   Consolidates existing objection-handling FAQ content already present in 4 places into one standalone, linkable asset.

7. **`google-reviews-management-delhi-ncr.html`**
   `kw: google reviews management for local business` · Commercial · SEO impact: Medium · Lead-gen impact: Medium
   A named, proven deliverable (the Kumar HVAC review-generation system) currently has no page of its own. Links from: services, case-studies.

8. **Blog: "How Long Does It Take to Rank on Google Maps?"**
   `kw: how long to rank on google maps` · Informational · SEO impact: Medium · Lead-gen impact: Low–Medium
   Answers a question independently repeated in every city-page FAQ — ideal internal-link consolidation target once it exists.

9. **Sub-locality pages** (e.g. Greater Noida)
   Commercial, hyperlocal · SEO impact: Low–Medium · Lead-gen impact: Low
   Sequence only after items 1–4 ship — real cannibalization risk against parent city pages without them established first.

10. **Salon/Wellness or Physiotherapy vertical page**
    Commercial, vertical · SEO impact: Low (until proof exists) · Lead-gen impact: Low
    Blocked on real case-study data — this vertical's proof was removed from case-studies.html previously and hasn't been replaced.

---

## Part 7 — Final scorecard

Out of 10. Competitor-relative scores are structural estimates — no external ranking or competitor-crawl data is present in this repo.

| Dimension | Score |
|---|:---:|
| Topical authority | 5/10 |
| Content depth | 6/10 |
| Internal linking | 6/10 |
| Site architecture | 6/10 |
| Local SEO coverage | 5/10 |
| Commercial intent coverage | 5/10 |
| E-E-A-T | 4/10 |
| Authority vs. competitors | 4/10 |

### "If I stopped publishing today, what's the biggest thing preventing Crossfire from becoming the dominant Local SEO authority in Delhi NCR?"

**The geo × vertical matrix is one cell deep.** Every page of topical authority on the site currently rests on 4 city pages that are industry-agnostic, plus 1 vertical page that's city-agnostic — the site has never actually built a page proving it can rank a *specific trade in a specific city*, which is exactly the compound long-tail query real buyers type into Google. On top of that, two of the site's own best trust assets — the Dental and Legal case studies — currently point at nothing, because no landing page exists to send that authority to. What's built is well-executed for one segment (home-services generalist, Delhi NCR-wide). It is not yet wide enough, in either geography or vertical, to be "dominant" — it's a proven template with three unbuilt dimensions.

---

*Every figure in this audit (word counts, link counts, schema presence, sitemap membership) was computed directly from the repository state on 2026-08-04, not carried over from `ROADMAP.md` or `docs/seo/` — those documents were checked and found accurate on linking structure, but silent on the missing JSON-LD and the Dental/Legal orphaned case data, which are new findings from this pass. No site files were modified as part of this audit.*
