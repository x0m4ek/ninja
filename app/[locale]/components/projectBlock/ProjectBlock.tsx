'use client'
import React, { FC } from 'react';
import styles from "./ProjectBlock.module.scss";
import Image, { StaticImageData } from 'next/image';
import ArrowUrl from '../arrow/ArrowUrl';

type OwnProps = {
icon:StaticImageData,
title:string,
desc:string,
url:string,
}

const ProjectBlock:FC<OwnProps> = ({icon,title,desc,url}) => {
  return (
    <>
    <div className={styles.wrapper_block}>
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
                <ArrowUrl onClick={() => console.log(url)}/>    
            </div>
    </div>
    </>
  )
}

export default ProjectBlock