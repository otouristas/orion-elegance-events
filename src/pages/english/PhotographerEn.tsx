import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Phone, Mail, Globe, Instagram, Facebook } from 'lucide-react';

const PhotographerEn = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = [
    { 
      icon: Phone, 
      label: "Mobile", 
      value: "+30 697 725 3823",
      href: "tel:+306977253823"
    },
    { 
      icon: Mail, 
      label: "Email", 
      value: "darvaphotography@gmail.com",
      href: "mailto:darvaphotography@gmail.com"
    },
    { 
      icon: Globe, 
      label: "Website", 
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

  return (
    <div className="min-h-screen">
      <Navigation isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-main mb-6">
              Photographer
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The Photographer - Ktima Orion - Keratea
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
                  The Photographer
                </h2>
              </div>
              <div className="w-24 h-1 bg-brand-main mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* About Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-main/10 mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our estate with a special eye and love for photography of your dream wedding 
                  combined with our years of experience contribute to an exceptional experience.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In this <strong className="text-brand-main">'darva photography'</strong>, with more than 20 consecutive years 
                  in photography and videography, can fully cover your needs 
                  for everything you will need for the wedding and baptism you are preparing.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-brand-main/5 to-brand-main/10 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-brand-text mb-4">
                    CONTACT INFORMATION
                  </h3>
                  <p className="text-lg text-brand-main font-medium">
                    Contact Person: Dimitra Arvaniti
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
                    CONTACT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhotographerEn;