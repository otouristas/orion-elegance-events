import { PageIntro } from '@/components/PageIntro';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Camera } from 'lucide-react';
import Link from 'next/link';
import { FAQEn } from '@/components/english/FAQEn';
import { TrustSignalsEn } from '@/components/english/TrustSignalsEn';
import { PopularSearchesEn } from '@/components/english/PopularSearchesEn';
export default function ServicesEn() {
  const services = [
    {
      title: "Photographer",
      href: "/en/photographer",
      description: "Professional photography and videography for the most important moments of your life. We capture with love and art every detail of your event.",
      icon: Camera
    }
  ];

  const additionalServices = [
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

  const servicesFAQs = [
    { question: "What services do you provide?", answer: "We offer comprehensive services: catering, decoration, lighting, sound, professional photographer (Studio Alpha) and complete event coordination." },
    { question: "Can we choose only certain services?", answer: "Of course! You can choose the services you're interested in and bring your own partners for the rest." },
    { question: "Do you work with photographers?", answer: "Yes, we work with professional Studio Alpha which has years of experience in weddings and baptisms." },
    { question: "Do you provide DJ or music?", answer: "We can suggest experienced DJs and musicians or you can bring your own." },
    { question: "Can we bring our own partners?", answer: "Absolutely! You are free to choose whichever partners you wish." },
    { question: "Is there a decorator?", answer: "We work with experienced decorators or you can bring your own." },
    { question: "What does catering include?", answer: "Catering includes a complete menu tailored to your wishes, with options for all ages." },
    { question: "Do you provide cake?", answer: "Yes, we can arrange your cake through our partners or you can bring your own." }
  ];

  return (
    <Layout lang="en">
      <div className="pt-20">
        {/* Hero Section */}
        <PageIntro eyebrow="Our services & partners" title="The details of your day." description="Catering, decoration, photography and music. Discover the options and discuss a personal quote for your celebration." image="/images/wedding-card.webp" imageAlt="Ktima Orion in Keratea" lang="en" secondaryHref="/en/gallery" secondaryLabel="See the photos" />

        {/* Main Services */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="font-heading text-center mb-16">
              <span className="text-gradient-brand">Main Services</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <service.icon className="w-12 h-12 text-brand-main flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <h3 className="font-heading text-gradient-brand mb-4">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                        <Link
                          href={service.href}
                          className="inline-block button button4 transition-transform duration-300"
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
            <h2 className="font-heading text-center mb-16">
              <span className="text-gradient-brand">Additional Services</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-gradient-brand mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignalsEn />

        {/* FAQs */}
        <FAQEn items={servicesFAQs} title="Frequently Asked Questions About Services" />

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="font-heading mb-6">
              Let's discuss your needs
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our services
              and how we can create unforgettable memories together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/request" className="button button4">
                  BOOK FREE TOUR
                </Link>
              <Link href="/en/weddings" className="button button4">
                  VIEW OUR SERVICES
                </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
