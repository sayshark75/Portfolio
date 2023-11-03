import { nanoid } from "nanoid";
import { ProjectsData } from "../../sources/ProjectsData";
import ProjectsCard from "./ProjectsCard";

const ProjectMapper = () => {
  return ProjectsData.map((project) => {
    return <ProjectsCard key={nanoid()} {...project} />;
  });
};

export default ProjectMapper;
