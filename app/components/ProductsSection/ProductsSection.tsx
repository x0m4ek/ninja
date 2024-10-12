import React from "react";
import styles from "./ProductsSection.module.scss";
import ProductsFilter from "../ProductsFilter/ProductsFilter";


const ProductsSection = () => {
  return (
    <>
      <div className={`${styles.wrapper}` }>
        <div className={`${styles.circle} circle`}></div>
        <div className={`${styles.circle} circle`}></div>
        <div className="conteiner">
     
        <div className={styles.content}>
            <h3>
            Продукти для мобільних телефонів на ios <br /> <p>та android, що вже працюють на бізнес</p>
            </h3>
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
