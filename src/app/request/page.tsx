import type { Metadata } from "next";
import Request from "@/views/greek/Request";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Ζητήστε Προσφορά για Γάμο ή Βάπτιση | Κτήμα Ωρίων";
const description =
  "Ζητήστε προσφορά για γάμο, βάπτιση, πάρτι ή εταιρική εκδήλωση στο Κτήμα Ωρίων Κερατέας. 50–350 καλεσμένοι, διαθέσιμες ημερομηνίες 365 ημέρες τον χρόνο.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/request",
  lang: "el",
  keywords:
    "προσφορά γάμου, προσφορά βάπτισης, αίτημα προσφοράς κτήμα, τιμές κτήμα γάμου",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/request"
        schemaType="EventVenue"
      />
      <Request />
    </>
  );
}
