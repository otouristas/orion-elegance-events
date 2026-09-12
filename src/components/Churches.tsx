import Link from 'next/link';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { CHURCH_COUNT, CHURCH_MINUTES_RANGE, churches } from '@/data/churches';

export const Churches = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">Η τελετή</p>
          <h2 className="rule-brand rule-brand-center mt-4 font-heading text-brand-text">
            Παραθαλάσσια εκκλησάκια δίπλα στο κτήμα
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {CHURCH_COUNT} εκκλησάκια για την τέλεση του μυστηρίου βρίσκονται{' '}
            {CHURCH_MINUTES_RANGE} λεπτά με το αυτοκίνητο από το Κτήμα Ωρίων, με
            θέα στο Αιγαίο. Τελετή και δεξίωση γίνονται άνετα την ίδια ημέρα.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {churches.map((church, index) => (
            <li
              key={church.href}
              className="reveal"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <Link
                href={church.href}
                className="card-elegant group flex h-full flex-col p-6"
              >
                <h3 className="font-heading text-2xl text-brand-text">
                  {church.name}
                </h3>
                <p className="mt-1 text-muted-foreground">{church.location}</p>

                {church.note ? (
                  <p className="mt-3 text-sm text-brand-deep">{church.note}</p>
                ) : null}

                <div className="mt-auto flex items-center gap-5 pt-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-brand-main" aria-hidden="true" />
                    {church.distance}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-brand-main" aria-hidden="true" />
                    {church.minutes} λεπτά
                  </span>
                  <ArrowRight
                    className="ml-auto h-4 w-4 text-brand-main transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="reveal mt-12 text-center">
          <Link href="/ekklisies" className="button button4">
            Δείτε όλες τις εκκλησίες
          </Link>
        </div>
      </div>
    </section>
  );
};
