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

test("Penulis pages render one h1, the profile, and robots by published Artikel", async () => {
  const published = (slug) =>
    artikel.some((entry) => entry.penulis === slug && entry.status === "published");

  for (const slug of ["tim-akademi-asn", "dimas-maulana"]) {
    const response = await fetch(`${baseUrl}/blog/penulis/${slug}`);
    expect(response.status).toBe(200);

    const html = (await response.text()).replaceAll("&amp;", "&");
    expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
    expect(html).toMatch(new RegExp(`<link rel="canonical" href="[^"]+/blog/penulis/${slug}"`));
    expect(html).toContain('"@type":"ProfilePage"');
    expect(html.includes('"@type":"Person"')).toBe(slug === "dimas-maulana");
    expect(/<meta name="robots" content="noindex, follow"/.test(html)).toBe(!published(slug));
  }
});

test("a Penulis with no Artikel shows Belum ada artikel; unknown or out-of-range pages 404", async () => {
  const html = await (await fetch(`${baseUrl}/blog/penulis/dimas-maulana`)).text();
  expect(html.includes("Belum ada artikel")).toBe(
    !artikel.some((entry) => entry.penulis === "dimas-maulana"),
  );
  expect((await fetch(`${baseUrl}/blog/penulis/tidak-ada`)).status).toBe(404);
  expect((await fetch(`${baseUrl}/blog/penulis/dimas-maulana/page/99`)).status).toBe(404);

  const redirect = await fetch(`${baseUrl}/blog/penulis/dimas-maulana/page/1`, { redirect: "manual" });
  expect(redirect.status).toBe(308);
});

test("/blog/cari is noindex, escapes q, and shows empty states", async () => {
  const get = async (query) =>
    (await (await fetch(`${baseUrl}/blog/cari${query}`)).text()).replaceAll("<!-- -->", "");

  const empty = await get("?q=zzzxqy");
  expect(empty).toContain("Hasil pencarian: zzzxqy");
  expect(empty).toContain("Tidak ada artikel yang cocok");
  expect(empty).toMatch(/<meta name="robots" content="noindex, follow"/);
  expect([...empty.matchAll(/<h1\b/g)]).toHaveLength(1);

  const bare = await get("");
  expect(bare).not.toContain("Tidak ada artikel yang cocok");
  expect(bare).toMatch(/<form[^>]*action="\/blog\/cari"/);

  const injected = await get("?q=%3Cscript%3Ealert(1)%3C%2Fscript%3E");
  expect(injected).not.toContain("<script>alert(1)</script>");
  expect(injected).toContain("&lt;script&gt;alert(1)&lt;/script&gt;");

  if (total > 0) {
    const hit = await get(`?q=${encodeURIComponent(artikel[0].title.slice(0, 8).toUpperCase())}`);
    expect(hit).toContain(`href="/blog/${artikel[0].slug}"`);
  }
});
