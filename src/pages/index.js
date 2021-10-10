import Head from "../components/Head";
import Container from "../components/Container";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import { getProjects } from "../helpers/getProjects";

export default function Index() {
	const projectsData = getProjects();

	return (
		<>
			<Head />
			<Container>
				<Hero />
				<Projects data={projectsData.data} />
				<Technologies />
				<AboutMe />
			</Container>
		</>
	);
}
