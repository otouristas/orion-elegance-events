import iconHome1 from '@/assets/icon-home1.png';
import iconHome3 from '@/assets/icon-home3.png';
import iconHome5 from '@/assets/icon-home5.png';

export const Features = () => {
  const features = [
    {
      icon: iconHome3,
      title: "KTIMA ORION",
      subtitle: "Έμπειρο & Ευγενικό Προσωπικό",
      description: "Με επαγγελματισμό και διακριτικότητα, το προσωπικό του κτήματος εξασφαλίζει ότι η μεγάλη σας μέρα θα κυλήσει ακριβώς όπως την ονειρευτήκατε."
    },
    {
      icon: iconHome5,
      title: "KTIMA ORION",
      subtitle: "Κοντά σε Γραφικά Εκκλησάκια",
      description: "Η προνομιακή τοποθεσία του κτήματος, δίπλα σε γραφικά παραθαλάσσια εκκλησάκια, προσφέρει μοναδική ευκολία και ατμόσφαιρα για την τέλεση του μυστηρίου σας."
    },
    {
      icon: iconHome1,
      title: "KTIMA ORION",
      subtitle: "Άνετοι & Κομψοί Χώροι",
      description: "Εσωτερική κομψότητα και εξωτερική μαγεία συνδυάζονται μοναδικά, προσφέροντας τον απόλυτο χώρο υποδοχής για την πιο ξεχωριστή σας ημέρα."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-8">
                <img 
                  src={feature.icon} 
                  alt={feature.subtitle}
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gradient-brand mb-6">
                {feature.subtitle}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
