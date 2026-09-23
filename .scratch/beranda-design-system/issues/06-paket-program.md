# 06: Paket Program with PaketCard

**Parent:** `.scratch/beranda-design-system/spec.md`

**What to build:** A visitor who clicks "Paket" in the navbar scrolls to the Paket Program section and can compare all packages, each with an "ask about this class" button that opens Konsultasi.

**Blocked by:** 02 (Konsultasi rotation across four CS admins)

**Status:** done

- [x] A reusable PaketCard shows name, number of sessions, price, optional crossed-out price, the list of included items, and a Konsultasi CTA
- [x] The section groups Optima, Maxima, and Ultima under the offline classes, and the Bootcamp and Tryout packages under online and tryout, with prices from the spec
- [x] The section has `id="paket-program"` and the BKN building background
- [x] The seam 1 test asserts that `/` contains `id="paket-program"`
- [x] The section is placed in its correct position in the home page order from the spec
- [x] Section copy lives in the section's data file and is checked with `satisfies`
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass
