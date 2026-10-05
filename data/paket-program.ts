import type { PaketProgramProps } from "@/components/sections/paket-program";
import { formatRupiah } from "@/lib/utils";

const offlineIncluded = [
  "Sistem Belajar Kelas",
  "Progress Report",
  "Free Assesment",
  "Tutor Datang ke Rumah/Office",
  "E-Book soal & Pembahasan",
];

// The Paket Program privat prices and session counts. FAQ copy derives from
// these; see docs/business-facts.md.
export const paketPrivat = [
  { name: "Optima", sessions: 8, price: "Rp1.960.000", originalPrice: "Rp2.000.000", tryouts: 1 },
  { name: "Maxima", sessions: 12, price: "Rp2.793.000", originalPrice: "Rp2.800.000", tryouts: 2 },
  { name: "Ultima", sessions: 24, price: "Rp5.292.000", originalPrice: "Rp5.300.000", tryouts: 3 },
] as const;

const privatePrices = paketPrivat.map(({ price }) => Number(price.replace(/\D/g, "")));
export const bimbelPrivatPriceRange =
  `${formatRupiah(Math.min(...privatePrices))}–${formatRupiah(Math.max(...privatePrices))} (bimbel privat)`;

export const paketProgram = (konsultasiUrl: string) =>
  ({
    title: "Paket Program Akademi ASN",
    offlineTitle: "Program Bimbel Offline",
    onlineTitle: "Program Bimbel Online & Tryout",
    backgroundImage: "/img/section/bg-bimbel-cpns-pppk-bumn.webp",
    offlinePackages: paketPrivat.map(
      ({ name, sessions, price, originalPrice, tryouts }) => ({
        name,
        sessions: `${sessions} Sesi Pembelajaran`,
        price,
        originalPrice,
        headerImage: `/img/section/paket-${name.toLowerCase()}-bimbel-cpns-pppk-bumn-terbaik.webp`,
        included: [
          `${sessions} Sesi Pembelajaran`,
          `Gratis Tryout ${tryouts}x`,
          ...offlineIncluded,
        ],
        ctaLabel: "Tanyakan Kelas",
        ctaHref: konsultasiUrl,
      }),
    ),
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

// Privat Home Visit is available anywhere, so the offline heading can name
// any location.
export const paketProgramLocation = (konsultasiUrl: string, location: string) =>
  ({
    ...paketProgram(konsultasiUrl),
    offlineTitle: `Program Bimbel Privat di ${location}`,
  }) satisfies PaketProgramProps;
