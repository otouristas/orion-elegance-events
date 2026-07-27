import Link from "next/link";
import { Car, Church, CloudRain, MapPin, Phone, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { FAQ } from "@/components/FAQ";
import { PopularSearches } from "@/components/PopularSearches";
import { RelatedServices } from "@/components/RelatedServices";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "Κερατέα, Ανατολική Αττική",
    description: "Ένας προορισμός για γαμήλια δεξίωση στην Αθήνα και την Ανατολική Αττική, με φυσικό τοπίο και θέα θάλασσα.",
  },
  {
    icon: Users,
    title: "50–350 καλεσμένοι",
    description: "Ευέλικτες διατάξεις για μικρό γάμο, καθιστό δείπνο ή μεγαλύτερη δεξίωση.",
  },
  {
    icon: Car,
    title: "Parking 100+ θέσεων",
    description: "Άνετη προσέλευση για τους καλεσμένους σας, χωρίς να προσθέτετε άλλη μετακίνηση στο πρόγραμμα.",
  },
  {
    icon: Church,
    title: "Κοντινά εκκλησάκια",
    description: "Παραθαλάσσιοι ναοί στην περιοχή για να συνδυάσετε μυστήριο και δεξίωση την ίδια ημέρα.",
  },
  {
    icon: CloudRain,
    title: "Εσωτερικός και εξωτερικός χώρος",
    description: "Κλιματιζόμενη αίθουσα και εναλλακτική διάταξη ώστε ο καιρός να μην καθορίζει τη γιορτή σας.",
  },
];

const faqs = [
  {
    question: "Πόσο μακριά είναι το Κτήμα Ωρίων από την Αθήνα;",
    answer:
      "Το κτήμα βρίσκεται στην Κερατέα, στην Ανατολική Αττική, περίπου 45 λεπτά από το κέντρο της Αθήνας. Η ακριβής διαδρομή εξαρτάται από το σημείο εκκίνησης και την κίνηση της ημέρας.",
  },
  {
    question: "Για πόσα άτομα είναι κατάλληλο το κτήμα για γάμο;",
    answer:
      "Ο χώρος μπορεί να φιλοξενήσει περίπου 50 έως 350 καλεσμένους. Στην επίσκεψη συζητάμε τη διάταξη που ταιριάζει στον αριθμό των καλεσμένων και στο ύφος της δεξίωσης.",
  },
  {
    question: "Υπάρχει plan B για βροχή ή ζέστη;",
    answer:
      "Ναι. Υπάρχει κλιματιζόμενη αίθουσα και εναλλακτικές διατάξεις, ώστε να οργανωθεί η δεξίωση με άνεση ανεξάρτητα από τις καιρικές συνθήκες.",
  },
  {
    question: "Υπάρχει parking για τους καλεσμένους;",
    answer:
      "Ναι. Διατίθεται δωρεάν parking με περισσότερες από 100 θέσεις.",
  },
  {
    question: "Υπάρχουν εκκλησίες κοντά στο κτήμα;",
    answer:
      "Στην περιοχή υπάρχουν παραθαλάσσια εκκλησάκια σε μικρή οδηγική απόσταση. Δείτε τον οδηγό μας για τις εκκλησίες της Κερατέας πριν οργανώσετε τη διαδρομή της ημέρας.",
  },
  {
    question: "Μπορούμε να επισκεφθούμε τον χώρο πριν αποφασίσουμε;",
    answer:
      "Ναι. Κλείστε μια δωρεάν επίσκεψη για να δείτε τον χώρο, να συζητήσετε τον αριθμό καλεσμένων και να λάβετε προσωπική προσφορά.",
  },
];

export default function KtimaGamouAthina() {
  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Κτήμα γάμου Αθήνα: Κτήμα Ωρίων στην Κερατέα</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-5">
              Το Κτήμα Ωρίων είναι ένας χώρος γαμήλιας δεξίωσης στην Ανατολική Αττική, με θέα θάλασσα, κήπο και κλιματιζόμενη αίθουσα.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Για 50–350 καλεσμένους • parking 100+ θέσεων • κοντινά παραθαλάσσια εκκλησάκια
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request" className="button button4">Ζητήστε προσφορά</Link>
              <Link href="/epikoinonia" className="button button4">Κλείστε δωρεάν επίσκεψη</Link>
              <a href="tel:+302299068812" className="button button4">
                <Phone className="w-5 h-5 inline mr-2" />22990 68812
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max max-w-4xl prose prose-lg text-muted-foreground">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">Κτήμα γάμου Αθήνα: ένας προορισμός εκτός κέντρου</h2>
            <p>
              Για ζευγάρια που αναζητούν <strong>κτήμα γάμου στην Αθήνα</strong>, η Κερατέα δίνει την αίσθηση ενός προορισμού χωρίς να απαιτεί διανυκτέρευση. Το Κτήμα Ωρίων βρίσκεται περίπου 45 λεπτά από το κέντρο της Αθήνας, σε μια περιοχή που συνδυάζει τη δεξίωση με παραθαλάσσιες εκκλησίες και φωτογράφιση στη φύση.
            </p>
            <p>
              Πριν κλείσετε, αξίζει να επισκεφθείτε τον χώρο την ώρα που σκέφτεστε να γίνει η εκδήλωση, να ελέγξετε τη χωρητικότητα για το δικό σας setup και να συζητήσετε τι περιλαμβάνει η προσφορά. Στον <Link href="/blog/ktima-gia-gamo-odigos-epilogis" className="text-brand-main hover:underline">οδηγό επιλογής κτήματος για γάμο</Link> θα βρείτε τις ερωτήσεις που βοηθούν στην σύγκριση των χώρων.
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/20">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Τι προσφέρει το Κτήμα Ωρίων για τη γαμήλια δεξίωση</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="card-elegant">
                  <CardContent className="p-6">
                    <feature.icon className="w-10 h-10 text-brand-main mb-4" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max max-w-4xl prose prose-lg text-muted-foreground">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">Από το μυστήριο στη δεξίωση</h2>
            <p>
              Αν σχεδιάζετε θρησκευτικό γάμο, μπορείτε να οργανώσετε το μυστήριο σε έναν από τους κοντινούς ναούς και να συνεχίσετε με τη δεξίωση στο κτήμα. Δείτε τις αποστάσεις και τις χρήσιμες πληροφορίες για τον <Link href="/el/ekklisies/agios-alexandros-daskaleio" className="text-brand-main hover:underline">Άγιο Αλέξανδρο στο Δασκαλειό</Link>, την <Link href="/el/ekklisies/panagia-gkarika" className="text-brand-main hover:underline">Παναγία Γκαρικά</Link> και τις υπόλοιπες <Link href="/ekklisies" className="text-brand-main hover:underline">εκκλησίες κοντά στην Κερατέα</Link>.
            </p>
            <p>
              Για εκτίμηση προϋπολογισμού, διαβάστε τον <Link href="/blog/kostos-gamou-ktima-2026" className="text-brand-main hover:underline">αναλυτικό οδηγό κόστους γάμου σε κτήμα</Link>. Για μια πλήρη εικόνα του χώρου, επισκεφθείτε και την κύρια σελίδα για το <Link href="/ktima-gamou" className="text-brand-main hover:underline">κτήμα γάμου στην Αττική</Link>.
            </p>
          </div>
        </section>

        <FAQ items={faqs} title="Συχνές ερωτήσεις για κτήμα γάμου Αθήνα" />

        <section className="section-padding bg-gradient-to-r from-brand-main/10 to-brand-main/5">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Δείτε το κτήμα από κοντά</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Κλείστε μια επίσκεψη στην Κερατέα για να δείτε τον χώρο και να συζητήσουμε τη γαμήλια δεξίωσή σας.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request" className="button button4">Ζητήστε προσφορά</Link>
              <a href="tel:+302299068812" className="button button4"><Phone className="w-5 h-5 inline mr-2" />22990 68812</a>
            </div>
          </div>
        </section>
      </div>

      <RelatedServices currentPage="/el/ktima-gamou-athina" />
      <PopularSearches
        links={[
          { label: "Κτήμα γάμου στην Αττική", href: "/ktima-gamou" },
          { label: "Δεξίωση γάμου στην Κερατέα", href: "/gamos" },
          { label: "Κόστος γάμου σε κτήμα", href: "/blog/kostos-gamou-ktima-2026" },
          { label: "Κτήματα γάμου Αθήνα: οδηγός", href: "/blog/ktimata-gia-gamo-athina-odigos" },
          { label: "Εκκλησίες Κερατέας", href: "/ekklisies" },
          { label: "Δείτε τον χώρο", href: "/o-horos" },
        ]}
      />
    </Layout>
  );
}
