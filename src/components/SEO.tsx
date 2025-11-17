import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  lang?: 'el' | 'en';
  schemaType?: 'LocalBusiness' | 'Event' | 'EventVenue';
  breadcrumbs?: BreadcrumbItem[];
  eventDate?: string;
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage = '/hero-image.jpg',
  ogType = 'website',
  keywords = 'κτήμα δεξιώσεων, γάμος, βάπτιση, εταιρικές εκδηλώσεις, Κερατέα, Αττική',
  lang = 'el',
  schemaType = 'EventVenue',
  breadcrumbs = [],
  eventDate
}: SEOProps) {
  const siteName = 'Κτήμα Ωρίων';
  const siteUrl = 'https://ktimaorion.gr';
  const fullCanonical = `${siteUrl}${canonical}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const logo = `${siteUrl}/logo-dark.png`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Hreflang Tags for multilingual support */}
      <link rel="alternate" hrefLang="el" href={`${siteUrl}${canonical}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${canonical === '/' ? '' : canonical}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${canonical}`} />
      
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
        {JSON.stringify(
          schemaType === 'LocalBusiness' ? {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#business`,
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
            "hasMap": "https://maps.google.com/?q=37.802493,24.028817",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "23:00"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "50"
            }
          } : schemaType === 'Event' ? {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": title,
            "description": description,
            "image": fullOgImage,
            "location": {
              "@type": "Place",
              "name": siteName,
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
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": siteName,
              "url": siteUrl
            },
            ...(eventDate && { "startDate": eventDate }),
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "url": fullCanonical
            }
          } : {
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
          }
        )}
      </script>
      
      {/* BreadcrumbList Schema */}
      {breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": `${siteUrl}${crumb.url}`
            }))
          })}
        </script>
      )}
    </Helmet>
  );
}

