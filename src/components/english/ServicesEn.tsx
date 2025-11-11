import { Button } from '@/components/ui/button';
import { Heart, Baby, Building, PartyPopper, Camera, Crown } from 'lucide-react';

export const ServicesEn = () => {
  const services = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Unique moments of love at Ktima Orion. Your wedding is an extremely important moment, the beginning of your shared journey.',
      features: ['Indoor & outdoor space', 'Fully air-conditioned hall', 'Near picturesque chapels']
    },
    {
      icon: Baby,
      title: 'Baptisms',
      description: 'Create unforgettable memories for your child\'s baptism. A tender and joyful celebration for the whole family.',
      features: ['Safe fenced area', 'Special children\'s menu', 'Professional service']
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Your event, our expertise. Professionalism and dedication for the most successful corporate events.',
      features: ['Conference equipment', 'High-quality catering', 'Parking space']
    },
    {
      icon: PartyPopper,
      title: 'Parties',
      description: 'The ideal space for your party. Birthdays, engagements or any special moment - our venue adapts to every need.',
      features: ['Flexible space', 'Music coverage', 'Bar & cocktails']
    },
    {
      icon: Camera,
      title: 'Photographer',
      description: 'Partnership with "Darva Photography" with more than 20 years of experience in wedding photography and videography.',
      features: ['Professional coverage', '20+ years experience', 'Photo & video']
    },
    {
      icon: Crown,
      title: 'Wedding Planner',
      description: 'Complete wedding planning services. Personalized design and absolute care for an unforgettable wedding.',
      features: ['Full planning', 'Personal design', 'Top partners']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-champagne">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-brand">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From weddings and baptisms to corporate events and parties, 
            we offer comprehensive services for every special moment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-elegant p-8 text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gradient-brand">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-brand-main rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="border-brand-main text-brand-main hover:bg-brand-main hover:text-white">
                LEARN MORE
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
