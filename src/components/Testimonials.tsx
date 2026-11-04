
export const Testimonials = () => {
  const testimonial = {
    name: 'Vasiliki Bekri',
    text: 'Θα ήθελα να εκφράσω κ εγώ τις ευχαριστίες μου για τον γάμο που πραγματοποιήσαμε το περασμένο Σάββατο στο κτήμα και είμαστε απόλυτα ευχαριστημένοι. Ο χώρος ήταν απλός αλλά εξαιρετικά ρομαντικός, καθαρός και καλαίσθητος, πραγματικά ήταν πολύ όμορφο το σκηνικό του γάμου. Το φαγητό ήταν απλώς εξαιρετικό! Το catering ΠΛΕΙΑΔΕΣ ξεπέρασε κάθε προσδοκία, οι καλεσμένοι μας ακόμη μιλάνε για το πόσο νόστιμα ήταν όλα τα πιάτα.'
  };

  return <section className="section-padding bg-background"><div className="container-max grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"><div><p className="eyebrow">Οι εμπειρίες σας</p><h2 className="mt-4 font-heading">Με τα δικά σας λόγια.</h2><a href="/reviews" className="mt-6 inline-flex min-h-11 items-center border-b border-brand-text/30 text-sm font-semibold">Δείτε τις κριτικές</a></div><figure className="border-l-2 border-brand-main/45 pl-6 md:pl-10"><blockquote className="text-lg leading-relaxed text-muted-foreground">«{testimonial.text}»</blockquote><figcaption className="mt-7 text-sm font-semibold">{testimonial.name}<span className="mt-1 block text-xs font-normal text-muted-foreground">Γαμήλια δεξίωση στο Κτήμα Ωρίων</span></figcaption></figure></div></section>;
};
