'use client'
import React, { FC, ReactNode } from "react";
import styles from "./EnterBlock.module.scss";
import Image, { StaticImageData } from "next/image";
import AppStore from "../svgs/AppStore";
import PlayMarket from "../svgs/PlayMarket";
import { useRouter } from "next/navigation";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
type Props = {
  image: StaticImageData;
  smallText: string;
  title: string;
  text: string | ReactNode;
  isExlusive?: boolean;
  appStoreUrl: string;
  googlePlayUrl: string;
};

const EnterBlock: FC<Props> = ({
  text,
  title,
  smallText,
  isExlusive = false,
  image,
  googlePlayUrl,
  appStoreUrl,
}) => {
    const router = useRouter();
    const {t} = useFormattedTranslation('common');
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          {isExlusive ? <><div className={`${styles.exclusive} border-custom`}>
            <p>{t('exclusive_text')}</p><svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4297 8.70703C11.4297 8.77734 11.3242 10.8516 13.6094 11.9414C13.1875 13.2422 11.7109 16.125 9.98828 16.125C9.00391 16.125 8.44141 15.4922 7.31641 15.4922C6.15625 15.4922 5.52344 16.125 4.64453 16.125C2.95703 16.1953 1.33984 13.0312 0.882812 11.7305C0.53125 10.7461 0.390625 9.79688 0.390625 8.88281C0.390625 5.75391 2.46484 4.24219 4.43359 4.20703C5.38281 4.20703 6.57812 4.875 7.10547 4.875C7.59766 4.875 8.96875 4.06641 10.2344 4.17188C11.5352 4.27734 12.5195 4.76953 13.1875 5.71875C12.0273 6.45703 11.4297 7.40625 11.4297 8.70703ZM9.46094 2.94141C8.75781 3.75 7.91406 4.20703 7 4.13672C6.92969 3.1875 7.28125 2.30859 7.91406 1.60547C8.47656 0.972656 9.46094 0.445312 10.3047 0.375C10.3047 0.761719 10.4102 1.81641 9.46094 2.94141Z" fill="white"/>
</svg>

            </div></> : null}
          <div className={styles.text}>
            <span>{smallText}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon} onClick={() => router.push(appStoreUrl)}>
              <AppStore />
            </div>
            {!isExlusive && (
            <div className={styles.icon} onClick={() => router.push(googlePlayUrl)}>
            <PlayMarket />
          </div>
            )}

          </div>
        </div>
        <div className={styles.right}>
          <Image src={image} width={1000} height={1000} alt={'banner'} />
        </div>
      </div>
    </>
  );
};

export default EnterBlock;
