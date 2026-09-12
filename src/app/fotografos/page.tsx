import type { Metadata } from "next";
import Fotografos from "@/views/greek/Fotografos";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Φωτογράφος γάμου στην Κερατέα — Studio Alpha";
const description = "Ο συνεργαζόμενος φωτογράφος του Κτήματος Ωρίων. Φωτογράφιση γάμου και βάπτισης στην Κερατέα και στα παραθαλάσσια εκκλησάκια της περιοχής.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/fotografos",
  lang: "el",
  keywords: "φωτογράφος γάμου κερατέα",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/fotografos"
        schemaType="EventVenue"
      />
      <Fotografos />
    </>
  );
}
