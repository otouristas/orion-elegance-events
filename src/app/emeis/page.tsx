import type { Metadata } from "next";
import Emeis from "@/views/greek/Emeis";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήμα Ωρίων: το κτήμα δεξιώσεων της Κερατέας από το 2009";
const description =
  "Ποιοι είμαστε: οικογενειακό κτήμα δεξιώσεων στην Κερατέα από το 2009, με πάνω από 500 γάμους και βαπτίσεις. Γνωρίστε την ομάδα και τον χώρο μας.";

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
