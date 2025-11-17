import { Shield, Users, Award, MapPin } from 'lucide-react';

export const TrustSignals = () => {
  const signals = [
    {
      icon: Award,
      title: "15+ Χρόνια Εμπειρίας",
      description: "500+ Επιτυχημένοι Γάμοι & Βαπτίσεις από το 2008"
    },
    {
      icon: Shield,
      title: "Αποκλειστική Χρήση Χώρου",
      description: "Μόνο μία εκδήλωση ανά ημέρα για απόλυτη ηρεμία"
    },
    {
      icon: MapPin,
      title: "Δωρεάν Parking 100+ Θέσεων",
      description: "Τεράστιος χώρος στάθμευσης για όλους τους καλεσμένους"
    },
    {
      icon: Users,
      title: "Κλιματιζόμενοι Χώροι",
      description: "Εσωτερικοί & εξωτερικοί χώροι για κάθε εποχή"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-brand-main/5 to-background">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gradient-brand">Γιατί να Επιλέξετε το Κτήμα Ωρίων</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <div key={index} className="card-elegant p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-brand-main/10 rounded-full flex items-center justify-center">
                  <signal.icon className="w-8 h-8 text-brand-main" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gradient-brand">{signal.title}</h3>
              <p className="text-sm text-muted-foreground">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
