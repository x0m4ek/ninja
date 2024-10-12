import React from "react";
import styles from "./ExperienceBlock.module.scss";
import Logo from "../svgs/Logo";
import AdvantagesBlock from "../AdvBlock/AdvantagesBlock";
import QualityIcon from "@/app/images/qIcon.jpg";
import ComplexIcon from "@/app/images/cIcon.png";
import AIcon from "@/app/images/AIcon.png";


const ExperienceBlock = () => {
  return (
    <>
    <div className="conteiner">


      <div className={styles.wrapper}>
        <div className={styles.left_data}>
          <h1>
            12 років досвіду <p>в індустрії</p>
          </h1>
          <div className={`${styles.ninja} border-custom`}>
            <Logo />
            <p>
              Віддана своїй справі команда експертів, що
              <br /> спеціалізується на розробці мобільних додатків та <br />
              повному циклі впровадження проєктів.
            </p>
          </div>
        </div>
        <div className={styles.right_data}>
          <AdvantagesBlock
            icon={QualityIcon}
            title="Розробляємо продукти найвищої якості"
            desc="Використовуємо глибоке знання ринку для створення інноваційних рішень, що перевершують очікування користувачів"
          />
          <AdvantagesBlock
            icon={ComplexIcon}
            title="Забезпечуємо комплексні рішення "
            desc="Над вашим проєктом працюють експерти в створенні високонавантажених CRM-систем, бекенд-сервісів, вебсайтів"
          />
          <AdvantagesBlock
            icon={AIcon}
            title="Запустили додатки
у різних ринкових нішах"
            desc="Використовуємо в роботі над проєктами клієнтів багатий досвід, який охоплює різні галузі, включаючи азартні ігри"
          />
        </div>
      </div>
      </div>
    </>
  );
};
export default ExperienceBlock;
