import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Baby, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VaptisiStiThalassa() {
  const churches = [
    {
      name: 'Άγιος Αλέξανδρος Δασκαλειό',
      distance: '8 λεπτά από το κτήμα',
      ideal: 'Μικρές οικογενειακές βαπτίσεις',
      description: 'Πανέμορφο εκκλησάκι δίπλα στη θάλασσα με ιντιμ ατμόσφαιρα',
      capacity: '60-80 άτομα',
      features: ['Parking', 'Θέα θάλασσα', 'Κλιματισμός', 'Κολυμβήθρα'],
      link: '/el/ekklisaki-dipla-sti-thalassa/agios-alexandros-daskaleio'
    },
    {
      name: 'Προφήτης Ηλίας Θορικού',
      distance: '12 λεπτά από το κτήμα',
      ideal: 'Μεγαλύτερες εκδηλώσεις',
      description: 'Ιστορική εκκλησία με πανοραμική θέα από το λόφο',
      capacity: '150-200 άτομα',
      features: ['Μεγάλο parking', 'Panoramic θέα', 'Κολυμβήθρα', 'Ευρύχωρη'],
      link: '/el/ekklisaki-dipla-sti-thalassa/profitis-ilias-thorikou'
    },
    {
      name: 'Παναγία Γκαρικά',
      distance: '10 λεπτά από το κτήμα',
      ideal: 'Παραδοσιακές βαπτίσεις',
      description: 'Χαρακτηριστική παραδοσιακή αρχιτεκτονική',
      capacity: '60-80 άτομα',
      features: ['Parking', 'Ήσυχη περιοχή', 'Κολυμβήθρα', 'Ιστορικό'],
      link: '/el/ekklisaki-dipla-sti-thalassa/panagia-gkarika'
    }
  ];

  return (
    <Layout>
      <SEO
        title="Βάπτιση στη Θάλασσα | Εκκλησάκια κοντά στο Κτήμα Ωρίων"
        description="Τελέστε τη βάπτιση σε όμορφο εκκλησάκι δίπλα στη θάλασσα. Άγ. Αλέξανδρος, Προφ. Ηλίας, Παναγία Γκαρικά. Δεξίωση στο Κτήμα Ωρίων."
        canonical="/el/vaptisi-sti-thalassa"
        keywords="βάπτιση στη θάλασσα, εκκλησάκι βάπτισης, ναός βάπτισης Αθήνα, βάπτιση δίπλα στη θάλασσα"
        lang="el"
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-secondary to-secondary/90">
        <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container-max text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Βάπτιση στη Θάλασσα
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Πανέμορφα εκκλησάκια δίπλα στη θάλασσα για τη βάπτιση του μωρού σας, 
            με δεξίωση στο Κτήμα Ωρίων την ίδια μέρα.
          </p>
        </div>
      </section>

      {/* Churches */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Εκκλησάκια για Βάπτιση κοντά στο Κτήμα
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Όλα τα εκκλησάκια βρίσκονται 8-12 λεπτά από το κτήμα
          </p>

          <div className="space-y-8">
            {churches.map((church, index) => (
              <Card key={index} className="card-elegant p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{church.name}</h3>
                        <p className="text-sm text-primary font-medium">{church.distance}</p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground mb-4">{church.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Baby className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm">Ιδανικό για: {church.ideal}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm">Χωρητικότητα: {church.capacity}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {church.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center gap-4">
                    <Link to={church.link}>
                      <Button className="w-full">
                        Δείτε Λεπτομέρειες
                      </Button>
                    </Link>
                    <Link to="/epikoinonia">
                      <Button className="w-full" variant="outline">
                        Ρωτήστε Διαθεσιμότητα
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Baptism by the Sea */}
      <section className="section-padding bg-muted/30">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Γιατί Βάπτιση δίπλα στη Θάλασσα;
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-elegant p-6">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Μαγευτική Ατμόσφαιρα</h3>
              <p className="text-muted-foreground">
                Η θέα της θάλασσας και ο ήχος των κυμάτων δημιουργούν μια μοναδική, 
                γαλήνια ατμόσφαιρα για το μυστήριο της βάπτισης.
              </p>
            </Card>

            <Card className="card-elegant p-6">
              <Baby className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Φωτογράφιση</h3>
              <p className="text-muted-foreground">
                Μοναδικές φωτογραφίες με φόντο τη θάλασσα και τη φύση. 
                Οι αναμνήσεις θα είναι ανεκτίμητες.
              </p>
            </Card>

            <Card className="card-elegant p-6">
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Εύκολη Μετάβαση</h3>
              <p className="text-muted-foreground">
                Μόλις 8-12 λεπτά από το εκκλησάκι στο κτήμα. Οι καλεσμένοι 
                μπορούν εύκολα να μετακινηθούν για τη δεξίωση.
              </p>
            </Card>

            <Card className="card-elegant p-6">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ολοκληρωμένη Εμπειρία</h3>
              <p className="text-muted-foreground">
                Τελετή στο εκκλησάκι, φωτογράφιση στη φύση, και δεξίωση 
                στο κτήμα - όλα οργανωμένα άψογα.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Θέλετε να Οργανώσουμε τη Βάπτιση;
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Επικοινωνήστε μαζί μας για να επισκεφτείτε τα εκκλησάκια και το κτήμα
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/epikoinonia">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Επικοινωνήστε Μαζί μας
              </Button>
            </Link>
            <Link to="/el/vaptisi-choros-athina">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Δείτε Πακέτα Βάπτισης
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
