import type { PaketProgramProps } from "@/components/sections/paket-program";
import type { KonsultasiUrl } from "@/data/contact";
import { formatRupiah } from "@/lib/utils";

const privatIncluded = [
  "Kelas Online atau Kelas Offline",
  "Sistem Belajar Kelas",
  "Progress Report",
  "Free Assesment",
  "Tutor Datang ke Rumah/Office",
  "E-Book soal & Pembahasan",
];

// The Paket Program privat prices and session counts. FAQ copy derives from
// these; see docs/business-facts.md.
export const paketPrivat = [
  { name: "Optima", sessions: 10, onlinePrice: "Rp2.200.000", offlinePrice: "Rp2.500.000", tryouts: 1 },
  { name: "Maxima", sessions: 14, onlinePrice: "Rp3.080.000", offlinePrice: "Rp3.430.000", tryouts: 2 },
  { name: "Ultima", sessions: 20, onlinePrice: "Rp4.180.000", offlinePrice: "Rp4.650.000", tryouts: 3 },
] as const;

export const menitPerSesiPrivat = 90;

const privatePrices = paketPrivat.flatMap(({ onlinePrice, offlinePrice }) =>
  [onlinePrice, offlinePrice].map((price) => Number(price.replace(/\D/g, ""))),
);
export const bimbelPrivatPriceRange =
  `${formatRupiah(Math.min(...privatePrices))}–${formatRupiah(Math.max(...privatePrices))} (bimbel privat)`;

export const paketProgram = (konsultasiUrl: KonsultasiUrl) =>
  ({
    title: "Paket Program Akademi ASN",
    privatTitle: "Program Bimbel Privat",
    onlineTitle: "Program Bimbel Online & Tryout",
    backgroundImage: "/img/section/bg-bimbel-cpns-pppk-bumn.webp",
    privatPackages: paketPrivat.map(
      ({ name, sessions, onlinePrice, offlinePrice, tryouts }) => ({
        name,
        sessions: `${sessions}x Sesi Belajar · ${menitPerSesiPrivat} Menit`,
        prices: [
          { label: "Online", amount: onlinePrice },
          { label: "Offline", amount: offlinePrice },
        ],
        headerImage: `/img/section/paket-${name.toLowerCase()}-bimbel-cpns-pppk-bumn-terbaik.webp`,
        included: [
          `${sessions}x Sesi Belajar`,
          `Gratis Tryout ${tryouts}x`,
          ...privatIncluded,
        ],
        ctaLabel: "Tanyakan Kelas",
        ctaHref: konsultasiUrl(`Program ${name}`),
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
        ctaHref: konsultasiUrl("Program Bootcamp Online"),
      },
      {
        name: "Paket Tryout 1",
        sessions: "1 Paket Tryout",
        included: ["1 Paket Tryout"],
        ctaLabel: "Tanyakan Kelas",
        ctaHref: konsultasiUrl("Paket Tryout 1"),
      },
      {
        name: "Paket Tryout 5",
        sessions: "5 Paket Tryout",
        included: ["5 Paket Tryout"],
        ctaLabel: "Tanyakan Kelas",
        ctaHref: konsultasiUrl("Paket Tryout 5"),
      },
    ],
  }) satisfies PaketProgramProps;

// Privat Home Visit is available anywhere, so the privat heading can name
// any location.
export const paketProgramLocation = (konsultasiUrl: KonsultasiUrl, location: string) =>
  ({
    ...paketProgram(konsultasiUrl),
    privatTitle: `Program Bimbel Privat di ${location}`,
  }) satisfies PaketProgramProps;
