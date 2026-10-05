# 08: Artikel Terbaru on landing pages

**Parent:** `.scratch/blog/spec.md`

**What to build:** Every landing page links into the Blog through an Artikel Terbaru section directly before FAQ.

**Blocked by:** 04

**Status:** done

- [x] New section following the `data/` pattern in `AGENTS.md`; reuses the Artikel card; "Lihat Semua" links to the Kategori page (or `/blog` on home)
- [x] Home and home-location pages: 3 newest of any Kategori; each exam-track page and its location pages: 3 newest of that Kategori
- [x] Hidden when there is no published Artikel for that page; never shows drafts in production
- [x] Section `h2`, no extra `h1`; location pages keep their ISR behaviour and existing tests pass
- [x] HTML test: the section appears before FAQ when a matching published Artikel exists
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass (the 5 known unrelated failures excluded, see ticket 11)

## Comments

- 2026-10-05: Amendment. Artikel Terbaru now appears after FAQ, moved in `650b77d`; the original acceptance wording remains as historical record.
- 2026-10-05: Resolution. The five failures in the 2026-10-02 baseline are resolved. `bun test` against `bun dev` reported 63 pass, 0 fail. Fixing commits: `dfe312c`, `e36b9e4`, `b22553c`, `7228f69` (from `git log -- tests/`).
