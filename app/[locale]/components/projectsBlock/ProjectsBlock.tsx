import React from 'react';
import styles from './ProjectsBlock.module.scss';
import ProjectBlock from '../projectBlock/ProjectBlock';
import NinjaSushi from "@/app/[locale]/images/ninja-sushi.png";
import NinjaWok from "@/app/[locale]/images/ninja-wok.png";
import NinjaFit from "@/app/[locale]/images/ninja-fit.png";
import NinjaCasino from "@/app/[locale]/images/ninja-casino.png";
import NinjaWater from "@/app/[locale]/images/ninja-water.png";
import NinjaPizza from "@/app/[locale]/images/ninja-pizza.png";
import { StaticImageData } from 'next/image';
import { animatePageOut } from '@/animation';
import { usePathname, useRouter } from 'next/navigation';
import AnimationRotate from '../animatedComponents/AnimationRotate';
import useFormattedTranslation from '../../utils/hooks/useFormattedTranslation';


type Project = {
  icon: StaticImageData;
  title: string;
  desc: string;
  url: string;
};

const ProjectsBlock = () => {
  const {t,rich} = useFormattedTranslation('home');
const projects: Project[] = [
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
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || "en";
  const router = useRouter();
  

  return (
    <div className={styles.projects_wrapper}>
      <div className={styles.projects_list}>
        {projects.map((project, index) => (
          <AnimationRotate key={index}>
            <ProjectBlock
              icon={project.icon}
              title={project.title}
              desc={project.desc}
              url={project.url}
              onClick={() => animatePageOut(`/${currentLocale}/${project.url}`, router)}
            />
          </AnimationRotate>
        ))}
      </div>
    </div>
  );
};

export default ProjectsBlock;
