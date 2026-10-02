# 06: Artikel search

**Parent:** `.scratch/blog/spec.md`

**What to build:** `/blog/cari?q=…`, a server-rendered results page behind the native search forms.

**Blocked by:** 04

**Status:** done

- [x] Case-insensitive match of `q` in title, excerpt, and focus keyword of published Artikel; results in the shared card grid
- [x] "Hasil pencarian: {q}" heading, "Tidak ada artikel yang cocok" when empty; an empty `q` shows the form only
- [x] `noindex, follow`; absent from the sitemap; no client JS; `q` is rendered as text only (no HTML injection)
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass (the 5 known unrelated failures excluded, see ticket 11)
