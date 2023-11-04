import { Flex, Highlight, Text } from "@chakra-ui/react";
import { SkillsData } from "../../sources/TechnicalSkillsData";

const SkillsMapper = () => {
  return SkillsData.map((skills) => {
    return (
      <Flex>
        <Text>
          <Highlight query={skills} styles={{ color: "#006aff" }}>
            {skills.join(" ")}
          </Highlight>
        </Text>
      </Flex>
    );
  });
};

export default SkillsMapper;
