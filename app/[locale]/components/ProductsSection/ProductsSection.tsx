import React from "react";
import styles from "./ProductsSection.module.scss";
import ProductsFilter from "../ProductsFilter/ProductsFilter";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import AnimatedTextScroll from "../animatedComponents/AnimatedTextScroll";
import BlurOnScroll from "../animatedComponents/SideInBlur";
import AnimatedOpacityText from "../animatedComponents/AnimatedOpacityText";


const ProductsSection = () => {
  const {rich,t} = useFormattedTranslation('home');
  return (
    <>
      <div className={`${styles.wrapper}` }>
        <div className={`${styles.circle} circle`}></div>
        <div className={`${styles.circle} circle`}></div>
        <div className="conteiner">
      
        <div className={styles.content}>
   
          <AnimatedOpacityText>
            <h3>
              {rich('filters_block_title')}
            </h3></AnimatedOpacityText>
           
   
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
