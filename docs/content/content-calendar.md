# Content Calendar

## What's actually known

The only content-publishing event in the repo's history is commit `36138f4` (2026-07-18): 3 blog articles were added in a single batch, sourced from "newsletter content" per the commit message:
- `blog-spray-and-pray-marketing.html`
- `blog-fastest-way-to-sell.html`
- `blog-why-nobody-reads.html`

All three carry a `lastmod` of 2026-07-18 in `sitemap.xml` and were published simultaneously, not staggered — this looks like a backlog/batch publish rather than evidence of an ongoing weekly/monthly cadence.

Each article follows a consistent template: Article schema, canonical tag, OG/Twitter tags, internal links to services/case-studies/audit pages, an author block, and a sidebar CTA — so there is a repeatable production format even though there's no evidence yet of a repeatable publishing schedule.

## No calendar tooling exists in this repo

There is no CMS, no scheduled-publish mechanism, no editorial calendar file, and no reference to a newsletter tool or publishing platform anywhere in the codebase. Content is authored as static HTML and added via direct commits.

## Proposed scaffold (not a committed schedule — see Assumptions)

| Cadence slot | Type | Notes |
|---|---|---|
| Placeholder — monthly | New blog post | Match the existing article template (Article schema + internal links + CTA) |
| Placeholder — per new landing page | Geo/vertical SEO page | Per [[../seo/topical-authority-plan.md|topical-authority-plan]], prioritize filling matrix cells |
| Placeholder — ongoing | Internal-linking audit | Per [[../seo/internal-linking-strategy.md|internal-linking-strategy]], run after each batch of new pages |

## Assumptions

- **No actual publishing cadence is evidenced in the repo.** The 3 existing posts were published in one batch, not on a recurring schedule — do not assume a "monthly blog post" cadence is an established rule until it's confirmed by the user or by future commit patterns.
- Whether "newsletter content" implies an existing external newsletter (email list, Substack, etc.) that this content is repurposed from is unknown — no newsletter tool, subscriber list, or sending infrastructure appears anywhere in this repo.
- This file should be updated with real dates/cadence once the user confirms an actual publishing rhythm; until then, treat the table above as a structural placeholder, not a commitment.
