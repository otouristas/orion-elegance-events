'use client';

import { useEffect } from 'react';

/**
 * Reveals any element carrying `.reveal` as it scrolls into view.
 *
 * One observer is mounted for the whole page rather than a wrapper component
 * per section, so server components stay server components — they only need
 * the class name. Elements are unobserved once shown, and the whole effect is
 * skipped when the visitor prefers reduced motion (the stylesheet also pins
 * `.reveal` to its visible state in that case, so nothing is left hidden).
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const targets = document.querySelectorAll<HTMLElement>('.reveal');
    if (targets.length === 0) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
