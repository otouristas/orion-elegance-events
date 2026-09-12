import type { Metadata } from "next";
import Reviews from "@/views/greek/Reviews";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κριτικές & αξιολογήσεις για το Κτήμα Ωρίων";
const description = "Τι λένε ζευγάρια και οικογένειες για τον γάμο ή τη βάπτισή τους στο Κτήμα Ωρίων στην Κερατέα. Πραγματικές κριτικές, με όνομα και ημερομηνία.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/reviews",
  lang: "el",
  keywords: "αξιολογήσεις κτήμα ωρίων",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/reviews"
        schemaType="EventVenue"
      />
      <Reviews />
    </>
  );
}
