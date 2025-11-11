import homeImage1 from '@/assets/home/DSC_7588.JPG';
import homeImage2 from '@/assets/home/DSC_7637.JPG';
import homeImage3 from '@/assets/home/DSC_7662.JPG';
import homeImage4 from '@/assets/home/DSC_7712.JPG';
import homeImage5 from '@/assets/home/DSC_7806.JPG';
import homeImage6 from '@/assets/home/DSC_7816.JPG';

export const HomeGalleryEn = () => {
  const galleryImages = [
    { src: homeImage1, alt: 'Ktima Orion - Event venue' },
    { src: homeImage2, alt: 'Ktima Orion - Wedding reception' },
    { src: homeImage3, alt: 'Ktima Orion - Wedding moment' },
    { src: homeImage4, alt: 'Ktima Orion - Event space' },
    { src: homeImage5, alt: 'Ktima Orion - Venue atmosphere' },
    { src: homeImage6, alt: 'Ktima Orion - Beautiful space' },
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
