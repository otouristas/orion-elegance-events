import type { ReactElement } from "react";
import { buildAbsoluteUrl } from "@/lib/seo/hreflang";
import {
  SITE_URL,
  SITE_NAME_EL,
  SITE_NAME_EN,
  DEFAULT_OG_IMAGE,
  PHONE,
  EMAIL,
  STREET_ADDRESS_EL,
  POSTAL_CODE,
  GEO_LAT,
  GEO_LNG,
  GOOGLE_MAPS_URL,
} from "@/lib/seo/config";

export interface BreadcrumbItem {
  readonly name: string;
  readonly url: string;
}

export type SchemaType = "LocalBusiness" | "Event" | "EventVenue";

export interface JsonLdProps {
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: string;
  readonly schemaType?: SchemaType;
  readonly breadcrumbs?: readonly BreadcrumbItem[];
  readonly eventDate?: string;
  readonly ogImagePath?: string;
}

function fullUrl(path: string): string {
  return buildAbsoluteUrl(path.startsWith("/") ? path : `/${path}`);
}

/**
 * Renders Schema.org JSON-LD for EventVenue, LocalBusiness, Event, and optional BreadcrumbList.
 */
export function JsonLd({
  title,
  description,
  canonicalPath,
  schemaType = "EventVenue",
  breadcrumbs = [],
  eventDate,
  ogImagePath = DEFAULT_OG_IMAGE,
}: JsonLdProps): ReactElement {
  const fullCanonical = fullUrl(canonicalPath);
  const fullOgImage = ogImagePath.startsWith("http")
    ? ogImagePath
    : fullUrl(ogImagePath);
  const logo = fullUrl("/images/logo-dark.png");
  const address = {
    "@type": "PostalAddress" as const,
    streetAddress: STREET_ADDRESS_EL,
    addressLocality: "Κερατέα",
    addressRegion: "Αττική",
    postalCode: POSTAL_CODE,
    addressCountry: "GR",
  };
  const geo = {
    "@type": "GeoCoordinates" as const,
    latitude: GEO_LAT,
    longitude: GEO_LNG,
  };
  const sameAs = [
    GOOGLE_MAPS_URL,
    "https://www.facebook.com/ktimaorion.gr/?locale=el_GR",
    "https://www.instagram.com/ktimaorion/",
  ];
  let mainEntity: Record<string, unknown>;
  if (schemaType === "LocalBusiness") {
    mainEntity = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME_EL,
      description,
      url: SITE_URL,
      mainEntityOfPage: fullCanonical,
      logo,
      image: fullOgImage,
      address,
      geo,
      telephone: PHONE,
      email: EMAIL,
      sameAs,
      priceRange: "€€€",
      hasMap: GOOGLE_MAPS_URL,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "23:00",
      },
    };
  } else if (schemaType === "Event") {
    mainEntity = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: title,
      description,
      image: fullOgImage,
      location: {
        "@type": "Place",
        name: SITE_NAME_EL,
        address,
        geo,
      },
      organizer: {
        "@type": "Organization",
        name: SITE_NAME_EL,
        url: SITE_URL,
      },
      ...(eventDate ? { startDate: eventDate } : {}),
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: fullCanonical,
      },
    };
  } else {
    mainEntity = {
      "@context": "https://schema.org",
      "@type": "EventVenue",
      name: SITE_NAME_EL,
      description,
      url: fullCanonical,
      logo,
      image: fullOgImage,
      address,
      geo,
      telephone: PHONE,
      priceRange: "€€€",
    };
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainEntity) }}
      />
      {breadcrumbs.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.name,
                item: fullUrl(crumb.url),
              })),
            }),
          }}
        />
      ) : null}
    </>
  );
}

/**
 * Site-wide publisher and website entities, emitted once on the homepage.
 *
 * The `@id` values are stable anchors that other markup can reference, so they
 * must not change. No SearchAction is declared: the site has no internal search
 * endpoint, and claiming one produces an unusable sitelinks searchbox.
 */
export function WebSiteJsonLd(): ReactElement {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME_EL,
        alternateName: SITE_NAME_EN,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: fullUrl("/images/logo-dark.png"),
        },
        telephone: PHONE,
        email: EMAIL,
        foundingDate: "2009",
        address: {
          "@type": "PostalAddress",
          streetAddress: STREET_ADDRESS_EL,
          addressLocality: "Κερατέα",
          addressRegion: "Αττική",
          postalCode: POSTAL_CODE,
          addressCountry: "GR",
        },
        sameAs: [
          GOOGLE_MAPS_URL,
          "https://www.facebook.com/ktimaorion.gr/?locale=el_GR",
          "https://www.instagram.com/ktimaorion/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME_EL,
        alternateName: SITE_NAME_EN,
        inLanguage: ["el", "en"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export interface ChurchJsonLdProps {
  /** Full name of the church, as it is referred to publicly. */
  readonly name: string;
  readonly description: string;
  readonly canonicalPath: string;
  /** Settlement the church sits in (e.g. "Κερατέα", "Θορικό"). */
  readonly addressLocality: string;
  readonly imagePath?: string;
  readonly breadcrumbs?: readonly BreadcrumbItem[];
}

/**
 * Structured data for a church page.
 *
 * These pages describe a place of worship, not the venue, so they must not emit
 * the EventVenue/LocalBusiness entity — doing so would tell search engines the
 * church *is* Κτήμα Ωρίων, at the venue's address and coordinates. Coordinates
 * are deliberately omitted because no verified per-church values exist.
 */
export function ChurchJsonLd({
  name,
  description,
  canonicalPath,
  addressLocality,
  imagePath,
  breadcrumbs = [],
}: ChurchJsonLdProps): ReactElement {
  const church = {
    "@context": "https://schema.org",
    "@type": "Church",
    name,
    description,
    url: fullUrl(canonicalPath),
    address: {
      "@type": "PostalAddress",
      addressLocality,
      addressRegion: "Αττική",
      addressCountry: "GR",
    },
    containedInPlace: {
      "@type": "Place",
      name: `${addressLocality}, Αττική`,
    },
    ...(imagePath ? { image: fullUrl(imagePath) } : {}),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(church) }}
      />
      {breadcrumbs.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.name,
                item: fullUrl(crumb.url),
              })),
            }),
          }}
        />
      ) : null}
    </>
  );
}

export interface FaqJsonLdProps {
  readonly items: readonly { question: string; answer: string }[];
}

/** FAQPage structured data for rich results. */
export function FaqJsonLd({ items }: FaqJsonLdProps): ReactElement {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
