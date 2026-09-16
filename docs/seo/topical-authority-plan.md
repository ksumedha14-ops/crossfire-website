# Topical Authority Plan

Reconstructed from page titles, H1/H2 structure, internal linking, and the commit history of page additions.

## The model: geo × vertical matrix

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
