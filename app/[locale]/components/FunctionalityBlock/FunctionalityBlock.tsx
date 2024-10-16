import React from "react";
import styles from "./FunctionalityBlock.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import AnimatedText from "../animatedComponents/AnimatedText";
import Image from "next/image";
import Mockup from "@/app/[locale]/images/mockup1.png";
import Mockup2 from "@/app/[locale]/images/mockup2.png";
import Mockup3 from "@/app/[locale]/images/mockup3.png";
import Mockup4 from "@/app/[locale]/images/mockup4.png";
import Mockup5 from "@/app/[locale]/images/mockup5.png";
import Slider from "../svgs/Slider";
function FunctionalityBlock() {
  const { t, rich } = useFormattedTranslation("whitelabel");
  return (
    <>
      <div className="conteiner">
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h3>{rich("white_label_func_title")}</h3>
            <AnimatedText color="#fff" startColor="gba(154, 158, 167, 1)">
              {t("white_label_func_text")}
            </AnimatedText>
          </div>
          <div className={styles.images}>
            <div className={styles.image_wrapper}>
              <div className={styles.image_conteiner}>
                <div className={styles.image}>
                  <Image
                    src={Mockup}
                    alt="Design for the brand"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.text}>
                  <p>01.</p>
                  <span>Дизайн додатку під ваш бренд</span>
                </div>
              </div>
            </div>

            <div className={styles.image_wrapper}>
              <div className={styles.image_conteiner}>
                <div className={styles.image}>
                  <Image
                    src={Mockup2}
                    alt="Support for the brand"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.text}>
                  <p>02.</p>
                  <span>
                    Підтримка Sports рішень, кастомізація навігації, дизайну під
                    ваші вимоги
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.image_wrapper}>
              <div className={styles.image_conteiner}>
                <div className={styles.image}>
                  <Image
                    src={Mockup3}
                    alt="Analytics for the brand"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.text}>
                  <p>03.</p>
                  <span>
                    Збір і обробка даних для аналітики поведінки і трендів
                    гравців
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.image_wrapper}>
              <div className={styles.image_conteiner}>
                <div className={styles.image}>
                  <Image
                    src={Mockup4}
                    alt="Crash-free rate for the brand"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.text}>
                  <p>04.</p>
                  <span>
                  Безперебійна робота програми з crash-free rate {">"} 99%
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.image_wrapper}>
              <div className={styles.image_conteiner}>
                <div className={styles.image}>
                  <Image
                    src={Mockup5}
                    alt="Push services for the brand"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.text}>
                  <p>05 .</p>
                  <span>
                  Push сервіси для збільшення залученості користувачів
                  </span>
                </div>
              </div>
            </div>

          </div>
          <div className={styles.nav}>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}

export default FunctionalityBlock;
