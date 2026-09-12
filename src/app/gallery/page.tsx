import type { Metadata } from "next";
import Gallery from "@/views/greek/Gallery";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Φωτογραφίες από γάμους & βαπτίσεις στο κτήμα";
const description = "Φωτογραφίες από τον χώρο, τον κήπο, την αίθουσα και πραγματικές εκδηλώσεις στο Κτήμα Ωρίων στην Κερατέα. Δείτε το κτήμα πριν το επισκεφθείτε.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/gallery",
  lang: "el",
  keywords: "φωτογραφίες κτήμα ωρίων",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/gallery"
        schemaType="EventVenue"
      />
      <Gallery />
    </>
  );
}
