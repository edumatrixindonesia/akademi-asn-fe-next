import { expect, test } from "bun:test";

const baseUrl = (process.env.TEST_BASE_URL ?? "http://localhost:3000/").replace(/\/+$/, "");

test("Tryout page renders one h1, product offers, and per-topic Konsultasi links", async () => {
  const response = await fetch(`${baseUrl}/tryout-bimbel-cpns-pppk-bumn-terbaik`);
  expect(response.ok).toBe(true);

  const html = await response.text();
  expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
  expect(html).toMatch(/<h1\b[^>]*>Tryout CPNS PPPK BUMN \d{4} Simulasi CAT Online<\/h1>/);
  expect(html).toMatch(/<link rel="canonical" href="[^"]+\/tryout-bimbel-cpns-pppk-bumn-terbaik"/);
  expect(html).not.toContain(`id="jangkauan"`);
  expect([...html.matchAll(/<section aria-labelledby="(pahami-tahapan-seleksi[^"]+)"/g)].map((match) => match[1]))
    .toEqual([
      "pahami-tahapan-seleksi-sistem-penilaian-resmi-cpns",
      "pahami-tahapan-seleksi-sistem-penilaian-resmi-pppk",
      "pahami-tahapan-seleksi-sistem-penilaian-rekrutmen-bersama-bumn",
    ]);

  const offers = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
    .flatMap((jsonLd) => jsonLd["@graph"] ?? [jsonLd])
    .filter((node) => node["@type"] === "Product")
    .map((product) => [product.name, product.offers.price]);
  expect(offers).toEqual([
    ["Tryout CPNS", 30000],
    ["E-Book Modul CPNS", 50000],
    ["Paket Hemat Komplit", 70000],
  ]);
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
