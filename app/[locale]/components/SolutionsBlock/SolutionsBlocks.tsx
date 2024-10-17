import React from "react";
import styles from "./SolutionsBlocks.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import Stars from "../svgs/Stars";
import BorderedButton from "../BorderedButton/BorderedButton";

function SolutionsBlocks() {
  const { t } = useFormattedTranslation("whitelabel");

  const itemsWhiteLabel = [
    {
      title: t("wl_solution_text_1"),
      text: t("wl_solution_title_1"),
    },
    {
      title: t("wl_solution_text_2"),
      text: t("wl_solution_title_2"),
    },
    {
      title: t("wl_solution_text_3"),
      text: t("wl_solution_title_3"),
    },
    {
      title: t("wl_solution_text_4"),
      text: t("wl_solution_title_4"),
    },
    {
      title: t("wl_solution_text_5"),
      text: t("wl_solution_title_5"),
    },
    {
      title: t("wl_solution_text_6"),
      text: t("wl_solution_title_6"),
    },
    {
      title: t("wl_solution_text_7"),
      text: t("wl_solution_title_7"),
    },
    {
      title: t("wl_solution_text_8"),
      text: t("wl_solution_title_8"),
    },
  ];

  const itemsFromZero = [
    {
      title: t("zero_solution_text_1"),
      text: t("zero_solution_title_1"),
    },
    {
      title: t("zero_solution_text_2"),
      text: t("zero_solution_title_2"),
    },
    {
      title: t("zero_solution_text_3"),
      text: t("zero_solution_title_3"),
    },
    {
      title: t("zero_solution_text_4"),
      text: t("zero_solution_title_4"),
    },
    {
      title: t("zero_solution_text_5"),
      text: t("zero_solution_title_5"),
    },
    {
      title: t("zero_solution_text_6"),
      text: t("zero_solution_title_6"),
    },
    {
      title: t("zero_solution_text_7"),
      text: t("zero_solution_title_7"),
    },
    {
      title: t("zero_solution_text_8"),
      text: t("zero_solution_title_8"),
    },
  ];

  return (
    <>
      <div className={styles.wrapper_vs}>
        <div className="conteiner">
          <div className={styles.text}>
            <h2>{t("from_zero_title")}</h2>
            <p>{t("from_zero_text")}</p>
          </div>
          <div className={styles.content}>
            <div className={styles.solution}>
              <div className={styles.solution_header}>
                <Stars />
                <p>{t("whitelabel_solution_title")}</p>
              </div>
              <div className={styles.items_wrapper}>
                <div className={styles.items}>
                  {itemsWhiteLabel.map((item, index) => (
                    <>
                      <div className={styles.item} key={index}>
                        <p>{item.title}</p>
                        <span>{item.text}</span>
                      </div>
                    </>
                  ))}
                </div>
                <div className={styles.button}>
                  <BorderedButton
                    text={t("our_adv_button")}
                    onClick={() => console.log("Clicked")}
                  />
                </div>
              </div>
            </div>

            <div className={styles.solution}>
              <div className={styles.solution_header}>

                <p>{t("zero_solution_title")}</p>
              </div>
              <div className={styles.items_wrapper}>
                <div className={styles.items}>
                  {itemsFromZero.map((item, index) => (
                    <>
                      <div className={styles.item} key={index}>
                        <p>{item.title}</p>
                        <span>{item.text}</span>
                      </div>
                    </>
                  ))}
                </div>
                <div className={styles.button}>
                  <BorderedButton
                    text={t("zero_solution_button_text")}
                    onClick={() => console.log("Clicked")}
                  />
                </div>
              </div>
            </div>    

          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionsBlocks;
