import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonial = {
    name: 'Vasiliki Bekri',
    text: 'Θα ήθελα να εκφράσω κ εγώ τις ευχαριστίες μου για τον γάμο που πραγματοποιήσαμε το περασμένο Σάββατο στο κτήμα και είμαστε απόλυτα ευχαριστημένοι. Ο χώρος ήταν απλός αλλά εξαιρετικά ρομαντικός, καθαρός και καλαίσθητος, πραγματικά ήταν πολύ όμορφο το σκηνικό του γάμου. Το φαγητό ήταν απλώς εξαιρετικό! Το catering ΠΛΕΙΑΔΕΣ ξεπέρασε κάθε προσδοκία, οι καλεσμένοι μας ακόμη μιλάνε για το πόσο νόστιμα ήταν όλα τα πιάτα.'
  };

  return (
    <section className="section-padding bg-gradient-to-r from-champagne to-sage/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Εντυπώσεις <span className="text-gradient-gold">Επισκεπτών</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ακούστε τι λένε οι φιλοξενούμενοί μας για την εμπειρία τους
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elegant p-8 md:p-12">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl leading-relaxed text-center text-muted-foreground mb-8 italic">
              "{testimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <div className="font-bold text-xl text-gradient-gold mb-2">
                {testimonial.name}
              </div>
              <div className="text-muted-foreground">
                Ευχαριστημένη νύφη
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-2">500+</div>
            <div className="text-muted-foreground">Εκδηλώσεις</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-2">20+</div>
            <div className="text-muted-foreground">Χρόνια Εμπειρίας</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-2">100%</div>
            <div className="text-muted-foreground">Ικανοποίηση</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-2">7</div>
            <div className="text-muted-foreground">Εκκλησάκια Κοντά</div>
          </div>
        </div>
      </div>
    </section>
  );
};