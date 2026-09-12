'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ContactFAB } from '@/components/ContactFAB';
import { CookieConsent } from '@/components/CookieConsent';
import { CookieConsentEn } from '@/components/english/CookieConsentEn';
import { ScrollReveal } from '@/components/ScrollReveal';

interface LayoutProps {
  children: React.ReactNode;
  isTransparent?: boolean;
  lang?: 'el' | 'en';
}

export const Layout = ({ children, isTransparent = false, lang = 'el' }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-text focus:px-5 focus:py-3 focus:text-sm focus:text-white"
      >
        {lang === 'en' ? 'Skip to content' : 'Μετάβαση στο περιεχόμενο'}
      </a>
      <Navigation isScrolled={isScrolled} isTransparent={isTransparent} />
      <main id="main">{children}</main>
      <Footer />
      <BackToTop />
      <ContactFAB />
      <ScrollReveal />
      {lang === 'en' ? <CookieConsentEn /> : <CookieConsent />}
    </div>
  );
};
