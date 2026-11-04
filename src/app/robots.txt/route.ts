import { buildRobotsTxt, ROBOTS_HEADERS } from "@/lib/seo-parity/robots-parity";

export const dynamic = "force-static";

/** Same group structure as discovercyclades.gr/robots.txt; see robots-parity.ts. */
export function GET() {
  const body = buildRobotsTxt({
    name: "Κτήμα Ωρίων (Ktima Orion)",
    origin: "https://ktimaorion.gr",
    disallow: ["/admin/", "/api/"],
    sitemaps: ["https://ktimaorion.gr/sitemap.xml"],
  });
  return new Response(body, { headers: ROBOTS_HEADERS });
}
