import { Camera } from 'lucide-react';
import homeImage1 from '@/assets/home/DSC_7588.JPG';
import homeImage2 from '@/assets/home/DSC_7637.JPG';
import homeImage3 from '@/assets/home/DSC_7662.JPG';
import homeImage4 from '@/assets/home/DSC_7712.JPG';
import homeImage5 from '@/assets/home/DSC_7806.JPG';
import homeImage6 from '@/assets/home/DSC_7816.JPG';
import homeImage7 from '@/assets/home/DSC_7828.JPG';
import homeImage8 from '@/assets/home/DSC_7859.JPG';

export const HomeGallery = () => {
  const galleryImages = [
    { src: homeImage1, alt: "Κτήμα Ωρίων - Εκδήλωση" },
    { src: homeImage2, alt: "Κτήμα Ωρίων - Δεξίωση" },
    { src: homeImage3, alt: "Κτήμα Ωρίων - Γαμήλια στιγμή" },
    { src: homeImage4, alt: "Κτήμα Ωρίων - Εκδήλωση" },
    { src: homeImage5, alt: "Κτήμα Ωρίων - Χώρος" },
    { src: homeImage6, alt: "Κτήμα Ωρίων - Ατμόσφαιρα" },
    { src: homeImage7, alt: "Κτήμα Ωρίων - Γιορτή" },
    { src: homeImage8, alt: "Κτήμα Ωρίων - Μαγευτικός χώρος" }
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

