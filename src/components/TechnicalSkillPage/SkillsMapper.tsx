import { Flex, Highlight, Text } from "@chakra-ui/react";
import { SkillsData } from "../../sources/TechnicalSkillsData";
import SmHeading from "../Headings/SmHeading";
import { nanoid } from "nanoid";

const SkillsMapper = () => {
  return SkillsData.map((data) => {
    return (
      <Flex w={"100%"} key={nanoid()} minH={"200px"} p={["8px", "10px", "12px", "14px", "16px"]} gap={"24px"} direction={"column"}>
        <SmHeading title1={data.title1} title2={data.title2} />
        <Text mt={["10px", "10px", "12px", "14px", "16px"]}>
          <Highlight
            query={data.skills}
            styles={{
              color: "light",
              border: "1px solid",
              borderColor: "accent",
              fontWeight: "500",
              rounded: "full",
              px: "12px",
              py: "2px",
              lineHeight: ["24px", "26px", "28px", "30px", "32px"],
              fontFamily: "Poppins",
              letterSpacing: "2px",
              fontSize: ["10px", "11px", "12px", "13px", "14px"],
            }}
          >
            {data.skills.join(" ")}
          </Highlight>
        </Text>
      </Flex>
    );
  });
};

export default SkillsMapper;
