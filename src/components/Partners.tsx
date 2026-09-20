import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PLEIADES_ARTICLE_SLUG } from '@/data/pleiades-promo';

const pleiadesLogo = '/images/pleiades%20LOGO_transparent.black.png';
const topeventsLogo = '/images/topevents-logo.png';

export const Partners = () => {
  return (
    <section id="synergates" className="section-padding bg-gradient-to-b from-background to-brand-main/5">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-heading mb-4">
            <span className="text-gradient-brand">Συνεργάτες</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Επιλεγμένοι συνεργάτες που απογειώνουν την εμπειρία της εκδήλωσής σας
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href={`/blog/${PLEIADES_ARTICLE_SLUG}`} className="block h-full">
            <Card className="card-elegant group h-full hover:shadow-xl transition-all duration-300">
              <CardContent className="flex h-full flex-col items-center justify-center gap-4 p-8">
                <Image
                  src={pleiadesLogo}
                  alt="Pleiades Catering — συνεργάτης γαστρονομίας Κτήμα Ωρίων"
                  width={320}
                  height={320}
                  className="w-full max-w-[320px] h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                  sizes="320px"
                />
                <p className="text-center text-sm text-muted-foreground">
                  Κορυφαία γαστρονομία για τον γάμο των ονείρων σας
                </p>
                <span className="text-sm font-semibold text-brand-main group-hover:underline">
                  Δείτε τη συνεργασία →
                </span>
              </CardContent>
            </Card>
          </Link>

          <Card className="card-elegant group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex items-center justify-center">
              <Image
                src={topeventsLogo}
                alt="Top Events Entertainment Services"
                width={320}
                height={320}
                className="w-full max-w-[320px] h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="320px"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
