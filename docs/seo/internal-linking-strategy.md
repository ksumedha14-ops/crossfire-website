# Internal Linking Strategy

Reconstructed from cross-page `href` analysis and the explicit internal-linking audit performed in commit `b854ff6`.

## Observed link graph (as of 2026-07-22)

| Page(s) | Inbound links |
|---|---|
| index, services, audit, contact, case-studies, blogs | 13 each (universal nav + footer presence) |
| local-seo-home-services-delhi-ncr.html | 7 (after the audit fix; was 2 before) |
| local-seo-{gurgaon,noida,faridabad,ghaziabad}.html | 5 each |
| blog-* (each) | 4 each |

## The established pattern: build → audit → patch

Commit `b854ff6` ("SEO indexing audit fixes: internal linking and PageRank distribution") is the clearest evidence of a deliberate, repeatable process:

1. A new page ships (e.g., the home-services hub in `4c06112`) with only whatever links were added at launch time.
2. Some time later, an audit pass checks inbound link count per page.
3. Under-linked pages get patched with contextual cross-links from topically relevant pages — not just generic nav links.

Concretely, the `b854ff6` audit found:
- The home-services hub had only 2 inbound links (index + case-studies) → added an "HVAC & Home Services SEO" chip to the "Also serving" section of all 4 city pages, raising it to 6+ topically relevant inbound links.
- `blog-spray-and-pray-marketing.html` used HVAC as its worked example but didn't link to the hub → added a contextual anchor on the phrase "HVAC company in South Delhi."
- `index.html` had no direct links to individual blog articles (blogs depended solely on `blogs.html` for inbound links) → added a 3-card "From the Blog" section above the footer.

The same audit explicitly checked and ruled out other issues: no sitemap gaps (all pages already listed), no canonical URL problems, no missing titles/H1s/H2s, and no `noindex` tags anywhere.

## Cross-linking mechanisms in use

- **"Also serving Delhi NCR" chip row** — present on all city pages and the hub page, linking laterally to sibling geo/vertical pages plus `services.html` and `case-studies.html`.
- **Homepage "Locations We Serve" section** — 4 cards linking from index.html down to each city page (added in `483e05a`), the first deliberate PageRank flow from the root page to geo spokes.
- **Contextual in-body links** — anchors placed inside relevant prose (e.g., a case-study mention linking to the hub page) rather than only in chip/nav rows.
- **Homepage "From the Blog" section** — surfaces individual articles directly from the root page rather than relying solely on `blogs.html` as an intermediary.

## Update (2026-09-16): 4 new service pages, linked before launch

Unlike the earlier "build → launch under-linked → audit → patch" pattern documented above, the 4 new service pages (`local-seo-google-maps-ranking-delhi-ncr.html`, `citation-building-nap-consistency-delhi-ncr.html`, `google-review-management-delhi-ncr.html`, `multi-location-local-seo-delhi-ncr.html`) were linked from 12–14 files each *before* being considered complete, not patched in afterward — added to the "Also serving Delhi NCR" chip row on all 8 existing geo/vertical pages, `services.html`'s Service 1 section, `index.html`'s Core Services section, and a new "Go Deeper" related-services grid added to the GBP hub. Each new page also links out to the other 3 and to real, existing case-study pages.

The GBP hub's existing review-management section and NAP FAQ answer were trimmed to summaries with links to the new dedicated pages, avoiding content duplication rather than creating two pages that both fully explain the same thing.

## Checklist for adding a new page

Based on the pattern above, apply this whenever a new page is created:
1. Add the page to `sitemap.xml` with an appropriate `priority`/`changefreq`/`lastmod`.
2. Link it from at least one topically relevant existing page in the body copy, not just nav/footer.
3. If it's a geo or vertical spoke, add it to the "Also serving" chip row of sibling pages.
4. If it's a blog post, check whether it should be cross-linked from a relevant service/landing page (per the HVAC-blog-post precedent) and surfaced on the homepage.
5. Re-run an inbound-link count check afterward — don't assume the page automatically has PageRank flowing to it once published.

## Assumptions

- No Google Search Console or analytics data is in the repo, so real crawl/index status cannot be verified — the audit in `b854ff6` was based on internal link-graph inspection, not confirmed indexing data.
- The cadence of these audits (how often they're run) is not documented; treat it as "after every batch of new pages," per the observed pattern.
