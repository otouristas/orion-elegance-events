import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { ClickableImage } from '@/components/ImageLightbox';
import { Heart, Camera, Users, Baby, Star, Sparkles } from 'lucide-react';

// Import baptism photos
import baptism1 from '@/assets/vaftisi/DSC_7806.JPG';
import baptism2 from '@/assets/vaftisi/DSC_7712.JPG';
import baptism3 from '@/assets/vaftisi/DSC_7828.JPG';
import baptism4 from '@/assets/vaftisi/DSC_7588.JPG';
import baptism5 from '@/assets/vaftisi/DSC_7662.JPG';
import baptism6 from '@/assets/vaftisi/DSC_7859.JPG';
import baptism7 from '@/assets/vaftisi/DSC_7796.JPG';
import baptism8 from '@/assets/vaftisi/DSC_7763.JPG';
import baptism9 from '@/assets/vaftisi/DSC_7733.JPG';
import baptism10 from '@/assets/vaftisi/DSC_7569.JPG';
import baptism11 from '@/assets/vaftisi/DSC_7816.JPG';
import baptism12 from '@/assets/vaftisi/DSC_7622.JPG';

export default function BaptismEn() {
  const baptismPhotos = [
    { src: baptism1, alt: "Baptism at Ktima Orion" },
    { src: baptism2, alt: "Baptism reception" },
    { src: baptism3, alt: "Unique baptism moments" },
    { src: baptism4, alt: "Baptism celebration" },
    { src: baptism5, alt: "Ktima Orion baptism" },
    { src: baptism6, alt: "Baptism memories" },
    { src: baptism7, alt: "Joyful baptism" },
    { src: baptism8, alt: "Magical moments" },
    { src: baptism9, alt: "Family celebration" },
    { src: baptism10, alt: "Baptism decoration" },
    { src: baptism11, alt: "Special moments" },
    { src: baptism12, alt: "Unforgettable baptism" }
  ];

  const baptismFeatures = [
    {
      icon: Heart,
      title: "Tender Atmosphere",
      description: "We create a warm and welcoming atmosphere for your family"
    },
    {
      icon: Sparkles,
      title: "Unique Decoration",
      description: "Carefully designed decoration that will make the day unforgettable"
    },
    {
      icon: Users,
      title: "Family Celebration",
      description: "Ideal environment to celebrate with your entire family"
    }
  ];

  const baptismServices = [
    {
      title: "Church Coordination",
      description: "We coordinate the ceremony at the church of your choice and ensure smooth transition to the reception venue."
    },
    {
      title: "Special Children's Menu",
      description: "Customized menu that will satisfy even the youngest guests."
    },
    {
      title: "Photography & Video",
      description: "Professional recording of all moments to preserve these unforgettable memories forever."
    },
    {
      title: "Decoration & Styling",
      description: "Enchanting decoration with luxury elements and natural flowers to create the perfect atmosphere."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Baptism at Ktima Orion – Baptism Venue Keratea Attica"
        description="Dream baptism at Ktima Orion Keratea: outdoor space, playground, ample parking, near the sea. Customized baptism packages. Request a quote!"
        canonical="/en/baptism"
        keywords="baptism keratea greece, baptism venue attica, baptism reception, baptism venue athens, baptism packages, baptism by the sea"
        lang="en"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Baptism</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Create Unforgettable Memories for Your Child's Baptism
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                What a special and joyful occasion! How tender yet demanding!
              </p>
              
              <p>
                The ceremony and the reception that follows must represent your family and deserve only the best. 
                It should radiate joy to create a wonderful celebration for all your loved ones. 
                Understanding the importance of the baptism reception, we stand by your side to organize 
                your child's baptism together, with love and passion.
              </p>
              
              <p className="text-brand-main font-semibold text-xl">
                Hold your baptism reception in a venue that stands out from the rest.
              </p>
            </div>
          </div>
        </section>

        {/* Baptism Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Why Choose Ktima Orion?</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {baptismFeatures.map((feature, index) => (
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

        {/* Services Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Baptism Services</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {baptismServices.map((service, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gradient-brand mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Baptism Photos</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {baptismPhotos.map((photo, index) => (
                <ClickableImage
                  key={index}
                  src={photo.src}
                  alt={photo.alt}
                  images={baptismPhotos}
                  index={index}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-brand">Special Baptism Details</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Special Menu</h3>
                    <p className="text-muted-foreground">
                      Customized menu with options for all ages, including special dishes for children.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Photography & Video</h3>
                    <p className="text-muted-foreground">
                      Professional recording of all moments - from preparation to the end of the party - 
                      to preserve these unforgettable moments forever.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-main/10 to-brand-main/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Why Ktima Orion?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Tender atmosphere</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Experience in baptism receptions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Professional team</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-6 h-6 text-brand-main mt-0.5" />
                    <span>Customized solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's make your child's baptism unforgettable
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to plan the perfect baptism reception at Ktima Orion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                BOOK APPOINTMENT
              </button>
              <button className="button button4">
                CONTACT US
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}