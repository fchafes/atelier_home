import styles from "./TiendaProduct.module.sass";
import Image from "next/image";

export const TiendaProduct = ({ src, title, price, priority }) => {
  return (
    <>
      <article className={styles.TiendaProduct}>
        <div className={styles.imgBox}>
          <Image src={src} alt={title} fill={true} quality={100} priority={priority}/>
        </div>
        <div className={styles.textBox}>
          <h2>{title}</h2>
          <p>{price}</p>
        </div>
      </article>
    </>
  );
};