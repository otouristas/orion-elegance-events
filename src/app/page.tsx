import type { Metadata } from 'next';
import Index from '@/views/Index';
import { JsonLd, WebSiteJsonLd } from '@/components/seo/json-ld';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Κτήμα Ωρίων | Κτήμα γάμου & βάπτισης στην Κερατέα',
  description:
    'Κτήμα δεξιώσεων στην Κερατέα Αττικής από το 2009. Γάμοι και βαπτίσεις 50–350 ατόμων, θέα θάλασσα, 100+ θέσεις parking. Κλείστε δωρεάν ξενάγηση.',
  canonicalPath: '/',
  lang: 'el',
  keywords:
    'κτήμα ωρίων, κτήμα κερατέα, κτήμα γάμου κερατέα, κτήμα για γάμο, κτήμα βάπτισης, βάπτιση κερατέα, γάμος κερατέα, χώρος δεξιώσεων κερατέα',
  ogImage: '/og-image.jpg',
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        title="Κτήμα Ωρίων – Κτήμα γάμου & βάπτισης στην Κερατέα Αττικής"
        description="Κτήμα δεξιώσεων στην Κερατέα Αττικής από το 2009. Γάμοι και βαπτίσεις από 50 έως 350 άτομα, με θέα στη θάλασσα και δωρεάν parking 100+ θέσεων."
        canonicalPath="/"
        schemaType="LocalBusiness"
        breadcrumbs={[{ name: 'Αρχική', url: '/' }]}
        ogImagePath="/og-image.jpg"
      />
      {/* The FAQPage schema is emitted by the visible <FAQ> block inside <Index>,
          so declaring it again here would duplicate FAQPage on one URL. */}
      <WebSiteJsonLd />
      <Index />
    </>
  );
}
