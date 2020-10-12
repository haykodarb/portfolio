import Head from "next/head";
import styles from "../components/route.module.css";

export default function Title() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hayk - Pretty Kitty Twitty</title>
      </Head>
      <img src="/invernadero.png" style={{ width: "75%", height: "75%" }}></img>
      <div className={styles.textContainer}>
        <a
          href="https://kassen.herokuapp.com/"
          style={{ fontWeight: 700, color: "white", cursor: "pointer" }}
        >
          Monitor de invernaderos
        </a>
        <p style={{ fontSize: 16 }}>
          Se trata de un controlador electrónico que permite al usuario accedear
          a la data histórica de temperatura, humedad y luminosidad de su
          invernadero.
          <br />
          <br /> El dispositivo se encuentra armado alrededor del
          microcontrolador ESP8266, programado para obtener los valores de los
          sensores cada 15 minutos y realizar un POST request a un servidor
          externo. <br />
          <br />
          El servidor consiste de una aplicación realizada en Node/Express que
          toma la data otorgada por el dispositivo y la guarda en una base de
          datos MySQL. Luego el usuario puede acceder a la data de su
          dispositivo iniciando sesión en la página web.
        </p>
      </div>
    </div>
  );
}
