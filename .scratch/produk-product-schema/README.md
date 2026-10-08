# Product catalog structured data

The reported optional warnings concern the four products on `/produk`.

## Implemented

**2026-10-08 update:** management withdrew all shipping and return terms. Akademi ASN has no shipping policy and accepts no returns. The policy page, `OfferShippingDetails`, and `MerchantReturnPolicy` were removed; the shipping and return notes below are historical. See `docs/business-facts.md`.

Each product has a unique description, sourced from `data/daftar-produk.ts` and rendered both in visible server HTML and Product JSON-LD. Schema image URLs are absolute and derive from `NEXT_PUBLIC_SITE_URL`. Existing names, prices, sales counts, and consultation links are preserved.

On 2026-10-06, the owner supplied management-approved product details, aggregate ratings, and delivery and return terms. All four Product nodes now include AggregateRating with separate rating and written-review counts. All four offers include MerchantReturnPolicy: digital returns are not permitted after access; physical returns have a three-day window for confirmed defects or wrong items, by mail, without return shipping fees. Policy descriptions preserve these conditions. No cash refund or exchange type is inferred for physical products because the supplied wording is ambiguous.

On 2026-10-08 the delivery and return terms moved to `data/kebijakan-pengiriman-dan-pengembalian.ts`, shared with the site-wide `/kebijakan-pengiriman-dan-pengembalian` page. Every offer's `merchantReturnLink` points to that page.

Later on 2026-10-08 the owner removed the "Pengiriman, akses & retur" details element from every card to shorten the cards. Delivery and return terms are now visible only on the policy page, which the footer links to; the Product JSON-LD is unchanged.

Aggregate figures appear in the initial HTML.

## Remaining business data

The supplied individual reviews have no publishable author names. Their text and dates are not converted into anonymous or invented authors in Review markup. Once names are supplied, publish matching visible reviews and schema. The management-approved aggregates can be published independently.

The owner confirmed worldwide digital delivery is free without a minimum purchase. The two digital products now include OfferShippingDetails for Indonesia: IDR 0, handling 0–1 day (allowing manual transfer activation), and zero transit days. The visible terms also explain worldwide access without a courier. No successful Google eligibility validation is claimed.

The owner subsequently approved a Rp40,000 maximum customer-paid charge throughout Indonesia for physical orders up to 1 kg, with Akademi ASN covering costs above that ceiling. Both physical offers now include OfferShippingDetails with shippingRate.maxValue 40000 IDR, handling 1–2 working days, and transit 2–7 working days, Monday–Friday. The 1 kg condition is preserved in both the schema description and visible terms; no exact book weight is invented. Google's documented shipping enhancement fields do not encode this weight condition directly, and Google may ignore the description. No Google validation or shipping enhancement eligibility is claimed.

The owner clarified that there is no checkout application. Visible ordering instructions therefore use the existing admin consultation links and do not claim an implemented checkout calculation. The approved subsidy of up to Rp20,000 for purchases of at least Rp200,000 remains separate from the new Rp40,000 ceiling. Orders above 1 kg require confirmation from the admin.

Google supports product rich results on pages focused on one product or variants of that product. This URL lists four distinct products. Completing optional fields alone does not establish eligibility. Dedicated product pages require a separate content and routing decision.

## Validation

The focused regression check is `bun test tests/produk-html.test.js`. It passes with 81 assertions, including the two physical shipping maxValue fields and absence of a fabricated fixed value, handling and transit ranges, working days, the matching visible 1 kg condition, separate subsidy text, and absence of checkout claims. Digital shipping fields, prices, ratings, and return policies remain covered. Lint and typecheck pass. No deployment or successful Google Rich Results Test is claimed.

## Sources

- [Google product snippet documentation](https://developers.google.com/search/docs/appearance/structured-data/product-snippet)
- [Google merchant listing documentation](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing)
- [Business facts](../../docs/business-facts.md)
