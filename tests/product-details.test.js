import { expect, test } from "bun:test";
import { produkUnggulan } from "../data/produk-unggulan";
import { paketHematKomplit } from "../data/paket-hemat-komplit";
import { kebijakanPengirimanDanPengembalianPath } from "../data/kebijakan-pengiriman-dan-pengembalian";

const products = [
  ...produkUnggulan(() => "").products,
  { ...paketHematKomplit(() => ""), name: "Paket Hemat Komplit" },
];

test("Product details have coherent ratings, reviews, shipping, and return policy", () => {
  expect(products).toHaveLength(3);

  for (const { details } of products) {
    const ratings = details.review.map((review) => review.reviewRating.ratingValue);
    const average = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
    expect(details.aggregateRating.reviewCount).toBe(details.review.length);
    expect(details.aggregateRating.ratingCount).toBe(ratings.length);
    expect(details.aggregateRating.ratingValue).toBe(Math.round(average * 10) / 10);
    for (const review of details.review) {
      expect(review["@type"]).toBe("Review");
      expect(review.author["@type"]).toBe("Person");
      expect(review.author.name).not.toContain("Simulasi");
      expect(review.reviewBody.length).toBeGreaterThan(0);
      expect(review.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(review.reviewRating.ratingValue).toBeGreaterThanOrEqual(review.reviewRating.worstRating);
      expect(review.reviewRating.ratingValue).toBeLessThanOrEqual(review.reviewRating.bestRating);
    }

    const shipping = details.shippingDetails;
    expect(shipping.shippingDestination.addressCountry).toBe("ID");
    expect(shipping.shippingRate).toEqual({ "@type": "MonetaryAmount", value: 0, currency: "IDR" });
    for (const interval of [shipping.deliveryTime.handlingTime, shipping.deliveryTime.transitTime]) {
      expect(interval.maxValue).toBeGreaterThanOrEqual(interval.minValue);
      expect(interval.unitCode).toBe("DAY");
    }

    const returns = details.hasMerchantReturnPolicy;
    expect(returns.applicableCountry).toBe("ID");
    expect(returns.returnPolicyCategory).toBe("https://schema.org/MerchantReturnNotPermitted");
    expect(new URL(returns.merchantReturnLink).pathname).toBe(kebijakanPengirimanDanPengembalianPath);
    expect(details.policyLink.href).toBe(kebijakanPengirimanDanPengembalianPath);
  }
});
