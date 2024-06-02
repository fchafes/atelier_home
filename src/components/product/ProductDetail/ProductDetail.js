"use client";

import styles from "./ProductDetail.module.sass";
import BackArrow from "app/components/shared/svg/BackArrow.svg";
import BackLink from "app/components/shared/BackLink/BackLink";
import Image from "next/image";
import { useState } from "react";

export const ProductDetail = ({ src, title, price, description }) => {
  const [formData, setFormData] = useState({
    option1: false,
    option2: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // AGREGAR AL ESTADO "CARRITO"
  };

  return (
    <>
      <section className={styles.ProductDetail}>
        <BackLink>
          <BackArrow />
        </BackLink>
        <div className={styles.DetailImageBox}>
          <Image
            src={src}
            alt={title}
            fill={true}
            quality={100}
            priority={true}
          />
        </div>
        <div className={styles.ImageNav}>
          <div className={styles.DotBox}>
            <div className={styles.Dot}></div>
            <div className={styles.Dot}></div>
          </div>
          <div className={styles.ArrowBox}>
            <button>
              <p>↓</p>
            </button>
            <button>
              <p>↓</p>
            </button>
          </div>
        </div>
        <div className={styles.TextHeader}>
          <h1>{title}</h1>
          <p>{price}</p>
        </div>
        <div className={styles.TextBody}>
          <p>{description}</p>
        </div>
        <div className={styles.AddToCart}>
          <form onSubmit={handleSubmit}>
            <div className={styles.InputBox}>
              <div>
                <label>
                  <input
                    type="radio"
                    name="option1"
                    checked={formData.option1}
                    onChange={handleChange}
                  />
                  x1
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="option2"
                    checked={formData.option2}
                    onChange={handleChange}
                  />
                  x2
                </label>
              </div>
            </div>
            <button className={styles.FormButton} type="submit">
              <p>Agregar al carrito</p>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
