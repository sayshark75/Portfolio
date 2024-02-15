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
      <Flex pos={"relative"}>
        <Text
          pos={"relative"}
          zIndex={2}
          fontFamily={"Poppins"}
          cursor={"pointer"}
          fontWeight={600}
          transition={"500ms"}
          opacity={0}
          animation={isIntersecting ? `${fadeLeft} 500ms ease forwards` : "none"}
          fontSize={["34px", "40px", "64px", "86px", "108px"]}
          color={"text"}
          textShadow={["none", "none", "4px 4px 0px #4a4a4a"]}
          letterSpacing={"2px"}
          _hover={{
            color: "primary",
            _after: {
              w: "100%",
              bgColor: "accent",
              left: "0px",
              p: ["3px", "8px"],
              transform: ["skew(2deg,2deg) translateX(-10px)", "skew(4deg,4deg) translateX(-20px)"],
            },
          }}
          _after={{
            w: "0px",
            p: "0px",
            minH: "100%",
            transition: "500ms",
            transform: "none",
            color: "transparent",
            textShadow: "none",
            content: '"."',
            pos: "absolute",
            top: "0px",
            right: "0px",
            zIndex: -1,
          }}
        >
          {title1}&nbsp;
        </Text>
      </Flex>
      <Text
        fontFamily={"Poppins"}
        cursor={"pointer"}
        fontWeight={600}
        opacity={0}
        transition={"500ms"}
        animation={isIntersecting ? `${fadeRight} 500ms ease 500ms forwards` : "none"}
        fontSize={["34px", "40px", "64px", "86px", "108px"]}
        color={"accent"}
        letterSpacing={"2px"}
        textShadow={["none", "none", "4px 4px 0px #fff"]}
      >
        {title2}
      </Text>
    </Flex>
  );
};

export default BigHeading;
