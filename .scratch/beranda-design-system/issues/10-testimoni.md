# 10: Testimoni

**Parent:** `.scratch/beranda-design-system/spec.md`

**What to build:** A visitor who clicks "Testimoni" in the navbar scrolls to the Testimoni section and sees the two student testimonial screenshots.

**Blocked by:** 01 (Brand foundation and live home route)

**Status:** ready-for-agent

- [ ] The section shows the two existing screenshots with descriptive `alt` text, loaded lazily
- [ ] The section has `id="testimoni"` and scrolls clear of the sticky navbar
- [ ] The seam 1 test asserts that `/` contains `id="testimoni"`
- [ ] The section is placed in its correct position in the home page order from the spec
- [ ] Section copy lives in the section's data file and is checked with `satisfies`
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
