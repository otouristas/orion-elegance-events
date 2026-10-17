import type { Metadata } from "next";
import Epikoinonia from "@/views/greek/Epikoinonia";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Καλέστε για ραντεβού στην Κερατέα: 22990 68812 | Κτήμα Ωρίων";
const description =
  "Καλέστε στο 22990 68812 ή στο 698 188 9560, ή γράψτε στο info@ktimaorion.gr. Φόρμα επικοινωνίας, χάρτης στην Κερατέα και ραντεβού, κάθε μέρα 9:00–22:00.";

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
