# 05: Reachable BacaJuga rule and complete Referensi

**Parent:** `.scratch/consistency-audit/spec.md`

**What to build:** The writing guide has a BacaJuga rule the first Artikel can meet, and every regulation the published Artikel names is reachable from its Referensi.

**Blocked by:** none

**Status:** done

**Category:** documentation

- [x] `docs/agents/article-writing.md` (line 24 and line 63): the rule becomes "Link 2–5 other published Artikel with `<BacaJuga>`. When fewer than 2 exist, link all of them (0 is allowed)." Links to landing pages stay ordinary Markdown links. The `<BacaJuga>` component still accepts only an Artikel slug.
- [x] `.scratch/blog/spec.md`: replace the wording that says BacaJuga accepts landing pages, or add a dated amendment that matches the component.
- [x] Update `.claude/skills/write-article` (or wherever `/write-article` lives) if it repeats the old rule.
- [x] `data/artikel.ts`: add a Referensi entry for PP 17/2020 that points to its official page on JDIH or peraturan.go.id. Confirm the URL resolves.
- [x] Read `data/artikel/perbedaan-cpns-dan-pppk.mdx` claim by claim. List any claim without a matching Referensi entry in a comment on this issue, and add the missing sources. Do not change the legal statements themselves without the owner.
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass.

## Comments

2026-10-05: Audited every factual claim in `perbedaan-cpns-dan-pppk.mdx`. The only unmatched source was the stated PP 17/2020 amendment; it is now listed. All other claims map to the existing UU 20/2023, PP 11/2017, PP 49/2018, PP 7/1977, BKN, RRI, or Pantau references. The official `peraturan.go.id` PP 17/2020 page resolves.
