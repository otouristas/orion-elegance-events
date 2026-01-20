import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Baby, Users, MapPin, Car, Home, Church, Camera, Star, CheckCircle2, Phone, Heart, Sparkles } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';
import { NearbyChurches } from '@/components/NearbyChurches';
import { RelatedServices } from '@/components/RelatedServices';
import { PopularSearches } from '@/components/PopularSearches';

export default function KtimaVaptisis() {
    const features = [
        { icon: Baby, title: "Παιδικό Μενού", description: "Ειδικές επιλογές φαγητού για τα παιδιά - νόστιμα και υγιεινά" },
        { icon: Home, title: "Ασφαλής Εξωτερικός Χώρος", description: "Καταπράσινος κήπος όπου τα παιδιά μπορούν να παίξουν με ασφάλεια" },
        { icon: Users, title: "30-250 Άτομα", description: "Ευέλικτες διαρρυθμίσεις για μικρές και μεγάλες βαπτίσεις" },
        { icon: Car, title: "Δωρεάν Parking 100+ Θέσεις", description: "Άνετη στάθμευση για όλη την οικογένεια" },
        { icon: Church, title: "Κοντινές Εκκλησίες", description: "8 εκκλησάκια σε απόσταση 5-15 λεπτά για την τελετή" },
        { icon: Camera, title: "Οικογενειακές Φωτογραφίες", description: "Υπέροχα σκηνικά για αναμνηστικές φωτογραφίες" }
    ];

    const packages = [
        {
            title: "Βασικό Πακέτο Βάπτισης",
            price: "Από 35€/άτομο",
            features: ["Χώρος δεξίωσης", "Catering", "Παιδικό μενού", "Βασική διακόσμηση", "Parking"]
        },
        {
            title: "Premium Πακέτο",
            price: "Από 50€/άτομο",
            features: ["Πλήρες catering", "Θεματική διακόσμηση", "Παιδικό μπάρ", "Ηχητικά", "Φωτογράφος"]
        },
        {
            title: "VIP Πακέτο",
            price: "Από 70€/άτομο",
            features: ["Gourmet catering", "Premium διακόσμηση", "Animator για παιδιά", "Φωτο & video", "Event coordinator"]
        }
    ];

    const faqs = [
        { question: "Πόσο κοστίζει μια δεξίωση βάπτισης σε κτήμα;", answer: "Στο Κτήμα Ωρίων τα πακέτα δεξίωσης βάπτισης ξεκινούν από 35€/άτομο. Η τελική τιμή εξαρτάται από τον αριθμό καλεσμένων και τις υπηρεσίες που θα επιλέξετε." },
        { question: "Υπάρχει παιδικό μενού;", answer: "Φυσικά! Προσφέρουμε ειδικό παιδικό μενού με αγαπημένα φαγητά για τα παιδιά, καθώς και επιλογές για ειδικές διατροφικές ανάγκες." },
        { question: "Είναι ασφαλής ο εξωτερικός χώρος για παιδιά;", answer: "Ο κήπος μας είναι πλήρως περιφραγμένος και ασφαλής για τα παιδιά. Διαθέτουμε χώρο παιχνιδιού και μπορούμε να οργανώσουμε δραστηριότητες με animator." },
        { question: "Ποιες εκκλησίες είναι κοντά για τη βάπτιση;", answer: "Υπάρχουν 8 γραφικά εκκλησάκια σε απόσταση 5-15 λεπτά: Άγιος Αλέξανδρος Δασκαλειό, Παναγία Γκαρικά, Άγιος Παντελεήμονας και άλλα." },
        { question: "Πόσο νωρίς πρέπει να κλείσω;", answer: "Συνιστούμε κράτηση 3-4 μήνες πριν τη βάπτιση, ειδικά για Σαββατοκύριακα της άνοιξης και του καλοκαιριού." },
        { question: "Μπορώ να φέρω τη δική μου τούρτα;", answer: "Ναι, μπορείτε να φέρετε τη δική σας τούρτα βάπτισης. Εναλλακτικά, μπορούμε να αναλάβουμε εμείς την παραγγελία." },
        { question: "Υπάρχει χώρος για αλλαγή του μωρού;", answer: "Διαθέτουμε ειδικό χώρο για τις ανάγκες του μωρού με αλλαξιέρα και όλες τις βασικές ανέσεις." },
        { question: "Μπορώ να επισκεφθώ το κτήμα;", answer: "Απολύτως! Κλείστε δωρεάν ξενάγηση στο 22990 68812 για να δείτε τον χώρο και να συζητήσουμε τις επιθυμίες σας." }
    ];

    return (
        <Layout>
            <SEO
                title="Κτήμα Βάπτισης | Κτήμα για Δεξίωση Βάπτισης Αθήνα | Κτήμα Ωρίων"
                description="Ψάχνετε κτήμα για βάπτιση; Κτήμα Ωρίων Κερατέα: Παιδικό μενού, ασφαλής κήπος, 8 κοντινές εκκλησίες. Πακέτα δεξίωσης από 35€/άτομο. ☎️ 22990 68812"
                canonical="/ktima-vaptisis"
                keywords="κτήμα βάπτισης, κτημα βαπτισης, κτήμα για βάπτιση, κτηματα για βαπτιση, δεξίωση βάπτισης, χώρος για βάπτιση αθήνα, κτήματα βαπτισης αθηνα, κτημα για βαπτιση αθηνα"
                breadcrumbs={[
                    { name: 'Αρχική', url: '/' },
                    { name: 'Κτήμα Βάπτισης', url: '/ktima-vaptisis' }
                ]}
                schemaType="EventVenue"
            />

            <div className="pt-20">
                {/* Hero Section */}
                <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
                    <div className="container-max text-center">
                        <Baby className="w-16 h-16 text-brand-main mx-auto mb-6" />
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-gradient-brand">Κτήμα για Βάπτιση & Δεξίωση</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                            Γιορτάστε τη βάπτιση του παιδιού σας στο Κτήμα Ωρίων Κερατέα
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Πακέτα από <strong className="text-brand-main">35€/άτομο</strong> • Παιδικό μενού • Ασφαλής κήπος
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
                            <span className="text-gradient-brand">Γιατί το Κτήμα Ωρίων για τη Βάπτιση σας</span>
                        </h2>
                        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                            15+ χρόνια εμπειρίας σε βαπτιστικές δεξιώσεις. Οικογενειακό περιβάλλον.
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

                {/* Pricing Packages */}
                <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
                    <div className="container-max">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                            <span className="text-gradient-brand">Πακέτα Δεξίωσης Βάπτισης & Τιμές</span>
                        </h2>
                        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Ολοκληρωμένα πακέτα για αξέχαστες βαπτιστικές δεξιώσεις
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {packages.map((pkg, index) => (
                                <Card key={index} className={`card-elegant hover:shadow-xl transition-all ${index === 1 ? 'ring-2 ring-brand-main' : ''}`}>
                                    <CardContent className="p-8">
                                        {index === 1 && <span className="bg-brand-main text-white text-xs px-3 py-1 rounded-full mb-4 inline-block">Δημοφιλές</span>}
                                        <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                                        <p className="text-3xl font-bold text-brand-main mb-6">{pkg.price}</p>
                                        <ul className="space-y-3 mb-6">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <CheckCircle2 className="w-5 h-5 text-brand-main mr-2 flex-shrink-0 mt-0.5" />
                                                    <span className="text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/epikoinonia">
                                            <button className="button button4 w-full">Ζητήστε Προσφορά</button>
                                        </Link>
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
                            <span className="text-gradient-brand">Κτήμα Βάπτισης στην Αττική – Κτήμα Ωρίων</span>
                        </h2>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p>
                                Αν αναζητάτε <strong>κτήμα για βάπτιση</strong> κοντά στην Αθήνα, το <Link to="/" className="text-brand-main hover:underline">Κτήμα Ωρίων</Link> στην Κερατέα είναι η ιδανική επιλογή για την οικογένειά σας. Ως ένα από τα καλύτερα <strong>κτήματα βαπτισης Αθήνα</strong>, προσφέρουμε ασφαλή εξωτερικό χώρο, παιδικό μενού και πάνω από 15 χρόνια εμπειρίας σε βαπτιστικές δεξιώσεις.
                            </p>

                            <p>
                                Το <strong>κτήμα μας</strong> διαθέτει καταπράσινο κήπο όπου τα παιδιά μπορούν να παίξουν με ασφάλεια. Κοντά βρίσκονται 8 γραφικά <Link to="/ekklisies" className="text-brand-main hover:underline">εκκλησάκια</Link> για την τελετή της βάπτισης, συμπεριλαμβανομένων του <Link to="/el/ekklisies/agios-alexandros-daskaleio" className="text-brand-main hover:underline">Αγίου Αλεξάνδρου Δασκαλειό</Link> και της <Link to="/el/ekklisies/panagia-gkarika" className="text-brand-main hover:underline">Παναγίας Γκαρικά</Link>.
                            </p>

                            <p>
                                Προσφέρουμε ολοκληρωμένες υπηρεσίες για τη <strong>δεξίωση βάπτισης</strong>: catering με παιδικό μενού, θεματική διακόσμηση, και προαιρετικά animator για τα παιδιά. Επικοινωνήστε μαζί μας για προσωποποιημένη προσφορά.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Trust Signals */}
                <TrustSignals />

                {/* Nearby Churches */}
                <NearbyChurches />

                {/* FAQs */}
                <FAQ items={faqs} title="Συχνές Ερωτήσεις για Δεξίωση Βάπτισης" />

                {/* Related Services */}
                <RelatedServices currentPage="/ktima-vaptisis" />

                {/* Popular Searches */}
                <PopularSearches
                    links={[
                        { label: "Κτήματα Βαπτίσεων Αθήνα", href: "/el/ktimata-vaptisis-athina" },
                        { label: "Κτήμα Γάμου", href: "/ktima-gamou" },
                        { label: "Εκκλησίες Κερατέα", href: "/ekklisies" },
                        { label: "Δείτε τον Χώρο", href: "/o-horos" },
                        { label: "Φωτογράφος", href: "/fotografos" },
                        { label: "Επικοινωνία", href: "/epikoinonia" }
                    ]}
                />

                {/* CTA */}
                <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
                    <div className="container-max text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Κλείστε Δωρεάν Επίσκεψη για τη Βάπτιση
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Επικοινωνήστε μαζί μας σήμερα για να δείτε τον χώρο και να οργανώσουμε την τέλεια βαπτιστική δεξίωση
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
                    "name": "Κτήμα Βάπτισης - Κτήμα Ωρίων",
                    "description": "Κτήμα για δεξίωση βάπτισης στην Αθήνα με παιδικό μενού, ασφαλή κήπο, κοντινές εκκλησίες",
                    "brand": { "@type": "Brand", "name": "Κτήμα Ωρίων" },
                    "offers": {
                        "@type": "AggregateOffer",
                        "priceCurrency": "EUR",
                        "lowPrice": "35",
                        "highPrice": "70",
                        "offerCount": "3"
                    }
                })}
            </script>
        </Layout>
    );
}
