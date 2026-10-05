# 03: Record the PP 7/1977 correction date

**Parent:** `.scratch/consistency-audit/spec.md`

**What to build:** The published Artikel `perbedaan-cpns-dan-pppk` shows that it was updated on 2026-10-03, when commit `231b2a4` corrected the salary claim's legal source.

**Blocked by:** none

**Status:** done

**Category:** bug

- [x] `data/artikel.ts`: add `updatedAt: "2026-10-03"` to the entry. Keep `publishedAt: "2026-10-02"`.
- [x] The rendered page shows the update date. `BlogPosting.dateModified`, Open Graph `modified_time`, and the sitemap `lastModified` are all 2026-10-03.
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass.

## Comments

- 2026-10-05: Amendment. `d7f8df9` moved `updatedAt` to `2026-10-05` because it added the PP 17/2020 Referensi entry, which changed the Artikel. The owner approved keeping `2026-10-05` on 2026-10-05. The 2026-10-03 date in the acceptance wording is historical.
