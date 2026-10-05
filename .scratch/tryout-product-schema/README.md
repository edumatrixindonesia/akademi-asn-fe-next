# Synthetic product schema examples

`sample.jsonld` is a standalone JSON-LD example for the three products on the Tryout page. It is synthetic test data, not customer evidence or an approved business policy. Product names, descriptions, and fictional authors explicitly identify the exported sample; all product and image URLs in this file use the reserved `example.test` domain.

The fixture generator is `tests/fixtures/tryout-product-schema.js`. Existing product data supplies product names, prices, descriptions, and image paths. Neither the fixture nor this exported file is imported by the application. The shared synthetic details now live in `data/product-demo.ts`; the Tryout page uses them at the owner's explicit request, with a visible simulation notice for every product. Actual page images keep their real site URLs.

The page's three Product nodes include the sample aggregateRating and review fields. Their Offer nodes include sample shippingDetails and hasMerchantReturnPolicy. `components/shared/product-demo.tsx` renders the matching simulation notice, ratings, reviews, delivery terms, and return terms in the initial HTML. Removing the three `demoDetails` assignments from the product data removes this temporary markup and visible content together.

Passing structural validation does not establish compliance with Google's quality guidelines. Synthetic reviews remain synthetic even with a simulation notice. Google explicitly prohibits fake reviews in structured data; this temporary implementation should be replaced with authentic data before production SEO use. The local implementation has not been deployed.

## Sample assumptions

- Two fictional reviews per product, with ratings 4 and 5 on a 1–5 scale. The aggregate is computed as 4.5; reviewCount and ratingCount are both 2.
- Delivery destination: Indonesia (`ID`). Currency: Indonesian rupiah (`IDR`). Delivery fee: 0.
- Sample digital activation delay: 0–1 day. Sample transit delay: 0 days. These fields demonstrate the OfferShippingDetails structure; they do not establish that Google supports shipping enhancements for these digital products.
- Sample return policy: returns not permitted (`MerchantReturnNotPermitted`). This is not the actual Akademi ASN refund policy. No return window, return method, or fee is invented for a policy that prohibits returns.
- Review publication date: 2026-10-05. These reviews have never been published as real customer reviews.

## Verification and export

```bash
bun test tests/tryout-product-schema-fixture.test.js
bun -e 'import { sampleProductJsonLd } from "./tests/fixtures/tryout-product-schema"; await Bun.write(".scratch/tryout-product-schema/sample.jsonld", JSON.stringify(sampleProductJsonLd, null, 2) + "\n");'
```

The regression check verifies JSON serialization, all three product records, rating/count consistency, author and date fields, absolute reserved-domain URLs, shipping currency/destination/time fields, and return policy fields. It checks selected structural requirements; it is not Google's Rich Results Test. Reserved example URLs cannot serve actual crawlable product images.

After installation, seven focused tests, lint, typecheck, and desktop/mobile browser checks pass. The updated full page HTML was submitted to Google Rich Results Test in code mode. Google remained on "Testing code" across repeated checks and did not return a result. No successful Google validation is claimed. The local implementation has not been deployed.

When real data is available, provide product-specific review authors, review text, ratings, dates, full rating totals, digital delivery terms, and an approved refund policy. Publish matching visible content alongside its structured data. Search Console results remain unchanged until the implementation is deployed and Google recrawls it.

Sources:

- [Google structured data quality guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google merchant listing structured data](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing)
- [Google review and aggregate rating structured data](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
