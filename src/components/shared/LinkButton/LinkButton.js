import styles from "./LinkButton.module.sass";
import Link from "next/link";

export const LinkButton = ({ text, href }) => {
  return (
    <Link href={href} className={styles.LinkButton}>
      <button >{text}</button>
    </Link>
  );
};
