import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart, Users, Calendar, Star } from 'lucide-react';

const WeddingPlannerEn = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    "Personalized design according to your needs and style",
    "Professionalism, consistency and creativity", 
    "Collaboration with top professionals in the field",
    "Complete care and organization for a truly unforgettable wedding"
  ];

  return (
    <div className="min-h-screen">
      <Navigation isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-main mb-6">
              Wedding Planner
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Wedding Planning Service - Ktima Orion - Keratea
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-text">
                Wedding Planning Service
              </h2>
              <div className="w-24 h-1 bg-brand-main mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-main/10 mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <Heart className="w-8 h-8 text-brand-main" />
                  <h3 className="text-2xl font-semibold text-brand-text">
                    Dream of a wedding at our estate without stress and fatigue?
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Organizing your wedding doesn't have to stress you out. At Ktima Orion, we offer 
                  complete Wedding Planner services, so you can live your day exactly as you 
                  dreamed - unique, carefree and full of emotions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  With years of experience in wedding organization and personal care, we take over every 
                  detail: from choosing suppliers, decoration and schedule, to support on your wedding day.
                </p>
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-to-br from-brand-main/5 to-brand-main/10 rounded-2xl p-8 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <Star className="w-8 h-8 text-brand-main" />
                  <h3 className="text-2xl font-semibold text-brand-text">
                    Why choose us:
                  </h3>
                </div>
                
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-brand-main mt-1 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-main/10 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Calendar className="w-8 h-8 text-brand-main" />
                  <h3 className="text-2xl font-semibold text-brand-text">
                    Memories that last forever
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With us by your side, every moment of your special day turns into a precious 
                  experience - for you and your guests. We create memories that remain 
                  indelible in memory, making you want to live your wedding day again and again.
                </p>

                <p className="text-xl font-semibold text-brand-text mb-8">
                  Contact us today to start planning your dream wedding!
                </p>

                <Button className="bg-brand-main hover:bg-brand-main/90 text-brand-text px-8 py-3 text-lg">
                  CONTACT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeddingPlannerEn;