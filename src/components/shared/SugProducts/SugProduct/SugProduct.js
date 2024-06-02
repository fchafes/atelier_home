import styles from "./SugProduct.module.sass";
import Link from "next/link";

export const SugProduct = ({ src, title, price, slug }) => {
  return (
    <article className={styles.SugProduct}>
      <figure>
        <Link href={`/tienda/${slug}`}>
          <img src={src} alt={title} />
        </Link>
        <figcaption>
          <h3>{title}</h3>
          <p>{price}</p>
        </figcaption>
      </figure>
    </article>
  );
};
