# 06: Artikel search

**Parent:** `.scratch/blog/spec.md`

**What to build:** `/blog/cari?q=…`, a server-rendered results page behind the native search forms.

**Blocked by:** 04

**Status:** done

- [x] Case-insensitive match of `q` in title, excerpt, and focus keyword of published Artikel; results in the shared card grid
- [x] "Hasil pencarian: {q}" heading, "Tidak ada artikel yang cocok" when empty; an empty `q` shows the form only
- [x] `noindex, follow`; absent from the sitemap; no client JS; `q` is rendered as text only (no HTML injection)
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass (the 5 known unrelated failures excluded, see ticket 11)

## Comments

- 2026-10-05: Resolution. The five failures in the 2026-10-02 baseline are resolved. `bun test` against `bun dev` reported 63 pass, 0 fail. Fixing commits: `dfe312c`, `e36b9e4`, `b22553c`, `7228f69` (from `git log -- tests/`).
