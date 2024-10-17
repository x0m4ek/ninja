"use client";
import React from "react";
import styles from "./whitelabel.module.scss";
import Stars from "../components/svgs/Stars";
import BorderedButton from "../components/BorderedButton/BorderedButton";
import AnimatedText from "../components/animatedComponents/AnimatedText";
import useFormattedTranslation from "../utils/hooks/useFormattedTranslation";
import FunctionalityBlock from "../components/FunctionalityBlock/FunctionalityBlock";
import UxBlock from "../components/UxBlock/UxBlock";
import MockUp from "@/app/[locale]/images/ux-mockup.png";
import DevelopingMockup from "@/app/[locale]/images/devoloping-mockup.png";
import ReleaseMockup from "@/app/[locale]/images/release-mockup.png";
import SupportMockup from "@/app/[locale]/images/support-mockup.png"
import AnalitycsBlock from "../components/analitycsBlock/AnalitycsBlock";
import OurAdvantages from "../components/OurAdvantages/OurAdvantages";
import WhitelabelMotoBlock from "../components/WhitelabelMotoBlock/WhitelabelMotoBlock";
import SolutionsBlocks from "../components/SolutionsBlock/SolutionsBlocks";
import OurAdvantagesColumn from "../components/OurAdvantagesColumn/OurAdvantagesColumn";
import AccordionSection from "../components/AccordionSection/AccordionSection";
const Whitelabel = () => {
  const { t, rich } = useFormattedTranslation("whitelabel");



  return (
    <>
      <div className="conteiner">
        <div className={`${styles.circle} circle`}></div>
        <div className={styles.wrapper}>
          <div className={styles.bordered}>
            <div className={styles.text_data}>
              <p>
                <Stars />
                {t("white_label_solution")}
              </p>
              <h1>{rich('white_label_title_h1')}</h1>
            </div>
            <div className={styles.button}>
              <BorderedButton
                text={t("white_label_button_text")}
                onClick={() => console.log("clicked")}
              />
            </div>
          </div>
          <div className={`${styles.image} border-custom`}>
            <div className={styles.img}></div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={`${styles.circle} circle`}></div>
        <div className={`${styles.circle} circle`}></div>
        <h3>{rich('white_label_about_title')}</h3>
        <AnimatedText startColor="rgba(154, 158, 167, 0.5)" color="#fff">{t("white_label_about_text")}</AnimatedText>
      </div>
      <FunctionalityBlock />
      <div className="conteiner">
      <div className={styles.wrapper_second}>
        <h1>Ваш шлях до власного брендованого iGaming App</h1>
      <UxBlock 
      mockUpImage={MockUp}
      titleKey="ux_title"
      contentBlocks={[
        { titleKey: "branding_title", textKey: "branding_text" },
        { titleKey: "improving_title", textKey: "improving_text" },
        { titleKey: "adaptation_title", textKey: "adaptation_text" },
        { titleKey: "individual_title", textKey: "individual_text" },
      ]}
      />
       <UxBlock 
      mockUpImage={DevelopingMockup}
      titleKey={'developing_title'}
      contentBlocks={[
        { titleKey: "technologies_title", textKey: "technologies_text" },
        { titleKey: "intergrations_title", textKey: "intergrations_text" },
        { titleKey: "flexibility_title", textKey: "flexibility_text" },
        { titleKey: "regulations_title", textKey: "regulations_text" },
      ]}
      isReversed
      />
       <UxBlock 
      mockUpImage={ReleaseMockup}
      titleKey={'release_title'}
      contentBlocks={[
        { titleKey: "fullcontrol_title", textKey: "fullcontrol_text" },
        { titleKey: "publication_title", textKey: "publication_text" },
        { titleKey: "localization_title", textKey: "localization_text" },
        { titleKey: "relationships_title", textKey: "relationships_text" },
      ]}
      />
       <UxBlock 
      mockUpImage={SupportMockup}
      titleKey={'support_title'}
      contentBlocks={[
        { titleKey: "stability_title", textKey: "stability_text" },
        { titleKey: "impovements_title", textKey: "impovements_text" },
        { titleKey: "new_features_title", textKey: "new_features_text" },
        { titleKey: "analytics_title", textKey: "analytics_text" },
      ]}
      isReversed
      />
      </div>
      <AnalitycsBlock />

      </div>
      <OurAdvantages />
      <WhitelabelMotoBlock />
      <SolutionsBlocks />
      <OurAdvantagesColumn />
      <AccordionSection />
    </>
  );
};

export default Whitelabel;
