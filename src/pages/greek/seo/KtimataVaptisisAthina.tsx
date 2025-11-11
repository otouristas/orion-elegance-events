import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Baby, Users, MapPin, Car, Home, Church, TreePine, Star, CheckCircle2, Phone, Utensils } from 'lucide-react';

export default function KtimataVaptisisAthina() {
  const features = [
    { icon: Baby, title: "Παιδικό Μενού", description: "Ειδικές επιλογές για τα μικρά παιδιά" },
    { icon: TreePine, title: "Σκιασμένοι Κήποι", description: "Χώρος με σκιά για άνεση όλη την ημέρα" },
    { icon: Users, title: "30-200 Άτομα", description: "Οικογενειακές διαρρυθμίσεις" },
    { icon: Car, title: "Άνετη Στάθμευση", description: "Χώρος για όλη την οικογένεια" },
    { icon: Church, title: "Κοντά στη Θάλασσα", description: "Παραθαλάσσιοι ναοί στην περιοχή" },
    { icon: Home, title: "Plan B Χώρος", description: "Καλυμμένη αίθουσα σε περίπτωση βροχής" }
  ];

  const faqs = [
    {
      question: "Πόσα άτομα μπορούμε να φιλοξενήσουμε για βάπτιση;",
      answer: "Το Κτήμα Ωρίων μπορεί να φιλοξενήσει από 30 έως 200 άτομα για βαπτιστική δεξίωση, με ευέλικτες διαρρυθμίσεις εσωτερικού και εξωτερικού χώρου."
    },
    {
      question: "Υπάρχουν εκκλησίες κοντά στο κτήμα;",
      answer: "Ναι! Υπάρχουν πολλοί γραφικοί ναοί στην περιοχή όπως ο Άγιος Αλέξανδρος Δασκαλειό (10 λεπτά), Άγιος Παντελεήμονας (8 λεπτά) και άλλοι."
    },
    {
      question: "Τι περιλαμβάνουν τα πακέτα βάπτισης;",
      answer: "Τα πακέτα μας περιλαμβάνουν catering με παιδικό μενού, διακόσμηση, ηχητική κάλυψη, χώρο υποδοχής και προαιρετικά φωτογραφία/video."
    },
    {
      question: "Υπάρχει χώρος παιχνιδιού για παιδιά;",
      answer: "Ναι, διαθέτουμε μεγάλους σκιασμένους κήπους όπου τα παιδιά μπορούν να παίξουν με ασφάλεια. Μπορούμε επίσης να οργανώσουμε animation και δραστηριότητες."
    },
    {
      question: "Πόσο κοστίζει μια βάπτιση στο Κτήμα Ωρίων;",
      answer: "Τα πακέτα βάπτισης ξεκινούν από 35€/άτομο και προσαρμόζονται ανάλογα με τον αριθμό καλεσμένων και τις υπηρεσίες που επιλέγετε."
    },
    {
      question: "Μπορούμε να κάνουμε βάπτιση το μεσημέρι;",
      answer: "Απολύτως! Προσφέρουμε πακέτα για πρωινές ή μεσημεριανές δεξιώσεις με ειδικά μενού brunch ή γεύμα. Οι σκιασμένοι χώροι μας είναι ιδανικοί για ημερήσιες εκδηλώσεις."
    }
  ];

  const packages = [
    { 
      title: "Βασικό Πακέτο", 
      price: "Από 35€/άτομο", 
      features: ["Catering με παιδικό μενού", "Βασική διακόσμηση", "Ηχητική κάλυψη", "Χώρος υποδοχής", "Στάθμευση"] 
    },
    { 
      title: "Premium Πακέτο", 
      price: "Από 50€/άτομο", 
      features: ["Deluxe catering", "Πλήρης διακόσμηση", "DJ & μουσική", "Animation για παιδιά", "Φωτογράφος (3 ώρες)"] 
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Κτήμα για Βάπτιση στην Αθήνα | Κτήμα Ωρίων Κερατέα"
        description="Όμορφοι υπαίθριοι χώροι για βάπτιση στο Κτήμα Ωρίων. Οικογενειακά μενού, σκιασμένοι κήποι, κοντά σε εκκλησίες. Ρωτήστε για πακέτα ημέρας & φωτογραφίες."
        canonical="/el/ktimata-vaptisis-athina"
        keywords="κτήμα βάπτισης αθήνα, κτήματα για βάπτιση, χώρος βάπτισης αττική, βάπτιση δίπλα στη θάλασσα, κτήμα βάπτισης κερατέα"
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient-brand">Κτήμα για Βάπτιση στην Αθήνα</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Δημιουργήστε αξέχαστες αναμνήσεις για τη βάπτιση του παιδιού σας στο Κτήμα Ωρίων
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="button button4">
                    Κλείστε Επίσκεψη
                  </button>
                </Link>
                <a href="tel:+302299068812">
                  <button className="button button4">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Καλέστε 22990 68812
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="text-gradient-brand">Γιατί το Κτήμα Ωρίων για τη βάπτιση;</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              Ένας φιλικός προς την οικογένεια χώρος με όλες τις ανέσεις για μια τέλεια βαπτιστική γιορτή
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <feature.icon className="w-10 h-10 text-brand-main mb-4" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Πακέτα Βάπτισης</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <Card key={index} className="card-elegant hover:shadow-2xl transition-all">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                    <div className="text-3xl font-bold text-brand-main mb-6">{pkg.price}</div>
                    <ul className="space-y-3">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-brand-main mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/contact">
                <button className="button button4">
                  Ζητήστε Προσφορά
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Συχνές Ερωτήσεις</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-brand-text">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/10 to-brand-main/5">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ας κάνουμε τη βάπτιση αξέχαστη
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να δείτε το κτήμα και να λάβετε προσωπική προσφορά
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+302299068812">
                <button className="button button4">
                  Καλέστε Τώρα
                </button>
              </a>
              <Link to="/contact">
                <button className="button button4">
                  Online Αίτημα
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
    </Layout>
  );
}
