import { getKonsultasiWhatsappUrl } from "@/data/contact";

export const GET = (request: Request) => {
  // The topic only fills the prefilled chat text; cap it so a crafted link
  // cannot send an oversized message. Cut by code point so an emoji is never
  // split, which would make encodeURIComponent throw.
  const topic = Array.from(
    new URL(request.url).searchParams.get("topik")?.trim() ?? "",
  )
    .slice(0, 200)
    .join("");

  return new Response(null, {
    status: 302,
    headers: {
      Location: getKonsultasiWhatsappUrl(topic || undefined),
      "Cache-Control": "no-store",
    },
  });
};
