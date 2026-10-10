'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run in browser with IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    // Elements to automatically animate with scroll reveal
    const targetSelectors = [
      '.reveal-on-scroll',
      '.arch-card',
      '.specCard',
      '.serviceStripe',
      '.packageCard',
      '.editorialQuote',
    ].join(', ');

    const elements = document.querySelectorAll<HTMLElement>(targetSelectors);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('is-revealed');
            // Unobserve once revealed to save resources
            obs.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12,
      }
    );

    elements.forEach((el, index) => {
      // Add initial state if not already revealed
      if (!el.classList.contains('is-revealed')) {
        el.classList.add('reveal-init');
        // If element doesn't have an explicit delay, stagger based on sibling index in its parent
        const parent = el.parentElement;
        if (parent && parent.children.length > 1) {
          const childIndex = Array.prototype.indexOf.call(parent.children, el);
          const delayMs = (childIndex % 4) * 110;
          el.style.setProperty('--reveal-delay', `${delayMs}ms`);
        }
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
