import { expect, test } from "bun:test";
import { produkUnggulan } from "../data/produk-unggulan";
import { paketHematKomplit } from "../data/paket-hemat-komplit";

const products = [
  ...produkUnggulan(() => "").products,
  { ...paketHematKomplit(() => ""), name: "Paket Hemat Komplit" },
];

test("Product details have coherent ratings and reviews", () => {
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

    // The company has no shipping policy and accepts no returns (2026-10-08).
    expect(details).not.toHaveProperty("shippingDetails");
    expect(details).not.toHaveProperty("hasMerchantReturnPolicy");
  }
});
