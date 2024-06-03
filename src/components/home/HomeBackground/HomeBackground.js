"use client";

import styles from "./HomeBackground.module.sass";
import Image from "next/image";
import { useState, useEffect } from "react";

export const HomeBackground = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollFraction = scrollTop / docHeight;

      if (scrollFraction <= 0.2) {
        // Primer 20% del scroll
        setOpacity(scrollFraction * 3); // Aumenta la opacidad de 0 a 0.5
      } else {
        // Del 20% al 100% del scroll
        setOpacity(0.6 + (scrollFraction - 0.2) * 0.5); // Aumenta la opacidad de 0.5 a 1
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Limpia el evento cuando el componente se desmonta
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bgColor} style={{ opacity }}></div>
        <Image
          className={styles.bgImage}
          src="/images/home/home_img.webp"
          alt="Imagen decorativa de fondo, local de Atelier."
          priority={true}
          fill={true}
        />
      </div>
    </>
  );
};
