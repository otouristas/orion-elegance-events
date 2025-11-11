import image1 from '@/assets/IMG_0116.jpg';
import image2 from '@/assets/IMG_0160.jpg';
import image3 from '@/assets/IMG_0173.jpg';
import image4 from '@/assets/IMG_0182.jpg';
import image5 from '@/assets/IMG_0185.jpg';
import image6 from '@/assets/IMG_0189.jpg';

export const HomeGalleryEn = () => {
  const galleryImages = [
    { src: image1, alt: 'Ktima Orion wedding venue - outdoor ceremony space' },
    { src: image2, alt: 'Ktima Orion - elegant garden setting with sea view' },
    { src: image3, alt: 'Ktima Orion reception area - decorated for celebration' },
    { src: image4, alt: 'Ktima Orion venue - evening ambiance with lighting' },
    { src: image5, alt: 'Ktima Orion - venue decorated for special events' },
    { src: image6, alt: 'Ktima Orion - scenic outdoor space for gatherings' },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-cream/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-brand">Discover Ktima Orion</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A magical environment combining luxury with nature
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-text/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
