import { expect, test } from "bun:test";

const baseUrl = (process.env.TEST_BASE_URL ?? "http://localhost:3000/").replace(/\/+$/, "");

test("Produk page renders one h1, every product offer, sales counts, and Tips Lolos", async () => {
  const response = await fetch(`${baseUrl}/produk-bimbel-cpns-pppk-bumn-terbaik`);
  expect(response.ok).toBe(true);

  const html = await response.text();
  expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
  expect(html).toMatch(/<h1\b[^>]*>Modul Buku &amp; Tryout CPNS PPPK BUMN \d{4}<\/h1>/);
  expect(html).toMatch(/<link rel="canonical" href="[^"]+\/produk-bimbel-cpns-pppk-bumn-terbaik"/);
  expect(html).not.toContain(`id="jangkauan"`);
  expect(html).toContain(`href="#daftar-produk"`);
  expect(html).toContain("Ikuti Bimbingan Belajar di Akademi ASN");

  const offers = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
    .flatMap((jsonLd) => jsonLd["@graph"] ?? [jsonLd])
    .filter((node) => node["@type"] === "Product")
    .map((product) => [product.name, product.offers.price]);
  expect(offers).toEqual([
    ["E-Modul Lolos CPNS & PPPK", 75000],
    ["Modul Lolos CPNS & PPPK", 120000],
    ["Paket Tryout SKD 2026", 50000],
    ["Buku Fisik BUMN Lengkap", 150000],
  ]);
  for (const sold of ["167 Terjual", "50 Terjual", "250 Terjual", "10 Terjual"]) {
    expect(html).toContain(sold);
  }
});
