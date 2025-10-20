import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Star } from 'lucide-react';

// Import wedding photos
import wedding1 from '@/assets/gamos/DSC_7637.JPG';
import wedding2 from '@/assets/gamos/DSC_7816.JPG';
import wedding3 from '@/assets/gamos/DSC_7712.JPG';
import wedding4 from '@/assets/gamos/DSC_7806.JPG';
import wedding5 from '@/assets/gamos/DSC_7859.JPG';
import wedding6 from '@/assets/gamos/DSC_7662.JPG';

export default function WeddingsEn() {
  const weddingPhotos = [
    { src: wedding1, alt: "Wedding at Ktima Orion" },
    { src: wedding2, alt: "Wedding reception" },
    { src: wedding3, alt: "Unique wedding moments" },
    { src: wedding4, alt: "Wedding photography" },
    { src: wedding5, alt: "Ktima Orion wedding" },
    { src: wedding6, alt: "Wedding evening" },
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
      description: "Expertise and creativity for a flawless wedding reception"
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

  return (
    <Layout>
      <SEO 
        title="Wedding at Ktima Orion – Wedding Venue Keratea Athens | Greece"
        description="Organize your dream wedding at Ktima Orion Keratea, Athens. Outdoor garden with sea view, indoor hall, near seaside chapels. 15+ years experience organizing weddings."
        canonical="/en/weddings"
        keywords="wedding venue keratea, wedding venue athens greece, wedding reception, wedding planning greece, destination wedding athens"
        lang="en"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Weddings</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Unique Moments of Love at Ktima Orion
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Your wedding is an exceptional moment, the beginning of your shared journey with your partner. 
                A moment you will remember with emotion and love.
              </p>
              
              <p>
                We take on with creativity, consistency and respect for your wishes the planning and organization of your reception. 
                Your demand for perfection is our absolute goal, so that we can offer you a dream wedding reception.
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

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Make Your Wedding Dreams Come True
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to plan together the perfect wedding reception at Ktima Orion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/en/contact" className="button button4">
                BOOK A VISIT
              </a>
              <a href="/en/contact" className="button button4">
                CONTACT US
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
