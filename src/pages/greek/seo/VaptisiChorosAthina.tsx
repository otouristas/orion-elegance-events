import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Baby, Heart, Sun, Utensils, Music, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VaptisiChorosAthina() {
  const features = [
    {
      icon: Sun,
      title: 'Σκιασμένοι Κήποι',
      description: 'Ασφαλής υπαίθριος χώρος με φυσική σκιά για τα παιδιά'
    },
    {
      icon: Utensils,
      title: 'Οικογενειακά Μενού',
      description: 'Ειδικά παιδικά μενού και επιλογές για όλες τις ηλικίες'
    },
    {
      icon: Baby,
      title: 'Χώρος Παιχνιδιού',
      description: 'Ασφαλής περιοχή για παιχνίδι και δραστηριότητες'
    },
    {
      icon: MapPin,
      title: 'Κοντινοί Ναοί',
      description: 'Όμορφα εκκλησάκια δίπλα στη θάλασσα'
    }
  ];

  const packages = [
    {
      name: 'Ημερήσιο Πακέτο',
      price: 'από 45€/άτομο',
      features: [
        'Brunch ή μεσημεριανό τραπέζι',
        'Αναψυκτικά & χυμοί',
        'Παιδικό μενού',
        'Διακόσμηση βάπτισης',
        'Τραπεζοκαθίσματα',
        'Χρήση κήπου (4 ώρες)'
      ]
    },
    {
      name: 'Απογευματινό Πακέτο',
      price: 'από 55€/άτομο',
      features: [
        'Δεξίωση με μπουφέ',
        'Ανοιχτό μπαρ',
        'Premium παιδικό μενού',
        'Floral διακόσμηση',
        'Νυφική τούρτα',
        'Χρήση χώρου (6 ώρες)',
        'DJ & animation για παιδιά'
      ]
    }
  ];

  return (
    <Layout>
      <SEO
        title="Χώρος Βάπτισης στην Αθήνα | Οικογενειακό Κτήμα Ωρίων"
        description="Όμορφοι υπαίθριοι χώροι για βάπτιση στην Αττική. Οικογενειακά μενού, σκιασμένοι κήποι, κοντά σε εκκλησάκια. Ρωτήστε για πακέτα & φωτογραφίες."
        canonical="/el/vaptisi-choros-athina"
        keywords="χώρος βάπτισης Αθήνα, κτήμα για βάπτιση, βάπτιση στη θάλασσα, οικογενειακή εκδήλωση, βάπτιση Αττική"
        lang="el"
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-secondary to-secondary/90">
        <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container-max text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Χώρος Βάπτισης στην Αθήνα
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Γιορτάστε τη βάπτιση του μωρού σας σε έναν όμορφο, ασφαλή χώρο με θέα τη θάλασσα. 
            Ιδανικός για οικογένειες με παιδιά.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/epikoinonia">
              <Button size="lg" className="button button4">
                Ζητήστε Προσφορά
              </Button>
            </Link>
            <Link to="/el/vaptisi-sti-thalassa">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Εκκλησάκια Κοντά μας
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Γιατί το Κτήμα Ωρίων για τη Βάπτιση;
          </h2>

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

      {/* Packages */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Πακέτα Βάπτισης
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Επιλέξτε το πακέτο που ταιριάζει στην οικογένειά σας
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className="card-elegant p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-primary mb-6">{pkg.price}</p>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/epikoinonia">
                  <Button className="w-full" variant="outline">
                    Ρωτήστε για Διαθεσιμότητα
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ειδικές Λεπτομέρειες για Βαπτίσεις
          </h2>

          <div className="space-y-6">
            <Card className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-3">Παιδικός Χώρος & Ασφάλεια</h3>
              <p className="text-muted-foreground leading-relaxed">
                Διαθέτουμε ειδικά διαμορφωμένο χώρο για παιδιά με σκιά, ασφαλή επιφάνεια και δραστηριότητες. 
                Οι γονείς μπορούν να απολαύσουν την εκδήλωση ενώ τα παιδιά παίζουν υπό επίβλεψη.
              </p>
            </Card>

            <Card className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-3">Οικογενειακά Μενού</h3>
              <p className="text-muted-foreground leading-relaxed">
                Τα μενού μας περιλαμβάνουν επιλογές για όλες τις ηλικίες: από baby food έως ειδικά παιδικά πιάτα 
                και gourmet επιλογές για τους μεγάλους. Διαθέτουμε επίσης vegetarian και vegan επιλογές.
              </p>
            </Card>

            <Card className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-3">Κοντινά Εκκλησάκια</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Πανέμορφα εκκλησάκια για τη βάπτιση βρίσκονται μόλις λίγα λεπτά από το κτήμα. 
                Μπορείτε να τελέσετε το μυστήριο και αμέσως μετά να έρθετε για τη δεξίωση.
              </p>
              <Link to="/el/vaptisi-sti-thalassa">
                <Button variant="link" className="p-0">
                  Δείτε τους κοντινούς ναούς →
                </Button>
              </Link>
            </Card>

            <Card className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-3">Timing & Ωράρια</h3>
              <p className="text-muted-foreground leading-relaxed">
                Οι περισσότερες βαπτίσεις γίνονται το πρωί (11:00-15:00) ή το απόγευμα (17:00-21:00). 
                Μπορούμε να προσαρμόσουμε το πρόγραμμα στις ανάγκες σας και την ώρα του μυστηρίου.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-max text-center">
          <Baby className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ετοιμοι να Οργανώσουμε τη Βάπτιση;
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Επικοινωνήστε μαζί μας για διαθεσιμότητα, τιμές και επίσκεψη στο χώρο
          </p>
          <Link to="/epikoinonia">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Επικοινωνήστε Μαζί μας
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
