'use client'
import React, { FC, ReactNode } from "react";
import styles from "./EnterBlock.module.scss";
import Image, { StaticImageData } from "next/image";
import AppStore from "../svgs/AppStore";
import PlayMarket from "../svgs/PlayMarket";
import { useRouter } from "next/navigation";
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
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.text}>
            <span>{smallText}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon} onClick={() => router.push(appStoreUrl)}>
              <AppStore />
            </div>
            <div className={styles.icon} onClick={() => router.push(googlePlayUrl)}>
              <PlayMarket />
            </div>
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
