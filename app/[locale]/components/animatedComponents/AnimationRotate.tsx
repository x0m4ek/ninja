import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type AnimatedBlockProps = {
  children: React.ReactNode;
};

const AnimationRotate: React.FC<AnimatedBlockProps> = ({ children }) => {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blockRef.current) {
      gsap.set(blockRef.current, { transformPerspective: 700, autoAlpha: 0, rotateY: -90, scale: 0.8 });

      gsap.to(blockRef.current, {
        rotateY: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5, // Затримка для запуску анімації після завантаження сторінки
      });
    }
  }, []);

  return (
    <div ref={blockRef}>
      {children}
    </div>
  );
};

export default AnimationRotate;
