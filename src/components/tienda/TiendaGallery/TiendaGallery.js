"use client";

import styles from "./TiendaGallery.module.sass";
import { TiendaProduct } from "../TiendaProduct";
import { TiendaNav } from "../TiendaNav";
import products from "./productsData";
import { useState } from "react";
import Link from "next/link";

export const TiendaGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("TODO");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const filteredProducts =
    selectedCategory === "TODO"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <section className={styles.TiendaGallery}>
        <TiendaNav
          handleCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
        />
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={product.id}>
              <Link href={`/tienda/${product.slug}`}>
                <TiendaProduct
                  src={product.src}
                  title={product.title}
                  price={product.price}
                  priority={index === 0}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
