// Temporary synthetic data requested by the owner. Replace with verified product data.
export const productDemo = (name: string, productNumber: number) => {
  const review = [4, 5].map((ratingValue, reviewIndex) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: `Pengguna Simulasi ${productNumber}-${reviewIndex + 1}`,
    },
    reviewBody: `Contoh ulasan ${reviewIndex + 1} untuk ${name}. Data simulasi, bukan ulasan pelanggan.`,
    datePublished: "2026-10-05",
    reviewRating: { "@type": "Rating", ratingValue, bestRating: 5, worstRating: 1 },
  }));

  return {
    notice: "Data simulasi: rating, ulasan, pengiriman, dan pengembalian berikut hanya contoh sementara, bukan data pelanggan atau kebijakan resmi.",
    deliveryDescription: "Simulasi akses digital di Indonesia: biaya Rp0, aktivasi 0–1 hari, tanpa waktu transit.",
    returnDescription: "Simulasi pengembalian: tidak diperbolehkan. Kebijakan resmi masih disiapkan.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: review.reduce((sum, entry) => sum + entry.reviewRating.ratingValue, 0) / review.length,
      reviewCount: review.length,
      ratingCount: review.length,
      bestRating: 5,
      worstRating: 1,
    },
    review,
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingDestination: { "@type": "DefinedRegion", addressCountry: "ID" },
      shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "IDR" },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
        transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
      },
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "ID",
      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
    },
  };
};

export type ProductDemoData = ReturnType<typeof productDemo>;
