import type { Metadata } from "next";
import Emeis from "@/views/greek/Emeis";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Ποιοι είμαστε: η ομάδα δεξιώσεων στην Κερατέα | Κτήμα Ωρίων";
const description =
  "Υπεύθυνη χώρου η Μπούσουλα Παναγιώτα. 15+ χρόνια και 200+ εκδηλώσεις στην Κερατέα: κλιματιζόμενη αίθουσα, κήποι και συνεργασία με πιστοποιημένα catering.";

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
        consolidateToBrandHome
        breadcrumbs={[
          { name: "Αρχική", url: "/" },
          { name: "Εμείς", url: "/emeis" },
        ]}
      />
      <Emeis />
    </>
  );
}
