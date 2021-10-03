import styles from "./technologies.module.css";

const Technologies = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.techTitle}>Tecnologías trabajadas</h2>
			<div className={styles.subContainer}>
				<div className={styles.subCategory}>
					<h3 className={styles.subCategoryTitle}>Front-End</h3>
					<ul className={styles.techList}>
						<li className={styles.listItem}>React (Web/Native)</li>
						<li className={styles.listItem}>Next.js</li>
						<li className={styles.listItem}>Flutter</li>
						<li className={styles.listItem}>QT/QML</li>
					</ul>
				</div>
				<div className={styles.subCategory}>
					<h3 className={styles.subCategoryTitle}>Back-End</h3>
					<ul className={styles.techList}>
						<li className={styles.listItem}>Node.js</li>
						<li className={styles.listItem}>MySQL</li>
						<li className={styles.listItem}>MongoDB</li>
						<li className={styles.listItem}>Linux</li>
					</ul>
				</div>

				<div className={styles.subCategory}>
					<h3 className={styles.subCategoryTitle}>Electrónica</h3>
					<ul className={styles.techList}>
						<li className={styles.listItem}>Embedded C / C++</li>
						<li className={styles.listItem}>KiCAD</li>
						<li className={styles.listItem}>RTOS (ChibiOS)</li>
						<li className={styles.listItem}>IoT</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
