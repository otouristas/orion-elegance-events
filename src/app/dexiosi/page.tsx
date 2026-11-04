import type { Metadata } from "next";
import Dexiosi from "@/views/greek/Dexiosi";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Δεξίωση για γάμο, βάπτιση, εταιρικά και πάρτι | Κτήμα Ωρίων";
const description =
  "Γάμος, βάπτιση, εταιρική εκδήλωση ή πάρτι στην Κερατέα, για 50 έως 350 άτομα. Κλιματιζόμενη αίθουσα, κήπος με θέα θάλασσα και ραντεβού για να δείτε τον χώρο.";

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
        consolidateToBrandHome
        breadcrumbs={[
          { name: "Αρχική", url: "/" },
          { name: "Δεξίωση", url: "/dexiosi" },
        ]}
      />
      <Dexiosi />
    </>
  );
}
