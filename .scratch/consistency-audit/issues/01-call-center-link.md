# 01: Call Center link reaches the published number

**Parent:** `.scratch/consistency-audit/spec.md`

**What to build:** The displayed Nomor Call Center links to that number on WhatsApp on every day, not to the rotating Admin Konsultasi.

**Blocked by:** none

**Status:** ready-for-agent

**Category:** bug

- [ ] `data/footer.ts` (around lines 29–32): the Call Center `href` is `https://wa.me/6281215523902`, derived from `callCenterPhone.e164` in `data/contact.ts`, not `konsultasiUrl`.
- [ ] The `ariaLabel` names the same number the link opens.
- [ ] Every other place that shows `callCenterPhone.display` as a link follows the same rule (check JSON-LD and any other component).
- [ ] Konsultasi CTAs still use the rotating `konsultasiUrl`.
- [ ] A test asserts that the rendered Call Center link points at the displayed number, including on a day assigned to another admin (pass `now` to `getKonsultasiUrl` or mock the date).
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass.

## Comments
