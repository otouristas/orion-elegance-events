import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Camera, Users, Star, Home, Car, TreePine, Utensils, Award, MapPin, Phone, Mail } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';
import { PopularSearches } from '@/components/PopularSearches';
import { Link } from 'react-router-dom';

// Import images from all folders
// Home images
import home1 from '@/assets/home/DSC_7588.JPG';
import home2 from '@/assets/home/DSC_7816.JPG';

// Wedding images
import wedding1 from '@/assets/gamos/DSC_7637.JPG';
import wedding2 from '@/assets/gamos/DSC_7712.JPG';
import wedding3 from '@/assets/gamos/DSC_7806.JPG';

// Baptism images
import baptism1 from '@/assets/vaftisi/DSC_7662.JPG';
import baptism2 from '@/assets/vaftisi/DSC_7828.JPG';

// Corporate events images
import corporate1 from '@/assets/ekdiloseis/DSC_7859.JPG';
import corporate2 from '@/assets/ekdiloseis/DSC_7783.JPG';

// Party images
import party1 from '@/assets/party/DSC_7796.JPG';
import party2 from '@/assets/party/DSC_7733.JPG';

export default function OHoros() {
  const venuePhotos = [
    { src: home1, alt: "Κτήμα Ωρίων - Ημιυπαίθρια παγόδα", category: "Χώρος" },
    { src: home2, alt: "Κτήμα Ωρίων - Χώρος εκδηλώσεων", category: "Χώρος" },
    { src: wedding1, alt: "Κτήμα Ωρίων - Γαμήλιες εκδηλώσεις", category: "Γάμος" },
    { src: wedding2, alt: "Κτήμα Ωρίων - Γαμήλια δεξίωση", category: "Γάμος" },
    { src: wedding3, alt: "Κτήμα Ωρίων - Γαμήλιες στιγμές", category: "Γάμος" },
    { src: baptism1, alt: "Κτήμα Ωρίων - Βαπτιστικές εκδηλώσεις", category: "Βάπτιση" },
    { src: baptism2, alt: "Κτήμα Ωρίων - Βαπτιστική δεξίωση", category: "Βάπτιση" },
    { src: corporate1, alt: "Κτήμα Ωρίων - Εταιρικές εκδηλώσεις", category: "Εταιρικά" },
    { src: corporate2, alt: "Κτήμα Ωρίων - Επαγγελματικές εκδηλώσεις", category: "Εταιρικά" },
    { src: party1, alt: "Κτήμα Ωρίων - Πάρτι και γιορτές", category: "Πάρτι" },
    { src: party2, alt: "Κτήμα Ωρίων - Εορταστικές εκδηλώσεις", category: "Πάρτι" }
  ];

  const venueFeatures = [
    {
      icon: Car,
      title: "Χώρο στάθμευσης",
      description: "Τεράστιος χώρος στάθμευσης για όλους τους καλεσμένους"
    },
    {
      icon: Home,
      title: "Ημιυπαίθρια παγόδα",
      description: "Μαγευτικός ημιυπαίθριος χώρος για εκδηλώσεις"
    },
    {
      icon: Heart,
      title: "Χώρο υποδοχής",
      description: "Χώρος υποδοχής για τους καλεσμένους"
    },
    {
      icon: Home,
      title: "Studio",
      description: "Studio για το ζευγάρι καθ' όλη τη διάρκεια"
    }
  ];

  const venueHighlights = [
    {
      title: "Μαγευτικό Φυσικό Περιβάλλον",
      description: "Το Κτήμα Ωρίων είναι ένας υπέροχος καταπράσινος χώρος, όπου ο επισκέπτης νιώθει αμέσως την λάμψη της πολυτέλειας σε απόλυτη αρμονία με το φυσικό περιβάλλον.",
      icon: TreePine
    },
    {
      title: "Ιδανική Τοποθεσία",
      description: "Σε μια ιδανική τοποθεσία, με εύκολη πρόσβαση από την Αττική οδό, μπορείτε να απολαύσετε τις ξεχωριστές στιγμές της ζωής σας.",
      icon: MapPin
    },
    {
      title: "Σύγχρονες Εγκαταστάσεις",
      description: "Η κλειστή αίθουσα, πλήρως κλιματιζόμενη, και ο εξωτερικός μαγευτικός χώρος του κτήματος εγγυούνται την θερμή υποδοχή και την απόλυτη φιλοξενία των καλεσμένων σας.",
      icon: Home
    },
    {
      title: "Κοντά σε Εκκλησάκια",
      description: "Βρισκόμαστε πολύ κοντά σε γραφικά εκκλησάκια πάνω στην θάλασσα για την τέλεση του μυστηρίου.",
      icon: Heart
    }
  ];

  const eventTypes = [
    {
      title: "Γάμοι",
      description: "Μοναδικές στιγμές αγάπης στο Κτήμα Ωρίων. Αναλαμβάνουμε με φαντασία, συνέπεια και σεβασμό στις επιθυμίες σας το σχεδιασμό & τη διοργάνωση της δεξίωσης σας.",
      count: "200+",
      icon: Heart
    },
    {
      title: "Βαπτίσεις",
      description: "Πόσο ιδιαίτερο αλλά και πόσο χαρούμενο γεγονός! Η τελετή, αλλά και η δεξίωση που θα ακολουθήσει πρέπει να αντιπροσωπεύει την οικογένεια.",
      count: "150+",
      icon: Users
    },
    {
      title: "Εταιρικές Εκδηλώσεις",
      description: "Η επαγγελματική σας εκδήλωση επαγγελματική μας ευθύνη. Η εμπειρία των συνεργατών μας καθιστεί τον χώρο μας ιδανικό για επιτυχημένες εκδηλώσεις.",
      count: "100+",
      icon: Star
    },
    {
      title: "Πάρτι & Γιορτές",
      description: "Στο Κτήμα Ωρίων, μετατρέπουμε τις ξεχωριστές σας στιγμές σε αξέχαστες εμπειρίες. Γενέθλια, αρραβώνας ή εταιρικό party.",
      count: "300+",
      icon: Camera
    }
  ];

  const venueFAQs = [
    { question: "Πού βρίσκεται το Κτήμα Ωρίων;", answer: "Το Κτήμα Ωρίων βρίσκεται στην Κερατέα Αττικής, με εύκολη πρόσβαση από την Αττική Οδό. Προσφέρει ένα πανέμορφο φυσικό περιβάλλον κοντά στην Αθήνα." },
    { question: "Ποια είναι η χωρητικότητα του χώρου;", answer: "Ο χώρος μας μπορεί να φιλοξενήσει μεγάλες εκδηλώσεις με εκτεταμένο χώρο στάθμευσης για πάνω από 100 οχήματα. Διαθέτουμε τόσο κλειστούς κλιματιζόμενους όσο και εξωτερικούς χώρους." },
    { question: "Υπάρχει χώρος στάθμευσης;", answer: "Ναι, διαθέτουμε τεράστιο δωρεάν χώρο στάθμευσης με πάνω από 100 θέσεις για όλους τους καλεσμένους σας." },
    { question: "Έχετε εσωτερικούς και εξωτερικούς χώρους;", answer: "Ναι, προσφέρουμε πλήρως κλιματιζόμενη εσωτερική αίθουσα και μαγευτική ημιυπαίθρια παγόδα, κατάλληλη για όλες τις εποχές και τις καιρικές συνθήκες." },
    { question: "Μπορούμε να επισκεφτούμε τον χώρο πριν την κράτηση;", answer: "Απολύτως! Ενθαρρύνουμε τα ζευγάρια να επισκεφτούν το Κτήμα Ωρίων και να δουν από κοντά το μαγευτικό περιβάλλον που θα φιλοξενήσει την εκδήλωσή τους. Επικοινωνήστε μαζί μας για να κανονίσουμε μια δωρεάν ξενάγηση." },
    { question: "Είστε κοντά σε εκκλησίες;", answer: "Ναι, βρισκόμαστε πολύ κοντά σε γραφικά εκκλησάκια δίπλα στη θάλασσα (5-15 λεπτά), ιδανικά για γαμήλιες και βαπτιστικές τελετές." }
  ];

  return (
    <Layout>
      <SEO 
        title="Ο Χώρος | Κτήμα Ωρίων – Εσωτερικοί & Εξωτερικοί Χώροι"
        description="Ανακαλύψτε τους εσωτερικούς και εξωτερικούς χώρους του Κτήματος Ωρίων. Κήπος, πισίνα, αίθουσα δεξιώσεων, studio ζευγαριού και χώρος υποδοχής."
        canonical="/o-horos"
        keywords="χώρος δεξιώσεων, αίθουσα, κήπος, πισίνα, studio ζευγαριού, Κερατέα"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Ο Χώρος</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Κτήμα Ωρίων - Μαγευτικός Χώρος για Εκδηλώσεις
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Το Κτήμα Ωρίων είναι ένας υπέροχος καταπράσινος χώρος, όπου ο επισκέπτης νιώθει αμέσως την λάμψη της πολυτέλειας 
                σε απόλυτη αρμονία με το φυσικό περιβάλλον. Ιδανικό για <Link to="/gamos" className="text-brand-main hover:underline">γάμους</Link>, <Link to="/vaptisi" className="text-brand-main hover:underline">βαπτίσεις</Link> και εταιρικές εκδηλώσεις. Σε μια ιδανική τοποθεσία, με εύκολη πρόσβαση από την Αττική οδό, 
                μπορείτε να απολαύσετε τις ξεχωριστές στιγμές της ζωής σας.
              </p>
              
              <p>
                Η κλειστή αίθουσα, πλήρως κλιματιζόμενη, και ο εξωτερικός μαγευτικός χώρος του κτήματος εγγυούνται την θερμή υποδοχή 
                και την απόλυτη φιλοξενία των καλεσμένων σας. Βρισκόμαστε πολύ κοντά σε <Link to="/ekklisies" className="text-brand-main hover:underline">γραφικά εκκλησάκια</Link> πάνω στην θάλασσα 
                για την τέλεση του μυστηρίου.
              </p>
            </div>
          </div>
        </section>

        {/* Venue Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Το Κτήμα διαθέτει:</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {venueFeatures.map((feature, index) => (
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

        {/* Venue Highlights */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Γιατί το Κτήμα Ωρίων;</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {venueHighlights.map((highlight, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <highlight.icon className="w-12 h-12 text-brand-main flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gradient-brand mb-4">{highlight.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Statistics */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Οι Εκδηλώσεις μας</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTypes.map((event, index) => (
                <Card key={index} className="card-elegant text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <event.icon className="w-16 h-16 text-brand-main mx-auto mb-4" />
                    <div className="text-3xl font-bold text-brand-main mb-2">{event.count}</div>
                    <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Photo Gallery */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Φωτογραφίες Χώρου</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {venuePhotos.map((photo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership & Services */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Η Συνεργασία μας</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Η συνεργασία μας, με πιστοποιημένα catering εξασφαλίζει, εκτός από το περιβάλλον και τη γαστριμαργική απόλαυση των καλεσμένων σας. 
                    Οι επιλεγμένοι συνεργάτες μας φροντίζουν για την μουσική και ηχητική κάλυψη της δεξίωσης σας.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Το Κτήμα μας συνδυάζει, παρουσία, άρτια οργάνωση και υψηλό επίπεδο υπηρεσιών. 
                    Βρισκόμαστε πολύ κοντά σε γραφικά εκκλησάκια πάνω στην θάλασσα για την τέλεση του μυστηρίου.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Υπεύθυνη χώρου</h3>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-brand-main">Μπούσουλα Παναγιώτα</div>
                    <div className="text-muted-foreground">Υπεύθυνη χώρου Κτήμα Ωρίων</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Με εμπειρία και αγάπη για την φιλοξενία, η Μπούσουλα Παναγιώτα εξασφαλίζει
                  ότι κάθε εκδήλωση στο Κτήμα Ωρίων θα είναι άψογη και αξέχαστη.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignals />

        {/* FAQ Section */}
        <FAQ items={venueFAQs} title="Συχνές Ερωτήσεις για τον Χώρο" />

        {/* Popular Searches */}
        <PopularSearches 
          links={[
            { label: "Γάμος", href: "/gamos" },
            { label: "Βάπτιση", href: "/vaptisi" },
            { label: "Εκκλησίες", href: "/ekklisies" },
            { label: "Υπηρεσίες", href: "/ypiresies" },
            { label: "Φωτογράφος", href: "/fotografos" }
          ]}
        />

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Επισκεφτείτε το Κτήμα Ωρίων
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ραντεβού για επίσκεψη στο Κτήμα Ωρίων και να δείτε από κοντά 
              το μαγευτικό περιβάλλον που θα φιλοξενήσει την εκδήλωσή σας.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="/contact" className="button button4">
                ΚΛΕΙΣΤΕ ΔΩΡΕΑΝ ΞΕΝΑΓΗΣΗ
              </a>
              <a href="/gamos" className="button button4">
                ΔΕΙΤΕ ΥΠΗΡΕΣΙΕΣ
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Τοποθεσία</div>
                <div className="text-muted-foreground">Κερατέα, Αττική</div>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Τηλέφωνο</div>
                <div className="text-muted-foreground">2299068812 / 6981889560</div>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Email</div>
                <div className="text-muted-foreground">info@ktimaorion.gr</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}