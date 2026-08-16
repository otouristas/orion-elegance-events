import type { Metadata } from "next";
import OHoros from "@/views/greek/OHoros";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Ο Χώρος | Αίθουσα, Κήπος & Πισίνα – Κτήμα Ωρίων Κερατέα";
const description =
  "Κλιματιζόμενη αίθουσα, κήπος, πισίνα και ημιυπαίθριος χώρος για 50–350 καλεσμένους, με 100+ θέσεις δωρεάν parking. Δείτε φωτογραφίες και κλείστε ξενάγηση.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/o-horos",
  lang: "el",
  keywords:
    "χώρος δεξιώσεων κερατέα, κτήμα κερατέα, κτήματα κερατέα, αίθουσα εκδηλώσεων αττική",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/o-horos"
        schemaType="EventVenue"
      />
      <OHoros />
    </>
  );
}
