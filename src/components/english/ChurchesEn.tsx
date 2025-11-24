import { MapPin, Clock } from 'lucide-react';

export const ChurchesEn = () => {
  const churches = [
    {
      name: 'Agios Alexandros',
      location: 'Daskaleio',
      distance: '3.8 km',
      time: "8'"
    },
    {
      name: 'Panagia Gkarika',
      location: 'Keratea',
      distance: '3.1 km',
      time: "6'"
    },
    {
      name: 'Agia Triada',
      location: 'Entrance of Keratea',
      distance: '5 km',
      time: "10'"
    },
    {
      name: 'Agios Panteleimonas',
      location: 'Kaki Thalassa Keratea',
      distance: '8.6 km',
      time: "13'"
    },
    {
      name: 'Profitis Ilias',
      location: 'Limanaki Perigiali Keratea',
      distance: '8.8 km',
      time: "11'"
    },
    {
      name: 'Agios Nikolaos',
      location: 'Thoriko Keratea',
      distance: '12.3 km',
      time: "12'"
    },
    {
      name: 'Agios Andreas',
      location: 'Lavrio',
      distance: '12.8 km',
      time: "12'"
    },
    {
      name: 'Agios Nektarios',
      location: 'Kamariza Lavrio',
      distance: '15.9 km',
      time: "15'"
    }
  ];

  return (
    <section id="churches" className="section-padding bg-gradient-to-b from-champagne to-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Picturesque <span className="text-gradient-brand">Chapels</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ktima Orion is just minutes away from many picturesque chapels and churches in the surrounding area. 
            At a distance ranging from 5 - 15 minutes, you can hold your wedding or baptism ceremony, 
            enjoying breathtaking views of the Aegean Sea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {churches.map((church, index) => (
            <div key={index} className="card-elegant p-6 group hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gradient-brand mb-2">
                {church.name}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {church.location}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-brand-main" />
                  <span>Distance: {church.distance}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-brand-main" />
                  <span>Time: {church.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="card-elegant p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient-brand mb-4">
              A Magical Combination
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              At Ktima Orion, your event becomes our personal matter. 
              Choose one of the picturesque chapels located a short distance away 
              for your ceremony and continue with the reception in our outdoor or indoor space.
            </p>
            <a href="/en/churches" className="button button4">
              VIEW ALL CHURCHES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
