import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Stars from "../svgs/Stars";
import Image from "next/image";
import TelegramIcon from "@/app/[locale]/images/telegram.png";
import WhatsappIcon from "@/app/[locale]/images/whatsup.png";
import Form from "../Form/Form";
import Logo from "../svgs/Logo";

const Footer = () => {
  return (
    <>
      <div className={styles.wrapper_footer}>
        <div className={`${styles.circle} circle`}></div>
        <div className={styles.footer_content}>
          <div className={styles.left}>
            <div className={styles.slogan}>
              <h2>
                Готові
                <p>до співпраці?</p>
              </h2>
            </div>
            <div className={styles.columns}>
              <div className={styles.col}>
                <span>Меню</span>
                <div className={styles.links}>
                  <Link href={"#"}>Головне про нас</Link>
                  <Link href={"#"}>Приклади рішень</Link>
                  <Link href={"#"}>
                    <Stars /> Whitelabel
                  </Link>
                </div>
              </div>
              <div className={styles.col}>
                <span>Контакти</span>
                <div className={styles.contacts}>
                  <span>
                    Т: <p>+380 99 098 99 44</p>
                  </span>
                  <span>
                    М: <p>sale@ninjadigital.com</p>
                  </span>
                </div>
              </div>
              <div className={styles.col}>
                <span>
                  Зв’жіться з нами через
                  <br /> месенджери:
                </span>
                <div className={styles.contacts_icons}>
                  <div className={styles.icon}>
                    <Image
                      src={TelegramIcon}
                      alt="Whatsapp Icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles.icon}>
                    <Image
                      src={WhatsappIcon}
                      alt="Whatsapp Icon"
                      width={40}
                      height={40}
                    />{" "}
                  </div>
                  <div className={styles.icon}>
                    <Image
                      src={WhatsappIcon}
                      alt="Whatsapp Icon"
                      width={40}
                      height={40}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Form />
          </div>
        </div>
        <div className={styles.bottom_data}>
        <Logo />
        <p>© 2024 Ninja Digital. All right reserved.</p>
        <span>
        Design by: <p>
        Tresor Tech
            </p>
        </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
