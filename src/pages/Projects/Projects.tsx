import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ScrollContext } from "../../contexts/ScrollContext";
import GithubStats from "../GithubStats/GithubStats";
import MdHeading from "../../components/Headings/MdHeading";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import ProjectMapper from "../../components/ProjectsPage/ProjectMapper";
import ReactGA from "react-ga4";

const Projects = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    return;
  }

  const { ProjectsRef } = context;

  ReactGA.event({
    category: "pagevisit",
    action: `Viewed Projects Page`,
  });
  return (
    <>
      <Flex
        w={"100%"}
        maxW={"1440px"}
        mx={"auto"}
        ref={ProjectsRef}
        transition={"500ms"}
        justifyContent={"center"}
        pt={"10"}
        minH={"100vh"}
        alignItems={"center"}
        direction={"column"}
        gap={8}
      >
        <MdHeading title1="My" title2="Projects" />
        <CarouselComp mapperFunction={ProjectMapper} slides={3} />
        <MdHeading title1="Day's" title2="I Code" />
        <GithubStats />
      </Flex>
    </>
  );
};

export default Projects;
