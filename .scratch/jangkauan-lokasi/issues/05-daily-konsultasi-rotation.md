# 05: Rotate Konsultasi contacts daily

**Parent:** `.scratch/jangkauan-lokasi/spec.md`

**What to build:** The Konsultasi WhatsApp admin rotates once per day instead of once per hour, across the whole site. The root layout's `revalidate` sets how often every page, including ISR location pages, is regenerated. An hourly period means up to 24 times more regeneration of ~12,000 location pages on the same server that runs the site.

Rotation is not synchronized across pages under ISR: each page shows the admin from its last render, so two pages can show different admins at the same time. This is accepted.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [ ] `getKonsultasiUrl` in `data/contact.ts` picks the admin by day (`Math.floor(now / 86_400_000) % 4`) instead of by hour
- [ ] `app/layout.tsx` exports `revalidate = 86400` instead of `3600`
- [ ] No page or route sets a lower `revalidate` that would override the daily period
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
