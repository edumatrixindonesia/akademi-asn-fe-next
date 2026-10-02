import { expect, test } from "bun:test";
import { artikel } from "../data/artikel";

const baseUrl = process.env.TEST_BASE_URL ?? "http://localhost:3000/";

// Under `bun dev` drafts count, so every entry in data/artikel.ts is visible.
const pages = [
  { path: "/", kategori: undefined },
  { path: "/di-yogyakarta", kategori: undefined },
  { path: "/bimbel-cpns", kategori: "cpns" },
  { path: "/bimbel-pppk", kategori: "pppk" },
  { path: "/bimbel-bumn", kategori: "bumn" },
  { path: "/bimbel-cpns/jawa-barat/kota-bandung", kategori: "cpns" },
  { path: "/bimbel-pppk/jawa-barat/kota-bandung", kategori: "pppk" },
  { path: "/bimbel-bumn/jawa-barat/kota-bandung", kategori: "bumn" },
];

for (const { path, kategori } of pages) {
  test(`${path} shows Artikel Terbaru before FAQ only when a matching Artikel exists`, async () => {
    const response = await fetch(new URL(path, baseUrl));
    expect(response.status).toBe(200);

    const html = (await response.text()).replaceAll("<!-- -->", "");
    const matching = artikel
      .filter((entry) => !kategori || entry.kategori === kategori)
      .slice(0, 3);

    expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
    if (matching.length === 0) {
      expect(html).not.toContain("Artikel Terbaru");
      return;
    }

    expect(html).toMatch(/<h2\b[^>]*>Artikel Terbaru<\/h2>/);
    expect(html.indexOf("Artikel Terbaru")).toBeLessThan(html.indexOf('id="faq-title"'));
    expect(html).toContain(`href="${kategori ? `/blog/kategori/${kategori}` : "/blog"}"`);
    for (const { slug } of matching) expect(html).toContain(`href="/blog/${slug}"`);
  });
}
