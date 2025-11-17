import { Check } from 'lucide-react';

export const TrustSignalsEn = () => {
  const signals = [
    "15+ Years of Experience",
    "Exclusive Venue Use",
    "Free Parking 100+ Spaces",
    "Air-Conditioned Indoor Areas",
    "Outdoor Space with Views",
    "Near Seaside Churches"
  ];

  return (
    <section className="section-padding">
      <div className="container-max max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-gradient-brand">Ktima Orion</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {signals.map((signal, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-brand-main/5">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-brand-main rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-lg font-medium">{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
