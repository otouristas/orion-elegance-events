import { Star, Users, Calendar, Award } from 'lucide-react';

export const SocialProofEn = () => {
  const stats = [
    {
      icon: Calendar,
      value: "15+",
      label: "Years of Experience"
    },
    {
      icon: Users,
      value: "500+",
      label: "Successful Events Since 2008"
    },
    {
      icon: Award,
      value: "100%",
      label: "Exclusive Venue Use"
    },
    {
      icon: Star,
      value: "5.0",
      label: "Client Rating"
    }
  ];

  return (
    <section className="section-padding bg-brand-main/5">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-brand mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
