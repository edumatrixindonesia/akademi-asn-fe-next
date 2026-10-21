import { siteUrl } from "@/lib/site-url";

export const konsultasiAdmins = [
  { name: "Asyah", phone: "6281215523902" },
  { name: "Nevita", phone: "6285815095359" },
  { name: "Putri", phone: "6285724543040" },
  { name: "Ista", phone: "6285712217876" },
] as const;

// The Nomor Call Center: the one published phone number, identical in the
// footer and JSON-LD (NAP consistency). Konsultasi links still rotate.
export const callCenterPhone = {
  e164: "+6281215523902",
  display: "0812-1552-3902",
};

// Official support inbox, approved by management on 2026-10-08.
export const supportEmail = "edumatrix.id@gmail.com";

// The Akademi ASN office, where Kelas Offline is held. Keep it identical
// everywhere it appears (NAP consistency for local search).
export const officeAddress =
  "Ruko Permai Monjali, Jalan Monjali No 3, Kutu Dukuh, Sinduadi, Mlati, Sleman, Yogyakarta 55241";

// Office opening hours. The FAQ text and the JSON-LD both derive
// from this list.
export const officeHours = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    label: "Senin–Jumat",
    opens: "08:00",
    closes: "17:00",
  },
  { days: ["Saturday"], label: "Sabtu", opens: "08:00", closes: "14:00" },
] as const;

export const officeHoursText = officeHours
  .map(
    ({ label, opens, closes }) =>
      `${label} ${opens.replace(":", ".")}–${closes.replace(":", ".")} WIB`,
  )
  .join(", ");

// The page part of each Topik Konsultasi (CONTEXT.md).
export const konsultasiPage = {
  home: "Bimbel Akademi ASN",
  cpns: "Bimbel CPNS Akademi ASN",
  pppk: "Bimbel PPPK Akademi ASN",
  bumn: "Bimbel BUMN Akademi ASN",
  produk: "Produk Akademi ASN",
} as const;

const defaultKonsultasiTopic = konsultasiPage.home;

// Giliran Konsultasi start at 00.00 and 12.00 WIB (17:00 and 05:00 UTC). The
// 00.00 WIB Giliran on 2026-10-22 belongs to Nevita
// (docs/adr/0004-konsultasi-redirect-route.md).
const anchorDay = Date.UTC(2026, 9, 22) / 86_400_000;
const anchorAdmin = 1;

export const getKonsultasiAdmin = (now = Date.now()) => {
  // Shift the clock to WIB (UTC+7) so a rotation day starts at 00.00 WIB.
  const shifted = now + 7 * 3_600_000;
  const day = Math.floor(shifted / 86_400_000) - anchorDay;
  const giliran = new Date(shifted).getUTCHours() < 12 ? 0 : 1;
  // Each day advances the order by 3 (2 Giliran plus 1 skipped admin): with
  // 4 admins and 2 Giliran, a step of 2 would pin each admin to one Giliran.
  const index = anchorAdmin + day * 3 + giliran;
  const count = konsultasiAdmins.length;

  return konsultasiAdmins[((index % count) + count) % count];
};

// Konsultasi links point to the /konsultasi route, which picks the admin at
// click time, so pages can stay statically rendered.
export const getKonsultasiUrl = (topic: string = defaultKonsultasiTopic): string =>
  `/konsultasi?${new URLSearchParams({ topik: topic })}`;

export type KonsultasiUrl = (offer?: string) => string;

// Konsultasi links for one page: the offer a call to action is about comes
// first ("Program Optima Bimbel CPNS Akademi ASN wilayah Coblong, Kota Bandung").
export const pageKonsultasiUrl =
  (page: string, location?: string): KonsultasiUrl =>
  (offer) =>
    getKonsultasiUrl(
      [offer, page, location && `wilayah ${location}`].filter(Boolean).join(" "),
    );

export const getKonsultasiWhatsappUrl = (
  topic: string = defaultKonsultasiTopic,
  now = Date.now(),
): string => {
  const admin = getKonsultasiAdmin(now);
  const message = `Halo Kak ${admin.name} ${siteUrl}, Saya ingin bertanya tentang ${topic}. Mohon info selengkapnya...`;

  return `https://api.whatsapp.com/send?phone=${admin.phone}&text=${encodeURIComponent(message)}`;
};
