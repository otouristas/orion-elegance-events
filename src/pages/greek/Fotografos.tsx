import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Camera, Phone, Mail, Globe, Instagram, Facebook } from 'lucide-react';

const Fotografos = () => {

  const contactInfo = [
    { 
      icon: Phone, 
      label: "Κινητό", 
      value: "+30 697 827 4657",
      href: "tel:+306978274657"
    },
    { 
      icon: Mail, 
      label: "Email", 
      value: "darvaphotography@gmail.com",
      href: "mailto:darvaphotography@gmail.com"
    },
    { 
      icon: Globe, 
      label: "Ιστοσελίδα", 
      value: "www.darvaphotography.com",
      href: "https://www.darvaphotography.com"
    },
    { 
      icon: Instagram, 
      label: "Instagram", 
      value: "darva_photography",
      href: "https://www.instagram.com/darva_photography"
    },
    { 
      icon: Facebook, 
      label: "Facebook", 
      value: "darva photography",
      href: "https://www.facebook.com/darvaphotography"
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
      <SEO 
        title="Φωτογράφος Γάμου Κτήμα Ωρίων | darva photography Κερατέα"
        description="Φωτογράφηση γάμου & βάπτισης στο Κτήμα Ωρίων με την darva photography. 20+ χρόνια εμπειρίας, επαγγελματική φωτογραφία & βίντεο. Επικοινωνήστε μαζί μας!"
        canonical="/fotografos"
        keywords="φωτογράφος γάμου κερατέα, darva photography, φωτογράφηση βάπτισης, επαγγελματική φωτογραφία, wedding photographer athens"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-main mb-6">
              Φωτογράφος
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ο Φωτογράφος - Κτήμα Ωρίων - Κερατέα
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Camera className="w-12 h-12 text-brand-main" />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
                  Ο Φωτογράφος
                </h2>
              </div>
              <div className="w-24 h-1 bg-brand-main mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* About Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-main/10 mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Το κτήμα μας με μια ιδιαίτερη ματιά και αγάπη για την φωτογραφία του ονειρεμένου γάμου σας 
                  και σε συνδυασμό με την πολυετή γνώμη μας συμβάλουν ώστε να έχετε μια εξαιρετική εμπειρία.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Σε αυτό η εταιρεία <strong className="text-brand-main">'darva photography'</strong>, με περισσότερα από 20 συναπτά έτη 
                  στο χώρο της φωτογραφίας και εικονοληψίας, μπορεί να σας καλύπτει εξ ολοκλήρου τις ανάγκες σας 
                  για όλα όσα θα χρειαστείτε στο γάμο και τη βάπτιση που ετοιμάζετε.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-brand-main/5 to-brand-main/10 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-brand-text mb-4">
                    ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ
                  </h3>
                  <p className="text-lg text-brand-main font-medium">
                    Υπεύθυνος Επικοινωνίας: Αρτέμης Ξένια
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                      >
                        <div className="w-12 h-12 bg-brand-main/10 rounded-full flex items-center justify-center group-hover:bg-brand-main/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-brand-main" />
                        </div>
                        <div>
                          <p className="font-medium text-brand-text">{contact.label}</p>
                          <p className="text-muted-foreground group-hover:text-brand-main transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="text-center mt-8">
                  <Button className="bg-brand-main hover:bg-brand-main/90 text-brand-text px-8 py-3 text-lg">
                    ΕΠΙΚΟΙΝΩΝΙΑ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fotografos;
