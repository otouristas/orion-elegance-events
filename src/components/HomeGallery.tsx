import { Camera } from 'lucide-react';

interface GalleryImage {
  readonly src: string;
  readonly alt: string;
}

export const HomeGallery = () => {
  const galleryImages: readonly GalleryImage[] = [
    { src: "/final-photos/arxiki/1.jpeg", alt: "Είσοδος Κτήμα Ωρίων φωτισμένη το βράδυ" },
    { src: "/final-photos/arxiki/2.jpeg", alt: "Κεντρικός κήπος Κτήμα Ωρίων" },
    { src: "/final-photos/arxiki/2.jpg", alt: "Στολισμένη δεξίωση στο Κτήμα Ωρίων" },
    { src: "/final-photos/arxiki/3.jpeg", alt: "Υπαίθριος χώρος εκδηλώσεων Κτήμα Ωρίων" },
    { src: "/final-photos/arxiki/IMG_0825.jpeg", alt: "Στολισμός τραπεζιού με φυσικά άνθη" },
    { src: "/final-photos/arxiki/IMG_0852.jpeg", alt: "Πανοραμική άποψη χώρου δεξίωσης" },
    { src: "/final-photos/arxiki/IMG_3429.jpeg", alt: "Λεπτομέρεια φωτισμού στον κήπο" },
    { src: "/final-photos/arxiki/3%20(2).jpeg", alt: "Διαμορφωμένος χώρος υποδοχής" }
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

