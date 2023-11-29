import { Flex, Image } from "@chakra-ui/react";
import ProfileImage from "../../assets/images/user-no-bg.png";

const ProfilePic = () => {
  return (
    <Flex overflow={"hidden"}>
      <Image
        rounded={["full", "full", "md"]}
        pos={["absolute", "absolute", "static"]}
        w={["130px", "130px", "auto"]}
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
        opacity={[1, 1, 0.7]}
        src={ProfileImage}
        alt={"Image of Full Stack Web Developer, Sayyed Sharuk"}
      />
    </Flex>
  );
};

export default ProfilePic;
