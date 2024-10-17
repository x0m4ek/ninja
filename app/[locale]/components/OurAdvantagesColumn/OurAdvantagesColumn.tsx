import React from "react";
import styles from "./OurAdvantagesColumn.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import BorderedButton from "../BorderedButton/BorderedButton";
import AdvantagesBlock from "../AdvBlock/AdvantagesBlock";

const OurAdvantagesColumn = () => {
  const { t, rich } = useFormattedTranslation("whitelabel");
  return (
    <>
      <div className={styles.wrapper}>
        <div className="conteiner">
          <div className={`${styles.circle} circle`}></div>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.sticky}>
                <h2>{rich("our_adv_title")}</h2>
                <p>{t("our_adv_text")}</p>
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
                withNumber
                number="1"
                title={t("our_adv_title_1")}
                desc={t("our_adv_text_1")}
              />
              <AdvantagesBlock
                withNumber
                number="2"
                title={t("our_adv_title_2")}
                desc={t("our_adv_text_2")}
              />
              <AdvantagesBlock
                withNumber
                number="3"
                title={t("our_adv_title_3")}
                desc={t("our_adv_text_3")}
              />
              <AdvantagesBlock
                withNumber
                number="4"
                title={t("our_adv_title_4")}
                desc={t("our_adv_text_4")}
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default OurAdvantagesColumn;
