'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { homepageFaqs } from '@/data/homepage-faqs';
import { Hero } from '@/components/Hero';
import { Description } from '@/components/Description';
import { Features } from '@/components/Features';

// Lazy load non-critical components
const HomeGallery = lazy(() => import('@/components/HomeGallery').then(module => ({ default: module.HomeGallery })));
const Services = lazy(() => import('@/components/Services').then(module => ({ default: module.Services })));
const About = lazy(() => import('@/components/About').then(module => ({ default: module.About })));
const Churches = lazy(() => import('@/components/Churches').then(module => ({ default: module.Churches })));
const Testimonials = lazy(() => import('@/components/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('@/components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('@/components/Footer').then(module => ({ default: module.Footer })));
const Partners = lazy(() => import('@/components/Partners').then(module => ({ default: module.Partners })));
const BackToTop = lazy(() => import('@/components/BackToTop').then(module => ({ default: module.BackToTop })));
const ContactFAB = lazy(() => import('@/components/ContactFAB').then(module => ({ default: module.ContactFAB })));
const FAQ = lazy(() => import('@/components/FAQ').then(module => ({ default: module.FAQ })));
const CookieConsent = lazy(() => import('@/components/CookieConsent').then(module => ({ default: module.CookieConsent })));
const ScrollReveal = lazy(() => import('@/components/ScrollReveal').then(module => ({ default: module.ScrollReveal })));

const Index = () => {
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
        Μετάβαση στο περιεχόμενο
      </a>
      <Navigation isScrolled={isScrolled} isTransparent={true} />
      <main id="main">
        <Hero />
        <Description />
        <Features />
        {/* These stream in from the server, so the boundary needs no visible
            fallback — the previous one emitted a stray "Loading..." into the
            rendered HTML and shifted layout on hydration. */}
        <Suspense fallback={null}>
          <HomeGallery />
          <Services />
          <About />
          <Churches />
          <Testimonials />
          <FAQ items={[...homepageFaqs]} title="Συχνές ερωτήσεις" />
          {/* NearbyChurches is deliberately not rendered here: <Churches />
              above already lists the same five churches on this page. */}
          <Partners />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <BackToTop />
        <ContactFAB />
        <ScrollReveal />
        <CookieConsent />
      </Suspense>
    </div>
  );
};

export default Index;
