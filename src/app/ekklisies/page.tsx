import type { Metadata } from "next";
import Ekklisies from "@/views/greek/Ekklisies";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "5 εκκλησίες στην Κερατέα για γάμο & βάπτιση";
const description =
  "Πέντε παραθαλάσσια εκκλησάκια για την τελετή σας, 6–13 λεπτά από το Κτήμα Ωρίων: Γκαρικά, Αγία Τριάδα, Δασκαλειό, Κακή Θάλασσα, Θορικό.";

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
