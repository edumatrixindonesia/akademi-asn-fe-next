import { expect, test } from "bun:test";
import { artikel } from "../data/artikel";

const baseUrl = (process.env.TEST_BASE_URL ?? "http://localhost:3000/").replace(/\/+$/, "");

// The draft fixture only exists under `bun dev`.
test("draft fixture Artikel renders one h1, canonical, BlogPosting and BreadcrumbList", async () => {
  const response = await fetch(`${baseUrl}/blog/draft-artikel-contoh`);
  expect(response.ok).toBe(true);

  const html = await response.text();
  expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
  expect(html).toMatch(/<h1\b[^>]*>Draft Artikel Contoh<\/h1>/);
  expect(html).toMatch(/<link rel="canonical" href="[^"]+\/blog\/draft-artikel-contoh"/);
  expect(html).toContain(`<title>Draft Artikel Contoh | Akademi ASN</title>`);
  expect(html).toContain(`property="og:type" content="article"`);
  expect(html).toMatch(/\d+ menit baca/);
  expect(html).toContain("<table>");

  const types = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
    .flatMap((jsonLd) => jsonLd["@graph"]?.map((node) => node["@type"]) ?? [jsonLd["@type"]]);
  expect(types).toContain("BlogPosting");
  expect(types).toContain("BreadcrumbList");
});

test("draft fixture Artikel has Daftar isi anchors, Referensi, and every MDX component", async () => {
  // React separates adjacent text nodes with comments.
  const html = (await (await fetch(`${baseUrl}/blog/draft-artikel-contoh`)).text()).replaceAll("<!-- -->", "");

  const anchors = [...html.matchAll(/<a href="#([^"]+)"/g)].map((match) => match[1]);
  expect(anchors.length).toBeGreaterThanOrEqual(3);
  for (const id of anchors) {
    expect(html).toMatch(new RegExp(`<h2 id="${id}"`));
  }

  expect(html).toContain("Referensi");
  expect(html).toContain("Baca Juga: ");
  expect(html).toContain("Butuh bantuan menyiapkan seleksi?");
  expect(html).toContain("Lihat jawaban");
  expect(html).toContain("Contoh: Surat contoh");
  expect(html).toContain("Masih ada pertanyaan?");
  expect(html).toContain("Bagikan artikel ini");
  expect(html).toMatch(/<form[^>]*action="\/blog\/cari"[^>]*method="get"/);
});

test("Artikel Terkait shows only when another Artikel exists", async () => {
  const html = await (await fetch(`${baseUrl}/blog/draft-artikel-contoh`)).text();
  expect(html.includes("Artikel Terkait")).toBe(artikel.length > 1);
});

test("unknown Artikel slug returns 404", async () => {
  const response = await fetch(`${baseUrl}/blog/tidak-ada-artikel-ini`);
  expect(response.status).toBe(404);
});
