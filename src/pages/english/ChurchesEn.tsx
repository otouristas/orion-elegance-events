import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Church } from 'lucide-react';

export default function ChurchesEn() {
  const churches = [
    {
      name: 'Agios Alexandros, Daskalio',
      distance: '3.8 km',
      time: "8'",
      icon: Church
    },
    {
      name: 'Agios Panteleimonas, Kakia Thalassa Keratea',
      distance: '8.6 km',
      time: "13'",
      icon: Church
    },
    {
      name: 'Panagia Garika, Keratea',
      distance: '3.1 km',
      time: "6'",
      icon: Church
    },
    {
      name: 'Profitis Ilias, Limanaki Perigiali Keratea',
      distance: '8.8 km',
      time: "11'",
      icon: Church
    },
    {
      name: 'Agios Nikolaos, Thoriko Keratea',
      distance: '12.3 km',
      time: "12'",
      icon: Church
    },
    {
      name: 'Agios Nektarios, Kamariza Lavrio',
      distance: '15.9 km',
      time: "15'",
      icon: Church
    },
    {
      name: 'Agios Andreas, Lavrio',
      distance: '12.8 km',
      time: "12'",
      icon: Church
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Churches near Ktima Orion for Wedding & Baptism | Keratea Athens"
        description="Find beautiful chapels near Ktima Orion: Agios Alexandros Daskalio, Panagia Garika, Profitis Ilias Perigiali – all within 5-15' distance in Keratea."
        canonical="/en/churches"
        keywords="churches keratea, wedding church, baptism church, agios alexandros, panagia garika, chapels attica greece"
        lang="en"
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <Church className="w-20 h-20 text-brand-main mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Churches</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ktima Orion is a short distance from many picturesque chapels and churches in the surrounding area. 
              At a distance ranging from <strong>5 - 15 minutes</strong>, you can hold the sacrament of marriage 
              or baptism, enjoying stunning views of the Aegean, before completing your event at Ktima Orion.
            </p>
          </div>
        </section>

        {/* Churches List */}
        <section className="section-padding">
          <div className="container-max max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-brand">Nearby Churches</span>
            </h2>

            <div className="grid gap-6">
              {churches.map((church, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 bg-brand-main/10 rounded-full">
                          <church.icon className="w-8 h-8 text-brand-main" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2">
                            {index + 1}. {church.name}
                          </h3>
                          <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-brand-main" />
                              <span className="font-medium">Distance: {church.distance}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-brand-main" />
                              <span className="font-medium">Time: {church.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-brand">Church Map</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                View all church locations on the map and choose the one that suits you
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/d/u/0/embed?mid=1I1J1VWCrLSQc6iwlQkAegUrpr74rcwA&ehbc=2E312F&noprof=1" 
                width="100%" 
                height="760" 
                style={{ border: 0, marginTop: '-70px' }}
                loading="lazy"
                title="Map of Churches near Ktima Orion"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Plan Your Perfect Wedding or Baptism
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the church that suits you and contact us to organize your wonderful reception at Ktima Orion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/en/contact" className="button button4">
                CONTACT US
              </a>
              <a href="/en/contact" className="button button4">
                REQUEST INFORMATION
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
