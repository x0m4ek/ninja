import React from "react";
import styles from "./WhitelabelMotoBlock.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import Image from "next/image";
import Banner from "@/app/[locale]/images/whitelabal-banner.png";

const WhitelabelMotoBlock = () => {
    const { t } = useFormattedTranslation("whitelabel");
  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.circle} circle`}></div>
        
        <div className="conteiner">

            <div className={styles.top_content}>
                <h2>
                    {t('white_label_moto_title')}
                </h2>
                <p>
                    {t('white_label_moto_text')}
                </p>
            </div>
            <div className={styles.banner}>
            <Image 
            src={Banner}
            width={1500}
            height={1000}
            alt="Whitelabel banner"
            />
            </div>
        </div>
      </div>
    </>
  );
};

export default WhitelabelMotoBlock;
