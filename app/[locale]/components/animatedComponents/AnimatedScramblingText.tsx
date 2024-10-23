import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type AnimatedScrambleTextProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedScrambleText: React.FC<AnimatedScrambleTextProps> = ({ children, className }) => {
  const scrambleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrambleRef.current) {
      const chars = "!@#$%^&*()_+{}|:<>?1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Символи для scramble

      const elements = Array.from(scrambleRef.current.querySelectorAll(".scramble-char")) as HTMLElement[];

      // Функція для scramble ефекту
      const scrambleEffect = (el: HTMLElement, originalText: string) => {
        let iteration = 0;
        const scrambleInterval = setInterval(() => {
          iteration++;
          el.textContent = originalText
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return char; // Повертаємо оригінальний символ
              }
              return chars[Math.floor(Math.random() * chars.length)]; // Випадковий символ
            })
            .join("");

          if (iteration >= originalText.length) {
            clearInterval(scrambleInterval); // Очищаємо інтервал після завершення
          }
        }, 50); // Частота зміни символів
      };

      // Запускаємо GSAP для кожного елемента
      elements.forEach((el, index) => {
        const originalText = el.textContent || ""; // Оригінальний текст
        el.textContent = ""; // Очищаємо текст перед анімацією

        gsap.to(el, {
          delay: index * 0.1, // Затримка для кожного символа
          onStart: () => scrambleEffect(el, originalText), // Запускаємо scramble
        });
      });
    }
  }, []);

  // Функція для обгортання тексту в <span> для кожного символа
  const wrapTextWithSpans = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="scramble-char">
        {char}
      </span>
    ));
  };

  return (
    <div ref={scrambleRef} className={`scramble-text-container ${className || ""}`}>
      {React.Children.map(children, (child) => {
        if (typeof child === "string") {
          // Якщо це просто текст
          return wrapTextWithSpans(child);
        }

        if (React.isValidElement(child) && typeof child.props.children === "string") {
          // Якщо це елемент React із текстом
          return React.cloneElement(child, {
            children: wrapTextWithSpans(child.props.children), // Обгортання тексту символами
          });
        }

        return child;
      })}
    </div>
  );
};

export default AnimatedScrambleText;
