import { Flex, Highlight, Text } from "@chakra-ui/react";
import { HeadingProps } from "../../TYPES";
import { fadeTop } from "../../animations/FadeAnimations";
import { ScalePing } from "../../animations/ScaleAnimations";

const SmHeading = ({ title1, title2 }: HeadingProps) => {
  return (
    <Flex>
      <Text
        fontFamily={"Poppins"}
        fontSize={["14px", "14px", "16px", "16px", "18px"]}
        fontWeight={["500", "400", "500"]}
        transition={"500ms"}
        color={"accent"}
        cursor={"pointer"}
        rounded={"full"}
        animation={`${fadeTop} 500ms ease forwards `}
        _active={{ transform: "translateY(-20px)", animation: `${ScalePing} 500ms ease` }}
      >
        <Highlight query={title2} styles={{ color: "text" }}>
          {`${title1} ${title2}`}
        </Highlight>
      </Text>
    </Flex>
  );
};

export default SmHeading;
