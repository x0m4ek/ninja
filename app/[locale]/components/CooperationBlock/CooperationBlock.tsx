"use client";
import React from "react";
import styles from "./CooperationBlock.module.scss";
import Image from "next/image";
import Icon from "@/app/[locale]/images/qIcon.jpg";
import Stars from "../svgs/Stars";
import BorderedButton from "../BorderedButton/BorderedButton";

const CooperationBlock = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.circle} circle`}></div>
        <div className={`${styles.circle} circle`}></div>
        <div className="conteiner">
          <div className={styles.text}>
            <h2>Варіанти співпраці</h2>
            <p>
              Допоможемо вирішити будь-яке завдання у середовищі
              <br /> розробки мобільних додатків
            </p>
          </div>

          <div className={styles.blocks}>
            <div className={styles.block}>
              <Image src={Icon} width={120} height={120} alt="Icon" />
              <div className={styles.top_data}>
                <div className={styles.package}>
                  <Stars />
                  <p>Пакет “Команда”</p>
                </div>
                <h4>Підсилимо вашу команду</h4>
                <p>
                  Допоможемо, коли вам потрібен досвід та
                  <br /> експертиза наших фахівців з розробки
                  <br /> додатків
                </p>
              </div>
              <div className={styles.options}>
                <div className={styles.option}>
                  <Stars />
                  <p>Інтеграція наших експертів у вашу існуючу команду</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>Швидке масштабування ресурсів під ваші потреби</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>Доступ до широкого спектру технічних навичок та досвіду</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>Гнучкі умови співпраці та термін контракту</p>
                </div>
              </div>
              <div className={styles.button}>
                <BorderedButton
                  text="Посилити Команду"
                  onClick={() => console.log("s")}
                />
              </div>
            </div>
            <div className={styles.block}>
              <Image src={Icon} width={120} height={120} alt="Icon" />
              <div className={styles.top_data}>
                <div className={styles.package}>
                  <Stars />
                  <p>Пакет “Продуктовий”</p>
                </div>
                <h4>Створимо новий продукт</h4>
                <p>
                Реалізуємо ваш проєкт з нуля до <br />життєздатного продукту і допоможемо його<br /> розвивати, надаючи технічну підтримку
                </p>
              </div>
              <div className={styles.options}>
                <div className={styles.option}>
                  <Stars />
                  <p>Повний цикл розробки від ідеї до запуску</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>Індивідуальний дизайн та архітектура додатку</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>Інтеграція з існуючими системами та сервісами</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>Постійна технічна підтримка та оновлення</p>
                </div>
              </div>
              <div className={styles.button}>
                <BorderedButton
                  text="Почати розробку"
                  onClick={() => console.log("s")}
                />
              </div>
            </div>
            <div className={styles.block}>
              <Image src={Icon} width={120} height={120} alt="Icon" />
              <div className={styles.top_data}>
                <div className={styles.package}>
                  <Stars />
                  <p>Whitelabel</p>
                </div>
                <h4>Трансформуємо готові<br /> рішення під вас</h4>
                <p>
                Ви отримаєте ефективний інструмент на<br /> основі нашого Whitelabel, що значно <br /> зекономить вам час і фінанси — почніть працювати вже за місяць
                </p>
              </div>
              <div className={styles.options}>
                <div className={styles.option}>
                  <Stars />
                  <p>Швидкий запуск в термін від 4 тижнів</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>Економія до 80% бюджету порівняно з розробкою з нуля</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>Повна кастомізація під ваш бренд та потреби</p>
                </div>
                <div className={styles.option}>
                  <Stars />
                  <p>Готова інфраструктура з підтвердженою надійністю</p>
                </div>
              </div>
              <div className={styles.button}>
                <BorderedButton
                  text="Отримати Whitelabel"
                  onClick={() => console.log("s")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CooperationBlock;
