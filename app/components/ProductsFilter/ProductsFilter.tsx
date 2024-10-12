"use client";
import React, { useState } from "react";
import styles from "./ProductsFilter.module.scss";
import FilterButton from "../FilterButton/FilterButton";
import ProductBlock from "../ProductBlock/ProductBlock";



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
          <ProductBlock
            title="Ninja Sushi"
            desc="Сервіс доставки суші, закусок, сетів та напоїв"
          />
          <ProductBlock
            title="Ninja Sushi"
            desc="Сервіс доставки суші, закусок, сетів та напоїв"
          />

          <ProductBlock
            title="Ninja Sushi"
            desc="Сервіс доставки суші, закусок, сетів та напоїв"
          />
        </div>

     
      </div>
    </>
  );
};

export default ProductsFilter;
