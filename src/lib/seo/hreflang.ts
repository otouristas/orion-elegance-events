import { SITE_URL } from "./config";

/** Greek pathname → English alternate pathname (when a dedicated EN page exists). */
export const GREEK_TO_ENGLISH_PATH: Readonly<Record<string, string>> = {
  "/": "/en",
  "/emeis": "/en/about",
  "/dexiosi": "/en/reception",
  "/gamos": "/en/weddings",
  "/vaptisi": "/en/baptism",
  "/eterikes-ekdiloseis": "/en/corporate-events",
  "/parti": "/en/party",
  "/o-horos": "/en/venue",
  "/ekklisies": "/en/churches",
  "/ypiresies": "/en/services",
  "/fotografos": "/en/photographer",
  "/dj-mousiki": "/en/dj-music",
  "/reviews": "/en/reviews",
  "/epikoinonia": "/en/contact",
  "/gallery": "/en/gallery",
  "/blog": "/en/blog",
  "/el/ekklisies/agia-triada": "/en/churches/agia-triada",
  "/request": "/en/request",
};

export function resolveEnglishAlternatePath(greekPath: string): string | undefined {
  const normalized = greekPath === "" ? "/" : greekPath.startsWith("/") ? greekPath : `/${greekPath}`;
  if (normalized.startsWith("/blog/")) return `/en${normalized}`;
  return GREEK_TO_ENGLISH_PATH[normalized];
}

export function buildAbsoluteUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(path, SITE_URL).toString();
}
