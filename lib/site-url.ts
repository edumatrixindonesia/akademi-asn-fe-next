const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
if (!envSiteUrl) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be set to the site's absolute URL.",
  );
}

// The site's absolute URL without a trailing slash.
export const siteUrl = envSiteUrl.replace(/\/+$/, "");
