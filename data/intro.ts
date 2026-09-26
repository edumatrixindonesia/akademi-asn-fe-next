import type { IntroProps } from "@/components/sections/intro";
import type { ResolvedLocation } from "@/lib/location-tree";

// Hand-written base texts, keyed by region `kode` (stable across slug
// changes). Each one lands here after the owner reviews it; any region
// without an entry falls back to the template in `baseText`.
export const introTexts: Record<string, string> = {};

const baseText = ({ region, ancestors }: ResolvedLocation, texts: Record<string, string>) =>
  texts[region.kode] ??
  `${region.nama} berada di ${ancestors.at(-1)?.nama ?? "Indonesia"}. Peserta dari ${region.nama} bisa belajar bersama Akademi ASN lewat kelas online atau les privat dengan tutor yang datang ke rumah.`;

const introLocation =
  (track: string, trackSentence: (nama: string) => string) =>
  (location: ResolvedLocation, texts = introTexts) =>
    ({
      title: `${track} di ${location.region.nama}`,
      description: `${baseText(location, texts)} ${trackSentence(location.region.nama)}`,
    }) satisfies IntroProps;

export const introHomeLocation = introLocation(
  "Bimbel CPNS, PPPK & BUMN",
  (nama) =>
    `Formasi CPNS, PPPK, dan lowongan Rekrutmen Bersama BUMN terbuka untuk pelamar dari ${nama}, dan persaingannya ketat, jadi persiapan sejak awal akan sangat membantu.`,
);

export const introCpnsLocation = introLocation(
  "Bimbel CPNS",
  (nama) =>
    `Formasi CPNS di ${nama} diperebutkan banyak pelamar, jadi kuasai TWK, TIU, dan TKP untuk melewati passing grade SKD.`,
);

export const introPppkLocation = introLocation(
  "Bimbel PPPK",
  (nama) =>
    `Formasi PPPK di ${nama} dibuka untuk guru, tenaga kesehatan, dan tenaga teknis, jadi siapkan kompetensi teknis, manajerial, sosial kultural, dan wawancara sejak dini.`,
);

export const introBumnLocation = introLocation(
  "Bimbel BUMN",
  (nama) =>
    `Pelamar Rekrutmen Bersama BUMN dari ${nama} bersaing secara nasional, jadi latih TKD, AKHLAK, dan Learning Agility sebelum tes dimulai.`,
);
