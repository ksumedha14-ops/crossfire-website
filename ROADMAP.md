# ROADMAP.md

SEO and content roadmap for the Crossfire Marketing website, reconstructed from the existing page structure, internal linking patterns, and git history. This is a living document — update it as pages ship or priorities shift.

This is the forward-looking summary. Supporting detail lives in `docs/`:
- [docs/business/](docs/business/) — positioning, services, ideal client profile
- [docs/seo/](docs/seo/) — topical authority plan, internal linking strategy, keyword opportunities
- [docs/content/](docs/content/) — content calendar, blog/page ideas
- [docs/lead-generation/](docs/lead-generation/) — outreach & lead capture strategy
- [docs/operations/](docs/operations/) — project decisions log
- [SESSION_LOG.md](SESSION_LOG.md) — dated record of work sessions

## Strategy

Crossfire Marketing targets **"Local SEO / Google Maps ranking for service businesses in Delhi NCR."** The site is built as a hub-and-spoke topical map on two axes — **geography** (city) and **vertical** (trade/industry) — with a founder-led trust layer (case studies, blog, GBP-troubleshooting FAQ content) reinforcing E-E-A-T throughout.

```
                    index.html (root authority)
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   services.html    case-studies.html   audit.html / contact.html
        │
        ├── Geo spokes:    local-seo-{gurgaon,noida,faridabad,ghaziabad}.html
        └── Vertical spoke: local-seo-home-services-delhi-ncr.html (HVAC/plumbing/electrical)

   blogs.html → blog-*.html (top-of-funnel, newsletter-repurposed content)
```

Only one cell of the geo × vertical matrix is built (home services, city-agnostic). Filling that matrix is the highest-leverage next step — see Phase 1.

A recurring, deliberate pattern in the history: **build page → launch under-linked → run an internal-linking/indexing audit → patch cross-links.** Treat this as the expected maintenance cycle whenever a new page ships, not a one-off.

## Completed

### Wave 1 — Trust & conversion foundation (Jul 7, 2026)
- Trust bar, founder authority section, case-study preview cards, testimonial upgrades, "Who This Is For" qualifier section
- Floating WhatsApp button, click-to-call nav link, GA4 event tracking (`js/site.js`)
- Removed placeholder/fabricated content: dead Google review links, stale year references, unverifiable stat blocks
- Fixed mislabeled pricing badges, founder image filename bugs
- Client logo strip built but hidden pending real logos/permissions

### Wave 2 — SEO structure & internal linking (Jul 14–16, 2026)
- Title tag / H1 / H2 optimization across 7 pages; UTF-8 encoding fixes in NAP and titles
- "Locations We Serve" section added to homepage, linking to all 4 city pages (first PageRank flow to geo spokes)
- HVAC & Home Services hub page built and wired into index, case-studies, sitemap
- Homepage/case-studies repositioned around founder-led credibility, removing unverifiable claims
- Homepage hero reframed to visitor-centric question format

### Wave 3 — Content expansion & linking audit (Jul 18, 2026)
- 3 blog articles published (sales/storytelling/ad-targeting topics, repurposed from newsletter content)
- Internal-linking audit: found the home-services hub under-linked (2 inbound), fixed via city-page cross-links, a blog→hub contextual link, and a homepage "From the Blog" section

### Documentation (Jul 22, 2026)
- `CLAUDE.md` added covering architecture and business context
- Full documentation system added under `docs/` (business, SEO, content, lead-generation, operations) plus `SESSION_LOG.md` and Documentation Rules in `CLAUDE.md` — see the links at the top of this file

## Known gaps

- **No geo × vertical intersection pages** — e.g. no "HVAC SEO Gurgaon." City pages are industry-agnostic; the hub page is city-agnostic. This is the biggest structural hole given the matrix is already half-built.
- **Only one vertical covered** (home services), despite case-study data existing for other verticals (salon, construction/renovation, physiotherapy — cut from `case-studies.html` in `214743a` as "weakest/redundant" cards, but the underlying case data may still be usable for dedicated vertical pages).
- **No sub-locality pages** — DLF City, Cyber City, Indirapuram, Sector 62, etc. exist only as chip text/anchors, not indexable pages, despite being exactly the long-tail terms Google Maps localizes around.
- **No Delhi (the city itself) page** — Gurgaon, Noida, Faridabad, Ghaziabad are covered; Delhi proper (South Delhi, Dwarka, Rohini) is not, despite being the largest market in "Delhi NCR."
- **Blog content doesn't target SEO/GBP keywords** — the 3 published articles are generic marketing advice, disconnected from the local-SEO keyword strategy the rest of the site pursues.
- **No standalone GBP optimization page** — GBP troubleshooting is discussed heavily inside FAQ schema (duplicate listings, multi-branch profiles, category selection) but has no dedicated service/landing page.
- **Review proof, client logos, and Google Maps embed are stubbed out**, deferred until a real, verified Google Business Profile is live (per `10b95cf` and `141b4d2`) — blocks the local trust-signal layer.

## Next priorities

### Phase 1 — Fill the geo × vertical matrix
Reuses the existing city-page/hub-page template; primarily new copy + case data.
1. HVAC & Plumbing SEO — Gurgaon
2. HVAC & Plumbing SEO — Noida
3. Electrician SEO — Delhi NCR (split out from the home-services hub as its own head term)
4. Salon & Spa Local SEO — Delhi NCR
5. Home Renovation / Contractor Local SEO — Delhi NCR
6. Physiotherapy / Clinic Local SEO — Delhi NCR
7. Restaurant & Cafe Local SEO — Delhi NCR
8. Real Estate Agent Local SEO — Delhi NCR
9. Gym & Fitness Studio Local SEO — Delhi NCR
10. Dentist / Healthcare Clinic Local SEO — Delhi NCR

### Phase 2 — Missing geo coverage
11. Local SEO Services — Delhi (South Delhi/Dwarka/Rohini)
12. Local SEO Services — Sohna / New Gurgaon

### Phase 3 — GBP service pages
13. Google Business Profile Optimization — Delhi NCR (standalone service page)
14. Google Reviews Management for Local Businesses — Delhi NCR
15. Google Maps Citation Building — Delhi NCR

### Phase 4 — Comparison content (supports the existing Justdial/Sulekha-displacement FAQ angle)
16. Justdial vs Google Business Profile for Local Businesses
17. Local SEO vs Google Ads: Which Should You Choose First

### Phase 5 — Blog content aligned to actual SEO keywords
18. How Long Does It Take to Rank on Google Maps? (answers a question already repeated across every city-page FAQ — strong internal-link target)
19. Google Business Profile Categories Explained for Home Service Businesses
20. What to Do About Duplicate Google Business Profile Listings (extends the existing Ghaziabad case study)

### Standing process
After each new page ships, run an internal-linking pass: check inbound link count, add cross-links from topically related pages, and update `sitemap.xml`. This has been the established pattern for every content addition to date — don't skip it.

### Blocked / waiting on external input
- Real Google Business Profile reviews and rating → unblocks the review-proof section and Google Maps embed
- Client logos + usage permissions → unblocks the client logo strip
- International expansion pages — deferred until Delhi NCR matrix (Phases 1–2) is substantially built out, per the founder's stated market-expansion priority
