'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PLEIADES_ARTICLE_SLUG, PLEIADES_PROMO_IMAGE } from '@/data/pleiades-promo';

export { PLEIADES_ARTICLE_SLUG, PLEIADES_PROMO_IMAGE };

const COPY = {
  el: {
    eyebrow: 'Συνεργασία',
    title: 'Κτήμα Ωρίων × Pleiades Catering',
    body: 'Εκεί όπου η λάμψη συναντά τα όνειρά σας. Από το 2009 στην Κερατέα, με κορυφαία γαστρονομία από το Pleiades Catering — καλύτερα από ό,τι είχατε ονειρευτεί.',
    cta: 'Δείτε τη συνεργασία',
    book: 'Κλείστε τον χώρο',
    alt: 'Συνεργασία Κτήμα Ωρίων και Pleiades Catering — ο γάμος των ονείρων σας',
  },
  en: {
    eyebrow: 'Partnership',
    title: 'Ktima Orion × Pleiades Catering',
    body: 'Where sparkle meets your dreams. Since 2009 in Keratea, with outstanding cuisine from Pleiades Catering — better than you had dreamed.',
    cta: 'See the partnership',
    book: 'Book the venue',
    alt: 'Ktima Orion and Pleiades Catering partnership — the wedding of your dreams',
  },
} as const;

interface PleiadesBannerProps {
  /** Force locale when pathname is not available (SSR views). */
  lang?: 'el' | 'en';
}

export const PleiadesBanner = ({ lang }: PleiadesBannerProps) => {
  const pathname = usePathname();
  const isEnglish = lang === 'en' || (!lang && pathname.startsWith('/en'));
  const copy = isEnglish ? COPY.en : COPY.el;
  const articleHref = isEnglish
    ? `/en/blog/${PLEIADES_ARTICLE_SLUG}`
    : `/blog/${PLEIADES_ARTICLE_SLUG}`;
  const contactHref = isEnglish ? '/en/contact' : '/epikoinonia';

  return (
    <section className="section-padding bg-gradient-to-b from-brand-main/5 via-background to-background">
      <div className="container-max">
        <div className="overflow-hidden rounded-2xl border border-brand-main/15 bg-background shadow-lg">
          <div className="grid items-stretch lg:grid-cols-2">
            <Link href={articleHref} className="relative block min-h-[280px] bg-black/5 lg:min-h-[420px]">
              <Image
                src={PLEIADES_PROMO_IMAGE}
                alt={copy.alt}
                fill
                className="object-cover object-top"
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
                {copy.body}
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
                  {copy.book}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
