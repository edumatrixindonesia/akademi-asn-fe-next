# 4. Konsultasi links go through a redirect route

Date: 2026-10-14

## Status

Accepted

## Context

The Admin Konsultasi now rotates per Giliran Konsultasi (08.00, 13.00, 17.00 WIB) instead of per day. Before this change, pages embedded the WhatsApp URL of the current admin and used ISR with `revalidate = 86400`. Under that setup, a page only changes admin when it is regenerated, so a switch at a fixed hour cannot be exact, and two pages can show different admins at the same time. Issue 05 (`.scratch/jangkauan-lokasi/issues/05-daily-konsultasi-rotation.md`) accepted that drift for a daily rotation. It is not acceptable for three Giliran a day.

## Decision

- Every Konsultasi link points to the internal route `/konsultasi?topik=<topic>`. The route picks the Admin Konsultasi at click time and redirects to WhatsApp.
- Pages keep `revalidate = 86400` and render no client JS for Konsultasi.
- `robots.txt` disallows `/konsultasi`.
- The rotation is anchored to a fixed point: the 08.00 WIB Giliran on 2026-10-15 belongs to Asyah. From there, the order continues across days (Asyah, Nevita, Putri, Ista, ...).

## Considered options

- **Keep WhatsApp URLs in the HTML, set `revalidate = 14400`**: rejected. The switch would still be late by up to the revalidate period, pages would still disagree, and ~12,000 location pages would regenerate six times more often on the server that serves the site. Slower responses can lower Google's crawl rate.
- **Client component that swaps the `href`**: rejected. It adds client JS to every landing page, which works against Core Web Vitals.

## Consequences

- SEO is neutral: the old links pointed to `api.whatsapp.com` and passed no ranking value either. The `Disallow` keeps Googlebot from spending crawl budget on `/konsultasi` variants. Search Console will list them as "Blocked by robots.txt", which is expected.
- Do not lower `revalidate` to make the rotation faster. The redirect route already makes it exact.
- The Nomor Call Center is unchanged and still links straight to its own WhatsApp number.
