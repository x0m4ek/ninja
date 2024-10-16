import React from "react";
import styles from "./UxBlock.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import Image, { StaticImageData } from "next/image";

interface ContentBlock {
  titleKey: string;
  textKey: string;
}

interface UxBlockProps {
  mockUpImage: StaticImageData;
  contentBlocks: ContentBlock[];
  titleKey: string;
  isReversed?:boolean,
}

const UxBlock: React.FC<UxBlockProps> = ({ mockUpImage, contentBlocks, titleKey,isReversed}) => {
  const { t, rich } = useFormattedTranslation("whitelabel");

  return (

        <div className={`${styles.content} ${isReversed ? styles.reversed : ""}`}>
          <div className={styles.content_wrapper}>
            <span>{t(titleKey)}</span>
            <div className={styles.blocks}>
              {contentBlocks.map((block, index) => (
                <div key={index} className={`${styles.block} border-custom`}>
                  <p>{t(block.titleKey)}</p>
                  <span>{t(block.textKey)}</span>
                </div>
              ))}
            </div>
          </div>
          <Image src={mockUpImage} width={1200} height={1200} alt="Mockup" />
        </div>

  );
};

export default UxBlock;