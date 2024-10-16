import React from "react";
import styles from "./AnalitycsBlock.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import Icon1 from "@/app/[locale]/images/icon1.png";
import Icon2 from "@/app/[locale]/images/icon2.png";
import Icon3 from "@/app/[locale]/images/icon3.png";
import Image from "next/image";
import ArrowUrl from "../arrow/ArrowUrl";
import Slider from "../svgs/Slider";

const AnalitycsBlock = () => {
  const { t, rich } = useFormattedTranslation("whitelabel");

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h3>{rich("analitycs_section_title")}</h3>
          <p>{rich("analitycs_section_text")}</p>
        </div>

        <div className={styles.blocks}>
          <div className={styles.block}>
            <div className={styles.top_items}>
              <Image src={Icon1} width={200} height={200} alt="Icon" />
              <ArrowUrl onClick={() => console.log("Clicked")} />
            </div>
            <div className={styles.text_items}>
              <h5>01.</h5>
              <h6>{t("financial_analitycs_title")}</h6>
              <p>{t("financial_analitycs_text_1")}</p>
              <span>{t("financial_analitycs_text_2")}</span>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.top_items}>
              <Image src={Icon2} width={200} height={200} alt="Icon" />
              <ArrowUrl onClick={() => console.log("Clicked")} />
            </div>
            <div className={styles.text_items}>
              <h5>02.</h5>
              <h6>{t("sales_analitycs_title")}</h6>
              <p>{t("sales_analitycs_text_1")}</p>
              <span>{t("sales_analitycs_text_2")}</span>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.top_items}>
              <Image src={Icon3} width={200} height={200} alt="Icon" />
              <ArrowUrl onClick={() => console.log("Clicked")} />
            </div>
            <div className={styles.text_items}>
              <h5>03.</h5>
              <h6>{t("retention_customers_title")}</h6>
              <p>{t("retention_customers_text_1")}</p>
              <span>{t("retention_customers_text_2")}</span>
            </div>
          </div>


        </div>
        <div className={styles.slider}>   
        <Slider />
        </div>
   
      </div>
    </>
  );
};

export default AnalitycsBlock;
