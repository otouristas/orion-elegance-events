import type { Metadata } from "next";
import KtimaGamouAthina from "@/views/greek/seo/KtimaGamouAthina";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήμα Γάμου Αθήνα | Κτήμα Ωρίων στην Κερατέα";
const description = "Κτήμα γάμου Αθήνα, στην Κερατέα: θέα θάλασσα, κλιματιζόμενη αίθουσα, parking 100+ θέσεων και χώρος για 50–350 καλεσμένους.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/el/ktima-gamou-athina",
  lang: "el",
  keywords: "κτήμα γάμου αθήνα, κτήμα γάμου κοντά στην αθήνα, κτήματα γάμου αττική, χώρος δεξίωσης κερατέα",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/el/ktima-gamou-athina"
        schemaType="LocalBusiness"
        breadcrumbs={[
          { name: "Αρχική", url: "/" },
          { name: "Κτήμα γάμου Αθήνα", url: "/el/ktima-gamou-athina" },
        ]}
      />
      <KtimaGamouAthina />
    </>
  );
}
