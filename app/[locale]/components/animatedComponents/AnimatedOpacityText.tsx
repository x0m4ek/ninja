import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedTextScrollProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedOpacityText: React.FC<AnimatedTextScrollProps> = ({ children, className }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      // Використовуємо SplitType для розбиття тексту на слова та символи
      const typeSplit = new SplitType(textElement, {
        types: 'lines,words,chars',
        tagName: 'span'
      });

      // GSAP анімація для кожного слова з ScrollTrigger
      gsap.from(textElement.querySelectorAll(".word"), {
        opacity: 0.3,
        duration: 0.3,
        ease: "power3.in",
        stagger: 0.1,
        scrollTrigger: {
          trigger: textElement,
          start: "top 90%", // Початок анімації при скролі
          end: "bottom 20%", // Кінець анімації при скролі
          scrub: true, // Зв'язок між скролом і анімацією
        }
      });

      return () => {
        // Видаляємо розбиття тексту після видалення компонента
        typeSplit.revert();
      };
    }
  }, []);

  return (
    <div ref={textRef} className={`animated-text ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedOpacityText;
