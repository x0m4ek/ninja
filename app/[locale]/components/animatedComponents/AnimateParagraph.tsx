import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AnimateParagraph.module.scss"; // Ваші стилі

gsap.registerPlugin(ScrollTrigger);

type AnimateParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimateParagraph: React.FC<AnimateParagraphProps> = ({ children, className }) => {
  const paragraphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      // Початковий стан
      gsap.set(paragraphRef.current, {
        autoAlpha: 0, // Початкова прозорість 0
      });

      // Анімація зміни прозорості
      gsap.to(paragraphRef.current, {
        autoAlpha: 1, // Прозорість змінюється до 100%
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current, // Триггер при скролі
          start: "top 85%", // Анімація починається, коли параграф на 85% видимий
          end: "bottom 60%", // Закінчується на 60%
          scrub: true, // Прив'язка анімації до скролу
          toggleActions: "play reverse play reverse", // Плавне зникнення при зворотньому скролі
        },
      });
    }
  }, []);

  return (
    <div ref={paragraphRef} className={`${styles.paragraph} ${className}`}>
      {children}
    </div>
  );
};

export default AnimateParagraph;
