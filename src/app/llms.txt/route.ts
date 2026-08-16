import { SITE_URL, SITE_NAME_EL, PHONE, EMAIL } from "@/lib/seo/config";

/**
 * Answer-engine summary. Every fact here must be verifiable on the site itself —
 * assistants quote this directly, so an unsupported claim becomes a public error.
 */
export function GET(): Response {
  const body = `# ${SITE_NAME_EL} (Ktima Orion)
> Event venue for weddings, baptisms, corporate events and private parties — Keratea, East Attica, Greece. Operating since 2009.

## Site
- Primary: ${SITE_URL}
- Phone: ${PHONE}
- Email: ${EMAIL}
- Address: 45th km New Athens–Lavrio Avenue, Keratea 190 01, Attica, Greece
- Coordinates: 37.802493, 24.028817
- Open 365 days a year
- Languages: Greek (/), English (/en)

## Verified facts
- Guest capacity: 50–350 people
- Parking: 100+ free spaces on site
- Indoor air-conditioned hall plus garden, pool area and semi-covered space
- Distance from central Athens: approximately 45 minutes
- Five nearby churches for the ceremony, 6–13 minutes by car (see below)
- Baptism packages with L. Varsos Catering: Classic finger food 33€/person, Premium finger food 38€/person, for events from 100 guests

## Nearby churches (driving time from the venue)
- Panagia Gkarika, Keratea — 3.1 km, 6 minutes
- Agios Alexandros Daskaleio (seaside) — 5.2 km, 10 minutes, suitable for up to 170 people
- Agia Triada, Keratea — 5 km, 10 minutes
- Profitis Ilias, Thoriko — 8.8 km, 11 minutes, suited to small ceremonies of 40–50 people
- Agios Panteleimonas, Kaki Thalassa Keratea — 8.6 km, 13 minutes

## Key pages
- / — Greek homepage
- /ktima-gamou — Wedding venue (primary commercial page)
- /ktima-vaptisis — Baptism venue (primary commercial page)
- /gamos — What a wedding at the venue includes
- /vaptisi — Baptism packages, menu and reception
- /eterikes-ekdiloseis — Corporate events and conferences
- /parti — Private parties
- /o-horos — The spaces: hall, garden, pool
- /ekklisies — Nearby churches hub
- /reviews — Guest reviews
- /blog — Planning guides (cost, choosing a venue, churches)
- /epikoinonia — Contact and free venue tour
- /request — Request a quote
- /en — English homepage

## Full machine-readable index
See ${SITE_URL}/llms-full.txt

Last-Updated: 2026-08-16
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
