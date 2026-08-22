/**
 * Single source of truth for the currently running promotion.
 *
 * The popup, the site-wide banner above the footer and the mobile menu
 * indicator all read from here, so a campaign change is a one-file edit.
 */

/** Article the promotion points at, in both locales. */
export const PROMO_SLUG = 'paketa-vaptisis-ktima-orion-varsos-catering';

/** Artwork used by the popup. */
export const PROMO_IMAGE = '/promo/ktimaorion2.jpeg';

export const PROMO_COPY = {
  el: {
    eyebrow: 'Νέα προσφορά',
    title: 'Ολοκληρωμένα Πακέτα Βάπτισης',
    subtitle: 'Με L. Varsos Catering, από 33€ / άτομο για εκδηλώσεις από 100 καλεσμένους.',
    cta: 'Δείτε τα πακέτα',
    dismiss: 'Όχι τώρα',
    close: 'Κλείσιμο',
    alt: 'Ολοκληρωμένα πακέτα βάπτισης στο Κτήμα Ωρίων με L. Varsos Catering',
    /** Short form used by the mobile menu indicator. */
    menuLabel: 'Πακέτα Βάπτισης από 33€',
    menuBadge: 'ΠΡΟΣΦΟΡΑ',
    /** Banner above the footer. */
    bannerTitle: 'Πακέτα Βάπτισης με L. Varsos Catering από 33€ / άτομο',
    bannerText:
      'Classic Finger Food 33€ και Premium Finger Food 38€ ανά άτομο, για εκδηλώσεις από 100 καλεσμένους, με όλες τις παροχές του Κτήματος Ωρίων.',
  },
  en: {
    eyebrow: 'New offer',
    title: 'All-Inclusive Baptism Packages',
    subtitle: 'With L. Varsos Catering, from €33 per person for events from 100 guests.',
    cta: 'See the packages',
    dismiss: 'Not now',
    close: 'Close',
    alt: 'All-inclusive baptism packages at Ktima Orion with L. Varsos Catering',
    menuLabel: 'Baptism Packages from €33',
    menuBadge: 'OFFER',
    bannerTitle: 'Baptism Packages with L. Varsos Catering from €33 per person',
    bannerText:
      'Classic Finger Food at €33 and Premium Finger Food at €38 per person, for events from 100 guests, with all Ktima Orion amenities included.',
  },
} as const;

/** Article URL for the active locale. */
export const promoHref = (isEnglish: boolean) =>
  isEnglish ? `/en/blog/${PROMO_SLUG}` : `/blog/${PROMO_SLUG}`;

/** The promoted article never advertises itself. */
export const isPromoPage = (pathname: string) =>
  pathname === `/blog/${PROMO_SLUG}` || pathname === `/en/blog/${PROMO_SLUG}`;
