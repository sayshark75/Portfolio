import { LiveProjectsData } from "@/resources/ProjectsData";
import ProjectsCard from "./ProjectsCard";

const LiveProjectsMapper = () => {
  return LiveProjectsData.map((project, index) => {
    return <ProjectsCard key={`live-project-data-key-${index}`} {...project} />;
  });
};

export default LiveProjectsMapper;
