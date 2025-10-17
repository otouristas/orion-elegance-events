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
        title="Κτήμα Ωρίων Κερατέα | Γάμος, Βάπτιση, Εκκλησίες"
        description="Κτήμα Ωρίων Κερατέα: Ιδανικό κτήμα γάμου και βάπτισης με καταπράσινο χώρο δίπλα σε εκκλησίες. 15+ χρόνια εμπειρίας σε εκδηλώσεις. Δείτε αξιολογήσεις!"
        canonical="/"
        keywords="κτήμα ωρίων, κτήμα κερατέα, κτήμα γάμου κερατέα, κτήματα κερατέα, κερατέα εκκλησία, άγιος αλέξανδρος δασκαλείο κερατέας, κτήμα με εκκλησάκι, αξιολογήσεις"
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

export default Index;
