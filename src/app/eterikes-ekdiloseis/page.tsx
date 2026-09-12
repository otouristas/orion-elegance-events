import type { Metadata } from "next";
import EterikesEkdiloseis from "@/views/greek/EterikesEkdiloseis";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, ServiceJsonLd } from "@/components/seo/json-ld";

const title = "Εταιρικές εκδηλώσεις & συνέδρια στην Αττική";
const description =
  "Χώρος για εταιρικές εκδηλώσεις, συνέδρια και team building στην Ανατολική Αττική. Έως 350 άτομα, parking 100+ θέσεων, 45 λεπτά από την Αθήνα.";

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
      <ServiceJsonLd
        name="Εταιρικές εκδηλώσεις"
        description="Εταιρικές εκδηλώσεις, συνέδρια και team building στην Ανατολική Αττική, για έως 350 άτομα."
        canonicalPath="/eterikes-ekdiloseis"
      />
      <EterikesEkdiloseis />
    </>
  );
}
