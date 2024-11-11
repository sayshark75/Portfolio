import { Flex } from "@chakra-ui/react";

import { ScrollContext } from "../../contexts/ScrollContext";
import { useContext } from "react";

import MdHeading from "../../components/Headings/MdHeading";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import SkillsMapper from "../../components/TechnicalSkillPage/SkillsMapper";
import ReactGA from "react-ga4";

const TechnicalSkills = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    return;
  }
  const { SkillsRef } = context;

  ReactGA.event({
    category: "pagevisit",
    action: `Viewed Technical Skills Page`,
  });
  return (
    <Flex
      maxW={"1440px"}
      mx={"auto"}
      ref={SkillsRef}
      transition={"500ms"}
      direction={"column"}
      minH={["40vh"]}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <MdHeading title1="Technical" title2="Skills" />
      <CarouselComp mapperFunction={SkillsMapper} slides={3} />
    </Flex>
  );
};

export default TechnicalSkills;
