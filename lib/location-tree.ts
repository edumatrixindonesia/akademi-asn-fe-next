export type Region = { kode: string; nama: string; slug: string; path: string };

// The region-service lists that make up the page set: every province and
// regency, districts of Kabupaten Besar, and villages of Jabodetabekjur.
export type RegionLists = {
  provinsi: Region[];
  kabupaten: Region[];
  kecamatan: Region[];
  kelurahan: Region[];
};

export type ResolvedLocation = {
  region: Region;
  ancestors: Region[];
  children: Region[];
  siblings: Region[];
};

type LocationNode = { region: Region; parent?: LocationNode; children: Region[] };

export type LocationTree = { provinces: Region[]; nodes: Map<string, LocationNode> };

const parentPath = (path: string) => path.slice(0, path.lastIndexOf("/"));

export const buildLocationTree = (lists: RegionLists): LocationTree => {
  const nodes = new Map<string, LocationNode>();
  const provinces: Region[] = [];

  // Levels go top-down, so a region is added only when its parent is in the
  // page set. That drops, e.g., districts of a regency outside Kabupaten Besar.
  for (const level of [lists.provinsi, lists.kabupaten, lists.kecamatan, lists.kelurahan]) {
    for (const raw of level) {
      const region = { ...raw, nama: raw.nama.trim() };
      const parent = level === lists.provinsi ? undefined : nodes.get(parentPath(region.path));
      if (level !== lists.provinsi && !parent) continue;

      nodes.set(region.path, { region, parent, children: [] });
      (parent ? parent.children : provinces).push(region);
    }
  }

  return { provinces, nodes };
};

export const resolveLocation = (
  tree: LocationTree,
  slugs: string[],
): ResolvedLocation | undefined => {
  const node = tree.nodes.get(`/${slugs.join("/")}`);
  if (!node) return undefined;

  const ancestors: Region[] = [];
  for (let up = node.parent; up; up = up.parent) ancestors.unshift(up.region);

  const siblings = (node.parent ? node.parent.children : tree.provinces).filter(
    (region) => region !== node.region,
  );

  return { region: node.region, ancestors, children: node.children, siblings };
};

// District and village names repeat across regencies, so below the province
// level the parent's name is added ("Coblong, Kota Bandung").
export const locationLabel = ({ region, ancestors }: ResolvedLocation) => {
  const parent = ancestors.at(-1);
  return parent ? `${region.nama}, ${parent.nama}` : region.nama;
};

// The location named in titles and h1s: provinces and regencies stand alone
// (names are unique there), districts and villages keep the parent.
export const headlineLabel = (location: ResolvedLocation) =>
  location.ancestors.length < 2 ? location.region.nama : locationLabel(location);

// What a region's level is called, indexed by its depth (ancestors.length).
export const regionLevels = ["provinsi", "kabupaten/kota", "kecamatan", "kelurahan/desa"];

// A link to a region's location page within a page family ("" for home).
export const regionLink = (basePath: string) => (region: Region) => ({
  name: region.nama,
  href: `${basePath}${region.path}`,
});
