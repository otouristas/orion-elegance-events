import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Camera, Users, Star, Home, Car, TreePine, Utensils, Award, MapPin, Phone, Mail } from 'lucide-react';
import { FAQEn } from '@/components/english/FAQEn';
import { TrustSignalsEn } from '@/components/english/TrustSignalsEn';
import { PopularSearchesEn } from '@/components/english/PopularSearchesEn';
import { Link } from 'react-router-dom';

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
    { src: home1, alt: "Wedding venue Ktima Orion semi-outdoor pavilion Keratea", category: "Venue" },
    { src: home2, alt: "Event space venue natural surroundings Athens", category: "Venue" },
    { src: wedding1, alt: "Wedding reception venue elegant decoration Keratea", category: "Wedding" },
    { src: wedding2, alt: "Outdoor wedding reception venue sea view Athens", category: "Wedding" },
    { src: wedding3, alt: "Wedding venue celebration moments natural space", category: "Wedding" },
    { src: baptism1, alt: "Baptism reception venue family celebration Keratea", category: "Baptism" },
    { src: baptism2, alt: "Christening venue decorated tables outdoor space", category: "Baptism" },
    { src: corporate1, alt: "Corporate event venue professional space Athens", category: "Corporate" },
    { src: corporate2, alt: "Business event venue air-conditioned hall Keratea", category: "Corporate" },
    { src: party1, alt: "Party venue celebration space outdoor pavilion", category: "Party" },
    { src: party2, alt: "Festive event venue elegant space Athens", category: "Party" }
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
      icon: Heart,
      title: "Reception Area",
      description: "Welcome space for guests"
    },
    {
      icon: Home,
      title: "Studio",
      description: "Studio for the couple throughout"
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
      description: "Unique moments of love at Ktima Orion wedding venue. We undertake with imagination, consistency and respect for your wishes the design and organization of your wedding reception.",
      count: "200+",
      icon: Heart
    },
    {
      title: "Baptisms",
      description: "How special and how joyful an event! The christening ceremony and the baptism reception that will follow must represent the family.",
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

  const venueFAQs = [
    { question: "Where is Ktima Orion located?", answer: "Ktima Orion is located in Keratea, Attica, with easy access from Attiki Odos. The venue offers a beautiful natural environment close to Athens." },
    { question: "What is the capacity of the venue?", answer: "The venue can accommodate large events with extensive parking for over 100 vehicles. We offer both indoor air-conditioned spaces and outdoor areas." },
    { question: "Is parking available?", answer: "Yes, we have a huge free parking area with over 100 spaces for all your guests." },
    { question: "Do you have both indoor and outdoor spaces?", answer: "Yes, we offer a fully air-conditioned indoor hall and a magical semi-outdoor pavilion, suitable for all seasons and weather conditions." },
    { question: "Can we visit the venue before booking?", answer: "Absolutely! We encourage couples to visit Ktima Orion and see the magical environment that will host their special event. Contact us to schedule a free tour." },
    { question: "Are you close to churches?", answer: "Yes, we are very close to several picturesque seaside chapels (5-15 minutes away), perfect for wedding and baptism ceremonies." }
  ];

  return (
    <Layout lang="en">
      <SEO
        title="The Venue – Ktima Orion Keratea | Event Venue Athens"
        description="Wedding & event venue Keratea: 200+ parking, A/C hall, outdoor pavilion, sea view. Near Athens, close to chapels. Book your tour!"
        canonical="/en/venue"
        keywords="event venue keratea, wedding venue athens, reception hall attica, venue near athens, corporate event space greece"
        lang="en"
        breadcrumbs={[
          { name: 'Home', url: '/en' },
          { name: 'The Venue', url: '/en/venue' }
        ]}
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient-brand">Venue</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-text">
              A Unique Wedding and Baptism Venue for Unforgettable Events in Keratea, Athens
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
                Ktima Orion is a beautiful wedding and baptism reception venue, a green event space where visitors immediately feel the glow of luxury
                in perfect harmony with the natural environment. In an ideal location with easy access from Attiki Odos, 
                you can enjoy the special moments of your life.
              </p>
              
              <p>
                The fully air-conditioned wedding and baptism reception hall and the magical outdoor pavilion space guarantee warm reception 
                and absolute hospitality for your guests. We are very close to <a href="/en/churches" className="text-brand-main hover:underline">picturesque seaside chapels</a> 
                for your <a href="/en/weddings" className="text-brand-main hover:underline">wedding</a> or <a href="/en/baptism" className="text-brand-main hover:underline">baptism</a> ceremony. Explore our comprehensive <a href="/en/services" className="text-brand-main hover:underline">event services</a> for your special day.
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

        {/* Trust Signals */}
        <TrustSignalsEn />

        {/* FAQ Section */}
        <FAQEn items={venueFAQs} title="Frequently Asked Questions About the Venue" />

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
              <a href="/en/contact" className="button button4">
                BOOK FREE TOUR
              </a>
              <a href="/en/weddings" className="button button4">
                VIEW SERVICES
              </a>
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