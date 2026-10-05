# 10: First Artikel, "Perbedaan CPNS dan PPPK"

**Parent:** `.scratch/blog/spec.md`

**What to build:** The first published Artikel, produced through `/write-article` as the end-to-end test of the skill and every blog page.

**Blocked by:** 03, 07, 08, 09

**Status:** done

- [x] Written with `/write-article "perbedaan CPNS dan PPPK"`, Kategori Tips & Info
- [x] Gate 1 and Gate 2 approved by the owner; Penulis decided at Gate 2
- [x] References include UU 20/2023 tentang ASN and at least one BKN or KemenPANRB source; every claim validated per the guide
- [x] Production build: the Artikel appears on `/blog`, `/blog/kategori/tips-info`, its Penulis page, RSS, the sitemap, and Artikel Terbaru on the home page; the draft fixture does not
- [x] Rich Results Test passes for `BlogPosting` and `BreadcrumbList`
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass

Code input from the production build was submitted on 2026-10-02. Google returned "Something went wrong — Log in and try again" before showing validation results. Local production checks confirm both JSON-LD types are present and the draft is excluded from the site, search, RSS, and sitemap. Re-run the Rich Results Test with a signed-in Google session or the public article URL before marking this issue and the spec done.

## Result (2026-10-05)

Google's Rich Results Test ran against the public `https://www.akademi-asn.com/blog/perbedaan-cpns-dan-pppk` on smartphone (`id=msKNEtYNxM9mhvIvIvndcw`) and desktop (`id=MBk3Nm-T_wNXcdf_su7TOA`), crawled 2026-10-05. Both: 4 valid items (Articles, Breadcrumbs, Local businesses, Organization), no errors, indexing allowed.

Non-critical (optional) warnings, not blocking:

- Articles: `datePublished` and `dateModified` flagged as invalid datetime and missing a timezone. The values are date-only (`2026-10-02`, `2026-10-03`). Fix by emitting ISO 8601 with offset (for example `2026-10-03T00:00:00+07:00`).
- Local businesses: `priceRange` missing.

## Comments

- 2026-10-05: Amendment. `d7f8df9` moved `updatedAt` to `2026-10-05` because it added the PP 17/2020 Referensi entry, which changed the Artikel. The owner approved keeping `2026-10-05` on 2026-10-05. The 2026-10-03 date in the acceptance wording is historical. The Rich Results Test above ran against the deployed `2026-10-03` value; the next deploy emits `2026-10-05`.
