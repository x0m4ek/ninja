import React from "react";
import styles from "./OurAdvantages.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import BorderedButton from "../BorderedButton/BorderedButton";
import AdvantagesBlock from "../AdvBlock/AdvantagesBlock";
import QualityIcon from "@/app/[locale]/images/qIcon.jpg";
import ComplexIcon from "@/app/[locale]/images/cIcon.png";
import AIcon from "@/app/[locale]/images/AIcon.png";

const OurAdvantages = () => {
  const { t } = useFormattedTranslation("whitelabel");
  return (
    <>
      <div className={styles.wrapper}>
        <div className="conteiner">


        <div className={`${styles.circle} circle`}></div>
        <div className={styles.content}>


        <div className={styles.left}>
          <div className={styles.sticky}>
          <h2>{t("our_advantages_title")}</h2>
          <div className={styles.button}>
            <BorderedButton
              text={t("our_adv_button")}
              onClick={() => console.log("clicked")}
            />
          </div>
          </div>
        </div>
        <div className={styles.right}>
          <AdvantagesBlock
            icon={QualityIcon}
            title={t("our_adv_block_title_1")}
            desc={t("our_adv_block_text_1")}
          />
          <AdvantagesBlock
            icon={AIcon}
            title={t("our_adv_block_title_2")}
            desc={t("our_adv_block_text_2")}
          />
          <AdvantagesBlock
            icon={AIcon}
            title={t("our_adv_block_title_3")}
            desc={t("our_adv_block_text_3")}
          />
          <AdvantagesBlock
            icon={ComplexIcon}
            title={t("our_adv_block_title_4")}
            desc={t("our_adv_block_text_4")}
          />
          <AdvantagesBlock
            icon={ComplexIcon}
            title={t("our_adv_block_title_5")}
            desc={t("our_adv_block_text_5")}
          />
          <AdvantagesBlock
            icon={ComplexIcon}
            title={t("our_adv_block_title_6")}
            desc={t("our_adv_block_text_6")}
          />
        </div>
      </div>        </div>
      </div>
    </>
  );
};

export default OurAdvantages;
