import styles from "./TiendaIntro.module.sass";

export const TiendaIntro = () => {
  return (
    <>
      <div className={styles.TiendaIntro}>
        <h1>TIENDA</h1>
        <p>
          Comprá online y retirá en el local dentro de 48 hs.
          <br />
          No contamos con servicio de entrega. 
        </p>
        <p>↓↓</p>
      </div>
    </>
  );
};
