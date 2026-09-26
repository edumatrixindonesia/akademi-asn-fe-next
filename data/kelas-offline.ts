import type { KelasOfflineProps } from "@/components/sections/kelas-offline";
import { officeAddress } from "@/data/contact";
import { locationLabel, type ResolvedLocation } from "@/lib/location-tree";

// region-service `kode` of DI Yogyakarta, the only province with Kelas Offline.
const diYogyakarta = "34";

// Kelas Offline content for location pages under DI Yogyakarta; undefined
// for every other region.
export const kelasOfflineLocation = (location: ResolvedLocation) => {
  if ((location.ancestors[0] ?? location.region).kode !== diYogyakarta) return undefined;

  return {
    title: "Kelas Offline di Kantor Akademi ASN",
    description: `Peserta dari ${locationLabel(location)} bisa belajar langsung di kantor Akademi ASN di Sleman lewat Kelas Offline, selain Privat Home Visit dan kelas online. Kantor buka Senin–Jumat 08.00–17.00 WIB dan Sabtu 08.00–14.00 WIB.`,
    address: officeAddress,
  } satisfies KelasOfflineProps;
};
