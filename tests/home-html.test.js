import { expect, test } from "bun:test";

test("home HTML declares Indonesian and an absolute canonical URL", async () => {
  const response = await fetch(process.env.TEST_BASE_URL ?? "http://localhost:3000/");
  expect(response.ok).toBe(true);

  const html = await response.text();
  expect(html).toMatch(/<html\b[^>]*\blang="id"/);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  expect(canonical).not.toBeNull();
  expect(new URL(canonical[1]).protocol).toMatch(/^https?:$/);
});
