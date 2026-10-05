// Synthetic test data only. Never import this fixture into app/, components/, or data/.
import { produkUnggulan } from "../../data/produk-unggulan";
import { paketHematKomplit } from "../../data/paket-hemat-komplit";
import { productDemo } from "../../data/product-demo";

const origin = "https://example.test";
const bundle = paketHematKomplit(() => origin);
const products = [
  ...produkUnggulan(() => origin).products.map((product) => ({
    ...product,
    description: product.features.join(", "),
  })),
  { ...bundle, name: bundle.title },
];

export const sampleProductJsonLd = {
  "@context": "https://schema.org",
  "@graph": products.map((product, index) => {
    const details = productDemo(product.name, index + 1);

    return {
      "@type": "Product",
      "@id": `${origin}/sample-product-${index + 1}`,
      name: `${product.name} (SIMULASI)`,
      description: `DATA SIMULASI UNTUK PENGUJIAN. ${product.description}`,
      image: new URL(product.image, origin).href,
      brand: { "@type": "Brand", name: "Akademi ASN" },
      aggregateRating: details.aggregateRating,
      review: details.review,
      offers: {
        "@type": "Offer",
        url: `${origin}/sample-product-${index + 1}`,
        price: product.price,
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        shippingDetails: details.shippingDetails,
        hasMerchantReturnPolicy: details.hasMerchantReturnPolicy,
      },
    };
  }),
};
