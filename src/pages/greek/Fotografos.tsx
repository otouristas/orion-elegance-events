import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Video, Heart, Sparkles, Users, Award } from 'lucide-react';

export default function Fotografos() {
  const photographyServices = [
    {
      icon: Camera,
      title: "Γαμήλια Φωτογραφία",
      description: "Επαγγελματική φωτογραφία γάμου που θα καταγράψει όλες τις μαγικές στιγμές της ημέρας σας."
    },
    {
      icon: Heart,
      title: "Βαπτιστικά",
      description: "Φωτογραφία βάπτισης που θα διατηρήσει για πάντα τις αξέχαστες αναμνήσεις του μικρού αγγέλου σας."
    },
    {
      icon: Users,
      title: "Εταιρικές Εκδηλώσεις",
      description: "Φωτογραφία εταιρικών εκδηλώσεων και events με επαγγελματικό τρόπο."
    },
    {
      icon: Video,
      title: "Βιντεοσκόπηση",
      description: "Επαγγελματική βιντεοσκόπηση για να έχετε δυναμικές αναμνήσεις από την εκδήλωσή σας."
    }
  ];

  const packages = [
    {
      name: "Βασικό Πακέτο",
      price: "€800",
      duration: "6 ώρες",
      features: [
        "Φωτογραφία (6 ώρες)",
        "Έως 500 φωτογραφίες",
        "Βασική επεξεργασία",
        "Online gallery",
        "USB με φωτογραφίες"
      ]
    },
    {
      name: "Premium Πακέτο",
      price: "€1,200",
      duration: "10 ώρες",
      features: [
        "Φωτογραφία & Video (10 ώρες)",
        "Έως 800 φωτογραφίες",
        "Premium επεξεργασία",
        "Online gallery",
        "USB με φωτογραφίες",
        "Σύντομο βίντεο (3-5 λεπτά)"
      ]
    },
    {
      name: "Luxury Πακέτο",
      price: "€1,800",
      duration: "12 ώρες",
      features: [
        "Φωτογραφία & Video (12 ώρες)",
        "Έως 1000+ φωτογραφίες",
        "Λουξ επεξεργασία",
        "Online gallery",
        "USB με φωτογραφίες",
        "Εκτενές βίντεο (10-15 λεπτά)",
        "Προσωποποιημένο άλμπουμ",
        "Backup φωτογράφος"
      ]
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Φωτογραφία & Video</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Επαγγελματική φωτογραφία και βιντεοσκόπηση για τις πιο σημαντικές στιγμές της ζωής σας. 
              Καταγράφουμε με αγάπη και τέχνη κάθε λεπτομέρεια της εκδήλωσής σας.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Υπηρεσίες Φωτογραφίας</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {photographyServices.map((service, index) => (
                <Card key={index} className="card-elegant text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <service.icon className="w-12 h-12 text-brand-main mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Πακέτα Φωτογραφίας</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gradient-brand mb-4">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-brand-main mb-2">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground mb-6">{pkg.duration}</div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Sparkles className="w-5 h-5 text-brand-main mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="button button4 w-full text-center">
                      Επικοινωνία
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Γιατί να μας εμπιστευτείτε;</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Εμπειρία & Τέχνη</h3>
                    <p className="text-muted-foreground">
                      Έχουμε καταγράψει εκατοντάδες εκδηλώσεις με αγάπη και τέχνη, 
                      δημιουργώντας αξέχαστες αναμνήσεις για κάθε οικογένεια.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Σύγχρονος Εξοπλισμός</h3>
                    <p className="text-muted-foreground">
                      Χρησιμοποιούμε τον καλύτερο εξοπλισμό της αγοράς για να εξασφαλίσουμε 
                      την υψηλότερη ποιότητα φωτογραφιών και βίντεο.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Προσωποποιημένη Προσέγγιση</h3>
                    <p className="text-muted-foreground">
                      Κάθε εκδήλωση είναι μοναδική και προσαρμόζουμε το στυλ μας 
                      στις ανάγκες και το γούστο σας.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Αριθμοί που Μιλούν</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-main rounded-lg flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-main">500+</div>
                      <div className="text-sm text-muted-foreground">Εκδηλώσεις καταγράφηκαν</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-main rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-main">100%</div>
                      <div className="text-sm text-muted-foreground">Ευχαριστημένοι πελάτες</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-main rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-main">8+</div>
                      <div className="text-sm text-muted-foreground">Χρόνια εμπειρίας</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Έτοιμοι να καταγράψουμε τις στιγμές σας;
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες φωτογραφίας 
              της εκδήλωσής σας και να δημιουργήσουμε μαζί αξέχαστες αναμνήσεις.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                Επικοινωνία
              </button>
              <button className="button button4">
                Αίτημα Πληροφοριών
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
