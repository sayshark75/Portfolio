import { useContext } from "react";
import { Button, Flex, Grid, Heading, Image, List, ListIcon, ListItem, Text, useBreakpointValue } from "@chakra-ui/react";

import { MdOutlineWbSunny } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { ScrollContext } from "../../contexts/ScrollContext";
import ReactGA from "react-ga4";
import { ProfilePicBlue } from "../../sources/Images";
import { resumeDownload, resumelink } from "../../sources/Links";

const About = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    return;
  }
  const { AboutRef } = context;

  const handleClick = () => {
    ReactGA.event({
      category: "Resume",
      action: "Downloaded the Resume",
    });
    window.open(resumelink, "_blank");
  };

  const summary = useBreakpointValue({
    base: true,
    sm: false,
  });

  return (
    <>
      <Flex ref={AboutRef} transition={"500ms"} direction={"column"} w={"100%"} minH={"100vh"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Flex>
          <Heading transition={"500ms"} color={"textPrimary"} my={"4"} mt={"12"}>
            About&nbsp;
          </Heading>
          <Heading transition={"500ms"} color={"textSecondary"} my={"4"} mt={"12"}>
            Me
          </Heading>
        </Flex>
        <Flex transition={"500ms"} m={"4"} w={{ base: "100%", sm: "90%", md: "80%", lg: "80%" }} justifyContent={"center"} alignItems={"center"}>
          <Flex
            transition={"500ms"}
            direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
            justifyContent={"center"}
            m={"1"}
            gap={1}
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <Flex flex={2} w={"100%"} justifyContent={"center"}>
              <Flex borderRadius={"50%"} border={"8px dotted"} borderColor={"textPrimary"}>
                <Image transition={"500ms"} borderRadius={"50%"} w={{ base: "250px", sm: "300px", md: "500px" }} src={ProfilePicBlue} />
              </Flex>
            </Flex>
            <Flex flex={5} alignSelf={"center"} direction={"column"}>
              <Text transition={"500ms"} as={"b"} fontSize={"md"} textAlign={"left"} color={"textPrimary"} mx={["2", "8"]}>
                {summary ? (
                  <List spacing={3} my={"5"}>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="textPrimary" />A Full Stack Developer.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="textPrimary" />
                      With a diverse skill set.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="textPrimary" />
                      Passion for solving problems.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="textPrimary" />
                      Collaborates well with teams.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="textPrimary" />
                      Deliver Quality products.
                    </ListItem>
                  </List>
                ) : (
                  "A Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, Can develop robust and efficient products. Keep up with the latest advancements in the field, and work well with teams to deliver the best possible results."
                )}
              </Text>
              <a href={resumeDownload} onClick={handleClick}>
                <Button
                  ml={"8"}
                  my={"4"}
                  bgColor={"buttonBg"}
                  color={"buttonText"}
                  boxShadow={"2xl"}
                  border={"3px solid"}
                  borderColor={"buttonBorder"}
                  p={"6"}
                  fontSize={"xl"}
                  _hover={{ bgColor: "buttonBgHover", color: "buttonTextHover" }}
                >
                  Resume
                </Button>
              </a>
            </Flex>
          </Flex>
        </Flex>
        <Grid
          color={"textPrimary"}
          width={"100%"}
          placeContent={"center"}
          gridGap={["2", "8", "12"]}
          templateColumns={["repeat(2,140px)", "repeat(2,140px)", "repeat(2,200px)", "repeat(4,200px)"]}
        >
          <Flex
            direction={"column"}
            bgColor={"cardBg"}
            borderRadius={"25px"}
            boxShadow={"lg"}
            p={["4", "4", "8"]}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"3"}
            textAlign={"center"}
            transition={"500ms"}
            _hover={{ boxShadow: "xl", borderTop: "5px solid", borderTopColor: "heartColor" }}
          >
            <Text as={"b"} fontSize={"30px"}>
              <BsCodeSlash />
            </Text>
            <Heading>1400+</Heading>
            <Text as={"b"} fontSize={"md"}>
              Hours of Coding
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            bgColor={"cardBg"}
            borderRadius={"25px"}
            boxShadow={"lg"}
            p={["4", "4", "8"]}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"3"}
            textAlign={"center"}
            transition={"500ms"}
            _hover={{ boxShadow: "xl", borderTop: "5px solid", borderTopColor: "heartColor" }}
          >
            <Text as={"b"} fontSize={"30px"}>
              <MdOutlineWbSunny />
            </Text>
            <Heading>800+</Heading>
            <Text as={"b"} fontSize={"md"}>
              DSA Problems
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            bgColor={"cardBg"}
            borderRadius={"25px"}
            boxShadow={"lg"}
            p={["4", "4", "8"]}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"3"}
            textAlign={"center"}
            transition={"500ms"}
            _hover={{ boxShadow: "xl", borderTop: "5px solid", borderTopColor: "heartColor" }}
          >
            <Text as={"b"} fontSize={"30px"}>
              <RiPagesFill />
            </Text>
            <Heading>6+</Heading>
            <Text as={"b"} fontSize={"md"}>
              Ongoing Projects
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            bgColor={"cardBg"}
            borderRadius={"25px"}
            boxShadow={"lg"}
            p={["4", "4", "8"]}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"3"}
            textAlign={"center"}
            transition={"500ms"}
            _hover={{ boxShadow: "xl", borderTop: "5px solid", borderTopColor: "heartColor" }}
          >
            <Text as={"b"} fontSize={"30px"}>
              <SiGithub />
            </Text>
            <Heading>750+</Heading>
            <Text as={"b"} fontSize={"md"}>
              Github Contributions
            </Text>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default About;
