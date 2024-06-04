"use client";

import styles from "./HomeBackground.module.sass";
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
        setOpacity(scrollFraction * 2.5); // Aumenta la opacidad de 0 a 0.5
      } else if (scrollFraction > 0.2 && scrollFraction <= 0.3) {
        // Del 20% al 30% del scroll
        setOpacity(0.5 + (scrollFraction - 0.2) * 5); // Aumenta la opacidad de 0.5 a 1
      } else {
        // Del 30% al 100% del scroll
        setOpacity(1); // Mantiene la opacidad en 1
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.bgColor} style={{ opacity }}></div>
        <div className={styles.bgImage}></div>
      </div>
    </>
  );
};
