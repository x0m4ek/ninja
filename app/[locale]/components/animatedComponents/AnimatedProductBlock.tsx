import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedProductBlockProps = {
  children: React.ReactNode;
  isReversed?: boolean; // Пропс для контролю напрямку анімації
};

const AnimatedProductBlock: React.FC<AnimatedProductBlockProps> = ({ children, isReversed = false }) => {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blockElement = blockRef.current;

    if (blockElement) {
      gsap.fromTo(
        blockElement,
        {
          // Початковий стан: або зліва направо, або справа наліво
          x: isReversed ? "100%" : "-100%",
          opacity: 0,
          scale: 0.8,
          borderRadius: "0%", // Початковий стан border-radius
        },
        {
          x: "0%",
          opacity: 1,
          scale: 1,
          borderRadius: "20px", // Кінцевий стан border-radius
          duration: 1.5, // Тривалість анімації
          ease: "power4.out",
          scrollTrigger: {
            trigger: blockElement,
            start: "top 90%", // Анімація починається, коли блок потрапляє у видимість
            end: "bottom 60%",
            scrub: true, // Плавне відтворення анімації під час скролу
            toggleActions: "play reverse play reverse", // Анімація спрацьовує при скролі в обидва боки
          },
        }
      );
    }
  }, [isReversed]); // Додаємо залежність від isReversed

  return <div ref={blockRef}>{children}</div>;
};

export default AnimatedProductBlock;
