import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ViberButton } from '@/components/ViberButton';

interface LayoutProps {
  children: React.ReactNode;
  isTransparent?: boolean;
}

export const Layout = ({ children, isTransparent = false }: LayoutProps) => {
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
      <Navigation isScrolled={isScrolled} isTransparent={isTransparent} />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <ViberButton />
      <WhatsAppButton />
    </div>
  );
};
