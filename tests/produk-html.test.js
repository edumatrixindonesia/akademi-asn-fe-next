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
    expect(product.offers).not.toHaveProperty("shippingDetails");
    expect(product.offers).not.toHaveProperty("hasMerchantReturnPolicy");
  }
  expect(html).not.toContain("kebijakan-pengiriman-dan-pengembalian");
  expect(html).not.toContain("ongkir");
  expect(html).not.toContain("saat checkout");
  for (const sold of ["167 Terjual", "50 Terjual", "250 Terjual", "10 Terjual"]) {
    expect(html).toContain(sold);
  }
});
