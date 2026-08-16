import type { Metadata } from "next";
import ProfitisIliasThoriko from "@/views/greek/seo/churches/ProfitisIliasThoriko";
import { buildMetadata } from "@/lib/seo/metadata";
import { ChurchJsonLd } from "@/components/seo/json-ld";

const canonicalPath = "/el/ekklisies/profitis-ilias-thoriko";
const title = "Προφήτης Ηλίας Θορικό | Εκκλησάκι Γάμου – Κτήμα Ωρίων";
const description =
  "Το εκκλησάκι του Προφήτη Ηλία στο Θορικό Περιγιαλίου, 8,8 χλμ και 11 λεπτά από το Κτήμα Ωρίων. Ιδανικό για μικρές τελετές 40–50 ατόμων με θέα στο Αιγαίο.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  lang: "el",
  keywords:
    "προφήτης ηλίας θορικό, προφητης ηλιας θορικου, προφήτης ηλίας περιγιάλι, εκκλησάκι γάμου θέα θάλασσα",
});

export default function Page() {
  return (
    <>
      <ChurchJsonLd
        name="Ιερός Ναός Προφήτη Ηλία Θορικού"
        description={description}
        canonicalPath={canonicalPath}
        addressLocality="Θορικό, Κερατέα"
        breadcrumbs={[
          { name: "Αρχική", url: "/" },
          { name: "Εκκλησίες", url: "/ekklisies" },
          { name: "Προφήτης Ηλίας Θορικό", url: canonicalPath },
        ]}
      />
      <ProfitisIliasThoriko />
    </>
  );
}
