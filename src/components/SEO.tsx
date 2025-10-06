import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage = '/hero-image.jpg',
  ogType = 'website',
  keywords = 'κτήμα δεξιώσεων, γάμος, βάπτιση, εταιρικές εκδηλώσεις, Κερατέα, Αττική'
}: SEOProps) {
  const siteName = 'Κτήμα Ωρίων';
  const siteUrl = 'https://ktimaorion.gr';
  const fullCanonical = `${siteUrl}${canonical}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const logo = `${siteUrl}/logo-dark.png`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="el_GR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content={siteName} />
      <meta name="copyright" content={siteName} />
      <meta name="language" content="Greek" />
      <meta name="geo.region" content="GR-A1" />
      <meta name="geo.placename" content="Κερατέα" />
      <meta name="geo.position" content="37.802493;24.028817" />
      <meta name="ICBM" content="37.802493, 24.028817" />
      
      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "name": siteName,
          "description": description,
          "url": fullCanonical,
          "logo": logo,
          "image": fullOgImage,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Κερατέα",
            "addressRegion": "Αττική",
            "addressCountry": "GR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "37.802493",
            "longitude": "24.028817"
          },
          "telephone": "+302299068812",
          "priceRange": "€€€",
          "servesCuisine": "Greek",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50"
          }
        })}
      </script>
    </Helmet>
  );
}

