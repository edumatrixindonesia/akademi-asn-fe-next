# Business facts

Business numbers shown on the site. Code cannot verify that they stay true, so each one has an owner. Change a value in its source; copies derive from it where marked.

| Fact | Value | Appears in | Source | Approved | Owner |
| --- | --- | --- | --- | --- | --- |
| Alumni count | 15.000+ alumni | `data/jumbotron.ts` | Akademi ASN | 2026-10-05 | Dimas Maulana |
| Tryout questions | 500+ soal | `data/produk-unggulan.ts`, `data/faq.ts`, `app/tryout-bimbel-cpns-pppk-bumn-terbaik/page.tsx` | Akademi ASN | 2026-10-05 | Dimas Maulana |
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

Delivery and return terms approved by management are stored alongside the catalog data and rendered in the server HTML. Digital access is worldwide, with zero delivery and activation fees and no minimum purchase. Activation is automatic after payment verification, or within 24 hours for manual transfers, with no courier transit time. OfferShippingDetails represents these digital delivery terms for the Indonesian destination; worldwide access remains visible in the delivery description.

The owner subsequently approved a maximum customer-paid shipping charge of Rp40,000 throughout Indonesia for physical orders up to 1 kg (approximately 1–2 books), with no regional exceptions. Akademi ASN covers courier costs above that ceiling. The owner clarified that there is no checkout application; orders and shipping confirmation use the existing admin consultation links. The ceiling is a business policy, not a checkout calculation implemented in this repository. Orders above 1 kg need a separate shipping quote from the admin.

Physical shipping uses JNE REG, J&T Reguler, or SiCepat REG. Handling takes 1–2 working days and transit 2–7 working days, excluding weekends and national holidays. The existing subsidy of up to Rp20,000 on purchases of at least Rp200,000 remains applicable; the maximum charge for eligible orders is Rp40,000. Physical OfferShippingDetails uses shippingRate.maxValue, not a fixed rate. Its description and the visible terms preserve the 1 kg ceiling condition.

Digital products cannot be returned or refunded after access. Physical returns are limited to wrong items, missing pages, or printing defects reported within three days of courier-confirmed receipt, with an uninterrupted unboxing video. Akademi ASN covers confirmed defect or wrong-item return and replacement shipping, with no administration fee. Whether physical returns allow cash refunds or only replacement remains to be clarified.

Individual review author names are not yet available, so no individual Review schema is published. The example support phone number in the supplied text is not added as an official support number; existing consultation links remain the contact route.
