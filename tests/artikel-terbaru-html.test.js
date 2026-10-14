import { expect, test } from "bun:test";
import { artikel } from "../data/artikel";

const baseUrl = process.env.TEST_BASE_URL ?? "http://localhost:3000/";

// Under `bun dev` drafts count, so every entry in data/artikel.ts is visible.
// Every landing page shows the same newest Artikel, whatever their exam track.
const pages = [
  "/",
  "/di-yogyakarta",
  "/bimbel-cpns",
  "/bimbel-pppk",
  "/bimbel-bumn",
  "/bimbel-cpns/jawa-barat/kota-bandung",
  "/bimbel-pppk/jawa-barat/kota-bandung",
  "/bimbel-bumn/jawa-barat/kota-bandung",
];

for (const path of pages) {
  test(`${path} shows Artikel Terbaru after FAQ only when an Artikel exists`, async () => {
    const response = await fetch(new URL(path, baseUrl));
    expect(response.status).toBe(200);

    const html = (await response.text()).replaceAll("<!-- -->", "");
    const newest = artikel.slice(0, 3);

    expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
    if (newest.length === 0) {
      expect(html).not.toContain("Artikel Terbaru");
      return;
    }

    expect(html).toMatch(/<h2\b[^>]*>Artikel Terbaru<\/h2>/);
    expect(html.indexOf("Artikel Terbaru")).toBeGreaterThan(html.indexOf('id="faq-title"'));
    expect(html).toContain('href="/blog"');
    for (const { slug } of newest) expect(html).toContain(`href="/blog/${slug}"`);
  });
}
