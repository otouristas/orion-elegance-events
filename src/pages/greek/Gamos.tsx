import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Camera, Users, Calendar, MapPin, Star } from 'lucide-react';

// Import wedding photos
import wedding1 from '@/assets/gamos/69 (1).jpg';
import wedding2 from '@/assets/gamos/66 (1).jpg';
import wedding3 from '@/assets/gamos/68 (1).jpg';
import wedding4 from '@/assets/gamos/64 (1).jpg';
import wedding5 from '@/assets/gamos/65 (1).jpg';
import wedding6 from '@/assets/gamos/63 (1).jpg';
import wedding7 from '@/assets/gamos/67 (1).jpg';
import wedding8 from '@/assets/gamos/62 (1).jpg';
import wedding9 from '@/assets/gamos/69.jpg';
import wedding10 from '@/assets/gamos/24 (1).jpg';
import wedding11 from '@/assets/gamos/9 (1).jpg';
import wedding12 from '@/assets/gamos/61 (1).jpg';
import wedding13 from '@/assets/gamos/26 (1).jpg';
import wedding14 from '@/assets/gamos/27 (1).jpg';

export default function Gamos() {
  const weddingPhotos = [
    { src: wedding1, alt: "Γαμήλια στιγμή στο Κτήμα Ωρίων" },
    { src: wedding2, alt: "Γαμήλια δεξίωση" },
    { src: wedding3, alt: "Μοναδικές στιγμές" },
    { src: wedding4, alt: "Γαμήλια φωτογραφία" },
    { src: wedding5, alt: "Κτήμα Ωρίων γάμος" },
    { src: wedding6, alt: "Γαμήλια βράδια" },
    { src: wedding7, alt: "Αγάπη και χαρά" },
    { src: wedding8, alt: "Μαγευτικό περιβάλλον" },
    { src: wedding9, alt: "Γαμήλια αναμνήσεις" },
    { src: wedding10, alt: "Κτήμα Ωρίων" },
    { src: wedding11, alt: "Γαμήλια στιγμές" },
    { src: wedding12, alt: "Μοναδικές αναμνήσεις" },
    { src: wedding13, alt: "Γαμήλια φωτογραφίες" },
    { src: wedding14, alt: "Κτήμα Ωρίων γάμος" }
  ];

  const weddingFeatures = [
    {
      icon: Heart,
      title: "Προσωποποιημένος Σχεδιασμός",
      description: "Κάθε γάμος είναι μοναδικός και προσαρμόζουμε κάθε λεπτομέρεια στις επιθυμίες σας"
    },
    {
      icon: Users,
      title: "Επαγγελματική Οργάνωση",
      description: "Εμπειρογνωμοσύνη και φαντασία για μια άψογη γαμήλια δεξίωση"
    },
    {
      icon: Camera,
      title: "Μαγευτικές Φωτογραφίες",
      description: "Το φυσικό περιβάλλον του κτήματος δημιουργεί υπέροχα σκηνικά"
    },
    {
      icon: Star,
      title: "Τέλεια Εξυπηρέτηση",
      description: "Η απαίτησή σας για τελειότητα είναι ο απόλυτος στόχος μας"
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Γάμος</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Μοναδικές Στιγμές Αγάπης στο Κτήμα Ωρίων
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Ο γάμος σας είναι μια εξαιρετικά σημαντική στιγμή, η έναρξη της κοινής σας πορείας με τον σύντροφο σας. 
                Μια στιγμή που θα θυμάστε με συγκίνηση και αγάπη.
              </p>
              
              <p>
                Αναλαμβάνουμε με φαντασία, συνέπεια και σεβασμό στις επιθυμίες σας το σχεδιασμό & τη διοργάνωση της δεξίωσης σας. 
                Η απαίτησή σας για τελειότητα είναι ο απόλυτος στόχος μας, ώστε να σας προσφέρουμε μια ονειρεμένη γαμήλια δεξίωση. 
                Μια βράδια που θα ικανοποιήσει και τον πιο απαιτητικό σας καλεσμένο. Στο Κτήμα Ωρίων η επιτυχία της δεξίωσης του γάμου σας, 
                είναι προσωπική μας υπόθεση.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Ελάτε να σας χαρίσουμε τις πιο όμορφες αναμνήσεις στη πιο μοναδική βράδια της ζωή σας.
              </p>
            </div>
          </div>
        </section>

        {/* Wedding Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Γιατί να επιλέξετε το Κτήμα Ωρίων;</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {weddingFeatures.map((feature, index) => (
                <Card key={index} className="card-elegant text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-brand-main mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Φωτογραφίες Γάμων</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {weddingPhotos.map((photo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ας κάνουμε τον γάμο σας ονειρεμένο
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να σχεδιάσουμε μαζί την τέλεια γαμήλια δεξίωση στο Κτήμα Ωρίων
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                Κλείστε Ραντεβού
              </button>
              <button className="button button4">
                Επικοινωνία
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}