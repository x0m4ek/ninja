import React, { FC } from 'react';
import styles from "./ArrowButton.module.scss";
import Arrow from '../svgs/Arrow';

type Props = {
    onClick:() => void;
}

const ArrowButton:FC<Props> = ({onClick}) => {
  return (
    <>
      <div className={styles.arrow} onClick={() => onClick()}>
        <Arrow />
    </div>
    </>
  )
}

export default ArrowButton