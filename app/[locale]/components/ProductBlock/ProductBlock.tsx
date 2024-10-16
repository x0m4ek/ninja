'use client'
import React, { FC, useState } from 'react';
import styles from "./ProductBlock.module.scss";
import Circle from '../svgs/Circle';
import ArrowUrl from '../arrow/ArrowUrl';
import Image, { StaticImageData } from 'next/image';


type OwnProps = {
    title:string,
    desc:string,
    hoverImage:StaticImageData,
    mobileImage:StaticImageData,
}

const ProductBlock:FC<OwnProps> = ({title,desc,hoverImage,mobileImage}) => {
    const [hoverState ,setHoverState] = useState<boolean>(false);
  return (
    <>
    <div className={styles.product_wrapper} onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}>
        <Image 
        className={styles.hover_image}
        src={hoverImage}
        width={500}
        height={500}
        alt='Ninja'

        />
        <div className={styles.image_conteiner}>
        <Image
        className={styles.mobile_image} 
        src={mobileImage}
        width={1000}
        height={1000}
        alt='Ninja'
        
        />
        </div>

        <div className={styles.data}>
            <h3>
                {title}
            </h3>
            <Circle />
            <p>
                {desc}
            </p>
        </div>
        <div className={styles.arrow}>
            <ArrowUrl  onClick={() => console.log('Clicked')} isHovering={hoverState}/>
        </div>
    </div>
    </>
  )
}

export default ProductBlock