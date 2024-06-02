import styles from "./SugProducts.module.sass";
import { SugProduct } from "./SugProduct";
import sugProducts from "app/data/sugProductsData";

export const SugProducts = () => {
  return (
    <section className={styles.SugProducts}>
      <h2>Productos recomendados</h2>
      <div className={styles.Gallery}>
        {sugProducts.map((item) => (
          <SugProduct
            src={item.src}
            title={item.title}
            price={item.price}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  );
};
