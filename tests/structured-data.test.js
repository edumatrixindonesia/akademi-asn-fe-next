import { expect, test } from "bun:test";
import { organizationJsonLd } from "../app/shared-metadata";
import { artikel } from "../data/artikel";
import { artikelDetail } from "../data/artikel-detail";
import { paketPrivat } from "../data/paket-program";

test("Artikel JSON-LD dates include time and WIB, with update fallback and no draft dates", () => {
  const entry = artikel.find(({ slug }) => slug === "perbedaan-cpns-dan-pppk");
  const detail = (entry) => artikelDetail(entry, 100, "https://example.test").jsonLd;
  const schema = detail(entry);
  expect(schema.datePublished).toBe("2026-10-02T00:00:00+07:00");
  expect(schema.dateModified).toBe("2026-10-05T00:00:00+07:00");
  expect(Number.isNaN(Date.parse(schema.datePublished))).toBe(false);
  expect(Number.isNaN(Date.parse(schema.dateModified))).toBe(false);
  expect(detail({ ...entry, updatedAt: undefined }).dateModified).toBe(schema.datePublished);
  const draft = JSON.parse(JSON.stringify(detail(artikel.find(({ status }) => status === "draft"))));
  expect(draft).not.toHaveProperty("datePublished");
  expect(draft).not.toHaveProperty("dateModified");
});

test("LocalBusiness priceRange uses the published private tutoring prices", () => {
  const business = organizationJsonLd["@graph"].find((node) => node["@type"].includes("LocalBusiness"));
  const prices = paketPrivat.map(({ price }) => Number(price.replace(/\D/g, "")));
  const rupiah = (amount) => `Rp${amount.toLocaleString("id-ID")}`;
  expect(business.priceRange).toBe(`${rupiah(Math.min(...prices))}–${rupiah(Math.max(...prices))} (bimbel privat)`);
  expect(business.priceRange).toBe("Rp1.960.000–Rp5.292.000 (bimbel privat)");
  expect(business.priceRange.length).toBeLessThan(100);
});

test("Organization declares that no returns are accepted", () => {
  const business = organizationJsonLd["@graph"].find((node) => node["@type"].includes("LocalBusiness"));
  expect(business.hasMerchantReturnPolicy).toEqual({
    "@type": "MerchantReturnPolicy",
    applicableCountry: "ID",
    returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
  });
});
