import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import styles from "./ResultOfWork.module.scss";
import Stars from "../svgs/Stars";
import AppStoreButton from "../AppStoreButton/AppStoreButton";
type Props = {
  title: string | ReactNode;
  image: StaticImageData;
  tasks: ReactNode[];
  isReversed?:boolean,
};

const ResultOfWork: FC<Props> = ({ title, image, tasks, isReversed = false }) => {
  return (
    <>
      <div className="conteiner">
        <div className={`${styles.wrapper} ${isReversed ? styles.reversed : ""}`}>
          <div className={styles.left}>
            <h2>{title}</h2>
            <div className={styles.tasks}>
              {tasks.map((task, index) => (
                <>
                  <div className={styles.task} key={index}>
                    <Stars />
                    <p>{task}</p>
                  </div>
                </>
              ))}
            </div>
            <div className={styles.button}>
            <AppStoreButton 
            onClick={() => console.log('clicked')}
            text="App store"
            
            />
            </div>
          </div>
          <div className={styles.right}>
            <Image src={image} width={1000} height={1000} alt={title as string} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultOfWork;
