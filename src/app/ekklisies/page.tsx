import type { Metadata } from "next";
import Ekklisies from "@/views/greek/Ekklisies";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Εκκλησίες Κερατέα για Γάμο & Βάπτιση | Κτήμα Ωρίων";
const description =
  "Άγιος Αλέξανδρος Δασκαλειό, Παναγία Γκαρικά, Άγιος Παντελεήμονας, Προφήτης Ηλίας Θορικό και Αγία Τριάδα: απόσταση, χωρητικότητα και φωτογραφίες.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/ekklisies",
  lang: "el",
  keywords:
    "εκκλησία κερατέα, εκκλησίες κερατέα, εκκλησίες γάμου αττική, παραθαλάσσια εκκλησάκια κερατέα, κτήμα με εκκλησάκι",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/ekklisies"
        schemaType="EventVenue"
      />
      <Ekklisies />
    </>
  );
}
