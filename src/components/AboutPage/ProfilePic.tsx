import { Flex, Image } from "@chakra-ui/react";
import { ProfilePicBlue } from "../../sources/Images";

const ProfilePic = () => {
  return (
    <Flex>
      <Image
        rounded={["full", "md"]}
        pos={["absolute", "static"]}
        w={["130px", "auto"]}
        borderX={["2px solid #006aff", "none"]}
        top={"0px"}
        left={"50%"}
        transform={["translate(-50%,-50%)"]}
        bgColor={["#4a4a4a", "#4a4a4a77"]}
        src={ProfilePicBlue}
        alt={"Image of Full Stack Web Developer, Sayyed Sharuk"}
      />
    </Flex>
  );
};

export default ProfilePic;
