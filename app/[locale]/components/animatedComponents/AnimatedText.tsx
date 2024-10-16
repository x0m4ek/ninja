"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./animatedText.module.scss";

type AnimatedTextProps = {
  children: React.ReactNode;
  color?: string; // Колір, до якого буде змінюватися текст
  start?: string; // Початкова точка для ScrollTrigger
  end?: string; // Кінцева точка для ScrollTrigger
  className?:string,
  startColor:string,
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  color = "#ffa100", // За замовчуванням анімується до цього кольору
  start = "top 80%",
  end = "bottom 20%",
  startColor,
  className,
}) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (textRef.current) {
      // Розбиваємо текст на символи
      const textElement = textRef.current;
      const textContent = textElement.textContent ?? "";
      textElement.innerHTML = textContent
        .split("")
        .map((char) => `<span class="${styles.char}">${char}</span>`)
        .join("");

      const chars = textElement.querySelectorAll(`.${styles.char}`);

      // Анімація символів під час прокручування
      gsap.timeline({
        scrollTrigger: {
          trigger: textElement,
          start: start,
          end: end,
          scrub: 0.75,
        },
      }).fromTo(
        chars,
        { color: startColor}, // Початковий колір символів
        {
          color: color, // Колір після анімації
          stagger: 0.05,
          duration: 1,
          ease: "power1.inOut",
        }
      );
    }
  }, [children, color, start, end]);

  return <p ref={textRef} className={className}>{children}</p>;
};

export default AnimatedText;
