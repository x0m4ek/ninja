"use client";
import React from "react";
import styles from "./CreationBlock.module.scss";
import BorderedButton from "../BorderedButton/BorderedButton";
import Navigation from "../svgs/Navigation";
import ArrowButton from "../arrow/ArrowButton";
import DeveloperBlock from "../DeveloperBlock/DeveloperBlock";
import Developer1 from "@/app/images/developer1.png";
import Developer2 from "@/app/images/developer2.png";
import Developer3 from "@/app/images/developer3.png";
import Developer4 from "@/app/images/developer4.png";
const CreationBlock = () => {
  const advs = [
    "На 100% розуміємо бізнес-цілі клієнтів",
    "Професійний комплексний підхід",
    "Швидкість розробкиі і впровадження",
    "Інтеграція з будь-якими сторонніми системами",
    "Оптимізація витрат на розробку та підтримку",
    "Підтримка актуальності продукту на ринку",
    "Високий рівень захисту даних — як в банку",
    "Розробка під всі платформи",
    "Надійна і оперативна підтримка після запуску",
  ];
  return (
    <>
      <div className="conteiner">
        <div className={styles.wrapper}>
          <div className={styles.metadata}>
            <div className={styles.text_data}>
              <h2>
                Розробка додатків,
                <p>
                  {" "}
                  що стануть вашою
                  <br /> перевагою
                </p>
              </h2>
              <p>
                Наші рішення допоможуть вам отримати конкурентну <br />
                перевагу на ринку. Ми створюємо додатки, що
                <br /> працюють на ваші бізнес-цілі.
              </p>
            </div>
            <div className={styles.button}>
              {" "}
              <BorderedButton
                text="Зв'яжіться з нами"
                onClick={() => console.log()}
              />{" "}
            </div>
          </div>
          <div className={styles.blocks}>
            {advs.map((adv, index) => (
              <>
                <div className={`${styles.block} border-custom`}>
                  <div className={styles.number}>0{index + 1}</div>
                  <p>{adv}</p>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className={styles.command}>
          <div className={styles.content}>
            <div className={styles.nav}>
              <div className={styles.text}>
                <h2>Ваша команда розробників</h2>
                <p>
                  Ми беремо все на себе для безперебійної інтеграції
                  <br /> та розробки вашого продукту
                </p>
              </div>
              <div className={styles.navigation}>
                <Navigation />
                <div className={styles.arrows}>
                  <ArrowButton onClick={() => console.log('ds')}/>
                  <ArrowButton onClick={() => console.log('ds')}/>
                </div>
              </div>
            </div>
            <div className={styles.devs}>
                <DeveloperBlock 
                image={Developer1}
                desc="Розробники мобільних, веб та бекенд додатків"
                />
                  <DeveloperBlock 
                image={Developer2}
                desc="Продакт-менеджери"
                />
                  <DeveloperBlock 
                image={Developer3}
                desc="Фахівці з контролю якості (Quality Assurance)"
                />
                  <DeveloperBlock 
                image={Developer4}
                desc="Бізнес-аналітики"
                />
                  <DeveloperBlock 
                image={Developer1}
                desc="Розробники мобільних, веб та бекенд додатків"
                />
  <DeveloperBlock 
                image={Developer2}
                desc="Дизайнери UI/UX, Motion, графічного та 3D-дизайну"
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreationBlock;
