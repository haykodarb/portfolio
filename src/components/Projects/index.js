import styles from "./projects.module.css";
import ProjectLink from "../ProjectLink";

const Projects = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <ProjectLink
          key={item.id}
          href={item.href}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Projects;
