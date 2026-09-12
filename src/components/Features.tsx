import Image from "next/image";

const iconHome1 = "/images/icon-home1.png";
const iconHome3 = "/images/icon-home3.png";
const iconHome5 = "/images/icon-home5.png";

interface Feature {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

/* The previous shape carried a `title: "KTIMA ORION"` on all three entries —
   the same Latin string repeated, with the real heading hidden in `subtitle`. */
const features: readonly Feature[] = [
  {
    icon: iconHome3,
    title: "Έμπειρο και ευγενικό προσωπικό",
    description:
      "Το προσωπικό του κτήματος αναλαμβάνει τον συντονισμό της ημέρας, από την υποδοχή των καλεσμένων ως το τελευταίο τραπέζι, με διακριτικότητα και συνέπεια.",
  },
  {
    icon: iconHome5,
    title: "Δίπλα σε παραθαλάσσια εκκλησάκια",
    description:
      "Πέντε εκκλησάκια για την τέλεση του μυστηρίου βρίσκονται 6 έως 13 λεπτά με το αυτοκίνητο, ώστε τελετή και δεξίωση να γίνονται άνετα την ίδια ημέρα.",
  },
  {
    icon: iconHome1,
    title: "Χώροι για κάθε εποχή",
    description:
      "Κλιματιζόμενη αίθουσα, ημιυπαίθρια παγόδα και κήπος με θέα στη θάλασσα: η εκδήλωση προσαρμόζεται στον καιρό χωρίς να χάνει τίποτα.",
  },
];

export const Features = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
      <div className="container-max">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="reveal"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <Image
                src={feature.icon}
                alt=""
                aria-hidden="true"
                width={100}
                height={100}
                className="h-20 w-20 object-contain"
                loading="lazy"
              />
              <h3 className="rule-brand mt-7 font-heading text-2xl text-brand-text">
                {feature.title}
              </h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
