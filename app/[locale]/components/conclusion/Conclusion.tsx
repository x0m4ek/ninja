import React, { FC, ReactNode } from 'react'
import styles from "./Conclusion.module.scss";
import Image, { StaticImageData } from 'next/image';
import AppreciateButton from '../AppreciateButton/AppreciateButton';
type Props = {
    img:StaticImageData,
    title:string,
    text:string | ReactNode,
    evaluations:ReactNode,

}

const Conclusion:FC<Props> = ({text,title,evaluations,img}) => {
  return (
    <>
    <div className="conteiner">


    <div className={styles.wrapper}>
        <div className={styles.left}>
        <Image src={img} width={800} height={800} alt={title as string} />
        </div>    
            <div className={styles.right}>
                <div className={styles.text}>
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
                </div>
                <div className={styles.buttons}>
                    <AppreciateButton
                    onClick={() => console.log('Clicked')}
                    />
                    <p className={styles.rating}>{evaluations}</p>
                </div>
                
            </div>
    </div>    </div></>
  )
}

export default Conclusion