import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-[49] bg-brand-text hover:bg-brand-text/90 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group border-2 border-white/30"
      aria-label="Back to top"
      title="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1 stroke-[2.5]" />
    </button>
  );
};
