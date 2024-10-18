import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import styles from "./TaskOfProjectBlock.module.scss";
import Stars from "../svgs/Stars";
type Props = {
  title: string | ReactNode;
  image: StaticImageData;
  tasks: string[];
  isReversed?:boolean,
};

const TaskOfProjectBlock: FC<Props> = ({ title, image, tasks, isReversed = false }) => {
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
          </div>
          <div className={styles.right}>
            <Image src={image} width={1000} height={1000} alt={title as string} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskOfProjectBlock;
