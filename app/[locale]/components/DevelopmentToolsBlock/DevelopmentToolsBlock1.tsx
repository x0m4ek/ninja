import React from "react";
import styles from "./DevelopmentToolsBlock.module.scss";
import Swift from "../svgs/Swift";
import Figma from "../svgs/Figma";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import Ai from "../svgs/Ai";
import Php from "../svgs/Php";
import Appsflyer from "../svgs/Appsflyer";
import Firebase from "../svgs/Firebase";
import RevenueCat from "../svgs/RevenueCat";

const DevelopmentToolsBlock1 = () => {
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
              <Ai />
              <p>OpenAI</p>
            </div>
            <div className={styles.tool}>
              <Php />
              <p>PHP</p>
            </div>
            <div className={styles.tool}>
              <Swift />
              <p>Swift</p>
            </div>
            <div className={styles.tool}>
              <Figma />
              <p>Figma</p>
            </div>
            <div className={styles.tool}>
              <Appsflyer />
              <p>Appsflyer</p>
            </div>
            <div className={styles.tool}>
              <Firebase />
              <p>Firebase</p>
            </div>
            <div className={styles.tool}>
              <RevenueCat />
              <p>RevenueCat</p>
            </div>
           



          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentToolsBlock1;
