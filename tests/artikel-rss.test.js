import { expect, test } from "bun:test";
import { buildRss } from "../lib/artikel-rss";

const channel = { title: "Blog", description: "Desc", siteUrl: "https://x.id" };
const entry = {
  slug: "a-b",
  title: "CPNS & PPPK <beda>",
  excerpt: "Ringkasan.",
  kategori: "tips-info",
  status: "published",
  publishedAt: "2026-10-01",
};

test("builds an RSS 2.0 item with escaped text, link, date, and category", () => {
  const xml = buildRss(channel, [entry], () => "Tips & Info");
  expect(xml).toContain('<rss version="2.0"');
  expect(xml).toContain("<title>CPNS &amp; PPPK &lt;beda&gt;</title>");
  expect(xml).toContain("<link>https://x.id/blog/a-b</link>");
  expect(xml).toContain("<pubDate>Thu, 01 Oct 2026 00:00:00 GMT</pubDate>");
  expect(xml).toContain("<category>Tips &amp; Info</category>");
});

test("keeps the 20 newest published Artikel, skipping drafts before the cut", () => {
  const draft = { ...entry, status: "draft", publishedAt: undefined };
  const xml = buildRss(channel, [draft, ...Array(25).fill(entry)], () => "x");
  expect(xml.match(/<item>/g)).toHaveLength(20);
});
