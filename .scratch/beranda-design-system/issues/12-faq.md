# 12: FAQ with FAQPage structured data

**Parent:** `.scratch/beranda-design-system/spec.md`

**What to build:** A visitor can expand answers to frequently asked questions without JavaScript, and Google can read the same questions and answers as FAQPage structured data.

**Blocked by:** 01 (Brand foundation and live home route)

**Status:** ready-for-agent

- [ ] The FAQ uses native `<details>` / `<summary>`; every answer is in the initial HTML and is keyboard-accessible
- [ ] Copy follows the reference wording, including "Akademi ASN by Edumatrix"
- [ ] A FAQPage JSON-LD script is generated from the same FAQ data
- [ ] The seam 1 test asserts that the FAQPage JSON-LD exists and that its questions also appear as visible text
- [ ] The section is placed in its correct position in the home page order from the spec
- [ ] Section copy lives in the section's data file and is checked with `satisfies`
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
