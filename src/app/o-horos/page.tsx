import type { Metadata } from "next";
import OHoros from "@/views/greek/OHoros";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Ο χώρος: αίθουσα, κήπος & πισίνα στην Κερατέα";
const description =
  "Κλιματιζόμενη αίθουσα, κήπος με θέα θάλασσα, ημιυπαίθρια παγόδα και πισίνα. Δεξιώσεις 50–350 ατόμων και δωρεάν parking 100+ θέσεων στην Κερατέα.";

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
