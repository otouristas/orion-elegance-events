import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Description } from '@/components/Description';
import { Features } from '@/components/Features';
import { HomeGallery } from '@/components/HomeGallery';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Churches } from '@/components/Churches';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
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
      <Hero />
      <Description />
      <Features />
      <HomeGallery />
      <Services />
      <About />
      <Churches />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default IndexEn;
