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

const defaultKonsultasiTopic = "Bimbel Akademi ASN";

// Giliran Konsultasi start at 08.00, 13.00, and 17.00 WIB (01:00, 06:00,
// 10:00 UTC). The order carries over across days; the 08.00 WIB Giliran on
// 2026-10-15 belongs to the first admin (docs/adr/0004-konsultasi-redirect-route.md).
const anchorDay = Date.UTC(2026, 9, 15) / 86_400_000;

export const getKonsultasiAdmin = (now = Date.now()) => {
  // Shift the clock so a rotation day starts at 08.00 WIB (01:00 UTC); the
  // Giliran then start 0, 5, and 9 hours into it.
  const shifted = now - 3_600_000;
  const day = Math.floor(shifted / 86_400_000) - anchorDay;
  const hour = new Date(shifted).getUTCHours();
  const giliran = day * 3 + (hour < 5 ? 0 : hour < 9 ? 1 : 2);
  const count = konsultasiAdmins.length;

  return konsultasiAdmins[((giliran % count) + count) % count];
};

// Konsultasi links point to the /konsultasi route, which picks the admin at
// click time, so pages can stay statically rendered.
export const getKonsultasiUrl = (topic = defaultKonsultasiTopic): string =>
  `/konsultasi?${new URLSearchParams({ topik: topic })}`;

export const getKonsultasiWhatsappUrl = (
  topic = defaultKonsultasiTopic,
  now = Date.now(),
): string => {
  const admin = getKonsultasiAdmin(now);
  const message = `Halo Kak ${admin.name} ${siteUrl}, Saya ingin bertanya tentang ${topic}. Mohon info selengkapnya...`;

  return `https://api.whatsapp.com/send?phone=${admin.phone}&text=${encodeURIComponent(message)}`;
};
