import { Flex, Highlight, Text } from "@chakra-ui/react";
import { HeadingProps } from "../../TYPES";
import { fadeTop } from "../../animations/FadeAnimations";
import { ScalePing } from "../../animations/ScaleAnimations";
import { RefObject, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObs";

const MdHeading = ({ title1, title2 }: HeadingProps) => {
  const animRef: RefObject<HTMLParagraphElement> = useRef(null);
  const isIntersecting = useIntersectionObserver(animRef);
  return (
    <Flex>
      <Text
        fontFamily={"Poppins"}
        fontSize={["36px", "38px", "42px", "48px", "58px"]}
        fontWeight={["500", "600"]}
        transition={"500ms"}
        color={"accent"}
        my={"4"}
        ref={animRef}
        cursor={"pointer"}
        rounded={"full"}
        animation={isIntersecting ? `${fadeTop} 1s ease-in forwards` : "none"}
        _active={{ transform: "translateY(-20px)", animation: isIntersecting ? `${ScalePing} 1s ease-in-out` : "none" }}
      >
        <Highlight query={title2} styles={{ color: "text" }}>
          {`${title1} ${title2}`}
        </Highlight>
      </Text>
    </Flex>
  );
};

export default MdHeading;
