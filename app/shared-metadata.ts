import type { Metadata } from "next";

import { callCenterPhone, officeHours } from "@/data/contact";

const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
if (!envSiteUrl) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be set to the site's absolute URL.",
  );
}

export const siteUrl = envSiteUrl.replace(/\/+$/, "");

// Metadata merges shallowly: a page that sets `openGraph` drops the layout's
// copy, so pages spread this base and add their own `url`.
export const openGraphBase = {
  siteName: "Akademi ASN",
  locale: "id_ID",
  type: "website",
  images: [
    {
      url: "/img/section/og-bimbel-cpns-pppk-bumn-terbaik-akademi-asn.jpeg",
      width: 1200,
      height: 630,
      alt: "Bimbel CPNS PPPK BUMN Online & Offline Terbaik Akademi ASN",
    },
  ],
} satisfies Metadata["openGraph"];

// Blog pages advertise the feed to readers and crawlers.
export const rssAlternate = { "application/rss+xml": "/blog/rss.xml" };

// Listing pages: every page canonical to itself.
export const listingMetadata = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) =>
  ({
    title,
    description,
    alternates: { canonical: path, types: rssAlternate },
    openGraph: { ...openGraphBase, url: path, title, description },
  }) satisfies Metadata;

export const edumatrix = {
  "@type": "Organization",
  name: "Edumatrix Indonesia",
  url: "https://edumatrix-indonesia.com/",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Akademi ASN",
      url: siteUrl,
      logo: `${siteUrl}/img/logo/logo-utama-akademi-asn.webp`,
      image: `${siteUrl}/img/section/og-bimbel-cpns-pppk-bumn-terbaik-akademi-asn.jpeg`,
      telephone: callCenterPhone.e164,
      openingHoursSpecification: officeHours.map(({ days, opens, closes }) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days.length === 1 ? days[0] : days,
        opens: `${opens}:00`,
        closes: `${closes}:00`,
      })),
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Ruko Permai Monjali, Jalan Monjali No 3, Kutu Dukuh, Sinduadi, Mlati",
        addressLocality: "Sleman",
        addressRegion: "DI Yogyakarta",
        postalCode: "55241",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -7.7695229,
        longitude: 110.3685709,
      },
      sameAs: [
        "https://www.instagram.com/akademiasnofficial",
        "https://www.tiktok.com/@akademi.asn",
      ],
      parentOrganization: edumatrix,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Akademi ASN",
      alternateName: "Akademi ASN by Edumatrix",
      url: siteUrl,
      inLanguage: "id-ID",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};
