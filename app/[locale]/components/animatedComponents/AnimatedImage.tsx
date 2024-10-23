import React, { useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedImageProps {
  imageSrc: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ imageSrc, alt, width, height }) => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgContainer = imgRef.current;

    gsap.fromTo(
      imgContainer,
      {
        rotateX: 0,
        rotateY: 0,
        skewY: 0, // Початковий стан
        scale: 1,
        filter: 'brightness(100%) contrast(100%) blur(0px)',
      },
      {
        rotateX: -10, // Створюємо 3D-нахил
        skewY: 15, // Додаємо вигин по осі Y
        scale: 1.1,
        filter: 'brightness(130%) contrast(130%) blur(2px)', // Посилюємо glow-ефект
        scrollTrigger: {
          trigger: imgContainer,
          start: 'top bottom', // Початок анімації
          end: 'bottom top', // Кінець анімації
          scrub: true, // Анімація синхронізується зі скролом
        },
      }
    );
  }, []);

  return (
    <div ref={imgRef} className="image-container">
      <Image src={imageSrc} width={width} height={height} alt={alt} objectFit="cover" />
    </div>
  );
};

export default AnimatedImage;
