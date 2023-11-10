import { Flex, Image } from "@chakra-ui/react";
import ProfileImage from "../../assets/images/user-no-bg.png";

const ProfilePic = () => {
  return (
    <Flex overflow={"hidden"}>
      <Image
        rounded={["full", "full", "md"]}
        pos={["absolute", "absolute", "static"]}
        w={["130px", "130px", "auto"]}
        border={"2px solid #006aff00"}
        borderX={["2px solid #006aff", "2px solid #006aff", "none"]}
        top={"0%"}
        left={"50%"}
        transition={"400ms"}
        zIndex={5}
        transform={[
          "translate(-50%,-50%)",
          "translate(-50%,-50%)",
          "translate(0%,0%)",
        ]}
        bgColor={["#4a4a4a", "#4a4a4a", "#4a4a4a77"]}
        src={ProfileImage}
        alt={"Image of Full Stack Web Developer, Sayyed Sharuk"}
      />
    </Flex>
  );
};

export default ProfilePic;
