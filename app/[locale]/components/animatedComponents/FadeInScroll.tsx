import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FadeInScroll.module.scss"; // Ваші стилі

gsap.registerPlugin(ScrollTrigger);

type FadeInScrollProps = {
  children: React.ReactNode;
  className?: string;
};

const FadeInScroll: React.FC<FadeInScrollProps> = ({ children, className }) => {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blockRef.current) {
      // Початковий стан елемента
      gsap.set(blockRef.current, {
        autoAlpha: 0, // Початкова прозорість
        y: 50, // Початковий зсув знизу
      });

      // Анімація появи при скролі
      gsap.to(blockRef.current, {
        autoAlpha: 1, // Прозорість 1 - елемент стає видимим
        y: 0, // Повернення на початкову позицію
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: blockRef.current, // Елемент, що триггериться при скролі
          start: "top 80%", // Анімація починається, коли елемент на 80% видимий
          end: "bottom 60%", // Закінчується на 60%
          scrub: true, // Прив'язка анімації до скролу
        },
      });
    }
  }, []);

  return (
    <div ref={blockRef} className={`${styles.wrapper} ${className}`}>
      {children}
    </div>
  );
};

export default FadeInScroll;
