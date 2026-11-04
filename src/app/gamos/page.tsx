import type { Metadata } from "next";
import Gamos from "@/views/greek/Gamos";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, ServiceJsonLd } from "@/components/seo/json-ld";

const title = "Γαμήλια δεξίωση με χώρο, catering & στολισμό | Κτήμα Ωρίων";
const description =
  "Χώρος, catering, στολισμός, φωτισμός και ήχος, με δωρεάν parking 100+ θέσεων. Για 50–350 άτομα, τελετή σε εκκλησάκι 6–13 λεπτά και μία εκδήλωση την ημέρα.";

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
        consolidateToBrandHome
        breadcrumbs={[
          { name: "Αρχική", url: "/" },
          { name: "Γάμος", url: "/gamos" },
        ]}
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
