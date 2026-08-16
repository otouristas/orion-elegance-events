import type { Metadata } from "next";
import AgiosPanteleimonasKeratea from "@/views/greek/seo/churches/AgiosPanteleimonasKeratea";
import { buildMetadata } from "@/lib/seo/metadata";
import { ChurchJsonLd } from "@/components/seo/json-ld";

const canonicalPath = "/el/ekklisies/agios-panteleimonas-keratea";
const title = "Άγιος Παντελεήμονας Κερατέα | Εκκλησία Γάμου – Κτήμα Ωρίων";
const description =
  "Ο Άγιος Παντελεήμονας στην Κακή Θάλασσα Κερατέας, 8,6 χλμ και 13 λεπτά από το Κτήμα Ωρίων. Θέα στη θάλασσα, πληροφορίες πρόσβασης και οργάνωση τελετής.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath,
  lang: "el",
  keywords:
    "άγιος παντελεήμονας κερατέα, αγιος παντελεημονας κερατεα, εκκλησία κερατέα, κακή θάλασσα εκκλησία",
});

export default function Page() {
  return (
    <>
      <ChurchJsonLd
        name="Ιερός Ναός Αγίου Παντελεήμονος Κερατέας"
        description={description}
        canonicalPath={canonicalPath}
        addressLocality="Κερατέα"
        breadcrumbs={[
          { name: "Αρχική", url: "/" },
          { name: "Εκκλησίες", url: "/ekklisies" },
          { name: "Άγιος Παντελεήμονας Κερατέα", url: canonicalPath },
        ]}
      />
      <AgiosPanteleimonasKeratea />
    </>
  );
}
