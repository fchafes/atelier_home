import styles from "./Logo.module.sass"

export const Logo = () => {
  return (
    <div className={styles.Container}>
      <img
        src="../../svg/Logo.svg"
        alt="Atelier Logo"
        className={styles.BlendedImage}
      />
    </div>
  );
};
