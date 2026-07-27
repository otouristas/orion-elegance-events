import type { Metadata } from "next";
import Gamos from "@/views/greek/Gamos";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Δεξίωση Γάμου στην Κερατέα | Κτήμα Ωρίων";
const description = "Οργανώστε τη γαμήλια δεξίωσή σας στην Κερατέα, με θέα θάλασσα, catering, στολισμό και κοντινά εκκλησάκια.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/gamos",
  lang: "el",
  keywords: "δεξίωση γάμου κερατέα, γαμήλια δεξίωση αττική, catering γάμου, χώρος δεξίωσης κερατέα",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/gamos"
        schemaType="EventVenue"
      />
      <Gamos />
    </>
  );
}
