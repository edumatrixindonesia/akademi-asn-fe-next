import { expect, test } from "bun:test";
import { validateArtikel } from "../lib/artikel-schema";

const entry = (overrides = {}) => ({
  slug: "contoh",
  title: "Contoh",
  description: "d".repeat(130),
  excerpt: "Ringkasan.",
  kategori: ["informasi"],
  examTrack: ["cpns"],
  penulis: "tim-akademi-asn",
  status: "published",
  publishedAt: "2026-10-01",
  focusKeyword: "contoh kata kunci",
  references: [{ title: "BKN", url: "https://www.bkn.go.id/", publisher: "BKN", accessedAt: "2026-10-01" }],
  ...overrides,
});

// Gives every published entry a Tabel Klaim that cites exactly its references.
const klaimFor = (entries) =>
  Object.fromEntries(
    entries.filter((e) => e.status === "published").map((e) => [e.slug, e.references.map((r) => r.url).join(" ")]),
  );
const validate = (entries, bodySlugs) => validateArtikel(entries, bodySlugs, klaimFor(entries));

test("a valid entry with a body passes", () => {
  expect(validate([entry()], ["contoh"])).toEqual([]);
});

test("an entry without a body and a body without an entry both fail", () => {
  expect(validate([entry()], [])).toHaveLength(1);
  expect(validate([], ["yatim"])).toHaveLength(1);
});

test("duplicate slug or focusKeyword fails", () => {
  const twin = entry({ slug: "kembar", focusKeyword: "Contoh Kata Kunci" });
  const errors = validate([entry(), twin], ["contoh", "kembar"]);
  expect(errors).toHaveLength(1);
  expect(errors[0]).toContain("focusKeyword");
  expect(validate([entry(), entry({ focusKeyword: "lain" })], ["contoh"]).join()).toContain("Duplicate slug");
});

test("published needs publishedAt and references; draft does not", () => {
  expect(validate([entry({ publishedAt: undefined })], ["contoh"])).toHaveLength(1);
  expect(validate([entry({ references: [] })], ["contoh"])).toHaveLength(1);
  expect(validateArtikel([entry({ status: "draft", publishedAt: undefined, references: [] })], ["contoh"], {})).toEqual([]);
});

test("title and seoTitle each allow at most 64 characters", () => {
  expect(validate([entry({ title: "t".repeat(65), seoTitle: "SEO" })], ["contoh"]).join()).toContain("title");
  expect(validate([entry({ seoTitle: "s".repeat(65) })], ["contoh"]).join()).toContain("seoTitle");
  expect(validate([entry({ title: "t".repeat(64), seoTitle: "s".repeat(64) })], ["contoh"])).toEqual([]);
});

test("related entries must be published", () => {
  const draft = entry({ slug: "draf", focusKeyword: "draf", status: "draft", publishedAt: undefined, references: [] });
  expect(validate([entry({ related: ["draf"] }), draft], ["contoh", "draf"]).join()).toContain("draft");
  expect(validateArtikel([entry({ status: "draft", publishedAt: undefined, references: [], related: ["draf"] }), draft], ["contoh", "draf"], {}).join()).toContain("draft");
});

test("dates must be valid ISO calendar dates", () => {
  expect(validate([entry({ publishedAt: "2026-02-30" })], ["contoh"]).join()).toContain("publishedAt");
  expect(validate([entry({ updatedAt: "02-10-2026" })], ["contoh"]).join()).toContain("updatedAt");
});

test("updatedAt must be later than publishedAt", () => {
  expect(validate([entry({ updatedAt: "2026-09-30" })], ["contoh"]).join()).toContain("later than publishedAt");
  expect(validate([entry({ updatedAt: "2026-10-01" })], ["contoh"]).join()).toContain("later than publishedAt");
  expect(validate([entry({ updatedAt: "2026-10-02" })], ["contoh"])).toEqual([]);
});

test("related allows up to 3 distinct slugs of other entries (forward references too)", () => {
  const later = entry({ slug: "nanti", focusKeyword: "nanti" });
  expect(validate([entry({ related: ["nanti"] }), later], ["contoh", "nanti"])).toEqual([]);
  expect(validate([entry({ related: ["a", "b", "c", "d"] })], ["contoh"]).join()).toContain("more than 3");
  const errors = validate([entry({ related: ["hilang"] })], ["contoh"]);
  expect(errors).toHaveLength(1);
  expect(errors[0]).toContain("hilang");
  expect(validate([entry({ related: ["contoh"] })], ["contoh"]).join()).toContain("itself");
  const twice = validate([entry({ related: ["nanti", "nanti"] }), later], ["contoh", "nanti"]);
  expect(twice.join()).toContain("repeats");
});

test("a repeated Kategori or exam track fails", () => {
  const errors = validate([entry({ kategori: ["informasi", "informasi"], examTrack: ["cpns", "cpns"] })], ["contoh"]);
  expect(errors).toHaveLength(2);
});

const withRefs = (...urls) => urls.map((url) => ({ title: "t", url, publisher: "p", accessedAt: "2026-10-01" }));
const GO_ID = "https://peraturan.bpk.go.id/Details/1";

test("a published Artikel needs a Sumber Resmi, and the error names its slug", () => {
  const news = entry({ references: withRefs("https://kompas.com/a", "https://x.com/b") });
  const errors = validateArtikel([news], ["contoh"], { contoh: "https://kompas.com/a https://x.com/b" });
  expect(errors).toHaveLength(1);
  expect(errors[0]).toContain("contoh");
});

test("Sumber Resmi: .go.id, fhcibumn.com and subdomains, danantaraindonesia.co.id", () => {
  for (const url of [
    "https://www.bkn.go.id/x",
    "https://fhcibumn.com/x",
    "https://rekrutmenbersama.fhcibumn.com/x",
    "https://danantaraindonesia.co.id/x",
  ]) {
    expect(validateArtikel([entry({ references: withRefs(url) })], ["contoh"], { contoh: url })).toEqual([]);
  }
});

test("look-alike hosts are not Sumber Resmi", () => {
  for (const url of ["https://notfhcibumn.com/x", "https://go.id.example.com/x"]) {
    expect(validateArtikel([entry({ references: withRefs(url) })], ["contoh"], { contoh: url })).toHaveLength(1);
  }
});

test("a draft without a Sumber Resmi passes", () => {
  const draft = entry({ status: "draft", references: withRefs("https://kompas.com/a") });
  expect(validateArtikel([draft], ["contoh"], {})).toEqual([]);
});

test("a URL only in the Tabel Klaim fails, naming slug and URL", () => {
  const errors = validateArtikel([entry({ references: withRefs(GO_ID) })], ["contoh"], {
    contoh: `${GO_ID} https://bkn.go.id/extra`,
  });
  expect(errors).toHaveLength(1);
  expect(errors[0]).toContain("contoh");
  expect(errors[0]).toContain("https://bkn.go.id/extra");
});

test("a URL only in references fails, naming slug and URL", () => {
  const errors = validateArtikel([entry({ references: withRefs(GO_ID, "https://bkn.go.id/unused") })], ["contoh"], {
    contoh: GO_ID,
  });
  expect(errors).toHaveLength(1);
  expect(errors[0]).toContain("contoh");
  expect(errors[0]).toContain("https://bkn.go.id/unused");
});

test("the same URL set passes, even inside a Markdown table", () => {
  const table = `| kalimat | [BKN](${GO_ID}) | pasal 1 |`;
  expect(validateArtikel([entry({ references: withRefs(GO_ID) })], ["contoh"], { contoh: table })).toEqual([]);
});

test("URL comparison is exact: a trailing slash fails", () => {
  const errors = validateArtikel([entry({ references: withRefs(GO_ID) })], ["contoh"], { contoh: `${GO_ID}/` });
  expect(errors).toHaveLength(2);
});

test("a draft with a Tabel Klaim is cross-checked too", () => {
  const draft = entry({ status: "draft", references: withRefs(GO_ID) });
  expect(validateArtikel([draft], ["contoh"], { contoh: "https://bkn.go.id/other" })).toHaveLength(2);
});

test("a Tabel Klaim without an Artikel entry fails", () => {
  const errors = validateArtikel([entry({ status: "draft" })], ["contoh"], { yatim: GO_ID });
  expect(errors).toHaveLength(1);
  expect(errors[0]).toContain("yatim");
});

test("a published Artikel without a Tabel Klaim fails, naming its slug; a draft passes", () => {
  const errors = validateArtikel([entry()], ["contoh"], {});
  expect(errors).toHaveLength(1);
  expect(errors[0]).toContain("contoh");
  expect(validateArtikel([entry({ status: "draft" })], ["contoh"], {})).toEqual([]);
});

test("trailing punctuation and emphasis marks are not part of a Tabel Klaim URL", () => {
  const e = entry({ references: withRefs(GO_ID) });
  expect(validateArtikel([e], ["contoh"], { contoh: `lihat **${GO_ID}**.` })).toEqual([]);
});
