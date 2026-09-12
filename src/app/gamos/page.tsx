import type { Metadata } from "next";
import Gamos from "@/views/greek/Gamos";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, ServiceJsonLd } from "@/components/seo/json-ld";

const title = "Γάμος στο Κτήμα Ωρίων: τελετή, δεξίωση & παροχές";
const description =
  "Τι περιλαμβάνει ένας γάμος στο Κτήμα Ωρίων: τελετή σε εκκλησάκι 6–13 λεπτά μακριά, δεξίωση 50–350 ατόμων, catering, στολισμός, DJ και φωτογράφος.";

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
      <ServiceJsonLd
        name="Δεξίωση γάμου"
        description="Οργάνωση γαμήλιας δεξίωσης στο Κτήμα Ωρίων: τελετή σε κοντινό εκκλησάκι, catering, στολισμός, μουσική και φωτογράφιση."
        canonicalPath="/gamos"
      />
      <Gamos />
    </>
  );
}
