import { Flex, Text } from "@chakra-ui/react";
import { HeadingProps } from "../../TYPES";
import { fadeLeft, fadeRight } from "../../animations/FadeAnimations";

const BigHeading = ({ title1, title2 }: HeadingProps) => {
  return (
    <Flex direction={{ base: "column", sm: "row" }}>
      <Text
        fontFamily={"Poppins"}
        cursor={"pointer"}
        fontWeight={600}
        transition={"500ms"}
        opacity={0}
        animation={`${fadeLeft} 1s ease-out forwards`}
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
        animation={`${fadeRight} 1s ease-out 500ms forwards`}
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
