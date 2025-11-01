import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Navigation, Heart, Camera, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EkklisiakiHub() {
  const chapels = [
    {
      name: 'Άγιος Αλέξανδρος Δασκαλειό',
      distance: '8 λεπτά',
      capacity: '80-100 άτομα',
      highlight: 'Δίπλα στη θάλασσα με υπέροχη ατμόσφαιρα',
      link: '/el/ekklisaki-dipla-sti-thalassa/agios-alexandros-daskaleio',
      features: ['Parking', 'Θέα θάλασσα', 'Κλιματισμός']
    },
    {
      name: 'Προφήτης Ηλίας Θορικού',
      distance: '12 λεπτά',
      capacity: '150-200 άτομα',
      highlight: 'Πανοραμική θέα από το λόφο',
      link: '/el/ekklisaki-dipla-sti-thalassa/profitis-ilias-thorikou',
      features: ['Μεγάλο parking', 'Panoramic view', 'Ιστορική εκκλησία']
    },
    {
      name: 'Παναγία Γκαρικά',
      distance: '10 λεπτά',
      capacity: '60-80 άτομα',
      highlight: 'Ιντιμ ατμόσφαιρα & παραδοσιακή αρχιτεκτονική',
      link: '/el/ekklisaki-dipla-sti-thalassa/panagia-gkarika',
      features: ['Μικρό parking', 'Ρομαντικό', 'Ήσυχη περιοχή']
    }
  ];

  const timeline = [
    { time: '16:00', activity: 'Τελετή γάμου στο εκκλησάκι' },
    { time: '17:00', activity: 'Φωτογράφιση στη θάλασσα & μετάβαση στο κτήμα' },
    { time: '18:30', activity: 'Υποδοχή καλεσμένων στο Κτήμα Ωρίων' },
    { time: '19:00', activity: 'Δεξίωση με θέα το ηλιοβασίλεμα' },
    { time: '23:00', activity: 'Party & χορός' }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ποια εκκλησάκια είναι κοντά στο Κτήμα Ωρίων;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Τρία όμορφα εκκλησάκια βρίσκονται κοντά: Άγιος Αλέξανδρος Δασκαλειό (8 λεπτά), Προφήτης Ηλίας Θορικού (12 λεπτά), και Παναγία Γκαρικά (10 λεπτά). Όλα προσφέρουν μοναδική ατμόσφαιρα δίπλα στη θάλασσα."
        }
      },
      {
        "@type": "Question",
        "name": "Μπορούμε να κάνουμε τελετή και δεξίωση την ίδια μέρα;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Απολύτως! Το Κτήμα Ωρίων είναι ιδανικό για τελετή σε κοντινό εκκλησάκι και στη συνέχεια δεξίωση στο κτήμα. Αποστάσεις 8-12 λεπτά επιτρέπουν άνετη μετάβαση και φωτογράφιση."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Εκκλησάκι δίπλα στη Θάλασσα | Γάμος & Δεξίωση την ίδια μέρα"
        description="Άγιος Αλέξανδρος Δασκαλειό, Προφήτης Ηλίας Θορικού, Παναγία Γκαρικά. Οργάνωση τελετής & δεξίωσης στο Κτήμα Ωρίων την ίδια μέρα."
        canonical="/el/ekklisaki-dipla-sti-thalassa"
        keywords="εκκλησάκι δίπλα στη θάλασσα, γάμος σε εκκλησάκι Αθήνα, ναός κοντά στη θάλασσα, Άγιος Αλέξανδρος Δασκαλειό, Προφήτης Ηλίας Θορικού"
        lang="el"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-secondary to-secondary/90">
        <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container-max text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Εκκλησάκι δίπλα στη Θάλασσα – Τελετή & Δεξίωση την ίδια μέρα
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Τρία πανέμορφα εκκλησάκια λίγα λεπτά από το Κτήμα Ωρίων. 
            Τελετή με θέα τη θάλασσα και αμέσως μετά δεξίωση στο κτήμα.
          </p>
        </div>
      </section>

      {/* Chapels Grid */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Κοντινά Εκκλησάκια με Θέα Θάλασσα
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {chapels.map((chapel, index) => (
              <Link key={index} to={chapel.link}>
                <Card className="card-elegant p-6 h-full hover:scale-105 transition-transform">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">{chapel.name}</h3>
                      <p className="text-sm text-primary font-medium">{chapel.distance} από το κτήμα</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{chapel.highlight}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Χωρητικότητα: {chapel.capacity}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {chapel.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full mt-4" variant="outline">
                    Δείτε Λεπτομέρειες
                  </Button>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Πρόγραμμα Ημέρας – Τελετή & Δεξίωση
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ένα ενδεικτικό πρόγραμμα για τη μεγάλη σας μέρα
          </p>

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <Card key={index} className="card-elegant p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-primary mb-1">{item.time}</p>
                    <p className="text-lg">{item.activity}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary/10 rounded-lg">
            <p className="text-center text-sm text-muted-foreground">
              * Τα χρονοδιαγράμματα είναι ευέλικτα και προσαρμόζονται στις ανάγκες σας
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Γιατί να Επιλέξετε Εκκλησάκι κοντά στο Κτήμα
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-elegant p-6 text-center">
              <Navigation className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Εύκολη Μετακίνηση</h3>
              <p className="text-muted-foreground">
                8-12 λεπτά μόνο από το εκκλησάκι στο κτήμα. Οι καλεσμένοι δεν κουράζονται.
              </p>
            </Card>

            <Card className="card-elegant p-6 text-center">
              <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Φωτογράφιση</h3>
              <p className="text-muted-foreground">
                Μοναδικές φωτογραφίες δίπλα στη θάλασσα στο δρόμο προς το κτήμα.
              </p>
            </Card>

            <Card className="card-elegant p-6 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ολοκληρωμένη Εμπειρία</h3>
              <p className="text-muted-foreground">
                Θρησκευτική τελετή σε ιστορικό ναό και δεξίωση σε πολυτελές κτήμα.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Χάρτης & Οδηγίες
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Δείτε τις αποστάσεις και προγραμματίστε τη διαδρομή σας
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Car className="w-6 h-6 text-primary" />
                Αποστάσεις από Αθήνα
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center pb-3 border-b">
                  <span>Κέντρο Αθήνας → Κτήμα</span>
                  <span className="font-semibold text-primary">35 λεπτά</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b">
                  <span>Κτήμα → Άγ. Αλέξανδρος</span>
                  <span className="font-semibold text-primary">8 λεπτά</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b">
                  <span>Κτήμα → Προφ. Ηλίας</span>
                  <span className="font-semibold text-primary">12 λεπτά</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Κτήμα → Παναγία Γκαρικά</span>
                  <span className="font-semibold text-primary">10 λεπτά</span>
                </li>
              </ul>
            </Card>

            <Card className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-4">Οδηγίες Πρόσβασης</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold flex-shrink-0">1.</span>
                  <span>Λεωφόρος Λαυρίου από Αθήνα (35')</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold flex-shrink-0">2.</span>
                  <span>Έξοδος Κερατέα</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold flex-shrink-0">3.</span>
                  <span>Ακολουθήστε πινακίδες για εκκλησάκια</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold flex-shrink-0">4.</span>
                  <span>Δωρεάν parking διαθέσιμο σε όλα τα σημεία</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Θέλετε να Οργανώσουμε τη Τελετή & Δεξίωση;
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Επικοινωνήστε μαζί μας για να μάθετε περισσότερα και να επισκεφτείτε τα εκκλησάκια
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/epikoinonia">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Επικοινωνήστε Μαζί μας
              </Button>
            </Link>
            <Link to="/el/ktima-gamou-athina">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Δείτε το Κτήμα
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
