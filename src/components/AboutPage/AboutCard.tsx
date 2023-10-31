import { Flex } from "@chakra-ui/react";
import ProfilePic from "./ProfilePic";
import DescAboutPage from "./DescAboutPage";
import ContributionList from "./ContributionList";

const AboutCard = () => {
  return (
    <Flex
      rounded={"md"}
      shadow={"xl"}
      bgColor={"#3a3a3a"}
      pos={"relative"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      minW={"240px"}
      direction={["column", "row"]}
      w={"100%"}
      maxW={"1000px"}
      mt={"60px"}
      gap={"16px"}
      border={"2px solid #006aff00"}
      borderTop={["2px solid #006aff", "2px solid #006aff00"]}
    >
      <ProfilePic />
      <Flex p={4} direction={["column"]}>
        <DescAboutPage />
        <ContributionList />
      </Flex>
      <Flex w={"80px"} display={["none", "flex"]} h={"50px"} rounded={"md"} bgColor={"#4a4a4a77"} pos={"absolute"} top={"-35px"} right={"-35px"}></Flex>
      <Flex w={"80px"} display={["none", "flex"]} h={"50px"} rounded={"md"} bgColor={"#4a4a4a77"} pos={"absolute"} bottom={"-15px"} right={"60px"}></Flex>
      <Flex w={"80px"} display={["none", "flex"]} h={"50px"} rounded={"md"} bgColor={"#4a4a4a77"} pos={"absolute"} bottom={"35px"} left={"280px"}></Flex>
      <Flex w={"80px"} display={["none", "flex"]} h={"50px"} rounded={"md"} bgColor={"#4a4a4a77"} pos={"absolute"} top={"15px"} left={"-40px"}></Flex>
    </Flex>
  );
};

export default AboutCard;
