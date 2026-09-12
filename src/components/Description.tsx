export const Description = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="reveal mx-auto max-w-4xl">
          <p className="eyebrow rule-brand rule-brand-center text-center">
            Κτήμα δεξιώσεων στην Κερατέα
          </p>

          {/* Rewritten from the original paragraph, which carried four final-ν
              errors and a lowercased Αττική Οδό. Concrete figures replace the
              generic superlatives — they are what both readers and answer
              engines actually use. */}
          <div className="mt-10 grid gap-6 text-lg leading-relaxed text-muted-foreground md:grid-cols-2 md:gap-10 md:text-xl">
            <p>
              Το Κτήμα Ωρίων είναι ένας καταπράσινος χώρος δεξιώσεων στην
              Κερατέα, με θέα στη θάλασσα και εύκολη πρόσβαση από την Αττική
              Οδό — σαράντα πέντε λεπτά από το κέντρο της Αθήνας. Από το 2009
              φιλοξενούμε γάμους, βαπτίσεις και εταιρικές εκδηλώσεις, από 50
              έως 350 άτομα.
            </p>
            <p>
              Η κλιματιζόμενη αίθουσα και ο εξωτερικός κήπος λειτουργούν όλο
              τον χρόνο, ώστε ο καιρός να μην καθορίζει την ημέρα σας. Για την
              τέλεση του μυστηρίου, πέντε παραθαλάσσια εκκλησάκια απέχουν από 6
              έως 13 λεπτά, ενώ ο χώρος στάθμευσης καλύπτει πάνω από 100
              αυτοκίνητα.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
