import { useEffect } from 'react';

/**
 * Observes elements with the `reveal`, `reveal-left`, `reveal-right`, or
 * `reveal-scale` classes and adds `reveal-up` when they enter the viewport.
 * Creates the always-scrolling move-up-on-scroll effect across the site.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale',
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-up');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/**
 * Returns a parallax translateY based on the element's position relative to
 * the viewport. Use on decorative background layers for a 3D depth effect.
 */
export function useParallax(speed = 0.3) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>('[data-parallax]');
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);
}
