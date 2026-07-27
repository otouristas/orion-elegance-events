import type { Metadata } from "next";
import KtimaGamouAthensRiviera from "@/views/greek/seo/KtimaGamouAthensRiviera";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήματα Γάμου Ανατολική Αττική | Κτήμα Ωρίων, Κερατέα";
const description =
  "Κτήμα γάμου στην Ανατολική Αττική, στην Κερατέα, για δεξίωση 50–350 ατόμων. Θέα θάλασσα, αποκλειστική χρήση, parking και κοντινά εκκλησάκια.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/el/ktima-gamou-athens-riviera",
  lang: "el",
  keywords:
    "κτήματα γάμου ανατολική αττική, κτήμα γάμου κερατέα, κτήμα γάμου athens riviera, δεξίωση γάμου 50 άτομα αθήνα",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/el/ktima-gamou-athens-riviera" schemaType="EventVenue" />
      <KtimaGamouAthensRiviera />
    </>
  );
}
