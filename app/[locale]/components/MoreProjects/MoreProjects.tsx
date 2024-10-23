import React from "react";
import styles from "./MoreProjects.module.scss";
import Image from "next/image";
import ArrowButton from "../arrow/ArrowButton";
import Navigation from "../svgs/Navigation";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import { animatePageOut } from "@/animation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import NinjaSushi from "@/app/[locale]/images/ninja-sushi.png";
import NinjaWok from "@/app/[locale]/images/ninja-wok.png";
import NinjaFit from "@/app/[locale]/images/ninja-fit.png";
import NinjaCasino from "@/app/[locale]/images/ninja-casino.png";
import NinjaWater from "@/app/[locale]/images/ninja-water.png";
import NinjaPizza from "@/app/[locale]/images/ninja-pizza.png";
const MoreProjects = () => {
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = pathname.split('/')[1] || "en";
    const {rich} = useFormattedTranslation('sushi');
    const {t} = useFormattedTranslation('home')
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
            <div className={styles.top_items}>
            <h2>
                {rich('explore_more_projects')}
            </h2>
            <div className={styles.navigation}>
                <Navigation />
                <div className={styles.arrows}>
                  <ArrowButton onClick={() => console.log('ds')}/>
                  <ArrowButton onClick={() => console.log('ds')}/>
                </div>
              </div>
              </div>
              </div>
            <div className={styles.projects}>

   
          {projects.map((project, index) => (
            <>
              <div className={styles.project} key={index} onClick={() => animatePageOut(`/${currentLocale}/${project.url}`,router)}>
                <Image
                  src={project.icon}
                  width={64}
                  height={64}
                  alt={project.title}
                />
                <p>{project.title}</p>
                <span>{project.desc}</span>
                <div className={styles.button}>
                <ArrowButton onClick={() => console.log()} />
                </div>
          
              </div>
            </>
          ))}
        </div>
      
      </div>
    </>
  );
};

export default MoreProjects;
