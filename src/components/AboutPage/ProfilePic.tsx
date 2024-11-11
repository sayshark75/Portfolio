import { Flex, Image } from "@chakra-ui/react";
import picRed from "../../assets/images/pic-red.png";
import picYellow from "../../assets/images/pic-yellow.png";
import picGreen from "../../assets/images/pic-green.png";
import picViolet from "../../assets/images/pic-violet.png";
import picOrange from "../../assets/images/pic-orange.png";
import picBlue from "../../assets/images/pic-blue.png";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

const ProfilePic = () => {
  const themeData = useContext(ThemeContext);

  if (!themeData) {
    return null;
  }
  const { themeName } = themeData;

  const pictureGenerator: () => string = () => {
    switch (themeName) {
      case "blue": {
        return picBlue;
      }
      case "green": {
        return picGreen;
      }
      case "red": {
        return picRed;
      }
      case "orange": {
        return picOrange;
      }
      case "yellow": {
        return picYellow;
      }
      case "violet": {
        return picViolet;
      }
      default: {
        return picBlue;
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
