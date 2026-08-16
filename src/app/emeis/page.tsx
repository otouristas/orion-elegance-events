import type { Metadata } from "next";
import Emeis from "@/views/greek/Emeis";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Ποιοι Είμαστε | Κτήμα Ωρίων Κερατέα από το 2009";
const description =
  "Κτήμα γάμου και βάπτισης στην Κερατέα Αττικής από το 2009. 50–350 καλεσμένοι, 100+ θέσεις δωρεάν parking και 4 εκκλησάκια σε 6–13 λεπτά.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/emeis",
  lang: "el",
  keywords: "κτήμα ωρίων, κτήμα κερατέα, κτήμα εκδηλώσεων κερατέα, ποιοι είμαστε",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/emeis"
        schemaType="EventVenue"
      />
      <Emeis />
    </>
  );
}
