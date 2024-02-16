import { Flex } from "@chakra-ui/react";

import { ScrollContext } from "../../contexts/ScrollContext";
import { useContext } from "react";

import MdHeading from "../../components/Headings/MdHeading";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import SkillsMapper from "../../components/TechnicalSkillPage/SkillsMapper";

const TechnicalSkills = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    return;
  }
  const { SkillsRef } = context;
  return (
    <Flex
      ref={SkillsRef}
      transition={"500ms"}
      direction={"column"}
      minH={["40vh"]}
      justifyContent={"center"}
      alignItems={"center"}
      mx={"3"}
    >
      <MdHeading title1="Technical" title2="Skills" />
      <CarouselComp mapperFunction={SkillsMapper} slides={3} />
    </Flex>
  );
};

export default TechnicalSkills;
