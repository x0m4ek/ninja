"use client";
import React from "react";
import styles from "./CooperationBlock.module.scss";
import Image from "next/image";
import Icon from "@/app/[locale]/images/qIcon.jpg";
import Stars from "../svgs/Stars";
import BorderedButton from "../BorderedButton/BorderedButton";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import AnimatedTextScroll from "../animatedComponents/AnimatedTextScroll";
import BlurOnScroll from "../animatedComponents/SideInBlur";
import AnimationRotate from "../animatedComponents/AnimationRotate";
import AnimationRotateScroll from "../animatedComponents/AnimationRotateScroll";
import AnimatedOpacityText from "../animatedComponents/AnimatedOpacityText";
import AnimateParagraph from "../animatedComponents/AnimateParagraph";
import FadeInScroll from "../animatedComponents/FadeInScroll";

const CooperationBlock = () => {
  const {t} = useFormattedTranslation('home');
  return (
    <>

      <div className={`${styles.wrapper}`}>
        <div className={`${styles.circle} circle`}></div>
        <div className={`${styles.circle} circle`}></div>
        <div className="conteiner">

          <div className={styles.text}>
            <AnimatedOpacityText  className="text-center">
            <h2>{t('variants_title')}</h2></AnimatedOpacityText>
            <AnimateParagraph className="text-center">
            <p>
              {t('variant_text')}
            </p></AnimateParagraph>
          </div>

          <div className={styles.blocks}>
    
            <FadeInScroll className={styles.block}>
            
              <Image src={Icon} width={120} height={120} alt="Icon" />
              <div className={styles.top_data}>
                <div className={styles.package}>
                  <Stars />
                  <p>{t('package_1')}</p>
                </div>
                <h4>{t('package_1_title')}</h4>
                <p>
                {t('package_1_text')}
                </p>
              </div>
              <div className={styles.options}>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_1_task_1')}</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_1_task_2')}</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_1_task_3')}</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_1_task_4')}</p>
                </div>
              </div>
              <div className={styles.button}>
                <BorderedButton
                  text={t('package_1_button_text')}
                  onClick={() => console.log("clicked")}
                />
         
            </div>
            </FadeInScroll>
            <FadeInScroll className={styles.block}>
            
              <Image src={Icon} width={120} height={120} alt="Icon" />
              <div className={styles.top_data}>
                <div className={styles.package}>
                  <Stars />
                  <p>{t('package_2')}</p>
                </div>
                <h4>{t('package_2_title')}</h4>
                <p>
                {t('package_2_text')}
                </p>
              </div>
              <div className={styles.options}>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_2_task_1')}</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_2_task_2')}</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_2_task_3')}</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_2_task_4')}</p>
                </div>
              </div>
              <div className={styles.button}>
                <BorderedButton
                  text={t('package_2_button_text')}
                  onClick={() => console.log("clicked")}
                />
              </div>
            
            </FadeInScroll>
            <FadeInScroll className={styles.block}>
       
              <Image src={Icon} width={120} height={120} alt="Icon" />
              <div className={styles.top_data}>
                <div className={styles.package}>
                  <Stars />
                  <p>{t('package_3')}</p>
                </div>
                <h4>{t('package_3_title')}</h4>
                <p>
                {t('package_3_text')}
                </p>
              </div>
              <div className={styles.options}>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_3_task_1')}</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_3_task_2')}</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_3_task_3')}</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>{t('package_3_task_4')}</p>
                </div>
              </div>
              <div className={styles.button}>
                <BorderedButton
                  text={t('package_3_button_text')}
                  onClick={() => console.log("clicked")}
                />
              </div>
       
            </FadeInScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default CooperationBlock;
