import React, { useState } from "react";
import styles from "./OwnAppSection.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import Stars from "../svgs/Stars";
import Image from "next/image";
import Banner1 from "@/app/[locale]/images/app-banner-1.png";
import Banner2 from "@/app/[locale]/images/app-banner-2.png";
import Bar from "../svgs/Bar";
import Arrow from "../svgs/Arrow";

const OwnAppSection = () => {
  const { t, rich } = useFormattedTranslation("sushi");

  const banners = [Banner1, Banner2]; // Масив зображень
  const [currentSlide, setCurrentSlide] = useState(0); // Поточний слайд

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length); // Наступний слайд
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? banners.length - 1 : prevSlide - 1
    ); // Попередній слайд
  };

  return (
    <>
      <div className="conteiner">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.image_slider}>
              <div
                className={styles.image}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`, // Зміщуємо слайди
                  transition: "transform 0.5s ease-in-out", // Анімація переходу
                }}
              >
                {banners.map((banner, index) => (
                  <Image
                    key={index}
                    src={banner}
                    height={1000}
                    width={1000}
                    alt={`Slide ${index}`}
                  />
                ))}
              </div>

             
              <div className={styles.bottom_items}>
                <Bar />
                <div className={styles.arrows}>
                  <div onClick={goToPrevSlide}>
                    <Arrow />
                  </div>
                  <div onClick={goToNextSlide}>
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <h2>{rich("own_app_title")}</h2>
            <div className={styles.tasks}>
              <div className={styles.task}>
                <Stars />
                <p>{t("own_app_text_1")}</p>
              </div>
              <div className={styles.task}>
                <Stars />
                <p>{t("own_app_text_2")}</p>
              </div>
              <div className={styles.task}>
                <Stars />
                <p>{t("own_app_text_3")}</p>
              </div>
              <div className={styles.task}>
                <Stars />
                <p>{t("own_app_text_4")}</p>
              </div>
              <div className={styles.task}>
                <Stars />
                <p>{t("own_app_text_5")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnAppSection;
