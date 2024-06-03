"use client";

import styles from "./Picture.module.sass";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const Picture = ({ id, path }) => {
  const additionalClass = id ? styles[id] : "";

  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.5, // Cuando la mitad del componente está en el viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Entering viewport", entry.target);
          // Si el componente entra en el viewport, aplica la clase 'move-up'
          elementRef.current.classList.add(styles.moveUp);
        } else {
          console.log("Exiting viewport", entry.target);
          // Si el componente sale del viewport, remueve la clase 'move-up'
          elementRef.current.classList.remove(styles.moveUp);
        }
      });
    }, options);

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.Picture} ${additionalClass}`} ref={elementRef}>
      <Image
        src={path}
        alt="Foto de Atelier y su equipo"
        fill={true}
        quality={100}
      />
    </div>
  );
};
