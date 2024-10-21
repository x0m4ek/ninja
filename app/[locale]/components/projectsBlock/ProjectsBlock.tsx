import React from 'react';
import styles from './ProjectsBlock.module.scss'
import ProjectBlock from '../projectBlock/ProjectBlock';
import NinjaSushi from "@/app/[locale]/images/ninja-sushi.png";
import NinjaWok from "@/app/[locale]/images/ninja-wok.png";
import NinjaFit from "@/app/[locale]/images/ninja-fit.png";
import NinjaCasino from "@/app/[locale]/images/ninja-casino.png";
import NinjaWater from "@/app/[locale]/images/ninja-water.png";
import NinjaPizza from "@/app/[locale]/images/ninja-pizza.png";
import { StaticImageData } from 'next/image';
import { animatePageOut } from '@/animation';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export const projects : Project[] = [
  {
      icon:NinjaSushi,
      title:"Ninja Sushi",
      desc:"Преміум-доставка піци додому та в офіс.",
      url:"/sushi"
  },
  {
      icon:NinjaWok,
      title:"Ninja Wok",
      desc:"Сервіс доставки японської кухні з акцентом на свіжість і смак",
      url:"/wok"
  },
  {
      icon:NinjaPizza,
      title:"Ninja Pizza",
      desc:"Преміум-доставка піци додому та в офіс.",
      url:"/pizza"
  },
  {
      icon:NinjaFit,
      title:"Ninja Fit",
      desc:"Лічильник калорій, дієтолог, тренер та консультант з харчування",
      url:"/fit"
  },
  {
      icon:NinjaCasino,
      title:"Ninja Casino",
      desc:"Whitelabel рішення для власників  iGaming продуктів",
      url:"/casino"
  },
  {
      icon:NinjaWater,
      title:"Ninja Water Tracker ",
      desc:"Додаток для відстеження водного балансу",
      url:"/tracker"
  },
  ]
type Project = {
    icon:StaticImageData,
    title:string,
    desc:string,
    url:string,
}

const ProjectsBlock = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || "en";
  const router = useRouter();
  
  return (
    <>
    <div className={styles.projects_wrapper}>
  
    <div className={styles.projects_list}>
      {projects.map((project,index) => (
        <>
        <ProjectBlock 
        icon={project.icon}
        title={project.title}
        desc={project.desc}
        url={project.url}
        key={index}
        onClick={() => animatePageOut(`/${currentLocale}/${project.url}`, router)}

        />
        </>
      ))}
    </div>
    </div>
    </>
  )
}

export default ProjectsBlock