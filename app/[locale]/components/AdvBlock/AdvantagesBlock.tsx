import React, { FC } from 'react';
import styles from "./AdvantagesBlock.module.scss";
import Image, { StaticImageData } from 'next/image';
import AnimateParagraph from '../animatedComponents/AnimateParagraph';
import AnimatedOpacityText from "../animatedComponents/AnimatedOpacityText"
type OwnProps = {
    icon?:StaticImageData,
    title:string,
    desc:string,
    withNumber?:boolean,
    number?:string,
    key?:number,
}

const AdvantagesBlock:FC<OwnProps> = ({icon, title,desc, withNumber = false,number, key}) => {
  return (
    <>
        <div className={`${styles.block} border-custom`} key={key} >
          {withNumber ? <><div className={styles.number}>{number}</div></> :   <Image src={icon!} width={128} height={128}  alt="Icon" objectFit='cover'/> }
         
           <div className={styles.text_data}>
            <AnimateParagraph>
           <h3>{title}</h3>
           </AnimateParagraph>
           <AnimateParagraph><p>{desc}</p></AnimateParagraph>

           </div>
        
        </div>
    </>
  )
}

export default AdvantagesBlock