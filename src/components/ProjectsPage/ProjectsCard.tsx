import { Button, Flex, Highlight, Text } from "@chakra-ui/react";
import { ProjectDataProps } from "../../TYPES";
import SmHeading from "../Headings/SmHeading";

const ProjectsCard = ({ live, github, image, workType, heading1, heading2, summary, TStack }: ProjectDataProps) => {
  return (
    <Flex
      transition={"500ms"}
      mb={"8"}
      mx={"4"}
      bgColor={"#3a3a3a"}
      direction={["column"]}
      rounded={"lg"}
      shadow={"xl"}
      pos={"relative"}
      p={4}
      justifyContent={"space-between"}
      alignItems={"center"}
      alignSelf={"stretch"}
      minW={"200px"}
      w={"100%"}
      maxW={"410px"}
    >
      {/* Image of Project */}
      <Flex
        direction={"column"}
        bgImg={image}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPos={"top"}
        w={"100%"}
        h={"230px"}
        mb={4}
        transition={"7s"}
        _hover={{ bgPos: "bottom" }}
      ></Flex>
      {/* Details of Project */}
      <Flex transition={"500ms"} direction={"column"} gap={2}>
        <Flex transition={"500ms"} justifyContent={"center"} alignItems={"center"} direction={{ base: "column", sm: "column", md: "row" }}>
          <SmHeading title1={heading1} title2={heading2 || ""} />
        </Flex>
        <Text transition={"500ms"} as={"b"} fontFamily={"Poppins"} fontWeight={300} letterSpacing={"2px"} color={"#CCC"}>
          {summary}
        </Text>
        <Text transition={"500ms"} justifyContent={"center"} gap={"4"} fontSize={"sm"} fontWeight={"semibold"} color={"textPrimary"}>
          <Highlight
            query={TStack}
            styles={{
              fontFamily: "Poppins",
              fontWeight: 300,
              fontSize: "12px",
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
          fontSize={"12px"}
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
              fontSize={"16px"}
              width={"7rem"}
              color={"#fff"}
              _hover={{}}
              _active={{ bgColor: "#006aff", transform: "translateY(10px)" }}
              bgColor={"#2a2a2a"}
            >
              View Page
            </Button>
          </a>
          {github && (
            <a href={github} target={"_blank"} rel="noreferrer">
              <Button transition={"500ms"} fontSize={"16px"} width={"7rem"} color={"#fff"} _hover={{}} _active={{ bgColor: "#006aff" }} bgColor={"#2a2a2a"}>
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
