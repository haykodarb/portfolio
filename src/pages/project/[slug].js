import Project from "../../components/Project";
import { getProjects } from "../../helpers/getProjects";
import { getProjectById } from "../../helpers/getProjectById";

export default function ProjectPage({ slug }) {
  const projectData = getProjectById(slug);

  return <Project data={projectData} />;
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];

  try {
    const data = getProjects().data;
    data.forEach((item) => {
      paths.push(item.href);
    });
  } catch (error) {}

  return {
    paths,
    fallback: false,
  };
}
