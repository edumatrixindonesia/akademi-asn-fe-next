import { expect, test } from "bun:test";

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

  const types = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
    .flatMap((jsonLd) => jsonLd["@graph"]?.map((node) => node["@type"]) ?? [jsonLd["@type"]]);
  expect(types).toContain("BlogPosting");
  expect(types).toContain("BreadcrumbList");
});

test("unknown Artikel slug returns 404", async () => {
  const response = await fetch(`${baseUrl}/blog/tidak-ada-artikel-ini`);
  expect(response.status).toBe(404);
});
