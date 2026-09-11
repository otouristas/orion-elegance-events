'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { PLEIADES_ARTICLE_SLUG, PLEIADES_PROMO_IMAGE } from '@/data/pleiades-promo';

/** Article the promotion points at, in both locales. */
const PROMO_SLUG = PLEIADES_ARTICLE_SLUG;
const PROMO_IMAGE = PLEIADES_PROMO_IMAGE;

/**
 * Bump the suffix to re-show the popup to visitors who dismissed an earlier campaign.
 */
const DISMISS_KEY = 'promoPopup:pleiades-synergasia-2026';

/** Give the visitor a moment with the page (and the cookie notice) first. */
const APPEAR_DELAY_MS = 6000;

const COPY = {
  el: {
    eyebrow: 'Συνεργασία',
    title: 'Ο γάμος των ονείρων σας',
    subtitle:
      'Κτήμα Ωρίων × Pleiades Catering — καλύτερα από ό,τι είχατε ονειρευτεί. Κλείστε σήμερα τον χώρο.',
    cta: 'Δείτε περισσότερα',
    dismiss: 'Όχι τώρα',
    close: 'Κλείσιμο',
    alt: 'Συνεργασία Κτήμα Ωρίων και Pleiades Catering — ο γάμος των ονείρων σας',
  },
  en: {
    eyebrow: 'Partnership',
    title: 'The wedding of your dreams',
    subtitle:
      'Ktima Orion × Pleiades Catering — better than you had dreamed. Book the venue today.',
    cta: 'Learn more',
    dismiss: 'Not now',
    close: 'Close',
    alt: 'Ktima Orion and Pleiades Catering partnership — the wedding of your dreams',
  },
} as const;

export const PromoPopup = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isEnglish = pathname.startsWith('/en');
  const copy = isEnglish ? COPY.en : COPY.el;
  const promoHref = isEnglish ? `/en/blog/${PROMO_SLUG}` : `/blog/${PROMO_SLUG}`;
  // Never interrupt the page the popup is advertising.
  const isPromoPage = pathname === `/blog/${PROMO_SLUG}` || pathname === `/en/blog/${PROMO_SLUG}`;
  // The homepage always re-shows the offer, on every visit and every refresh, so
  // a dismissal there is for the current view only and is never remembered.
  const isHomepage = pathname === '/' || pathname === '/en';

  const dismiss = useCallback(() => {
    setIsOpen(false);
    if (isHomepage) {
      return;
    }
    try {
      window.localStorage.setItem(DISMISS_KEY, 'dismissed');
    } catch {
      // Private browsing or blocked storage: closing for this view is enough.
    }
  }, [isHomepage]);

  useEffect(() => {
    if (isPromoPage) {
      return;
    }
    if (!isHomepage) {
      let dismissed = false;
      try {
        dismissed = window.localStorage.getItem(DISMISS_KEY) !== null;
      } catch {
        dismissed = false;
      }
      if (dismissed) {
        return;
      }
    }
    const timer = window.setTimeout(() => setIsOpen(true), APPEAR_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [isPromoPage, isHomepage]);

  // Lock background scrolling and wire up Escape while the dialog is open.
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dismiss();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, dismiss]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
    >
      {/* Decorative scrim: closing is also reachable via Escape and the labelled buttons. */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Compact card: portrait promo art is cropped so the dialog stays small. */}
      <div className="relative z-[201] w-full max-w-[220px] overflow-hidden rounded-xl bg-background shadow-2xl animate-in zoom-in-95 duration-300 sm:max-w-[260px]">
        {/* `p-0` resets the global `button` padding in globals.css, which would
            otherwise collapse this icon button's content box to zero width. */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={dismiss}
          className="absolute right-1.5 top-1.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 p-0 text-white transition-colors hover:bg-black/70"
          aria-label={copy.close}
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <Link href={promoHref} onClick={dismiss} className="block">
          <Image
            src={PROMO_IMAGE}
            alt={copy.alt}
            width={939}
            height={1675}
            className="h-28 w-full object-cover object-top sm:h-32"
            sizes="260px"
            priority
          />
        </Link>

        <div className="px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-main">
            {copy.eyebrow}
          </p>
          <h2 id="promo-popup-title" className="mt-0.5 text-sm font-bold leading-snug text-foreground sm:text-base">
            {copy.title}
          </h2>
          <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{copy.subtitle}</p>

          <div className="mt-2.5 flex flex-col gap-1">
            <Link
              href={promoHref}
              onClick={dismiss}
              className="flex min-h-[36px] items-center justify-center rounded-md bg-brand-main px-3 text-xs font-bold text-white transition-colors hover:bg-brand-dark sm:text-sm"
            >
              {copy.cta}
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="min-h-[32px] rounded-md px-3 text-[11px] text-muted-foreground transition-colors hover:bg-muted"
            >
              {copy.dismiss}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
