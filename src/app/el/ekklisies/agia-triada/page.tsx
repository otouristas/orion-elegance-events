import type { Metadata } from "next";
import AgiaTriada from "@/views/greek/seo/churches/AgiaTriada";
import { buildMetadata } from "@/lib/seo/metadata";
import { ChurchJsonLd } from "@/components/seo/json-ld";

const canonicalPath = "/el/ekklisies/agia-triada";
const title = "Αγία Τριάδα Κερατέα | Εκκλησία Γάμου – Κτήμα Ωρίων";
const description =
  "Ο Ιερός Ναός Αγίας Τριάδος στην Κερατέα, 5 χλμ και 10 λεπτά από το Κτήμα Ωρίων. Πληροφορίες για την τελετή, πρόσβαση και συνδυασμό με τη δεξίωση.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  lang: "el",
  keywords: "αγία τριάδα κερατέα, αγια τριαδα κερατεα, εκκλησία κερατέα, εκκλησίες κερατέα",
});

export default function Page() {
  return (
    <>
      <ChurchJsonLd
        name="Ιερός Ναός Αγίας Τριάδος Κερατέας"
        description={description}
        canonicalPath={canonicalPath}
        addressLocality="Κερατέα"
        breadcrumbs={[
          { name: "Αρχική", url: "/" },
          { name: "Εκκλησίες", url: "/ekklisies" },
          { name: "Αγία Τριάδα Κερατέα", url: canonicalPath },
        ]}
      />
      <AgiaTriada />
    </>
  );
}
