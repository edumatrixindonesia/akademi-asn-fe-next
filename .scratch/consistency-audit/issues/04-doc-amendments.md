# 04: Amend outdated docs and issue records

**Parent:** `.scratch/consistency-audit/spec.md`

**What to build:** Current docs agree with the current code. Old issue records keep their history and gain a dated amendment instead of being rewritten.

**Blocked by:** none

**Status:** ready-for-agent

**Category:** documentation

- [ ] `.scratch/blog/issues/08-artikel-terbaru-on-landing-pages.md`: append a dated 2026-10-05 comment saying that Artikel Terbaru moved after FAQ in commit `650b77d`. Leave the original acceptance wording. (`CONTEXT.md` is already fixed.)
- [ ] Blog issues 01, 04, 06, 08, and 11: append a dated resolution saying the five failures from the 2026-10-02 baseline are resolved. Include the command (`bun test` against `bun dev`), the result (63 pass, 0 fail on 2026-10-05), and the fixing commits (find them with `git log -- tests/`). Do not edit the old baseline text.
- [ ] `README.md` (around lines 46–49): state that `app/page.tsx`, `/bimbel-cpns`, `/bimbel-pppk`, `/bimbel-bumn`, every location page, and the sitemap need region-service. Tryout, Produk, and Blog pages do not call it. A warm cache can hide an outage, so a page that loads is not proof it does not depend on the service.
- [ ] `README.md` (around line 75): the limit is 32 requests per 60 seconds, set on local and production on 2026-10-05. Keep the pointer to the `rate_limit` field. `lib/region-service.ts:11` and `.scratch/jangkauan-lokasi/` already say 32; leave them.
- [ ] `.scratch/beranda-design-system/spec.md` and its issues 01 and 02: add a supersession note at the top that links `.scratch/jangkauan-lokasi/issues/05-daily-konsultasi-rotation.md`. State the current behaviour: rotation is daily, `revalidate = 86400`, the signature is `getKonsultasiUrl(topic?, now?)`, and the day changes at 00:00 UTC (07:00 WIB). Daily ISR means pages may switch admin at different times; issue 05 accepted that.
- [ ] Add the 00:00 UTC (07:00 WIB) boundary as a one-line comment next to the rotation formula in `data/contact.ts`.

## Comments
