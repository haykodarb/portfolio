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
				Me dedico profesionalmente a la creación de hardware, firmware y software, tanto en
				mi trabajo profesional como en mi tiempo personal.
				<br />
				<br />
				Esto incluye el diseño de dispositivos electrónicos, tanto en el diseño
				del circuito y el PCB como en el desarrollo del firmware, así como
				también la programación de servidores, paginas web y aplicaciones
				moviles.
				<br />
				<br />
				Además de todo esto soy también un gran entusiasta del Free Software y
				Open Hardware.
			</p>
		</div>
	);
};

export default AboutMe;
