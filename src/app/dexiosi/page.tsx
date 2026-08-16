import type { Metadata } from "next";
import Dexiosi from "@/views/greek/Dexiosi";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Δεξίωση Γάμου & Βάπτισης 50–350 Ατόμων | Κτήμα Ωρίων";
const description =
  "Δεξίωση γάμου ή βάπτισης για 50–350 καλεσμένους στην Κερατέα. Catering, στολισμός, κλιματιζόμενη αίθουσα και 100+ θέσεις parking. Ανοιχτά 365 ημέρες.";

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
