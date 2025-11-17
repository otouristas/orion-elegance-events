import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { HeroEn } from '@/components/english/HeroEn';
import { DescriptionEn } from '@/components/english/DescriptionEn';
import { FeaturesEn } from '@/components/english/FeaturesEn';
import { HomeGalleryEn } from '@/components/english/HomeGalleryEn';
import { ServicesEn } from '@/components/english/ServicesEn';
import { AboutEn } from '@/components/english/AboutEn';
import { ChurchesEn } from '@/components/english/ChurchesEn';
import { TestimonialsEn } from '@/components/english/TestimonialsEn';
import { ContactEn } from '@/components/english/ContactEn';
import { FooterEn } from '@/components/english/FooterEn';
import { PartnersEn } from '@/components/english/PartnersEn';
import { BackToTop } from '@/components/BackToTop';
import { ContactFAB } from '@/components/ContactFAB';

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
        description="Wedding & baptism venue Keratea Athens. Sea view, 100+ parking, A/C halls. Near seaside chapels. 15+ yrs experience. Book your free tour!"
        canonical="/en"
        keywords="wedding venue keratea greece, baptism venue athens, event venue attica, corporate events athens, ktima orion, wedding venue near athens"
        lang="en"
      />
      <Navigation isScrolled={isScrolled} isTransparent={true} />
      <HeroEn />
      <DescriptionEn />
      <FeaturesEn />
      <HomeGalleryEn />
      <ServicesEn />
      <AboutEn />
      <ChurchesEn />
      <TestimonialsEn />
      <PartnersEn />
      <ContactEn />
      <FooterEn />
      <BackToTop />
      <ContactFAB />
    </div>
  );
};

export default IndexEn;
