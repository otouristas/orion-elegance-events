'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { PROMO_COPY, promoHref, shouldShowBaptismBanner } from '@/lib/promo';

/**
 * Site-wide baptism-packages strip rendered directly above the footer.
 */
export const PromoBanner = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const copy = isEnglish ? PROMO_COPY.en : PROMO_COPY.el;

  if (!shouldShowBaptismBanner(pathname)) {
    return null;
  }

  return (
    <section className="border-y border-brand-main/20 bg-brand-main/10">
      <div className="container-max px-4 py-10 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-main">
              <Sparkles className="h-4 w-4" />
              {copy.eyebrow}
            </p>
            <h2 className="mt-2 font-heading text-2xl leading-tight text-foreground md:text-3xl">
              {copy.bannerTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{copy.bannerText}</p>
          </div>

          <Link
            href={promoHref(isEnglish)}
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-md bg-brand-main px-7 font-bold text-white transition-colors hover:bg-brand-dark"
          >
            {copy.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
