# Positioning

Reconstructed from `index.html`, `contact.html`, `audit.html`, and JSON-LD `LocalBusiness` schema across the site.

## Core positioning statement

"We get local service businesses into the top 3 on Google Maps — then convert that visibility into predictable leads." (index.html meta description). The brand sells an *outcome* (ranking + leads), not a deliverable list.

## Founder-led narrative

Sumedha is positioned as a hands-on practitioner, not an agency account manager layer:
- "Every [city] account is run by me — not passed to a junior" appears verbatim on every city page and the home-services hub.
- Homepage hero copy and founder card replaced a generic results-card design with a founder credential card (`214743a`, 2026-07-16) — a deliberate pivot from "look at our results" to "look at who's doing the work."
- JSON-LD schema names Sumedha directly as `founder`, with a LinkedIn `sameAs` link, reinforcing single-operator authority signals to search engines.

## Differentiation claims

Sourced from FAQ schema and homepage copy:
1. **Founder-led** — accountability tied to one named person, not a rotating team.
2. **Local specialist** — "we only do local SEO — not national campaigns, not e-commerce" (explicitly rules out categories of client, see [[ideal-clients]]).
3. **Outcome-focused guarantee** — "60-day guarantee is based on ranking movement, not deliverables."
4. **Category exclusivity** — "one-per-category-per-market rule... we won't rank two plumbers in the same area" (index.html FAQ). Once a category is taken in a market, competitors can't access the system in that area — a scarcity/exclusivity mechanic baked into the offer itself.
5. **Justdial/Sulekha displacement** — a recurring FAQ theme positions Google Maps as the higher-value channel versus India-specific directories (Justdial, Sulekha) that many prospective clients already use. See [[keyword-opportunities]].

## Commitment model

- **3-month minimum engagement** — "Local SEO compounds — month 1 builds the foundation, months 2–3 produce ranking movement."
- **60-day progress guarantee**, framed around ranking movement rather than fixed deliverables.
- Pricing starts at ₹39,700/month for the flagship Local SEO & Maps Ranking package (see [[services]]).

## Trust signals removed/deferred

Several early trust elements were deliberately stripped rather than faked once found to be unverifiable:
- Fabricated review-proof block (4.9★, 30+/85%/6wk stats with no real source) — removed in `214743a` ("placeholder data, no real GBP yet").
- Placeholder "Verified Google Review" links pointing to dead URLs — removed in `6ec39cf`.
- Client logo strip — built, then hidden via `display:none` pending real logo files and client permission (`141b4d2`).

This shows a consistent editorial stance: prefer removing unverified claims over leaving them live, and hold real-data sections in reserve until they can be populated honestly. See [[project-decisions]] for the full decision log.

## Assumptions

- Actual client count, satisfaction rates, or verified average ranking timelines beyond what's stated in on-page copy are not present in the repo and are not assumed here.
- Whether "founder-led" will remain true as the business scales (i.e., whether Sumedha plans to hire) is not evidenced either way in the repo.
