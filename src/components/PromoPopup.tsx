'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { PLEIADES_ARTICLE_SLUG, PLEIADES_PROMO_IMAGE } from '@/data/pleiades-promo';
import {
  PROMO_COPY,
  PROMO_IMAGE,
  isHomepage,
  promoHref,
  shouldShowBaptismPopup,
  shouldShowPleiadesPopup,
} from '@/lib/promo';

type Campaign = 'baptism' | 'pleiades';

const PLEIADES_COPY = {
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

/** Bump the suffix to re-show a campaign after a previous dismissal. */
const DISMISS_KEY = {
  baptism: 'promoPopup:vaptisi-paketa-2026-restore',
  pleiades: 'promoPopup:pleiades-synergasia-2026',
} as const;

/** Give the visitor a moment with the page (and the cookie notice) first. */
const APPEAR_DELAY_MS = 6000;

function resolveCampaign(pathname: string): Campaign | null {
  if (shouldShowPleiadesPopup(pathname)) {
    return 'pleiades';
  }
  if (shouldShowBaptismPopup(pathname)) {
    return 'baptism';
  }
  return null;
}

export const PromoPopup = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const campaign = resolveCampaign(pathname);
  const isEnglish = pathname.startsWith('/en');
  const onHomepage = isHomepage(pathname);
  const copy =
    campaign === 'pleiades'
      ? isEnglish
        ? PLEIADES_COPY.en
        : PLEIADES_COPY.el
      : isEnglish
        ? PROMO_COPY.en
        : PROMO_COPY.el;
  const href =
    campaign === 'pleiades'
      ? isEnglish
        ? `/en/blog/${PLEIADES_ARTICLE_SLUG}`
        : `/blog/${PLEIADES_ARTICLE_SLUG}`
      : promoHref(isEnglish);
  const image = campaign === 'pleiades' ? PLEIADES_PROMO_IMAGE : PROMO_IMAGE;
  const imageSize =
    campaign === 'pleiades' ? { width: 939, height: 1675 } : { width: 1254, height: 1254 };
  const imageClass =
    campaign === 'pleiades'
      ? 'h-44 w-full object-cover object-top sm:h-48'
      : 'h-44 w-full object-cover object-center sm:h-48';

  const dismiss = useCallback(() => {
    setIsOpen(false);
    // Homepage always re-shows the baptism offer on the next visit.
    if (!campaign || (campaign === 'baptism' && onHomepage)) {
      return;
    }
    try {
      window.localStorage.setItem(DISMISS_KEY[campaign], 'dismissed');
    } catch {
      // Private browsing or blocked storage: closing for this view is enough.
    }
  }, [campaign, onHomepage]);

  useEffect(() => {
    setIsOpen(false);
    if (!campaign) {
      return;
    }
    if (!(campaign === 'baptism' && onHomepage)) {
      let dismissed = false;
      try {
        dismissed = window.localStorage.getItem(DISMISS_KEY[campaign]) !== null;
      } catch {
        dismissed = false;
      }
      if (dismissed) {
        return;
      }
    }
    const timer = window.setTimeout(() => setIsOpen(true), APPEAR_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [campaign, onHomepage, pathname]);

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

  if (!isOpen || !campaign) {
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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Mid-size card: cropped image keeps height in check without feeling tiny.
          Use built-in max-w-xs (320px) — arbitrary max-w-[Npx] was not reliably emitted. */}
      <div className="relative z-[201] w-full max-w-xs overflow-hidden rounded-xl bg-background shadow-2xl animate-in zoom-in-95 duration-300">
        {/* `p-0` resets the global `button` padding in globals.css, which would
            otherwise collapse this icon button's content box to zero width. */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={dismiss}
          className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 p-0 text-white transition-colors hover:bg-black/70"
          aria-label={copy.close}
        >
          <X className="h-4 w-4" />
        </button>

        <Link href={href} onClick={dismiss} className="block">
          <Image
            src={image}
            alt={copy.alt}
            width={imageSize.width}
            height={imageSize.height}
            className={imageClass}
            sizes="320px"
            priority
          />
        </Link>

        <div className="px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-main">
            {copy.eyebrow}
          </p>
          <h2 id="promo-popup-title" className="font-heading mt-1 leading-snug text-foreground">
            {copy.title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{copy.subtitle}</p>

          <div className="mt-4 flex flex-col gap-1.5">
            <Link
              href={href}
              onClick={dismiss}
              className="flex min-h-[44px] items-center justify-center rounded-md bg-brand-main px-4 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              {copy.cta}
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="min-h-[36px] rounded-md px-4 text-sm text-muted-foreground transition-colors hover:bg-muted"
            >
              {copy.dismiss}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
