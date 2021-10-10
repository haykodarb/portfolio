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
							<img
								src="/tech/react.png"
								style={{
									height: 75,
									width: 75,
									alignSelf: "center",
								}}
							/>
							<p>React (Web/Native)</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/nextjs.svg" height="75px" />
							<p>Next.js</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/flutter.png" height="75px" />
							<p>Flutter</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/qt.png" height="75px" />
							<p>QT/QML</p>
						</li>
					</ul>
				</div>
				<div className={styles.subCategory}>
					<h3 className={styles.subCategoryTitle}>Back-End</h3>
					<ul className={styles.techList}>
						<li className={styles.listItem}>
							<img src="/tech/nodejs.png" height="75px" />
							<p>Node.js</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/mysql.png" height="75px" />
							<p>MySQL </p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/mongodb.png" height="75px" />
							<p>MongoDB</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/linux.png" height="75px" />
							<p>Linux</p>
						</li>
					</ul>
				</div>

				<div className={styles.subCategory}>
					<h3 className={styles.subCategoryTitle}>Electrónica</h3>
					<ul className={styles.techList}>
						<li className={styles.listItem}>
							<img
								src="/tech/c.png"
								style={{
									height: 75,
									width: 75,
									alignSelf: "center",
								}}
							/>
							<p>Embedded C / C++</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/kicad.png" height="75px" />
							<p>KiCAD</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/rtos.png" height="75px" />
							<p>RTOS</p>
						</li>
						<li className={styles.listItem}>
							<img src="/tech/iot.png" height="75px" />
							<p>IoT</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
