"use client";
import { Box, Flex } from "@chakra-ui/react";
import { useScrollContext } from "@/context/ScrollContext";
import BigHeading from "../Headings/BigHeading";
import DescHome from "./DescHome";
import ThemeContainer from "./ThemeContainer";
import IconButtonComp from "./IconButtonComp";
import { SocialButtonsData } from "@/resources/CONSTANTS";
import useWindowSize from "@/hooks/useWindowSize";
import { FaLeaf } from "react-icons/fa6";
import { GiMapleLeaf } from "react-icons/gi";

const HeroSection = () => {
  const { HomeRef } = useScrollContext();
  const { width } = useWindowSize();

  const isMobile = width < 768;

  return (
    <Box w={"100%"} bgColor={"white"} overflow={"hidden"} pos={"relative"} zIndex={1}>
      <Box fontSize={"120px"} color={"accent"} pos={"absolute"} zIndex={1} bottom={"0px"} left={"-20px"} opacity={0.3}>
        <FaLeaf />
      </Box>
      <Box fontSize={"120px"} color={"accent"} pos={"absolute"} zIndex={1} top={"0px"} right={"-20px"} transform={"rotate(180deg)"} opacity={0.3}>
        <FaLeaf />
      </Box>
      <Box fontSize={"120px"} color={"accent"} pos={"absolute"} zIndex={1} bottom={"0px"} right={"-20px"} opacity={0.3}>
        <GiMapleLeaf />
      </Box>
      <Box fontSize={"120px"} color={"accent"} pos={"absolute"} zIndex={1} top={"0px"} left={"-20px"} transform={"rotate(180deg)"} opacity={0.3}>
        <GiMapleLeaf />
      </Box>
      <Flex
        ref={HomeRef}
        transition={"500ms"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        maxW={"1440px"}
        mx={"auto"}
        minH={"100vh"}
        gap={[6, 8]}
        pos={"relative"}
        zIndex={5}
      >
        <BigHeading title1="Hi I'm" title2="Sharuk Sayyed" />
        <Flex w={{ base: "95%", sm: "90%", md: "85%", lg: "70%" }}>
          <DescHome />
        </Flex>
        <ThemeContainer />

        <Flex mb={"12"} mx={"2"} gap={["2", "3"]}>
          {SocialButtonsData.map((info, index) => {
            const shouldRender = isMobile || !["Email", "Phone"].includes(info.label);
            return shouldRender ? <IconButtonComp key={`social-button-key-${index}`} {...info} /> : null;
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeroSection;
