import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AVIF is ~20% smaller than WebP; browsers without AVIF still get WebP.
  images: { formats: ["image/avif", "image/webp"] },
  // Page 1 of a paginated listing lives at its base URL.
  async redirects() {
    return [
      { source: "/blog/page/1", destination: "/blog", permanent: true },
      {
        source: "/blog/kategori/:slug/page/1",
        destination: "/blog/kategori/:slug",
        permanent: true,
      },
      {
        source: "/blog/penulis/:slug/page/1",
        destination: "/blog/penulis/:slug",
        permanent: true,
      },
    ];
  },
};

// Turbopack takes plugins by name, since functions can't cross into Rust.
const withMDX = createMDX({ options: { remarkPlugins: ["remark-gfm"] } });

export default withMDX(nextConfig);
