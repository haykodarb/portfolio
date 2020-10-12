import Head from "next/head";
import Link from "next/link";
import styles from "../components/home.module.css";
import { GitHub, Mail } from "react-feather";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Hayk</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initialscale=1.0" />
      </Head>
      <div className={styles.container}>
        <div className={styles.homeTitle}>
          <h1>Hayk Darbinyan</h1>
        </div>
        <div className={styles.homeSubtitle}>
          <h2 style={{ flex: 8, textAlign: "center" }}>
            Portfolio realizado en Next.js
          </h2>
          <a href="https://github.com/haykodarb" style={{ flex: 1 }}>
            <GitHub color="#14213d" size={45} />
          </a>
          <a href="mailto:haykodarb@gmail.com" style={{ flex: 1 }}>
            <Mail color="#14213d" size={45} />
          </a>
        </div>
        <div className={styles.projectContainer}>
          <Link href="/invernadero">
            <div className={styles.projectItem}>
              <h3 className={styles.projectTitle}>Invernadero</h3>
              <p className={styles.projectText}>
                Aplicación web para el monitoreo de temperatura, humedad e
                iluminación de invernaderos.
              </p>
            </div>
          </Link>
          <Link href="/termotanque">
            <div className={styles.projectItem}>
              <h3 className={styles.projectTitle}>Termotanque</h3>
              <p className={styles.projectText}>
                Controlador electrónico para termotanques solares con interfaz
                por aplicación movil.
              </p>
            </div>
          </Link>
          <Link href="/prettykitty">
            <div className={styles.projectItem}>
              <h3 className={styles.projectTitle}>Pretty Kitty Twitty</h3>
              <p className={styles.projectText}>
                Bot de Twitter para subir fotos de gatitos desde la cuenta del
                usuario de manera periódica.
              </p>
            </div>
          </Link>
        </div>
        <div className={styles.techContainer}>
          <p className={styles.techTitle}>Tecnologías utilizadas</p>
          <ul className={styles.techList}>
            <li>Javascript</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
            <li>{"React (Web & Native)"}</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Arduino</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
