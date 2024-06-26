import { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import { ScrollContext } from "../../contexts/ScrollContext";
import MdHeading from "../../components/Headings/MdHeading";
import AboutCard from "../../components/AboutPage/AboutCard";

const About = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    return;
  }
  const { AboutRef } = context;

  return (
    <>
      <Flex
        ref={AboutRef}
        transition={"500ms"}
        direction={"column"}
        w={"100%"}
        px={3}
        minH={"70vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Heading */}
        <MdHeading title1="About" title2="Me" />
        {/* My About Card */}
        <AboutCard />
      </Flex>
    </>
  );
};

export default About;
