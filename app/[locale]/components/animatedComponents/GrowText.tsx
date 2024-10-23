import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AnimatedGrowingText.scss";

gsap.registerPlugin(ScrollTrigger);

type AnimatedGrowingTextProps = {
  children: React.ReactNode;
};

const AnimatedGrowingText: React.FC<AnimatedGrowingTextProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Розбиваємо текст на лінії, слова і символи
      const typeSplit = new SplitType(container, {
        types: 'lines,words,chars', // Розбивка на лінії, слова і символи
        tagName: 'span',
      });

      // GSAP анімація для кожної лінії
      gsap.fromTo(
        container.querySelectorAll(".line"),
        {
          opacity: 0.3,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            start: "top center", // Початок анімації
            scrub: true, // Анімація на скроллі
          },
        }
      );
    }
  }, []);

  return <div ref={containerRef} className="animated-growing-text">{children}</div>;
};

export default AnimatedGrowingText;
