import React, { useEffect, useRef, useState } from "react";
import styles from "./AboutCrmBlock.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import gsap from "gsap";
import SlideImage1 from "@/app/[locale]/images/slide-1.png";
import SlideImage2 from "@/app/[locale]/images/slide-2.png";
import SlideImage3 from "@/app/[locale]/images/slide-3.png";
import SlideImage4 from "@/app/[locale]/images/slide-4.png";
import SlideImage5 from "@/app/[locale]/images/slide-5.png";
import SlideImage6 from "@/app/[locale]/images/slide-6.png";
import SlideImage7 from "@/app/[locale]/images/slide-7.png";
import SlideImage8 from "@/app/[locale]/images/slide-8.png";
import Image from "next/image";
import Slider from "../svgs/Slider";
import { useMediaQuery } from 'react-responsive'
const AboutCrmBlock = () => {
  const { t, rich } = useFormattedTranslation("sushi");
  const isMobile = useMediaQuery({ query: '(max-width: 786px)' })
  const slides = [
    { text: rich("crm_slide_1"), image: SlideImage1 },
    { text: rich("crm_slide_2"), image: SlideImage2 },
    { text: rich("crm_slide_3"), image: SlideImage3 },
    { text: rich("crm_slide_4"), image: SlideImage4 },
    { text: rich("crm_slide_5"), image: SlideImage5 },
    { text: rich("crm_slide_6"), image: SlideImage6 },
    { text: rich("crm_slide_7"), image: SlideImage7 },
    { text: rich("crm_slide_8"), image: SlideImage8 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); 
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 10000);

    return () => clearInterval(interval); 
  }, [currentSlide]);

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlide);

    if (sliderRef.current) {
        if(isMobile) {
            gsap.to(sliderRef.current, {
                x: -nextSlide * 100 + "%", // Зміщення на 80% ширини одного слайда
                duration: 0.5,
                ease: "power1.inOut",
              });
        }
        }
        else {
      gsap.to(sliderRef.current, {
        x: -nextSlide * 80 + "%", // Зміщення на 80% ширини одного слайда
        duration: 0.5,
        ease: "power1.inOut",
      });
      
    }
  };

  const goToPrevSlide = () => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevSlide);

    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: -prevSlide * 80 + "%", // Зміщення на 80% ширини одного слайда
        duration: 1,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className="conteiner">
        <div className={styles.text}>
          <h2>{rich("crm_title")}</h2>
          <p>{t("crm_text")}</p>
        </div>
 

      <div className={styles.slider}>
        <div className={styles.sliderTrack} ref={sliderRef}>
          {slides.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <Image height={1800} width={2000} src={slide.image} alt={`Slide ${index}`} />
              <span>{index + 1}</span>
              <p>{slide.text}</p>
            </div>
          ))}
        </div>

    
    </div>
    <div className={styles.nav}>
    <Slider />
    </div>

    </div>
 
    </div>
  );
};

export default AboutCrmBlock;
