import styles from "./page.module.css";
import "./globals.css";
import Image from "next/image";
import { HomeIntro } from "app/components/home/HomeIntro";
import { HomeAbout } from "app/components/home/HomeAbout";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="img-box">
        <Image
          className="next-img"
          src="/images/home/home_img.webp"
          alt="Imagen decorativa de fondo, local de Atelier."
          priority={true}
          fill={true}
        />
      </div>
      <HomeIntro />
      <HomeAbout />
    </main>
  );
}
