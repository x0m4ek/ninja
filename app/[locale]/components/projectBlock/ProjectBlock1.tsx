'use client'
import React, { FC } from 'react';
import styles from "./ProjectBlock1.module.scss";
import Image, { StaticImageData } from 'next/image';
import ArrowUrl from '../arrow/ArrowUrl';

type OwnProps = {
icon:StaticImageData,
title:string,
desc:string,
url:string,
onClick:() => void;
}

const ProjectBlock1:FC<OwnProps> = ({icon,title,desc,url,onClick}) => {
  return (
    <>
    <div className={styles.wrapper_block} onClick={() => onClick()}>
            <div className={styles.icon}>
                <Image src={icon} width={128} height={128} alt={title} />
            </div>
            <div className={styles.text_data}>
                <h3>
                    {title}
                </h3>
                <p>{desc}</p>
            </div>
            <div className={styles.arrow}>
                <ArrowUrl onClick={() => onClick()}/>    
            </div>
    </div>
    </>
  )
}

export default ProjectBlock1