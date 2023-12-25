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
    <Flex overflow={"hidden"}>
      <Image
        rounded={["full"]}
        pos={["absolute", "absolute", "static"]}
        w={["130px", "130px", "480px"]}
        border={"2px solid"}
        borderColor={"transparent"}
        borderX={["2px solid", "2px solid", "none"]}
        borderLeftColor={["accent", "accent", "none"]}
        borderRightColor={["accent", "accent", "none"]}
        top={"0%"}
        left={"50%"}
        transition={"400ms"}
        zIndex={5}
        transform={["translate(-50%,-50%)", "translate(-50%,-50%)", "translate(0%,0%)"]}
        bgColor={["primaryLighter", "primaryLighter", "primaryLighter"]}
        opacity={[1, 1, 1]}
        src={pictureGenerator()}
        alt={"Image of Full Stack Web Developer, Sayyed Sharuk"}
      />
    </Flex>
  );
};

export default ProfilePic;
