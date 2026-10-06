# Product catalog structured data

The reported optional warnings concern the four products on `/produk-bimbel-cpns-pppk-bumn-terbaik`.

## Implemented

Each product has a unique description, sourced from `data/daftar-produk.ts` and rendered both in visible server HTML and Product JSON-LD. Schema image URLs are absolute and derive from `NEXT_PUBLIC_SITE_URL`. Existing names, prices, sales counts, and consultation links are preserved.

On 2026-10-06, the owner supplied management-approved product details, aggregate ratings, and delivery and return terms. All four Product nodes now include AggregateRating with separate rating and written-review counts. All four offers include MerchantReturnPolicy: digital returns are not permitted after access; physical returns have a three-day window for confirmed defects or wrong items, by mail, without return shipping fees. Policy descriptions preserve these conditions. No cash refund or exchange type is inferred for physical products because the supplied wording is ambiguous.

Aggregate figures and matching policy descriptions appear in the initial HTML. Native details elements keep delivery and return terms accessible without client JavaScript.

## Remaining business data

The supplied individual reviews have no publishable author names. Their text and dates are not converted into anonymous or invented authors in Review markup. Once names are supplied, publish matching visible reviews and schema. The management-approved aggregates can be published independently.

Shipping terms are visible, but physical shipping rates are dynamic with no numeric rate or maximum supplied. Google requires a numeric shippingRate value or maximum for its shipping enhancement. No zero-cost rate is invented and no incomplete OfferShippingDetails node is emitted. Digital activation is displayed as access delivery rather than represented as physical shipping. The conditional free-shipping voucher is not treated as an active unconditional offer. `data/product-demo.ts` is not used.

Google supports product rich results on pages focused on one product or variants of that product. This URL lists four distinct products. Completing optional fields alone does not establish eligibility. Dedicated product pages require a separate content and routing decision.

## Validation

`bun test tests/produk-html.test.js` passes with 70 assertions, checking four distinct Product nodes, visible descriptions and aggregate figures, absolute image URLs, preserved prices and sales counts, one h1, physical and digital return policy distinctions, conditional shipping text, and absence of reviews without authors or shipping rates without evidence. `bun run lint` and `bun run typecheck` pass. BrowserAct confirms four matching rating summaries and policy descriptions, one h1, and no Next.js error overlay. No deployment or successful Google Rich Results Test is claimed.

## Sources

- [Google product snippet documentation](https://developers.google.com/search/docs/appearance/structured-data/product-snippet)
- [Google merchant listing documentation](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing)
- [Business facts](../../docs/business-facts.md)
