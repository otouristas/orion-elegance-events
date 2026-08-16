import type { Metadata } from "next";
import PanagiaGkarika from "@/views/greek/seo/churches/PanagiaGkarika";
import { buildMetadata } from "@/lib/seo/metadata";
import { ChurchJsonLd } from "@/components/seo/json-ld";

const canonicalPath = "/el/ekklisies/panagia-gkarika";
const title = "Παναγία Γκαρικά Κερατέα | Εκκλησία Γάμου – Κτήμα Ωρίων";
const description =
  "Η Παναγία Γκαρικά στην Κερατέα — το πιο κοντινό εκκλησάκι στο Κτήμα Ωρίων, μόλις 3,1 χλμ και 6 λεπτά. Φωτογραφίες, πρόσβαση και οργάνωση τελετής.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  lang: "el",
  keywords:
    "παναγία γκαρικά, παναγια γκαρικα κερατεας, εκκλησία κερατέα, ζωοδόχου πηγής κερατέα",
});

export default function Page() {
  return (
    <>
      <ChurchJsonLd
        name="Παναγία Γκαρικά Κερατέας (Κοίμηση της Θεοτόκου και Ζωοδόχου Πηγής)"
        description={description}
        canonicalPath={canonicalPath}
        addressLocality="Κερατέα"
        breadcrumbs={[
          { name: "Αρχική", url: "/" },
          { name: "Εκκλησίες", url: "/ekklisies" },
          { name: "Παναγία Γκαρικά", url: canonicalPath },
        ]}
      />
      <PanagiaGkarika />
    </>
  );
}
