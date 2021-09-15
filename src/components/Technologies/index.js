import styles from "./technologies.module.css";

const Technologies = () => {
	return (
		<div className={styles.techContainer}>
			<p className={styles.techTitle}>Tecnologías utilizadas</p>
			<ul className={styles.techList}>
				<li className={styles.listItem}>Node.js</li>
				<li className={styles.listItem}>React (Web/Native)</li>
				<li className={styles.listItem}>Next.js</li>
				<li className={styles.listItem}>Flutter</li>
				<li className={styles.listItem}>MySQL</li>
				<li className={styles.listItem}>MongoDB</li>
				<li className={styles.listItem}>Embedded C / C++</li>
				<li className={styles.listItem}>Linux</li>
			</ul>
		</div>
	);
};

export default Technologies;
