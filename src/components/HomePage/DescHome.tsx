import { Text } from "@chakra-ui/react";
import { fadeTop } from "../../animations/FadeAnimations";

const DescHome = () => {
  return (
    <Text
      as={"b"}
      transition={"500ms"}
      color={"#FFFFFF"}
      fontWeight={400}
      fontFamily={"Poppins"}
      textAlign={"justify"}
      fontSize={["12px", "14px", "16px", "18px"]}
      m={["4", "8"]}
      letterSpacing={"2px"}
      animation={`${fadeTop} 1s ease-out forwards`}
    >
      A Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, Can develop robust and efficient products.
      Keep up with the latest advancements in the field, and work well with teams to deliver the best possible results.
    </Text>
  );
};

export default DescHome;
