import { Flex, Highlight, Text } from "@chakra-ui/react";
import { HeadingProps } from "../../TYPES";
import { fadeTop } from "../../animations/FadeAnimations";
import { ScalePing } from "../../animations/ScaleAnimations";

const SmHeading = ({ title1, title2 }: HeadingProps) => {
  return (
    <Flex>
      <Text
        fontFamily={"Poppins"}
        fontSize={["12px", "14px", "16px", "16px", "18px"]}
        fontWeight={["300", "400", "500"]}
        transition={"500ms"}
        color={"#006aff"}
        cursor={"pointer"}
        rounded={"full"}
        animation={`${fadeTop} 1s ease-in forwards `}
        _active={{ transform: "translateY(-20px)", animation: `${ScalePing} 1s ease-in-out` }}
      >
        <Highlight query={title2} styles={{ color: "#fff" }}>
          {`${title1} ${title2}`}
        </Highlight>
      </Text>
    </Flex>
  );
};

export default SmHeading;
