import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesEn() {
  const services = [
    {
      title: "Wedding Planner",
      href: "/en/wedding-planner",
      description: "Professional wedding planning with experience and imagination. We undertake with imagination, consistency and respect for your wishes the design and organization of your reception.",
      icon: Users
    },
    {
      title: "Photographer",
      href: "/en/photographer",
      description: "Professional photography and videography for the most important moments of your life. We capture with love and art every detail of your event.",
      icon: Camera
    }
  ];

  const additionalServices = [
    {
      title: "Church Coordination",
      description: "We coordinate the ceremony at the church of your choice and ensure smooth transition to the wedding venue."
    },
    {
      title: "Special Children's Menu",
      description: "Customized menu with options for all ages, including special dishes for children."
    },
    {
      title: "Photography & Video",
      description: "Professional recording of all moments - from preparation to the end of the party - to keep these unforgettable moments forever."
    },
    {
      title: "Decoration & Styling",
      description: "Magical decoration with luxury elements and natural flowers that will create the perfect atmosphere."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Event Services at Ktima Orion | Catering, Decor, Technical Support"
        description="Full-service venue: In-house catering, decoration, lighting, sound, event coordination. All-inclusive packages available."
        canonical="/en/services"
        keywords="event services athens, wedding catering, venue decoration, event planning keratea"
        lang="en"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Services</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Professional Services at Ktima Orion
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Ktima Orion offers a complete package of professional services for all your events. 
                From planning to photography, we ensure that every detail will be impeccable.
              </p>
              
              <p>
                With experience, flexibility and dedication to detail, 
                we create magical experiences that you will remember forever.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Main Services</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <service.icon className="w-12 h-12 text-brand-main flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gradient-brand mb-4">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                        <Link
                          to={service.href}
                          className="inline-block button button4 group-hover:scale-105 transition-transform duration-300"
                        >
                          LEARN MORE
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Additional Services</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gradient-brand mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
              Let's discuss your needs
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our services 
              and how we can create unforgettable memories together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                BOOK APPOINTMENT
              </button>
              <button className="button button4">
                CONTACT
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}