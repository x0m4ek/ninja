import React, { FC, ReactNode } from "react";
import styles from "./ProblemsWeSolveBlock.module.scss";
import { StaticImageData } from "next/image";
import AdvantagesBlock from "../AdvBlock/AdvantagesBlock";

export type BlockSolve = {
  icon: StaticImageData;
  title: string;
  text: string;
};
type OwnProps = {
  title: ReactNode;
  text: ReactNode;
  blocks: BlockSolve[];
};

const ProblemsWeSolveBlock: FC<OwnProps> = ({ title, text, blocks }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.circle} circle`}></div>
        <div className={`${styles.circle} circle`}></div>
        <div className="conteiner">
            <div className={styles.text}>
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
            </div>
            <div className={styles.blocks}>
                {blocks.map((block,index) => (
                    <>
                    <div className={styles.block}>      <AdvantagesBlock 
                        title={block.title}
                        desc={block.text}
                        icon={block.icon}
                        key={index}
                        />  </div>
                      
                    </>
                ))}
         
            </div>
        </div>
      </div>
    </>
  );
};

export default ProblemsWeSolveBlock;
