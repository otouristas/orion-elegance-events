/** Production site URL — all canonicals resolve here. */
export const SITE_URL = "https://ktimaorion.gr" as const;

export const SITE_NAME_EL = "Κτήμα Ωρίων" as const;

export const SITE_NAME_EN = "Ktima Orion" as const;

export const DEFAULT_OG_IMAGE = "/images/hero-image.jpg" as const;

export const PHONE = "+302299068812" as const;

export const EMAIL = "info@ktimaorion.gr" as const;

/** Public venue address, used consistently in visible contact details and LocalBusiness schema. */
export const STREET_ADDRESS_EL = "45ο χλμ Νέας Λεωφόρου Αθηνών–Λαυρίου" as const;
export const STREET_ADDRESS_EN = "45th km New Athens–Lavrio Avenue" as const;
export const POSTAL_CODE = "190 01" as const;

/**
 * Canonical public Google Maps entity for the venue. This is the established
 * profile to reference in structured data; using it avoids signalling a
 * separate, coordinate-only location.
 */
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps?cid=527996956000463319" as const;

export const GEO_LAT = "37.802493" as const;

export const GEO_LNG = "24.028817" as const;
