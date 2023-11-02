import { Button, Flex, Heading, Image, Text, useColorMode } from "@chakra-ui/react";
import { ProjectDataProps } from "../../TYPES";

const ProjectsCard = ({ live, github, imgDark, imgLight, heading1, heading2, summary, TStack }: ProjectDataProps) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      transition={"500ms"}
      mb={"8"}
      mx={"4"}
      bgColor={"cardBg"}
      gap={"6"}
      direction={{ base: "column", sm: "column", md: "row" }}
      borderRadius={"30px"}
      boxShadow={"xl"}
      border={"6px double"}
      borderColor={"cardBorder"}
      p={"5"}
      justifyContent={"center"}
      alignItems={"center"}
      _hover={{ boxShadow: "xl", border: "6px double", borderColor: "heartColor" }}
    >
      <Flex direction={"column"}>
        <Image src={colorMode === "dark" ? imgDark : imgLight} transition={"500ms"} w={{ base: "auto", sm: "auto", md: "300px", lg: "500px" }} />
        <Flex transition={"500ms"} p={"2"} borderRadius={"5"} justifyContent={"center"} mt={"2"} alignItems={"center"} gap={"4"}>
          <a href={live} target={"_blank"} rel="noreferrer">
            <Button
              transition={"500ms"}
              fontSize={"16px"}
              width={"7rem"}
              color={"buttonText"}
              _hover={{ bgColor: "buttonBgHover", color: "buttonTextHover" }}
              bgColor={"buttonBg"}
              border={"2px solid"}
              borderColor={"buttonBorder"}
            >
              View Page
            </Button>
          </a>
          {github && (
            <a href={github} target={"_blank"} rel="noreferrer">
              <Button
                transition={"500ms"}
                fontSize={"16px"}
                width={"7rem"}
                color={"buttonText"}
                _hover={{ bgColor: "buttonBgHover", color: "buttonTextHover" }}
                bgColor={"buttonBg"}
                border={"2px solid"}
                borderColor={"buttonBorder"}
              >
                Github
              </Button>
            </a>
          )}
        </Flex>
      </Flex>

      <Flex transition={"500ms"} direction={"column"} w={{ base: "auto", sm: "auto", md: "435px" }}>
        <Flex transition={"500ms"} justifyContent={"center"} alignItems={"center"} direction={{ base: "column", sm: "column", md: "row" }}>
          <Heading transition={"500ms"} color={"textPrimary"} fontSize={"lg"} my={"2"}>
            {heading1}&nbsp;
          </Heading>
          {heading2 ? (
            <Heading transition={"500ms"} fontSize={"lg"} color={"textSecondary"} my={"2"}>
              {heading2}
            </Heading>
          ) : null}
        </Flex>
        <Text transition={"500ms"} as={"b"} textAlign={"justify"} color={"textPrimary"}>
          {summary}
        </Text>
        <Flex wrap={"wrap"} transition={"500ms"} mt={"8"} justifyContent={"center"} gap={"4"} textAlign={"center"} fontSize={"sm"} fontWeight={"semibold"} color={"textPrimary"}>
          {TStack.map((el, id) => {
            return id < TStack.length - 1 ? el + " | " : el;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectsCard;
