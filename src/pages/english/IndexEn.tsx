import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { HeroEn } from '@/components/english/HeroEn';
import { DescriptionEn } from '@/components/english/DescriptionEn';
import { FeaturesEn } from '@/components/english/FeaturesEn';
import { HomeGallery } from '@/components/HomeGallery';
import { ServicesEn } from '@/components/english/ServicesEn';
import { AboutEn } from '@/components/english/AboutEn';
import { ChurchesEn } from '@/components/english/ChurchesEn';
import { TestimonialsEn } from '@/components/english/TestimonialsEn';
import { ContactEn } from '@/components/english/ContactEn';
import { Footer } from '@/components/Footer';
import { Partners } from '@/components/Partners';

const IndexEn = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Ktima Orion Keratea – Wedding & Baptism Venue Athens | Event Venue Greece"
        description="Discover Ktima Orion in Keratea, Athens – ideal venue for weddings, baptisms, corporate events. Seaside chapels, large garden, ample parking. Book your visit today!"
        canonical="/en"
        keywords="wedding venue keratea greece, baptism venue athens, event venue attica, corporate events athens, ktima orion, wedding venue near athens"
        lang="en"
      />
      <Navigation isScrolled={isScrolled} isTransparent={true} />
      <HeroEn />
      <DescriptionEn />
      <FeaturesEn />
      <HomeGallery />
      <ServicesEn />
      <AboutEn />
      <ChurchesEn />
      <TestimonialsEn />
      <Partners />
      <ContactEn />
      <Footer />
    </div>
  );
};

export default IndexEn;
