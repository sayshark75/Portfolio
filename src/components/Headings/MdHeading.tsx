import { Flex, Heading, Highlight } from "@chakra-ui/react";
import { HeadingProps } from "../../TYPES";
import { polishAnim } from "../../animations/NavbarAnimations";

const MdHeading = ({ title1, title2 }: HeadingProps) => {
  return (
    <Flex>
      <Heading transition={"500ms"} color={"#006aff"} my={"4"} mt={"12"} cursor={"pointer"} _active={{ transform: "translateY(-20px)", animation: `${polishAnim} 100ms` }}>
        <Highlight query={title2} styles={{ color: "#fff" }}>
          {`${title1} ${title2}`}
        </Highlight>
      </Heading>
    </Flex>
  );
};

export default MdHeading;
