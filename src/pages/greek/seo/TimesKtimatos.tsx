import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Heart, Sparkles, Users, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TimesKtimatos() {
  const packages = [
    {
      name: 'Essential',
      subtitle: 'Για μικρούς γάμους',
      pricePerPerson: '65€',
      guests: '50-100 άτομα',
      features: [
        'Αποκλειστική χρήση χώρου',
        'Εξωτερικός χώρος με θέα θάλασσα',
        'Βασική διακόσμηση',
        'Catering 3 πιάτων',
        'Ανοιχτό μπαρ (4 ώρες)',
        'Τραπεζοκαθίσματα',
        'Βασικός φωτισμός',
        'Δωρεάν parking'
      ],
      notIncluded: [
        'Wedding planner',
        'Φωτογράφος',
        'DJ/Μουσική'
      ]
    },
    {
      name: 'Premium',
      subtitle: 'Η πιο δημοφιλής επιλογή',
      pricePerPerson: '85€',
      guests: '100-200 άτομα',
      featured: true,
      features: [
        'Όλα από το Essential πακέτο',
        'Premium διακόσμηση & floral',
        'Catering 5 πιάτων (premium μενού)',
        'Ανοιχτό μπαρ (6 ώρες)',
        'Εσωτερική αίθουσα (plan B)',
        'Premium φωτισμός & ηχητικό',
        'Νυφικό τραπέζι VIP',
        'Lounge area',
        'Βασικός συντονισμός ημέρας'
      ],
      notIncluded: [
        'Wedding planner (διαθέσιμο +)',
        'Φωτογράφος (διαθέσιμος +)'
      ]
    },
    {
      name: 'Luxury',
      subtitle: 'Η απόλυτη εμπειρία',
      pricePerPerson: '110€',
      guests: '150-350 άτομα',
      features: [
        'Όλα από το Premium πακέτο',
        'Luxury floral design',
        'Catering 7 πιάτων (gourmet μενού)',
        'Premium ανοιχτό μπαρ (unlimit)',
        'Ολοήμερη χρήση χώρου',
        'Επαγγελματίας wedding planner',
        'Premium ηχητικό & φωτισμό',
        'Live μουσική/DJ (4 ώρες)',
        'Φωτογράφιση pre-wedding',
        'Signature cocktails',
        'VIP catering για νεόνυμφους',
        'Welcome drinks & appetizers'
      ],
      notIncluded: []
    }
  ];

  const additionalServices = [
    { service: 'Wedding Planner (πλήρης)', price: 'από 1.500€' },
    { service: 'Επαγγελματίας Φωτογράφος (8ωρο)', price: 'από 800€' },
    { service: 'Βιντεογράφηση (full day)', price: 'από 1.200€' },
    { service: 'DJ & Μουσική (6 ώρες)', price: 'από 600€' },
    { service: 'Live Band (4 ώρες)', price: 'από 1.500€' },
    { service: 'Premium Floral Design', price: 'από 1.000€' },
    { service: 'Photobooth με props', price: 'από 350€' },
    { service: 'Fireworks Show', price: 'από 800€' },
    { service: 'Drone Φωτογράφιση', price: 'από 400€' }
  ];

  return (
    <Layout>
      <SEO
        title="Τιμές Κτήματος Γάμου | Πακέτα All-Inclusive | Κτήμα Ωρίων"
        description="Ρωτήστε για πακέτα all-inclusive από 65€/άτομο. Catering, διακόσμηση, φωτισμός, αποκλειστική χρήση. Δείτε αναλυτικό τιμοκατάλογο."
        canonical="/el/times-ktimatos-gamou"
        keywords="τιμές κτήματος γάμου, πακέτα γάμου, κόστος γάμου Αθήνα, all-inclusive wedding, κτήμα γάμου τιμή ανά άτομο"
        lang="el"
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-secondary to-secondary/90">
        <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container-max text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Πακέτα & Τιμές Κτήματος Γάμου
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Διαφανείς τιμές, all-inclusive πακέτα για κάθε προϋπολογισμό
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Επιλέξτε το Πακέτο που σας Ταιριάζει
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Όλα τα πακέτα περιλαμβάνουν αποκλειστική χρήση χώρου, catering, και βασικές υπηρεσίες
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`card-elegant p-6 relative ${pkg.featured ? 'border-2 border-primary shadow-xl scale-105' : ''}`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      Δημοφιλέστερο
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 pt-2">
                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.subtitle}</p>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {pkg.pricePerPerson}
                    <span className="text-lg text-muted-foreground">/άτομο</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{pkg.guests}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wide">Περιλαμβάνει:</h4>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}

                  {pkg.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold text-sm uppercase tracking-wide mt-6 text-muted-foreground">
                        Προσθέστε (πρόσθετο κόστος):
                      </h4>
                      {pkg.notIncluded.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 opacity-60">
                          <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <Link to="/epikoinonia">
                  <Button 
                    className={`w-full ${pkg.featured ? 'button button4' : ''}`}
                    variant={pkg.featured ? 'default' : 'outline'}
                  >
                    Ζητήστε Προσφορά
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="card-elegant p-6 max-w-2xl mx-auto">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Προσαρμοσμένα Πακέτα</h3>
              <p className="text-muted-foreground mb-4">
                Κάθε γάμος είναι μοναδικός! Μπορούμε να δημιουργήσουμε custom πακέτο ακριβώς για τις ανάγκες σας.
              </p>
              <Link to="/epikoinonia">
                <Button variant="outline">Επικοινωνήστε για Custom Πακέτο</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Πρόσθετες Υπηρεσίες
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Αναβαθμίστε την εμπειρία σας με επαγγελματικές υπηρεσίες
          </p>

          <Card className="card-elegant p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {additionalServices.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b last:border-0">
                  <span className="font-medium">{item.service}</span>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            * Οι τιμές είναι ενδεικτικές και εξαρτώνται από την ημερομηνία, τον αριθμό καλεσμένων, και τις επιλογές σας
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Τι Περιλαμβάνουν τα Πακέτα μας
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-4">Χώρος</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Αποκλειστική χρήση για όλη τη μέρα</li>
                <li>• Εξωτερικός χώρος με θέα θάλασσα</li>
                <li>• Εσωτερική αίθουσα (plan B)</li>
                <li>• Lounge areas & bar</li>
                <li>• Νυφικό δωμάτιο</li>
                <li>• Δωρεάν parking</li>
              </ul>
            </Card>

            <Card className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-4">Catering</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ποιοτικά υλικά & φρέσκα προϊόντα</li>
                <li>• Customizable μενού</li>
                <li>• Ανοιχτό μπαρ (ποτά, cocktails)</li>
                <li>• Επαγγελματίες σερβιτόροι</li>
                <li>• Παιδικά μενού διαθέσιμα</li>
                <li>• Vegetarian/vegan επιλογές</li>
              </ul>
            </Card>

            <Card className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-4">Διακόσμηση</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Floral arrangements</li>
                <li>• Στολισμός τραπεζιών</li>
                <li>• Λευκά είδη premium</li>
                <li>• Centerpieces</li>
                <li>• Welcome sign & table plan</li>
                <li>• Φωτισμός ατμόσφαιρας</li>
              </ul>
            </Card>

            <Card className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-4">Τεχνικά</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ηχητικό σύστημα</li>
                <li>• Microphones ασύρματα</li>
                <li>• Φωτισμός εσωτ/εξωτ χώρου</li>
                <li>• Προβολέας & οθόνη</li>
                <li>• WiFi σε όλο το χώρο</li>
                <li>• Κλιματισμός/θέρμανση</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ζητήστε Αναλυτική Προσφορά
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Επικοινωνήστε μαζί μας για να λάβετε αναλυτικό τιμοκατάλογο και να ελέγξουμε τη διαθεσιμότητα
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
