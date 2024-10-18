import React from "react";
import styles from "./MoreProjects.module.scss";
import { projects } from "../projectsBlock/ProjectsBlock";
import Image from "next/image";
import ArrowButton from "../arrow/ArrowButton";
import Navigation from "../svgs/Navigation";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import { animatePageOut } from "@/animation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const MoreProjects = () => {
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = pathname.split('/')[1] || "en";
    const {rich} = useFormattedTranslation('sushi');
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
