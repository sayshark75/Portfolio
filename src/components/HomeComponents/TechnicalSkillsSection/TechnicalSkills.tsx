"use client";
import { Box, Flex } from "@chakra-ui/react";
import { useScrollContext } from "@/context/ScrollContext";
import MdHeading from "../Headings/MdHeading";
import CarouselComp from "../CarouselComp";
import SkillsMapper from "./SkillsMapper";

const TechnicalSkills = () => {
  const { SkillsRef } = useScrollContext();

  return (
    <Box w={"100%"} bgColor={"white"}>
      <Flex
        w={"100%"}
        maxW={"1440px"}
        bgColor={"white"}
        mx={"auto"}
        ref={SkillsRef}
        transition={"500ms"}
        direction={"column"}
        minH={["40vh"]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <MdHeading title1="Professional" title2="Skills" />
        <CarouselComp mapperFunction={SkillsMapper} slides={3} />
      </Flex>
    </Box>
  );
};

export default TechnicalSkills;
