import React from "react";
import styles from "./ExperienceBlock.module.scss";
import Logo from "../svgs/Logo";
import AdvantagesBlock from "../AdvBlock/AdvantagesBlock";
import QualityIcon from "@/app/[locale]/images/qIcon.jpg";
import ComplexIcon from "@/app/[locale]/images/cIcon.png";
import AIcon from "@/app/[locale]/images/AIcon.png";
import AnimatedGrowingText from "../animatedComponents/GrowText";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import SlideInBlur from "../animatedComponents/SideInBlur";
import AnimationRotateScroll from "../animatedComponents/AnimationRotateScroll";
import AnimatedOpacityText from "../animatedComponents/AnimatedOpacityText";
import FadeInScroll from "../animatedComponents/FadeInScroll";


const ExperienceBlock = () => {
  const {t,rich} = useFormattedTranslation('home');
  return (
    <>
    <div className="conteiner">


      <div className={styles.wrapper}>  
        <div className={styles.left_data}>
      
          <AnimatedOpacityText>
          <h1>
            {rich('years_of_experience')}
          </h1>
          </AnimatedOpacityText>
     
          <div className={`${styles.ninja} border-custom`}>
            <Logo />
            <p>       {rich('years_of_experience_text')}</p>
       
          </div>        
        
        </div>

        <div className={styles.right_data}>
        <FadeInScroll>
          <AdvantagesBlock
            icon={QualityIcon}
            title={t('block_title_1')}
            desc={t('block_text_1')}
          />     </FadeInScroll>
             <FadeInScroll>
          <AdvantagesBlock
            icon={ComplexIcon}
            title={t('block_title_2')}
            desc={t('block_text_2')}
          /></FadeInScroll>
            <FadeInScroll>
          <AdvantagesBlock
            icon={AIcon}
            title={t('block_title_3')}
            desc={t('block_text_3')}
          />
          </FadeInScroll>
        </div>
      </div>
      </div>
    </>
  );
};
export default ExperienceBlock;
