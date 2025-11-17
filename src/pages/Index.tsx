import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Description } from '@/components/Description';
import { Features } from '@/components/Features';
import { HomeGallery } from '@/components/HomeGallery';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Churches } from '@/components/Churches';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Partners } from '@/components/Partners';
import { BackToTop } from '@/components/BackToTop';
import { ContactFAB } from '@/components/ContactFAB';
import { FAQ } from '@/components/FAQ';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homepageFAQs = [
    { question: "Πού βρίσκεται το Κτήμα Ωρίων;", answer: "Το Κτήμα Ωρίων βρίσκεται στην Κερατέα Αττικής, σε ιδανική τοποθεσία με εύκολη πρόσβαση από την Αττική Οδό. Απέχει περίπου 45 λεπτά από το κέντρο της Αθήνας και είναι κοντά σε παραθαλάσσια εκκλησάκια." },
    { question: "Τι είδους εκδηλώσεις μπορώ να διοργανώσω στο Κτήμα Ωρίων;", answer: "Διοργανώνουμε γάμους, βαπτίσεις, εταιρικές εκδηλώσεις, πάρτι γενεθλίων, αρραβώνες και οποιαδήποτε άλλη ειδική εκδήλωση. Ο χώρος μας προσαρμόζεται στις ανάγκες σας." },
    { question: "Πόσους καλεσμένους χωράει το κτήμα;", answer: "Το Κτήμα Ωρίων μπορεί να φιλοξενήσει εκδηλώσεις διαφόρων μεγεθών. Διαθέτουμε τόσο εσωτερικό κλιματιζόμενο χώρο όσο και εξωτερικό χώρο για μεγάλες εκδηλώσεις." },
    { question: "Υπάρχει parking για τους καλεσμένους;", answer: "Ναι, διαθέτουμε τεράστιο χώρο δωρεάν στάθμευσης με πάνω από 100 θέσεις για όλους τους καλεσμένους σας, κάτι που είναι σπάνιο για κτήματα στην περιοχή." },
    { question: "Μπορώ να επισκεφτώ το κτήμα πριν κλείσω;", answer: "Απολύτως! Σας ενθαρρύνουμε να επισκεφτείτε το Κτήμα Ωρίων και να δείτε το μαγευτικό περιβάλλον. Επικοινωνήστε μαζί μας για να κλείσουμε δωρεάν ξενάγηση." },
    { question: "Ποιες υπηρεσίες παρέχετε;", answer: "Παρέχουμε ολοκληρωμένες υπηρεσίες: catering, διακόσμηση, φωτισμό, ήχο, επαγγελματικό φωτογράφο (Studio Alpha) και πλήρη συντονισμό της εκδήλωσης." },
    { question: "Υπάρχουν εκκλησίες κοντά για την τελετή;", answer: "Ναι, βρισκόμαστε πολύ κοντά σε 4 γραφικά παραθαλάσσια εκκλησάκια (5-15 λεπτά): Άγιος Αλέξανδρος Δασκαλειό, Προφήτης Ηλίας Θορικό, Άγιος Παντελεήμονας και Παναγία Γκαρικά." },
    { question: "Είναι ο χώρος κλιματιζόμενος;", answer: "Ναι, διαθέτουμε πλήρως κλιματιζόμενη αίθουσα και επίσης μαγευτικό ημιυπαίθριο χώρο, ιδανικό για όλες τις εποχές." },
    { question: "Μπορώ να φέρω τους δικούς μου συνεργάτες;", answer: "Φυσικά! Είστε ελεύθεροι να φέρετε τους δικούς σας συνεργάτες ή να χρησιμοποιήσετε τους έμπειρους συνεργάτες μας." },
    { question: "Πόσο χρόνο πριν πρέπει να κλείσω το κτήμα;", answer: "Σας συμβουλεύουμε να κλείσετε τουλάχιστον 6-12 μήνες νωρίτερα, ειδικά για καλοκαιρινούς μήνες και Σαββατοκύριακα. Οι δημοφιλείς ημερομηνίες εξαντλούνται γρήγορα." },
    { question: "Τι περιλαμβάνει το catering;", answer: "Το catering περιλαμβάνει πλήρες μενού προσαρμοσμένο στις επιθυμίες σας, με επιλογές για όλες τις ηλικίες, συμπεριλαμβανομένου ειδικού παιδικού μενού για βαπτίσεις." },
    { question: "Υπάρχει χώρος για παιδιά;", answer: "Ναι, διαθέτουμε ασφαλή εξωτερικό χώρο όπου τα παιδιά μπορούν να παίξουν υπό επίβλεψη, ιδανικό για οικογενειακές εκδηλώσεις όπως βαπτίσεις." }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Κτήμα Ωρίων – Κτήμα γάμου & βάπτισης στην Κερατέα Αττικής | Wedding & Event Venue"
        description="Κτήμα γάμου & βάπτισης Κερατέα Αττική. Θέα θάλασσα, parking 100+ θέσεων, κλιματισμός. Κοντά παραθαλάσσια εκκλησάκια. Κλείστε επίσκεψη!"
        canonical="/"
        keywords="κτήμα ωρίων, κτήμα κερατέα, κτήμα γάμου κερατέα, κτήματα κερατέα, γάμος κερατέα, βάπτιση κερατέα, εκκλησίες γάμου κερατέα, χώρος δεξιώσεων κερατέα, άγιος αλέξανδρος δασκαλείο, wedding venue keratea"
        schemaType="LocalBusiness"
        breadcrumbs={[
          { name: 'Αρχική', url: '/' }
        ]}
      />
      <Navigation isScrolled={isScrolled} isTransparent={true} />
      <Hero />
      <Description />
      <Features />
      <HomeGallery />
      <Services />
      <About />
      <Churches />
      <Testimonials />
      <FAQ items={homepageFAQs} title="Συχνές Ερωτήσεις" />
      <Partners />
      <Contact />
      <Footer />
      <BackToTop />
      <ContactFAB />
    </div>
  );
};

export default Index;
