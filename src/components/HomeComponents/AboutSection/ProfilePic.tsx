"use client";
import { Box, Flex, Image } from "@chakra-ui/react";
import picRed from "@/assets/images/pic-red.png";
import picYellow from "@/assets/images/pic-yellow.png";
import picGreen from "@/assets/images/pic-green.png";
import picViolet from "@/assets/images/pic-violet.png";
import picOrange from "@/assets/images/pic-orange.png";
import picBlue from "@/assets/images/pic-blue.png";
import { useCustomTheme } from "@/context/ThemeProvider";

const ProfilePic = () => {
  const { currentColor } = useCustomTheme();

  const pictureGenerator: () => string = () => {
    switch (currentColor) {
      case "blue": {
        return picBlue.src;
      }
      case "green": {
        return picGreen.src;
      }
      case "red": {
        return picRed.src;
      }
      case "orange": {
        return picOrange.src;
      }
      case "yellow": {
        return picYellow.src;
      }
      case "violet": {
        return picViolet.src;
      }
      default: {
        return picBlue.src;
      }
    }
  };

  return (
    <Flex minW={{ base: "180px", sm: "240px", md: "320px" }} maxW={{ base: "180px", sm: "240px", md: "240px" }} pos={"relative"}>
      <Box w={"100%"} h={"1px"} bgColor={"darker"} pos={"absolute"} bottom={0} left={0}></Box>
      <Image src={pictureGenerator()} loading="eager" alt={"A person with specs and a blue professional coat with tie, smiling."} />
    </Flex>
  );
};

export default ProfilePic;
