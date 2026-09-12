import type { Metadata } from "next";
import Epikoinonia from "@/views/greek/Epikoinonia";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Επικοινωνία & δωρεάν ξενάγηση — 22990 68812";
const description =
  "Επικοινωνήστε με το Κτήμα Ωρίων στην Κερατέα: 22990 68812, info@ktimaorion.gr. Κλείστε δωρεάν ξενάγηση στον χώρο, χωρίς καμία δέσμευση.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/epikoinonia",
  lang: "el",
  keywords:
    "επικοινωνία κτήμα ωρίων, ξενάγηση κτήμα κερατέα, τηλέφωνο κτήμα ωρίων, προσφορά γάμου",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/epikoinonia"
        schemaType="EventVenue"
      />
      <Epikoinonia />
    </>
  );
}
