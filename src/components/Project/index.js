import Head from "../Head";
import styles from "./project.module.css";
import Link from "next/link";
import Container from "../Container";

const Project = ({ data }) => {
	const { title, internalDetails } = data;

	const renderDescription = () => {
		return {
			__html: internalDetails.description,
		};
	};

	return (
		<Container>
			<div className={styles.subContainer}>
				<Head title={title} />
				<div className={styles.imageContainer}>
					{internalDetails.images.map((element) => {
						console.log(element);
						return <img src={element} className={styles.image} />;
					})}
				</div>

				<div className={styles.textContainer}>
					<h3 className={styles.title}>{internalDetails.title}</h3>
					<p
						className={styles.description}
						dangerouslySetInnerHTML={renderDescription()}
					/>
					<div className={styles.buttonsGroup}>
						<Link href="/">
							<p className={styles.textLink}>Inicio</p>
						</Link>

						{internalDetails.githubLink && (
							<a
								className={styles.textLink}
								href={internalDetails.githubLink}
								target="_blank"
								rel="noreferrer noopener"
							>
								GitHub
							</a>
						)}

						{internalDetails.webLink && (
							<a
								className={styles.textLink}
								href={internalDetails.webLink}
								target="_blank"
								rel="noreferrer noopener"
							>
								Web
							</a>
						)}
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Project;
