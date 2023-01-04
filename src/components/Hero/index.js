import styles from "./hero.module.css";
import { GitHub, Mail, PenTool } from "react-feather";
import Link from "next/link";

const Hero = () => {
	return (
		<>
			<div className={styles.title}>
				<h1>Hayk Darbinyan</h1>
			</div>
			<div className={styles.subtitle}>
				<a
					href="https://github.com/haykodarb"
					target="_blank"
					rel="noreferrer noopener"
				>
					<GitHub color="#14213d" size={45} />
					GitHub
				</a>
				<a href="mailto:work@hayk.ar" >
					<Mail color="#14213d" size={45} />
					Email
				</a>
				<div className={styles.link}>
					<Link href='/blog' >
						<a>
							<PenTool color="#14213d" size={45} />
							Blog
						</a>
					</Link>
				</div>

			</div>
		</>
	);
};

export default Hero;
