import type { ExamTrack, Image } from "@/lib/artikel-schema";

// The default Artikel cover, picked by the Artikel's first exam track.
export const artikelCover = {
  cpns: {
    src: "/img/blog/cover-cpns.jpg",
    alt: "Artikel seleksi CPNS dari Akademi ASN",
  },
  pppk: {
    src: "/img/blog/cover-pppk.jpg",
    alt: "Artikel seleksi PPPK dari Akademi ASN",
  },
  bumn: {
    src: "/img/blog/cover-bumn.jpg",
    alt: "Artikel Rekrutmen Bersama BUMN dari Akademi ASN",
  },
} satisfies Record<ExamTrack, Image>;
