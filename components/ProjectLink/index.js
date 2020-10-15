import Link from "next/link";
import styles from "./project.module.css";

const ProjectLink = ({ href, title, description }) => {
  return (
    <Link href={href}>
      <div className={styles.item}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};

export default ProjectLink;
