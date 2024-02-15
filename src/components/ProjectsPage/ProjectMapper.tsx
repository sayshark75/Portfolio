import { ProjectsData } from "../../sources/ProjectsData";
import ProjectsCard from "./ProjectsCard";

const ProjectMapper = () => {
  return ProjectsData.map((project, index) => {
    return <ProjectsCard key={`project-data-key-${index}`} {...project} />;
  });
};

export default ProjectMapper;
