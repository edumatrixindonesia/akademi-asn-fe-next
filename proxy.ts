import { NextResponse, type NextRequest } from "next/server";
import { legacyRedirects } from "./lib/legacy-redirects";

// Legacy redirects live here, not in next.config.ts: ~2000 config redirects
// trip Next's 1000 custom-route limit and are matched on every request.
const destinations = new Map(legacyRedirects.map(({ source, destination }) => [source, destination]));

export const proxy = (request: NextRequest) => {
  const destination = destinations.get(request.nextUrl.pathname);
  // Unknown slugs fall through to the catch-all route, which 404s.
  if (!destination) return NextResponse.next();
  return NextResponse.redirect(new URL(destination, request.url), 308);
};

export const config = { matcher: "/(bimbel-les-privat-.+)" };
