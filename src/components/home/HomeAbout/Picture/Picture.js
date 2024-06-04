"use client";

import styles from "./Picture.module.sass";
import Image from "next/image";
import { useState, useEffect } from "react";
import picturesData from "../picturesData";

export const Picture = ({ id, speed }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const image = picturesData.find((img) => img.id === id);
  const imageUrl = isSmallScreen ? image.urlSmall : image.urlLarge;
  const additionalClass = id ? styles[id] : "";

  return (
    <div
      className={`${styles.Picture} ${additionalClass}`}
      style={{ transform: `translateY(${scrollY * speed}px)` }}
    >
      <Image
        src={imageUrl}
        alt="Foto de Atelier y su equipo"
        fill={true}
        quality={100}
      />
    </div>
  );
};
