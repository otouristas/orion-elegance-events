import type { Metadata } from "next";
import OHoros from "@/views/greek/OHoros";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Αίθουσα, κήπος, παγόδα & πισίνα στην Κερατέα | Κτήμα Ωρίων";
const description =
  "Κλιματιζόμενη αίθουσα, κήπος με θέα θάλασσα, ημιυπαίθρια παγόδα και πισίνα. Για 50–350 άτομα, με δωρεάν parking 100+ θέσεων και εκκλησάκια σε 6–13 λεπτά.";

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
        consolidateToBrandHome
        breadcrumbs={[
          { name: "Αρχική", url: "/" },
          { name: "Ο χώρος", url: "/o-horos" },
        ]}
      />
      <OHoros />
    </>
  );
}
