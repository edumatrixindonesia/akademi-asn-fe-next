# Business facts

Business numbers shown on the site. Code cannot verify that they stay true, so each one has an owner. Change a value in its source; copies derive from it where marked.

| Fact | Value | Appears in | Source | Approved | Owner |
| --- | --- | --- | --- | --- | --- |
| Alumni count | 15.000+ alumni | `data/jumbotron.ts` | Akademi ASN | 2026-10-05 | Dimas Maulana |
| Tryout questions | 500+ soal | `data/produk-unggulan.ts`, `data/faq.ts`, `app/tryout/page.tsx` | Akademi ASN | 2026-10-05 | Dimas Maulana |
| E-Book pages | 300+ halaman | `data/produk-unggulan.ts`, `data/faq.ts` | Akademi ASN | 2026-10-05 | Dimas Maulana |
| Sold: E-Modul Lolos CPNS & PPPK | 167 | `data/daftar-produk.ts` | Akademi ASN | 2026-10-05 | Dimas Maulana |
| Sold: Modul Lolos CPNS & PPPK | 50 | `data/daftar-produk.ts` | Akademi ASN | 2026-10-05 | Dimas Maulana |
| Sold: Paket Tryout SKD | 250 | `data/daftar-produk.ts` | Akademi ASN | 2026-10-05 | Dimas Maulana |
| Sold: Buku Fisik BUMN Lengkap | 10 | `data/daftar-produk.ts` | Akademi ASN | 2026-10-05 | Dimas Maulana |
| Paket Optima | Rp1.960.000, 8 sesi | `paketPrivat` in `data/paket-program.ts`; FAQ derives from it | Akademi ASN | 2026-10-05 | Dimas Maulana |
| Paket Maxima | Rp2.793.000, 12 sesi | `paketPrivat` in `data/paket-program.ts`; FAQ derives from it | Akademi ASN | 2026-10-05 | Dimas Maulana |
| Paket Ultima | Rp5.292.000, 24 sesi | `paketPrivat` in `data/paket-program.ts`; FAQ derives from it | Akademi ASN | 2026-10-05 | Dimas Maulana |

Other single sources: office address and opening hours in `data/contact.ts` (`officeAddress`, `officeHours`), selection year in `data/tahun-seleksi.ts`.

## Product catalog approval: 2026-10-06

Akademi ASN management supplied and approved the following figures for publication through the site owner. The internal review database was not accessed by the agent. These aggregates are independent of the sales counts above; do not derive one from the other. Source: `data/daftar-produk.ts`.

| Product | Average rating (1–5) | Rating count | Written review count | Format and access |
| --- | --- | --- | --- | --- |
| E-Modul Lolos CPNS & PPPK | 4.8 | 120 | 45 | PDF, approximately 250 pages, lifetime access |
| Modul Lolos CPNS & PPPK | 4.9 | 85 | 30 | Printed book, approximately 400 pages |
| Paket Tryout SKD | 4.8 | 250 | 110 | Five CAT practice packages, one year from activation |
| Buku Fisik BUMN Lengkap | 4.9 | 60 | 25 | Printed book, approximately 350 pages |

Individual review author names for these four catalog products are not yet available, so no individual Review schema is published for them. The example support phone number in the supplied text is not added as an official support number; existing consultation links remain the contact route.

## Tryout page reviews: 2026-10-08

The three products on the Tryout page (Tryout CPNS, E-Book Modul CPNS, Paket Hemat Komplit) publish real customer reviews with initials as author names. Consent is on file; sources are kept in `docs/private/ulasan-sumber.md` (gitignored). Source: `data/product-details.ts`. These products are separate from the four catalog products above, whose individual reviews remain unpublished. The Tryout page `aggregateRating` is computed from the visible reviews, because no full rating totals exist for those three products.

## Shipping and returns withdrawn: 2026-10-08

After discussion with management, the owner withdrew the shipping and return terms approved earlier (2026-10-06 and 2026-10-08). Akademi ASN currently has no shipping policy and does not accept returns. The `/kebijakan-pengiriman-dan-pengembalian` page, its footer link and sitemap entry, and every delivery and return term were removed. Product JSON-LD publishes no `shippingDetails` or offer-level `hasMerchantReturnPolicy`; tests assert their absence. The no-returns fact is published once, as an organization-level `MerchantReturnNotPermitted` policy in `organizationJsonLd` (`app/shared-metadata.ts`). Do not add shipping terms until management approves a shipping policy.

The support email `edumatrix.id@gmail.com` (`supportEmail` in `data/contact.ts`) stays approved but is not shown on any page.
