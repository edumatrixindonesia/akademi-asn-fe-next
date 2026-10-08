// Real customer reviews. Consent is on file; the source of each review is kept
// in docs/private/ulasan-sumber.md (gitignored, not published).
type ProductReviewInput = {
  author: string;
  reviewBody: string;
  datePublished: string;
  ratingValue: number;
};

export const reviewsTryoutCpns: ProductReviewInput[] = [
  {
    author: "D. M.",
    reviewBody:
      "Simulasinya mirip banget sama tes CAT aslinya! Soalnya ada banyak sampai 500 lebih, jadi puas buat latihan tiap hari. Fitur ranking nasionalnya juga bikin makin termotivasi buat belajar.",
    datePublished: "2026-09-10",
    ratingValue: 5,
  },
  {
    author: "A. R. M.",
    reviewBody:
      "Harganya murah cuma 30 ribu tapi kualitas soalnya lumayan menantang. Pembahasannya juga gampang dimengerti. Cuma masa aktif 30 hari rasanya agak kurang lama.",
    datePublished: "2026-09-15",
    ratingValue: 4,
  },
  {
    author: "T. S.",
    reviewBody:
      "Sangat membantu buat persiapan tes. Website-nya lancar pas dipakai simulasi. Pembahasan soal TIU-nya ngasih cara cepat yang belum pernah aku tahu. Recommended!",
    datePublished: "2026-09-22",
    ratingValue: 5,
  },
  {
    author: "S.",
    reviewBody:
      "Worth it parah dengan harga segitu dapet fasilitas yang lengkap. Soal-soal TWK-nya juga update banget sama isu terkini.",
    datePublished: "2026-09-28",
    ratingValue: 5,
  },
  {
    author: "P. M. I.",
    reviewBody:
      "Bagus buat ngukur kemampuan sebelum tes asli. Tapi kadang pas mau lihat hasil ranking loadingnya lumayan lama kalau pas lagi rame yang akses. Overall bagus.",
    datePublished: "2026-10-02",
    ratingValue: 4,
  },
];

export const reviewsEbookModulCpns: ProductReviewInput[] = [
  {
    author: "W. M.",
    reviewBody:
      "Materinya super lengkap ada 300 halaman tapi diringkas dengan rapi jadi ngga bosen bacanya. Tips & trik ngerjain soalnya kepake banget buat yang baru pertama kali ikut tes CPNS.",
    datePublished: "2026-09-18",
    ratingValue: 5,
  },
  {
    author: "E. M.",
    reviewBody:
      "Enak dibaca lewat HP atau tablet pas lagi di jalan. Ringkasan materinya to the point. Sayangnya cuma ada format PDF, kalau ada versi buku cetaknya pasti aku beli juga.",
    datePublished: "2026-09-25",
    ratingValue: 4,
  },
  {
    author: "F. F. T.",
    reviewBody:
      "Harga 50 ribu sangat worth it untuk ilmu sebanyak ini. Penjelasan materi TIU dan TKP-nya juara, bahasanya ringan dan mudah dipahami.",
    datePublished: "2026-10-05",
    ratingValue: 5,
  },
];

export const reviewsPaketHematKomplit: ProductReviewInput[] = [
  {
    author: "R.",
    reviewBody:
      "Pilihan paling cerdas sih ini. Hemat 10 ribu udah dapet e-book sama tryoutnya sekaligus. Habis baca materi di PDF langsung gas latihan di tryout. Mantap min!",
    datePublished: "2026-09-20",
    ratingValue: 5,
  },
  {
    author: "R. A.",
    reviewBody:
      "Benar-benar komplit. Beli paket ini udah ngga perlu repot cari buku referensi lain. Simulasi tryoutnya lancar dan materi e-booknya sinkron sama soal-soal tryout.",
    datePublished: "2026-10-01",
    ratingValue: 5,
  },
  {
    author: "A. R.",
    reviewBody:
      "Paketnya hemat dan kualitasnya nggak kaleng-kaleng. Cuma saran aja, khusus yang beli paket komplit, masa aktif tryoutnya dibikin 60 hari biar belajarnya bisa lebih santai.",
    datePublished: "2026-10-06",
    ratingValue: 4,
  },
];

const bestRating = 5;
const worstRating = 1;

// Shape consumed by ProductDetails and by the Product JSON-LD in the sections.
export const productDetails = (reviews: ProductReviewInput[]) => {
  const review = reviews.map(
    ({ author, reviewBody, datePublished, ratingValue }) => ({
      "@type": "Review",
      author: { "@type": "Person", name: author },
      reviewBody,
      datePublished,
      reviewRating: {
        "@type": "Rating",
        ratingValue,
        bestRating,
        worstRating,
      },
    }),
  );

  const average =
    reviews.reduce((sum, entry) => sum + entry.ratingValue, 0) / reviews.length;

  return {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Math.round(average * 10) / 10,
      reviewCount: review.length,
      ratingCount: review.length,
      bestRating,
      worstRating,
    },
    review,
  };
};

export type ProductDetailsData = ReturnType<typeof productDetails>;
