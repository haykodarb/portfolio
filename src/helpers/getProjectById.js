import { getProjects } from "./getProjects";

export const getProjectById = (slug) => {
  const projects = getProjects();

  return projects.data.find((item) => item.id === slug);
};
