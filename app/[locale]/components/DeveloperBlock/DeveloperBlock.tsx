import React, { FC } from 'react';
import styles from "./DeveloperBlock.module.scss";
import Image, { StaticImageData } from 'next/image';

type OwnProps = {
    image:StaticImageData,
    desc:string,
    className?:string
}

const DeveloperBlock:FC<OwnProps> = ({image,desc,className}) => {
  return (
    <>
    <div className={`${styles.wrapper} border-custom`}>
        <Image src={image} width={285} height={300}  alt='Developer Photo' objectFit='fit'/>
        <p> {desc}</p>
    </div>
    </>
  )
}

export default DeveloperBlock