import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Calendar, MapPin, Star } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';

// Import wedding photos
import wedding1 from '@/assets/gamos/DSC_7637.JPG';
import wedding2 from '@/assets/gamos/DSC_7816.JPG';
import wedding3 from '@/assets/gamos/DSC_7712.JPG';
import wedding4 from '@/assets/gamos/DSC_7806.JPG';
import wedding5 from '@/assets/gamos/DSC_7859.JPG';
import wedding6 from '@/assets/gamos/DSC_7662.JPG';
import wedding7 from '@/assets/gamos/DSC_7828.JPG';
import wedding8 from '@/assets/gamos/DSC_7588.JPG';
import wedding9 from '@/assets/gamos/DSC_7796.JPG';
import wedding10 from '@/assets/gamos/DSC_7733.JPG';
import wedding11 from '@/assets/gamos/DSC_7705.JPG';
import wedding12 from '@/assets/gamos/DSC_7783.JPG';
import wedding13 from '@/assets/gamos/DSC_7763.JPG';
import wedding14 from '@/assets/gamos/DSC_7673.JPG';
import wedding15 from '@/assets/gamos/DSC_7542.JPG';
import wedding16 from '@/assets/gamos/DSC_7569.JPG';
import wedding17 from '@/assets/gamos/DSC_7503.JPG';
import wedding18 from '@/assets/gamos/DSC_7622.JPG';

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
    { src: wedding14, alt: "Κτήμα Ωρίων γάμος" },
    { src: wedding15, alt: "Ρομαντική βραδιά" },
    { src: wedding16, alt: "Γαμήλιος στολισμός" },
    { src: wedding17, alt: "Αξέχαστες στιγμές" },
    { src: wedding18, alt: "Ονειρεμένος γάμος" }
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

  const weddingFAQs = [
    {
      question: "Πώς να επιλέξω την ιδανική ημερομηνία γάμου;",
      answer: "Η επιλογή ημερομηνίας εξαρτάται από πολλούς παράγοντες: την εποχή που προτιμάτε, τη διαθεσιμότητα του χώρου, και τις ανάγκες των καλεσμένων σας. Τα Σαββατοκύριακα Μαΐου-Ιουνίου και Σεπτεμβρίου είναι πολύ δημοφιλή."
    },
    {
      question: "Μπορούμε να κάνουμε γάμο το χειμώνα;",
      answer: "Απολύτως! Ο πλήρως κλιματιζόμενος εσωτερικός χώρος μας είναι ιδανικός για χειμερινούς γάμους, προσφέροντας ζεστασιά και κομψότητα."
    },
    {
      question: "Υπάρχει Plan B σε περίπτωση βροχής;",
      answer: "Ναι, διαθέτουμε μεγάλη κλιματιζόμενη αίθουσα που μπορεί να φιλοξενήσει ολόκληρη την εκδήλωση με άνεση."
    },
    {
      question: "Πόσες ώρες διαρκεί η ενοικίαση του χώρου;",
      answer: "Η ενοικίαση του χώρου είναι αποκλειστική για όλη τη διάρκεια της εκδήλωσής σας, από την προετοιμασία μέχρι το τέλος της δεξίωσης."
    },
    {
      question: "Μπορούμε να φέρουμε δικό μας DJ;",
      answer: "Φυσικά! Μπορείτε να επιλέξετε δικούς σας συνεργάτες (DJ, μουσικό συγκρότημα) ή να χρησιμοποιήσετε τις συνεργασίες μας."
    },
    {
      question: "Υπάρχει χώρος για φωτογράφιση πριν τη δεξίωση;",
      answer: "Ναι, ο κήπος και οι εξωτερικοί χώροι μας προσφέρουν υπέροχα σκηνικά για τη φωτογράφιση του ζευγαριού και των καλεσμένων."
    },
    {
      question: "Ποιες παραθαλάσσιες εκκλησίες είναι κοντά;",
      answer: "Συνεργαζόμαστε με 4 πανέμορφες παραθαλάσσιες εκκλησίες: Άγιος Αλέξανδρος Δασκαλείο (8 λεπτά), Προφήτης Ηλίας Θορικό (12 λεπτά), Άγιος Παντελεήμων (5 λεπτά), και Παναγία Γκαρικά (10 λεπτά)."
    },
    {
      question: "Τι ώρα μπορούμε να αρχίσουμε την προετοιμασία;",
      answer: "Μπορείτε να έχετε πρόσβαση στο χώρο από νωρίς το πρωί για να προετοιμάσετε τη διακόσμηση και όλες τις λεπτομέρειες."
    },
    {
      question: "Χωράει ο χώρος για 150 άτομα;",
      answer: "Ναι, ο χώρος μας μπορεί να φιλοξενήσει άνετα από 30 έως 200 άτομα, με συνδυασμό εσωτερικού και εξωτερικού χώρου."
    },
    {
      question: "Υπάρχει κλιματισμός;",
      answer: "Ναι, ο εσωτερικός χώρος είναι πλήρως κλιματιζόμενος για τη μέγιστη άνεση των καλεσμένων σας."
    },
    {
      question: "Μπορούμε να διακοσμήσουμε μόνοι μας;",
      answer: "Απολύτως! Μπορείτε να φέρετε δικό σας διακοσμητή ή να χρησιμοποιήσετε τους έμπειρους συνεργάτες μας."
    },
    {
      question: "Παρέχετε catering;",
      answer: "Ναι, συνεργαζόμαστε με επαγγελματίες caterers που προσφέρουν μενού υψηλής ποιότητας προσαρμοσμένο στις επιθυμίες σας."
    },
    {
      question: "Πόσο χώρο έχει το parking;",
      answer: "Διαθέτουμε ιδιωτικό parking με 100+ θέσεις δωρεάν για τους καλεσμένους σας."
    },
    {
      question: "Μπορούμε να κάνουμε πρόβα πριν τον γάμο;",
      answer: "Ναι, μπορείτε να επισκεφτείτε το χώρο και να οργανώσετε τις λεπτομέρειες με την ομάδα μας πριν τη μεγάλη ημέρα."
    },
    {
      question: "Είναι ο χώρος αποκλειστικός για εμάς;",
      answer: "Απολύτως! Το Κτήμα Ωρίων παραχωρείται αποκλειστικά για την εκδήλωσή σας, εξασφαλίζοντας πλήρη ιδιωτικότητα."
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
                  key={index}
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