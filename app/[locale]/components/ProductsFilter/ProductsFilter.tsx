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
import { animatePageOut } from "@/animation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import useFormattedTranslation from "../../utils/hooks/useFormattedTranslation";
import AnimatedProductBlock from "../animatedComponents/AnimatedProductBlock";
import BlurOnScroll from "../animatedComponents/SideInBlur";

const ProductsFilter = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const router = useRouter();
  const { rich, t } = useFormattedTranslation("home");

  const [filterSelected, setFilterSelected] = useState<string>("ecomerce");

  const handleFilterClick = (filter: string) => {
    setFilterSelected(filter);
  };

  const products = [
    {
      title: "Ninja Sushi",
      desc: t("filter_block_sushi"),
      hoverImage: Hover1,
      category: "ecomerce",
      mobileImage: Product4,
      url: "/sushi",
    },
    {
      title: "Ninja Wok",
      desc: t("filter_block_wok"),
      hoverImage: Hover2,
      category: "ecomerce",
      mobileImage: Product4,
      url: "/wok",
    },
    {
      title: "Ninja Pizza",
      desc: t("filter_block_pizza"),
      hoverImage: Hover3,
      category: "ecomerce",
      mobileImage: Product4,
      url: "/pizza",
    },
    {
      title: "Ninja Fit",
      desc: t("filter_block_fit"),
      hoverImage: Hover4,
      category: "health",
      mobileImage: Product4,
      url: "/fit",
    },
    {
      title: "Ninja Water Tracker",
      desc: t("filter_block_tracker"),
      hoverImage: Hover5,
      category: "health",
      mobileImage: Product4,
      url: "/tracker",
    },
    {
      title: "Casino & Sports App",
      desc: t("filter_block_casino"),
      hoverImage: Hover6,
      category: "gambling",
      mobileImage: Product4,
      url: "/casino",
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === filterSelected
  );

  return (
    <>
      <div className={styles.wrapper}>
        <BlurOnScroll>
          <div className={styles.filters}>
            <FilterButton
              text="E-Commerce"
              isSelected={filterSelected === "ecomerce"}
              onClick={() => handleFilterClick("ecomerce")}
            />
            <FilterButton
              text="Health & Fitness"
              isSelected={filterSelected === "health"}
              onClick={() => handleFilterClick("health")}
            />
            <FilterButton
              text="Gambling"
              isSelected={filterSelected === "gambling"}
              onClick={() => handleFilterClick("gambling")}
            />
          </div>
        </BlurOnScroll>
        <div className={styles.filtered_products}>
          {filteredProducts.map((product, index) => (
            <BlurOnScroll key={index}>
              <AnimatedProductBlock isReversed={index % 2 === 1}>
                <ProductBlock
                  onClick={() =>
                    animatePageOut(`/${currentLocale}/${product.url}`, router)
                  }
                  key={index}
                  title={product.title}
                  desc={product.desc!}
                  hoverImage={product.hoverImage}
                  mobileImage={product.mobileImage}
                />
              </AnimatedProductBlock>
            </BlurOnScroll>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsFilter;
