# 09: Lembaga and Media Massa

**Parent:** `.scratch/beranda-design-system/spec.md`

**What to build:** A visitor sees the logos of the institutions alumni joined, moving slowly across the screen, and the media outlets that covered Akademi ASN.

**Blocked by:** 01 (Brand foundation and live home route)

**Status:** done

- [x] The 12 Lembaga logos and 7 Media Massa logos are downloaded from the reference site into `lembaga` and `media-massa` image folders with their original file names
- [x] The Lembaga section is a CSS-only marquee (`@keyframes`, no JavaScript) that stops under `prefers-reduced-motion`
- [x] The Media Massa section shows the logos in a grid
- [x] Every logo has descriptive `alt` text; duplicated marquee copies are hidden from assistive technology
- [x] Lembaga and Media Massa are added to the glossary
- [x] The section is placed in its correct position in the home page order from the spec
- [x] Section copy lives in the section's data file and is checked with `satisfies`
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass
