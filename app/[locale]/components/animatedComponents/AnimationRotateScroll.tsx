import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AnimationRotateScroll.module.scss";

gsap.registerPlugin(ScrollTrigger);

type AnimatedBlockProps = {
  children: React.ReactNode;
  className?: string;
  isReversed?: boolean; // Додаємо пропс isReversed для контролю напрямку
};

const AnimationRotateScroll: React.FC<AnimatedBlockProps> = ({ children, className, isReversed = false }) => {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blockRef.current) {
      // Початковий стан обертання залежно від isReversed
      const initialRotateY = isReversed ? 90 : -90;
      const finalRotateY = 0;

      // Встановлення початкового стану
      gsap.set(blockRef.current, {
        transformPerspective: 700,
        autoAlpha: 0,
        rotateY: initialRotateY,
        scale: 0.8,
      });

      // Анімація при скролі з ScrollTrigger
      gsap.to(blockRef.current, {
        rotateY: finalRotateY,
        autoAlpha: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: blockRef.current, // елемент, що триггериться при скролі
          start: "top 80%", // анімація починається, коли блок в 80% видимості
          end: "bottom 60%", // закінчується на 60%
          scrub: true, // прив'язка анімації до скролу
          toggleActions: "play reverse play reverse", // повторення при скролі в обидва боки
        },
      });
    }
  }, [isReversed]); // Додаємо isReversed як залежність

  return <div ref={blockRef} className={`${styles.wrapper} ${className}`}>{children}</div>;
};

export default AnimationRotateScroll;
