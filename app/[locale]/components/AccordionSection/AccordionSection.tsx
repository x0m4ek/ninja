import React from "react";
import styles from "./AccordionSection.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import BorderedButton from "../BorderedButton/BorderedButton";
import { Accordion, AccordionItem } from "@nextui-org/react";
import PlusIcon from "../svgs/PlusIcon";
import MunisIcon from "../svgs/MunisIcon";

const AccordionSection = () => {
  const { t, rich } = useFormattedTranslation("whitelabel");
 
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>{rich("title_accordion")}</h2>
          <p>{t("text_accordion")}</p>
          <div className={styles.button}>
            <BorderedButton
              text={t("button_accordion")}
              onClick={() => console.log("Clicked")}
            />
          </div>
        </div>
        <div className={styles.right}>
          <Accordion>
            <AccordionItem
              key="anchor1"
              aria-label="Anchor1"
              indicator={({ isOpen }) =>
                isOpen ? <MunisIcon /> : <PlusIcon />
              }
              title={t("accordion_title_1")}
              className="accordion-item"
            >
              <p className="accordion-content">{t("accordion_text_1")}</p>
            </AccordionItem>
            <AccordionItem
              key="igaming"
              aria-label="igaming"
             indicator={({ isOpen }) =>
                isOpen ? <MunisIcon /> : <PlusIcon />
              }
              title={t("accordion_title_2")}
              className="accordion-item"
              
            >
              <p className="accordion-content">{t("accordion_text_1")}</p>
            </AccordionItem>
            <AccordionItem
              key="intergration"
              aria-label="intergration"
             indicator={({ isOpen }) =>
                isOpen ? <MunisIcon /> : <PlusIcon />
              }
              title={t("accordion_title_3")}
              className="accordion-item"
              
            >
              <p className="accordion-content">{t("accordion_text_1")}</p>
            </AccordionItem>
            <AccordionItem
              key="security"
              aria-label="security"
             indicator={({ isOpen }) =>
                isOpen ? <MunisIcon /> : <PlusIcon />
              }
              title={t("accordion_title_4")}
              className="accordion-item"
              
            >
              <p className="accordion-content">{t("accordion_text_1")}</p>
            </AccordionItem>
              <AccordionItem
              key="func"
              aria-label="func"
             indicator={({ isOpen }) =>
                isOpen ? <MunisIcon /> : <PlusIcon />
              }
              title={t("accordion_title_5")}
              className="accordion-item"
              
            >
              <p className="accordion-content">{t("accordion_text_1")}</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AccordionSection;
