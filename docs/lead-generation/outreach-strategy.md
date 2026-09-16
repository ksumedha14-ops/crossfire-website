# Lead Generation & Outreach

## What's actually implemented (inbound capture only)

This repo contains evidence of an **inbound-only** lead generation system. There is no outbound outreach tooling, sequences, or CRM integration anywhere in the codebase.

### Lead capture mechanisms

1. **Free audit funnel** (`audit.html`) — the primary lead magnet. Free, no-credit-card, no-obligation 15-minute audit with written findings delivered within 24 hours. Two separate forms on the page (`auditForm`, hero; `bookForm`, further down) both submit to the same handler.
2. **Contact form** (`contact.html`, `contactForm`) — general inquiry capture.
3. **Click-to-call** — a phone link (`tel:+919315515312`) injected into the nav on every page via `js/site.js`, tracked as a `phone_click` GA4 event.
4. **WhatsApp floating button** — injected sitewide via `js/site.js`, deep-links to `wa.me/919315515312` with a pre-filled message, tracked as a `whatsapp_click` GA4 event.

### Form infrastructure

All forms submit client-side to **Web3Forms** (a third-party form-relay service; access key hardcoded in `js/site.js`) rather than a custom backend — consistent with this being a static site with no server. Shared conventions: `novalidate` + custom JS validation, a hidden `botcheck` honeypot field for spam mitigation, dynamic subject lines (business name + city if provided), and reply-to set to the submitter's email or phone.

### Tracking

GA4 events are fired for: form submissions (per form ID, mapped to human-readable names), audit CTA clicks, phone clicks, WhatsApp clicks, and outbound/mailto link clicks. This gives funnel visibility (CTA click → form submit) but the repo contains no analytics *data*, only the instrumentation.

## Qualification-as-outreach

Rather than a traditional outbound sales sequence, the site uses **explicit self-qualification content** as its filtering mechanism — see [[../business/ideal-clients.md|ideal-clients]]. The yes/no criteria published on `index.html` and `contact.html`, combined with the free-audit-as-qualifier framing ("Not sure which side you're on? The free audit will make it clear"), suggests the sales model is: *drive inbound via SEO → self-qualify via published criteria → audit call as the actual qualification/sales conversation*. This is a content-led, not outreach-led, lead gen strategy as currently built.

## What is NOT in this repo

- No cold email, cold call, or LinkedIn outreach tooling or scripts
- No CRM (no Close, HubSpot, or similar integration wired into the site)
- No paid ad landing pages distinct from organic pages (the Meta & Google Ads *service* is sold to clients, but there's no evidence Crossfire runs paid acquisition for itself)
- No referral or affiliate program content

## Assumptions

- Outbound/sales-development activity may exist entirely outside this repository (e.g., manual LinkedIn outreach, a separate CRM, phone-based cold outreach) — its absence here is not evidence it doesn't happen, only that it isn't represented in the website codebase.
- The Web3Forms free-tier limit (250 submissions/month, per the code comment in `js/site.js`) implies current lead volume assumptions but actual submission volume is not known from this repo.
- If a CRM or outreach system is adopted later, this file should be updated to reflect the real toolchain rather than left describing only the inbound-capture mechanics.
