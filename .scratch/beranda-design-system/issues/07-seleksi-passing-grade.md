# 07: Seleksi and Passing Grade

**Parent:** `.scratch/beranda-design-system/spec.md`

**What to build:** A visitor learns the Seleksi stages (SKD with TWK, TIU, and TKP) and the official Passing Grade values, readable by crawlers without JavaScript.

**Blocked by:** 01 (Brand foundation and live home route)

**Status:** ready-for-agent

- [ ] The 5 Seleksi images are downloaded from the reference site into a `seleksi` image folder with their original file names
- [ ] The Seleksi section shows SKD and the TWK, TIU, and TKP cards
- [ ] The Passing Grade section shows TWK 65, TIU 80, and TKP 166 as static text, plus the note about the quota of three times the number of formations
- [ ] Seleksi and Passing Grade are added to the glossary
- [ ] The seam 1 test asserts that 65, 80, and 166 appear in the HTML of `/`
- [ ] The section is placed in its correct position in the home page order from the spec
- [ ] Section copy lives in the section's data file and is checked with `satisfies`
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
