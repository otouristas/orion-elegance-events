import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Camera, Users, Baby, Star, Sparkles } from 'lucide-react';

// Import baptism photos
import baptism1 from '@/assets/vaftisi/72.jpg';
import baptism2 from '@/assets/vaftisi/71 (1).jpg';
import baptism3 from '@/assets/vaftisi/70.jpg';
import baptism4 from '@/assets/vaftisi/28.jpg';
import baptism5 from '@/assets/vaftisi/11 (1).jpg';
import baptism6 from '@/assets/vaftisi/71.jpg';

export default function Vaptisi() {
  const baptismPhotos = [
    { src: baptism1, alt: "Βαπτιστικό στο Κτήμα Ωρίων" },
    { src: baptism2, alt: "Βαπτιστική δεξίωση" },
    { src: baptism3, alt: "Μοναδικές στιγμές βάπτισης" },
    { src: baptism4, alt: "Βαπτιστική γιορτή" },
    { src: baptism5, alt: "Κτήμα Ωρίων βάπτιση" },
    { src: baptism6, alt: "Βαπτιστικές αναμνήσεις" }
  ];

  const baptismFeatures = [
    {
      icon: Baby,
      title: "Ειδικός Χώρος για Παιδιά",
      description: "Ασφαλής και ευρύχωρος χώρος όπου τα παιδιά μπορούν να παίξουν ελεύθερα"
    },
    {
      icon: Heart,
      title: "Τρυφερή Ατμόσφαιρα",
      description: "Δημιουργούμε μια ζεστή και φιλική ατμόσφαιρα για την οικογένεια"
    },
    {
      icon: Sparkles,
      title: "Μοναδική Διακόσμηση",
      description: "Προσεγμένη διακόσμηση που θα κάνει την ημέρα αξέχαστη"
    },
    {
      icon: Users,
      title: "Οικογενειακή Γιορτή",
      description: "Ιδανικό περιβάλλον για να γιορτάσετε με όλη την οικογένεια"
    }
  ];

  const baptismServices = [
    {
      title: "Συντονισμός Εκκλησίας",
      description: "Συντονίζουμε την τελετή στην εκκλησία της επιλογής σας και φροντίζουμε για την ομαλή μετάβαση στο χώρο του γάμου."
    },
    {
      title: "Ειδικό Μενού για Παιδιά",
      description: "Προσαρμοσμένο μενού που θα ικανοποιήσει και τους μικρότερους καλεσμένους."
    },
    {
      title: "Φωτογραφία & Video",
      description: "Επαγγελματική καταγραφή όλων των στιγμών για να διατηρήσετε για πάντα αυτές τις αξέχαστες αναμνήσεις."
    },
    {
      title: "Διακόσμηση & Στολισμός",
      description: "Μαγευτική διακόσμηση με λουξ στοιχεία και φυσικά άνθη που θα δημιουργήσει την τέλεια ατμόσφαιρα."
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Βάπτιση</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Δημιουργήστε Αξέχαστες Αναμνήσεις για τη Βάπτιση του Παιδιού σας
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Πόσο ιδιαίτερο αλλά και πόσο χαρούμενο γεγονός! Πόσο τρυφερό αλλά και πόσο απαιτητικό!
              </p>
              
              <p>
                Η τελετή, αλλά και η δεξίωση που θα ακολουθήσει πρέπει να αντιπροσωπεύει την οικογένεια και για αυτό αξίζει ό,τι το καλύτερο. 
                Θα πρέπει να μεταδίδει χαρά ώστε να δημιουργηθεί μια υπέροχη γιορτή για όλα τα αγαπημένα σας πρόσωπα. 
                Με συναίσθηση της σημασίας που έχει η δεξίωση της βάπτισης, στεκόμαστε δίπλα σας, ώστε μαζί σας να οργανώσουμε την βάπτιση του παιδιού σας, 
                με πολύ αγάπη και μεράκι.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Πραγματοποιήστε τη δεξίωση της βάπτισής σας, σε ένα πολυχώρο διαφορετικό από τους άλλους.
              </p>
            </div>
          </div>
        </section>

        {/* Baptism Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Γιατί να επιλέξετε το Κτήμα Ωρίων;</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {baptismFeatures.map((feature, index) => (
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

        {/* Services Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Υπηρεσίες Βάπτισης</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {baptismServices.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gradient-brand mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
              <span className="text-gradient-brand">Φωτογραφίες Βαπτίσεων</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {baptismPhotos.map((photo, index) => (
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

        {/* Why Choose Us Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Ειδικές Λεπτομέρειες Βάπτισης</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Χώρος για Παιδιά</h3>
                    <p className="text-muted-foreground">
                      Ασφαλής παιδική χαρά με πολλά παιχνίδια και δραστηριότητες για να διασκεδάσουν τα μικρά παιδιά.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ειδικό Μενού</h3>
                    <p className="text-muted-foreground">
                      Προσαρμοσμένο μενού με επιλογές για όλες τις ηλικίες, συμπεριλαμβανομένων ειδικών πιάτων για παιδιά.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Φωτογραφία & Video</h3>
                    <p className="text-muted-foreground">
                      Επαγγελματική καταγραφή όλων των στιγμών - από την προετοιμασία έως το τέλος του πάρτι - 
                      για να διατηρήσετε για πάντα αυτές τις αξέχαστες στιγμές.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Γιατί το Κτήμα Ωρίων;</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Baby className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Ασφαλής χώρος για παιδιά</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Τρυφερή ατμόσφαιρα</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Εμπειρία σε βαπτιστικές δεξιώσεις</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Επαγγελματική ομάδα</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Προσαρμοσμένες λύσεις</span>
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
              Ας κάνουμε τη βάπτιση του παιδιού σας αξέχαστη
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να σχεδιάσουμε μαζί την τέλεια βαπτιστική δεξίωση στο Κτήμα Ωρίων
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