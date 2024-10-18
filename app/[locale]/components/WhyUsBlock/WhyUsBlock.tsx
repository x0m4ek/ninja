import React, { FC, ReactNode } from "react";
import styles from "./WhyUsBlock.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import AdvantagesBlock from "../AdvBlock/AdvantagesBlock";

type Block = {
    desc:string,
    title:string,

}
type OwnProps = {
    title:ReactNode,
    text:string,
    blocks:Block[],
}

const WhyUsBlock:FC<OwnProps> = ({title,text,blocks}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="conteiner">
          <div className={`${styles.circle} circle`}></div>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.sticky}>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
            <div className={styles.right}>
                {blocks.map((block,index) => (
                    <>
                     <AdvantagesBlock
                        withNumber
                        number={index + 1 as unknown as string}
                        title={block.title}
                        desc={block.desc}
                    />
                    </>
                ))}
             
             
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default WhyUsBlock;
