import { expect, test } from "bun:test";
import { sampleProductJsonLd } from "./fixtures/tryout-product-schema";

test("Synthetic product fixtures have coherent ratings and complete optional schema fields", () => {
  const schema = JSON.parse(JSON.stringify(sampleProductJsonLd));
  expect(schema["@context"]).toBe("https://schema.org");
  expect(schema["@graph"]).toHaveLength(3);

  for (const product of schema["@graph"]) {
    expect(product["@type"]).toBe("Product");
    expect(product.name).toContain("SIMULASI");
    expect(product.description).toContain("DATA SIMULASI");
    expect(new URL(product.image).hostname).toBe("example.test");
    expect(new URL(product.offers.url).hostname).toBe("example.test");
    expect(product.offers.price).toBeGreaterThan(0);
    expect(product.offers.priceCurrency).toBe("IDR");

    const ratings = product.review.map((review) => review.reviewRating.ratingValue);
    expect(product.aggregateRating.reviewCount).toBe(product.review.length);
    expect(product.aggregateRating.ratingCount).toBe(ratings.length);
    expect(product.aggregateRating.ratingValue).toBe(ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length);
    for (const review of product.review) {
      expect(review["@type"]).toBe("Review");
      expect(review.author["@type"]).toBe("Person");
      expect(review.author.name).toContain("Simulasi");
      expect(review.reviewBody).toContain("bukan ulasan pelanggan");
      expect(Number.isNaN(Date.parse(review.datePublished))).toBe(false);
      expect(review.reviewRating.ratingValue).toBeGreaterThanOrEqual(review.reviewRating.worstRating);
      expect(review.reviewRating.ratingValue).toBeLessThanOrEqual(review.reviewRating.bestRating);
    }

    const shipping = product.offers.shippingDetails;
    expect(shipping["@type"]).toBe("OfferShippingDetails");
    expect(shipping.shippingDestination.addressCountry).toBe("ID");
    expect(shipping.shippingRate.currency).toBe(product.offers.priceCurrency);
    expect(shipping.shippingRate.value).toBe(0);
    for (const interval of [shipping.deliveryTime.handlingTime, shipping.deliveryTime.transitTime]) {
      expect(interval["@type"]).toBe("QuantitativeValue");
      expect(Number.isInteger(interval.minValue)).toBe(true);
      expect(Number.isInteger(interval.maxValue)).toBe(true);
      expect(interval.minValue).toBeGreaterThanOrEqual(0);
      expect(interval.maxValue).toBeGreaterThanOrEqual(interval.minValue);
      expect(interval.unitCode).toBe("DAY");
    }

    const returns = product.offers.hasMerchantReturnPolicy;
    expect(returns["@type"]).toBe("MerchantReturnPolicy");
    expect(returns.applicableCountry).toBe("ID");
    expect(returns.returnPolicyCategory).toBe("https://schema.org/MerchantReturnNotPermitted");
    expect(returns).not.toHaveProperty("merchantReturnDays");
  }
});
