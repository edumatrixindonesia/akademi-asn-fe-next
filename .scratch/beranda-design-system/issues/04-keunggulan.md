# 04: Keunggulan with FeatureCard

**Parent:** `.scratch/beranda-design-system/spec.md`

**What to build:** A visitor sees the five Keunggulan of Akademi ASN, each as a card with a small animated illustration, a title, and a short description.

**Blocked by:** 01 (Brand foundation and live home route)

**Status:** ready-for-agent

- [ ] The 5 Keunggulan GIFs are converted to animated WebP with the installed `sharp` (`animated: true`) through a one-off script outside the repo; the GIFs are deleted; before and after sizes are reported
- [ ] A reusable FeatureCard shows an illustration, a title (`h3`), and a description
- [ ] The Keunggulan section shows the five items with drafted 1–2 sentence descriptions for the owner to review
- [ ] The animation plays in the browser (use `unoptimized` if the image optimizer flattens it) and images load lazily
- [ ] The seam 1 test asserts that `/` references no `.gif`
- [ ] The section is placed in its correct position in the home page order from the spec
- [ ] Section copy lives in the section's data file and is checked with `satisfies`
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
