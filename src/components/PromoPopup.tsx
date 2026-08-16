'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  BAPTISM_PACKAGES_POPUP_IMAGE,
  BAPTISM_PACKAGES_POPUP_STORAGE_KEY,
  baptismPackagesArticlePath,
  isBaptismPackagesArticlePath,
} from '@/data/promoPopup';

export function PromoPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isEnglish = pathname.startsWith('/en');

  useEffect(() => {
    if (isBaptismPackagesArticlePath(pathname)) {
      setIsOpen(false);
      return;
    }
    if (typeof window === 'undefined') {
      return;
    }
    if (sessionStorage.getItem(BAPTISM_PACKAGES_POPUP_STORAGE_KEY)) {
      return;
    }
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(BAPTISM_PACKAGES_POPUP_STORAGE_KEY, 'shown');
      setIsOpen(true);
    }, 800);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const articleHref = baptismPackagesArticlePath(isEnglish ? 'en' : 'el');
  const title = isEnglish
    ? 'Baptism packages at Ktima Orion from €33 per person'
    : 'Πακέτα βάπτισης στο Κτήμα Ωρίων από 33€ / άτομο';
  const closeLabel = isEnglish ? 'Close offer' : 'Κλείσιμο προσφοράς';
  const ctaLabel = isEnglish ? 'Read the article' : 'Δείτε το άρθρο';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label={closeLabel}
        onClick={() => setIsOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="baptism-promo-title"
        className="relative z-[61] w-full max-w-xl md:max-w-2xl"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 z-[62] flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-text shadow-lg hover:bg-brand-main hover:text-white"
          aria-label={closeLabel}
        >
          <X className="h-5 w-5" />
        </button>
        <Link
          href={articleHref}
          onClick={() => setIsOpen(false)}
          className="block overflow-hidden rounded-xl border-2 border-[#c9a46a] bg-[#0b1830] shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-main"
        >
          <h2 id="baptism-promo-title" className="sr-only">
            {title}
          </h2>
          <span className="relative block w-full">
            <Image
              src={BAPTISM_PACKAGES_POPUP_IMAGE}
              alt={title}
              width={1080}
              height={1620}
              className="h-auto max-h-[82vh] w-full object-contain"
              sizes="(max-width: 768px) 92vw, 672px"
              priority
            />
          </span>
          <span className="block bg-[#c9a46a] py-3 text-center text-sm font-bold uppercase tracking-wide text-[#0b1830]">
            {ctaLabel}
          </span>
        </Link>
      </div>
    </div>
  );
}
