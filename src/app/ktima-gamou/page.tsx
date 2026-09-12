import type { Metadata } from "next";
import KtimaGamou from "@/views/greek/seo/KtimaGamou";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήμα γάμου στην Αττική για 50–350 άτομα";
const description =
  "Κτήμα για γάμο στην Ανατολική Αττική, 45 λεπτά από την Αθήνα. Θέα θάλασσα, κλιματιζόμενη αίθουσα, 5 εκκλησάκια σε 6–13 λεπτά, parking 100+ θέσεων.";

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
