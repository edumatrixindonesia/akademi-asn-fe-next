export const konsultasiAdmins = [
  { name: "Asyah", phone: "6281215523902" },
  { name: "Nevita", phone: "6285815095359" },
  { name: "Putri", phone: "6285724543040" },
  { name: "Sari", phone: "6285712217876" },
] as const;

export const getKonsultasiUrl = (now = Date.now()): string => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!siteUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be set to the site's absolute URL.");
  }

  const admin = konsultasiAdmins[Math.floor(now / 3_600_000) % 4];
  const message = `Halo Kak ${admin.name} ${siteUrl}, Saya ingin bertanya tentang Bimbel Akademi ASN. Mohon info selengkapnya...`;

  return `https://api.whatsapp.com/send?phone=${admin.phone}&text=${encodeURIComponent(message)}`;
};
