import Head from "next/head";
import styles from "../components/route.module.css";

export default function Title() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hayk - Pretty Kitty Twitty</title>
      </Head>
      <img src="/prettykitty.png" style={{ width: "65%", height: "65%" }}></img>
      <div className={styles.textContainer}>
        <a
          href="https://prettykittytwitty.herokuapp.com/"
          style={{ fontWeight: 700, color: "white", cursor: "pointer" }}
        >
          Pretty Kitty Twitty
        </a>
        <p style={{ fontSize: 19 }}>
          Consiste de un bot de Twitter al que se inicia sesión con su propia
          cuenta.
          <br /> El usuario entonces puede subir imágenes de gatitos y esperar a
          que el bot las suba periódicamente. <br />
          <br />
          Utiliza una API externa para filtrar el contenido de las imágenes
          antes de subirlas a una base de datos mongoDB. <br /> Luego un cronjob
          se encarga de twittear una de las fotos cada 3 horas.
        </p>
      </div>
    </div>
  );
}
