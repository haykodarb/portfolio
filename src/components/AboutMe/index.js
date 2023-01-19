import styles from "./aboutme.module.css";

const AboutMe = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>About me</h2>
			<p className={styles.text}>
				Mi nombre es Hayk Darbinyan, soy un desarrollador de
				la ciudad de San Carlos de Bariloche en la provincia de Rio Negro. 
				<br />
				<br />
				Me dedico a la producción de hardware, firmware y software, tanto en
				lo profesional como en mi tiempo personal.
				<br />
				<br />
				Esto incluye la creación de dispositivos electrónicos, diseño de circuitos y PCBs, programación de firmware 
				y desarrollo de servidores, paginas web y aplicaciones moviles.
				<br />
				<br />
				Además de todo esto soy también un gran entusiasta del Free Software y
				Open Hardware.
			</p>
		</div>
	);
};

export default AboutMe;
