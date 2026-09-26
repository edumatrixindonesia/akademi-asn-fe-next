import type { LokasiLainProps } from "@/components/sections/lokasi-lain";
import { regionLevels, regionLink, type ResolvedLocation } from "@/lib/location-tree";

const lokasiLainLocation =
  (track: string, basePath: string) =>
  ({ ancestors, siblings }: ResolvedLocation) => {
    const parent = ancestors.at(-1);
    const level = regionLevels[ancestors.length];
    return {
      title: parent ? `Lokasi lain di ${parent.nama}` : "Provinsi lain",
      description: `${track} Akademi ASN juga tersedia di ${level} lain di ${parent?.nama ?? "Indonesia"}.`,
      items: siblings.map(regionLink(basePath)),
    } satisfies LokasiLainProps;
  };

export const lokasiLainHomeLocation = lokasiLainLocation("Bimbel CPNS, PPPK & BUMN", "");
export const lokasiLainCpnsLocation = lokasiLainLocation("Bimbel CPNS", "/bimbel-cpns");
export const lokasiLainPppkLocation = lokasiLainLocation("Bimbel PPPK", "/bimbel-pppk");
export const lokasiLainBumnLocation = lokasiLainLocation("Bimbel BUMN", "/bimbel-bumn");
