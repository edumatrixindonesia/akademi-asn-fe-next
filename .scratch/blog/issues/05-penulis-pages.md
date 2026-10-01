# 05: Penulis pages

**Parent:** `.scratch/blog/spec.md`

**What to build:** `/blog/penulis/tim-akademi-asn` and `/blog/penulis/dimas-maulana` with profile, Artikel list, and E-E-A-T structured data.

**Blocked by:** 04

**Status:** ready-for-agent

- [ ] Profile: avatar (`next/image`), name, job title (person), approved bio, `sameAs` links; then a 12-card grid with pagination, or "Belum ada artikel"; bio only on page 1, " – Halaman {n}" suffix from page 2
- [ ] JSON-LD: `ProfilePage` with `Person` (`name`, `jobTitle`, `image`, `sameAs`, `worksFor` Edumatrix Indonesia) for a person; the existing `#organization` for Tim Akademi ASN
- [ ] A Penulis with no published Artikel is `noindex, follow` and absent from the sitemap; with one or more it is indexable
- [ ] Author box and Artikel byline link to the Penulis page
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
