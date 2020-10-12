import Head from "next/head";
import Link from "next/link";
import styles from "../components/home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hayk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.homeTitle}>
          <h1>Hayk Darbinyan</h1>
        </div>
        <div className={styles.test}>
          <h2>Portfolio realizado en Next.js</h2>
        </div>
        <div className={styles.projectContainer}>
          <Link href="/invernadero">
            <div className={styles.projectItem}>
              <h3 className={styles.projectTitle}>Invernadero</h3>
              <p className={styles.projectText}>
                Monitor de temperatura, humedad e iluminación para invernaderos
              </p>
            </div>
          </Link>
          <Link href="/termotanque">
            <div className={styles.projectItem}>
              <h3 className={styles.projectTitle}>Termotanque</h3>
              <p className={styles.projectText}>
                Controlador electrónico para termotanques solares
              </p>
            </div>
          </Link>
          <Link href="/prettykitty">
            <div className={styles.projectItem}>
              <h3 className={styles.projectTitle}>Pretty Kitty Twitty</h3>
              <p className={styles.projectText}>
                Bot de twitter para subir fotos de gatitos de manera periódica
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
