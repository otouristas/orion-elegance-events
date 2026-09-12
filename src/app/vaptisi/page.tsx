import type { Metadata } from "next";
import Vaptisi from "@/views/greek/Vaptisi";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, ServiceJsonLd } from "@/components/seo/json-ld";

// Service page for the baptism experience. The head term "κτήμα βάπτισης" is
// owned by /ktima-vaptisis; this page must not compete for the same intent.
const title = "Βάπτιση στην Κερατέα: πακέτα από 33€ το άτομο";
const description =
  "Δεξίωση βάπτισης στο Κτήμα Ωρίων: πακέτα L. Varsos Catering από 33€/άτομο, παιδικό μενού, κήπος και χώρος παιχνιδιού. Δείτε τι περιλαμβάνεται.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/vaptisi",
  lang: "el",
  keywords:
    "βάπτιση κερατέα, πακέτα βάπτισης, δεξίωση βάπτισης, μενού βάπτισης, τιμές βάπτισης",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/vaptisi"
        schemaType="EventVenue"
      />
      <ServiceJsonLd
        name="Δεξίωση βάπτισης"
        description="Οργάνωση δεξίωσης βάπτισης στο Κτήμα Ωρίων στην Κερατέα, με πακέτα catering, παιδικό μενού και χώρο παιχνιδιού."
        canonicalPath="/vaptisi"
        offers={[{ name: 'Classic finger food', price: 33, description: 'Πακέτο L. Varsos Catering, για εκδηλώσεις από 100 άτομα' }, { name: 'Premium finger food', price: 38, description: 'Πακέτο L. Varsos Catering, για εκδηλώσεις από 100 άτομα' }]}
      />
      <Vaptisi />
    </>
  );
}
