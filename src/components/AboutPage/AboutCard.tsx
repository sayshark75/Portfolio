import { Flex } from "@chakra-ui/react";
import ProfilePic from "./ProfilePic";
import DescAboutPage from "./DescAboutPage";
import ContributionList from "./ContributionList";
import { fadeBottom } from "../../animations/FadeAnimations";
import ResumeButton from "./ResumeButton";
import { RefObject, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObs";

const AboutCard = () => {
  const animRef: RefObject<HTMLDivElement> = useRef(null);
  const isIntersecting = useIntersectionObserver(animRef);
  return (
    <Flex
      rounded={"md"}
      ref={animRef}
      bgColor={"transparent"}
      pos={"relative"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      opacity={0}
      animation={isIntersecting ? `${fadeBottom} 1s ease-in forwards` : "none"}
      minW={"240px"}
      direction={["column", "column", "row"]}
      w={"100%"}
      maxW={{ lg: "900px", xl: "1000px" }}
      mt={"60px"}
      gap={"16px"}
      border={"2px solid"}
      borderColor={["transparent"]}
      borderTop={["2px solid", "2px solid", "2px solid"]}
      borderTopColor={["accent", "accent", "transparent"]}
    >
      <ProfilePic />
      <Flex p={4} direction={["column"]} gap={4} justifyContent={"flex-start"} alignItems={["stretch", "stretch", "flex-start"]}>
        <DescAboutPage />
        <ContributionList />
        <ResumeButton />
      </Flex>
      {/* Floaters */}
      <Flex
        w={"80px"}
        display={["flex", "flex", "flex"]}
        h={"50px"}
        rounded={"md"}
        bgColor={"primaryLighter"}
        opacity={"0.4"}
        pos={"absolute"}
        transition={"400ms"}
        top={["-35px", "-35px", "-13%", "-35px"]}
        right={["25px", "25px", "10%", "-35px"]}
      ></Flex>
      <Flex
        w={"80px"}
        display={["flex", "flex", "flex"]}
        h={"50px"}
        rounded={"md"}
        bgColor={"primaryLighter"}
        opacity={"0.4"}
        pos={"absolute"}
        transition={"400ms"}
        bottom={["93%", "90%", "-4%", "-15px"]}
        right={["60%", "80%", "86%", "60px"]}
      ></Flex>
      <Flex
        w={"80px"}
        display={["none", "none", "flex"]}
        h={"50px"}
        rounded={"md"}
        bgColor={"primaryLighter"}
        opacity={"0.4"}
        pos={"absolute"}
        transition={"400ms"}
        bottom={["35px", "35px", "-20%", "-35px", "-25"]}
        left={["280px", "280px", "58%", "58px", "28px"]}
      ></Flex>
      <Flex
        w={"80px"}
        display={["none", "none", "flex"]}
        h={"50px"}
        rounded={"md"}
        bgColor={"primaryLighter"}
        opacity={"0.4"}
        transition={"400ms"}
        pos={"absolute"}
        top={["15px", "15px", "-35%", "15px", "15px"]}
        left={["-40px", "-40px", "20%", "-40px", "-40px"]}
      ></Flex>
    </Flex>
  );
};

export default AboutCard;
