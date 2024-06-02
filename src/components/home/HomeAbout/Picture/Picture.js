import styles from "./Picture.module.sass";
import Image from "next/image";

export const Picture = ({ id, path }) => {
  const additionalClass = id ? styles[id] : "";

  return (
    <div className={`${styles.Picture} ${additionalClass}`}>
      <Image
        src={path}
        alt="Foto de Atelier y su equipo"
        fill={true}
        quality={100}
      />
    </div>
  );
};
