import { Box, Flex } from "@chakra-ui/react";
import ProfilePic from "./ProfilePic";
import DescAboutPage from "./DescAboutPage";
import ContributionList from "./ContributionList";
import ResumeButton from "./ResumeButton";
import MdHeading from "../Headings/MdHeading";
import AboutCardRefWrapper from "./AboutCardRefWrapper";

const AboutCard = () => {
  return (
    <Box w={"100%"} bgColor={"white"} overflow={"hidden"}>
      <AboutCardRefWrapper>
        {/* Heading */}
        <MdHeading title1="About" title2="Me" />
        {/* My About Card */}
        <Flex
          rounded={"md"}
          bgColor={"transparent"}
          pos={"relative"}
          justifyContent={"center"}
          alignItems={{ base: "center", md: "flex-end" }}
          minW={"240px"}
          direction={{ base: "column", md: "row" }}
          w={{ base: "100%", xl: "70%" }}
          maxW={"1240px"}
          gap={"16px"}
          border={"2px solid"}
          borderColor={"transparent"}
        >
          <ProfilePic />
          <Flex p={4} direction={"column"} gap={4} justifyContent={"flex-start"} alignItems={{ base: "stretch", md: "flex-start" }}>
            <DescAboutPage />
            <ContributionList />
            <ResumeButton />
          </Flex>
        </Flex>
      </AboutCardRefWrapper>
    </Box>
  );
};

export default AboutCard;
