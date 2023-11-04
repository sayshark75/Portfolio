import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ScrollContext } from "../../contexts/ScrollContext";
import GithubStats from "../GithubStats/GithubStats";
import MdHeading from "../../components/Headings/MdHeading";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import ProjectMapper from "../../components/ProjectsPage/ProjectMapper";

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
        <CarouselComp mapperFunction={ProjectMapper} />
        <MdHeading title1="Day's" title2="I Code" />
        <GithubStats />
      </Flex>
    </>
  );
};

export default Projects;
