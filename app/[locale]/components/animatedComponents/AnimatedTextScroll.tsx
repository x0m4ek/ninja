import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedTextScrollProps = {
  children: React.ReactNode;
  className?:string,
};

const AnimatedTextScroll: React.FC<AnimatedTextScrollProps> = ({ children,className }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      // Розбиваємо текст на слова
      const typeSplit = new SplitType(textElement, {
        types: "lines,words,chars",
        tagName: "span",
      });

      // Анімація для кожного слова
      gsap.fromTo(
        textElement.querySelectorAll(".word"),
        {
          y: "110%",
          opacity: 0,
          rotationZ: 10,
        },
        {
          y: "0%",
          opacity: 1,
          rotationZ: 0,
          duration: 0.35,
          ease: "none.inOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: textElement,
            start: "top 105%",
            end: "bottom 40%", 
            scrub: true, 
            toggleActions: "play reverse play reverse", // Анімація відбувається в обидва боки
          },
        }
      );

      return () => {

        typeSplit.revert();
      };
    }
  }, []); 

  return <div ref={textRef} className={`animated-text ${className}`}>{children}</div>;
};

export default AnimatedTextScroll;
