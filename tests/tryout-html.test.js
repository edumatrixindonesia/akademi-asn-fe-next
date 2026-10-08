import { expect, test } from "bun:test";
import { produkUnggulan } from "../data/produk-unggulan";
import { paketHematKomplit } from "../data/paket-hemat-komplit";

const expectedDetails = [
  ...produkUnggulan(() => "").products.map((product) => product.details),
  paketHematKomplit(() => "").details,
];

const baseUrl = (process.env.TEST_BASE_URL ?? "http://localhost:3000/").replace(/\/+$/, "");

test("Tryout page renders one h1, product offers, and per-topic Konsultasi links", async () => {
  const response = await fetch(`${baseUrl}/tryout`);
  expect(response.ok).toBe(true);

  const html = await response.text();
  expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
  expect(html).toMatch(/<h1\b[^>]*>Tryout CPNS PPPK BUMN \d{4} Simulasi CAT Online<\/h1>/);
  expect(html).toMatch(/<link rel="canonical" href="[^"]+\/tryout"/);
  expect(html).not.toContain(`id="jangkauan"`);
  expect([...html.matchAll(/<section aria-labelledby="(pahami-tahapan-seleksi[^"]+)"/g)].map((match) => match[1]))
    .toEqual([
      "pahami-tahapan-seleksi-sistem-penilaian-resmi-cpns",
      "pahami-tahapan-seleksi-sistem-penilaian-resmi-pppk",
      "pahami-tahapan-seleksi-sistem-penilaian-rekrutmen-bersama-bumn",
    ]);

  const products = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
    .flatMap((jsonLd) => jsonLd["@graph"] ?? [jsonLd])
    .filter((node) => node["@type"] === "Product");
  const offers = products.map((product) => [product.name, product.offers.price]);
  expect(offers).toEqual([
    ["Tryout CPNS", 30000],
    ["E-Book Modul CPNS", 50000],
    ["Paket Hemat Komplit", 70000],
  ]);
  const siteUrl = new URL(html.match(/<link rel="canonical" href="([^"]+)"/)[1]);
  expect([...html.matchAll(/data-product-details="true"/g)]).toHaveLength(3);
  for (const [index, product] of products.entries()) {
    const imageUrl = new URL(product.image);
    expect(imageUrl.origin).toBe(siteUrl.origin);
    expect(imageUrl.pathname).toStartWith("/img/section/");
    expect(html).toContain(encodeURIComponent(decodeURIComponent(imageUrl.pathname)));
    const imageResponse = await fetch(new URL(imageUrl.pathname, baseUrl));
    expect(imageResponse.ok).toBe(true);
    expect(imageResponse.headers.get("content-type")).toStartWith("image/");
    expect(product.offers["@type"]).toBe("Offer");
    expect(product.offers.priceCurrency).toBe("IDR");
    expect(product.offers.availability).toBe("https://schema.org/InStock");
    const details = expectedDetails[index];
    expect(product.aggregateRating).toEqual(details.aggregateRating);
    expect(product.review).toEqual(details.review);
    expect(product.offers.shippingDetails).toEqual(details.shippingDetails);
    expect(product.offers.hasMerchantReturnPolicy).toEqual(details.hasMerchantReturnPolicy);
    expect(html).toContain(`href="${details.policyLink.href}"`);
    for (const review of product.review) {
      expect(html).toContain(review.author.name);
      expect(html).toContain(review.reviewBody);
    }
  }
  expect(html).toContain("<del");
  expect(html).toContain("Rp80.000");

  const topics = new Set(
    [...html.matchAll(/href="(https:\/\/api\.whatsapp\.com[^"]+)"/g)].map((match) =>
      new URL(match[1].replaceAll("&amp;", "&")).searchParams.get("text").match(/tentang (.+)\. Mohon/)[1],
    ),
  );
  for (const topic of ["Tryout CPNS", "Tryout PPPK", "Tryout BUMN", "E-Book Modul CPNS", "Paket Hemat Komplit"]) {
    expect(topics).toContain(topic);
  }
});
