import styles from "./hero.module.css";
import { GitHub, Mail } from "react-feather";

const Hero = () => {
	return (
		<>
			<div className={styles.title}>
				<h1>Hayk Darbinyan</h1>
			</div>
			<div className={styles.subtitle}>
				<h2 style={{ flex: 8, textAlign: "center" }}>
					Portfolio realizado en Next.js
				</h2>
				<a
					href="https://github.com/haykodarb"
					target="_blank"
					rel="noreferrer noopener"
					style={{ flex: 1 }}
				>
					<GitHub color="#14213d" size={45} />
				</a>
				<a href="mailto:haykodarb@gmail.com" style={{ flex: 1 }}>
					<Mail color="#14213d" size={45} />
				</a>
			</div>
		</>
	);
};

export default Hero;
