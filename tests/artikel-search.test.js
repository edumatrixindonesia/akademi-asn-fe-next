import { expect, test } from "bun:test";
import { artikelMatches } from "../lib/artikel-search";

const entry = {
  title: "Perbedaan CPNS dan PPPK",
  excerpt: "Ringkasan jalur seleksi.",
  focusKeyword: "selisih jalur asn",
};

test("matches title, excerpt, and focus keyword case-insensitively", () => {
  expect(artikelMatches(entry, "cpns")).toBe(true);
  expect(artikelMatches(entry, "RINGKASAN")).toBe(true);
  expect(artikelMatches(entry, "Selisih Jalur")).toBe(true);
});

test("does not match other text or an empty query", () => {
  expect(artikelMatches(entry, "bumn")).toBe(false);
  expect(artikelMatches(entry, "  ")).toBe(false);
});
