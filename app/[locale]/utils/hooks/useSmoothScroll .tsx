import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useSmoothScroll = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Елемент для обгортання всього додатку (наприклад, "body")
      const scrollContainer = document.querySelector('#smooth-scroll-container');

      // Налаштування ScrollTrigger
      gsap.to(scrollContainer, {
        y: -document.documentElement.scrollHeight,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: scrollContainer,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: true
        }
      });
    }
  }, []);
};
