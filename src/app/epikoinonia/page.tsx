import type { Metadata } from "next";
import Epikoinonia from "@/views/greek/Epikoinonia";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Επικοινωνία & Δωρεάν Ξενάγηση | Κτήμα Ωρίων Κερατέα";
const description =
  "Τηλ. 2299 068812 ή 698 188 9560. Κλείστε δωρεάν ξενάγηση ή ζητήστε προσφορά για γάμο, βάπτιση και εταιρική εκδήλωση. Κερατέα Αττικής, ανοιχτά 365 ημέρες.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/epikoinonia",
  lang: "el",
  keywords:
    "επικοινωνία κτήμα ωρίων, ξενάγηση κτήμα κερατέα, τηλέφωνο κτήμα ωρίων, προσφορά γάμου",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/epikoinonia"
        schemaType="EventVenue"
      />
      <Epikoinonia />
    </>
  );
}
