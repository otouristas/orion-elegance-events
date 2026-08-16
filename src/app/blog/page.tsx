import type { Metadata } from "next";
import Blog from "@/views/greek/Blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Οδηγοί Γάμου & Βάπτισης στην Αττική";
const description =
  "Πόσο κοστίζει ένας γάμος σε κτήμα, πώς επιλέγετε χώρο δεξίωσης, ποια εκκλησάκια είναι κοντά και τι να προσέξετε στη βάπτιση. Οδηγοί για την Αττική.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/blog",
  lang: "el",
  keywords:
    "οδηγός γάμου, κόστος γάμου κτήμα, πώς επιλέγω κτήμα γάμου, συμβουλές βάπτισης",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/blog"
        schemaType="EventVenue"
      />
      <Blog />
    </>
  );
}
