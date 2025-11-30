import { ClickableImage } from './ImageLightbox';

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
            <ClickableImage
              key={index}
              src={image.src}
              alt={image.alt}
              images={galleryImages}
              index={index}
              className="w-full h-full object-cover aspect-square rounded-lg shadow-lg hover:shadow-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

