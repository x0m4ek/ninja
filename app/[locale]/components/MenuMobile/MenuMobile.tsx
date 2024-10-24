import React, { useState, useRef, useEffect } from 'react';
import styles from "./MenuMobile.module.scss";
import TransitionLink from '../Link/TransitionLink';
import useFormattedTranslation from '../../utils/hooks/useFormattedTranslation';
import { usePathname, useRouter } from 'next/navigation';
import ArrowDown from '../svgs/ArrowDown';
import Stars from '../svgs/Stars';
import { animatePageOut } from '@/animation';
import ProjectBlock from '../projectBlock/ProjectBlock';
import NinjaSushi from "@/app/[locale]/images/ninja-sushi.png";
import NinjaWok from "@/app/[locale]/images/ninja-wok.png";
import NinjaFit from "@/app/[locale]/images/ninja-fit.png";
import NinjaCasino from "@/app/[locale]/images/ninja-casino.png";
import NinjaWater from "@/app/[locale]/images/ninja-water.png";
import NinjaPizza from "@/app/[locale]/images/ninja-pizza.png";
import ProjectBlock1 from '../projectBlock/ProjectBlock1';

const MenuMobile = () => {
  const { t } = useFormattedTranslation('home');
  const { rich } = useFormattedTranslation('header');
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || "en";
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    {
      icon: NinjaSushi,
      title: "Ninja Sushi",
      desc: t('ninja_sushi'),
      url: "/sushi"
    },
    {
      icon: NinjaWok,
      title: "Ninja Wok",
      desc: t('ninja_wok'),
      url: "/wok"
    },
    {
      icon: NinjaPizza,
      title: "Ninja Pizza",
      desc: t('ninja_pizza'),
      url: "/pizza"
    },
    {
      icon: NinjaFit,
      title: "Ninja Fit",
      desc: t('ninja_fit'),
      url: "/fit"
    },
    {
      icon: NinjaCasino,
      title: "Ninja Casino",
      desc: t('ninja_casino'),
      url: "/casino"
    },
    {
      icon: NinjaWater,
      title: "Ninja Water Tracker",
      desc: t('ninja_tracker'),
      url: "/tracker"
    },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className="conteiner">
          <div className={`${styles.menu}`} data-lenis-prevent="">
            <ul>
              <li>
                <TransitionLink href={`/${currentLocale}`}>
                  {rich('menu_item_1')}
                </TransitionLink>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setIsOpen(!isOpen)} 
                  className={`${isOpen ? styles.active : ""}`}
                >
                  {rich('menu_item_2')}
                  <ArrowDown
                    className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    } ${isOpen ? 'active_svg' : ''}`}
                  />
                </a>
              </li>

            
              {isOpen && (
                <div className={styles.project_list}>
                  {projects.map((project, index) => (
                    <ProjectBlock1
                      key={index}
                      icon={project.icon}
                      title={project.title}
                      desc={project.desc}
                      url={project.url}
                      onClick={() => {
                        animatePageOut(`/${currentLocale}/${project.url}`, router);
                      }}
                    />
                  ))}
                </div>
              )}

              <li>
                <TransitionLink href={`/${currentLocale}/whitelabel`}>
                  <Stars />
                  {rich('menu_item_3')}
                </TransitionLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
