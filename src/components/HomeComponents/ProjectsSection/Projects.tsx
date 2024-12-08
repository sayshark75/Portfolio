"use client";
import { Box, ClientOnly, Flex } from "@chakra-ui/react";
import MdHeading from "../Headings/MdHeading";
import { useScrollContext } from "@/context/ScrollContext";
import GithubStats from "./GithubStats";
import CarouselComp from "../CarouselComp";
import ProjectMapper from "./ProjectMapper";

const Projects = () => {
  const { ProjectsRef } = useScrollContext();

  return (
    <Box w={"100%"} bgColor={"white"}>
      <Flex
        bgColor={"white"}
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
        <ClientOnly>
          <GithubStats />
        </ClientOnly>
      </Flex>
    </Box>
  );
};

export default Projects;
