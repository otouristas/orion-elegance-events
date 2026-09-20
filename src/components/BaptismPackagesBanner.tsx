'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PROMO_COPY, PROMO_IMAGE, promoHref } from '@/lib/promo';

interface BaptismPackagesBannerProps {
  /** Force locale when pathname is not available (SSR views). */
  lang?: 'el' | 'en';
}

/**
 * Large in-page baptism-packages feature, used on baptism service pages.
 */
export const BaptismPackagesBanner = ({ lang }: BaptismPackagesBannerProps) => {
  const pathname = usePathname();
  const isEnglish = lang === 'en' || (!lang && pathname.startsWith('/en'));
  const copy = isEnglish ? PROMO_COPY.en : PROMO_COPY.el;
  const articleHref = promoHref(isEnglish);
  const contactHref = isEnglish ? '/en/contact' : '/epikoinonia';

  return (
    <section className="section-padding bg-gradient-to-b from-brand-main/5 via-background to-background">
      <div className="container-max">
        <div className="overflow-hidden rounded-2xl border border-brand-main/15 bg-background shadow-lg">
          <div className="grid items-stretch lg:grid-cols-2">
            <Link href={articleHref} className="relative block min-h-[280px] bg-black/5 lg:min-h-[420px]">
              <Image
                src={PROMO_IMAGE}
                alt={copy.alt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
              />
            </Link>

            <div className="flex flex-col justify-center gap-5 p-8 md:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-main">
                {copy.eyebrow}
              </p>
              <h2 className="font-heading leading-tight">
                <span className="text-gradient-brand">{copy.title}</span>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {copy.subtitle} {copy.bannerText}
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                <Link
                  href={articleHref}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand-main px-6 font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  {copy.cta}
                </Link>
                <Link
                  href={contactHref}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  {isEnglish ? 'Book the venue' : 'Κλείστε τον χώρο'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
