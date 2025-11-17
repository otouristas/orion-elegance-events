import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users, MapPin, Car, Home, Church, Camera, Star, CheckCircle2, Phone } from 'lucide-react';
export default function KtimaGamouAthina() {
  const features = [{
    icon: MapPin,
    title: "Θέα Θάλασσα",
    description: "Μοναδική θαλασσινή ατμόσφαιρα με πανοραμική θέα"
  }, {
    icon: Home,
    title: "Αποκλειστική Χρήση",
    description: "Ολόκληρο το κτήμα μόνο για εσάς"
  }, {
    icon: Users,
    title: "50-350 Άτομα",
    description: "Ευέλικτες διαρρυθμίσεις για κάθε μέγεθος"
  }, {
    icon: Car,
    title: "Άνετος Χώρος Στάθμευσης",
    description: "Δωρεάν parking για 100+ αυτοκίνητα"
  }, {
    icon: Church,
    title: "Κοντινά Εκκλησάκια",
    description: "Παραθαλάσσιοι ναοί σε απόσταση αναπνοής"
  }, {
    icon: Camera,
    title: "Φωτογενικό Περιβάλλον",
    description: "Υπέροχα σκηνικά για τις φωτογραφίες σας"
  }];
  const churches = [{
    name: "Άγιος Αλέξανδρος Δασκαλειό",
    distance: "10 λεπτά",
    link: "/el/ekklisies/agios-alexandros-daskaleio"
  }, {
    name: "Προφήτης Ηλίας Θορικού",
    distance: "15 λεπτά",
    link: "/el/ekklisies/profitis-ilias-thoriko"
  }, {
    name: "Άγιος Παντελεήμονας Κερατέα",
    distance: "8 λεπτά",
    link: "/el/ekklisies/agios-panteleimonas-keratea"
  }, {
    name: "Παναγία Γκαρικά",
    distance: "12 λεπτά",
    link: "/el/ekklisies/panagia-gkarika"
  }];
  const packages = [{
    title: "Βασικό Πακέτο",
    price: "Από 45€/άτομο",
    features: ["Catering", "Διακόσμηση βασική", "Ηχητική κάλυψη", "Χώρος υποδοχής"]
  }, {
    title: "Premium Πακέτο",
    price: "Από 65€/άτομο",
    features: ["Catering deluxe", "Πλήρης διακόσμηση", "DJ & ηχητικά", "Φωτισμός", "Φωτογράφος"]
  }, {
    title: "VIP Πακέτο",
    price: "Από 85€/άτομο",
    features: ["Gourmet catering", "Luxury διακόσμηση", "Live μουσική", "Φωτο & video", "Event coordinator"]
  }];
  const faqs = [{
    question: "Πόσα άτομα μπορούμε να φιλοξενήσουμε;",
    answer: "Το Κτήμα Ωρίων μπορεί να φιλοξενήσει από 50 έως 350 άτομα με διαφορετικές διαρρυθμίσεις εσωτερικού και εξωτερικού χώρου."
  }, {
    question: "Μπορούμε να τελέσουμε το μυστήριο σε εκκλησάκι δίπλα στη θάλασσα;",
    answer: "Ναι! Υπάρχουν πολλά γραφικά παραθαλάσσια εκκλησάκια στην περιοχή όπως ο Άγιος Αλέξανδρος στο Δασκαλειό (10 λεπτά), Προφήτης Ηλίας Θορικού (15 λεπτά) και Παναγία Γκαρικά (12 λεπτά)."
  }, {
    question: "Υπάρχει χώρος στάθμευσης;",
    answer: "Ναι, διαθέτουμε τεράστιο χώρο στάθμευσης που μπορεί να φιλοξενήσει πάνω από 100 αυτοκίνητα με άνεση."
  }, {
    question: "Τι περιλαμβάνουν τα πακέτα γάμου;",
    answer: "Τα πακέτα μας περιλαμβάνουν catering, διακόσμηση, ηχητική κάλυψη, φωτισμό και προαιρετικά φωτογραφία, video και event coordination. Όλα προσαρμόζονται στις ανάγκες σας."
  }, {
    question: "Πόσο κοστίζει ένας γάμος στο Κτήμα Ωρίων;",
    answer: "Τα πακέτα μας ξεκινούν από 45€/άτομο για το βασικό πακέτο και φτάνουν έως 85€/άτομο για το VIP πακέτο. Το τελικό κόστος εξαρτάται από τον αριθμό καλεσμένων και τις υπηρεσίες που επιλέγετε."
  }, {
    question: "Υπάρχει plan B σε περίπτωση βροχής;",
    answer: "Φυσικά! Διαθέτουμε πλήρως κλιματιζόμενη αίθουσα και καλυμμένους χώρους για να μην ανησυχείτε για τις καιρικές συνθήκες."
  }, {
    question: "Πόσο νωρίς πρέπει να κλείσουμε ραντεβού;",
    answer: "Συνιστούμε να επικοινωνήσετε μαζί μας 8-12 μήνες πριν την ημερομηνία του γάμου σας, ειδικά για Σαββατοκύριακα υψηλής ζήτησης (Μάιο-Οκτώβριο)."
  }, {
    question: "Μπορούμε να επισκεφθούμε το κτήμα πριν κλείσουμε;",
    answer: "Απολύτως! Προτείνουμε πάντα μια επίσκεψη στο χώρο για να δείτε τις εγκαταστάσεις μας και να συζητήσουμε τις επιθυμίες σας. Καλέστε μας στο 22990 68812 για να κλείσετε ραντεβού."
  }];
  return <Layout>
      <SEO title="Κτήμα Γάμου στην Αθήνα | Κτήμα Ωρίων Κερατέα – Θέα Θάλασσα" description="Γάμος δίπλα στη θάλασσα στο Κτήμα Ωρίων Κερατέα. Αποκλειστική χρήση, 50-350 άτομα, κοντινά εκκλησάκια & in-house catering. Ζητήστε τιμές & διαθεσιμότητα." canonical="/el/ktima-gamou-athina" keywords="κτήμα γάμου αθήνα, κτήματα γάμου αττική, γάμος δίπλα στη θάλασσα, χώρος δεξίωσης γάμου, κτήμα κερατέα, εκκλησάκι δίπλα στη θάλασσα" />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient-brand">Κτήμα Γάμου στην Αθήνα με Θέα Θάλασσα</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Δημιουργήστε τον ονειρεμένο γάμο σας στο Κτήμα Ωρίων Κερατέα
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="button button4">
                    Δείτε το Κτήμα – Κλείστε Δωρεάν Επίσκεψη
                  </button>
                </Link>
                <a href="tel:+302299068812">
                  <button className="button button4">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Καλέστε Τώρα
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="text-gradient-brand">Γιατί το Κτήμα Ωρίων για τον γάμο σας;</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              Το Κτήμα Ωρίων συνδυάζει την μαγεία της θάλασσας με την πολυτέλεια ενός σύγχρονου χώρου, 
              προσφέροντας την ιδανική τοποθεσία για έναν αξέχαστο γάμο στην Αθήνα.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => <Card key={index} className="card-elegant hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <feature.icon className="w-10 h-10 text-brand-main mb-4" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Nearby Churches Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="text-gradient-brand">Τελετή & Εκκλησάκια κοντά μας</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              Γραφικά παραθαλάσσια εκκλησάκια σε μικρή απόσταση από το κτήμα για μια ρομαντική τελετή δίπλα στη θάλασσα
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {churches.map((church, index) => <Link key={index} to={church.link}>
                  <Card className="card-elegant hover:shadow-xl transition-all h-full">
                    <CardContent className="p-6 text-center">
                      <Church className="w-12 h-12 text-brand-main mx-auto mb-4" />
                      <h3 className="font-bold mb-2">{church.name}</h3>
                      <p className="text-brand-main font-semibold">{church.distance}</p>
                      <p className="text-xs text-muted-foreground mt-2">Κάντε κλικ για λεπτομέρειες</p>
                    </CardContent>
                  </Card>
                </Link>)}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        

        {/* FAQs Section with Schema */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Συχνές Ερωτήσεις</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-brand-text">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/10 to-brand-main/5">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ας κάνουμε τον γάμο σας πραγματικότητα
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας σήμερα για να κλείσετε επίσκεψη και να λάβετε προσωπική προσφορά
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+302299068812">
                <button className="button button4">
                  <Phone className="w-5 h-5 inline mr-2" />
                  22990 68812
                </button>
              </a>
              <Link to="/contact">
                <button className="button button4">
                  Στείλτε Αίτημα Online
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
    </Layout>;
}