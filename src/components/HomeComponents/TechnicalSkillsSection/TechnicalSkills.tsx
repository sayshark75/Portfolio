import { Box } from "@chakra-ui/react";
import MdHeading from "../Headings/MdHeading";
import CarouselComp from "../CarouselComp";
import SkillsMapper from "./SkillsMapper";
import TechnicalSkillsRefWrapper from "./TechnicalSkillsRefWrapper";

const TechnicalSkills = () => {
  return (
    <Box w={"100%"} bgColor={"white"}>
      <TechnicalSkillsRefWrapper>
        <MdHeading title1="Professional" title2="Skills" />
        <CarouselComp mapperFunction={SkillsMapper} slides={3} />
      </TechnicalSkillsRefWrapper>
    </Box>
  );
};

export default TechnicalSkills;
