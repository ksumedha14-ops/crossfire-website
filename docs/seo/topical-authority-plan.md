# Topical Authority Plan

Reconstructed from page titles, H1/H2 structure, internal linking, and the commit history of page additions.

## Update (2026-09-16): a third axis added — service/deliverable

As of this date the site targets "Local SEO / Google Maps ranking for service businesses in Delhi NCR" via **three** independent axes, not two:

- **Geography** — city-level pages: Gurgaon, Noida, Faridabad, Ghaziabad, Delhi (5)
- **Vertical** — industry-level pages: Home Services (HVAC/plumbing/electrical), Dental Clinics, Legal/Law Firms (3)
- **Service** — deliverable-level pages: Google Business Profile Optimization, Local SEO & Google Maps Ranking, Citation Building & NAP Consistency, Google Review Management & Generation, Multi-Location Local SEO (5)

The service axis was added after real competitor/search research (not assumption) confirmed GBP Optimization, Citation Building, and Review Management are treated as dedicated pages across essentially every local-SEO competitor examined, while the site's own flagship service — Local SEO & Google Maps Ranking itself — had zero standalone content page despite being the entire premise of the business. `services.html` remains a pricing/comparison hub; the service pages carry topical depth (ranking factors, process, FAQs) that pricing pages don't. See `docs/operations/project-decisions.md` for the full reasoning, including what was deliberately *not* built (Local Link Building, standalone On-Page SEO, a second audit-intent page) and why.

## The original model: geo × vertical matrix (superseded by the above, kept for history)

The site targets "Local SEO / Google Maps ranking for service businesses in Delhi NCR" via two independent axes:

- **Geography** — city-level pages: Gurgaon, Noida, Faridabad, Ghaziabad
- **Vertical** — industry-level pages: currently only home services (HVAC/plumbing/electrical)

```
                    index.html (root authority)
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   services.html    case-studies.html   audit.html / contact.html
        │
        ├── Geo spokes (industry-agnostic):
        │     local-seo-gurgaon.html
        │     local-seo-noida.html
        │     local-seo-faridabad.html
        │     local-seo-ghaziabad.html
        │
        └── Vertical spoke (city-agnostic):
              local-seo-home-services-delhi-ncr.html

   blogs.html → blog-*.html (top-of-funnel, not keyword-targeted)
```

**Only one cell of the matrix is built** — home services, spanning all of Delhi NCR rather than being split by city. No page currently targets a specific vertical *within* a specific city (e.g., "HVAC SEO Gurgaon"). This is the single largest structural gap in the topical map, given that both axes already have working templates.

## Shared template

The 4 city pages and the 1 hub page follow an identical section order (confirmed via H2 comparison):
1. Hero (city/vertical-specific H1)
2. "Why [city/vertical] businesses lose visibility" framing section
3. Process ("How we rank your [X] business in the top 3")
4. Named case result specific to that city/vertical
5. "Areas we serve" — neighborhood/sector chip list
6. Founder accountability line ("run by me, not passed to a junior")
7. FAQ (targeted questions, schema-marked)
8. Final CTA

This template is a repeatable production asset — new geo/vertical pages can be built by cloning structure and substituting city/vertical-specific copy, case data, and FAQ content.

## Trust/authority layer (non-keyword-targeted)

`case-studies.html` and the blog serve authority-building rather than direct keyword capture — they support E-E-A-T and internal linking rather than ranking for their own head terms.

## Assumptions

- No analytics/Search Console data is present in this repo, so actual ranking performance, traffic, or which pages are converting cannot be verified — this plan describes the *structure that was built*, not measured results.
- Whether unbuilt matrix cells (e.g. salon SEO, clinic SEO) were deliberately deprioritized or simply not yet reached is not stated in commit messages; treat the gap as open backlog, not a considered exclusion, per [[../../ROADMAP.md|ROADMAP]].
