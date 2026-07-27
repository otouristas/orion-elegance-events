import type { Metadata } from "next";
import KtimaGamou from "@/views/greek/seo/KtimaGamou";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήμα Γάμου στην Αττική | Κτήμα Ωρίων, Κερατέα";
const description =
  "Κτήμα γάμου στην Αττική, στην Κερατέα, με θέα θάλασσα, αποκλειστική χρήση, χώρο για 50–350 άτομα και κοντινά εκκλησάκια. Κλείστε επίσκεψη.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/ktima-gamou",
  lang: "el",
  keywords:
    "κτημα γαμου, κτημα για γαμο, κτημα γαμου αθηνα, κτημα γαμου αττικη, κτημα γαμου ανατολικη αττικη, κτηματα γαμου αθηνα, κτημα γαμου με εκκλησακι, δεξιωση γαμου σε κτημα, χωρος δεξιωσης γαμου",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/ktima-gamou"
        schemaType="LocalBusiness"
        breadcrumbs={[
          { name: "Αρχική", url: "/" },
          { name: "Κτήμα γάμου", url: "/ktima-gamou" },
        ]}
      />
      <KtimaGamou />
    </>
  );
}
