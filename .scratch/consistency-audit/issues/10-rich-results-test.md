# 10: Run the Rich Results Test and close the Blog

**Parent:** `.scratch/consistency-audit/spec.md`

**What to build:** The external acceptance check from Blog issue 10 is recorded, so the Blog effort can close.

**Blocked by:** 03

**Status:** done

**Category:** verification

- [x] After issue 03 is deployed, run Google's Rich Results Test against the public `/blog/perbedaan-cpns-dan-pppk`.
- [x] Confirm `BlogPosting` (with `dateModified` 2026-10-03) and `BreadcrumbList` are detected without errors.
- [x] Record the result and date in `.scratch/blog/issues/10-first-artikel.md`, then set it and `.scratch/blog/spec.md` to `done`.

## Comments

Run 2026-10-05, smartphone and desktop. BlogPosting (Articles) and BreadcrumbList valid, no errors. Optional warnings: date-only `datePublished`/`dateModified` lack a timezone; `priceRange` missing. Details in `.scratch/blog/issues/10-first-artikel.md`.

- 2026-10-05: Amendment. `d7f8df9` moved `updatedAt` to `2026-10-05` because it added the PP 17/2020 Referensi entry, which changed the Artikel. The owner approved keeping `2026-10-05` on 2026-10-05. The 2026-10-03 date in the acceptance wording is historical. The Rich Results Test above ran against the deployed `2026-10-03` value; the next deploy emits `2026-10-05`.
