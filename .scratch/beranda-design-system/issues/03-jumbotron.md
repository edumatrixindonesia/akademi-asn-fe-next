# 03: Jumbotron

**Parent:** `.scratch/beranda-design-system/spec.md`

**What to build:** A visitor lands on a hero that says "Bimbel CPNS, PPPK, & BUMN", explains the offer, and has a "Daftarkan Sekarang" button that opens Konsultasi.

**Blocked by:** 02 (Konsultasi rotation across four CS admins)

**Status:** ready-for-agent

- [ ] The Jumbotron renders the page's only `h1`, a description, and a Konsultasi CTA using the `cta` token
- [ ] The background is a gradient from `primary-dark` to `primary` with the BKN building image as a decorative overlay (`fill`, empty `alt`, not prioritized)
- [ ] The hero image is rendered with `next/image` and `priority` as the LCP element, with descriptive `alt`
- [ ] The data entry is a function of the Konsultasi URL
- [ ] The seam 1 test asserts exactly one `h1` on `/`
- [ ] The section is placed in its correct position in the home page order from the spec
- [ ] Section copy lives in the section's data file and is checked with `satisfies`
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
