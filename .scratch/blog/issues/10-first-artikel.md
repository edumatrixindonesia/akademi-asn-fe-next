# 10: First Artikel, "Perbedaan CPNS dan PPPK"

**Parent:** `.scratch/blog/spec.md`

**What to build:** The first published Artikel, produced through `/write-article` as the end-to-end test of the skill and every blog page.

**Blocked by:** 03, 07, 08, 09

**Status:** ready-for-human (Rich Results Test blocked by a Google sign-in error)

- [x] Written with `/write-article "perbedaan CPNS dan PPPK"`, Kategori Tips & Info
- [x] Gate 1 and Gate 2 approved by the owner; Penulis decided at Gate 2
- [x] References include UU 20/2023 tentang ASN and at least one BKN or KemenPANRB source; every claim validated per the guide
- [x] Production build: the Artikel appears on `/blog`, `/blog/kategori/tips-info`, its Penulis page, RSS, the sitemap, and Artikel Terbaru on the home page; the draft fixture does not
- [ ] Rich Results Test passes for `BlogPosting` and `BreadcrumbList`
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass

Code input from the production build was submitted on 2026-10-02. Google returned "Something went wrong — Log in and try again" before showing validation results. Local production checks confirm both JSON-LD types are present and the draft is excluded from the site, search, RSS, and sitemap. Re-run the Rich Results Test with a signed-in Google session or the public article URL before marking this issue and the spec done.
