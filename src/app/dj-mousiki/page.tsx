import type { Metadata } from "next";
import DjMousiki from "@/views/greek/DjMousiki";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "DJ & μουσική για γάμο και βάπτιση στην Αττική";
const description = "DJ, ήχος και φωτισμός για τη δεξίωσή σας στο Κτήμα Ωρίων, σε συνεργασία με την Top Events. Μουσική για γάμους, βαπτίσεις και εταιρικά πάρτι.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/dj-mousiki",
  lang: "el",
  keywords: "dj γάμου αττική",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/dj-mousiki"
        schemaType="EventVenue"
      />
      <DjMousiki />
    </>
  );
}
