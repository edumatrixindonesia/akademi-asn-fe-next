# 8. Link Bio renders outside the site layout

Date: 2026-11-17

## Status

Accepted.

## Context

Link Bio (`/links`) is the page in the Akademi ASN Instagram bio. Like the Edumatrix Indonesia link page (`links.edumatrix-indonesia.com`), it must stand alone: a header with the logo and socials, then cards. The site Navbar and Footer would repeat the same links above and below those cards.

Before this change, `app/layout.tsx` rendered the Navbar and Footer around every page, and a nested layout cannot remove what a parent layout renders.

## Decision

- Every route except Link Bio moves into the route group `app/(site)/`. Its `layout.tsx` renders the Navbar and Footer. URLs do not change.
- `app/layout.tsx` stays the single root layout: `html`, `body`, the font, the Organization JSON-LD, and Google Analytics. Link Bio lives at `app/links/` outside the group, so it gets only these.
- `app/not-found.tsx` stays at the root and renders no Navbar or Footer. Next.js uses the root not-found as the not-found boundary inside `app/(site)/layout.tsx` too, so a 404 under `(site)` (including every unmatched URL, which the `[...locations]` catch-all takes) shows the Navbar and Footer from that layout. If the root not-found rendered them too, those 404 pages would show them twice.
- `/konsultasi`, `robots.ts`, `sitemap.ts`, and the icons stay at the root. They render no layout.
- Link Bio is `noindex, follow` and is not in the sitemap. It has no copy of its own to rank, and `follow` keeps passing links to the landing pages and the Blog.

## Considered options

- **Keep the Navbar and Footer on Link Bio**: rejected. The page would no longer look like a link-in-bio page, and the menu repeats its links.
- **A separate app on a `links.` subdomain**, like Edumatrix: rejected. It needs its own repo and deploy, and it could not reuse the contact data, logo, and Artikel list in this repo.
- **Multiple root layouts** (no `app/layout.tsx`): rejected. Unmatched URLs would then need the experimental `global-not-found.js`, and moving between groups reloads the full page.

## Consequences

- New site routes go under `app/(site)/`. A route created directly under `app/` renders without the Navbar and Footer.
- Only `/links` itself is outside the group. Any deeper path such as `/links/foo` falls to the `(site)` catch-all, so it 404s with the Navbar and Footer like any other unknown URL.
