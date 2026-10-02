import { expect, test } from "bun:test";
import { countWords } from "../lib/artikel";

test("a hyphenated word counts once; Markdown punctuation counts zero", () => {
  expect(countWords("anak-anak sehari-hari")).toBe(2);
  expect(countWords("- satu\n* dua\n> tiga\n\n| a | b |\n| - | - |")).toBe(5);
  expect(countWords("## Judul **tebal** <Callout>isi</Callout>")).toBe(3);
});
