import Image, { StaticImageData } from 'next/image'
import React, { FC, ReactNode } from 'react'
import styles from "./FreeForAllBlock.module.scss"
import useFormattedTranslation from '../../utils/hooks/useFormattedTranslation'
import AnimatedText from '../animatedComponents/AnimatedText'
type Props = {
    title:ReactNode,
    text:string,
    banner:StaticImageData,
}

const FreeForAllBlock:FC<Props> = ({title,text,banner}) => {
    return (
        <>
          <div className={styles.wrapper}>
            <div className={`${styles.circle} circle`}></div>
            
            <div className="conteiner">
    
                <div className={styles.top_content}>
                    <h2>
                        {title}
                    </h2>
                    <AnimatedText startColor='#9A9EA780' color='#ffffff'>  
                        {text} 
                    </AnimatedText>
                  
                </div>
                <div className={styles.banner}>
                <Image 
                src={banner}
                width={1500}
                height={1000}
                alt="FreForAll banner"
                />
                </div>
            </div>
          </div>
        </>
      );
}

export default FreeForAllBlock