# 06: Paket Program with PaketCard

**Parent:** `.scratch/beranda-design-system/spec.md`

**What to build:** A visitor who clicks "Paket" in the navbar scrolls to the Paket Program section and can compare all packages, each with an "ask about this class" button that opens Konsultasi.

**Blocked by:** 02 (Konsultasi rotation across four CS admins)

**Status:** ready-for-agent

- [ ] A reusable PaketCard shows name, number of sessions, price, optional crossed-out price, the list of included items, and a Konsultasi CTA
- [ ] The section groups Optima, Maxima, and Ultima under the offline classes, and the Bootcamp and Tryout packages under online and tryout, with prices from the spec
- [ ] The section has `id="paket-program"` and the BKN building background
- [ ] The seam 1 test asserts that `/` contains `id="paket-program"`
- [ ] The section is placed in its correct position in the home page order from the spec
- [ ] Section copy lives in the section's data file and is checked with `satisfies`
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
