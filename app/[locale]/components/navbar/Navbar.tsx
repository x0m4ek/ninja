'use client';
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./Navbar.module.scss";
import Logo from "../svgs/Logo";
import TransitionLink from "../Link/TransitionLink";
import MenuMobile from "../MenuMobile/MenuMobile";
import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/animation";
import ArrowDown from "../svgs/ArrowDown";
import Stars from "../svgs/Stars";
import Localization from "../localization/Localization";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import NinjaSushi from "@/app/[locale]/images/ninja-sushi.png";
import NinjaWok from "@/app/[locale]/images/ninja-wok.png";
import NinjaFit from "@/app/[locale]/images/ninja-fit.png";
import NinjaCasino from "@/app/[locale]/images/ninja-casino.png";
import NinjaWater from "@/app/[locale]/images/ninja-water.png";
import NinjaPizza from "@/app/[locale]/images/ninja-pizza.png";
import ProjectBlock from "../projectBlock/ProjectBlock";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null); // Реф для меню
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || "en";
  const router = useRouter();
  const { t } = useFormattedTranslation('home');
  const { rich } = useFormattedTranslation('header');

  const projects = [
    { icon: NinjaSushi, title: "Ninja Sushi", desc: t('ninja_sushi'), url: "/sushi" },
    { icon: NinjaWok, title: "Ninja Wok", desc: t('ninja_wok'), url: "/wok" },
    { icon: NinjaPizza, title: "Ninja Pizza", desc: t('ninja_pizza'), url: "/pizza" },
    { icon: NinjaFit, title: "Ninja Fit", desc: t('ninja_fit'), url: "/fit" },
    { icon: NinjaCasino, title: "Ninja Casino", desc: t('ninja_casino'), url: "/casino" },
    { icon: NinjaWater, title: "Ninja Water Tracker", desc: t('ninja_tracker'), url: "/tracker" }
  ];

  useEffect(() => {
    const menu = menuRef.current;
    if (menu) {
      if (isMenuOpen) {
        // Анімація появи меню зверху з ефектом масштабу і прозорості
        gsap.fromTo(menu, 
          {
            y: "-100%",  // Стартова позиція за межами екрану зверху
            opacity: 0,
            scale: 0.9  // Трохи зменшене для ефекту зростання
          },
          {
            y: "0%",     // Кінцева позиція - на екрані
            opacity: 1,  // Повна прозорість
            scale: 1,    // Повертаємо масштаб до 100%
            duration: 0.7, 
            ease: "power4.out", // Плавний ефект
            display: "block",
          });
        // Додаємо клас 'opened' для зміни фону хедера
        document.querySelector(`.${styles.navbar_wrapper}`)?.classList.add(styles.opened);
        // Сховати скрол сторінки
        document.body.style.overflow = 'hidden';
      } else {
        // Закриття меню з анімацією назад вгору
        gsap.to(menu, {
          y: "-100%", // Повертаємо назад за межі екрану вгору
          opacity: 0, // Зменшення прозорості
          scale: 0.9, // Трохи зменшення масштабу при закритті
          duration: 0.7,
          ease: "power4.in", // Плавне зникнення
          onComplete: () => {
            menu.style.display = "none"; // Приховуємо меню після анімації
          }
        });
        // Видаляємо клас 'opened' при закритті меню
        document.querySelector(`.${styles.navbar_wrapper}`)?.classList.remove(styles.opened);
        // Повернути скрол сторінки
        document.body.style.overflow = 'auto';
      }
    }
  }, [isMenuOpen]);

  const handleMouseEnter = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  } 
  const handleDropdownMouseEnter = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setIsOpen(true);
  };

  return (
    <>
      <div className={`${styles.navbar_wrapper} ${isMenuOpen ? styles.opened : ""}`}>
        <div className="conteiner">
          <div className={styles.content}>
            <div className={styles.logo_wrapper} onClick={() =>animatePageOut(`/${currentLocale}`,router)}>
              <Logo />
            </div>
            <div className={styles.menu_wrapper}>
              <ul>
                <li>
                  <TransitionLink href={`/${currentLocale}`}>{rich('menu_item_1')}</TransitionLink>
                </li>
                <Dropdown
                  isOpen={isOpen}
                  classNames={{
                    base: "flex-row ",
                    content: "bg-custom p-[32px] z-[999999999] pb-[16px] mt-[22px]",
                  }}
                >
                  <DropdownTrigger className="aria-expanded:opacity-100">
                    <li>
                      <a
                        href={`/${currentLocale}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`${isOpen ? styles.active : ""}`}
                      >
                        Приклади рішень <ArrowDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${isOpen ? 'active_svg' : ""}`} />
                      </a>
                    </li>
                  </DropdownTrigger>

                  <DropdownMenu
                    variant="flat"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    classNames={{
                      list: "colums-c-2 block colums-c-gap-16  max-w-[980px]",
                      base: "p-[0px]",
                    }}
                  >
                    {projects.map((project, index) => (
                      <DropdownItem
                        key={index}
                        className={`flex items-center no-hover p-0 px-0 grow w-auto mb-[16px]`}
                      >
                        <ProjectBlock
                          icon={project.icon}
                          title={project.title}
                          desc={project.desc}
                          url={project.url}
                          onClick={() => {
                            animatePageOut(`/${currentLocale}/${project.url}`, router)
                            setIsOpen(false)
                          }}
                        />
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <li>
                  <TransitionLink href={`/${currentLocale}/whitelabel`} className={pathname.includes("whitelabel") ? styles.active : ""}>
                    <Stars />
                    {rich('menu_item_3')}
                  </TransitionLink>
                </li>
              </ul>
            </div>
            <Localization />
            <div className={styles.mobile_menu}>
              {/* Перемикання іконки при відкритті/закритті */}
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {!isMenuOpen ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 3.75C1.5 3.375 1.82812 3 2.25 3H21.75C22.125 3 22.5 3.375 22.5 3.75C22.5 4.17188 22.125 4.5 21.75 4.5H2.25C1.82812 4.5 1.5 4.17188 1.5 3.75ZM1.5 11.25C1.5 10.875 1.82812 10.5 2.25 10.5H21.75C22.125 10.5 22.5 10.875 22.5 11.25C22.5 11.6719 22.125 12 21.75 12H2.25C1.82812 12 1.5 11.6719 1.5 11.25ZM22.5 18.75C22.5 19.1719 22.125 19.5 21.75 19.5H2.25C1.82812 19.5 1.5 19.1719 1.5 18.75C1.5 18.375 1.82812 18 2.25 18H21.75C22.125 18 22.5 18.375 22.5 18.75Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1875 1.73438C21.4688 1.45312 21.9844 1.45312 22.2656 1.73438C22.5469 2.01562 22.5469 2.53125 22.2656 2.8125L13.0312 12L22.2656 21.2344C22.5469 21.5156 22.5469 22.0312 22.2656 22.3125C21.9844 22.5938 21.4688 22.5938 21.1875 22.3125L12 13.0781L2.76562 22.3125C2.48438 22.5938 1.96875 22.5938 1.6875 22.3125C1.40625 22.0312 1.40625 21.5156 1.6875 21.2344L10.9219 12L1.6875 2.8125C1.40625 2.53125 1.40625 2.01562 1.6875 1.73438C1.96875 1.45312 2.48438 1.45312 2.76562 1.73438L12 10.9688L21.1875 1.73438Z"
                      fill="#FFA100"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        <div ref={menuRef} className={styles.menu_container} style={{ transform: "translateY(-100%)", opacity: 0 }}>
          <MenuMobile />
        </div>
      </div>
    </>
  );
};

export default Navbar;
