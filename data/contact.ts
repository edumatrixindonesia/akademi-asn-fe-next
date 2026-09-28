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

// The Akademi ASN office, where Kelas Offline is held. Keep it identical
// everywhere it appears (NAP consistency for local search).
export const officeAddress =
  "Ruko Permai Monjali, Jalan Monjali No 3, Kutu Dukuh, Sinduadi, Mlati, Sleman, Yogyakarta 55241";

export const getKonsultasiUrl = (now = Date.now()): string => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!siteUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be set to the site's absolute URL.");
  }

  const admin = konsultasiAdmins[Math.floor(now / 86_400_000) % 4];
  const message = `Halo Kak ${admin.name} ${siteUrl}, Saya ingin bertanya tentang Bimbel Akademi ASN. Mohon info selengkapnya...`;

  return `https://api.whatsapp.com/send?phone=${admin.phone}&text=${encodeURIComponent(message)}`;
};
