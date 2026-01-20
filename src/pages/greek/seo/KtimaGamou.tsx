import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users, MapPin, Car, Home, Church, Camera, Star, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';
import { NearbyChurches } from '@/components/NearbyChurches';
import { RelatedServices } from '@/components/RelatedServices';
import { PopularSearches } from '@/components/PopularSearches';

export default function KtimaGamou() {
    const features = [
        { icon: MapPin, title: "Θέα Θάλασσα", description: "Μοναδική θαλασσινή ατμόσφαιρα με πανοραμική θέα στο Αιγαίο" },
        { icon: Home, title: "Αποκλειστική Χρήση", description: "Ολόκληρο το κτήμα μόνο για εσάς - μία εκδήλωση την ημέρα" },
        { icon: Users, title: "50-350 Άτομα", description: "Ευέλικτες διαρρυθμίσεις για μικρούς και μεγάλους γάμους" },
        { icon: Car, title: "Δωρεάν Parking 100+ Θέσεις", description: "Τεράστιος χώρος στάθμευσης για όλους τους καλεσμένους" },
        { icon: Church, title: "Κοντινά Εκκλησάκια", description: "Παραθαλάσσιοι ναοί σε απόσταση 5-15 λεπτά" },
        { icon: Camera, title: "Φωτογενικό Περιβάλλον", description: "Υπέροχα σκηνικά για αξέχαστες φωτογραφίες γάμου" }
    ];

    const faqs = [
        { question: "Πόσο κοστίζει ένας γάμος σε κτήμα;", answer: "Η τιμή για μια γαμήλια δεξίωση εξαρτάται από τον αριθμό των καλεσμένων, την ημερομηνία και τις υπηρεσίες που θα επιλέξετε. Επικοινωνήστε μαζί μας για μια προσωποποιημένη προσφορά." },
        { question: "Πόσα άτομα χωράει το κτήμα για γάμο;", answer: "Το Κτήμα Ωρίων φιλοξενεί γάμους από 50 έως 350 άτομα. Διαθέτουμε κλιματιζόμενη εσωτερική αίθουσα και καταπράσινο εξωτερικό χώρο." },
        { question: "Υπάρχουν εκκλησίες κοντά στο κτήμα;", answer: "Ναι! Υπάρχουν 8 γραφικά εκκλησάκια σε απόσταση 5-15 λεπτά: Άγιος Αλέξανδρος Δασκαλειό, Προφήτης Ηλίας Θορικό, Άγιος Παντελεήμονας, Παναγία Γκαρικά και άλλα." },
        { question: "Υπάρχει χώρος στάθμευσης;", answer: "Διαθέτουμε τεράστιο δωρεάν parking με πάνω από 100 θέσεις για όλους τους καλεσμένους του γάμου σας." },
        { question: "Τι γίνεται αν βρέχει;", answer: "Διαθέτουμε πλήρως κλιματιζόμενη εσωτερική αίθουσα. Ο γάμος σας θα είναι τέλειος ανεξάρτητα από τις καιρικές συνθήκες." },
        { question: "Πόσο νωρίς πρέπει να κλείσω;", answer: "Συνιστούμε κράτηση 8-12 μήνες πριν τον γάμο, ειδικά για Σαββατοκύριακα Μαΐου-Οκτωβρίου που εξαντλούνται γρήγορα." },
        { question: "Παρέχετε catering;", answer: "Ναι, προσφέρουμε πλήρεις υπηρεσίες catering με ποικιλία μενού - από παραδοσιακή ελληνική κουζίνα έως gourmet επιλογές." },
        { question: "Μπορώ να επισκεφθώ το κτήμα;", answer: "Απολύτως! Κλείστε δωρεάν ξενάγηση στο 22990 68812 για να δείτε τον χώρο και να συζητήσουμε τις επιθυμίες σας." }
    ];

    return (
        <Layout>
            <SEO
                title="Κτήμα Γάμου | Κτήμα για Γάμο στην Αθήνα - Θέα Θάλασσα | Κτήμα Ωρίων"
                description="Ψάχνετε κτήμα για γάμο; Κτήμα Ωρίων Κερατέα: 50-350 άτομα, θέα θάλασσα, 8 κοντινά εκκλησάκια, δωρεάν parking 100+ θέσεις. Κλείστε δωρεάν επίσκεψη! ☎️ 22990 68812"
                canonical="/ktima-gamou"
                keywords="κτήμα γάμου, κτημα γαμου, κτήμα για γάμο, κτηματα γαμου, κτήματα γάμου αθήνα, κτημα γαμου αθηνα, κτημα γαμου αττικη, γαμος σε κτημα, χωρος δεξιωσης γαμου"
                breadcrumbs={[
                    { name: 'Αρχική', url: '/' },
                    { name: 'Κτήμα Γάμου', url: '/ktima-gamou' }
                ]}
                schemaType="EventVenue"
            />

            <div className="pt-20">
                {/* Hero Section */}
                <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
                    <div className="container-max text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-gradient-brand">Κτήμα για Γάμο στην Αθήνα</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                            Δημιουργήστε τον ονειρεμένο γάμο σας στο Κτήμα Ωρίων Κερατέα με θέα θάλασσα
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Ιδανικό για 50-350 άτομα • Δωρεάν parking 100+ θέσεις • 8 κοντινά εκκλησάκια
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/epikoinonia">
                                <button className="button button4">
                                    Κλείστε Δωρεάν Επίσκεψη
                                </button>
                            </Link>
                            <a href="tel:+302299068812">
                                <button className="button button4">
                                    <Phone className="w-5 h-5 inline mr-2" />
                                    22990 68812
                                </button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="section-padding">
                    <div className="container-max">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                            <span className="text-gradient-brand">Γιατί να Επιλέξετε το Κτήμα Ωρίων για τον Γάμο σας</span>
                        </h2>
                        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                            15+ χρόνια εμπειρίας σε γαμήλιες δεξιώσεις. Αποκλειστική χρήση χώρου.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <Card key={index} className="card-elegant hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <feature.icon className="w-10 h-10 text-brand-main mb-4" />
                                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>


                {/* SEO Content Section */}
                <section className="section-padding">
                    <div className="container-max max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                            <span className="text-gradient-brand">Κτήμα Γάμου στην Αττική – Κτήμα Ωρίων Κερατέα</span>
                        </h2>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p>
                                Αν αναζητάτε <strong>κτήμα για γάμο</strong> κοντά στην Αθήνα, το <Link to="/" className="text-brand-main hover:underline">Κτήμα Ωρίων</Link> στην Κερατέα Αττικής είναι η ιδανική επιλογή. Ως ένα από τα πιο όμορφα <strong>κτήματα γάμου Αθήνα</strong>, προσφέρουμε μοναδική θέα στη θάλασσα, αποκλειστική χρήση χώρου και πάνω από 15 χρόνια εμπειρίας σε γαμήλιες δεξιώσεις.
                            </p>

                            <p>
                                Το <strong>κτήμα μας</strong> βρίσκεται σε απόσταση 45 λεπτών από το κέντρο της Αθήνας, με εύκολη πρόσβαση από την Αττική Οδό. Διαθέτουμε καταπράσινο εξωτερικό χώρο με πισίνα, κλιματιζόμενη αίθουσα για χειμωνιάτικους γάμους και τεράστιο χώρο στάθμευσης για 100+ αυτοκίνητα.
                            </p>

                            <p>
                                Κοντά στο <strong>κτήμα γάμου</strong> μας υπάρχουν 8 γραφικά <Link to="/ekklisies" className="text-brand-main hover:underline">παραθαλάσσια εκκλησάκια</Link> για την τελετή του γάμου σας, όπως ο <Link to="/el/ekklisies/agios-alexandros-daskaleio" className="text-brand-main hover:underline">Άγιος Αλέξανδρος Δασκαλειό</Link> και ο <Link to="/el/ekklisies/profitis-ilias-thoriko" className="text-brand-main hover:underline">Προφήτης Ηλίας Θορικό</Link>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Trust Signals */}
                <TrustSignals />

                {/* Nearby Churches */}
                <NearbyChurches />

                {/* FAQs */}
                <FAQ items={faqs} title="Συχνές Ερωτήσεις για Κτήματα Γάμου" />

                {/* Related Services */}
                <RelatedServices currentPage="/ktima-gamou" />

                {/* Popular Searches */}
                <PopularSearches
                    links={[
                        { label: "Κτήμα Γάμου Αθήνα", href: "/el/ktima-gamou-athina" },
                        { label: "Athens Riviera", href: "/el/ktima-gamou-athens-riviera" },
                        { label: "Κτήμα Βάπτισης", href: "/ktima-vaptisis" },
                        { label: "Εκκλησίες Κερατέα", href: "/ekklisies" },
                        { label: "Δείτε τον Χώρο", href: "/o-horos" },
                        { label: "Φωτογράφος Γάμου", href: "/fotografos" }
                    ]}
                />

                {/* CTA */}
                <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
                    <div className="container-max text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Κλείστε Δωρεάν Επίσκεψη στο Κτήμα
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Επικοινωνήστε μαζί μας σήμερα για να δείτε τον χώρο και να λάβετε προσωποποιημένη προσφορά για τον γάμο σας
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+302299068812">
                                <button className="button button4">
                                    <Phone className="w-5 h-5 inline mr-2" />
                                    22990 68812
                                </button>
                            </a>
                            <Link to="/epikoinonia">
                                <button className="button button4">
                                    Στείλτε Αίτημα Online
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            {/* FAQ Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })}
            </script>

            {/* Product Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Κτήμα Γάμου - Κτήμα Ωρίων",
                    "description": "Κτήμα για γάμο στην Αθήνα με θέα θάλασσα, 50-350 άτομα, κοντινά εκκλησάκια",
                    "brand": { "@type": "Brand", "name": "Κτήμα Ωρίων" }
                })}
            </script>
        </Layout>
    );
}
