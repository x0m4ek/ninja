import React from "react";
import styles from "./DevelopmentToolsBlock.module.scss";
import Kubernet from "../svgs/Kubernet";
import GitLab from "../svgs/GitLab";
import Swift from "../svgs/Swift";
import C from "../svgs/C";
import Angular from "../svgs/Angular";
import Js from "../svgs/Js";
import DotNet from "../svgs/DotNet";
import Figma from "../svgs/Figma";
import Kotlin from "../svgs/Kotlin";
import Java from "../svgs/Java";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";

const DevelopmentToolsBlock = () => {
    const {rich} =  useFormattedTranslation("sushi");
  return (
    <>

        <div className={styles.wrapper}>
        <div className="conteiner">
            <h2>
                {rich('development_tools_title')}
            </h2>
          <div className={styles.tools}>
            <div className={styles.tool}>
              <Kubernet />
              <p>Kubernetes</p>
            </div>
            <div className={styles.tool}>
              <GitLab />
              <p>GitLab</p>
            </div>
            <div className={styles.tool}>
              <Swift />
              <p>Swift</p>
            </div>
            <div className={styles.tool}>
              <C />
              <p>Objective-C</p>
            </div>
            <div className={styles.tool}>
              <Angular />
              <p>Angular</p>
            </div>
            <div className={styles.tool}>
              <Js />
              <p>Javascript</p>
            </div>
            <div className={styles.tool}>
              <DotNet />
              <p>.NET</p>
            </div>
            <div className={styles.tool}>
              <Figma />
              <p>Figma</p>
            </div>
            <div className={styles.tool}>
              <Kotlin />
              <p>Kotlin</p>
            </div>
            <div className={styles.tool}>
              <Java />
              <p>Java</p>
            </div>
            



          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentToolsBlock;
