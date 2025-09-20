import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Ekklisies() {
  const churches = [
    {
      name: "Ιερός Ναός Αγίας Παρασκευής",
      location: "Κερατέα",
      distance: "5 λεπτά",
      description: "Ένας όμορφος παραδοσιακός ναός με πλούσια ιστορία και μαγευτικό περιβάλλον."
    },
    {
      name: "Ιερός Ναός Μεταμορφώσεως του Σωτήρος",
      location: "Λαύριο",
      distance: "15 λεπτά",
      description: "Μεγαλοπρεπής ναός με υπέροχη αρχιτεκτονική και ιστορικό υπόβαθρο."
    },
    {
      name: "Ιερός Ναός Αγίου Δημητρίου",
      location: "Ανάβυσσος",
      distance: "20 λεπτά",
      description: "Κομψός ναός με παραδοσιακή αρχιτεκτονική και φυσική ομορφιά."
    },
    {
      name: "Ιερός Ναός Παναγίας",
      location: "Σούνιο",
      distance: "25 λεπτά",
      description: "Ιστορικός ναός με μαγευτική θέα στο Αιγαίο πέλαγος."
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Εκκλησίες</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Βρείτε την ιδανική εκκλησία για την τελετή σας. Συστήνουμε τις καλύτερες εκκλησίες 
              της περιοχής που συνδυάζουν ιστορία, ομορφιά και εύκολη πρόσβαση.
            </p>
          </div>
        </section>

        {/* Churches Grid */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-8">
              {churches.map((church, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gradient-brand mb-4">
                      {church.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {church.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-brand-main" />
                        <span className="text-foreground">{church.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-brand-main" />
                        <span className="text-foreground">{church.distance} από το Κτήμα Ωρίων</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-brand-main" />
                        <span className="text-sm text-muted-foreground">
                          Για περισσότερες πληροφορίες και συντονισμό
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Χρειάζεστε βοήθεια με την επιλογή;
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Η ομάδα μας μπορεί να σας βοηθήσει να επιλέξετε την ιδανική εκκλησία 
              και να συντονίσει όλες τις λεπτομέρειες της τελετής.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="button button4">
                Επικοινωνήστε μαζί μας
              </a>
              <a href="/request" className="button button4">
                Αίτημα Πληροφοριών
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
