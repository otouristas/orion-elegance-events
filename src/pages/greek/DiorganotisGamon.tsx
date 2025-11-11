import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart, Users, Calendar, Star } from 'lucide-react';

const DiorganotisGamon = () => {

  const benefits = [
    "Προσωποποιημένος σχεδιασμός σύμφωνα με τις ανάγκες και το στυλ σας",
    "Επαγγελματισμός, συνέπεια και δημιουργικότητα", 
    "Συνεργασία με κορυφαίους επαγγελματίες του χώρου",
    "Απόλυτη φροντίδα και οργάνωση, για έναν πραγματικά αξέχαστο γάμο"
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
      <SEO 
        title="Wedding Planner Κτήμα Ωρίων Κερατέα | Διοργανωτής Γάμων Αττική"
        description="Επαγγελματική διοργάνωση γάμου στο Κτήμα Ωρίων. Ολοκληρωμένες υπηρεσίες Wedding Planner, προσωποποιημένος σχεδιασμός. Ζήστε τον γάμο σας ξέγνοιαστα!"
        canonical="/diorganotis-gamon"
        keywords="wedding planner κερατέα, διοργανωτής γάμων, οργάνωση γάμου αττική, υπηρεσίες γάμου, event planner athens"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-main mb-6">
              Διοργανωτής Γάμων
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Υπηρεσία Wedding Planner - Κτήμα Ωρίων - Κερατέα
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-text">
                Υπηρεσία Wedding Planner
              </h2>
              <div className="w-24 h-1 bg-brand-main mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-main/10 mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <Heart className="w-8 h-8 text-brand-main" />
                  <h3 className="text-2xl font-semibold text-brand-text">
                    Ονειρεύεστε έναν γάμο σε κτήμα χωρίς άγχος και κούραση;
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Η οργάνωση του γάμου σας δεν χρειάζεται να σας αγχώνει. Στο Κτήμα Ωρίων, προσφέρουμε 
                  ολοκληρωμένες υπηρεσίες Wedding Planner, για να ζήσετε τη μέρα σας ακριβώς όπως την 
                  ονειρεύεστε - μοναδικά, ξέγνοιαστα και γεμάτη συγκινήσεις.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Με πολυετή εμπειρία στη διοργάνωση γάμων και προσωπική φροντίδα, αναλαμβάνουμε κάθε 
                  λεπτομέρεια: από την επιλογή προμηθευτών, το στολισμό και το πρόγραμμα, μέχρι την 
                  υποστήριξη την ημέρα του γάμου σας.
                </p>
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-to-br from-brand-main/5 to-brand-main/10 rounded-2xl p-8 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <Star className="w-8 h-8 text-brand-main" />
                  <h3 className="text-2xl font-semibold text-brand-text">
                    Γιατί να επιλέξετε εμάς:
                  </h3>
                </div>
                
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-brand-main mt-1 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-main/10 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Calendar className="w-8 h-8 text-brand-main" />
                  <h3 className="text-2xl font-semibold text-brand-text">
                    Αναμνήσεις που διαρκούν για πάντα
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Με εμάς δίπλα σας, η κάθε στιγμή της ξεχωριστής σας μέρας μετατρέπεται σε μια πολύτιμη 
                  εμπειρία - για εσάς και τους καλεσμένους σας. Δημιουργούμε αναμνήσεις που μένουν 
                  ανεξίτηλες στη μνήμη, κάνοντάς σας να θέλετε να ζείτε τη μέρα του γάμου σας ξανά και ξανά.
                </p>

                <p className="text-xl font-semibold text-brand-text mb-8">
                  Επικοινωνήστε μαζί μας σήμερα για να ξεκινήσουμε να σχεδιάζουμε τον γάμο των ονείρων σας!
                </p>

                <Button className="bg-brand-main hover:bg-brand-main/90 text-brand-text px-8 py-3 text-lg">
                  ΕΠΙΚΟΙΝΩΝΙΑ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiorganotisGamon;
