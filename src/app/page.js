import styles from "./page.module.css";

import { HomeBackground } from "app/components/home/HomeBackground";
import { HomeIntro } from "app/components/home/HomeIntro";
import { HomeAbout } from "app/components/home/HomeAbout";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeBackground/>
      <HomeIntro />
      <HomeAbout />
    </main>
  );
}