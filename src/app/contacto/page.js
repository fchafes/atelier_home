import styles from "./page.module.css";

import { ContactHeader } from "app/components/shared/ContactHeader";
import { Footer } from "app/components/shared/Footer";
import Image from "next/image";

export const metadata = {
  title: "Atelier Contacto",
  description: "Panadería Artesanal",
};

export default function Contacto() {
  return (
    <>
      <main className={styles.contacto_main}>
        <ContactHeader />
        <section className={styles.contacto_section}>
          <div className={styles.articleBox}>
            <article>
              <h1>HOLA ATELIER</h1>
              <div className={styles.textBox}>
                <h2>→ Proveeduría</h2>
                <p>
                  Si tenes un local y queres tercerizar alguno de nuestros
                  productos contactanos a través de:{" "}
                  <a href="mailto:adm.casadepan@gmail.com">
                    adm.casadepan@gmail.com
                  </a>
                </p>
              </div>
              <div className={styles.textBox}>
                <h2>→ Trabajá con nosotros</h2>
                <p>
                  ¿Te interesa unirte a nuestro equipo?
                  <br />
                  Si sos mayor de edad y tenes experiencia en el rubro enviados
                  tu curriculum a:{" "}
                  <a href="mailto:ateliercasadepan.equipo@gmail.com">
                    ateliercasadepan.equipo@gmail.com
                  </a>
                </p>
              </div>
              <div className={styles.textBox}>
                <h2>→ Horario de atención</h2>
                <p>
                  Lunes a Sábados de 9.00 a 19.00h
                  <br />
                  Chaná 2004 esq Juan D. Jackson
                </p>
              </div>
              <p>
                Por consultas generales contactarse a:{" "}
                <a href="mailto:ateliercasadepan@gmail.com">
                  ateliercasadepan@gmail.com
                </a>
              </p>
            </article>
            <article>
              <div className={styles.imgBox}>
                <Image
                  src="/images/contacto/contacto_pic.webp"
                  alt="Foto de la entrada de Atelier"
                  fill={true}
                  quality={100}
                  priority={true}
                />
              </div>
            </article>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
