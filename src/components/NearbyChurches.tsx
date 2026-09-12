import Link from 'next/link';
import { Church, MapPin, Clock } from 'lucide-react';
import { CHURCH_COUNT, CHURCH_MINUTES_RANGE, churches } from '@/data/churches';

/**
 * Compact cross-link module for the wedding and baptism pages. The homepage
 * uses the fuller `Churches` section instead — the two used to render one after
 * the other there, repeating the same five churches on a single page.
 */
export const NearbyChurches = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-brand-main/5 to-background">
      <div className="container-max">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">Για την τελετή</p>
          <h2 className="rule-brand rule-brand-center mt-4 font-heading text-brand-text">
            Κοντινές εκκλησίες
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">
            {CHURCH_COUNT} παραθαλάσσια εκκλησάκια, {CHURCH_MINUTES_RANGE} λεπτά
            με το αυτοκίνητο από το κτήμα.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {churches.map((church, index) => (
            <li
              key={church.href}
              className="reveal"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <Link
                href={church.href}
                className="card-elegant flex h-full flex-col items-center gap-3 p-6 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-main/10">
                  <Church className="h-5 w-5 text-brand-deep" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg leading-tight text-brand-text">
                  {church.name}
                </h3>
                <p className="text-xs text-muted-foreground">{church.location}</p>
                <div className="mt-auto flex flex-col gap-1 pt-3 text-xs text-muted-foreground">
                  <span className="flex items-center justify-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {church.distance}
                  </span>
                  <span className="flex items-center justify-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {church.minutes} λεπτά οδικώς
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="reveal mt-10 text-center">
          <Link href="/ekklisies" className="button button4">
            Δείτε όλες τις εκκλησίες
          </Link>
        </div>
      </div>
    </section>
  );
};
