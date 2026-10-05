# 02: Seleksi per exam track

**Parent:** `.scratch/consistency-audit/spec.md`

**What to build:** A Seleksi heading never presents SKD/SKB as the PPPK selection flow. Pages that cover all three exam tracks show all three Seleksi sections.

**Blocked by:** none

**Status:** ready-for-agent

**Category:** bug

- [ ] Rename `seleksiHome` to `seleksiCpns` in `data/seleksi.ts`. Its title names CPNS only (for example "Pahami Tahapan Seleksi & Sistem Penilaian Resmi CPNS").
- [ ] `components/pages/bimbel-cpns.tsx` and `bimbel-cpns-location.tsx` render `seleksiCpns` alone.
- [ ] `components/pages/home.tsx`, `home-location.tsx`, and `tryout.tsx` render three Seleksi sections in this order: `seleksiCpns`, `seleksiPppk`, `seleksiBumn`.
- [ ] `components/sections/seleksi.tsx` hardcodes `id="seleksi-title"` (line 17). Give each instance a unique heading `id` and matching `aria-labelledby`, so stacked sections produce valid HTML.
- [ ] Each page still has exactly one `h1`; the Seleksi headings stay `h2`.
- [ ] Update HTML tests that expect the old title or a single Seleksi section.
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass.

## Comments
