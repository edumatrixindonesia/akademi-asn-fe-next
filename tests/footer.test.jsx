import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";

import Footer from "../components/layouts/footer";
import { footerDefault } from "../data/footer";

test("Call Center link always opens published number", () => {
  const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  process.env.NEXT_PUBLIC_SITE_URL = "https://akademi-asn.test";

  try {
    const html = renderToStaticMarkup(<Footer {...footerDefault()} />);

    expect(html).toContain('aria-label="Chat via WhatsApp 0812-1552-3902"');
    expect(html).toContain('href="https://wa.me/6281215523902"');
    // No rotating Admin Konsultasi number is baked into the footer.
    expect(html).not.toContain("api.whatsapp.com/send?phone=");
  } finally {
    if (originalSiteUrl === undefined) {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
    }
  }
});
