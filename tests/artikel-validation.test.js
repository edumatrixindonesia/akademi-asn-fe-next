import { expect, test } from "bun:test";
import { validateArtikel } from "../lib/artikel-schema";

const entry = (overrides = {}) => ({
  slug: "contoh",
  title: "Contoh",
  description: "d".repeat(130),
  excerpt: "Ringkasan.",
  kategori: "tips-info",
  penulis: "tim-akademi-asn",
  status: "published",
  publishedAt: "2026-10-01",
  focusKeyword: "contoh kata kunci",
  references: [{ title: "BKN", url: "https://www.bkn.go.id/", publisher: "BKN", accessedAt: "2026-10-01" }],
  ...overrides,
});

test("a valid entry with a body passes", () => {
  expect(validateArtikel([entry()], ["contoh"])).toEqual([]);
});

test("an entry without a body and a body without an entry both fail", () => {
  expect(validateArtikel([entry()], [])).toHaveLength(1);
  expect(validateArtikel([], ["yatim"])).toHaveLength(1);
});

test("duplicate slug or focusKeyword fails", () => {
  const twin = entry({ slug: "kembar", focusKeyword: "Contoh Kata Kunci" });
  const errors = validateArtikel([entry(), twin], ["contoh", "kembar"]);
  expect(errors).toHaveLength(1);
  expect(errors[0]).toContain("focusKeyword");
  expect(validateArtikel([entry(), entry({ focusKeyword: "lain" })], ["contoh"]).join()).toContain("Duplicate slug");
});

test("published needs publishedAt and references; draft does not", () => {
  expect(validateArtikel([entry({ publishedAt: undefined })], ["contoh"])).toHaveLength(1);
  expect(validateArtikel([entry({ references: [] })], ["contoh"])).toHaveLength(1);
  expect(validateArtikel([entry({ status: "draft", publishedAt: undefined, references: [] })], ["contoh"])).toEqual([]);
});
