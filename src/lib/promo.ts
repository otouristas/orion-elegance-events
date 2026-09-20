/**
 * Single source of truth for the running baptism-packages promotion.
 *
 * The popup, the site-wide banner above the footer, the mobile menu
 * indicator and the in-page baptism CTAs all read from here.
 */
import { PLEIADES_ARTICLE_SLUG } from '@/data/pleiades-promo';

/** Article the baptism promotion points at, in both locales. */
export const PROMO_SLUG = 'paketa-vaptisis-ktima-orion-varsos-catering';

/** Artwork used by the baptism popup and feature banner. */
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

/** Article URL for the active baptism campaign. */
export const promoHref = (isEnglish: boolean) =>
  isEnglish ? `/en/blog/${PROMO_SLUG}` : `/blog/${PROMO_SLUG}`;

/** The baptism packages article never advertises itself. */
export const isPromoPage = (pathname: string) =>
  pathname === `/blog/${PROMO_SLUG}` || pathname === `/en/blog/${PROMO_SLUG}`;

export const isBlogRoute = (pathname: string) =>
  pathname === '/blog' ||
  pathname === '/en/blog' ||
  pathname.startsWith('/blog/') ||
  pathname.startsWith('/en/blog/');

export const isPleiadesArticle = (pathname: string) =>
  pathname === `/blog/${PLEIADES_ARTICLE_SLUG}` ||
  pathname === `/en/blog/${PLEIADES_ARTICLE_SLUG}`;

export const isHomepage = (pathname: string) => pathname === '/' || pathname === '/en';

/**
 * Pleiades keeps the delayed modal only on Partners (homepage) and blog posts.
 * Baptism packages take the popup on every other page, plus the site-wide
 * banner, menu indicator and in-page CTAs.
 */
export const shouldShowPleiadesPopup = (pathname: string) =>
  (isHomepage(pathname) || isBlogRoute(pathname)) &&
  !isPleiadesArticle(pathname) &&
  !isPromoPage(pathname);

export const shouldShowBaptismPopup = (pathname: string) =>
  !isHomepage(pathname) && !isBlogRoute(pathname) && !isPromoPage(pathname);

export const shouldShowBaptismBanner = (pathname: string) =>
  !isPromoPage(pathname) && !isBlogRoute(pathname);

export const shouldShowBaptismMenuIndicator = (pathname: string) => !isPromoPage(pathname);
