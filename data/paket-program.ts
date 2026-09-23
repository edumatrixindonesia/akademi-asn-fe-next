import type { PaketProgramProps } from "@/components/sections/paket-program";

const offlineIncluded = [
  "Sistem Belajar Kelas",
  "Progress Report",
  "Free Assesment",
  "Tutor Datang ke Rumah/Office",
  "E-Book soal & Pembahasan",
];

export const paketProgramHome = (konsultasiUrl: string) =>
  ({
    title: "Paket Program Akademi ASN",
    offlineTitle: "Program Bimbel Offline",
    onlineTitle: "Program Bimbel Online & Tryout",
    backgroundImage: "/img/section/bg-bimbel-cpns-pppk-bumn.webp",
    offlinePackages: [
      {
        name: "Optima",
        sessions: "8 Sesi Pembelajaran",
        price: "Rp1.960.000",
        originalPrice: "Rp2.000.000",
        headerImage:
          "/img/section/paket-optima-bimbel-cpns-pppk-bumn-terbaik.webp",
        included: [
          "8 Sesi Pembelajaran",
          "Gratis Tryout 1x",
          ...offlineIncluded,
        ],
        ctaLabel: "Tanyakan Kelas",
        ctaHref: konsultasiUrl,
      },
      {
        name: "Maxima",
        sessions: "12 Sesi Pembelajaran",
        price: "Rp2.793.000",
        originalPrice: "Rp2.800.000",
        headerImage:
          "/img/section/paket-maxima-bimbel-cpns-pppk-bumn-terbaik.webp",
        included: [
          "12 Sesi Pembelajaran",
          "Gratis Tryout 2x",
          ...offlineIncluded,
        ],
        ctaLabel: "Tanyakan Kelas",
        ctaHref: konsultasiUrl,
      },
      {
        name: "Ultima",
        sessions: "24 Sesi Pembelajaran",
        price: "Rp5.292.000",
        originalPrice: "Rp5.300.000",
        headerImage:
          "/img/section/paket-ultima-bimbel-cpns-pppk-bumn-terbaik.webp",
        included: [
          "24 Sesi Pembelajaran",
          "Gratis Tryout 3x",
          ...offlineIncluded,
        ],
        ctaLabel: "Tanyakan Kelas",
        ctaHref: konsultasiUrl,
      },
    ],
    onlinePackages: [
      {
        name: "Bootcamp Online",
        sessions: "24 Sesi Intensif",
        included: [
          "Tryout Mingguan",
          "Grup Diskusi",
          "Progress Report Bulanan",
          "One Assesment",
          "E-Book Soal & Pembahasan",
        ],
        ctaLabel: "Tanyakan Kelas",
        ctaHref: konsultasiUrl,
      },
      {
        name: "Paket Tryout 1",
        sessions: "1 Paket Tryout",
        included: ["1 Paket Tryout"],
        ctaLabel: "Tanyakan Kelas",
        ctaHref: konsultasiUrl,
      },
      {
        name: "Paket Tryout 5",
        sessions: "5 Paket Tryout",
        included: ["5 Paket Tryout"],
        ctaLabel: "Tanyakan Kelas",
        ctaHref: konsultasiUrl,
      },
    ],
  }) satisfies PaketProgramProps;
