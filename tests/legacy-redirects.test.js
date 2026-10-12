import { expect, test } from "bun:test";
import { legacyRedirects } from "../lib/legacy-redirects";

const baseUrl = (process.env.TEST_BASE_URL ?? "http://localhost:3000/").replace(/\/+$/, "");

// A redirect to a path outside the page set would land on a 404.
test("every legacy redirect lands on a URL in the sitemap", async () => {
  const sitemap = await (await fetch(`${baseUrl}/sitemap.xml`)).text();
  const paths = new Set(
    [...sitemap.matchAll(/<loc>https?:\/\/[^/<]+([^<]*)<\/loc>/g)].map((match) => match[1]),
  );

  expect(legacyRedirects).toHaveLength(499 * 4);
  expect(legacyRedirects.filter(({ destination }) => !paths.has(destination))).toEqual([]);
});

test("old WordPress URLs redirect permanently to their location page", async () => {
  const cases = [
    ["/bimbel-les-privat-cpns-di-bandung/", "/bimbel-cpns/jawa-barat/kota-bandung"],
    ["/bimbel-les-privat-pppk-di-banjar/", "/bimbel-pppk/kalimantan-selatan/kabupaten-banjar"],
    ["/bimbel-les-privat-bumn-di-solo/", "/bimbel-bumn/jawa-tengah/kota-surakarta"],
    ["/bimbel-les-privat-cpns-pppk-bumn-di-madura/", "/jawa-timur"],
  ];

  for (const [oldPath, newPath] of cases) {
    // Next first drops the trailing slash, then applies the legacy redirect.
    let url = `${baseUrl}${oldPath}`;
    for (let hop = 0; hop < 2; hop++) {
      const response = await fetch(url, { redirect: "manual" });
      expect(response.status).toBe(308);
      url = new URL(response.headers.get("location"), url).href;
    }
    expect(new URL(url).pathname).toBe(newPath);
  }
});
