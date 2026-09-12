import { Shield, Users, Award, MapPin } from 'lucide-react';

interface Signal {
  readonly icon: typeof Award;
  readonly title: string;
  readonly description: string;
}

const signals: readonly Signal[] = [
  {
    icon: Award,
    title: 'Από το 2009',
    // Was "από το 2008", which contradicted the founding date declared in the
    // site's own structured data, llms.txt and the /emeis page.
    description: 'Πάνω από 500 γάμοι και βαπτίσεις στον χώρο μας.',
  },
  {
    icon: Shield,
    title: 'Μία εκδήλωση την ημέρα',
    description: 'Ο χώρος είναι αποκλειστικά δικός σας, χωρίς παράλληλες δεξιώσεις.',
  },
  {
    icon: MapPin,
    title: 'Δωρεάν parking 100+ θέσεων',
    description: 'Στάθμευση μέσα στο κτήμα για όλους τους καλεσμένους σας.',
  },
  {
    icon: Users,
    title: 'Από 50 έως 350 άτομα',
    description: 'Κλιματιζόμενη αίθουσα και εξωτερικός κήπος, για κάθε εποχή.',
  },
];

export const TrustSignals = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-brand-main/5 to-background">
      <div className="container-max">
        <h2 className="rule-brand rule-brand-center reveal text-center font-heading text-brand-text">
          Γιατί να επιλέξετε το Κτήμα Ωρίων
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, index) => (
            <div
              key={signal.title}
              className="card-elegant reveal p-7"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-main/10">
                <signal.icon className="h-5 w-5 text-brand-deep" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl text-brand-text">{signal.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
