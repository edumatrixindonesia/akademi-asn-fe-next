// Shared by the Daftar isi (built from the MDX source) and the rendered
// headings, so anchors and ids always agree.
export const headingId = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
