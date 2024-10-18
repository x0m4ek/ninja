import React, { FC, ReactNode } from "react";
import styles from "./ShowcaseBlock.module.scss";
import Image, { StaticImageData } from "next/image";

export type Block = {
  img: StaticImageData;
  title: string;
  text: string;
};
type OwnProps = {
  title: ReactNode;
  blocks: Block[];
};

const ShowcaseBlock: FC<OwnProps> = ({ title, blocks }) => {
  return (
    <>
      <div className={styles.wrapper_showcase}>
        <div className="conteiner">

   
        <div className={`${styles.circle} circle`}>

        </div>
        <div className={`${styles.circle} circle`}>`</div>
        <h2>{title}</h2>
        <div className={styles.blocks}>
          {blocks.map((block, index) => (
            <>
              <div className={styles.block} key={index}>
                <Image  src={block.img} width={1000} height={1000} alt={block.title as string} />
                <p>
                    {block.title}
                </p>
                <span>
                    {block.text}
                </span>
              </div>
            </>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default ShowcaseBlock;
