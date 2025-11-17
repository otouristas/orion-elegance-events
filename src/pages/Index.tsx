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
import { BackToTop } from '@/components/BackToTop';
import { ContactFAB } from '@/components/ContactFAB';

const Index = () => {
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
        title="Κτήμα Ωρίων – Κτήμα γάμου & βάπτισης στην Κερατέα Αττικής | Wedding & Event Venue"
        description="Κτήμα γάμου & βάπτισης Κερατέα Αττική. Θέα θάλασσα, parking 100+ θέσεων, κλιματισμός. Κοντά παραθαλάσσια εκκλησάκια. Κλείστε επίσκεψη!"
        canonical="/"
        keywords="κτήμα ωρίων, κτήμα κερατέα, κτήμα γάμου κερατέα, κτήματα κερατέα, γάμος κερατέα, βάπτιση κερατέα, εκκλησίες γάμου κερατέα, χώρος δεξιώσεων κερατέα, άγιος αλέξανδρος δασκαλείο, wedding venue keratea"
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
      <BackToTop />
      <ContactFAB />
    </div>
  );
};

export default Index;
