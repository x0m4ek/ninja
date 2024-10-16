import React from "react";
import styles from "./LandingBlock.module.scss";
import Video from "../video/Video";
import ProjectsBlock from "../projectsBlock/ProjectsBlock";

const LandingBlock = () => {
  return (
    <>
    <div className="conteiner  conteiner_header">


      <div className={styles.landing_wrapper}>
        <Video />
        <ProjectsBlock />
      </div>
      </div>
    </>
  );
};

export default LandingBlock;
