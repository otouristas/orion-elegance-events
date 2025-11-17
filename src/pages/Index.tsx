import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
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
import { SocialProof } from '@/components/SocialProof';
import { FAQ } from '@/components/FAQ';

const Index = () => {
  const homepageFAQs = [
    {
      question: "Πού βρίσκεται το Κτήμα Ωρίων;",
      answer: "Το Κτήμα Ωρίων βρίσκεται στην Κερατέα Αττικής, σε προνομιακή τοποθεσία κοντά σε παραθαλάσσιες εκκλησίες και με εύκολη πρόσβαση από την Αθήνα."
    },
    {
      question: "Πόσα άτομα χωράει ο χώρος;",
      answer: "Ο χώρος μας μπορεί να φιλοξενήσει εκδηλώσεις από 30 έως 200 άτομα, με άνετους εσωτερικούς και εξωτερικούς χώρους."
    },
    {
      question: "Υπάρχει χώρος στάθμευσης;",
      answer: "Ναι, διαθέτουμε δωρεάν ιδιωτικό parking με περισσότερες από 100 θέσεις στάθμευσης για την άνεση των καλεσμένων σας."
    },
    {
      question: "Μπορούμε να κάνουμε εκδήλωση το χειμώνα;",
      answer: "Απολύτως! Ο εσωτερικός μας χώρος είναι πλήρως κλιματιζόμενος και ιδανικός για χειμερινές εκδηλώσεις."
    },
    {
      question: "Ποιες εκκλησίες είναι κοντά στο κτήμα;",
      answer: "Συνεργαζόμαστε με 4 υπέροχες παραθαλάσσιες εκκλησίες: Άγιος Αλέξανδρος Δασκαλείο, Προφήτης Ηλίας Θορικό, Άγιος Παντελεήμων Κερατέα και Παναγία Γκαρικά."
    },
    {
      question: "Τι υπηρεσίες παρέχετε;",
      answer: "Προσφέρουμε ολοκληρωμένες υπηρεσίες: catering, διακόσμηση, φωτισμό, ήχο, επαγγελματία φωτογράφο (Studio Alpha) και πλήρη συντονισμό της εκδήλωσης."
    },
    {
      question: "Πώς μπορώ να κλείσω ραντεβού;",
      answer: "Μπορείτε να επικοινωνήσετε μαζί μας τηλεφωνικά στο 22990 68812, μέσω WhatsApp/Viber ή συμπληρώνοντας τη φόρμα επικοινωνίας."
    },
    {
      question: "Είναι ο χώρος αποκλειστικός για την εκδήλωσή μας;",
      answer: "Ναι, το κτήμα παραχωρείται αποκλειστικά για την εκδήλωσή σας, εξασφαλίζοντας απόλυτη ιδιωτικότητα και προσωποποίηση."
    }
  ];

  return (
    <Layout>
      <SEO
        title="Κτήμα Ωρίων – Κτήμα γάμου & βάπτισης στην Κερατέα Αττικής | Wedding & Event Venue"
        description="Ανακαλύψτε το Κτήμα Ωρίων στην Κερατέα Αττικής – ιδανικός χώρος για γάμους, βαπτίσεις, εταιρικές εκδηλώσεις. Παραθαλάσσια εκκλησάκια, μεγάλη αυλή, άνετος χώρος στάθμευσης. Κλείστε επίσκεψη σήμερα!"
        canonical="/"
        keywords="κτήμα ωρίων, κτήμα κερατέα, κτήμα γάμου κερατέα, κτήματα κερατέα, γάμος κερατέα, βάπτιση κερατέα, εκκλησίες γάμου κερατέα, χώρος δεξιώσεων κερατέα, άγιος αλέξανδρος δασκαλείο, wedding venue keratea"
      />
      <Hero />
      <Description />
      <Features />
      <SocialProof />
      <HomeGallery />
      <Services />
      <About />
      <Churches />
      <FAQ items={homepageFAQs} />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
      <BackToTop />
      <ContactFAB />
    </Layout>
  );
};

export default Index;
