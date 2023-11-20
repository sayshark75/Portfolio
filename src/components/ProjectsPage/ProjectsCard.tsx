import { Button, Flex, Highlight, Text } from "@chakra-ui/react";
import { ProjectDataProps } from "../../TYPES";
import SmHeading from "../Headings/SmHeading";

const ProjectsCard = ({ live, github, image, workType, heading1, heading2, summary, TStack }: ProjectDataProps) => {
  return (
    <Flex
      transition={"500ms"}
      mb={["2", "4", "2", "8"]}
      mx={["1", "4", "1"]}
      bgColor={"#3a3a3a"}
      direction={["column"]}
      rounded={"lg"}
      shadow={"xl"}
      p={[2, 4]}
      justifyContent={"space-between"}
      alignSelf={"stretch"}
    >
      {/* Image of Project */}
      <Flex
        direction={"column"}
        bgImg={image}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPos={"top"}
        w={"100%"}
        h={["130px", "230px", "160px", "170px", "230px"]}
        mb={4}
        transition={"7s"}
        _hover={{ bgPos: "bottom", boxShadow: "0px 0px 8px #006aff" }}
      ></Flex>
      {/* Details of Project */}
      <Flex transition={"500ms"} direction={"column"} gap={2}>
        <Flex transition={"500ms"} justifyContent={"center"} alignItems={"center"} direction={{ base: "column", sm: "column", md: "row" }}>
          <SmHeading title1={heading1} title2={heading2 || ""} />
        </Flex>
        <Text
          transition={"500ms"}
          fontSize={["10px", "14px", "12px", "10px", "16px"]}
          as={"b"}
          fontFamily={"Poppins"}
          fontWeight={300}
          letterSpacing={"2px"}
          color={"#CCC"}
        >
          {summary}
        </Text>
        <Text
          transition={"500ms"}
          justifyContent={"center"}
          gap={"4"}
          fontSize={["10px", "12px", "12px", "10px", "12px"]}
          fontWeight={"semibold"}
          color={"#fff"}
          h={"60px"}
        >
          <Highlight
            query={TStack}
            styles={{
              fontFamily: "Poppins",
              fontWeight: 300,
              letterSpacing: "2px",
              color: "#fff",
              mr: "2",
              px: "2",
              rounded: "full",
              border: "1px solid #006aff",
              lineHeight: "28px",
            }}
          >
            {TStack.join(" ")}
          </Highlight>
        </Text>
        <Text
          fontFamily={"Poppins"}
          alignSelf={"flex-start"}
          fontWeight={400}
          fontSize={["10px", "12px"]}
          letterSpacing={"2px"}
          bgColor={"#006aff"}
          color={"#fff"}
          rounded={"full"}
          px={"12px"}
          py={"2px"}
        >
          {workType}
        </Text>
        <Flex transition={"500ms"} p={"2"} borderRadius={"5"} justifyContent={"space-between"} mt={"2"} alignItems={"center"} gap={"4"}>
          <a href={live} target={"_blank"} rel="noreferrer">
            <Button
              transition={"500ms"}
              fontSize={["14px", "16px"]}
              width={"7rem"}
              fontWeight={["300", "400"]}
              color={"#fff"}
              letterSpacing={"2px"}
              _hover={{}}
              _active={{ bgColor: "#006aff", transform: "translateY(10px)" }}
              bgColor={"#2a2a2a"}
            >
              View Page
            </Button>
          </a>
          {github && (
            <a href={github} target={"_blank"} rel="noreferrer">
              <Button
                transition={"500ms"}
                fontSize={["14px", "16px"]}
                width={"7rem"}
                fontWeight={["300", "400"]}
                color={"#fff"}
                letterSpacing={"2px"}
                _hover={{}}
                _active={{ bgColor: "#006aff", transform: "translateY(10px)" }}
                bgColor={"#2a2a2a"}
              >
                Github
              </Button>
            </a>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectsCard;
