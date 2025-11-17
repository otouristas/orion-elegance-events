import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Star } from 'lucide-react';
import { FAQEn } from '@/components/english/FAQEn';
import { TrustSignalsEn } from '@/components/english/TrustSignalsEn';

// Import wedding photos
import wedding1 from '@/assets/gamos/DSC_7637.JPG';
import wedding2 from '@/assets/gamos/DSC_7816.JPG';
import wedding3 from '@/assets/gamos/DSC_7712.JPG';
import wedding4 from '@/assets/gamos/DSC_7806.JPG';
import wedding5 from '@/assets/gamos/DSC_7859.JPG';
import wedding6 from '@/assets/gamos/DSC_7662.JPG';

export default function WeddingsEn() {
  const weddingPhotos = [
    { src: wedding1, alt: "Wedding reception venue Ktima Orion Keratea sea view" },
    { src: wedding2, alt: "Elegant wedding reception outdoor space Athens" },
    { src: wedding3, alt: "Wedding venue Keratea natural surroundings bride groom" },
    { src: wedding4, alt: "Professional wedding photography Ktima Orion" },
    { src: wedding5, alt: "Wedding reception decorated tables seaside venue" },
    { src: wedding6, alt: "Evening wedding celebration outdoor pavilion Athens" },
  ];

  const weddingFeatures = [
    {
      icon: Heart,
      title: "Personalized Planning",
      description: "Every wedding is unique and we tailor every detail to your wishes"
    },
    {
      icon: Users,
      title: "Professional Organization",
      description: "Expertise and creativity for a flawless wedding reception at our exclusive venue"
    },
    {
      icon: Camera,
      title: "Stunning Photography",
      description: "The natural setting of the estate creates wonderful backdrops"
    },
    {
      icon: Star,
      title: "Perfect Service",
      description: "Your demand for perfection is our ultimate goal"
    }
  ];

  const weddingFAQs = [
    { question: "What is the capacity of Ktima Orion for weddings?", answer: "Ktima Orion can accommodate weddings of various sizes with both indoor and outdoor spaces. Our venue is ideal for intimate gatherings as well as large celebrations." },
    { question: "Are there nearby churches for the ceremony?", answer: "Yes, there are several beautiful seaside churches within 5-15 minutes from Ktima Orion, including Agios Alexandros, Panagia Gkarika, and Profitis Ilias." },
    { question: "Do you provide catering services?", answer: "Yes, we offer complete catering services with customized menus tailored to your preferences and requirements." },
    { question: "Can we have both the ceremony and reception at the venue?", answer: "While we don't hold ceremonies on-site, we are very close to beautiful churches. You can have the ceremony at a nearby church and the reception at Ktima Orion." },
    { question: "Is parking available for guests?", answer: "Yes, we have a huge free parking area with over 100 spaces for all your wedding guests." },
    { question: "What services do you provide for weddings?", answer: "We offer comprehensive wedding services including venue, catering, decoration, lighting, sound, and we work with professional photographers. We handle every detail for your perfect day." },
    { question: "Can we visit the venue before booking?", answer: "Absolutely! We encourage couples to visit Ktima Orion and see the magical environment. Contact us to schedule a free tour." },
    { question: "Is the venue suitable for all seasons?", answer: "Yes, we have both a fully air-conditioned indoor hall and beautiful outdoor spaces, making our venue perfect for weddings in any season." },
    { question: "Do you have accommodation for guests?", answer: "While we don't have on-site accommodation, we can recommend nearby hotels and accommodations for your guests." },
    { question: "Can we customize the decoration?", answer: "Yes, we work with experienced decorators and can fully customize the decoration according to your vision and preferences." },
    { question: "What makes Ktima Orion special for weddings?", answer: "Our venue offers exclusive use (one event per day), beautiful natural surroundings, proximity to seaside churches, professional service, and 15+ years of experience creating unforgettable wedding receptions." },
    { question: "Do you provide a wedding coordinator?", answer: "Yes, we provide complete event coordination to ensure every detail of your wedding day runs smoothly." },
    { question: "Can we bring our own vendors?", answer: "Yes, you're welcome to bring your own vendors, or you can use our trusted partners." },
    { question: "Is there a bridal suite?", answer: "Yes, we provide a studio for the couple to use throughout the event." },
    { question: "What is included in your wedding services?", answer: "Our services include venue rental, catering, decoration options, lighting, sound system, parking, and event coordination. We can create custom packages based on your specific needs." }
  ];

  return (
    <Layout>
      <SEO 
        title="Wedding at Ktima Orion – Wedding Venue Keratea Athens | Dream Wedding"
        description="Wedding reception Ktima Orion Keratea. Sea view, bridal table, free parking, A/C. 15+ years experience. Check availability now!"
        canonical="/en/weddings"
        keywords="wedding keratea, wedding venue keratea, wedding venue attica, wedding reception, wedding venue athens riviera, destination wedding greece"
        lang="en"
        schemaType="Event"
        breadcrumbs={[
          { name: 'Home', url: '/en' },
          { name: 'Weddings', url: '/en/weddings' }
        ]}
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Dream <span className="text-gradient-brand">Wedding</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              The Ultimate Wedding Venue for Unforgettable Wedding Receptions in Keratea, Athens
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                At Ktima Orion, we specialize in creating magical wedding receptions that reflect your unique love story. 
                Your wedding is an exceptional moment, the beginning of your shared journey with your partner.
              </p>
              
              <p>
                We take on with creativity, consistency and respect for your wishes the planning and organization of your wedding reception. 
                Our beautiful <a href="/en/venue" className="text-brand-main hover:underline">wedding venue</a>, combined with our 15+ years of experience, ensures that your special day 
                will be everything you've dreamed of and more. Located near stunning <a href="/en/churches" className="text-brand-main hover:underline">seaside churches</a>, 
                we offer the perfect setting for your ceremony and wedding reception.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Come let us gift you the most beautiful memories on the most unique evening of your life.
              </p>
            </div>
          </div>
        </section>

        {/* Wedding Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Why Choose Ktima Orion?</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {weddingFeatures.map((feature, index) => (
                <Card key={index} className="card-elegant text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-brand-main mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Wedding Photos</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {weddingPhotos.map((photo, index) => (
                <ClickableImage
                  key={index}
                  src={photo.src}
                  alt={photo.alt}
                  images={weddingPhotos}
                  index={index}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSignalsEn />

        {/* FAQs */}
        <FAQEn items={weddingFAQs} title="Frequently Asked Questions About Weddings" />

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-b from-brand-main/5 to-background">
          <div className="container-max text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient-brand">Plan Your Wedding Reception?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create the wedding reception of your dreams together. Book a free tour of our <a href="/en/venue" className="text-brand-main hover:underline">wedding venue</a> or explore <a href="/en/churches" className="text-brand-main hover:underline">nearby seaside churches</a> perfect for your ceremony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/en/contact">
                <button className="button button4">
                  BOOK FREE TOUR
                </button>
              </a>
              <a href="/en/churches">
                <button className="button button4">
                  VIEW CHURCHES
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
