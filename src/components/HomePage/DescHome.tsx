import { Text } from "@chakra-ui/react";
import { fadeTop } from "../../animations/FadeAnimations";
import { RefObject, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObs";

const DescHome = () => {
  const animRef: RefObject<HTMLDivElement> = useRef(null);
  const isIntersecting = useIntersectionObserver(animRef);
  return (
    <Text
      as={"b"}
      ref={animRef}
      transition={"500ms"}
      color={"#FFFFFF"}
      fontWeight={400}
      fontFamily={"Poppins"}
      textAlign={"justify"}
      fontSize={["12px", "14px", "16px", "18px"]}
      m={["4", "8"]}
      letterSpacing={"2px"}
      animation={isIntersecting ? `${fadeTop} 1s ease-out forwards` : "none"}
    >
      A Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, Can
      develop robust and efficient products. Keep up with the latest advancements in the field, and work well with teams to deliver the best
      possible results.
    </Text>
  );
};

export default DescHome;
