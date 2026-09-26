import type { JangkauanProps } from "@/components/sections/jangkauan";
import {
  regionLevels,
  regionLink,
  type Region,
  type ResolvedLocation,
} from "@/lib/location-tree";

const jangkauan = (
  track: string,
  basePath: string,
  area: string,
  level: string,
  regions: Region[],
) =>
  ({
    title: `Jangkauan ${track} di ${area}`,
    description: `Pilih ${level} Anda untuk melihat program ${track} Akademi ASN di daerah Anda.`,
    items: regions.map(regionLink(basePath)),
  }) satisfies JangkauanProps;

const jangkauanLanding = (track: string, basePath: string) => (provinces: Region[]) =>
  jangkauan(track, basePath, "Seluruh Indonesia", regionLevels[0], provinces);

const jangkauanLocation =
  (track: string, basePath: string) =>
  ({ region, ancestors, children }: ResolvedLocation) =>
    jangkauan(track, basePath, region.nama, regionLevels[ancestors.length + 1], children);

export const jangkauanHome = jangkauanLanding("Bimbel CPNS, PPPK & BUMN", "");
export const jangkauanCpns = jangkauanLanding("Bimbel CPNS", "/bimbel-cpns");
export const jangkauanPppk = jangkauanLanding("Bimbel PPPK", "/bimbel-pppk");
export const jangkauanBumn = jangkauanLanding("Bimbel BUMN", "/bimbel-bumn");

export const jangkauanHomeLocation = jangkauanLocation("Bimbel CPNS, PPPK & BUMN", "");
export const jangkauanCpnsLocation = jangkauanLocation("Bimbel CPNS", "/bimbel-cpns");
export const jangkauanPppkLocation = jangkauanLocation("Bimbel PPPK", "/bimbel-pppk");
export const jangkauanBumnLocation = jangkauanLocation("Bimbel BUMN", "/bimbel-bumn");
