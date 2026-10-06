# Product catalog structured data

The reported optional warnings concern the four products on `/produk-bimbel-cpns-pppk-bumn-terbaik`.

## Implemented

Each product has a unique description, sourced from `data/daftar-produk.ts` and rendered both in visible server HTML and Product JSON-LD. Schema image URLs are absolute and derive from `NEXT_PUBLIC_SITE_URL`. Existing names, prices, sales counts, and consultation links are preserved.

On 2026-10-06, the owner supplied management-approved product details, aggregate ratings, and delivery and return terms. All four Product nodes now include AggregateRating with separate rating and written-review counts. All four offers include MerchantReturnPolicy: digital returns are not permitted after access; physical returns have a three-day window for confirmed defects or wrong items, by mail, without return shipping fees. Policy descriptions preserve these conditions. No cash refund or exchange type is inferred for physical products because the supplied wording is ambiguous.

Aggregate figures and matching policy descriptions appear in the initial HTML. Native details elements keep delivery and return terms accessible without client JavaScript.

## Remaining business data

The supplied individual reviews have no publishable author names. Their text and dates are not converted into anonymous or invented authors in Review markup. Once names are supplied, publish matching visible reviews and schema. The management-approved aggregates can be published independently.

The owner confirmed worldwide digital delivery is free without a minimum purchase. The two digital products now include OfferShippingDetails for Indonesia: IDR 0, handling 0–1 day (allowing manual transfer activation), and zero transit days. The visible terms also explain worldwide access without a courier. No successful Google eligibility validation is claimed.

Physical shipping rates are calculated dynamically by the courier API with no guaranteed maximum. Google requires a numeric shippingRate value or maximum for its shipping enhancement. Physical products therefore omit OfferShippingDetails rather than advertise an invented rate. Visible terms include JNE REG, J&T Reguler, and SiCepat REG, kilogram rounding, 1–2 working days of handling, and 2–7 working days of transit. The approved active subsidy of up to Rp20,000 for purchases of at least Rp200,000 is shown as a subsidy; the buyer pays the excess. It is not a maximum shipping rate or unconditional free shipping. `data/product-demo.ts` is not used.

Google supports product rich results on pages focused on one product or variants of that product. This URL lists four distinct products. Completing optional fields alone does not establish eligibility. Dedicated product pages require a separate content and routing decision.

## Validation

The focused regression check is `bun test tests/produk-html.test.js`. It checks four distinct Product nodes, visible descriptions and aggregate figures, absolute image URLs, preserved prices and sales counts, one h1, physical and digital return policy distinctions, approved free digital delivery fields, dynamic physical shipping and subsidy text, and absence of reviews without authors or physical rates without evidence. No deployment or successful Google Rich Results Test is claimed.

## Sources

- [Google product snippet documentation](https://developers.google.com/search/docs/appearance/structured-data/product-snippet)
- [Google merchant listing documentation](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing)
- [Business facts](../../docs/business-facts.md)
