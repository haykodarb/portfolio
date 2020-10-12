import Head from "next/head";
import Link from "next/link";
import styles from "../components/route.module.css";

export default function Termotanque() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Head>
          <title>Hayk - Termotanque</title>
        </Head>
        <img
          src="/termotanque.jpeg"
          style={{ flex: 1, maxHeight: 500, maxWidth: 350 }}
        ></img>
        <div className={styles.textContainer}>
          <h3 style={{ fontWeight: 700, color: "white", cursor: "default" }}>
            Controlador de termotanque solar.
          </h3>
          <p
            style={{
              fontSize: 16,
              maxWidth: "80%",
              textAlign: "center",
              cursor: "default",
            }}
          >
            Se trata de un controlador electrónico que permite al usuario
            acceder a un dispositivo encargado de controlar la resistencia
            eléctrica de un termotanque solar.
            <br />
            <br /> El dispositivo se encuentra armado alrededor del
            microcontrolador ESP8266, programado para obtener los valores de los
            sensores, encender o apagar un relé mecánico en función de los
            mismos. <br />
            <br />
            El ESP8266 actúa como WebServer sirviendo información mediante
            WebSockets y por HTTP, al cual el usuario accede de manera local a
            través de una aplicación movil.
            <br /> <br />
            Actualmente me encuentro desarrollando una versión más avanzada, con
            aplicación desarrollada en React-Native, con capacidad de conectarse
            a distintos dispositivos simultáneamente y de acceder a data
            histórica del dispositivo.
          </p>
          <div
            style={{
              flex: 1,
              minWidth: "70%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
            }}
          >
            <Link href="/">
              <p className={styles.textLink}>Inicio</p>
            </Link>
            <a
              className={styles.textLink}
              href="https://github.com/haykodarb/esp8266_waterHeater"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
