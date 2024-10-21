import React, { FC, ReactNode } from "react";
import styles from "./ReviewsBlock.module.scss";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import Stars from "../svgs/Stars";
import AppStoreButton from "../AppStoreButton/AppStoreButton";
import FourStars from "../svgs/FourStars";
import FiveStars from "../svgs/FiveStars";

type OwnProps = {
    rating:string,
    ratingText:ReactNode,
    withTasks?:boolean,
    // taskText?:string,
    text?:ReactNode,
    reviews_text_1?:ReactNode,
    reviews_text_2?:ReactNode,
    reviews_text_3?:ReactNode,
    reviews_text_4?:ReactNode,
}

const ReviewsBlock:FC<OwnProps> = ({rating, ratingText, withTasks = false,text,reviews_text_1,reviews_text_2,reviews_text_3,reviews_text_4}) => {
  const { t, rich } = useFormattedTranslation("sushi");
  return (
    <>
      <div className="conteiner">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.top_items}>
              <h2>{rich("reviews_title")}</h2>
              <div className={`${styles.rating} border-custom`}>
                <span>{rating}</span>
                <p>{ratingText}</p>
              </div>
            </div>
            <div className={styles.content}>
                {withTasks ? <>
                    <div className={styles.tasks}>
                <div className={styles.task}>
                  <Stars />
                  <p>{reviews_text_1}</p>
                </div>
                <div className={styles.task}>
                  <Stars />
                  <p>{reviews_text_2}</p>
                </div>
                <div className={styles.task}>
                  <Stars />
                  <p>{reviews_text_3}</p>
                </div>
                {reviews_text_4 ? <>
                  <div className={styles.task}>
                  <Stars />
                  <p>{reviews_text_4}</p>
                </div>
                </> : null}
          
              </div>
                </> : <>
                <p>
                    {text}
                </p>
                </>}            
              <div className={styles.button}>
                <AppStoreButton
                  text="App Store"
                  onClick={() => window.open("https://appstore.com", "_blank")}
                />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <div className={styles.review}>
                <FourStars />
                <p>{t("review_client_title_1")}</p>
                <span> {t("review_client_text_1")}</span>
                <div className={styles.author}>
                  <p>Kathryn Murphy</p>
                  <span>07.03.2022</span>
                </div>
              </div>
              <div className={styles.review}>
                <FourStars />
                <p>{t("review_client_title_1")}</p>
                <span> {t("review_client_text_1")}</span>
                <div className={styles.author}>
                  <p>Kathryn Murphy</p>
                  <span>07.03.2022</span>
                </div>
              </div>


              <div className={styles.review}>
                    <FourStars />
                    <p>
                    {t('review_client_title_3')}
                    </p>
                    <span>  {t('review_client_text_3')}</span>
                    <div className={styles.author}>
                    <p>
                        Kathryn Murphy
                    </p>
                    <span>
                    07.03.2022
                    </span>
                    </div>
                </div>

                <div className={styles.review}>
                    <FiveStars />
                    <p>
                    {t('review_client_title_4')}
                    </p>
                    <span>  {t('review_client_text_4')}</span>
                    <div className={styles.author}>
                    <p>
                        Kathryn Murphy
                    </p>
                    <span>
                    07.03.2022
                    </span>
                    </div>
                </div>
                <div className={styles.review}>
                    <FiveStars />
                    <p>
                    {t('review_client_title_4')}
                    </p>
                    <span>  {t('review_client_text_4')}</span>
                    <div className={styles.author}>
                    <p>
                        Kathryn Murphy
                    </p>
                    <span>
                    07.03.2022
                    </span>
                    </div>
                </div>
                <div className={styles.review}>
                    <FiveStars />
                    <p>
                    {t('review_client_title_4')}
                    </p>
                    <span>  {t('review_client_text_4')}</span>
                    <div className={styles.author}>
                    <p>
                        Kathryn Murphy
                    </p>
                    <span>
                    07.03.2022
                    </span>
                    </div>
                </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ReviewsBlock;
