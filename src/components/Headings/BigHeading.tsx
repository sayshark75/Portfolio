import { Flex, Text } from "@chakra-ui/react";
import { HeadingProps } from "../../TYPES";
import { fadeLeft, fadeRight } from "../../animations/FadeAnimations";
import useIntersectionObserver from "../../hooks/useIntersectionObs";
import { RefObject, useRef } from "react";

const BigHeading = ({ title1, title2 }: HeadingProps) => {
  const animRef: RefObject<HTMLDivElement> = useRef(null);
  const isIntersecting = useIntersectionObserver(animRef);
  return (
    <Flex ref={animRef} direction={{ base: "column", sm: "row" }}>
      <Text
        fontFamily={"Poppins"}
        cursor={"pointer"}
        fontWeight={600}
        transition={"500ms"}
        opacity={0}
        animation={isIntersecting ? `${fadeLeft} 1s ease-out forwards` : "none"}
        textShadow={["none", "3px 3px 0px #006aff", "4px 4px 0px #006aff"]}
        fontSize={["34px", "40px", "64px", "86px", "108px"]}
        color={"#fffffd"}
        letterSpacing={"2px"}
      >
        {title1}&nbsp;
      </Text>
      <Text
        fontFamily={"Poppins"}
        cursor={"pointer"}
        fontWeight={600}
        opacity={0}
        transition={"500ms"}
        animation={isIntersecting ? `${fadeRight} 1s ease-out 500ms forwards` : "none"}
        textShadow={["none", "3px 3px 0px #fff", "4px 4px 0px #fff"]}
        fontSize={["34px", "40px", "64px", "86px", "108px"]}
        color={"#006aFF"}
        letterSpacing={"2px"}
      >
        {title2}
      </Text>
    </Flex>
  );
};

export default BigHeading;
