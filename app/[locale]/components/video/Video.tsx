'use client'
import React from "react";
import styles from "./Video.module.scss";
import BorderedButton from "../BorderedButton/BorderedButton";



const Video = () => {
  return (
    <>
      <div className={styles.video_wrapper}>
        <video src="/landing.mp4" loop muted autoPlay></video>
        <div className={styles.inside_conteiner}>
        <div className={styles.text_data}>
          <span>Розробка додатків будь-якої складності</span>
          <h1>Ефектні та ефективні <br />рішення від </h1>
          <p>
            Довірте нам реалізацію вашої ідеї, ми <br />створимо додаток, який вражає
            та працює на <br />результат
          </p>
        </div>
        <div className={styles.button}>
        <BorderedButton text="Розпочати" onClick={() => console.log('clicked')}/>
        </div>
       
        </div>
      
      </div>
    </>
  );
};

export default Video;
