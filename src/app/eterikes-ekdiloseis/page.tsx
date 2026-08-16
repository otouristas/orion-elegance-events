import type { Metadata } from "next";
import EterikesEkdiloseis from "@/views/greek/EterikesEkdiloseis";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Εταιρικές Εκδηλώσεις Αθήνα – Κτήμα Ωρίων Κερατέα";
const description =
  "Χώρος για συνέδρια, team building και εταιρικά events 50–350 ατόμων, 45 λεπτά από την Αθήνα. 100+ θέσεις parking, κλιματιζόμενη αίθουσα και catering.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/eterikes-ekdiloseis",
  lang: "el",
  keywords:
    "εταιρικές εκδηλώσεις αθήνα, corporate events athens, χώρος συνεδρίων αττική, team building αθήνα, εταιρικό πάρτι",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/eterikes-ekdiloseis"
        schemaType="EventVenue"
      />
      <EterikesEkdiloseis />
    </>
  );
}
