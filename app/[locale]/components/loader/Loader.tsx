import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Loader.module.scss';

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(`.${styles.loader}`, {
      duration: 0.5,
      height: "100%",
      ease: "power1.inOut",
    })
      .to(`.${styles.loader}`, {
        duration: 0.5,
        height: "0%",
        ease: "power1.inOut",
        delay: 0.5,
      });
  }, []);

  return <div className={styles.loader}></div>;
};

export default Loader;
