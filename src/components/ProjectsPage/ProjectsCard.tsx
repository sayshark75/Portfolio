import { Button, Flex, Highlight, Text } from "@chakra-ui/react";
import { ProjectDataProps } from "../../TYPES";
import SmHeading from "../Headings/SmHeading";
import ReactGA from "react-ga4";

const ProjectsCard = ({ live, github, image, workType, heading1, heading2, status, summary, TStack }: ProjectDataProps) => {
  const handlePageVisit = () => {
    ReactGA.event({
      category: "projectvisit",
      action: `Viewed Project: ${heading1} ${heading2}`,
    });
  };
  const handleGithubVisit = () => {
    ReactGA.event({
      category: "projectvisit",
      action: `Viewed Github: ${heading1} ${heading2}`,
    });
  };
  return (
    <Flex
      pos={"relative"}
      transition={"500ms"}
      mb={["2", "4", "2", "8"]}
      mx={["1", "4", "1"]}
      direction={["column"]}
      rounded={"lg"}
      overflow={"hidden"}
      minH={"100%"}
      _hover={{
        _after: {
          w: "100%",
          minH: "100%",
          rounded: "none",
        },
      }}
      _after={{
        content: '"."',
        w: "0px",
        minH: "0px",
        color: "transparent",
        transition: "500ms",
        bgColor: "primaryLight",
        rounded: "full",
        pos: "absolute",
        bottom: "0px",
        left: "0px",
        zIndex: -1,
      }}
    >
      {/* Image of Project */}
      <Flex
        direction={"column"}
        bgImg={image}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPos={"top"}
        w={"100%"}
        h={["160px", "230px", "160px", "170px", "230px"]}
        mb={4}
        transition={"7s"}
        _hover={{ bgPos: "bottom" }}
      ></Flex>
      {/* Details of Project */}
      <Flex transition={"500ms"} direction={"column"} gap={1} p={["8px 16px", 4]}>
        <Flex transition={"500ms"} justifyContent={"center"} alignItems={"center"} direction={{ base: "column", sm: "column", md: "row" }}>
          <SmHeading title1={heading1} title2={heading2 || ""} />
        </Flex>
        <Text
          transition={"500ms"}
          fontSize={["10px", "14px", "12px", "10px", "16px"]}
          as={"b"}
          fontFamily={"Poppins"}
          fontWeight={400}
          letterSpacing={"2px"}
          color={"text"}
        >
          {summary}
        </Text>
        <Text
          transition={"500ms"}
          justifyContent={"center"}
          gap={"2"}
          fontSize={["10px", "12px", "12px", "10px", "12px"]}
          fontWeight={"semibold"}
          color={"text"}
          minH={"70px"}
        >
          <Highlight
            query={TStack}
            styles={{
              fontFamily: "Poppins",
              fontWeight: 400,
              letterSpacing: "2px",
              color: "text",
              mr: "1",
              px: "2",
              rounded: "full",
              border: "1px solid",
              borderColor: "accent",
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
          bgColor={"accent"}
          color={"#fff"}
          rounded={"full"}
          px={"12px"}
          py={"2px"}
        >
          {workType}
        </Text>
        <Text
          fontFamily={"Poppins"}
          alignSelf={"flex-start"}
          fontWeight={400}
          fontSize={["10px", "12px"]}
          letterSpacing={"2px"}
          bgColor={"accentLight"}
          color={"#fff"}
          rounded={"full"}
          px={"12px"}
          py={"2px"}
        >
          {status}
        </Text>
        <Flex transition={"500ms"} borderRadius={"5"} justifyContent={"space-between"} mt={"2"} alignItems={"center"} gap={"4"} mb={"8px"}>
          <a href={live} target={"_blank"} rel="noreferrer">
            <Flex pos={"relative"}>
              <Button
                pos={"relative"}
                zIndex={2}
                transition={"500ms"}
                rounded={"base"}
                fontSize={["14px", "16px"]}
                width={"7rem"}
                fontWeight={["300", "400"]}
                color={"#fff"}
                letterSpacing={"2px"}
                _active={{ transform: "translateY(10px)" }}
                bgColor={"accent"}
                _hover={{
                  color: "accent",
                  _after: {
                    w: "100%",
                    left: "0px",
                    border: "1px solid",
                    borderColor: "accent",
                  },
                }}
                _after={{
                  content: '"."',
                  color: "transparent",
                  w: "0px",
                  minH: "100%",
                  pos: "absolute",
                  top: "0px",
                  right: "0px",
                  zIndex: -1,
                  transition: "500ms",
                  bgColor: "primary",
                  rounded: "base",
                  border: "0px solid",
                  borderColor: "accent",
                }}
                onClick={handlePageVisit}
              >
                View Page
              </Button>
            </Flex>
          </a>
          {github && (
            <a href={github} target={"_blank"} rel="noreferrer">
              <Flex pos={"relative"}>
                <Button
                  pos={"relative"}
                  zIndex={2}
                  transition={"500ms"}
                  rounded={"base"}
                  fontSize={["14px", "16px"]}
                  width={"7rem"}
                  fontWeight={["300", "400"]}
                  color={"#fff"}
                  letterSpacing={"2px"}
                  _active={{ transform: "translateY(10px)" }}
                  bgColor={"accent"}
                  _hover={{
                    color: "accent",
                    _after: {
                      w: "100%",
                      left: "0px",
                      border: "1px solid",
                      borderColor: "accent",
                    },
                  }}
                  _after={{
                    content: '"."',
                    color: "transparent",
                    w: "0px",
                    minH: "100%",
                    pos: "absolute",
                    top: "0px",
                    right: "0px",
                    zIndex: -1,
                    transition: "500ms",
                    bgColor: "primary",
                    rounded: "base",
                    border: "0px solid",
                    borderColor: "accent",
                  }}
                  onClick={handleGithubVisit}
                >
                  Github
                </Button>
              </Flex>
            </a>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectsCard;
