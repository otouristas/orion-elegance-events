import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Camera, Users, Star, Home, Car, TreePine, Utensils, Award, MapPin, Phone, Mail } from 'lucide-react';

// Import images from all folders
import home1 from '@/assets/home/DSC_7588.JPG';
import home2 from '@/assets/home/DSC_7816.JPG';
import wedding1 from '@/assets/gamos/DSC_7637.JPG';
import wedding2 from '@/assets/gamos/DSC_7712.JPG';
import wedding3 from '@/assets/gamos/DSC_7806.JPG';
import baptism1 from '@/assets/vaftisi/DSC_7662.JPG';
import baptism2 from '@/assets/vaftisi/DSC_7828.JPG';
import corporate1 from '@/assets/ekdiloseis/DSC_7859.JPG';
import corporate2 from '@/assets/ekdiloseis/DSC_7783.JPG';
import party1 from '@/assets/party/DSC_7796.JPG';
import party2 from '@/assets/party/DSC_7733.JPG';

export default function VenueEn() {
  const venuePhotos = [
    { src: home1, alt: "Ktima Orion - Semi-outdoor pavilion", category: "Venue" },
    { src: home2, alt: "Ktima Orion - Event space", category: "Venue" },
    { src: wedding1, alt: "Ktima Orion - Wedding events", category: "Wedding" },
    { src: wedding2, alt: "Ktima Orion - Wedding reception", category: "Wedding" },
    { src: wedding3, alt: "Ktima Orion - Wedding moments", category: "Wedding" },
    { src: baptism1, alt: "Ktima Orion - Baptism events", category: "Baptism" },
    { src: baptism2, alt: "Ktima Orion - Baptism reception", category: "Baptism" },
    { src: corporate1, alt: "Ktima Orion - Corporate events", category: "Corporate" },
    { src: corporate2, alt: "Ktima Orion - Professional events", category: "Corporate" },
    { src: party1, alt: "Ktima Orion - Parties and celebrations", category: "Party" },
    { src: party2, alt: "Ktima Orion - Festive events", category: "Party" }
  ];

  const venueFeatures = [
    {
      icon: Car,
      title: "Parking Space",
      description: "Huge parking area for all guests"
    },
    {
      icon: Home,
      title: "Semi-outdoor Pavilion",
      description: "Magical semi-outdoor space for events"
    },
    {
      icon: Utensils,
      title: "Barbeque Facilities",
      description: "Full setup for cooking and serving"
    },
    {
      icon: Heart,
      title: "Reception Area",
      description: "Welcome space for guests"
    },
    {
      icon: Home,
      title: "Studio",
      description: "Studio for the couple throughout"
    },
    {
      icon: Award,
      title: "Generator",
      description: "Power backup in case of outage"
    },
    {
      icon: TreePine,
      title: "Beautiful Gardens",
      description: "Large gardens and lovely flower beds"
    }
  ];

  const venueHighlights = [
    {
      title: "Magical Natural Environment",
      description: "Ktima Orion is a beautiful green space where visitors immediately feel the glow of luxury in perfect harmony with the natural environment.",
      icon: TreePine
    },
    {
      title: "Ideal Location",
      description: "In an ideal location with easy access from Attiki Odos, you can enjoy the special moments of your life.",
      icon: MapPin
    },
    {
      title: "Modern Facilities",
      description: "The closed, fully air-conditioned hall and the magical outdoor space guarantee warm reception and absolute hospitality for your guests.",
      icon: Home
    },
    {
      title: "Close to Chapels",
      description: "We are very close to picturesque chapels by the sea for the ceremony.",
      icon: Heart
    }
  ];

  const eventTypes = [
    {
      title: "Weddings",
      description: "Unique moments of love at Ktima Orion. We undertake with imagination, consistency and respect for your wishes the design and organization of your reception.",
      count: "200+",
      icon: Heart
    },
    {
      title: "Baptisms",
      description: "How special and how joyful an event! The ceremony and the reception that will follow must represent the family.",
      count: "150+",
      icon: Users
    },
    {
      title: "Corporate Events",
      description: "Your professional event is our professional responsibility. The experience of our partners makes our venue ideal for successful events.",
      count: "100+",
      icon: Star
    },
    {
      title: "Parties & Celebrations",
      description: "At Ktima Orion, we turn your special moments into unforgettable experiences. Birthdays, engagement or corporate party.",
      count: "300+",
      icon: Camera
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Our Venue – Ktima Orion Keratea | Indoor & Outdoor Spaces"
        description="Explore our venue: Large garden, indoor hall, sea view, parking for 100 cars. Flexible indoor & outdoor layouts."
        canonical="/en/venue"
        keywords="event venue keratea, wedding hall athens, garden reception venue, venue with parking"
        lang="en"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">The Venue</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              Ktima Orion - Magical Event Space
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Ktima Orion is a beautiful green space where visitors immediately feel the glow of luxury 
                in perfect harmony with the natural environment. In an ideal location with easy access from Attiki Odos, 
                you can enjoy the special moments of your life.
              </p>
              
              <p>
                The closed, fully air-conditioned hall and the magical outdoor space guarantee warm reception 
                and absolute hospitality for your guests. We are very close to picturesque chapels by the sea 
                for the ceremony.
              </p>
            </div>
          </div>
        </section>

        {/* Venue Features */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">The Venue Features:</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {venueFeatures.map((feature, index) => (
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

        {/* Venue Highlights */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Why Ktima Orion?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {venueHighlights.map((highlight, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <highlight.icon className="w-12 h-12 text-brand-main flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gradient-brand mb-4">{highlight.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Statistics */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-gradient-brand">Our Events</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTypes.map((event, index) => (
                <Card key={index} className="card-elegant text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <event.icon className="w-16 h-16 text-brand-main mx-auto mb-4" />
                    <div className="text-3xl font-bold text-brand-main mb-2">{event.count}</div>
                    <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
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
              <span className="text-gradient-brand">Venue Photos</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {venuePhotos.map((photo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visit Ktima Orion
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a visit to Ktima Orion and see up close 
              the magical environment that will host your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="button button4">
                BOOK APPOINTMENT
              </button>
              <button className="button button4">
                CONTACT
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Location</div>
                <div className="text-muted-foreground">Keratea, Attica</div>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Phone</div>
                <div className="text-muted-foreground">2299068812 / 6981889560</div>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-brand-main mb-2" />
                <div className="font-semibold">Email</div>
                <div className="text-muted-foreground">info@ktimaorion.gr</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}