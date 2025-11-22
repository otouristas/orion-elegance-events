import { Camera } from 'lucide-react';

export const HomeGallery = () => {
  const galleryImages = [
    { src: "/arxiki/1.jpeg", alt: "Κτήμα Ωρίων - Εκδήλωση" },
    { src: "/arxiki/2.jpg", alt: "Κτήμα Ωρίων - Δεξίωση" },
    { src: "/arxiki/3.jpg", alt: "Κτήμα Ωρίων - Γαμήλια στιγμή" },
    { src: "/arxiki/4.jpg", alt: "Κτήμα Ωρίων - Εκδήλωση" },
    { src: "/arxiki/5.jpg", alt: "Κτήμα Ωρίων - Χώρος" },
    { src: "/arxiki/6.JPG", alt: "Κτήμα Ωρίων - Ατμόσφαιρα" },
    { src: "/arxiki/7.jpeg", alt: "Κτήμα Ωρίων - Γιορτή" },
    { src: "/arxiki/9.jpg", alt: "Κτήμα Ωρίων - Μαγευτικός χώρος" }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-champagne/30 to-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ανακαλύψτε το <span className="text-gradient-brand">Κτήμα Ωρίων</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ένα μαγευτικό περιβάλλον που συνδυάζει την πολυτέλεια με τη φύση
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={566}
                height={566}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

