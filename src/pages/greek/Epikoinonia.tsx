import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react';

export default function Epikoinonia() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Τοποθεσία",
      details: ["Κερατέα, Αττική"]
    },
    {
      icon: Phone,
      title: "Τηλέφωνα",
      details: ["2299068812", "6981889560"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ktimaorion.gr"]
    },
    {
      icon: Building2,
      title: "Γ.Ε.ΜΗ.",
      details: ["062719803000"]
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Επικοινωνία</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες της εκδήλωσής σας 
              και να δημιουργήσουμε μαζί αξέχαστες αναμνήσεις.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  <span className="text-gradient-brand">Στοιχεία Επικοινωνίας</span>
                </h2>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <info.icon className="w-8 h-8 text-brand-main flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-bold text-gradient-brand mb-3">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground text-lg">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Business Hours */}
                <Card className="card-elegant mt-8 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="w-8 h-8 text-brand-main flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gradient-brand mb-3">Ώρες Λειτουργίας</h3>
                        <p className="text-muted-foreground text-lg">
                          Δευτέρα - Κυριακή: 9:00 - 22:00
                        </p>
                        <p className="text-muted-foreground text-sm mt-2">
                          *Επικοινωνήστε μαζί μας για ραντεβού εκτός ωρών
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Google Maps */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  <span className="text-gradient-brand">Βρείτε μας</span>
                </h2>
                
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6304.937079785293!2d24.028817!3d37.802493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a18dba5963d66d%3A0x753d26f1ce529d7!2zzprPhM6uzrzOsSDOqc-Bzq_Pic69!5e0!3m2!1sen!2sgr!4v1758391271502!5m2!1sen!2sgr" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[450px]"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    Βρισκόμαστε στην Κερατέα, με εύκολη πρόσβαση από την Αττική Οδό
                  </p>
                  <button className="button button4">
                    Οδηγίες Χρήσης GPS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Επικοινωνήστε μαζί μας σήμερα
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Έχουμε ερωτήσεις για την εκδήλωσή σας; Θέλετε να κλείσετε ραντεβού; 
              Επικοινωνήστε μαζί μας και θα σας απαντήσουμε άμεσα.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2299068812" className="button button4">
                Καλέστε μας
              </a>
              <a href="mailto:info@ktimaorion.gr" className="button button4">
                Στείλτε Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
