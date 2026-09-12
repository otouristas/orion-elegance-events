import type { Metadata } from "next";
import AgiosAlexandrosDaskaleio from "@/views/greek/seo/churches/AgiosAlexandrosDaskaleio";
import { buildMetadata } from "@/lib/seo/metadata";
import { ChurchJsonLd } from "@/components/seo/json-ld";

const canonicalPath = "/el/ekklisies/agios-alexandros-daskaleio";
const title = "Άγιος Αλέξανδρος Δασκαλειό — εκκλησάκι γάμου";
const description =
  "Το παραθαλάσσιο εκκλησάκι του Αγίου Αλεξάνδρου στο Δασκαλειό, 5,2 χλμ και 10 λεπτά από το Κτήμα Ωρίων. Κατάλληλο για γάμους έως 170 άτομα.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  lang: "el",
  keywords:
    "άγιος αλέξανδρος δασκαλειό, αγιος αλεξανδρος δασκαλειο κερατεας, εκκλησία γάμου κερατέα, παραθαλάσσιο εκκλησάκι",
});

export default function Page() {
  return (
    <>
      <ChurchJsonLd
        name="Ιερός Ναός Αγίου Αλεξάνδρου Δασκαλειού"
        description={description}
        canonicalPath={canonicalPath}
        addressLocality="Δασκαλειό, Κερατέα"
        breadcrumbs={[
          { name: "Αρχική", url: "/" },
          { name: "Εκκλησίες", url: "/ekklisies" },
          { name: "Άγιος Αλέξανδρος Δασκαλειό", url: canonicalPath },
        ]}
      />
      <AgiosAlexandrosDaskaleio />
    </>
  );
}
