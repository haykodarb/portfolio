import styles from "./projects.module.css";
import ProjectLink from "../ProjectLink";

const Projects = ({ data }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Proyectos personales</h2>
			<div className={styles.subContainer}>
				{data.map((item) => (
					<ProjectLink
						key={item.id}
						href={item.href}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
