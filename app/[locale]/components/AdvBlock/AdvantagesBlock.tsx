import React, { FC } from 'react';
import styles from "./AdvantagesBlock.module.scss";
import Image, { StaticImageData } from 'next/image';

type OwnProps = {
    icon?:StaticImageData,
    title:string,
    desc:string,
    withNumber?:boolean,
    number?:string,
}

const AdvantagesBlock:FC<OwnProps> = ({icon, title,desc, withNumber = false,number}) => {
  return (
    <>
        <div className={`${styles.block} border-custom`}>
          {withNumber ? <><div className={styles.number}>{number}</div></> :   <Image src={icon!} width={128} height={128}  alt="Icon" objectFit='cover'/> }
         
           <div className={styles.text_data}>
           <h3>{title}</h3>
           <p>{desc}</p>
           </div>
        
        </div>
    </>
  )
}

export default AdvantagesBlock