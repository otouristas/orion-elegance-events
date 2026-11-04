import { PageIntro } from '@/components/PageIntro';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Baby, Users, MapPin, Car, Home, Church, Camera, Star, CheckCircle2, Phone, Heart, Sparkles } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';
import { NearbyChurches } from '@/components/NearbyChurches';
import { RelatedServices } from '@/components/RelatedServices';
import { PopularSearches } from '@/components/PopularSearches';
import { BaptismPackagesBanner } from '@/components/BaptismPackagesBanner';
import { promoHref } from '@/lib/promo';

export default function KtimaVaptisis() {
    const features = [
        { icon: Baby, title: "Παιδικό Μενού", description: "Ειδικές επιλογές φαγητού για τα παιδιά - νόστιμα και υγιεινά" },
        { icon: Home, title: "Εξωτερικός Χώρος", description: "Κήπος για την οικογενειακή δεξίωση. Τα παιδιά χρειάζονται επίβλεψη από ενήλικα." },
        { icon: Users, title: "50–350 Άτομα", description: "Ευέλικτες διαρρυθμίσεις για μικρές και μεγάλες βαπτίσεις" },
        { icon: Car, title: "Δωρεάν Parking 100+ Θέσεις", description: "Άνετη στάθμευση για όλη την οικογένεια" },
        { icon: Church, title: "Κοντινές Εκκλησίες", description: "5 εκκλησάκια σε απόσταση 6–13 λεπτά για την τελετή" },
        { icon: Camera, title: "Οικογενειακές Φωτογραφίες", description: "Υπέροχα σκηνικά για αναμνηστικές φωτογραφίες" }
    ];

    const faqs = [
        { question: "Ισχύουν τα πακέτα από 33€ για κάθε βάπτιση;", answer: "Τα δημοσιευμένα πακέτα L. Varsos Catering αφορούν εκδηλώσεις από 100 καλεσμένους: Classic Finger Food 33€ και Premium Finger Food 38€ ανά άτομο. Δείτε το αναλυτικό περιεχόμενο των πακέτων και ζητήστε γραπτή προσφορά για τη δική σας ημερομηνία και τον αριθμό των καλεσμένων σας." },
        { question: "Πόσα άτομα μπορεί να φιλοξενήσει το Κτήμα Ωρίων σε βάπτιση;", answer: "Οργανώνουμε βαπτίσεις από μικρές οικογενειακές δεξιώσεις έως μεγαλύτερες συγκεντρώσεις (ενδεικτικά περίπου 50–350 άτομα), με διατάξεις που προσαρμόζονται στο πλήθος και στο στυλ της εκδήλωσης." },
        { question: "Υπάρχουν ειδικά μενού για παιδιά;", answer: "Ναι. Προσφέρουμε παιδικό μενού και επιλογές για ειδικές διατροφές· μπορούμε να συνδυάσουμε buffet και σερβιριστό ανάλογα με την ηλικία των καλεσμένων." },
        { question: "Μπορούμε να φέρουμε δικό μας ζαχαροπλαστείο ή διακοσμητή;", answer: "Συνήθως ναι· οι λεπτομέρειες καθορίζονται στο πακέτο σας. Μπορούμε επίσης να προτείνουμε αξιόπιστους συνεργάτες για τούρτα και στολισμό." },
        { question: "Υπάρχει χώρος για αλλαγή ρούχων του μωρού;", answer: "Ναι, υπάρχει άνετος χώρος για αλλαγή και τις ανάγκες του μωρού, με πρόσβαση σε καθαρούς χώρους υγιεινής κοντά στη δεξίωση." },
        { question: "Πόσο κοστίζει η βάπτιση σε κτήμα;", answer: "Το κόστος εξαρτάται από αριθμό ατόμων, μενού και ημέρα. Ζητήστε εξατομικευμένη προσφορά μέσω της φόρμας αιτήματος ή τηλεφωνικά." },
        { question: "Είναι ασφαλής ο εξωτερικός χώρος για παιδιά;", answer: "Υπάρχει κήπος και χώρος παιχνιδιού. Τα παιδιά πρέπει να βρίσκονται υπό την επίβλεψη ενηλίκων, ιδιαίτερα κοντά στην πισίνα. Συζητήστε μαζί μας τη διαμόρφωση και τυχόν ψυχαγωγία πριν από την εκδήλωση." },
        { question: "Πόσο κοντά είναι η εκκλησία από το κτήμα βάπτισης;", answer: "Πολλοί ναοί της περιοχής απέχουν περίπου 6–13 λεπτά με αυτοκίνητο. Λίστα και χάρτης στη σελίδα εκκλησιών." },
        { question: "Μπορώ να επισκεφθώ το κτήμα;", answer: "Κλείστε δωρεάν ξενάγηση στο 22990 68812 ή μέσω της φόρμας επικοινωνίας." }
    ];

    return (
        <Layout>
            <div className="pt-20">
                {/* Hero Section */}
                <PageIntro eyebrow="Κτήμα βάπτισης στην Κερατέα Αττικής" title="Μια γιορτή για όλη την οικογένεια." description="Κήπος, παιδικό μενού και πέντε κοντινές εκκλησίες. Δείτε τα πακέτα βάπτισης και ζητήστε προσφορά για την ημερομηνία σας." image="/images/baptism-card.webp" imageAlt="Κτήμα Ωρίων στην Κερατέα" secondaryHref="/gallery" secondaryLabel="Δείτε φωτογραφίες" event="christening" />

                {/* Why Choose Us */}
                <section className="section-padding">
                    <div className="container-max">
                        <h2 className="font-heading text-center mb-4">
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
                                        <h3 className="font-heading mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>


                <section className="section-padding bg-muted/20">
                    <div className="container-max max-w-4xl space-y-12">
                        <div>
                            <h2 className="font-heading mb-4 text-center">
                                <span className="text-gradient-brand">Γιατί να κάνετε τη βάπτιση σε κτήμα</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Ένα <strong>κτήμα για βάπτιση</strong> δίνει φυσικό περιβάλλον, χώρο για παιχνίδι και πιο «οικογενειακή» ροή από μια κλειστή αίθουσα. Στην <strong>Ανατολική Αττική</strong> συνδυάζετε εύκολη πρόσβαση από την Αθήνα με ήρεμη ατμόσφαιρα και <strong>δωρεάν parking</strong> για συγγενείς και φίλους.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-heading mb-4 text-center">
                                <span className="text-gradient-brand">Ο χώρος του Κτήματος Ωρίων για βάπτιση</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Ο <strong>κήπος</strong> και οι εξωτερικοί χώροι είναι ιδανικοί για παιδιά, καροτσάκια και οικογενειακές φωτογραφίες· παράλληλα η κλειστή αίθουσα εξασφαλίζει plan B σε ζέστη ή βροχή. Δείτε φωτογραφίες στο <Link href="/o-horos" className="text-brand-main hover:underline">Ο χώρος</Link>.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-heading mb-4 text-center">
                                <span className="text-gradient-brand">Μενού βάπτισης και παιδικές επιλογές</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Το <strong>μενού βάπτισης</strong> μπορεί να περιλαμβάνει παιδικά πιάτα, finger food, γλυκά και ice cream station. Συζητάμε μαζί σας για αλλεργίες και ειδικές διατροφές ώστε όλοι να απολαύσουν τη <strong>δεξίωση βάπτισης σε κτήμα</strong>.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-heading mb-4 text-center">
                                <span className="text-gradient-brand">Κοντινές εκκλησίες για το μυστήριο</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Μετά το μυστήριο, η μετάβαση στο κτήμα είναι σύντομη. Αναλυτικά για <Link href="/ekklisies" className="text-brand-main hover:underline">εκκλησίες κοντά στο κτήμα</Link> (π.χ. <Link href="/el/ekklisies/agios-alexandros-daskaleio" className="text-brand-main hover:underline">Άγιος Αλέξανδρος</Link>, <Link href="/el/ekklisies/panagia-gkarika" className="text-brand-main hover:underline">Παναγία Γκαρικά</Link>).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container-max max-w-4xl">
                        <h2 className="font-heading text-center mb-8">
                            <span className="text-gradient-brand">Κτήμα για βάπτιση στην Αττική – Κτήμα Ωρίων</span>
                        </h2>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p>
                                Αν ψάχνετε <strong>κτηματα για βαπτιση αθηνα</strong> ή <strong>κτημα βαπτισης αττικη</strong>, το <Link href="/" className="text-brand-main hover:underline">Κτήμα Ωρίων</Link> στην Κερατέα συνδυάζει πράσινο, ασφάλεια για παιδιά και εμπειρία σε οικογενειακές δεξιώσεις. Ιδανικό για όσους θέλουν <strong>βάπτιση σε κτήμα με κήπο</strong> κοντά στην πόλη.
                            </p>

                            <p>
                                Για πρακτικές συμβουλές πριν την οργάνωση, διαβάστε το <Link href="/blog/ti-na-proseksete-sti-vaptisi" className="text-brand-main hover:underline">άρθρο «Τι να προσέξετε στη βάπτιση»</Link> και τις <Link href="/blog/syxnes-erotiseis-ktima-vaptisis" className="text-brand-main hover:underline">συχνές ερωτήσεις για κτήματα βάπτισης</Link>. Για προσφορά <Link href="/request" className="text-brand-main hover:underline">συμπληρώστε τη φόρμα αιτήματος</Link>.
                            </p>
                        </div>
                    </div>
                </section>

                <BaptismPackagesBanner lang="el" />

                {/* Trust Signals */}
                <TrustSignals />

                {/* Nearby Churches */}
                <NearbyChurches />

                {/* FAQs */}
                <FAQ items={faqs} title="Συχνές ερωτήσεις για βάπτιση σε κτήμα" />

                {/* Related Services */}
                <RelatedServices currentPage="/ktima-vaptisis" />

                {/* Popular Searches */}
                <PopularSearches
                    links={[
                        { label: "κτηματα βαπτισης αθηνα", href: "/ktima-vaptisis" },
                        { label: "κτημα για βαπτιση με κηπο", href: "/ktima-vaptisis" },
                        { label: "κτημα βαπτισης στην ανατολικη αττικη", href: "/ktima-vaptisis" },
                        { label: "εκκλησιες κοντα στο κτημα", href: "/ekklisies" },
                        { label: "Κτήμα γάμου", href: "/ktima-gamou" },
                        { label: "Επικοινωνία", href: "/epikoinonia" }
                    ]}
                />

                {/* CTA */}
                <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
                    <div className="container-max text-center">
                        <h2 className="font-heading mb-6">
                            Κλείστε Δωρεάν Επίσκεψη για τη Βάπτιση
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Επικοινωνήστε μαζί μας σήμερα για να δείτε τον χώρο και να οργανώσουμε την τέλεια βαπτιστική δεξίωση
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={promoHref(false)} className="button button4">Δείτε τα πακέτα από 33€</Link>
                            <Link href="/request" className="button button4">Ζητήστε προσφορά</Link>
                            <a href="tel:+302299068812" className="button button4">
                                    <Phone className="w-5 h-5 inline mr-2" />
                                    22990 68812
                                </a>
                            <Link href="/request" className="button button4">
                                    Επικοινωνία
                                </Link>
                        </div>
                    </div>
                </section>
            </div>

            {/* No FAQPage script here: the <FAQ> block above already emits one
                from the same `faqs` array, and this page was shipping two
                identical FAQPage nodes on a single URL. */}
        </Layout>
    );
}
