import styles from "./Tienda.module.sass";
import { TiendaIntro } from "app/components/tienda/TiendaIntro";
import { TiendaGallery } from "app/components/tienda/TiendaGallery";
import { Footer } from "app/components/shared/Footer";

export default function Store() {
  return (
    <>
      <main className={styles.Tienda}>
        <TiendaIntro />
        <TiendaGallery />
        <Footer />
      </main>
    </>
  );
}
