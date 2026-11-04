import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PLEIADES_ARTICLE_SLUG } from '@/data/pleiades-promo';

const pleiadesLogo = '/images/pleiades%20LOGO_transparent.black.png';
const topeventsLogo = '/images/topevents-logo.png';
const varsosLogo =
  'https://varsospaidikoparty.gr/wp-content/uploads/2023/04/ecb979c2-d99f-4969-bb66-6003a4c86b19-768x768.png';

type Partner = {
  name: string;
  logo: string;
  alt: string;
  description: string;
  cta: string;
  href: string;
  external?: boolean;
};

const partners: Partner[] = [
  {
    name: 'Pleiades Catering',
    logo: pleiadesLogo,
    alt: 'Pleiades Catering — Ktima Orion culinary partner',
    description: 'Outstanding cuisine for the wedding of your dreams',
    cta: 'See the partnership →',
    href: `/en/blog/${PLEIADES_ARTICLE_SLUG}`,
  },
  {
    name: 'Top Events',
    logo: topeventsLogo,
    alt: 'Top Events Entertainment Services — DJ and music',
    description: 'Professional DJ and music for every event',
    cta: 'Learn more →',
    href: '/en/dj-music',
  },
  {
    name: 'Varsos Paidiko Party',
    logo: varsosLogo,
    alt: 'Varsos Kids Party — Ktima Orion partner',
    description: "Kids' party entertainment for your youngest guests",
    cta: 'Visit the website →',
    href: 'https://varsospaidikoparty.gr',
    external: true,
  },
];

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <Card className="card-elegant group h-full hover:shadow-xl transition-all duration-300">
    <CardContent className="flex h-full flex-col items-center justify-center gap-4 p-8">
      <div className="flex w-full max-w-[320px] aspect-square items-center justify-center">
        <Image
          src={partner.logo}
          alt={partner.alt}
          width={320}
          height={320}
          className="max-h-full w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
          loading="lazy"
          sizes="320px"
        />
      </div>
      <p className="text-center text-sm text-muted-foreground">{partner.description}</p>
      <span className="text-sm font-semibold text-brand-main group-hover:underline">{partner.cta}</span>
    </CardContent>
  </Card>
);

export const PartnersEn = () => {
  return (
    <section id="partners" className="section-padding bg-gradient-to-b from-background to-brand-main/5">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-heading mb-4">
            <span className="text-gradient-brand">Partners</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Selected partners who elevate your event experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) =>
            partner.external ? (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <PartnerCard partner={partner} />
              </a>
            ) : (
              <Link key={partner.name} href={partner.href} className="block h-full">
                <PartnerCard partner={partner} />
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
