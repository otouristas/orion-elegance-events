import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Star, Briefcase, BarChart3, Trophy, Calendar } from 'lucide-react';

// Import corporate events photos
import event1 from '@/assets/ekdiloseis/DSC_7712.JPG';
import event2 from '@/assets/ekdiloseis/DSC_7816.JPG';
import event3 from '@/assets/ekdiloseis/DSC_7637.JPG';
import event4 from '@/assets/ekdiloseis/DSC_7806.JPG';
import event5 from '@/assets/ekdiloseis/DSC_7859.JPG';
import event6 from '@/assets/ekdiloseis/DSC_7828.JPG';
import event7 from '@/assets/ekdiloseis/DSC_7662.JPG';
import event8 from '@/assets/ekdiloseis/DSC_7588.JPG';
import event9 from '@/assets/ekdiloseis/DSC_7783.JPG';
import event10 from '@/assets/ekdiloseis/DSC_7796.JPG';
import event11 from '@/assets/ekdiloseis/DSC_7733.JPG';
import event12 from '@/assets/ekdiloseis/DSC_7763.JPG';

export default function EterikesEkdiloseis() {
  const eventPhotos = [
    { src: event1, alt: "Εταιρική εκδήλωση στο Κτήμα Ωρίων" },
    { src: event2, alt: "Επαγγελματική εκδήλωση" },
    { src: event3, alt: "Συνέδριο και παρουσιάσεις" },
    { src: event4, alt: "Εταιρική εκδήλωση" },
    { src: event5, alt: "Επαγγελματικό event" },
    { src: event6, alt: "Συνέδριο στο κτήμα" },
    { src: event7, alt: "Εταιρική γιορτή" },
    { src: event8, alt: "Εκδήλωση ΜΜΕ" },
    { src: event9, alt: "Παρουσίαση προϊόντος" },
    { src: event10, alt: "Επαγγελματική συνάντηση" },
    { src: event11, alt: "Εταιρικό συνέδριο" },
    { src: event12, alt: "Καλέσμα εκδήλωση" }
  ];

  const eventFeatures = [
    {
      icon: Briefcase,
      title: "Επαγγελματικός Χώρος",
      description: "Εξειδικευμένος χώρος για επαγγελματικές εκδηλώσεις με όλες τις σύγχρονες εγκαταστάσεις"
    },
    {
      icon: BarChart3,
      title: "Πλήρης ηχητική κάλυψη",
      description: "Πλήρης ηχητική κάλυψη για παρουσιάσεις, συνέδρια και εκδηλώσεις"
    },
    {
      icon: Users,
      title: "Επαγγελματική Εξυπηρέτηση",
      description: "Εμπειρογνωμοσύνη και ευελιξία για την επιτυχή οργάνωση της εκδήλωσής σας"
    },
    {
      icon: Star,
      title: "Αριστεία στην Οργάνωση",
      description: "Επιμονή στη λεπτομέρεια και αφοσίωση στη συνέπεια για άψογα αποτελέσματα"
    }
  ];

  const eventTypes = [
    {
      title: "Εθιμοτυπικές Συναθροίσεις",
      description: "Επίσημες συναθροίσεις και εταιρικές εκδηλώσεις με υψηλά στάνταρτς ποιότητας"
    },
    {
      title: "Καλέσματα ΜΜΕ",
      description: "Ειδικά οργανωμένες εκδηλώσεις για την παρουσίαση προϊόντων ή υπηρεσιών"
    },
    {
      title: "Συνέδρια & Εκπαιδευτικά",
      description: "Επαγγελματικά συνέδρια, σεμινάρια και εκπαιδευτικές εκδηλώσεις"
    },
    {
      title: "Παρουσιάσεις Προϊόντων",
      description: "Εξειδικευμένες εκδηλώσεις για την παρουσίαση νέων προϊόντων ή υπηρεσιών"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Εταιρικές Εκδηλώσεις | Κτήμα Ωρίων Κερατέα"
        description="Διοργανώστε επιτυχημένες εταιρικές εκδηλώσεις, συνέδρια, team building και product launches στο Κτήμα Ωρίων. Επαγγελματικοί χώροι και υπηρεσίες."
        canonical="/eterikes-ekdiloseis"
        keywords="εταιρικές εκδηλώσεις Κερατέα, συνέδρια Αττική, team building, corporate events Athens"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Εταιρικές Εκδηλώσεις</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Η Εκδήλωσή Σας, η Εξειδίκευσή Μας
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Η επαγγελματική σας εκδήλωση επαγγελματική μας ευθύνη. Ο σχεδιασμός της, απαιτεί εμπειρία και ευελιξία, 
                καθώς πρέπει να εκπληρωθεί ένα σύνολο προϋποθέσεων προκειμένου να μπορεί να θεωρηθεί επιτυχημένη.
              </p>
              
              <p>
                Η εμπειρία των συνεργατών μας, η αφοσίωση μας στην συνέπεια και η επιμονή μας στη λεπτομέρεια, 
                καθιστούν τον χώρο μας ιδανικό σημείο για τη φιλοξενία των πιο ξεχωριστών και επιτυχημένων επαγγελματικών εκδηλώσεων.
              </p>
              
              <p>
                Είτε πρόκειται για μια εθιμοτυπική συνάθροιση, είτε για κάλεσμα στους εκπροσώπους των ΜΜΕ, 
                είτε για ένα συνέδριο, είτε για παρουσίαση ενός νέου προϊόντος, το Κτήμα Ωρίων πληροί τις προϋποθέσεις της επιτυχίας.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Επικοινωνήστε μαζί μας, για να συζητήσουμε όλες τις παραμέτρους της εκδήλωσής σας και να σας προτείνουμε τις βέλτιστες λύσεις.
              </p>
            </div>
          </div>
        </section>

        {/* Event Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Γιατί να επιλέξετε το Κτήμα Ωρίων;</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventFeatures.map((feature, index) => (
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

        {/* Event Types */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Τύποι Εκδηλώσεων</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {eventTypes.map((event, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gradient-brand mb-4">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Φωτογραφίες Εταιρικών Εκδηλώσεων</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {eventPhotos.map((photo, index) => (
                <ClickableImage
                  key={index}
                  src={photo.src}
                  alt={photo.alt}
                  images={eventPhotos}
                  index={index}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Επαγγελματική Εμπειρία</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Συνεπής Εκτέλεση</h3>
                    <p className="text-muted-foreground">
                      Αφοσίωση στη συνέπεια και επιμονή στη λεπτομέρεια για άψογα αποτελέσματα.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ευελιξία & Προσαρμογή</h3>
                    <p className="text-muted-foreground">
                      Εμπειρία και ευελιξία για την εκπλήρωση όλων των προϋποθέσεων επιτυχίας.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Σύγχρονες Εγκαταστάσεις</h3>
                    <p className="text-muted-foreground">
                      Πλήρης ηχητική κάλυψη και σύγχρονες εγκαταστάσεις για επαγγελματικές εκδηλώσεις.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Γιατί το Κτήμα Ωρίων;</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Trophy className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Επαγγελματική εμπειρία</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Briefcase className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Εξειδικευμένες υπηρεσίες</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BarChart3 className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Σύγχρονες εγκαταστάσεις</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Ευέλικτος προγραμματισμός</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Αριστεία στην οργάνωση</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ας δημιουργήσουμε την τέλεια επαγγελματική εκδήλωση
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες της εκδήλωσής σας και να σας προτείνουμε τις βέλτιστες λύσεις
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
              </button>
              <button className="button button4">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}