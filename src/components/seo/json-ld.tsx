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
import {
  AVERAGE_RATING,
  REVIEW_COUNT,
  guestReviews,
  reviewIsoDate,
} from "@/data/reviews";

/** Guest capacity, stated identically in the copy, the FAQ and llms.txt. */
const MIN_CAPACITY = 50;
const MAX_CAPACITY = 350;

/**
 * Amenities a visitor can verify on the site. Kept deliberately short — every
 * entry corresponds to something stated on /o-horos.
 */
const AMENITIES: readonly string[] = [
  "Δωρεάν parking 100+ θέσεων",
  "Κλιματιζόμενη αίθουσα",
  "Κήπος με θέα στη θάλασσα",
  "Ημιυπαίθρια παγόδα",
  "Πισίνα",
  "Χώρος παιχνιδιού για παιδιά",
];

function amenityFeature() {
  return AMENITIES.map((name) => ({
    "@type": "LocationFeatureSpecification" as const,
    name,
    value: true,
  }));
}

/**
 * Rating over the reviews published on /reviews.
 *
 * Note for anyone extending this: Google has excluded self-serving reviews —
 * reviews about a business, hosted on that business's own site — from
 * LocalBusiness star rich results since 2019, so this will not put stars in the
 * SERP. It is here because answer engines read it, and because the values are
 * computed from the reviews on the page rather than asserted.
 */
function aggregateRating() {
  return {
    "@type": "AggregateRating" as const,
    ratingValue: AVERAGE_RATING,
    reviewCount: REVIEW_COUNT,
    bestRating: 5,
    worstRating: 1,
  };
}

/** A few representative reviews, only those carrying a real publication date. */
function sampleReviews() {
  return guestReviews
    .filter((review) => reviewIsoDate(review) !== undefined)
    .slice(0, 5)
    .map((review) => ({
      "@type": "Review" as const,
      author: { "@type": "Person" as const, name: review.name },
      datePublished: reviewIsoDate(review),
      reviewRating: {
        "@type": "Rating" as const,
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.text,
    }));
}

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
      currenciesAccepted: "EUR",
      hasMap: GOOGLE_MAPS_URL,
      foundingDate: "2009",
      maximumAttendeeCapacity: MAX_CAPACITY,
      amenityFeature: amenityFeature(),
      aggregateRating: aggregateRating(),
      review: sampleReviews(),
      areaServed: [
        "Κερατέα",
        "Λαύριο",
        "Μαρκόπουλο",
        "Πόρτο Ράφτη",
        "Ανατολική Αττική",
        "Αθήνα",
      ].map((name) => ({ "@type": "Place" as const, name })),
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
      maximumAttendeeCapacity: MAX_CAPACITY,
      amenityFeature: amenityFeature(),
      aggregateRating: aggregateRating(),
      isAccessibleForFree: false,
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

/**
 * FAQPage structured data.
 *
 * Google restricted FAQ rich results to government and health sites in August
 * 2023, so this no longer produces SERP accordions. It is kept because answer
 * engines parse it directly, and it remains the cleanest machine-readable form
 * of the questions people actually ask before booking.
 */
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

export interface ServiceOffer {
  /** Price per person in euro, where a published figure exists. */
  readonly price?: number;
  readonly name: string;
  readonly description?: string;
}

export interface ServiceJsonLdProps {
  readonly name: string;
  readonly description: string;
  readonly canonicalPath: string;
  readonly offers?: readonly ServiceOffer[];
}

/**
 * A service the venue provides (wedding reception, baptism, corporate event).
 *
 * Prices are per person and must match a figure published on the page — the
 * baptism packages are the only ones with public pricing, so they are the only
 * ones that pass `price`.
 */
export function ServiceJsonLd({
  name,
  description,
  canonicalPath,
  offers = [],
}: ServiceJsonLdProps): ReactElement {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: fullUrl(canonicalPath),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Place", name: "Αττική, Ελλάδα" },
    ...(offers.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name,
            itemListElement: offers.map((offer) => ({
              "@type": "Offer",
              name: offer.name,
              ...(offer.description ? { description: offer.description } : {}),
              ...(offer.price !== undefined
                ? {
                    price: offer.price,
                    priceCurrency: "EUR",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: offer.price,
                      priceCurrency: "EUR",
                      unitText: "άτομο",
                    },
                  }
                : {}),
            })),
          },
        }
      : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export interface BlogPostingJsonLdProps {
  readonly headline: string;
  readonly description: string;
  readonly canonicalPath: string;
  readonly datePublished: string;
  readonly dateModified?: string;
  readonly imagePath?: string;
}

/** Article markup for the planning guides. */
export function BlogPostingJsonLd({
  headline,
  description,
  canonicalPath,
  datePublished,
  dateModified,
  imagePath,
}: BlogPostingJsonLdProps): ReactElement {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": fullUrl(canonicalPath) },
    url: fullUrl(canonicalPath),
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "el",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(imagePath ? { image: fullUrl(imagePath) } : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
