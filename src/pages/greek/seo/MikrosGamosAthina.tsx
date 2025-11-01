import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, Sparkles, Camera, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MikrosGamosAthina() {
  const benefits = [
    {
      icon: Heart,
      title: 'Ιντιμ Ατμόσφαιρα',
      description: 'Περισσότερος χρόνος με τους αγαπημένους σας ανθρώπους'
    },
    {
      icon: Sparkles,
      title: 'Λιγότερο Άγχος',
      description: 'Απλούστερη οργάνωση και πιο χαλαρή ημέρα'
    },
    {
      icon: Camera,
      title: 'Προσωπικές Στιγμές',
      description: 'Περισσότερος χρόνος για φωτογραφίες με όλους'
    },
    {
      icon: Users,
      title: 'Οικονομία',
      description: 'Χωρίς συμβιβασμούς στην ποιότητα'
    }
  ];

  const arrangements = [
    {
      name: 'Υπαίθριος Κήπος',
      guests: '30-50 άτομα',
      description: 'Μαγευτική θέα θάλασσα, κάτω από τα δέντρα',
      image: '/garden-wedding.jpg'
    },
    {
      name: 'Lounge Setup',
      guests: '40-60 άτομα',
      description: 'Χαλαρή ατμόσφαιρα με sofas & cocktail tables',
      image: '/lounge-wedding.jpg'
    },
    {
      name: 'Intimate Indoor',
      guests: '50-80 άτομα',
      description: 'Κομψός εσωτερικός χώρος για κάθε εποχή',
      image: '/indoor-wedding.jpg'
    }
  ];

  return (
    <Layout>
      <SEO
        title="Μικρός Γάμος Αθήνα | Intimate Wedding 50-80 άτομα | Κτήμα Ωρίων"
        description="Ιδανικός χώρος για μικρό γάμο στην Αθήνα. 30-80 καλεσμένοι, ιντιμ ατμόσφαιρα, θέα θάλασσα. Micro wedding με προσωπική εξυπηρέτηση."
        canonical="/el/mikros-gamos-athina"
        keywords="μικρός γάμος Αθήνα, intimate wedding, micro wedding, μικρό κτήμα γάμου, 50 άτομα γάμος, 80 άτομα γάμος"
        lang="el"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-secondary to-secondary/90">
        <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container-max text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Μικρός Γάμος Αθήνα
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Intimate wedding για 30-80 καλεσμένους. Περισσότερη ποιότητα, λιγότερο άγχος, 
            μαγευτική θέα θάλασσα και προσωπική εξυπηρέτηση.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/el/times-ktimatos-gamou">
              <Button size="lg" className="button button4">
                Δείτε Πακέτα
              </Button>
            </Link>
            <Link to="/epikoinonia">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Επικοινωνήστε Μαζί μας
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Γιατί να Επιλέξετε Μικρό Γάμο;
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Τα intimate weddings γίνονται όλο και πιο δημοφιλή - και για καλό λόγο
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-elegant p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Arrangements */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Διαρρυθμίσεις για Μικρό Γάμο
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ευέλικτοι χώροι που προσαρμόζονται στο όραμά σας
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {arrangements.map((arr, index) => (
              <Card key={index} className="card-elegant overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img 
                    src={arr.image} 
                    alt={`${arr.name} - Μικρός γάμος Αθήνα`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{arr.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-primary mb-3">
                    <Users className="w-4 h-4" />
                    <span>{arr.guests}</span>
                  </div>
                  <p className="text-muted-foreground">{arr.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Τι Περιλαμβάνει το Πακέτο Μικρού Γάμου;
          </h2>

          <Card className="card-elegant p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Βασικό Πακέτο (30-50 άτομα)</h3>
                <ul className="space-y-3">
                  {[
                    'Αποκλειστική χρήση χώρου',
                    'Θέα θάλασσα & ηλιοβασίλεμα',
                    'Gourmet catering (5 πιάτα)',
                    'Προσωπικός συντονισμός',
                    'Premium διακόσμηση',
                    'Ανοιχτό μπαρ & cocktails',
                    'Φωτισμός ατμόσφαιρας',
                    'Νυφικό τραπέζι VIP'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Premium Πακέτο (50-80 άτομα)</h3>
                <ul className="space-y-3">
                  {[
                    'Όλα από το βασικό πακέτο',
                    'Luxury floral design',
                    'Επαγγελματίας φωτογράφος (6ωρο)',
                    'DJ & μουσική επιμέλεια',
                    'Signature cocktails',
                    'Welcome drinks',
                    'Pre-wedding φωτογράφιση',
                    'Drone shots'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t text-center">
              <p className="text-lg mb-4">
                Τιμή ανά άτομο: <span className="font-semibold text-primary">από 75€</span>
              </p>
              <Link to="/el/times-ktimatos-gamou">
                <Button className="button button4">
                  Δείτε Αναλυτικές Τιμές
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Τι Λένε τα Ζευγάρια μας
          </h2>

          <div className="space-y-6">
            <Card className="card-elegant p-6">
              <div className="flex items-start gap-4">
                <Heart className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground italic mb-3">
                    "Ο μικρός μας γάμος στο Κτήμα Ωρίων ήταν ακριβώς όπως τον ονειρευόμασταν. 
                    Είχαμε χρόνο να απολαύσουμε κάθε στιγμή με τους αγαπημένους μας ανθρώπους. 
                    Η θέα, το φαγητό, η εξυπηρέτηση - όλα τέλεια!"
                  </p>
                  <p className="font-semibold">Μαρία & Γιώργος</p>
                  <p className="text-sm text-muted-foreground">Γάμος 45 ατόμων, Σεπτέμβριος 2024</p>
                </div>
              </div>
            </Card>

            <Card className="card-elegant p-6">
              <div className="flex items-start gap-4">
                <Heart className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground italic mb-3">
                    "Θέλαμε κάτι intimate και προσωπικό. Το Κτήμα Ωρίων μας προσέφερε ακριβώς αυτό. 
                    Η ομάδα ήταν εξαιρετική, μας βοήθησε σε κάθε λεπτομέρεια. Το συστήνουμε ανεπιφύλακτα!"
                  </p>
                  <p className="font-semibold">Ελένη & Κώστας</p>
                  <p className="text-sm text-muted-foreground">Γάμος 60 ατόμων, Ιούνιος 2024</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ετοιμοι για τον Μικρό σας Γάμο;
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Επικοινωνήστε μαζί μας για να οργανώσουμε το intimate wedding των ονείρων σας
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/epikoinonia">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Κλείστε Ραντεβού
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Δείτε Γκαλερί
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
