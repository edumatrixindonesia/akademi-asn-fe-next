import { expect, test } from "bun:test";

const baseUrl = (process.env.TEST_BASE_URL ?? "http://localhost:3000/").replace(/\/+$/, "");

test("Produk page renders one h1, every product offer, sales counts, and Tips Lolos", async () => {
  const response = await fetch(`${baseUrl}/produk`);
  expect(response.ok).toBe(true);

  const html = await response.text();
  expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
  expect(html).toMatch(/<h1\b[^>]*>Modul Buku &amp; Tryout CPNS PPPK BUMN \d{4}<\/h1>/);
  expect(html).toMatch(/<link rel="canonical" href="[^"]+\/produk"/);
  expect(html).not.toContain(`id="jangkauan"`);
  expect(html).toContain(`href="#daftar-produk"`);
  expect(html).toContain("Ikuti Bimbingan Belajar di Akademi ASN");

  const products = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
    .flatMap((jsonLd) => jsonLd["@graph"] ?? [jsonLd])
    .filter((node) => node["@type"] === "Product");
  const offers = products.map((product) => [product.name, product.offers.price]);
  expect(offers).toEqual([
    ["E-Modul Lolos CPNS & PPPK", 75000],
    ["Modul Lolos CPNS & PPPK", 120000],
    ["Paket Tryout SKD 2026", 50000],
    ["Buku Fisik BUMN Lengkap", 150000],
  ]);
  expect(new Set(products.map((product) => product.description)).size).toBe(4);
  expect(products.map((product) => [product.aggregateRating.ratingValue, product.aggregateRating.ratingCount, product.aggregateRating.reviewCount])).toEqual([
    [4.8, 120, 45], [4.9, 85, 30], [4.8, 250, 110], [4.9, 60, 25],
  ]);
  for (const product of products) {
    expect(typeof product.description).toBe("string");
    expect(product.description.length).toBeGreaterThan(20);
    expect(html).toContain(`<p class="mt-2 text-sm text-muted-foreground">${product.description}</p>`);
    expect(new URL(product.image).protocol).toMatch(/^https?:$/);
    expect(product.aggregateRating["@type"]).toBe("AggregateRating");
    expect(product.aggregateRating.bestRating).toBe(5);
    expect(html).toContain(`${product.aggregateRating.ratingValue.toLocaleString("id-ID")} / 5 (${product.aggregateRating.ratingCount} rating, ${product.aggregateRating.reviewCount} ulasan tertulis)`);
    expect(product).not.toHaveProperty("review");
    const policy = product.offers.hasMerchantReturnPolicy;
    expect(policy["@type"]).toBe("MerchantReturnPolicy");
    expect(policy.applicableCountry).toBe("ID");
    expect(html).toContain(policy.description);
    expect(new URL(policy.merchantReturnLink).pathname).toBe("/kebijakan-pengiriman-dan-pengembalian");
  }
  // One visible policy link per catalog card, plus the footer link.
  expect(html.match(/<a[^>]*href="\/kebijakan-pengiriman-dan-pengembalian"/g)).toHaveLength(products.length + 1);
  for (const index of [0, 2]) {
    expect(products[index].offers.shippingDetails).toEqual({
      "@type": "OfferShippingDetails",
      shippingDestination: { "@type": "DefinedRegion", addressCountry: "ID" },
      shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "IDR" },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
        transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
      },
    });
    expect(products[index].offers.hasMerchantReturnPolicy.returnPolicyCategory).toBe("https://schema.org/MerchantReturnNotPermitted");
    expect(products[index].offers.hasMerchantReturnPolicy).not.toHaveProperty("merchantReturnDays");
  }
  for (const index of [1, 3]) {
    const shipping = products[index].offers.shippingDetails;
    expect(shipping).toMatchObject({
      "@type": "OfferShippingDetails",
      shippingDestination: { "@type": "DefinedRegion", addressCountry: "ID" },
      shippingRate: { "@type": "MonetaryAmount", maxValue: 40000, currency: "IDR" },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" },
        transitTime: { "@type": "QuantitativeValue", minValue: 2, maxValue: 7, unitCode: "DAY" },
        businessDays: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        },
      },
    });
    expect(shipping.shippingRate).not.toHaveProperty("value");
    expect(shipping.description).toContain("Untuk pesanan hingga 1 kg");
    expect(html).toContain(shipping.description);
    expect(products[index].offers.hasMerchantReturnPolicy).toMatchObject({
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 3,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    });
  }
  expect(html).toContain("Biaya pengiriman Rp0 tanpa minimum pembelian dan tanpa kurir atau waktu transit.");
  expect(html).toContain("ongkir yang dibayar pelanggan maksimal Rp40.000 tanpa pengecualian wilayah");
  expect(html).toContain("Akademi ASN menanggung biaya di atas batas tersebut.");
  expect(html).toContain("Batas Rp40.000 tidak berlaku untuk pesanan di atas 1 kg");
  expect(html).toContain("Subsidi ongkir hingga Rp20.000 untuk pembelian minimal Rp200.000 tetap berlaku");
  expect(html).not.toContain("saat checkout");
  expect(html).not.toContain("Gratis ongkir untuk pembelian minimal Rp200.000 hanya jika voucher toko diaktifkan.");
  for (const sold of ["167 Terjual", "50 Terjual", "250 Terjual", "10 Terjual"]) {
    expect(html).toContain(sold);
  }
});
