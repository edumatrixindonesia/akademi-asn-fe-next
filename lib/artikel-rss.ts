import type { Artikel } from "@/lib/artikel-schema";

const escapeXml = (text: string) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

type Channel = { title: string; description: string; siteUrl: string };

// RSS 2.0 for already-ordered published Artikel; drafts have no `publishedAt`
// and are skipped.
export const buildRss = (
  channel: Channel,
  entries: Artikel[],
  kategoriName: (slug: string) => string,
) => {
  const items = entries
    .filter((entry) => entry.publishedAt)
    .map((entry) => {
      const link = `${channel.siteUrl}/blog/${entry.slug}`;
      return `    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(entry.excerpt)}</description>
      <pubDate>${new Date(entry.publishedAt!).toUTCString()}</pubDate>
      <category>${escapeXml(kategoriName(entry.kategori))}</category>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(channel.title)}</title>
    <link>${channel.siteUrl}/blog</link>
    <description>${escapeXml(channel.description)}</description>
    <language>id-ID</language>
    <atom:link href="${channel.siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
};
