// `nama_singkat` is the display name ("Bogor" for Kota Bogor); `nama` stays
// full ("Kabupaten Sleman") for the Intro, where a parent shares the name.
export type Region = { kode: string; nama: string; nama_singkat: string; slug: string; path: string };

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
    for (const region of level) {
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

// Below the province level the parent's short name follows ("Cengkareng
// Jakarta Barat"), matching how people type the query. A name that already
// ends with its parent's ("Gambir" in Gambir, "Kota Jambi" in Jambi) stands
// alone; the owner accepts the few duplicate titles this causes.
export const locationLabel = ({ region, ancestors }: ResolvedLocation) => {
  const name = region.nama_singkat;
  const parentName = ancestors.at(-1)?.nama_singkat;
  return !parentName || name === parentName || name.endsWith(` ${parentName}`)
    ? name
    : `${name} ${parentName}`;
};

// The location named in titles and h1s: provinces and regencies stand alone
// (names are unique there); districts and villages use `locationLabel`.
export const headlineLabel = (location: ResolvedLocation) =>
  location.ancestors.length < 2 ? location.region.nama_singkat : locationLabel(location);

// What a region's level is called, indexed by its depth (ancestors.length).
export const regionLevels = ["provinsi", "kabupaten/kota", "kecamatan", "kelurahan/desa"];

// A link to a region's location page within a page family ("" for home).
export const regionLink = (basePath: string) => (region: Region) => ({
  name: region.nama_singkat,
  href: `${basePath}${region.path}`,
});
