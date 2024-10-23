import React from "react";
import styles from "./ProductsSection.module.scss";
import ProductsFilter from "../ProductsFilter/ProductsFilter";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import AnimatedTextScroll from "../animatedComponents/AnimatedTextScroll";
import BlurOnScroll from "../animatedComponents/SideInBlur";


const ProductsSection = () => {
  const {rich,t} = useFormattedTranslation('home');
  return (
    <>
      <div className={`${styles.wrapper}` }>
        <div className={`${styles.circle} circle`}></div>
        <div className={`${styles.circle} circle`}></div>
        <div className="conteiner">
      
        <div className={styles.content}>
        <BlurOnScroll>
          <AnimatedTextScroll>
            <h3>
              {rich('filters_block_title')}
            </h3></AnimatedTextScroll>
            </BlurOnScroll>   
   
            <div className={styles.products}>
                 <ProductsFilter />
            </div>
      
           
        </div>

        </div>
      </div>

    </>
  );
};

export default ProductsSection;
