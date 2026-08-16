import type { Metadata } from "next";
import Gamos from "@/views/greek/Gamos";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Γάμος στο Κτήμα Ωρίων | Τελετή, Δεξίωση & Υπηρεσίες";
const description =
  "Γάμος στην Κερατέα: τελετή σε εκκλησάκι 6–13 λεπτά μακριά, δεξίωση 50–350 ατόμων, catering, στολισμός, DJ και φωτογράφος. Δείτε τι περιλαμβάνεται.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/gamos",
  lang: "el",
  keywords:
    "γάμος κερατέα, γαμήλια δεξίωση αττική, catering γάμου, υπηρεσίες γάμου κτήμα",
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
