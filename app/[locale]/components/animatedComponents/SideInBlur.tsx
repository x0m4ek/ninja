import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type BlurOnScrollProps = {
  children: React.ReactNode;
  className?:string,
};

const BlurOnScroll: React.FC<BlurOnScrollProps> = ({ children,className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      // Анімація появи з блюром
      gsap.fromTo(
        container,
        {
          opacity: 0,
          filter: "blur(20px)", // Початковий стан - сильний блюр
        },
        {
          opacity: 1,
          filter: "blur(0px)", // Кінцевий стан - чітке зображення
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",  // Коли блок доходить до 80% екрану
            end: "bottom 60%", // Закінчення ефекту внизу
            scrub: true, // Плавне анімування на скролі
            toggleActions: "play reverse play reverse", // Повторюється під час скролу назад
          },
        }
      );
    }
  }, []);

  return <div ref={containerRef} className={`blur-on-scroll ${className}`}>{children}</div>;
};

export default BlurOnScroll;
