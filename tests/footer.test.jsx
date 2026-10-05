import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";

import Footer from "../components/layouts/footer";
import { getKonsultasiUrl } from "../data/contact";
import { footerDefault } from "../data/footer";

test("Call Center link always opens published number", () => {
  const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  process.env.NEXT_PUBLIC_SITE_URL = "https://akademi-asn.test";

  try {
    const adminUrl = new URL(getKonsultasiUrl(undefined, 86_400_000));
    const html = renderToStaticMarkup(<Footer {...footerDefault()} />);

    expect(adminUrl.searchParams.get("phone")).toBe("6285815095359");
    expect(html).toContain('aria-label="Chat via WhatsApp 0812-1552-3902"');
    expect(html).toContain('href="https://wa.me/6281215523902"');
    expect(html).not.toContain(`phone=${adminUrl.searchParams.get("phone")}`);
  } finally {
    if (originalSiteUrl === undefined) {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
    }
  }
});
