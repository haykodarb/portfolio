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
					style={{ flex: 1 }}
				>
					<GitHub color="#14213d" size={45} />
				</a>
				<a href="mailto:haykodarb@gmail.com" style={{ flex: 1 }}>
					<Mail color="#14213d" size={45} />
				</a>
				<div style={{ flex: 1, cursor: "pointer", alignItems: 'center' }}>

					<Link href='/blog'>
						<a href="/blog">
							<PenTool color="#14213d" size={45} />
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Hero;
