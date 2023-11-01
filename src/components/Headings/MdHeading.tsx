import { Flex, Highlight, Text } from "@chakra-ui/react";
import { HeadingProps } from "../../TYPES";
import { polishAnim } from "../../animations/NavbarAnimations";
import { fadeTop } from "../../animations/FadeAnimations";

const MdHeading = ({ title1, title2 }: HeadingProps) => {
  return (
    <Flex>
      <Text
        fontFamily={"Poppins"}
        fontSize={["36px", "38px", "42px", "48px", "58px"]}
        fontWeight={["500", "600"]}
        transition={"500ms"}
        color={"#006aff"}
        my={"4"}
        cursor={"pointer"}
        rounded={"full"}
        animation={`${fadeTop} 1s cubic-bezier(1, 0.5, 0.25, 0.125) forwards `}
        _active={{ transform: "translateY(-20px)", animation: `${polishAnim} 100ms` }}
      >
        <Highlight query={title2} styles={{ color: "#fff" }}>
          {`${title1} ${title2}`}
        </Highlight>
      </Text>
    </Flex>
  );
};

export default MdHeading;
