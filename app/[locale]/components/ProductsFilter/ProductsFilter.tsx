"use client";
import React, { useState } from "react";
import styles from "./ProductsFilter.module.scss";
import FilterButton from "../FilterButton/FilterButton";
import ProductBlock from "../ProductBlock/ProductBlock";
import Hover1 from "@/app/[locale]/images/hover-1.png";
import Hover2 from "@/app/[locale]/images/hover-2.png";
import Hover3 from "@/app/[locale]/images/hover-3.png";
import Hover4 from "@/app/[locale]/images/hover-4.png";
import Hover5 from "@/app/[locale]/images/hover-5.png";
import Hover6 from "@/app/[locale]/images/hover-6.png";
import Product4 from "@/app/[locale]/images/product-1-test.png";
const ProductsFilter = () => {
  const [filterSelected, setFilterSelected] = useState<{
    [key: string]: boolean;
  }>({
    ecomerce: true,
    health: false,
    gambling: false,
  });

  const handleFilterClick = (filter: string) => {
    const activeFilters = Object.values(filterSelected).filter(
      (selected) => selected
    ).length;
    if (filterSelected[filter] && activeFilters > 1) {
      setFilterSelected((prev) => ({ ...prev, [filter]: !prev[filter] }));
    } else if (!filterSelected[filter]) {
      setFilterSelected((prev) => ({ ...prev, [filter]: true }));
    }
  };

  const products = [
    {
      title: "Ninja Sushi",
      desc: "Сервіс доставки суші, закусок, сетів та напоїв",
      hoverImage: Hover1,
      category: "ecomerce",
      mobileImage:Product4,
    },
    {
      title: "Ninja Wok",
      desc: "Сервіс доставки суші, закусок, сетів та напоїв",
      hoverImage: Hover2,
      category: "ecomerce",
      mobileImage:Product4,
    },
    {
      title: "Ninja Pizza",
      desc: "Преміум-доставка піци додому та в офіс",
      hoverImage: Hover3,
      category: "ecomerce",
      mobileImage:Product4,
    },
    {
      title: "Ninja Fit",
      desc: "лічильник калорій, дієтолог, тренер та консультант з харчування",
      hoverImage: Hover4,
      category: "health",
      mobileImage:Product4,
    },
    {
      title: "Ninja Water Tracker",
      desc: "додаток для відстеження водного балансу",
      hoverImage: Hover5,
      category: "health",
      mobileImage:Product4,
    },
    {
      title: "Casino & Sports App",
      desc: "Whitelabel рішення для власників iGaming продуктів",
      hoverImage: Hover6,
      category: "gambling",
      mobileImage:Product4,
    },
  ];

  const filteredProducts = products.filter((product) =>
    Object.entries(filterSelected).some(
      ([key, value]) => value && product.category === key
    )
  );

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.filters}>
          <FilterButton
            text="E-Commerce"
            isSelected={filterSelected.ecomerce}
            onClick={() => handleFilterClick("ecomerce")}
          />
          <FilterButton
            text="Health & Fitness"
            isSelected={filterSelected.health}
            onClick={() => handleFilterClick("health")}
          />
          <FilterButton
            text="Gambling"
            isSelected={filterSelected.gambling}
            onClick={() => handleFilterClick("gambling")}
          />
        </div>
        <div className={styles.filtered_products}>
          {filteredProducts.map((product, index) => (
            <ProductBlock
              key={index}
              title={product.title}
              desc={product.desc}
              hoverImage={product.hoverImage}
              mobileImage={product.mobileImage}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsFilter;