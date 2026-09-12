import type { Metadata } from "next";
import Request from "@/views/greek/Request";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Ζητήστε δωρεάν προσφορά για γάμο ή βάπτιση";
const description =
  "Συμπληρώστε τη φόρμα και λάβετε προσωπική προσφορά για τη δεξίωσή σας στο Κτήμα Ωρίων: ημερομηνία, αριθμός ατόμων, μενού. Χωρίς δέσμευση.";

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
