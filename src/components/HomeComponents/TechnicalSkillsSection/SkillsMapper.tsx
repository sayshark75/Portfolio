"use client";
import { Flex, Text } from "@chakra-ui/react";
import SmHeading from "../Headings/SmHeading";
import { SkillsData } from "@/resources/SkillsData";
import Link from "next/link";

const SkillsMapper = () => {
  return SkillsData.map((data, index) => {
    return (
      <Flex
        w={"100%"}
        pos={"relative"}
        key={`skill-data-${index}`}
        minH={{ base: "140px", sm: "200px" }}
        p={{ base: "8px", sm: "10px", md: "12px", lg: "14px", xl: "16px" }}
        gap={"24px"}
        direction={"column"}
      >
        <SmHeading title1={data.title1} title2={data.title2} />
        <Flex w={"100%"} pt={3} wrap={"wrap"} gap={2}>
          {data.skills.map((skill, index) => {
            return (
              <Link key={`skill-data-${index}`} href={skill.link} target="_blank">
                <Flex
                  px={3}
                  py={1}
                  fontSize={"12px"}
                  rounded={"full"}
                  bgColor={skill.color}
                  color={skill.color === "darker" ? "white" : "#fff"}
                  shadow={"md"}
                  alignItems={"center"}
                  w={"100%"}
                  gap={1}
                >
                  {skill.icon}
                  <Text w={"max-content"}>{skill.title}</Text>
                </Flex>
              </Link>
            );
          })}
        </Flex>
      </Flex>
    );
  });
};

export default SkillsMapper;
