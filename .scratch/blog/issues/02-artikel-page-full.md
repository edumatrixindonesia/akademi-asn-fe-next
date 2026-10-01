# 02: Full Artikel page and MDX components

**Parent:** `.scratch/blog/spec.md`

**What to build:** The Artikel page gains everything around the body that the reference site has (and the parts it lacks): Daftar isi, Referensi, the "Masih ada pertanyaan?" block, author box, share row, sticky sidebar, Artikel Terkait, and the approved MDX components.

**Blocked by:** 01

**Status:** done

- [x] Desktop: 8/12 Artikel column and sticky 4/12 sidebar; mobile: one column, sidebar after the Artikel (compare with `.scratch/blog/ref/`)
- [x] Daftar isi: native `<details>` with anchor links to every `h2`, only when there are 3 or more `h2`; headings have stable `id`s
- [x] Referensi list from `references`; "Masih ada pertanyaan?" block with a Konsultasi CTA; author box (avatar, name, job title, bio, link); share row with plain WhatsApp, Facebook, X, LinkedIn links
- [x] Sidebar: CTA Konsultasi card, `<form method="get" action="/blog/cari">`, Artikel Terbaru (5, excluding the current Artikel)
- [x] Artikel Terkait: 3 cards from `related`, then same Kategori, then other Kategori; hidden when there is no other Artikel
- [x] MDX components `BacaJuga`, `CtaKonsultasi`, `LatihanSoal` (answer in `<details>`), `Contoh` (keeps line breaks); `BacaJuga` fails the production build on an unknown or draft slug
- [x] Standard Markdown (headings, lists, tables, blockquotes, links) is styled in CSS, not inline styles
- [x] The draft fixture uses every component; the page ships no client JS of its own
- [x] HTML test on the fixture: Daftar isi anchors resolve to heading ids, Referensi present, Artikel Terkait absent when it is the only Artikel
- [x] At 390 px: no horizontal overflow, every image has `alt`
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass
