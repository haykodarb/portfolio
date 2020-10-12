import Head from "next/head";
import Link from "next/link";
import styles from "../components/route.module.css";

export default function Invernadero() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer} style={{ maxWidth: "100%" }}>
        <Head>
          <title>Hayk - Invernadero</title>
        </Head>
        <img src="/invernadero.png" style={{ maxWidth: 900 }}></img>
        <div className={styles.textContainer}>
          <h3 style={{ fontWeight: 700, color: "white", cursor: "default" }}>
            Monitor de invernaderos
          </h3>
          <p style={{ fontSize: 16, cursor: "default", maxWidth: "75%" }}>
            Se trata de un controlador electrónico que permite al usuario
            accedear a la data histórica de temperatura, humedad y luminosidad
            de su invernadero.
            <br />
            <br /> El dispositivo se encuentra armado alrededor del
            microcontrolador ESP8266, programado para obtener los valores de los
            sensores cada 15 minutos y realizar un POST a un servidor externo.
            <br />
            <br />
            El servidor consiste de una aplicación realizada en Node/Express que
            toma la data otorgada por el dispositivo y la guarda en una base de
            datos MySQL. Luego el usuario puede acceder a la data de su
            dispositivo iniciando sesión en la página web.
          </p>
          <div
            style={{
              display: "flex",
              flex: 1,
              minWidth: "90%",
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
              href="https://github.com/haykodarb/nodejs_greenhouse"
            >
              GitHub
            </a>

            <a className={styles.textLink} href="https://kassen.herokuapp.com/">
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
