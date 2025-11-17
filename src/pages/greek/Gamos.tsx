import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Calendar, MapPin, Star } from 'lucide-react';

// Import wedding photos
import wedding2 from '@/assets/gamos/DSC_7816.JPG';
import wedding4 from '@/assets/gamos/DSC_7806.JPG';
import wedding5 from '@/assets/gamos/DSC_7859.JPG';
import wedding7 from '@/assets/gamos/DSC_7828.JPG';
import wedding16 from '@/assets/gamos/DSC_7569.JPG';

export default function Gamos() {
  const weddingPhotos = [
    { src: wedding2, alt: "Γαμήλια δεξίωση κτήμα Ωρίων Κερατέα θέα θάλασσα" },
    { src: wedding4, alt: "Γάμος κτήμα γάμου Αττική με εξωτερικό χώρο" },
    { src: wedding5, alt: "Νυφικό τραπέζι γαμήλια δεξίωση Κερατέα" },
    { src: wedding7, alt: "Wedding reception Ktima Orion Athens Riviera" },
    { src: wedding16, alt: "Γαμήλιος στολισμός δεξίωσης γάμου Κερατέα" },
    { src: "/gamos/1.jpeg", alt: "Χώρος δεξίωσης γάμου Κερατέα με κλιματισμό" },
    { src: "/gamos/3.jpg", alt: "Γαμήλια τελετή εκκλησία θάλασσα Κερατέα" },
    { src: "/gamos/6.jpeg", alt: "Νυφικό ζευγάρι κτήμα Ωρίων Αττική" },
    { src: "/gamos/8.jpeg", alt: "Δεξίωση γάμου υπαίθριος χώρος Κερατέα" },
    { src: "/gamos/9.jpg", alt: "Γαμήλια φωτογράφηση κτήμα γάμου Αθήνα" },
    { src: "/gamos/10.jpg", alt: "Wedding venue Athens Keratea reception" },
    { src: "/gamos/11.jpg", alt: "Γαμήλια δεξίωση εσωτερικός χώρος κλιματιζόμενος" },
    { src: "/gamos/12.jpg", alt: "Νυφικό τραπέζι διακόσμηση γάμου Κερατέα" },
    { src: "/gamos/13.jpg", alt: "Χώρος δεξιώσεων γάμων βαπτίσεων Αττική" },
    { src: "/gamos/14.jpg", alt: "Γάμος παραθαλάσσια εκκλησία Κερατέα" },
    { src: "/gamos/15.jpg", alt: "Γαμήλια δεξίωση κήπος κτήμα Ωρίων" },
    { src: "/gamos/16.jpg", alt: "Wedding reception venue Athens Greece" },
    { src: "/gamos/17.jpg", alt: "Γάμος Κερατέα δεξίωση υπαίθριο κτήμα" },
    { src: "/gamos/18.jpg", alt: "Κτήμα για γάμο Αττική parking δωρεάν" },
    { src: "/gamos/19.jpeg", alt: "Γαμήλια εκδήλωση χώρος στάθμευσης Κερατέα" },
    { src: "/gamos/20.jpeg", alt: "Δεξίωση γάμου κοντά Αθήνα Athens Riviera" }
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
      <SEO 
        title="Γάμος στο Κτήμα Ωρίων – Κτήμα Γάμου Κερατέα Αττική | Wedding Venue"
        description="Οργανώστε τον ονειρεμένο γάμο σας στο Κτήμα Ωρίων Κερατέα. Εξωτερικός κήπος με θέα, κλειστή αίθουσα, δίπλα σε παραθαλάσσια εκκλησάκια. 15+ χρόνια εμπειρίας στη διοργάνωση γάμων."
        canonical="/gamos"
        keywords="γάμος κερατέα, κτήμα γάμου κερατέα, κτήμα γάμου αττική, δεξίωση γάμου, χώρος δεξιώσεων γάμου, διοργάνωση γάμων, wedding venue keratea, εκκλησία γάμου"
      />
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
                Ο γάμος σας είναι μια εξαιρετικά σημαντική στιγμή, η έναρξη της κοινής σας πορείας. 
                Μια στιγμή που θα θυμάστε με συγκίνηση και αγάπη μέσα από το <strong>νυφικό τραπέζι</strong> και κάθε λεπτομέρεια της <strong>γαμήλιας δεξίωσης</strong> σας.
              </p>
              
              <p>
                Αναλαμβάνουμε με φαντασία, συνέπεια και σεβασμό στις επιθυμίες σας το σχεδιασμό & τη διοργάνωση της <strong>δεξίωσης γάμου</strong> σας. 
                Η απαίτησή σας για τελειότητα είναι ο απόλυτος στόχος μας, ώστε να σας προσφέρουμε μια ονειρεμένη γαμήλια δεξίωση στον <a href="/o-horos" className="text-brand-main hover:underline">χώρο δεξιώσεων</a> μας.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Ελάτε να σας χαρίσουμε τις πιο όμορφες αναμνήσεις στο πιο μοναδικό βράδυ της ζωής σας. Κοντά σε <a href="/ekklisies" className="text-brand-main hover:underline">παραθαλάσσια εκκλησάκια</a>, με θέα που κόβει την ανάσα.
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">{weddingFeatures.map((feature, index) => (
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
                <ClickableImage
                  src={photo.src}
                  alt={photo.alt}
                  images={weddingPhotos}
                  index={index}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
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
              <a href="/contact">
                <button className="button button4">
                  ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
                </button>
              </a>
              <a href="/el/ekklisiaki-dipla-sti-thalassa">
                <button className="button button4">
                  ΔΕΙΤΕ ΕΚΚΛΗΣΙΕΣ
                </button>
              </a>
            </div>
            
            {/* Internal Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <a href="/el/ktima-gamou-athina" className="text-brand-main hover:underline">Κτήμα Γάμου Αθήνα</a>
              <span className="text-muted-foreground">•</span>
              <a href="/el/ktima-gamou-athens-riviera" className="text-brand-main hover:underline">Athens Riviera</a>
              <span className="text-muted-foreground">•</span>
              <a href="/o-horos" className="text-brand-main hover:underline">Δείτε τον Χώρο</a>
              <span className="text-muted-foreground">•</span>
              <a href="/fotografos" className="text-brand-main hover:underline">Φωτογράφος</a>
              <span className="text-muted-foreground">•</span>
              <a href="/diorganotis-gamon" className="text-brand-main hover:underline">Wedding Planner</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}