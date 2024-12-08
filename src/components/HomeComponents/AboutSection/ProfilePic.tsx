import { Flex, Image } from "@chakra-ui/react";
import picRed from "@/assets/images/pic-red.png";
import picYellow from "@/assets/images/pic-yellow.png";
import picGreen from "@/assets/images/pic-green.png";
import picViolet from "@/assets/images/pic-violet.png";
import picOrange from "@/assets/images/pic-orange.png";
import picBlue from "@/assets/images/pic-blue.png";
import { useContext } from "react";
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
    <Flex overflow={"hidden"} minW={["180px", "240px", "320px"]} maxW={["180px", "240px", "240px"]}>
      <Image src={pictureGenerator()} alt={"Image of Full Stack Web Developer, Sayyed Sharuk"} />
    </Flex>
  );
};

export default ProfilePic;
