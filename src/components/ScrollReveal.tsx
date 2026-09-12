'use client';

import { useEffect } from 'react';

/** Nothing may stay hidden longer than this, whatever else goes wrong. */
const FAILSAFE_MS = 1500;

/**
 * Reveals any element carrying `.reveal` as it scrolls into view.
 *
 * One observer is mounted for the whole page rather than a wrapper component
 * per section, so server components stay server components — they only need
 * the class name.
 *
 * Late-mounting content is the hard part and the reason for the MutationObserver.
 * On the homepage the sections below the fold are `React.lazy`, and this
 * component sits in a *different* Suspense boundary from them. When that
 * boundary resolved first, a single querySelectorAll on mount found none of the
 * lazy sections, so they were never observed and stayed at `opacity: 0`
 * permanently — a blank white band where the content should be. A one-shot scan
 * is not enough; anything added later has to be picked up too.
 *
 * The timeout is the backstop: if the observers are unavailable or something
 * else goes wrong, everything is shown rather than left invisible. Content
 * being visible without animation is a far better failure than content that
 * cannot be read at all.
 */
export function ScrollReveal() {
  useEffect(() => {
    const reveal = (el: Element) => el.classList.add('is-visible');
    const revealAll = () =>
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(reveal);

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    const observed = new WeakSet<Element>();
    const scan = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          io.observe(el);
        }
      });
    };

    scan();

    const mo =
      typeof MutationObserver !== 'undefined'
        ? new MutationObserver(scan)
        : undefined;
    mo?.observe(document.body, { childList: true, subtree: true });

    const failsafe = window.setTimeout(revealAll, FAILSAFE_MS);

    return () => {
      io.disconnect();
      mo?.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}
