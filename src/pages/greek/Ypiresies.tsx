import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Camera, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Ypiresies() {
  const services = [
    {
      title: "Διοργανωτής Γάμων",
      href: "/diorganotis-gamon",
      description: "Επαγγελματική οργάνωση γάμων με εμπειρία και φαντασία. Αναλαμβάνουμε με φαντασία, συνέπεια και σεβασμό στις επιθυμίες σας το σχεδιασμό & τη διοργάνωση της δεξίωσης σας.",
      icon: Users
    },
    {
      title: "Φωτογράφος",
      href: "/fotografos",
      description: "Επαγγελματική φωτογραφία και βιντεοσκόπηση για τις πιο σημαντικές στιγμές της ζωής σας. Καταγράφουμε με αγάπη και τέχνη κάθε λεπτομέρεια της εκδήλωσής σας.",
      icon: Camera
    }
  ];

  const additionalServices = [
    {
      title: "Συντονισμός Εκκλησίας",
      description: "Συντονίζουμε την τελετή στην εκκλησία της επιλογής σας και φροντίζουμε για την ομαλή μετάβαση στο χώρο του γάμου."
    },
    {
      title: "Ειδικό Μενού για Παιδιά",
      description: "Προσαρμοσμένο μενού με επιλογές για όλες τις ηλικίες, συμπεριλαμβανομένων ειδικών πιάτων για παιδιά."
    },
    {
      title: "Φωτογραφία & Video",
      description: "Επαγγελματική καταγραφή όλων των στιγμών - από την προετοιμασία έως το τέλος του πάρτι - για να διατηρήσετε για πάντα αυτές τις αξέχαστες στιγμές."
    },
    {
      title: "Διακόσμηση & Στολισμός",
      description: "Μαγευτική διακόσμηση με λουξ στοιχεία και φυσικά άνθη που θα δημιουργήσει την τέλεια ατμόσφαιρα."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Υπηρεσίες | Κτήμα Ωρίων – Ολοκληρωμένες Λύσεις Εκδηλώσεων"
        description="Διοργάνωση γάμου, φωτογραφία, διακόσμηση, συντονισμός εκκλησίας και περισσότερα. Δείτε όλες τις υπηρεσίες του Κτήματος Ωρίων."
        canonical="/ypiresies"
        keywords="υπηρεσίες γάμου, wedding services, φωτογραφία, διακόσμηση, συντονισμός εκκλησίας"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Υπηρεσίες</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Επαγγελματικές Υπηρεσίες στο Κτήμα Ωρίων
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Το Κτήμα Ωρίων προσφέρει πλήρες πακέτο επαγγελματικών υπηρεσιών για όλες τις εκδηλώσεις σας. 
                Από την οργάνωση έως τη φωτογραφία, εξασφαλίζουμε ότι κάθε λεπτομέρεια θα είναι άψογη.
              </p>
              
              <p>
                Με εμπειρία, ευελιξία και αφοσίωση στη λεπτομέρεια, 
                δημιουργούμε μαγικές εμπειρίες που θα θυμάστε για πάντα.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Κύριες Υπηρεσίες</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <service.icon className="w-12 h-12 text-brand-main flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gradient-brand mb-4">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                        <Link
                          to={service.href}
                          className="inline-block button button4 group-hover:scale-105 transition-transform duration-300"
                        >
                          ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Επιπλέον Υπηρεσίες</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gradient-brand mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ας συζητήσουμε τις ανάγκες σας
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να μάθετε περισσότερα για τις υπηρεσίες μας 
              και πώς μπορούμε να δημιουργήσουμε μαζί αξέχαστες αναμνήσεις.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
              </button>
              <button className="button button4">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
