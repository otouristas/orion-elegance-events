import { MapPin, Clock } from 'lucide-react';

export const Churches = () => {
  const churches = [
    {
      name: 'Άγιος Αλέξανδρος',
      location: 'Δασκαλειό',
      distance: '3,8 χλμ',
      time: "8'"
    },
    {
      name: 'Παναγία Γκαρικά',
      location: 'Κερατέα',
      distance: '3,1 χλμ',
      time: "6'"
    },
    {
      name: 'Άγιος Παντελεήμονας',
      location: 'Κακή Θάλασσα Κερατέας',
      distance: '8,6 χλμ',
      time: "13'"
    },
    {
      name: 'Προφήτης Ηλίας',
      location: 'Λιμανάκι Περιγιάλι Κερατέας',
      distance: '8,8 χλμ',
      time: "11'"
    },
    {
      name: 'Άγιος Νικόλαος',
      location: 'Θορικό Κερατέας',
      distance: '12,3 χλμ',
      time: "12'"
    },
    {
      name: 'Άγιος Ανδρέας',
      location: 'Λαύριο',
      distance: '12,8 χλμ',
      time: "12'"
    },
    {
      name: 'Άγιος Νεκτάριος',
      location: 'Καμάριζα Λαυρίου',
      distance: '15,9 χλμ',
      time: "15'"
    }
  ];

  return (
    <section id="churches" className="section-padding bg-gradient-to-b from-champagne to-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Γραφικά <span className="text-gradient-brand">Εκκλησάκια</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Το Κτήμα Ωρίων απέχει ελάχιστα από πολλά γραφικά εκκλησάκια και εκκλησίες στη γύρω περιοχή. 
            Σε απόσταση που κυμαίνεται από 5 - 15 λεπτά, μπορείτε να τελέσετε το μυστήριο του γάμου ή 
            της βάπτισης, απολαμβάνοντας καταπληκτική θέα στο Αιγαίο.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {churches.map((church, index) => (
            <div key={index} className="card-elegant p-6 group hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gradient-brand mb-2">
                {church.name}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {church.location}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-brand-main" />
                  <span>Απόσταση: {church.distance}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-brand-main" />
                  <span>Χρόνος: {church.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="card-elegant p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient-brand mb-4">
              Ένας Μαγικός Συνδυασμός
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Στο Κτήμα Ωρίων η εκδήλωσή σας γίνεται προσωπική μας υπόθεση. 
              Επιλέξτε ένα από τα γραφικά εκκλησάκια που βρίσκονται σε ελάχιστη απόσταση, 
              για την τέλεση του μυστηρίου και συνεχίστε με τη δεξίωση στον εξωτερικό ή τον εσωτερικό χώρο.
            </p>
            <a href="/ekklisies" className="button button4">
              ΔΕΙΤΕ ΟΛΕς ΤΙΣ ΕΚΚΛΗΣΙΕΣ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};