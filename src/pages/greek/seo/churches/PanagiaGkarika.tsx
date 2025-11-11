import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Users, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PanagiaGkarika() {
  const faqs = [
    {
      question: "Που βρίσκεται η Παναγία Γκαρικά;",
      answer: "Η Παναγία Γκαρικά βρίσκεται στην Κερατέα, μόλις 3,1 χλμ και 6 λεπτά από το Κτήμα Ωρίων. Είναι το πιο κοντινό εκκλησάκι στο κτήμα."
    },
    {
      question: "Είναι κατάλληλο για μικρούς γάμους;",
      answer: "Ναι! Η Παναγία Γκαρικά είναι ιδανική για intimate γάμους με 30-40 καλεσμένους. Το μικρό μέγεθος του εκκλησιού δημιουργεί μια πολύ προσωπική και συγκινητική ατμόσφαιρα."
    },
    {
      question: "Υπάρχει χώρος για φωτογραφίσεις;",
      answer: "Απολύτως! Το εκκλησάκι έχει όμορφο περιβάλλον με θέα και πολλά γραφικά σημεία για φωτογράφιση. Η εγγύτητα στη θάλασσα προσφέρει επιπλέον όμορφα background."
    },
    {
      question: "Πόσο εύκολη είναι η μετάβαση στο κτήμα;",
      answer: "Πολύ εύκολη! Μόλις 6 λεπτά οδήγηση. Αυτό σημαίνει ότι οι καλεσμένοι φτάνουν γρήγορα στη δεξίωση και η ημέρα κυλάει πιο ομαλά."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Layout>
      <SEO
        title="Παναγία Γκαρικά – Εκκλησάκι για Γάμο κοντά στη Θάλασσα"
        description="Γάμος στην Παναγία Γκαρικά Κερατέας. Μόλις 3,1 χλμ (6') από Κτήμα Ωρίων. Γραφικό εκκλησάκι για intimate τελετές. Κλείστε ραντεβού!"
        canonical="/el/ekklisies/panagia-gkarika"
        keywords="παναγια γκαρικα, γαμος κερατεα, εκκλησακι θαλασσα, μικρος γαμος κερατεα"
        lang="el"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-main/10 to-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Παναγία <span className="text-gradient-brand">Γκαρικά</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Το Πιο Κοντινό Εκκλησάκι στο Κτήμα Ωρίων
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="card-elegant p-6 text-center">
              <MapPin className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Απόσταση</h3>
              <p className="text-muted-foreground">3,1 χλμ</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Clock className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Χρόνος</h3>
              <p className="text-muted-foreground">6 λεπτά</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Users className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Χωρητικότητα</h3>
              <p className="text-muted-foreground">30-40 άτομα</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <Car className="w-8 h-8 text-brand-main mx-auto mb-3" />
              <h3 className="font-bold mb-2">Parking</h3>
              <p className="text-muted-foreground">Διαθέσιμο</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-elegant p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gradient-brand">Το Εκκλησάκι</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Η Παναγία Γκαρικά είναι ένα γραφικό εκκλησάκι στην Κερατέα, ιδανικό για intimate γάμους. 
                  Η εγγύτητά του με το Κτήμα Ωρίων (μόλις 6 λεπτά!) το καθιστά την πιο βολική επιλογή για 
                  ζευγάρια που θέλουν ομαλή μετάβαση από την τελετή στη δεξίωση.
                </p>
                <p>
                  Το μικρό μέγεθος του εκκλησιού δημιουργεί μια πολύ προσωπική και συγκινητική ατμόσφαιρα, 
                  ιδανική για γάμους με 30-40 καλεσμένους. Κάθε λεπτομέρεια γίνεται πιο αισθητή και η τελετή 
                  αποκτά έναν ιδιαίτερα οικείο χαρακτήρα.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-champagne/30 to-background">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Συχνές <span className="text-gradient-brand">Ερωτήσεις</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elegant p-6">
                <h3 className="text-xl font-bold mb-3 text-gradient-brand">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-brand-main/10 to-sage/20">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ξεκινήστε το <span className="text-gradient-brand">Ταξίδι σας</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Τελέστε τον γάμο σας στην Παναγία Γκαρικά και συνεχίστε με δεξίωση στο Κτήμα Ωρίων.
          </p>
          <Button size="lg" className="button button4" asChild>
            <a href="/epikoinonia">Κλείστε Επίσκεψη</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
