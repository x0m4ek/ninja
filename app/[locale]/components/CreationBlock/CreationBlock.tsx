"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./CreationBlock.module.scss";
import BorderedButton from "../BorderedButton/BorderedButton";
import ArrowButton from "../arrow/ArrowButton";
import DeveloperBlock from "../DeveloperBlock/DeveloperBlock";
import Developer1 from "@/app/[locale]/images/developer1.png";
import Developer2 from "@/app/[locale]/images/developer2.png";
import Developer3 from "@/app/[locale]/images/developer3.png";
import Developer4 from "@/app/[locale]/images/developer4.png";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import AnimatedTextScroll from "../animatedComponents/AnimatedTextScroll";
import BlurOnScroll from "../animatedComponents/SideInBlur";
import AnimationRotateScroll from "../animatedComponents/AnimationRotateScroll";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';  // Додаємо стилі для стрілок
import { Pagination, Navigation } from 'swiper/modules';
import "./CreationBlock.scss";
import AnimatedText from "../animatedComponents/AnimatedText";

const CreationBlock = () => {
  const { rich, t } = useFormattedTranslation("home");

  // Створюємо реф для слайдера і pagination
  const swiperRef = useRef<any>(null);
  const paginationRef = useRef<HTMLDivElement>(null); // Реф для кастомного pagination
  const [progress, setProgress] = useState(0); // Стейт для трекера

  const advs = [
    t('creation_block_1'),
    t('creation_block_2'),
    t('creation_block_3'),
    t('creation_block_4'),
    t('creation_block_5'),
    t('creation_block_6'),
    t('creation_block_7'),
    t('creation_block_8'),
    t('creation_block_9'),
  ];

  // Використовуємо useEffect для коректного оновлення pagination
  useEffect(() => {
    if (swiperRef.current && paginationRef.current) {
      swiperRef.current.params.pagination.el = paginationRef.current;
      swiperRef.current.pagination.init();
      swiperRef.current.pagination.render();
      swiperRef.current.pagination.update();
    }
  }, []);

  return (
    <>
      <div className="conteiner">
        <div className={styles.wrapper}>
          <AnimationRotateScroll isReversed className={styles.metadata}>
            <BlurOnScroll>
              <div className={styles.text_data}>
                <AnimatedTextScroll>
                  <h2>{rich('creation_title')}</h2>
                </AnimatedTextScroll>
                <AnimatedTextScroll>
                  <p>
                  {t('creation_text')}
                  </p>
    
                </AnimatedTextScroll>
              </div>

              <div className={styles.button}>
                <BorderedButton
                  text={t('contact_us_button')}
                  onClick={() => console.log()}
                />
              </div>
            </BlurOnScroll>
          </AnimationRotateScroll>

          <div className={styles.blocks}>
            {advs.map((adv, index) => (
              <BlurOnScroll key={index} className="flex-1 flex-grow flex">
                <AnimationRotateScroll className="flex-1 flex-grow h-[100%] flex">
                  <div className={`${styles.block} border-custom`}>
                    <div className={styles.number}>0{index + 1}</div>
                    <p>{adv}</p>
                  </div>
                </AnimationRotateScroll>
              </BlurOnScroll>
            ))}
          </div>
        </div>

        {/* Секція слайдера */}
        <BlurOnScroll>
        <div className={styles.command}>
          <div className={styles.content}>
            <div className={styles.nav}>
              <div className={styles.text}>
                <AnimatedTextScroll>
                <h2>{rich('team_title')}</h2>
                </AnimatedTextScroll>
                <AnimatedText startColor="#fff" color="rgba(154, 158, 167, 0.5)">
                {rich('team_text')}

                </AnimatedText>
     
              </div>
              <div className={styles.navigation}>
                <div className={styles.progress_wrapper}>
                  <div
                    className={styles.progress_bar}
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <div ref={paginationRef} className={styles.custom_pagination}></div> 

                <div className={styles.arrows}>
                  <ArrowButton onClick={() => swiperRef.current?.slidePrev()} /> {/* Попередній слайд */}
                  <ArrowButton onClick={() => swiperRef.current?.slideNext()} /> {/* Наступний слайд */}
                </div>

              </div>
            </div>

            <div className={styles.devs}>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper; 
                }}
                onProgress={(swiper, progress) => {
                  setProgress(progress); 
                }}
                slidesPerView={'auto'}
                spaceBetween={16}
                pagination={{
                  el: paginationRef.current,
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className}"></span>`;
                  }
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Pagination, Navigation]}
              >
                <SwiperSlide>
                  <DeveloperBlock
                    image={Developer1}
                    desc={t('team_member_1')}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <DeveloperBlock
                    image={Developer2}
                    desc={t('team_member_2')}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <DeveloperBlock
                    image={Developer3}
                    desc={t('team_member_3')}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <DeveloperBlock
                    image={Developer4}
                    desc={t('team_member_4')}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <DeveloperBlock
                    image={Developer1}
                    desc={t('team_member_5')}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <DeveloperBlock
                    image={Developer2}
                    desc={t('team_member_1')}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        </BlurOnScroll>
      </div>
    </>
  );
};

export default CreationBlock;
