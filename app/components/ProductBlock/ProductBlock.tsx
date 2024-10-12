'use client'
import React, { FC, useState } from 'react';
import styles from "./ProductBlock.module.scss";
import Circle from '../svgs/Circle';
import ArrowUrl from '../arrow/ArrowUrl';
import Image from 'next/image';
import Ninja from "@/app/images/ninja.png";

type OwnProps = {
    title:string,
    desc:string,
    
}

const ProductBlock:FC<OwnProps> = ({title,desc}) => {
    const [hoverState ,setHoverState] = useState<boolean>(false);
  return (
    <>
    <div className={styles.product_wrapper} onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}>
        <Image 
        className={styles.hover_image}
        src={Ninja}
        width={300}
        height={300}
        alt='Ninja'

        />
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