import Head from "next/head";
import Link from "next/link";
import styles from "../components/route.module.css";

export default function PrettyKitty() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer} style={{ maxWidth: "100%" }}>
        <Head>
          <title>Hayk - Invernadero</title>
        </Head>
        <img src="/prettykitty.png" style={{ maxWidth: 900 }}></img>
        <div className={styles.textContainer}>
          <h3 style={{ fontWeight: 700, color: "white", cursor: "default" }}>
            Pretty Kitty Twitty
          </h3>
          <p style={{ fontSize: 16, cursor: "default", maxWidth: "75%" }}>
            Consiste de un bot de Twitter al que se inicia sesión con su propia
            cuenta.
            <br /> El usuario entonces puede subir imágenes de gatitos y esperar
            a que el bot las suba periódicamente. <br />
            <br />
            Utiliza una API externa para filtrar el contenido de las imágenes
            antes de subirlas a una base de datos mongoDB. <br /> Luego un
            cronjob se encarga de twittear una de las fotos cada 3 horas.
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
              href="https://github.com/haykodarb/node_prettykittytwitty"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>

            <a
              className={styles.textLink}
              href="https://prettykittytwitty.herokuapp.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
