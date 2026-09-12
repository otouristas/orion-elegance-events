import type { Metadata } from "next";
import Blog from "@/views/greek/Blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Οδηγοί γάμου & βάπτισης στην Αττική";
const description =
  "Πρακτικοί οδηγοί για γάμο και βάπτιση στην Αττική: τιμές και κόστος δεξίωσης, πώς επιλέγετε κτήμα, checklist προετοιμασίας και συχνές ερωτήσεις.";

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
