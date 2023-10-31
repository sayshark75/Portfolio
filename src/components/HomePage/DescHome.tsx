import { Text } from "@chakra-ui/react";
import { TSAnimBlueSmall } from "../../animations/HomeAnimations";

const DescHome = () => {
  return (
    <Text
      as={"b"}
      transition={"500ms"}
      color={"#FFFFFF"}
      fontWeight={400}
      fontFamily={"Poppins"}
      textAlign={"justify"}
      fontSize={["12px", "14px"]}
      textShadow={"2px 2px 0px #006aff"}
      m={["4", "8"]}
      letterSpacing={"2px"}
      animation={`${TSAnimBlueSmall} 1s ease-out forwards`}
    >
      A Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, Can develop robust and efficient products.
      Keep up with the latest advancements in the field, and work well with teams to deliver the best possible results.
    </Text>
  );
};

export default DescHome;
