'use client'
import React, { useEffect, useRef } from "react";
import styles from "./Video.module.scss";
import BorderedButton from "../BorderedButton/BorderedButton";
import gsap from "gsap";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import AnimatedBouncingText from "../animatedComponents/AnimatedBouncingText";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null); // Для контенту (текст, кнопка)
  const buttonRef = useRef<HTMLDivElement>(null); // Для кнопки
  const {t,rich} = useFormattedTranslation('home');

  useEffect(() => {
    // Анімація для відео
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 2, ease: "power4.out" } 
      );
    }

    // Анімація для контенту
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 1, transform:"none" }
      );
    }

    // Анімація для кнопки при завантаженні
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 50 }, // Починає знизу з прозорістю 0
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 1.8 } // Плавно піднімається і з'являється
      );
    }
  }, []);

  return (
    <div className={styles.video_wrapper}>
      <video ref={videoRef} src="/landing.mp4" loop muted autoPlay></video>
      <div className={styles.inside_conteiner}>
        <div className={styles.text_data} ref={contentRef}>
          <AnimatedBouncingText>
            <span className={styles.motto}>{t('small_text')}</span>
            <h1>{rich('video_title')}</h1>
            <p>
              {t('video_text')}
            </p>
          </AnimatedBouncingText>
        </div>
        <div className={styles.button} ref={buttonRef}>
          <BorderedButton text={t('start_button')} onClick={() => console.log("clicked")} />
        </div>
      </div>
    </div>
  );
};

export default Video;
