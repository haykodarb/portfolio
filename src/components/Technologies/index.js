import styles from "./technologies.module.css";

const Technologies = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.techTitle}>Tecnologías trabajadas</h2>
			<div className={styles.subContainer}>
				<div className={styles.subCategory}>
					<h3 className={styles.subCategoryTitle}>Front-End</h3>
					<ul className={styles.techList}>
						<li className={styles.listItem}>
							<img src="/tech/react.png" className={styles.itemImage} />
							<p>React (Web/Native)</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/nextjs.svg" className={styles.itemImage} />
							<p>Next.js</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/flutter.png" className={styles.itemImage} />
							<p>Flutter</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/qt.png" className={styles.itemImage} />
							<p>QT/QML</p>
						</li>
					</ul>
				</div>
				<div className={styles.subCategory}>
					<h3 className={styles.subCategoryTitle}>Back-End</h3>
					<ul className={styles.techList}>
						<li className={styles.listItem}>
							<img src="/tech/nodejs.png" className={styles.itemImage} />
							<p>Node.js</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/mysql.png" className={styles.itemImage} />
							<p>MySQL </p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/mongodb.png" className={styles.itemImage} />
							<p>MongoDB</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/linux.png" className={styles.itemImage} />
							<p>Linux</p>
						</li>
					</ul>
				</div>

				<div className={styles.subCategory}>
					<h3 className={styles.subCategoryTitle}>Electrónica</h3>
					<ul className={styles.techList}>
						<li className={styles.listItem}>
							<img src="/tech/c.png" className={styles.itemImage} />
							<p>Embedded C / C++</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/kicad.png" className={styles.itemImage} />
							<p>KiCAD</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/rtos.png" className={styles.itemImage} />
							<p>RTOS</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/iot.png" className={styles.itemImage} />
							<p>IoT</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
