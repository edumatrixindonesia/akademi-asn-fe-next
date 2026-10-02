import { expect, test } from "bun:test";
import { artikel } from "../data/artikel";
import { kategori } from "../data/kategori";

const baseUrl = (process.env.TEST_BASE_URL ?? "http://localhost:3000/").replace(/\/+$/, "");

// Under `bun dev` drafts count, so the total is every entry in data/artikel.ts.
const total = artikel.length;

test("/blog has one h1, canonical, search form, and Artikel Terbaru", async () => {
  const response = await fetch(`${baseUrl}/blog`);
  expect(response.status).toBe(200);

  const html = (await response.text()).replaceAll("<!-- -->", "");
  expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
  expect(html).toMatch(/<h1\b[^>]*>Info &amp; Tips Seleksi CPNS, PPPK, dan BUMN<\/h1>/);
  expect(html).toContain("<title>Blog Info &amp; Tips Seleksi CPNS, PPPK, BUMN | Akademi ASN</title>");
  expect(html).toMatch(/<link rel="canonical" href="[^"]+\/blog"/);
  expect(html).toMatch(/<form[^>]*action="\/blog\/cari"/);
  expect(html).toContain("Artikel Terbaru");
  expect(html.includes('href="/blog/page/2"')).toBe(total > 6);
});

test("/blog/page/2 returns 404 with 6 or fewer Artikel", async () => {
  const response = await fetch(`${baseUrl}/blog/page/2`);
  expect(response.status).toBe(total > 6 ? 200 : 404);
});

test("page 1 redirects permanently to the base URL", async () => {
  for (const [from, to] of [
    ["/blog/page/1", "/blog"],
    ["/blog/kategori/cpns/page/1", "/blog/kategori/cpns"],
  ]) {
    const response = await fetch(`${baseUrl}${from}`, { redirect: "manual" });
    expect(response.status).toBe(308);
    expect(new URL(response.headers.get("location"), baseUrl).pathname).toBe(to);
  }
});

test("each Kategori page renders one h1, a canonical, and the cards of its Kategori", async () => {
  for (const { slug, title } of kategori) {
    const response = await fetch(`${baseUrl}/blog/kategori/${slug}`);
    expect(response.status).toBe(200);

    const html = (await response.text()).replaceAll("&amp;", "&");
    expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
    expect(html).toContain(`>${title}</h1>`);
    expect(html).toMatch(new RegExp(`<link rel="canonical" href="[^"]+/blog/kategori/${slug}"`));
    const main = html.slice(html.indexOf("<main"));
    expect(main.includes(`href="/bimbel-${slug}"`)).toBe(slug !== "tips-info");
  }
});

test("unknown Kategori and out-of-range Kategori pages return 404", async () => {
  expect((await fetch(`${baseUrl}/blog/kategori/tidak-ada`)).status).toBe(404);
  expect((await fetch(`${baseUrl}/blog/kategori/cpns/page/99`)).status).toBe(404);
  expect((await fetch(`${baseUrl}/blog/page/99`)).status).toBe(404);
});
