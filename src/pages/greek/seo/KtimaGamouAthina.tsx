import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, MapPin, Users, Clock, Sparkles, Heart, Camera, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function KtimaGamouAthina() {
  const features = [
    {
      icon: MapPin,
      title: 'Θέα Θάλασσα',
      description: 'Μοναδική θέα στο Αιγαίο και το ηλιοβασίλεμα'
    },
    {
      icon: Users,
      title: 'Αποκλειστική Χρήση',
      description: '50-350 άτομα με πλήρη ιδιωτικότητα'
    },
    {
      icon: Sparkles,
      title: 'In-House Catering',
      description: 'Εξαιρετική κουζίνα από το δικό μας team'
    },
    {
      icon: Clock,
      title: 'Εύκολη Πρόσβαση',
      description: '35 λεπτά από κέντρο Αθήνας, δωρεάν parking'
    }
  ];

  const nearbyChapels = [
    {
      name: 'Άγιος Αλέξανδρος Δασκαλειό',
      time: '8 λεπτά',
      description: 'Πανέμορφο εκκλησάκι δίπλα στη θάλασσα',
      link: '/el/ekklisaki-dipla-sti-thalassa/agios-alexandros-daskaleio'
    },
    {
      name: 'Προφήτης Ηλίας Θορικού',
      time: '12 λεπτά',
      description: 'Εκκλησία με θέα τη θάλασσα από ψηλά',
      link: '/el/ekklisaki-dipla-sti-thalassa/profitis-ilias-thorikou'
    },
    {
      name: 'Παναγία Γκαρικά',
      time: '10 λεπτά',
      description: 'Ιστορική εκκλησία με μοναδική ατμόσφαιρα',
      link: '/el/ekklisaki-dipla-sti-thalassa/panagia-gkarika'
    }
  ];

  const faqs = [
    {
      question: 'Μπορούμε να τελέσουμε το μυστήριο σε εκκλησάκι δίπλα στη θάλασσα;',
      answer: 'Ναι, υπάρχουν τρεις υπέροχες επιλογές κοντά στο κτήμα: ο Άγιος Αλέξανδρος στο Δασκαλειό (8 λεπτά), ο Προφήτης Ηλίας στο Θορικό (12 λεπτά), και η Παναγία στα Γκαρικά (10 λεπτά). Όλα είναι δίπλα στη θάλασσα με μαγευτική θέα.'
    },
    {
      question: 'Πόσα άτομα μπορούμε να φιλοξενήσουμε;',
      answer: 'Το Κτήμα Ωρίων μπορεί να φιλοξενήσει από 50 έως 350 άτομα. Έχουμε διαφορετικές διαρρυθμίσεις για εξωτερικό χώρο με θέα τη θάλασσα και εσωτερική αίθουσα για plan B σε περίπτωση κακοκαιρίας.'
    },
    {
      question: 'Τι περιλαμβάνει το πακέτο γάμου;',
      answer: 'Τα πακέτα μας περιλαμβάνουν: αποκλειστική χρήση χώρου, in-house catering με εξαιρετικό φαγητό, διακόσμηση, τραπεζοκαθίσματα, φωτισμό, και δωρεάν parking. Για αναλυτικό τιμοκατάλογο, επισκεφτείτε τη σελίδα τιμών μας.'
    },
    {
      question: 'Υπάρχει plan B σε περίπτωση βροχής;',
      answer: 'Απολύτως! Διαθέτουμε μεγάλη εσωτερική αίθουσα με την ίδια πολυτελή αισθητική και θέα. Μπορούμε να μεταφέρουμε την εκδήλωση εσωτερικά χωρίς καθόλου άγχος.'
    },
    {
      question: 'Πόσο χρόνο παίρνει από την Αθήνα;',
      answer: 'Το κτήμα βρίσκεται στην Κερατέα, μόλις 35 λεπτά από το κέντρο της Αθήνας μέσω της λεωφόρου Λαυρίου. Είναι εύκολη πρόσβαση και διαθέτουμε μεγάλο χώρο στάθμευσης.'
    },
    {
      question: 'Μπορούμε να επιλέξουμε τους δικούς μας συνεργάτες (DJ, φωτογράφο);',
      answer: 'Ναι! Μπορείτε να φέρετε τους δικούς σας συνεργάτες ή να επιλέξετε από τη δική μας λίστα επαγγελματιών που γνωρίζουν άριστα το χώρο.'
    }
  ];

  const faqSchema = {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Αρχική",
        "item": "https://ktimaorion.gr/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Κτήμα Γάμου Αθήνα",
        "item": "https://ktimaorion.gr/el/ktima-gamou-athina"
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Κτήμα Γάμου στην Αθήνα με Θέα Θάλασσα | Κτήμα Ωρίων"
        description="Γάμος δίπλα στη θάλασσα στο Κτήμα Ωρίων. Αποκλειστική χρήση, 50-350 άτομα, κοντινά εκκλησάκια & in-house catering. Ζητήστε τιμές & διαθεσιμότητα."
        canonical="/el/ktima-gamou-athina"
        keywords="κτήμα γάμου Αθήνα, χώρος δεξίωσης γάμου Αθήνα, κτήματα γάμου Αττική, γάμος δίπλα στη θάλασσα, κτήμα γάμου Κερατέα, wedding venue Athens"
        lang="el"
      />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-secondary to-secondary/90">
        <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container-max text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Κτήμα Γάμου στην Αθήνα με Θέα Θάλασσα
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Ο τέλειος χώρος για το γάμο σας με μαγευτική θέα στο Αιγαίο, αποκλειστική χρήση και εξαιρετικές υπηρεσίες. 
            Μόλις 35 λεπτά από την Αθήνα, στην καρδιά της Athens Riviera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/el/times-ktimatos-gamou">
              <Button size="lg" className="button button4">
                Δείτε Πακέτα & Τιμές
              </Button>
            </Link>
            <Link to="/epikoinonia">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Κλείστε Ραντεβού
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Γιατί να Επιλέξετε το Κτήμα Ωρίων για τον Γάμο σας
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Συνδυάζουμε τη φυσική ομορφιά της Αττικής Ριβιέρας με εξαιρετικές υπηρεσίες
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Chapels */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Τελετή & Εκκλησάκια Κοντά μας
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Τρία πανέμορφα εκκλησάκια δίπλα στη θάλασσα, λίγα λεπτά από το κτήμα
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {nearbyChapels.map((chapel, index) => (
              <Link key={index} to={chapel.link}>
                <Card className="card-elegant p-6 h-full hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{chapel.name}</h3>
                      <p className="text-sm text-primary font-medium">{chapel.time} από το κτήμα</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{chapel.description}</p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/el/ekklisaki-dipla-sti-thalassa">
              <Button variant="outline" size="lg">
                Δείτε Όλα τα Εκκλησάκια & Χάρτη
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Πακέτα & Τιμές Κτήματος Γάμου
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Προσαρμοσμένα πακέτα για κάθε προϋπολογισμό και στυλ γάμου
          </p>

          <Card className="card-elegant p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Τι Περιλαμβάνεται:</h3>
                <ul className="space-y-3">
                  {[
                    'Αποκλειστική χρήση χώρου',
                    'In-house catering & μπαρ',
                    'Διακόσμηση & φωτισμός',
                    'Τραπεζοκαθίσματα & λευκά είδη',
                    'Δωρεάν parking για καλεσμένους',
                    'Plan B εσωτερική αίθουσα'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Πρόσθετες Υπηρεσίες:</h3>
                <ul className="space-y-3">
                  {[
                    'Wedding planner',
                    'Επαγγελματίας φωτογράφος',
                    'DJ & μουσική',
                    'Floral design',
                    'Νυφικό cake',
                    'Φωτογραφική επεξεργασία'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center pt-6 border-t">
              <p className="text-lg mb-4">
                Κόστος ανά άτομο: <span className="font-semibold text-primary">από 65€</span>
              </p>
              <Link to="/el/times-ktimatos-gamou">
                <Button size="lg" className="button button4">
                  Λάβετε Αναλυτικό Τιμοκατάλογο
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Αληθινοί Γάμοι στο Κτήμα Ωρίων
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Δείτε φωτογραφίες από πραγματικούς γάμους που φιλοξενήσαμε
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img 
                  src={`/wedding-${i}.jpg`} 
                  alt={`Θαλασσινός γάμος Αθήνα - Κτήμα Ωρίων ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button variant="outline" size="lg">
                <Camera className="w-5 h-5 mr-2" />
                Δείτε Ολόκληρη τη Γκαλερί
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Συχνές Ερωτήσεις
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-elegant p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ετοιμοι να Δημιουργήσουμε τον Γάμο των Ονείρων σας;
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Κλείστε ραντεβού για επίσκεψη στο χώρο ή επικοινωνήστε μαζί μας για διαθεσιμότητα και τιμές
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/epikoinonia">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Επικοινωνήστε Μαζί μας
              </Button>
            </Link>
            <Link to="/el/times-ktimatos-gamou">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Δείτε Τιμές
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
