import type { Metadata } from "next";
import Vaptisi from "@/views/greek/Vaptisi";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

// Service page for the baptism experience. The head term "κτήμα βάπτισης" is
// owned by /ktima-vaptisis; this page must not compete for the same intent.
const title = "Βάπτιση στο Κτήμα Ωρίων | Πακέτα, Μενού & Δεξίωση";
const description =
  "Πακέτα βάπτισης finger food από 33€/άτομο με L. Varsos Catering: τούρτα, προσωπικό, ποτά, ασφαλής παιδικός χώρος και κοντινά εκκλησάκια στην Κερατέα.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/vaptisi",
  lang: "el",
  keywords:
    "βάπτιση κερατέα, πακέτα βάπτισης, δεξίωση βάπτισης, μενού βάπτισης, τιμές βάπτισης",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/vaptisi"
        schemaType="EventVenue"
      />
      <Vaptisi />
    </>
  );
}
