export const konsultasiAdmins = [
  { name: "Asyah", phone: "6281215523902" },
  { name: "Nevita", phone: "6285815095359" },
  { name: "Putri", phone: "6285724543040" },
  { name: "Sari", phone: "6285712217876" },
] as const;

// The Nomor Call Center: the one published phone number, identical in the
// footer and JSON-LD (NAP consistency). Konsultasi links still rotate daily.
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
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], label: "Senin–Jumat", opens: "08:00", closes: "17:00" },
  { days: ["Saturday"], label: "Sabtu", opens: "08:00", closes: "14:00" },
] as const;

export const officeHoursText = officeHours
  .map(({ label, opens, closes }) => `${label} ${opens.replace(":", ".")}–${closes.replace(":", ".")} WIB`)
  .join(", ");

export const getKonsultasiUrl = (
  topic = "Bimbel Akademi ASN",
  now = Date.now(),
): string => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!siteUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be set to the site's absolute URL.");
  }

  // Day boundary: 00:00 UTC (07:00 WIB).
  const admin = konsultasiAdmins[Math.floor(now / 86_400_000) % 4];
  const message = `Halo Kak ${admin.name} ${siteUrl}, Saya ingin bertanya tentang ${topic}. Mohon info selengkapnya...`;

  return `https://api.whatsapp.com/send?phone=${admin.phone}&text=${encodeURIComponent(message)}`;
};
