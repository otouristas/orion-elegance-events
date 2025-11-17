export const HomeGalleryEn = () => {
  const galleryImages = [
    { src: "/arxiki/1.jpeg", alt: 'Ktima Orion - Event venue' },
    { src: "/arxiki/2.jpg", alt: 'Ktima Orion - Wedding reception' },
    { src: "/arxiki/3.jpg", alt: 'Ktima Orion - Wedding moment' },
    { src: "/arxiki/4.jpg", alt: 'Ktima Orion - Event space' },
    { src: "/arxiki/5.jpg", alt: 'Ktima Orion - Venue atmosphere' },
    { src: "/arxiki/6.JPG", alt: 'Ktima Orion - Celebration' },
    { src: "/arxiki/7.jpeg", alt: 'Ktima Orion - Beautiful space' },
    { src: "/arxiki/9.jpg", alt: 'Ktima Orion - Magical space' }
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
