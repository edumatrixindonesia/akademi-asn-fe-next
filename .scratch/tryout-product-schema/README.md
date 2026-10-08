# Tryout page product structured data

The three products on the Tryout page (Tryout CPNS, E-Book Modul CPNS, Paket Hemat Komplit) render ratings, reviews, delivery terms, and return terms from `data/product-details.ts` through `components/shared/product-details.tsx`. The same values feed the Product JSON-LD, so visible content and schema stay identical.

## History

Until 2026-10-08 these products carried synthetic "Pengguna Simulasi" reviews with a visible simulation notice, requested by the owner as a temporary placeholder. On 2026-10-08 they were replaced with real customer reviews. Consent is on file; the source of each review is kept in `docs/private/ulasan-sumber.md` (gitignored). The synthetic fixture (`tests/fixtures/tryout-product-schema.js`) and its exported `sample.jsonld` were removed with it.

`aggregateRating` is computed from the reviews shown on the page, so `ratingCount` and `reviewCount` equal the number of visible reviews. It is not a full rating total.

Delivery and return summaries come from `digitalDelivery` and `digitalReturnPolicy` in `data/kebijakan-pengembalian.ts`. `merchantReturnLink` and the visible policy link both point to `/kebijakan-pengembalian`.

## Verification

```bash
bun test tests/product-details.test.js
bun test tests/tryout-html.test.js   # needs a running server
```

No successful Google Rich Results Test is claimed.

Sources:

- [Google structured data quality guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google merchant listing structured data](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing)
- [Google review and aggregate rating structured data](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
