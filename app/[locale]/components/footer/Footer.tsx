'use client';
import React, { useEffect, useRef } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Stars from '../svgs/Stars';
import Image from 'next/image';
import TelegramIcon from '@/app/[locale]/images/telegram.png';
import WhatsappIcon from '@/app/[locale]/images/whatsup.png';
import Form from '../Form/Form';
import Logo from '../svgs/Logo';
import useFormattedTranslation from '../../utils/hooks/useFormattedTranslation';
import TransitionLink from '../Link/TransitionLink';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTextScroll from '../animatedComponents/AnimatedTextScroll';
import AnimatedOpacityText from '../animatedComponents/AnimatedOpacityText';
import FadeInScroll from '../animatedComponents/FadeInScroll';
import AnimateParagraph from '../animatedComponents/AnimateParagraph';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { t, rich } = useFormattedTranslation('footer');
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';


  return (
    <>
        <AnimateParagraph>
        <div  className={styles.wrapper_footer}>
        <div className={`${styles.circle} circle`}></div>
        <div className={styles.footer_content}>
          <div className={styles.left}>
            <div className={styles.slogan}>
                <AnimatedOpacityText>
              <h2>{rich('motto')}</h2></AnimatedOpacityText>
            </div>
            <div className={styles.columns}>
              <div className={styles.col}>
                <span>{t('col_1_title')}</span>
                <div className={styles.links}>
                  <TransitionLink href={`/${currentLocale}`}>{t('col_1_item_1')}</TransitionLink>
                  <Link href={`/${currentLocale}`}>{t('col_1_item_2')}</Link>
                  <Link href={`/${currentLocale}/whitelabel`}>
                    <Stars /> {t('col_1_item_3')}
                  </Link>
                </div>
              </div>
              <div className={styles.col}>
                <span>{t('col_2_title')}</span>
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
                    <Image src={TelegramIcon} alt="Telegram Icon" width={40} height={40} />
                  </div>
                  <div className={styles.icon}>
                    <Image src={WhatsappIcon} alt="Whatsapp Icon" width={40} height={40} />
                  </div>
                  <div className={styles.icon}>
                    <Image src={WhatsappIcon} alt="Whatsapp Icon" width={40} height={40} />
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
            Design by: <p>Tresor Tech</p>
          </span>
        </div>
      </div></AnimateParagraph>
    </>
  );
};

export default Footer;
