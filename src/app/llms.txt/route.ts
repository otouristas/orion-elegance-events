import { SITE_URL, SITE_NAME_EL, PHONE, EMAIL } from "@/lib/seo/config";
import { CHURCH_COUNT, CHURCH_MINUTES_RANGE, churches } from "@/data/churches";
import { AVERAGE_RATING, REVIEW_COUNT } from "@/data/reviews";

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
- ${CHURCH_COUNT} nearby churches for the ceremony, ${CHURCH_MINUTES_RANGE} minutes by car (see below)
- Baptism packages with L. Varsos Catering: Classic finger food 33€/person, Premium finger food 38€/person, for events from 100 guests
- Published guest reviews: ${REVIEW_COUNT}, average rating ${AVERAGE_RATING.toFixed(1)}/5 (see /reviews)

## Nearby churches (driving time from the venue)
${churches
  .map(
    (c) =>
      `- ${c.name}, ${c.location} — ${c.distance.replace(",", ".").replace(" χλμ", " km")}, ${c.minutes} minutes`,
  )
  .join("\n")}

## Key pages
- / — Greek homepage
- /ktima-gamou — Wedding venue (primary commercial page; /el/ktima-gamou-athina and /el/ktima-gamou-athens-riviera redirect here)
- /ktima-vaptisis — Baptism venue (primary commercial page; /el/ktimata-vaptisis-athina redirects here)
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

Last-Updated: 2026-09-12
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
