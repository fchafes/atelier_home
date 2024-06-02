import styles from "./Product.module.sass";
import { ProductDetail } from "app/components/product/ProductDetail";
import { SugProducts } from "app/components/shared/SugProducts";
import { LinkButton } from "app/components/shared/LinkButton";
import { Footer } from "app/components/shared/Footer";
import products from "app/components/tienda/TiendaGallery/productsData";

export default function Product({ params }) {
  const { product: slug } = params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return (
      <main className={styles.Product}>
        <h1>Producto no encontrado</h1>
      </main>
    );
  }

  return (
    <>
      <main className={styles.Product}>
        <ProductDetail
          src={product.src_detail}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        <SugProducts />
        <div className={styles.BtnCont}>
        <LinkButton text="Volver a la tienda" href="/tienda"/>
        </div>
        <Footer />
      </main>
    </>
  );
}
