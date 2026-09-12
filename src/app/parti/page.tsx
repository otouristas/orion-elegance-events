import type { Metadata } from "next";
import Parti from "@/views/greek/Parti";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, ServiceJsonLd } from "@/components/seo/json-ld";

const title = "Πάρτι & ιδιωτικές εκδηλώσεις στην Κερατέα";
const description = "Γενέθλια, αρραβώνες και ιδιωτικά πάρτι στο Κτήμα Ωρίων. Κήπος, πισίνα και κλιματιζόμενη αίθουσα για 50 έως 350 άτομα, με parking 100+ θέσεων.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/parti",
  lang: "el",
  keywords: "πάρτι κερατέα, private party αττική",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/parti"
        schemaType="EventVenue"
      />
      <ServiceJsonLd
        name="Ιδιωτικά πάρτι"
        description="Γενέθλια, αρραβώνες και ιδιωτικές εκδηλώσεις στο Κτήμα Ωρίων στην Κερατέα."
        canonicalPath="/parti"
      />
      <Parti />
    </>
  );
}
