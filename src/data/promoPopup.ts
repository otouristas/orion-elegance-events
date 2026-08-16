export const BAPTISM_PACKAGES_SLUG = 'paketa-vaptisis-ktima-orion-varsos' as const;

export const BAPTISM_PACKAGES_FEATURE_IMAGE = '/images/blog/ktima-orion-1.png' as const;

export const BAPTISM_PACKAGES_POPUP_IMAGE = '/images/blog/ktima-orion.png' as const;

export const BAPTISM_PACKAGES_POPUP_STORAGE_KEY = 'ktima-baptism-packages-popup-2026-08' as const;

export function baptismPackagesArticlePath(lang: 'el' | 'en'): string {
  return lang === 'en'
    ? `/en/blog/${BAPTISM_PACKAGES_SLUG}`
    : `/blog/${BAPTISM_PACKAGES_SLUG}`;
}

export function isBaptismPackagesArticlePath(pathname: string): boolean {
  return (
    pathname === `/blog/${BAPTISM_PACKAGES_SLUG}` ||
    pathname === `/en/blog/${BAPTISM_PACKAGES_SLUG}`
  );
}
