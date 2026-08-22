'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { PROMO_COPY, PROMO_IMAGE, isPromoPage, promoHref } from '@/lib/promo';

/**
 * Bump the suffix to re-show the popup to visitors who dismissed an earlier campaign.
 */
const DISMISS_KEY = 'promoPopup:vaptisi-paketa-2026';

/** Give the visitor a moment with the page (and the cookie notice) first. */
const APPEAR_DELAY_MS = 6000;

export const PromoPopup = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isEnglish = pathname.startsWith('/en');
  const copy = isEnglish ? PROMO_COPY.en : PROMO_COPY.el;
  const href = promoHref(isEnglish);
  // Never interrupt the page the popup is advertising.
  const onPromoPage = isPromoPage(pathname);
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
    if (onPromoPage) {
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
  }, [onPromoPage, isHomepage]);

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
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
    >
      {/* Decorative scrim: closing is also reachable via Escape and the labelled buttons. */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      <div className="relative z-[201] w-full max-w-sm overflow-hidden rounded-2xl bg-background shadow-2xl animate-in zoom-in-95 duration-300 sm:max-w-md">
        {/* `p-0` resets the global `button` padding in globals.css, which would
            otherwise collapse this icon button's content box to zero width. */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 p-0 text-white transition-colors hover:bg-black/70"
          aria-label={copy.close}
        >
          <X className="h-5 w-5" />
        </button>

        <Link href={href} onClick={dismiss} className="block">
          <Image
            src={PROMO_IMAGE}
            alt={copy.alt}
            width={1254}
            height={1254}
            className="h-auto w-full"
            sizes="(max-width: 640px) 92vw, 448px"
            priority
          />
        </Link>

        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-main">
            {copy.eyebrow}
          </p>
          <h2 id="promo-popup-title" className="mt-1 text-xl font-bold leading-tight text-foreground">
            {copy.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy.subtitle}</p>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Link
              href={href}
              onClick={dismiss}
              className="flex min-h-[44px] flex-1 items-center justify-center rounded-md bg-brand-main px-5 font-bold text-white transition-colors hover:bg-brand-dark"
            >
              {copy.cta}
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="min-h-[44px] rounded-md border border-border px-5 text-sm text-muted-foreground transition-colors hover:bg-muted"
            >
              {copy.dismiss}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
