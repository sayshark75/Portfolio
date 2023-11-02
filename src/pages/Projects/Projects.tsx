import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ScrollContext } from "../../contexts/ScrollContext";
import { ProjectsData } from "../../sources/ProjectsData";
import ProjectsCard from "../../components/ProjectsPage/ProjectsCard";
import GithubStats from "../GithubStats/GithubStats";
import MdHeading from "../../components/Headings/MdHeading";

const Projects = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    return;
  }

  const { ProjectsRef } = context;
  return (
    <>
      <Flex ref={ProjectsRef} transition={"500ms"} justifyContent={"center"} pt={"10"} minH={"100vh"} alignItems={"center"} direction={"column"}>
        <MdHeading title1="My" title2="Projects" />
        {ProjectsData.map((project, id) => {
          return <ProjectsCard key={id} {...project} />;
        })}
        <MdHeading title1="Day\'s" title2="I Code" />
        <GithubStats />
      </Flex>
    </>
  );
};

export default Projects;
