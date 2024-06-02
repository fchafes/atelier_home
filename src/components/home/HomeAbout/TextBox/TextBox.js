import styles from "./TextBox.module.sass";

export const TextBox = ({ id }) => {
  const classNames =
    id === "second-text-box"
      ? `${styles.TextBox} ${styles.SecondTextBox}`
      : styles.TextBox;

  return (
    <div className={classNames}>
      {id === "first-text-box" ? (
        <>
          <h3>SOBRE ATELIER</h3>
          <p>
            Atelier es una panadería artesanal, creada en 2017 en Montevideo.
            <br />
            <br />
            Tomando lo más clásico de la bollería francesa, lo rudimentario de
            la panadería de fermentación natural y sellada con una propuesta de
            pastelería que le da protagonismo a los clásicos, pero que también
            se destaca en lo novedoso.
          </p>
        </>
      ) : id === "second-text-box" ? (
        <>
          <p>
            Atelier es un taller, un espacio de creación para todos los que
            forman parte su equipo.
            <br />
            <br />
            Estamos en constante búsqueda, inquietos a la hora de entender y
            desarrollar el oficio tan ancestral que hacemos a diario.
          </p>
        </>
      ) : null}
    </div>
  );
};
