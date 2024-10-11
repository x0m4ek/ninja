import React from 'react';
import styles from './ProjectsBlock.module.scss'
import ProjectBlock from '../projectBlock/ProjectBlock';
import NinjaSushi from "@/app/images/ninja-sushi.png";
import NinjaWok from "@/app/images/ninja-wok.png";
import NinjaFit from "@/app/images/ninja-fit.png";
import NinjaCasino from "@/app/images/ninja-casino.png";
import NinjaWater from "@/app/images/ninja-water.png";
import NinjaPizza from "@/app/images/ninja-pizza.png";
import { StaticImageData } from 'next/image';

export const projects : Project[] = [
  {
      icon:NinjaSushi,
      title:"Ninja Sushi",
      desc:"Преміум-доставка піци додому та в офіс.",
      url:"/"
  },
  {
      icon:NinjaWok,
      title:"Ninja Wok",
      desc:"Сервіс доставки японської кухні з акцентом на свіжість і смак",
      url:"/"
  },
  {
      icon:NinjaPizza,
      title:"Ninja Pizza",
      desc:"Преміум-доставка піци додому та в офіс.",
      url:"/"
  },
  {
      icon:NinjaFit,
      title:"Ninja Fit",
      desc:"Лічильник калорій, дієтолог, тренер та консультант з харчування",
      url:"/"
  },
  {
      icon:NinjaCasino,
      title:"Ninja Casino",
      desc:"Whitelabel рішення для власників  iGaming продуктів",
      url:"/"
  },
  {
      icon:NinjaWater,
      title:"Ninja Water Tracker ",
      desc:"Додаток для відстеження водного балансу",
      url:"/"
  },
  ]
type Project = {
    icon:StaticImageData,
    title:string,
    desc:string,
    url:string,
}

const ProjectsBlock = () => {
  
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
        />
        </>
      ))}
    </div>
    </div>
    </>
  )
}

export default ProjectsBlock