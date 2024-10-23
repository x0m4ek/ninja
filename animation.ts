import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Функції для вимкнення та ввімкнення плавного скролу
const disableSmoothScroll = () => {
  const smoothScrollComponent = document.querySelector('.smooth-scroll-component');
  if (smoothScrollComponent && smoothScrollComponent.disableSmoothScroll) {
    smoothScrollComponent.disableSmoothScroll();
  }
};

const enableSmoothScroll = () => {
  const smoothScrollComponent = document.querySelector('.smooth-scroll-component');
  if (smoothScrollComponent && smoothScrollComponent.enableSmoothScroll) {
    smoothScrollComponent.enableSmoothScroll();
  }
};

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    disableSmoothScroll(); // Вимикаємо плавний скрол перед початком анімації

    const tl = gsap.timeline({
      onComplete: enableSmoothScroll, // Вмикаємо плавний скрол після завершення анімації
    });

    tl.set(transitionElement, {
      yPercent: 0,
    })
      .to(transitionElement, {
        yPercent: 100,
        duration: 0.8,
      })
      .to(
        transitionElement,
        {
          duration: 0.4,
        },
        "<"
      );
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById("transition-element");

  const currentPath = window.location.pathname;

  if (currentPath === href) {
    console.log("The user is already on this page, no animation required.");
    return;
  }

  if (animationWrapper) {
    disableSmoothScroll(); // Вимикаємо плавний скрол перед анімацією

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href); // Переходимо на нову сторінку
        enableSmoothScroll(); // Вмикаємо плавний скрол після завершення анімації
      },
    });

    tl.set(animationWrapper, {
      yPercent: -100,
    })
      .to(animationWrapper, {
        yPercent: 0,
        duration: 0.8,
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          duration: 0.4,
        },
        "<"
      );
  }
};
