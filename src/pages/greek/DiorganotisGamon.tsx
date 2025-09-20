import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, CheckCircle, Users, Heart, Phone, Mail } from 'lucide-react';

export default function DiorganotisGamon() {
  const services = [
    {
      title: "Σχεδιασμός & Συντονισμός",
      description: "Πλήρης σχεδιασμός και συντονισμός όλων των λεπτομερειών του γάμου σας από την αρχή μέχρι το τέλος.",
      features: ["Σχεδιασμός timeline", "Συντονισμός προμηθευτών", "Διαχείριση budget", "Εποπτεία την ημέρα"]
    },
    {
      title: "Επιλογή Προμηθευτών",
      description: "Συνιστάμε και συντονίζουμε τους καλύτερους επαγγελματίες για κάθε ανάγκη του γάμου σας.",
      features: ["Φωτογράφοι & βιντεογράφοι", "Μουσικοί & DJ", "Φυτώρια & διακόσμηση", "Κουζίνα & catering"]
    },
    {
      title: "Διαχείριση Budget",
      description: "Βοηθάμε στη διαχείριση του budget σας και στην επιλογή των καλύτερων λύσεων για κάθε ανάγκη.",
      features: ["Ανάλυση κόστους", "Σύγκριση προτάσεων", "Διαπραγμάτευση τιμών", "Παρακολούθηση εξόδων"]
    },
    {
      title: "Λεπτομέρειες & Κομψότητα",
      description: "Φροντίζουμε για κάθε λεπτομέρεια ώστε ο γάμος σας να είναι άψογος και αξέχαστος.",
      features: ["Διακόσμηση", "Ειδικές λεπτομέρειες", "Timeline εκδηλώσεων", "Backup plans"]
    }
  ];

  const packages = [
    {
      name: "Βασικό Πακέτο",
      price: "€800",
      description: "Ιδανικό για γάμους έως 80 καλεσμένους",
      features: [
        "Συντονισμός 3 μήνες πριν",
        "Επιλογή βασικών προμηθευτών",
        "Timeline εκδήλωσης",
        "Εποπτεία την ημέρα (8 ώρες)",
        "1 meeting το μήνα",
        "Email support"
      ]
    },
    {
      name: "Premium Πακέτο",
      price: "€1,500",
      description: "Ιδανικό για γάμους έως 150 καλεσμένους",
      features: [
        "Συντονισμός 6 μήνες πριν",
        "Επιλογή όλων των προμηθευτών",
        "Διαχείριση budget",
        "Εποπτεία την ημέρα (12 ώρες)",
        "2 meetings το μήνα",
        "24/7 support",
        "Backup plans",
        "Ειδικές λεπτομέρειες"
      ]
    },
    {
      name: "Luxury Πακέτο",
      price: "€2,500",
      description: "Ιδανικό για μεγάλους γάμους 150+ καλεσμένους",
      features: [
        "Συντονισμός 12 μήνες πριν",
        "Πλήρης διαχείριση γάμου",
        "Εξατομικευμένος σχεδιασμός",
        "Εποπτεία την ημέρα (16 ώρες)",
        "Weekly meetings",
        "24/7 support",
        "Πλήρης backup plans",
        "Luxury λεπτομέρειες",
        "Προσωπικός συντονιστής"
      ]
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Διοργανωτής Γάμου</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Εμπιστευτείτε την οργάνωση του γάμου σας σε επαγγελματίες. Δημιουργούμε 
              αξέχαστες αναμνήσεις με προσεγμένο συντονισμό και προσωποποιημένες λύσεις.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Υπηρεσίες Διοργάνωσης</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gradient-brand mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-brand-main flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Πακέτα Διοργάνωσης</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gradient-brand mb-4">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-brand-main mb-2">{pkg.price}</div>
                    <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-brand-main mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a href="/contact" className="button button4 w-full text-center">
                      Επικοινωνία
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Γιατί να μας εμπιστευτείτε;</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Εμπειρία & Εξειδίκευση</h3>
                    <p className="text-muted-foreground">
                      Έχουμε οργανώσει εκατοντάδες γάμους και γνωρίζουμε κάθε λεπτομέρεια 
                      που χρειάζεται για έναν άψογο γάμο.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Δίκτυο Επαγγελματιών</h3>
                    <p className="text-muted-foreground">
                      Συνεργαζόμαστε με τους καλύτερους προμηθευτές της αγοράς για να 
                      εξασφαλίσουμε την υψηλότερη ποιότητα υπηρεσιών.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Προσωποποιημένες Λύσεις</h3>
                    <p className="text-muted-foreground">
                      Κάθε γάμος είναι μοναδικός και προσαρμόζουμε τις υπηρεσίες μας 
                      στις ανάγκες και το budget σας.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Αριθμοί που Μιλούν</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-main rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-main">200+</div>
                      <div className="text-sm text-muted-foreground">Γάμοι οργανωμένοι</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-main rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-main">98%</div>
                      <div className="text-sm text-muted-foreground">Ευχαριστημένα ζευγάρια</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-main rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-main">5+</div>
                      <div className="text-sm text-muted-foreground">Χρόνια εμπειρίας</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Έτοιμοι να δημιουργήσουμε τον γάμο των ονείρων σας;
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες του γάμου σας 
              και να δημιουργήσουμε μια προσαρμοσμένη πρόταση.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="button button4">
                Επικοινωνία
              </a>
              <a href="/request" className="button button4">
                Αίτημα Πληροφοριών
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
