import type { Metadata } from "next";
import Dexiosi from "@/views/greek/Dexiosi";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Δεξίωση γάμου & βάπτισης για 50 έως 350 άτομα";
const description =
  "Χώρος δεξίωσης στην Κερατέα Αττικής: κλιματιζόμενη αίθουσα και κήπος με θέα θάλασσα, για δεξιώσεις γάμου και βάπτισης από 50 έως 350 άτομα.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/dexiosi",
  lang: "el",
  keywords:
    "δεξίωση γάμου, δεξίωση βάπτισης, δεξίωση γάμου για 50 άτομα, χώρος δεξίωσης αττική",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/dexiosi"
        schemaType="EventVenue"
      />
      <Dexiosi />
    </>
  );
}
