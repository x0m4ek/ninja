import React, { FC } from 'react';
import styles from "./AdvantagesBlock.module.scss";
import Image, { StaticImageData } from 'next/image';

type OwnProps = {
    icon:StaticImageData,
    title:string,
    desc:string,
}

const AdvantagesBlock:FC<OwnProps> = ({icon, title,desc}) => {
  return (
    <>
        <div className={`${styles.block} border-custom`}>
            <Image src={icon} width={128} height={128}  alt="Icon" objectFit='cover'/>
           <div className={styles.text_data}>
           <h3>{title}</h3>
           <p>{desc}</p>
           </div>
        
        </div>
    </>
  )
}

export default AdvantagesBlock