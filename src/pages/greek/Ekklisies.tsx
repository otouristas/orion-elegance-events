import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Church } from 'lucide-react';

export default function Ekklisies() {
  const churches = [
    {
      name: 'Άγιος Αλέξανδρος, Δασκαλειό',
      distance: '3,8 χλμ',
      time: "8'",
      icon: Church
    },
    {
      name: 'Άγιος Παντελεήμονας, Κακή Θάλασσα Κερατέας',
      distance: '8,6 χλμ',
      time: "13'",
      icon: Church
    },
    {
      name: 'Παναγία Γκαρικά, Κερατέα',
      distance: '3,1 χλμ',
      time: "6'",
      icon: Church
    },
    {
      name: 'Προφήτης Ηλίας, Λιμανάκι Περιγιάλι Κερατέας',
      distance: '8,8 χλμ',
      time: "11'",
      icon: Church
    },
    {
      name: 'Άγιος Νικόλαος, Θορικό Κερατέας',
      distance: '12,3 χλμ',
      time: "12'",
      icon: Church
    },
    {
      name: 'Άγιος Νεκτάριος, Καμάριζα Λαυρίου',
      distance: '15,9 χλμ',
      time: "15'",
      icon: Church
    },
    {
      name: 'Άγιος Ανδρέας, Λαύριο',
      distance: '12,8 χλμ',
      time: "12'",
      icon: Church
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Εκκλησίες κοντά στο Κτήμα Ωρίων | Γάμος & Βάπτιση"
        description="Ανακαλύψτε γραφικά εκκλησάκια και εκκλησίες κοντά στο Κτήμα Ωρίων. Από 5-15 λεπτά απόσταση με καταπληκτική θέα στο Αιγαίο για το μυστήριο του γάμου ή της βάπτισης."
        canonical="/ekklisies"
        keywords="εκκλησίες Κερατέα, γάμος εκκλησία, βάπτιση εκκλησία, Άγιος Αλέξανδρος, Παναγία Γκαρικά, εκκλησάκια Αττική"
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <Church className="w-20 h-20 text-brand-main mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Εκκλησίες</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Το Κτήμα Ωρίων απέχει ελάχιστα από πολλά γραφικά εκκλησάκια και εκκλησίες στη γύρω περιοχή. 
              Σε απόσταση που κυμαίνεται από <strong>5 - 15 λεπτά</strong>, μπορείτε να τελέσετε το μυστήριο του γάμου 
              ή της βάπτισης, απολαμβάνοντας καταπληκτική θέα στο Αιγαίο, πριν ολοκληρώσετε την εκδήλωσή σας 
              στο Κτήμα Ωρίων.
            </p>
          </div>
        </section>

        {/* Churches List */}
        <section className="section-padding">
          <div className="container-max max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Κοντινές Εκκλησίες</span>
            </h2>

            <div className="grid gap-6">
              {churches.map((church, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 bg-brand-main/10 rounded-full">
                          <church.icon className="w-8 h-8 text-brand-main" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2">
                            {index + 1}. {church.name}
                          </h3>
                          <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-brand-main" />
                              <span className="font-medium">Απόσταση: {church.distance}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-brand-main" />
                              <span className="font-medium">Χρόνος: {church.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-brand">Χάρτης Εκκλησιών</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Δείτε τις τοποθεσίες όλων των εκκλησιών στον χάρτη και επιλέξτε αυτή που σας ταιριάζει
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/d/u/0/embed?mid=1I1J1VWCrLSQc6iwlQkAegUrpr74rcwA&ehbc=2E312F&noprof=1" 
                width="100%" 
                height="760" 
                style={{ border: 0, marginTop: '-70px' }}
                loading="lazy"
                title="Χάρτης Εκκλησιών κοντά στο Κτήμα Ωρίων"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Σχεδιάστε το Τέλειο Γάμο ή Βάπτιση
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επιλέξτε την εκκλησία που σας ταιριάζει και επικοινωνήστε μαζί μας για να οργανώσουμε 
              την υπέροχη δεξίωσή σας στο Κτήμα Ωρίων.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/epikoinonia" className="button button4">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </a>
              <a href="/request" className="button button4">
                ΑΙΤΗΜΑ ΠΛΗΡΟΦΟΡΙΩΝ
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
